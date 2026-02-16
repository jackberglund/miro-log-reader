import React, { useState, useEffect, useCallback } from 'react';
import Header from './components/Header.jsx';
import Toolbar from './components/Toolbar.jsx';
import LogViewport from './components/LogViewport.jsx';
import Footer from './components/Footer.jsx';
import Sidebar from './components/Sidebar.jsx';
import Timeline from './components/Timeline.jsx';
import {
  parseLine,
  sortEntriesNewestFirst,
  getSortedTableEntries,
  parseMiroItem,
  parseAuditItem,
  parseContentLogItem,
  getTextToScan,
  callLLM,
  parseScanResponse,
  toISOUTC,
} from './utils/logUtils.js';

const AUDIT_TABLE_COLUMNS = [
  { key: 'time', label: 'Time' },
  { key: 'actor', label: 'Actor' },
  { key: 'eventCategory', label: 'Event category' },
  { key: 'event', label: 'Event' },
  { key: 'object', label: 'Object' },
];
const AUDIT_FILTER_FIELDS = [
  { key: 'actor', label: 'Actor', optionsKey: 'actors' },
  { key: 'eventCategory', label: 'Event category', optionsKey: 'eventCategories' },
  { key: 'event', label: 'Event', optionsKey: 'events' },
  { key: 'object', label: 'Object', optionsKey: 'objects' },
];

const CONTENT_TABLE_COLUMNS = [
  { key: 'time', label: 'Time' },
  { key: 'actor', label: 'Actor' },
  { key: 'actionType', label: 'Action type' },
  { key: 'type', label: 'Type' },
];
const CONTENT_FILTER_FIELDS = [
  { key: 'actor', label: 'Actor', optionsKey: 'actors' },
  { key: 'actionType', label: 'Action type', optionsKey: 'actionTypes' },
  { key: 'type', label: 'Type', optionsKey: 'types' },
];

