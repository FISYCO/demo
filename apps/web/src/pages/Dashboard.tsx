import { Avatar, Badge, Btn, Card, EmptyState, Spinner, Table, Tabs } from "@demo/ui";

interface Run {
  id: string;
  library: string;
  status: "ok" | "failed";
}

const RUNS: Run[] = [
  { id: "run-1", library: "Иконки", status: "ok" },
  { id: "run-2", library: "Токены", status: "failed" },
];

/** Обзор: последние прогоны и участники. */
export function Dashboard() {
  return (
    <Card title="Обзор">
      <Tabs items={[{ value: "runs", label: "Прогоны" }, { value: "team", label: "Команда" }]} value="runs" />
      <Table
        rows={RUNS}
        rowKey={(run) => run.id}
        columns={[
          { id: "library", header: "Библиотека", cell: (run) => run.library },
          {
            id: "status",
            header: "Статус",
            cell: (run) => <Badge tone={run.status === "ok" ? "success" : "danger"}>{run.status}</Badge>,
          },
        ]}
      />
      <Avatar name="Ирина Ковалёва" size="sm" />
      <Spinner size="sm" />
      <EmptyState
        title="Прогонов ещё не было"
        description="Первый появится после ближайшей синхронизации."
        action={<Btn size="sm">Запустить</Btn>}
      />
    </Card>
  );
}
