import React from 'react';
import { Flex, Button, Select, IconButton, Form, InputPassword } from '@mirohq/design-system';
import { IconMagnifyingGlassPlus, IconMagnifyingGlassMinus } from '@mirohq/design-system-icons';

const PX_PER_MINUTE = 8;
const MIN_ENTRY_GAP_PX = 24;
const ZOOM_MIN = 0.25;
const ZOOM_MAX = 4;
const ZOOM_STEP = 0.25;
const SOURCE_LABELS = { audit: 'Audit', content: 'Content', ai: 'AI' };

function formatTime(timeStr) {
  if (!timeStr) return '—';
  const d = new Date(timeStr);
  if (Number.isNaN(d.getTime())) return timeStr;
  return d.toLocaleString(undefined, { dateStyle: 'short', timeStyle: 'short' });
}

export default function Timeline({
  fetchAllLogs,
  fetchAllLogsLoading,
  allActors,
  selectedActor,
  onActorChange,
  onBuildTimeline,
  timelineEntries = [],
  llmApiKey = '',
  onLlmApiKeyChange,
}) {
  const hasActor = (selectedActor || '').trim() !== '';
  const [zoom, setZoom] = React.useState(1);
  const viewportRef = React.useRef(null);

  const { baseHeight, minTs, spanMs } = React.useMemo(() => {
    if (timelineEntries.length === 0) return { baseHeight: 0, minTs: 0, spanMs: 1 };
    const min = Math.min(...timelineEntries.map((e) => e.timestamp));
    const max = Math.max(...timelineEntries.map((e) => e.timestamp));
    const span = max - min;
    const spanMinutes = Math.max(span / (60 * 1000), 0.1);
    const timeBasedHeight = Math.round(spanMinutes * PX_PER_MINUTE);
    const minHeight = timelineEntries.length * MIN_ENTRY_GAP_PX;
    const totalHeight = Math.max(timeBasedHeight, minHeight);
    return { baseHeight: totalHeight, minTs: min, spanMs: span || 1 };
  }, [timelineEntries]);

  const scaledHeight = Math.round(baseHeight * zoom);
  const zoomIn = () => setZoom((z) => Math.min(ZOOM_MAX, z + ZOOM_STEP));
  const zoomOut = () => setZoom((z) => Math.max(ZOOM_MIN, z - ZOOM_STEP));
  const zoomReset = () => setZoom(1);

  return (
    <>
      <Flex className="toolbar timeline-toolbar" wrap="wrap" align="center" gap={100} css={{ width: '100%', padding: '0.75rem 0' }}>
        <Button variant="primary" size="large" onPress={fetchAllLogs} disabled={fetchAllLogsLoading}>
          {fetchAllLogsLoading ? 'Fetching…' : 'Fetch all logs'}
        </Button>
        <Form.Field css={{ marginBottom: 0 }}>
          <Form.Label>OpenAI API key</Form.Label>
          <InputPassword
            value={llmApiKey}
            onChange={(e) => onLlmApiKeyChange?.(e.target.value)}
            placeholder="OpenAI or compatible API key"
            revealLabel="Show"
            hideLabel="Hide"
            size="large"
            css={{ minWidth: '240px' }}
          />
        </Form.Field>
        <Flex align="center" gap={50}>
          <label className="column-filter-label" htmlFor="timeline-actor" style={{ fontSize: '12px', color: 'var(--text-muted)', whiteSpace: 'nowrap' }}>
            Actor
          </label>
          <Select
            value={selectedActor === '' ? undefined : selectedActor}
            onValueChange={(v) => onActorChange(v === '__all__' || v == null ? '' : v)}
            css={{ width: '14rem', minWidth: '12rem' }}
          >
            <Select.Trigger id="timeline-actor" size="large" aria-label="Filter timeline by actor">
              <Select.Value placeholder="All actors" />
            </Select.Trigger>
            <Select.Portal>
              <Select.Content>
                <Select.Item value="__all__" textValue="All actors">All actors</Select.Item>
                {allActors.map((actor) => (
                  <Select.Item key={actor} value={actor}>{actor}</Select.Item>
                ))}
              </Select.Content>
            </Select.Portal>
          </Select>
        </Flex>
        {hasActor && (
          <Button variant="secondary" size="large" onPress={onBuildTimeline}>
            Build timeline
          </Button>
        )}
        {timelineEntries.length > 0 && (
          <Flex align="center" gap={50} className="timeline-zoom-controls">
            <span className="column-filter-label" style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Zoom</span>
            <IconButton aria-label="Zoom out" variant="ghost" size="medium" onPress={zoomOut} isDisabled={zoom <= ZOOM_MIN}>
              <IconMagnifyingGlassMinus />
            </IconButton>
            <button type="button" className="api-input timeline-zoom-value" style={{ minWidth: '3rem' }}>{zoom}x</button>
            <IconButton aria-label="Zoom in" variant="ghost" size="medium" onPress={zoomIn} isDisabled={zoom >= ZOOM_MAX}>
              <IconMagnifyingGlassPlus />
            </IconButton>
            <Button variant="secondary" size="small" onPress={zoomReset}>Reset</Button>
          </Flex>
        )}
      </Flex>
      <div ref={viewportRef} className="log-viewport timeline-viewport">
        {timelineEntries.length === 0 ? (
          <div className="empty-state">
            <p><strong>Timeline (experimental)</strong></p>
            <p className="hint">Click "Fetch all logs" to load audit, content, and AI interaction logs. Select an actor and click "Build timeline" to see events over time.</p>
          </div>
        ) : (
          <div className="timeline-strip" style={{ height: scaledHeight }}>
            {timelineEntries.map((entry, i) => {
              const pct = spanMs ? ((entry.timestamp - minTs) / spanMs) * 100 : 0;
              return (
                <div
                  key={i}
                  className="timeline-entry"
                  style={{ top: `${pct}%` }}
                >
                  <div className="timeline-entry-card">
                    <span className="timeline-entry-time" style={{ flexShrink: 0, color: 'var(--text-muted)', fontVariantNumeric: 'tabular-nums' }}>
                      {formatTime(entry.time)}
                    </span>
                    <span className="timeline-entry-source" style={{ fontSize: '11px', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
                      {SOURCE_LABELS[entry.source] ?? entry.source}
                    </span>
                    <span className="timeline-entry-label" style={{ color: 'var(--text)', wordBreak: 'break-word' }}>
                      {entry.label || entry.type || entry.event || '—'}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}
