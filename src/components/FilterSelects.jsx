import React from 'react';
import { Select } from '@mirohq/design-system';

const DEFAULT_FIELDS = [
  { key: 'user', label: 'User', optionsKey: 'users' },
  { key: 'feature', label: 'Feature', optionsKey: 'features' },
  { key: 'type', label: 'Type', optionsKey: 'types' },
];

export default function FilterSelects({ options = {}, value = {}, onChange, fields = DEFAULT_FIELDS }) {
  const handleChange = (field) => (v) => {
    const next = v === '__all__' || v == null ? '' : v;
    onChange({ ...value, [field]: next });
  };

  return (
    <div className="column-filters-inner" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.35rem 0.75rem' }}>
      {fields.map(({ key, label, optionsKey }) => {
        const optionsList = options[optionsKey] ?? [];
        const currentValue = value[key] ?? '';
        return (
          <React.Fragment key={key}>
            <label className="column-filter-label" htmlFor={`filter-${key}`} style={{ fontSize: '12px', color: 'var(--text-muted)', marginRight: '0.25rem' }}>
              {label}
            </label>
            <Select
              value={currentValue === '' ? undefined : currentValue}
              onValueChange={handleChange(key)}
              css={{ width: '10rem', minWidth: '8rem', maxWidth: '12rem' }}
            >
              <Select.Trigger size="large" aria-label={`Filter by ${label}`}>
                <Select.Value placeholder="All" />
              </Select.Trigger>
              <Select.Portal>
                <Select.Content>
                  <Select.Item value="__all__" textValue="All">All</Select.Item>
                  {optionsList.map((opt) => (
                    <Select.Item key={opt} value={opt}>{opt}</Select.Item>
                  ))}
                </Select.Content>
              </Select.Portal>
            </Select>
          </React.Fragment>
        );
      })}
    </div>
  );
}
