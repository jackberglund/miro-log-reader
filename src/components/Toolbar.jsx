import React, { useRef } from 'react';
import { Flex, InputSearch, Switch, Button } from '@mirohq/design-system';
import FilterSelects from './FilterSelects.jsx';

export default function Toolbar({
  searchQuery,
  setSearchQuery,
  viewMode,
  filterOptions,
  filterValue,
  onFilterChange,
  filterFields,
  showFiltersWhenEmpty,
  autoscroll,
  setAutoscroll,
  onLoadFile,
  fetchLogs,
  fetchLoading,
}) {
  const fileInputRef = useRef(null);
  const showFilters = viewMode === 'columns' || showFiltersWhenEmpty;

  return (
    <Flex className="toolbar" wrap="wrap" align="center" gap={150} css={{ width: '100%' }}>
      <Flex align="center" gap={100} css={{ flex: 1, minWidth: '200px', maxWidth: '320px' }}>
        <InputSearch
          placeholder="Search logs..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Escape') {
              setSearchQuery('');
              e.target.blur();
            }
          }}
          clearable
          clearLabel="Clear"
          size="large"
          css={{ width: '100%' }}
        />
      </Flex>
      {showFilters && (
        <div className="column-filters" id="column-filters">
          <FilterSelects
            options={filterOptions}
            value={filterValue}
            onChange={onFilterChange}
            fields={filterFields}
          />
        </div>
      )}
      <Flex align="center" gap={100}>
        <Switch
          id="autoscroll"
          checked={autoscroll}
          onChecked={() => setAutoscroll(true)}
          onUnchecked={() => setAutoscroll(false)}
          size="large"
        />
        <label htmlFor="autoscroll" style={{ lineHeight: 1.5, cursor: 'pointer' }}>
          Auto-scroll
        </label>
      </Flex>
      <Flex align="center" gap={100} className="file-actions">
        <input
          ref={fileInputRef}
          type="file"
          accept=".log,.txt,text/*"
          hidden
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) onLoadFile(file);
            e.target.value = '';
          }}
        />
        <Button
          variant="secondary"
          size="large"
          onPress={() => fileInputRef.current?.click()}
        >
          Load file
        </Button>
        <Button
          size="large"
          onPress={fetchLogs}
          disabled={fetchLoading}
          loading={fetchLoading}
        >
          {fetchLoading ? 'Loading…' : 'Fetch logs'}
        </Button>
      </Flex>
    </Flex>
  );
}
