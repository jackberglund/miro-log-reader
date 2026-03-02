import React from 'react';
import {
  Flex,
  Form,
  Input,
  InputPassword,
  Button,
  Heading,
  Tabs,
} from '@mirohq/design-system';

export default function Header({
  orgId,
  setOrgId,
  dateFrom,
  setDateFrom,
  dateTo,
  setDateTo,
  apiToken,
  setApiToken,
  sensitiveScanEnabled,
  llmApiKey,
  setLlmApiKey,
  scanLogs,
  scanStatus,
  activeLogTab,
  onLogTabChange,
}) {
  return (
    <>
      <div className="header-top">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" width="28" height="28" style={{ flexShrink: 0 }}>
          <rect width="32" height="32" rx="6" fill="#1a1a2e"/>
          <path d="M6 11 L11 16 L6 21" stroke="#4ade80" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          <rect x="14" y="10" width="12" height="2" rx="1" fill="#4ade80" opacity="0.9"/>
          <rect x="14" y="15" width="9" height="2" rx="1" fill="#4ade80" opacity="0.6"/>
          <rect x="14" y="20" width="11" height="2" rx="1" fill="#4ade80" opacity="0.6"/>
        </svg>
        <Heading level={1} className="title">Log Reader</Heading>
      </div>
      <Form className="api-section" onSubmit={(e) => e.preventDefault()}>
        <Flex direction="column" gap={100}>
          <Flex wrap="wrap" align="center" gap={100} className="api-row">
            <Form.Field>
              <Form.Label>Organization ID</Form.Label>
              <Input
                id="org-id"
                placeholder="e.g. 12345"
                autoComplete="off"
                value={orgId}
                onChange={(e) => setOrgId(e.target.value)}
                size="large"
                css={{ minWidth: '140px' }}
              />
            </Form.Field>
            <Form.Field>
              <Form.Label>From</Form.Label>
              <Input
                id="date-from"
                type="datetime-local"
                value={dateFrom}
                onChange={(e) => setDateFrom(e.target.value)}
                size="large"
                css={{ minWidth: '180px' }}
              />
            </Form.Field>
            <Form.Field>
              <Form.Label>To</Form.Label>
              <Input
                id="date-to"
                type="datetime-local"
                value={dateTo}
                onChange={(e) => setDateTo(e.target.value)}
                size="large"
                css={{ minWidth: '180px' }}
              />
            </Form.Field>
            <Form.Field>
              <Form.Label>Access token</Form.Label>
              <InputPassword
                value={apiToken}
                onChange={(e) => setApiToken(e.target.value)}
                placeholder="Bearer token for auth"
                revealLabel="Show"
                hideLabel="Hide"
                size="large"
                css={{ minWidth: '280px' }}
              />
            </Form.Field>
          </Flex>
          <div className="log-tabs-wrap">
            <Tabs
              value={activeLogTab}
              onChange={onLogTabChange}
              variant="tabs"
              size="large"
            >
              <Tabs.List>
                <Tabs.Trigger value="audit">Audit Logs</Tabs.Trigger>
                <Tabs.Trigger value="content">Content Logs</Tabs.Trigger>
                <Tabs.Trigger value="ai-interaction">AI Interaction Logs</Tabs.Trigger>
                {/* <Tabs.Trigger value="timeline">Timeline</Tabs.Trigger> */}
              </Tabs.List>
            </Tabs>
          </div>
          {sensitiveScanEnabled && (
            <Flex wrap="wrap" align="center" gap={100} className="api-row">
              <Form.Field>
                <Form.Label>LLM API key (for scan)</Form.Label>
                <InputPassword
                  value={llmApiKey}
                  onChange={(e) => setLlmApiKey(e.target.value)}
                  placeholder="OpenAI or compatible API key"
                  revealLabel="Show"
                  hideLabel="Hide"
                  size="large"
                  css={{ minWidth: '280px' }}
                />
              </Form.Field>
              <Button variant="secondary" size="large" onPress={scanLogs}>
                Scan logs
              </Button>
              <span className="scan-status" aria-live="polite">{scanStatus}</span>
            </Flex>
          )}
        </Flex>
      </Form>
    </>
  );
}
