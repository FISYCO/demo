import { Chip, DatePicker, Input, SegmentedControl, Select, spacing } from "@demo/ui";

/** Полоса фильтров над списками: поиск, период, режим и активные фильтры. */
export interface FilterBarProps {
  search: string;
  onSearch: (value: string) => void;
  mode: string;
  modes: Array<{ value: string; label: string }>;
  onMode: (value: string) => void;
  from?: string;
  to?: string;
  active: string[];
  onRemove: (filter: string) => void;
  owners?: Array<{ label: string; value: string }>;
}

export function FilterBar({ search, onSearch, mode, modes, onMode, from, to, active, onRemove, owners }: FilterBarProps) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: spacing.md, marginBottom: spacing.lg }}>
      <div style={{ display: "flex", gap: spacing.sm, alignItems: "center", flexWrap: "wrap" }}>
        <Input placeholder="Поиск" size="sm" value={search} onChange={onSearch} />
        <SegmentedControl options={modes} value={mode} size="sm" onChange={onMode} />
        <DatePicker size="sm" value={from} />
        <DatePicker size="sm" value={to} />
        {owners ? <Select options={owners} placeholder="Владелец" size="sm" /> : null}
      </div>
      {active.length > 0 ? (
        <div style={{ display: "flex", gap: spacing.xs, flexWrap: "wrap" }}>
          {active.map((filter) => (
            <Chip key={filter} tone="neutral" size="sm" variant="outline" onRemove={() => onRemove(filter)}>
              {filter}
            </Chip>
          ))}
        </div>
      ) : null}
    </div>
  );
}
