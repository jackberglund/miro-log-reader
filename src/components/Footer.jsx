import React from 'react';
import { Text } from '@mirohq/design-system';

export default function Footer({ totalRows, visibleCount, hasActiveFilters }) {
  return (
    <footer className="footer">
      <Text as="p" size="small" color="secondary">
        {hasActiveFilters
          ? `Showing ${visibleCount} of ${totalRows} rows (filtered)`
          : `Total: ${totalRows} rows`}
      </Text>
    </footer>
  );
}
