import { useState } from "react";
import { Card, Chip, EmptyState, Skeleton, spacing } from "@demo/ui";

import { SearchBox } from "../components/feedback/SearchBox";
import { AppShell } from "../components/layout/AppShell";

/** Глобальный поиск. */
export function Search() {
  const [query, setQuery] = useState("");
  const [loading] = useState(false);

  return (
    <AppShell section="dashboard" crumbs={[{ label: "Acme Cloud", href: "/" }, { label: "Поиск" }]}>
      <SearchBox value={query} onChange={setQuery} />
      <div style={{ display: "flex", gap: spacing.xs, margin: `${spacing.md}px 0` }}>
        <Chip tone="brand" size="sm">Проекты</Chip>
        <Chip tone="neutral" size="sm" variant="outline">Участники</Chip>
        <Chip tone="neutral" size="sm" variant="outline">Счета</Chip>
      </div>
      <Card>
        {loading ? <Skeleton shape="text" lines={4} animation="wave" /> : <EmptyState title="Ничего не найдено" description="Попробуйте другое слово." />}
      </Card>
    </AppShell>
  );
}
