const LEVELS = ['error', 'warn', 'info', 'debug'];
const LEVEL_REG = /^\s*(?:\[)?(ERROR|WARN|WARNING|INFO|DEBUG)(?:\])?[\s:-]/i;
const ISO_TIME_REG = /^\d{4}-\d{2}-\d{2}[T ]\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:?\d{2})?/;
const SIMPLE_TIME_REG = /^\d{2}:\d{2}:\d{2}(?:\.\d+)?/;
const DATE_KEYS = ['createdAt', 'created_at', 'createDate', 'create_date', 'createdDate', 'creationDate', 'date', 'timestamp', 'time', 'actionTime'];

export function normalizeLevel(level) {
  const l = (level || '').toLowerCase();
  if (l === 'warning') return 'warn';
  if (LEVELS.includes(l)) return l;
  return 'info';
}

export function parseLine(raw) {
  const levelMatch = (typeof raw === 'string' ? raw : raw?.raw || '').match(LEVEL_REG);
  let level = levelMatch ? normalizeLevel(levelMatch[1]) : 'info';
  let time = '';
  let msg = raw;
  if (typeof raw !== 'string') raw = raw?.raw || '';
  const isoMatch = raw.match(ISO_TIME_REG);
  if (isoMatch) {
    time = isoMatch[0];
    msg = raw.slice(isoMatch[0].length).replace(/^\s*[\[\-]\s*/, '').trim();
  } else {
    const simpleMatch = raw.match(SIMPLE_TIME_REG);
    if (simpleMatch) {
      time = simpleMatch[0];
      msg = raw.slice(simpleMatch[0].length).replace(/^\s+/, '');
    }
  }
  if (levelMatch && !time) msg = raw.replace(LEVEL_REG, '').trim();
  return { raw, level, time, msg };
}

export function getEntrySortTime(entry) {
  let t = entry.time || entry.createdAt || '';
  if ((!t || t === '') && entry.raw && typeof entry.raw === 'object') {
    const raw = entry.raw;
    const data = raw.data != null ? raw.data : raw;
    for (const key of DATE_KEYS) {
      const v = data[key] ?? raw[key];
      if (v !== undefined && v !== null && v !== '') {
        t = v;
        break;
      }
    }
  }
  if (t === '' || t == null) return 0;
  if (typeof t === 'number') return t < 1e13 ? t * 1000 : t;
  const ms = new Date(String(t)).getTime();
  return isNaN(ms) ? 0 : ms;
}

export function sortEntriesNewestFirst(entries) {
  return [...entries].sort((a, b) => getEntrySortTime(b) - getEntrySortTime(a));
}

export function getTableEntryValue(entry, column) {
  if (column === 'time') return getEntrySortTime(entry);
  if (column === 'user') return (entry.user || '').toLowerCase();
  if (column === 'feature') return (entry.feature || '').toLowerCase();
  if (column === 'type') return (entry.type || '').toLowerCase();
  if (column === 'scan') return (entry.scanResult?.summary ?? '').toLowerCase();
  if (column === 'actor') return (entry.actor || '').toLowerCase();
  if (column === 'eventCategory') return (entry.eventCategory || '').toLowerCase();
  if (column === 'event') return (entry.event || '').toLowerCase();
  if (column === 'object') return (entry.object || '').toLowerCase();
  if (column === 'action') return (entry.action || '').toLowerCase();
  if (column === 'name') return (entry.name || '').toLowerCase();
  if (column === 'actionType') return (entry.actionType || '').toLowerCase();
  return '';
}

export function getSortedTableEntries(entries, sortColumn, sortDirection) {
  const dir = sortDirection === 'desc' ? -1 : 1;
  const withIndex = entries.map((entry, index) => ({ entry, index }));
  withIndex.sort((a, b) => {
    const va = getTableEntryValue(a.entry, sortColumn);
    const vb = getTableEntryValue(b.entry, sortColumn);
    const cmp = typeof va === 'number' && typeof vb === 'number'
      ? va - vb
      : String(va).localeCompare(String(vb), undefined, { numeric: true });
    return cmp * dir;
  });
  return withIndex;
}

export function parseMiroItem(item) {
  const data = item && typeof item === 'object' && item.data != null ? item.data : item;
  if (typeof data !== 'object' || data === null) {
    return { time: '', user: '', feature: '', type: String(item) };
  }
  let timeRaw = '';
  for (const key of DATE_KEYS) {
    const v = data[key];
    if (v !== undefined && v !== null && v !== '') {
      timeRaw = v;
      break;
    }
  }
  const time = timeRaw !== '' ? String(timeRaw) : '';
  const user = (data.actor && data.actor.name != null) ? String(data.actor.name) : '';
  const feature = data.aiFeatureName != null ? String(data.aiFeatureName) : '';
  const type = data.logType != null ? String(data.logType) : '';
  return { time, user, feature, type };
}

/** Get session id from an AI interaction log entry (from raw payload). */
export function getEntrySessionId(entry) {
  if (!entry?.raw || typeof entry.raw !== 'object') return null;
  const raw = entry.raw;
  const data = raw.data != null ? raw.data : raw;
  const id = data.sessionId ?? data.session_id ?? raw.sessionId ?? raw.session_id;
  return id != null && id !== '' ? String(id) : null;
}

/** Get actor email from an AI interaction log entry (from raw.payload.data.actor.email). */
export function getEntryActorEmail(entry) {
  if (!entry?.raw || typeof entry.raw !== 'object') return null;
  const raw = entry.raw;
  const data = raw.data != null ? raw.data : raw;
  const actor = data.actor;
  const email = actor && typeof actor === 'object' && actor.email != null ? String(actor.email).trim() : '';
  return email !== '' ? email : null;
}

/** Get actor name from an AI interaction log entry (from raw.data.actor.name or entry.user). */
export function getEntryActorName(entry) {
  if (!entry) return '';
  if (entry.raw && typeof entry.raw === 'object') {
    const data = entry.raw.data != null ? entry.raw.data : entry.raw;
    const actor = data.actor;
    if (actor && typeof actor === 'object' && actor.name != null) return String(actor.name).trim();
  }
  return (entry.user && String(entry.user).trim()) || '';
}

/** Strip trailing "chat" line from API payload (e.g. logType appended to content). */
function stripTrailingChatLine(s) {
  if (typeof s !== 'string') return s;
  const t = s.trimEnd();
  if (t.endsWith('\nchat') || t.endsWith('\r\nchat')) return t.slice(0, t.length - (t.endsWith('\r\nchat') ? 6 : 5)).trimEnd();
  if (t === 'chat') return '';
  return s;
}

/**
 * Extract messages from a single entry's raw data. Tries multiple common payload shapes.
 * Returns array of { role, content, time, actorName }.
 */
function extractMessagesFromEntry(entry, timeMs) {
  const data = entry.raw?.data != null ? entry.raw.data : entry.raw;
  if (!data || typeof data !== 'object') return [];
  const out = [];
  const t = timeMs;
  const actorName = entry.type === 'response' ? 'Sidekick' : getEntryActorName(entry);

  if (Array.isArray(data.messages)) {
    for (const m of data.messages) {
      const role = (m.role || 'user').toLowerCase();
      const content = stripTrailingChatLine(m.content ?? m.text ?? '');
      if (String(content).trim()) out.push({ role, content: String(content).trim(), time: t, actorName });
    }
    if (out.length) return out;
  }

  const prompt = data.prompt ?? data.details?.prompt ?? data.input;
  const response = data.response ?? data.details?.response ?? data.output;
  if (prompt != null) {
    const c = stripTrailingChatLine(String(prompt)).trim();
    if (c) out.push({ role: 'user', content: c, time: t, actorName });
  }
  if (response != null) {
    const c = stripTrailingChatLine(String(response)).trim();
    if (c) out.push({ role: 'assistant', content: c, time: t, actorName });
  }
  if (out.length) return out;

  const text = data.text ?? data.details?.text ?? data.content ?? data.body;
  if (text != null) {
    const c = stripTrailingChatLine(String(text)).trim();
    if (c) out.push({ role: 'user', content: c, time: t, actorName });
  }
  if (out.length) return out;

  const fallback = getTextToScan(entry);
  if (fallback) {
    const c = stripTrailingChatLine(fallback).trim();
    if (c) out.push({ role: 'user', content: c, time: t, actorName });
  }
  return out;
}

/**
 * Build ordered list of conversation messages from log entries with the same actor.email and session id.
 * Always includes selectedEntry so at least the current log item's content is shown.
 */
export function getConversationMessages(logEntries, actorEmail, sessionId, selectedEntry = null) {
  const normEmail = actorEmail != null ? String(actorEmail).trim() : '';
  const normSid = sessionId != null ? String(sessionId) : '';
  if (!selectedEntry && !normEmail && !normSid) return [];

  const entries =
    normEmail || normSid
      ? (logEntries || []).filter((e) => {
          const email = getEntryActorEmail(e);
          const sid = getEntrySessionId(e);
          const eEmail = email != null ? String(email).trim() : '';
          const eSid = sid != null ? String(sid) : '';
          const matchEmail = !normEmail || eEmail === normEmail;
          const matchSid = !normSid || eSid === normSid;
          return matchEmail && matchSid;
        })
      : [];

  const alreadyIncluded = selectedEntry && entries.some((e) => e === selectedEntry || e.raw === selectedEntry?.raw);
  const toProcess = selectedEntry && !alreadyIncluded ? [selectedEntry, ...entries] : entries;
  const byTime = [...toProcess].sort((a, b) => getEntrySortTime(a) - getEntrySortTime(b));

  const out = [];
  const seen = new Set();
  for (const entry of byTime) {
    const time = entry.time || getEntrySortTime(entry);
    const t = typeof time === 'number' ? time : new Date(String(time)).getTime();
    const msgs = extractMessagesFromEntry(entry, t);
    for (const m of msgs) {
      const key = `${t}-${m.role}-${m.content.slice(0, 50)}`;
      if (seen.has(key)) continue;
      seen.add(key);
      out.push(m);
    }
  }
  return out;
}

export function parseAuditItem(item) {
  const data = item && typeof item === 'object' && item.data != null ? item.data : item;
  if (typeof data !== 'object' || data === null) {
    return { time: '', actor: '', eventCategory: '', event: '', object: String(item) };
  }
  let timeRaw = '';
  for (const key of DATE_KEYS) {
    const v = data[key];
    if (v !== undefined && v !== null && v !== '') {
      timeRaw = v;
      break;
    }
  }
  const time = timeRaw !== '' ? String(timeRaw) : '';
  const createdBy = data.createdBy ?? data.actor;
  const actor = (createdBy && (createdBy.email != null || createdBy.name != null))
    ? String(createdBy.email ?? createdBy.name ?? createdBy.id ?? '')
    : '';
  const eventCategory = data.category != null ? String(data.category) : '';
  const event = data.event != null ? String(data.event) : '';
  const obj = data.object && typeof data.object === 'object' && data.object.name != null
    ? String(data.object.name)
    : (data.objectName != null ? String(data.objectName) : '');
  return { time, actor, eventCategory, event, object: obj };
}

export function parseContentLogItem(item) {
  const data = item && typeof item === 'object' && item.data != null ? item.data : item;
  if (typeof data !== 'object' || data === null) {
    return { time: '', actor: '', actionType: '', type: String(item) };
  }
  const timeRaw = data.actionTime != null && data.actionTime !== '' ? data.actionTime : '';
  const time = timeRaw !== '' ? String(timeRaw) : '';
  const actor = (data.actor && (data.actor.email != null || data.actor.name != null))
    ? String(data.actor.email ?? data.actor.name ?? data.actor.id ?? '')
    : '';
  const actionType = data.actionType != null ? String(data.actionType) : '';
  const stateObj = data.state && typeof data.state === 'object' ? data.state : null;
  const type = stateObj != null && stateObj.type != null ? String(stateObj.type) : '';
  return { time, actor, actionType, type };
}

export function flattenForSidebar(obj, prefix = '') {
  const pairs = [];
  if (obj === null || obj === undefined) {
    pairs.push({ key: prefix || 'value', value: String(obj) });
    return pairs;
  }
  if (Array.isArray(obj)) {
    pairs.push({ key: prefix || 'value', value: JSON.stringify(obj) });
    return pairs;
  }
  if (typeof obj === 'object' && obj !== null) {
    for (const key of Object.keys(obj)) {
      const fullKey = prefix ? `${prefix}.${key}` : key;
      const val = obj[key];
      if (val !== null && typeof val === 'object' && !Array.isArray(val) && Object.getPrototypeOf(val) === Object.prototype) {
        pairs.push(...flattenForSidebar(val, fullKey));
      } else {
        pairs.push({ key: fullKey, value: val === undefined || val === null ? '' : String(val) });
      }
    }
  }
  return pairs;
}

export function getTextToScan(entry) {
  if (!entry) return '';
  if (entry.raw && typeof entry.raw === 'object') {
    const raw = entry.raw;
    const data = raw.data != null ? raw.data : raw;
    const parts = [];
    if (data.prompt) parts.push(String(data.prompt));
    if (data.response) parts.push(String(data.response));
    if (data.text) parts.push(String(data.text));
    if (data.details?.text) parts.push(String(data.details.text));
    if (parts.length) return parts.join('\n');
    return JSON.stringify(data, null, 2);
  }
  return [entry.time, entry.user, entry.feature, entry.type, entry.msg].filter(Boolean).join(' ');
}

export async function callLLM(apiKey, text) {
  const res = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + apiKey,
    },
    body: JSON.stringify({
      model: 'gpt-4o-mini',
      messages: [{ role: 'user', content: `Identify any sensitive data (PII, secrets, keys) in this text. Reply with a JSON array of strings, one per finding, or [] if none.\n\n${text.slice(0, 8000)}` }],
      max_tokens: 500,
    }),
  });
  const data = await res.json();
  if (data.error) throw new Error(data.error.message || JSON.stringify(data.error));
  return data.choices?.[0]?.message?.content ?? '';
}

export function parseScanResponse(content) {
  const found = [];
  let summary = 'No issues found';
  try {
    const trimmed = (content || '').trim();
    const jsonMatch = trimmed.match(/\[[\s\S]*\]/);
    if (jsonMatch) {
      const arr = JSON.parse(jsonMatch[0]);
      if (Array.isArray(arr)) found.push(...arr.filter((x) => typeof x === 'string'));
    }
    if (found.length) summary = found.join('; ');
  } catch (_) {
    summary = content?.slice(0, 100) || 'Parse error';
  }
  return { found, summary, raw: content };
}

export function toISOUTC(d) {
  return d.toISOString();
}

export function escapeHtml(s) {
  const div = document.createElement('div');
  div.textContent = s;
  return div.innerHTML;
}
