import React, { useState, useEffect } from 'react';
import { Button, IconButton, Flex, Text } from '@mirohq/design-system';
import { IconCross } from '@mirohq/design-system-icons';
import { flattenForSidebar, getEntrySessionId, getEntryActorEmail, getConversationMessages } from '../utils/logUtils.js';

export default function Sidebar({ isOpen, onClose, entryIndex, entry, logEntries = [], viewMode, sensitiveScanEnabled, activeLogTab }) {
  const [showConversationView, setShowConversationView] = useState(false);

  useEffect(() => {
    setShowConversationView(false);
  }, [entryIndex, entry?.raw]);

  if (!isOpen) return null;

  const raw = entry?.raw;
  const flat = raw != null && typeof raw === 'object' ? flattenForSidebar(raw) : entry ? flattenForSidebar(entry) : [];
  const isAiInteraction = activeLogTab === 'ai-interaction';
  const sessionId = entry ? getEntrySessionId(entry) : null;
  const actorEmail = entry ? getEntryActorEmail(entry) : null;
  const feature = entry?.feature ?? '';
  const canViewConversation = isAiInteraction && entry &&
    (feature === 'miro_ai_sidekicks_chat' || feature.includes('sidekicks'));
  const conversationMessages = canViewConversation
    ? getConversationMessages(logEntries, actorEmail, sessionId, entry)
    : [];

  const handleBackToEntry = () => setShowConversationView(false);

  if (entry && showConversationView && canViewConversation) {
    return (
      <aside className={`sidebar ${isOpen ? 'sidebar-open' : ''}`} aria-hidden={!isOpen}>
        <div className="sidebar-inner">
          <Flex justify="space-between" align="center" className="sidebar-header">
            <Text as="h2" size="large" weight="bold">
              Messages
            </Text>
            <IconButton aria-label="Close" variant="ghost" size="large" onPress={onClose}>
              <IconCross />
            </IconButton>
          </Flex>
          <div className="sidebar-body">
            <Button variant="secondary" size="medium" onPress={handleBackToEntry} css={{ marginBottom: '1rem' }}>
              Back to log entry
            </Button>
            {conversationMessages.length === 0 ? (
              <p className="sidebar-conversation-empty">No messages found for this session.</p>
            ) : (
              <div className="sidebar-conversation">
                {conversationMessages.map((msg, i) => {
                  const timeStr = msg.time != null && !Number.isNaN(Number(msg.time))
                    ? new Date(Number(msg.time)).toLocaleString(undefined, { dateStyle: 'short', timeStyle: 'short' })
                    : '';
                  return (
                    <div key={i} className={`sidebar-conversation-message sidebar-conversation-message--${msg.role}`}>
                      <div className="sidebar-conversation-meta">
                        {timeStr && <span className="sidebar-conversation-time">{timeStr}</span>}
                        {msg.actorName && <span className="sidebar-conversation-actor">{msg.actorName}</span>}
                      </div>
                      <div className="sidebar-conversation-content">{msg.content}</div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </aside>
    );
  }

  return (
    <aside className={`sidebar ${isOpen ? 'sidebar-open' : ''}`} aria-hidden={!isOpen}>
      <div className="sidebar-inner">
        <Flex justify="space-between" align="center" className="sidebar-header">
          <Text as="h2" size="large" weight="bold">
            Log entry {entryIndex != null ? entryIndex + 1 : ''}
          </Text>
          <IconButton aria-label="Close" variant="ghost" size="large" onPress={onClose}>
            <IconCross />
          </IconButton>
        </Flex>
        <div className="sidebar-body">
          {entry && (
            <>
              {canViewConversation && (
                <div className="sidebar-section">
                  <Button variant="secondary" size="medium" onPress={() => setShowConversationView(true)}>
                    View conversation
                  </Button>
                </div>
              )}
              {viewMode === 'columns' && (
                <div className="sidebar-section">
                  <Text as="p" size="small" weight="bold" color="secondary" className="sidebar-section-title">Details</Text>
                  <dl className="sidebar-key-value-list">
                    <React.Fragment>
                      <dt className="sidebar-key">Time</dt>
                      <dd className="sidebar-value">{entry.time ?? '—'}</dd>
                    </React.Fragment>
                    {entry.user != null && (
                      <>
                        <dt className="sidebar-key">User</dt>
                        <dd className="sidebar-value">{entry.user}</dd>
                      </>
                    )}
                    {entry.feature != null && (
                      <>
                        <dt className="sidebar-key">Feature</dt>
                        <dd className="sidebar-value">{entry.feature}</dd>
                      </>
                    )}
                    {entry.actor != null && (
                      <>
                        <dt className="sidebar-key">Actor</dt>
                        <dd className="sidebar-value">{entry.actor}</dd>
                      </>
                    )}
                    {entry.type != null && (
                      <>
                        <dt className="sidebar-key">Type</dt>
                        <dd className="sidebar-value">{entry.type}</dd>
                      </>
                    )}
                  </dl>
                </div>
              )}
              {flat.length > 0 && (
                <div className="sidebar-section">
                  <Text as="p" size="small" weight="bold" color="secondary" className="sidebar-section-title">Raw data</Text>
                  <dl className="sidebar-key-value-list sidebar-raw-list">
                    {flat.map(({ key, value }) => (
                      <React.Fragment key={key}>
                        <dt className="sidebar-key">{key}</dt>
                        <dd className="sidebar-value">{value}</dd>
                      </React.Fragment>
                    ))}
                  </dl>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </aside>
  );
}
