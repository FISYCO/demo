import { useState } from "react";
import { Accordion, Card, DatePicker, Divider, Field, Progress, Select, Table, Tabs, spacing } from "@demo/ui";

import { StatCard } from "../components/data/StatCard";
import { AppShell } from "../components/layout/AppShell";
import { PageHeader } from "../components/layout/PageHeader";
import { IconTile } from "../components/legacy/IconTile";
import { ReportChart } from "../components/legacy/ReportChart";

interface Row {
  library: string;
  runs: number;
  failed: number;
  avgMinutes: number;
}

const ROWS: Row[] = [
  { library: "Иконки", runs: 42, failed: 1, avgMinutes: 1.4 },
  { library: "Иллюстрации", runs: 18, failed: 0, avgMinutes: 3.2 },
  { library: "Токены", runs: 61, failed: 4, avgMinutes: 0.6 },
  { library: "Компоненты", runs: 9, failed: 2, avgMinutes: 6.8 },
];

/** Отчёты: метрики, динамика и разбивка по библиотекам. */
export function Reports() {
  const [tab, setTab] = useState("overview");
  const [period, setPeriod] = useState("30d");

  return (
    <AppShell section="reports" crumbs={[{ label: "Acme Cloud", href: "/" }, { label: "Отчёты" }]}>
      <PageHeader title="Отчёты" description="Как часто библиотеки синхронизируются и что ломается." secondaryActions={[{ label: "Экспорт CSV" }, { label: "Настроить рассылку" }]}>
        <Select options={[{ label: "7 дней", value: "7d" }, { label: "30 дней", value: "30d" }, { label: "Квартал", value: "90d" }]} value={period} size="sm" onChange={setPeriod} />
      </PageHeader>
      <Tabs items={[{ value: "overview", label: "Сводка" }, { value: "libraries", label: "По библиотекам" }, { value: "librarian", label: "Библиотекарь" }]} value={tab} onChange={setTab} />

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: spacing.lg, margin: `${spacing.lg}px 0` }}>
        <StatCard label="Синхронизаций" value="130" delta={12} />
        <StatCard label="Ошибок" value="7" delta={-40} />
        <StatCard label="Патчей от библиотекаря" value="10" delta={25} target={62} />
        <StatCard label="Здоровье" value="60" target={60} loading={tab === "librarian"} />
      </div>

      <Card title="Динамика">
        <ReportChart series={[{ name: "Синхронизации", values: [12, 18, 15, 22, 30, 33] }, { name: "Ошибки", values: [2, 1, 3, 0, 1, 0], color: "#dc2626" }]} />
        <div style={{ display: "flex", gap: spacing.lg, marginTop: spacing.sm }}>
          <IconTile src="/icons/sync.svg" label="синхронизации" />
          <IconTile src="/icons/alert.svg" label="ошибки" />
          <img src="/icons/info.svg" width={14} height={14} alt="" style={{ marginLeft: "auto", opacity: 0.6 }} />
        </div>
      </Card>

      <Card title="По библиотекам">
        <Table
          rows={ROWS}
          rowKey={(row) => row.library}
          empty="Данных за период нет"
          columns={[
            { id: "library", header: "Библиотека", cell: (row) => row.library },
            { id: "runs", header: "Прогонов", cell: (row) => row.runs, align: "end" },
            { id: "failed", header: "С ошибкой", cell: (row) => <Progress value={(row.failed / row.runs) * 100} size="xs" tone="danger" />, align: "end" },
            { id: "avg", header: "Среднее время", cell: (row) => `${row.avgMinutes} мин`, align: "end" },
          ]}
        />
      </Card>

      <Divider />
      <Accordion
        variant="boxed"
        size="sm"
        defaultValue="period"
        items={[
          {
            value: "period",
            title: "Свой период",
            content: (
              <div style={{ display: "flex", gap: spacing.md }}>
                <Field label="С"><DatePicker size="sm" /></Field>
                <Field label="По"><DatePicker size="sm" /></Field>
              </div>
            ),
          },
          { value: "method", title: "Как считаем", content: "Прогон считается неудачным, если любая стадия завершилась ошибкой." },
        ]}
      />
    </AppShell>
  );
}
