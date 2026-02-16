import React from 'react';
import { Button, IconButton, Flex, Text } from '@mirohq/design-system';
import { IconCross } from '@mirohq/design-system-icons';
import { flattenForSidebar } from '../utils/logUtils.js';

export default function Sidebar({ isOpen, onClose, view, setView, entryIndex, entry, logEntries = [], viewMode, sensitiveScanEnabled }) {
  if (!isOpen) return null;

  const raw = entry?.raw;
  const flat = raw != null && typeof raw === 'object' ? flattenForSidebar(raw) : entry ? flattenForSidebar(entry) : [];

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
              <div className="sidebar-meta">
                {viewMode === 'columns' && (
                  <p>
                    <strong>Time:</strong> {entry.time || '—'}<br />
                    {entry.user != null && <><strong>User:</strong> {entry.user}<br /></>}
                    {entry.feature != null && <><strong>Feature:</strong> {entry.feature}<br /></>}
                    {entry.actor != null && <><strong>Actor:</strong> {entry.actor}<br /></>}
                    {entry.type != null && <><strong>Type:</strong> {entry.type}</>}
                  </p>
                )}
              </div>
              {flat.length > 0 && (
                <div className="sidebar-raw">
                  <Text as="p" size="small" weight="bold" color="secondary">Raw data</Text>
                  <pre className="sidebar-raw-json">
                    {flat.map(({ key, value }) => (
                      <div key={key} className="sidebar-raw-row">
                        <span className="sidebar-raw-key">{key}:</span>
                        <span className="sidebar-raw-value">{value}</span>
                      </div>
                    ))}
                  </pre>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </aside>
  );
}
