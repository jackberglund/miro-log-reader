import React, { useRef, useEffect } from 'react';
import { escapeHtml } from '../utils/logUtils.js';

const DEFAULT_TABLE_COLUMNS = [
  { key: 'time', label: 'Time' },
  { key: 'user', label: 'User' },
  { key: 'feature', label: 'Feature' },
  { key: 'type', label: 'Type' },
];

export default function LogViewport({
  viewMode,
  visibleRows,
  hasLogs,
  searchQuery,
  tableSortColumn,
  tableSortDirection,
  onSort,
  onEntryClick,
  autoscroll,
  sensitiveScanEnabled,
  tableColumns,
}) {
  const viewportRef = useRef(null);
  const query = (searchQuery || '').trim().toLowerCase();
  const columns = tableColumns ?? DEFAULT_TABLE_COLUMNS;
  const columnsWithScan = (tableColumns == null && sensitiveScanEnabled)
    ? [...columns, { key: 'scan', label: 'Sensitive data' }]
    : columns;

  useEffect(() => {
    if (autoscroll && viewportRef.current) {
      viewportRef.current.scrollTop = viewMode === 'columns' ? 0 : viewportRef.current.scrollHeight;
    }
  }, [visibleRows?.length, autoscroll, viewMode]);

  if (!visibleRows || visibleRows.length === 0) {
    return (
      <div className="log-viewport" ref={viewportRef} id="viewport">
        <div className="log-list" id="log-list">
          <div className="empty-state">
            {hasLogs ? (
              <>
                <p>No logs match the current filters.</p>
                <p className="hint">Try changing the search or filter selections.</p>
              </>
            ) : (
              <>
                <p>No logs to display.</p>
                <p className="hint">Load a log file or click "Fetch logs" to get started.</p>
              </>
            )}
          </div>
        </div>
      </div>
    );
  }

  if (viewMode === 'columns') {
    return (
      <div className="log-viewport" ref={viewportRef} id="viewport">
        <div className="log-list" id="log-list">
          <table className="log-table">
            <thead>
              <tr>
                {columnsWithScan.map(({ key, label }) => {
                  const active = tableSortColumn === key ? ` sort-${tableSortDirection}` : '';
                  return (
                    <th
                      key={key}
                      className={`log-table-sortable log-col-${key}${active}`}
                      data-sort={key}
                      role="button"
                      tabIndex={0}
                      onClick={() => onSort(key)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          onSort(key);
                        }
                      }}
                    >
                      {label}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {visibleRows.map(({ entry, originalIndex }) => {
                const hasFindings = sensitiveScanEnabled && entry.scanResult?.found?.length > 0;
                const scanCls = 'log-col-scan' + (hasFindings ? ' log-col-scan-has-findings' : '');
                const msg = columnsWithScan
                  .map(({ key }) => (key === 'scan' ? entry.scanResult?.summary ?? '' : entry[key] ?? ''))
                  .join(' ')
                  .toLowerCase();
                const highlight = !!query && msg.includes(query);
                return (
                  <tr
                    key={originalIndex}
                    className={`log-row ${highlight ? 'highlight' : ''}`}
                    data-line={String(originalIndex + 1)}
                    role="button"
                    tabIndex={0}
                    onClick={() => onEntryClick(originalIndex)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        onEntryClick(originalIndex);
                      }
                    }}
                  >
                    {columnsWithScan.map(({ key }) => {
                      if (key === 'scan') {
                        return (
                          <td key={key} className={scanCls} title={entry.scanResult?.summary ?? ''}>
                            {entry.scanResult?.summary ?? '—'}
                          </td>
                        );
                      }
                      const val = entry[key] ?? '';
                      return (
                        <td key={key} className={`log-col-${key}`}>
                          {escapeHtml(String(val))}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  return (
    <div className="log-viewport" ref={viewportRef} id="viewport">
      <div className="log-list" id="log-list">
        {visibleRows.map(({ entry, originalIndex }, i) => {
          const msg = (entry.msg || entry.raw || '').toString().toLowerCase();
          const highlight = !!query && msg.includes(query);
          return (
            <div
              key={originalIndex}
              className={`log-line level-${entry.level || 'info'} ${highlight ? 'highlight' : ''}`}
              data-line={String(originalIndex + 1)}
              role="button"
              tabIndex={0}
              onClick={() => onEntryClick(originalIndex)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onEntryClick(originalIndex);
                }
              }}
            >
              <span className="log-num">{i + 1}</span>
              <span className={`log-level ${entry.level || 'info'}`}>{escapeHtml(entry.level || 'info')}</span>
              {entry.time && <span className="log-time">{escapeHtml(entry.time)}</span>}
              <span className="log-msg">{escapeHtml(entry.msg || (typeof entry.raw === 'string' ? entry.raw : JSON.stringify(entry.raw)))}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