const defaultDateFrom = () => {
  const to = new Date();
  const from = new Date(to);
  from.setDate(from.getDate() - 30);
  const pad = (n) => String(n).padStart(2, '0');
  return `${from.getFullYear()}-${pad(from.getMonth() + 1)}-${pad(from.getDate())}T${pad(from.getHours())}:${pad(from.getMinutes())}`;
};
const defaultDateTo = () => {
  const d = new Date();
  const pad = (n) => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`;
};

export default function App() {
  const sensitiveScanEnabled = new URLSearchParams(window.location.search).get('sensitive_scan') === 'true';

  const [logEntries, setLogEntries] = useState([]);
  const [viewMode, setViewMode] = useState('lines');
  const [tableSortColumn, setTableSortColumn] = useState('time');
  const [tableSortDirection, setTableSortDirection] = useState('desc');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterValue, setFilterValue] = useState({ user: '', feature: '', type: '' });
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarEntryIndex, setSidebarEntryIndex] = useState(null);
  const [autoscroll, setAutoscroll] = useState(true);
  const [orgId, setOrgId] = useState(() => new URLSearchParams(window.location.search).get('org_id') ?? '');
  const [dateFrom, setDateFrom] = useState(() => defaultDateFrom());
  const [dateTo, setDateTo] = useState(() => defaultDateTo());
  const [apiToken, setApiToken] = useState(() => new URLSearchParams(window.location.search).get('access_token') ?? '');
  const [llmApiKey, setLlmApiKey] = useState('');
  const [scanStatus, setScanStatus] = useState('');
  const [fetchLoading, setFetchLoading] = useState(false);
  const [fetchAllLogsLoading, setFetchAllLogsLoading] = useState(false);
  const [activeLogTab, setActiveLogTab] = useState('audit');
  const [auditLogEntries, setAuditLogEntries] = useState([]);
  const [auditTableSortColumn, setAuditTableSortColumn] = useState('time');
  const [auditTableSortDirection, setAuditTableSortDirection] = useState('desc');
  const [auditFilterValue, setAuditFilterValue] = useState({ actor: '', eventCategory: '', event: '', object: '' });
  const [contentLogEntries, setContentLogEntries] = useState([]);
  const [contentTableSortColumn, setContentTableSortColumn] = useState('time');
  const [contentTableSortDirection, setContentTableSortDirection] = useState('desc');
  const [contentFilterValue, setContentFilterValue] = useState({ actor: '', actionType: '', type: '' });
  const [timelineSelectedActor, setTimelineSelectedActor] = useState('');
  const [timelineEntries, setTimelineEntries] = useState([]);

  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape' && sidebarOpen) setSidebarOpen(false);
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [sidebarOpen]);

  const sortedTableEntries = viewMode === 'columns' ? getSortedTableEntries(logEntries, tableSortColumn, tableSortDirection) : [];
  const auditSortedTableEntries = getSortedTableEntries(auditLogEntries, auditTableSortColumn, auditTableSortDirection);
  const contentSortedTableEntries = getSortedTableEntries(contentLogEntries, contentTableSortColumn, contentTableSortDirection);

  const query = searchQuery.trim().toLowerCase();
  const filterUser = filterValue.user || '';
  const filterFeature = filterValue.feature || '';
  const filterType = filterValue.type || '';

  const matchEntry = useCallback((entry, isColumn) => {
    const msg = isColumn
      ? [entry.time, entry.user, entry.feature, entry.type, entry.scanResult?.summary ?? ''].join(' ').toLowerCase()
      : (entry.msg || entry.raw || '').toString().toLowerCase();
    const matchSearch = !query || (msg && msg.includes(query));
    const matchUser = !filterUser || (entry.user || '') === filterUser;
    const matchFeature = !filterFeature || (entry.feature || '') === filterFeature;
    const matchType = !filterType || (entry.type || '') === filterType;
    return matchSearch && matchUser && matchFeature && matchType;
  }, [query, filterUser, filterFeature, filterType]);

  const visibleRows = (() => {
    if (logEntries.length === 0) return [];
    if (viewMode === 'columns') {
      return sortedTableEntries.map(({ entry, index }) => ({ entry, originalIndex: index })).filter(({ entry }) => matchEntry(entry, true));
    }
    return logEntries.map((entry, index) => ({ entry, originalIndex: index })).filter(({ entry }) => matchEntry(entry, false));
  })();

  const totalRows = viewMode === 'columns' ? sortedTableEntries.length : logEntries.length;
  const visibleCount = visibleRows.length;
  const hasActiveFilters = !!query || !!filterUser || !!filterFeature || !!filterType;

  const filterOptions = viewMode === 'columns' ? {
    users: [...new Set(logEntries.map((e) => e.user || '').filter(Boolean))].sort(),
    features: [...new Set(logEntries.map((e) => e.feature || '').filter(Boolean))].sort(),
    types: [...new Set(logEntries.map((e) => e.type || '').filter(Boolean))].sort(),
  } : { users: [], features: [], types: [] };

  const auditFilterOptions = {
    actors: [...new Set(auditLogEntries.map((e) => e.actor || '').filter(Boolean))].sort(),
    eventCategories: [...new Set(auditLogEntries.map((e) => e.eventCategory || '').filter(Boolean))].sort(),
    events: [...new Set(auditLogEntries.map((e) => e.event || '').filter(Boolean))].sort(),
    objects: [...new Set(auditLogEntries.map((e) => e.object || '').filter(Boolean))].sort(),
  };
  const matchEntryAudit = useCallback((entry) => {
    const msg = [entry.time, entry.actor, entry.eventCategory, entry.event, entry.object].join(' ').toLowerCase();
    const matchSearch = !query || (msg && msg.includes(query));
    const matchActor = !auditFilterValue.actor || (entry.actor || '') === auditFilterValue.actor;
    const matchCategory = !auditFilterValue.eventCategory || (entry.eventCategory || '') === auditFilterValue.eventCategory;
    const matchEvent = !auditFilterValue.event || (entry.event || '') === auditFilterValue.event;
    const matchObject = !auditFilterValue.object || (entry.object || '') === auditFilterValue.object;
    return matchSearch && matchActor && matchCategory && matchEvent && matchObject;
  }, [query, auditFilterValue]);
  const auditVisibleRows = auditLogEntries.length === 0 ? [] : auditSortedTableEntries
    .map(({ entry, index }) => ({ entry, originalIndex: index }))
    .filter(({ entry }) => matchEntryAudit(entry));
  const auditTotalRows = auditLogEntries.length;
  const auditVisibleCount = auditVisibleRows.length;
  const auditHasActiveFilters = !!query || !!auditFilterValue.actor || !!auditFilterValue.eventCategory || !!auditFilterValue.event || !!auditFilterValue.object;

  const contentFilterOptions = {
    actors: [...new Set(contentLogEntries.map((e) => e.actor || '').filter(Boolean))].sort(),
    actionTypes: [...new Set(contentLogEntries.map((e) => e.actionType || '').filter(Boolean))].sort(),
    types: [...new Set(contentLogEntries.map((e) => e.type || '').filter(Boolean))].sort(),
  };
  const matchEntryContent = useCallback((entry) => {
    const msg = [entry.time, entry.actor, entry.actionType, entry.type].join(' ').toLowerCase();
    const matchSearch = !query || (msg && msg.includes(query));
    const matchActor = !contentFilterValue.actor || (entry.actor || '') === contentFilterValue.actor;
    const matchActionType = !contentFilterValue.actionType || (entry.actionType || '') === contentFilterValue.actionType;
    const matchType = !contentFilterValue.type || (entry.type || '') === contentFilterValue.type;
    return matchSearch && matchActor && matchActionType && matchType;
  }, [query, contentFilterValue]);
  const contentVisibleRows = contentLogEntries.length === 0 ? [] : contentSortedTableEntries
    .map(({ entry, index }) => ({ entry, originalIndex: index }))
    .filter(({ entry }) => matchEntryContent(entry));
  const contentTotalRows = contentLogEntries.length;
  const contentVisibleCount = contentVisibleRows.length;
  const contentHasActiveFilters = !!query || !!contentFilterValue.actor || !!contentFilterValue.actionType || !!contentFilterValue.type;

  const loadLines = useCallback((lines) => {
    const entries = sortEntriesNewestFirst(lines.map((line) => parseLine(typeof line === 'string' ? line : line?.raw ?? '')));
    setLogEntries(entries);
    setViewMode('lines');
  }, []);

  const loadMiroRows = useCallback((rows) => {
    setLogEntries(sortEntriesNewestFirst(rows));
    setViewMode('columns');
  }, []);

  const fetchMiroLogs = useCallback(async () => {
    const org = orgId.trim();
    if (!org) {
      alert('Please enter an Organization ID.');
      return;
    }
    if (!dateFrom || !dateTo) {
      alert('Please select both From and To dates.');
      return;
    }
    const from = toISOUTC(new Date(dateFrom));
    const to = toISOUTC(new Date(dateTo));
    const url = `https://api.miro.com/v2/orgs/${encodeURIComponent(org)}/ai-interaction-logs?from=${encodeURIComponent(from)}&to=${encodeURIComponent(to)}`;
    const headers = { Accept: 'application/json' };
    if (apiToken.trim()) headers['Authorization'] = apiToken.trim().startsWith('Bearer ') ? apiToken.trim() : `Bearer ${apiToken.trim()}`;
    setFetchLoading(true);
    try {
      const res = await fetch(url, { headers });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        loadLines([`[ERROR] ${res.status} ${res.statusText}: ${data.message || data.error || JSON.stringify(data)}`]);
        return;
      }
      const items = data.data ?? (Array.isArray(data) ? data : [data]);
      if (items.length === 0) {
        loadLines(['[INFO] No log entries returned for the selected range.']);
        return;
      }
      loadMiroRows(items.map((item) => ({ ...parseMiroItem(item), raw: item })));
    } catch (err) {
      loadLines([`[ERROR] Request failed: ${err.message}`]);
    } finally {
      setFetchLoading(false);
    }
  }, [orgId, dateFrom, dateTo, apiToken, loadLines, loadMiroRows]);

  const fetchAuditLogs = useCallback(async () => {
    if (!dateFrom || !dateTo) {
      alert('Please select both From and To dates.');
      return;
    }
    const from = new Date(dateFrom).toISOString();
    const to = new Date(dateTo).toISOString();
    const url = `https://api.miro.com/v2/audit/logs?createdAfter=${encodeURIComponent(from)}&createdBefore=${encodeURIComponent(to)}`;
    const headers = { Accept: 'application/json' };
    if (apiToken.trim()) headers['Authorization'] = apiToken.trim().startsWith('Bearer ') ? apiToken.trim() : `Bearer ${apiToken.trim()}`;
    setFetchLoading(true);
    try {
      const res = await fetch(url, { headers });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setAuditLogEntries([{ time: new Date().toISOString(), actor: '', eventCategory: 'Error', event: String(res.status), object: data.message || data.error || JSON.stringify(data), raw: data }]);
        setFetchLoading(false);
        return;
      }
      const items = data.data ?? data.items ?? (Array.isArray(data) ? data : [data]);
      if (!Array.isArray(items) || items.length === 0) {
        setAuditLogEntries([]);
        setFetchLoading(false);
        return;
      }
      setAuditLogEntries(sortEntriesNewestFirst(items.map((item) => ({ ...parseAuditItem(item), raw: item }))));
    } catch (err) {
      setAuditLogEntries([{ time: new Date().toISOString(), actor: '', eventCategory: 'Error', event: 'Request failed', object: err.message, raw: err }]);
    } finally {
      setFetchLoading(false);
    }
  }, [dateFrom, dateTo, apiToken]);

  const fetchContentLogs = useCallback(async () => {
    const org = orgId.trim();
    if (!org) {
      alert('Please enter an Organization ID.');
      return;
    }
    if (!dateFrom || !dateTo) {
      alert('Please select both From and To dates.');
      return;
    }
    const from = toISOUTC(new Date(dateFrom));
    const to = toISOUTC(new Date(dateTo));
    const url = `https://api.miro.com/v2/orgs/${encodeURIComponent(org)}/content-logs/items?from=${encodeURIComponent(from)}&to=${encodeURIComponent(to)}`;
    const headers = { Accept: 'application/json' };
    if (apiToken.trim()) headers['Authorization'] = apiToken.trim().startsWith('Bearer ') ? apiToken.trim() : `Bearer ${apiToken.trim()}`;
    setFetchLoading(true);
    try {
      const res = await fetch(url, { headers });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setContentLogEntries([{ time: new Date().toISOString(), actor: '', actionType: 'Error', type: String(res.status), raw: data }]);
        setFetchLoading(false);
        return;
      }
      const items = data.data ?? data.items ?? (Array.isArray(data) ? data : [data]);
      if (!Array.isArray(items) || items.length === 0) {
        setContentLogEntries([]);
        setFetchLoading(false);
        return;
      }
      setContentLogEntries(sortEntriesNewestFirst(items.map((item) => ({ ...parseContentLogItem(item), raw: item }))));
    } catch (err) {
      setContentLogEntries([{ time: new Date().toISOString(), actor: '', actionType: 'Request failed', type: '', raw: err }]);
    } finally {
      setFetchLoading(false);
    }
  }, [orgId, dateFrom, dateTo, apiToken]);

  const fetchAllLogs = useCallback(async () => {
    setFetchAllLogsLoading(true);
    try {
      await Promise.all([fetchAuditLogs(), fetchContentLogs(), fetchMiroLogs()]);
    } finally {
      setFetchAllLogsLoading(false);
    }
  }, [fetchAuditLogs, fetchContentLogs, fetchMiroLogs]);

  const allTimelineActors = React.useMemo(() => {
    const fromAudit = auditLogEntries.map((e) => e.actor).filter(Boolean);
    const fromContent = contentLogEntries.map((e) => e.actor).filter(Boolean);
    const fromAi = logEntries.map((e) => e.user).filter(Boolean);
    return [...new Set([...fromAudit, ...fromContent, ...fromAi])].sort();
  }, [auditLogEntries, contentLogEntries, logEntries]);

  const buildTimeline = useCallback(() => {
    const actor = (timelineSelectedActor || '').trim();
    const entries = [];
    auditLogEntries.forEach((e) => {
      if (actor && (e.actor || '') !== actor) return;
      const ts = new Date(e.time || 0).getTime();
      if (!Number.isNaN(ts)) entries.push({ ...e, timestamp: ts, source: 'audit', label: e.event || e.eventCategory || e.object });
    });
    contentLogEntries.forEach((e) => {
      if (actor && (e.actor || '') !== actor) return;
      const ts = new Date(e.time || 0).getTime();
      if (!Number.isNaN(ts)) entries.push({ ...e, timestamp: ts, source: 'content', label: e.actionType || e.type });
    });
    logEntries.forEach((e) => {
      if (actor && (e.user || '') !== actor) return;
      const ts = new Date(e.time || 0).getTime();
      if (!Number.isNaN(ts)) entries.push({ ...e, timestamp: ts, source: 'ai', label: e.feature || e.type });
    });
    const combined = entries.sort((a, b) => a.timestamp - b.timestamp);
    setTimelineEntries(combined);
  }, [timelineSelectedActor, auditLogEntries, contentLogEntries, logEntries]);

  const scanLogs = useCallback(async () => {
    if (viewMode !== 'columns' || logEntries.length === 0) {
      alert('Load log data from the API first.');
      return;
    }
    const key = (llmApiKey || '').trim();
    if (!key) {
      alert('Enter an LLM API key (e.g. OpenAI) to scan logs.');
      return;
    }
    const cap = Math.min(logEntries.length, 5);
    const nextEntries = [...logEntries];
    for (let i = 0; i < cap; i++) {
      const text = getTextToScan(nextEntries[i]);
      if (!text?.trim()) {
        nextEntries[i] = { ...nextEntries[i], scanResult: { found: [], summary: 'No content to scan', raw: '' } };
        continue;
      }
      setScanStatus(`Scanning ${i + 1}/${cap}…`);
      try {
        const response = await callLLM(key, text);
        nextEntries[i] = { ...nextEntries[i], scanResult: parseScanResponse(response) };
      } catch (err) {
        nextEntries[i] = { ...nextEntries[i], scanResult: { found: ['Error'], summary: err.message, raw: String(err) } };
      }
    }
    setScanStatus('Done.');
    setTimeout(() => setScanStatus(''), 3000);
    setLogEntries(nextEntries);
  }, [viewMode, logEntries, llmApiKey]);

  const handleSort = useCallback((key) => {
    if (activeLogTab === 'audit') {
      setAuditTableSortColumn((prev) => {
        if (prev === key) {
          setAuditTableSortDirection((d) => (d === 'desc' ? 'asc' : 'desc'));
          return prev;
        }
        setAuditTableSortDirection('asc');
        return key;
      });
    } else if (activeLogTab === 'content') {
      setContentTableSortColumn((prev) => {
        if (prev === key) {
          setContentTableSortDirection((d) => (d === 'desc' ? 'asc' : 'desc'));
          return prev;
        }
        setContentTableSortDirection('asc');
        return key;
      });
    } else {
      setTableSortColumn((prev) => {
        if (prev === key) {
          setTableSortDirection((d) => (d === 'desc' ? 'asc' : 'desc'));
          return prev;
        }
        setTableSortDirection('asc');
        return key;
      });
    }
  }, [activeLogTab]);

  const openSidebar = useCallback((index) => {
    setSidebarEntryIndex(index);
    setSidebarOpen(true);
  }, []);

  const closeSidebar = useCallback(() => setSidebarOpen(false), []);

  const currentLogEntries = activeLogTab === 'audit' ? auditLogEntries : activeLogTab === 'content' ? contentLogEntries : logEntries;
  const currentEntry = sidebarEntryIndex != null && currentLogEntries[sidebarEntryIndex] != null ? currentLogEntries[sidebarEntryIndex] : null;

  const onLoadFile = useCallback((file) => {
    const reader = new FileReader();
    reader.onload = (ev) => {
      const text = ev.target?.result;
      if (typeof text === 'string') loadLines(text.split(/\r?\n/).filter(Boolean));
    };
    reader.readAsText(file);
  }, [loadLines]);

  return (
    <div className="app">
      <header className="header">
        <Header
          orgId={orgId}
          setOrgId={setOrgId}
          dateFrom={dateFrom}
          setDateFrom={setDateFrom}
          dateTo={dateTo}
          setDateTo={setDateTo}
          apiToken={apiToken}
          setApiToken={setApiToken}
          sensitiveScanEnabled={sensitiveScanEnabled}
          llmApiKey={llmApiKey}
          setLlmApiKey={setLlmApiKey}
          scanLogs={scanLogs}
          scanStatus={scanStatus}
          activeLogTab={activeLogTab}
          onLogTabChange={setActiveLogTab}
        />
        {activeLogTab === 'ai-interaction' && (
          <Toolbar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            viewMode={viewMode}
            filterOptions={filterOptions}
            filterValue={filterValue}
            onFilterChange={setFilterValue}
            showFiltersWhenEmpty
            autoscroll={autoscroll}
            setAutoscroll={setAutoscroll}
            onLoadFile={onLoadFile}
            fetchLogs={fetchMiroLogs}
            fetchLoading={fetchLoading}
          />
        )}
        {activeLogTab === 'audit' && (
          <Toolbar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            viewMode="columns"
            filterOptions={auditFilterOptions}
            filterValue={auditFilterValue}
            onFilterChange={setAuditFilterValue}
            filterFields={AUDIT_FILTER_FIELDS}
            autoscroll={autoscroll}
            setAutoscroll={setAutoscroll}
            onLoadFile={onLoadFile}
            fetchLogs={fetchAuditLogs}
            fetchLoading={fetchLoading}
          />
        )}
        {activeLogTab === 'content' && (
          <Toolbar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            viewMode="columns"
            filterOptions={contentFilterOptions}
            filterValue={contentFilterValue}
            onFilterChange={setContentFilterValue}
            filterFields={CONTENT_FILTER_FIELDS}
            autoscroll={autoscroll}
            setAutoscroll={setAutoscroll}
            onLoadFile={onLoadFile}
            fetchLogs={fetchContentLogs}
            fetchLoading={fetchLoading}
          />
        )}
      </header>
      <main className="main">
        {activeLogTab === 'ai-interaction' && (
          <>
            <LogViewport
              viewMode={viewMode}
              visibleRows={visibleRows}
              hasLogs={logEntries.length > 0}
              searchQuery={searchQuery}
              tableSortColumn={tableSortColumn}
              tableSortDirection={tableSortDirection}
              onSort={handleSort}
              onEntryClick={openSidebar}
              autoscroll={autoscroll}
              sensitiveScanEnabled={sensitiveScanEnabled}
            />
            <Footer totalRows={totalRows} visibleCount={visibleCount} hasActiveFilters={hasActiveFilters} />
          </>
        )}
        {activeLogTab === 'audit' && (
          <>
            <LogViewport
              viewMode="columns"
              visibleRows={auditVisibleRows}
              hasLogs={auditLogEntries.length > 0}
              searchQuery={searchQuery}
              tableSortColumn={auditTableSortColumn}
              tableSortDirection={auditTableSortDirection}
              onSort={handleSort}
              onEntryClick={openSidebar}
              autoscroll={autoscroll}
              sensitiveScanEnabled={sensitiveScanEnabled}
              tableColumns={AUDIT_TABLE_COLUMNS}
            />
            <Footer totalRows={auditTotalRows} visibleCount={auditVisibleCount} hasActiveFilters={auditHasActiveFilters} />
          </>
        )}
        {activeLogTab === 'content' && (
          <>
            <LogViewport
              viewMode="columns"
              visibleRows={contentVisibleRows}
              hasLogs={contentLogEntries.length > 0}
              searchQuery={searchQuery}
              tableSortColumn={contentTableSortColumn}
              tableSortDirection={contentTableSortDirection}
              onSort={handleSort}
              onEntryClick={openSidebar}
              autoscroll={autoscroll}
              sensitiveScanEnabled={sensitiveScanEnabled}
              tableColumns={CONTENT_TABLE_COLUMNS}
            />
            <Footer totalRows={contentTotalRows} visibleCount={contentVisibleCount} hasActiveFilters={contentHasActiveFilters} />
          </>
        )}
        {activeLogTab === 'timeline' && (
          <Timeline
            fetchAllLogs={fetchAllLogs}
            fetchAllLogsLoading={fetchAllLogsLoading}
            allActors={allTimelineActors}
            selectedActor={timelineSelectedActor}
            onActorChange={setTimelineSelectedActor}
            onBuildTimeline={buildTimeline}
            timelineEntries={timelineEntries}
            llmApiKey={llmApiKey}
            onLlmApiKeyChange={setLlmApiKey}
          />
        )}
      </main>
      <div className={`sidebar-backdrop ${sidebarOpen ? 'sidebar-backdrop-visible' : ''}`} aria-hidden={!sidebarOpen} onClick={closeSidebar} />
      <Sidebar
        isOpen={sidebarOpen}
        onClose={closeSidebar}
        entryIndex={sidebarEntryIndex}
        entry={currentEntry}
        logEntries={currentLogEntries}
        viewMode={activeLogTab === 'audit' || activeLogTab === 'content' ? 'columns' : viewMode}
        sensitiveScanEnabled={sensitiveScanEnabled}
      />
    </div>
  );
}
