import { useState } from "react";
import { Alert, Badge, Btn, Card, Chip, IconButton, Menu, Pagination, Spinner, Switch, Table, Tabs, Tooltip, spacing } from "@demo/ui";

import { ConfirmDialog } from "../components/feedback/ConfirmDialog";
import { AppShell } from "../components/layout/AppShell";
import { PageHeader } from "../components/layout/PageHeader";
import { LegacyModal } from "../components/LegacyModal";
import { LegacyTable } from "../components/legacy/LegacyTable";
import { OldButton } from "../components/legacy/OldButton";
import { StatusDot } from "../components/legacy/StatusDot";

interface Workspace {
  id: string;
  name: string;
  plan: "solo" | "team" | "company";
  members: number;
  status: "active" | "suspended";
}

const WORKSPACES: Workspace[] = [
  { id: "w1", name: "Acme Cloud", plan: "team", members: 4, status: "active" },
  { id: "w2", name: "Beta Labs", plan: "solo", members: 1, status: "active" },
  { id: "w3", name: "Gamma Studio", plan: "company", members: 38, status: "suspended" },
];

/** Внутренняя админка: рабочие пространства и флаги. */
export function Admin() {
  const [tab, setTab] = useState("workspaces");
  const [page, setPage] = useState(1);
  const [danger, setDanger] = useState<string | null>(null);
  const [legacy, setLegacy] = useState(false);
  const [loading] = useState(false);

  return (
    <AppShell section="admin" crumbs={[{ label: "Acme Cloud", href: "/" }, { label: "Админка" }]}>
      <PageHeader title="Админка" description="Только для сотрудников." secondaryActions={[{ label: "Сбросить кэш" }, { label: "Режим обслуживания", danger: true }]} />
      <Alert status="warning" title="Режим обслуживания включается для всех">
        Пользователи увидят заглушку до выключения.
      </Alert>
      <Tabs items={[{ value: "workspaces", label: "Пространства" }, { value: "flags", label: "Флаги" }, { value: "legacy", label: "Старые отчёты" }]} value={tab} onChange={setTab} />

      {tab === "workspaces" ? (
        <Card>
          {loading ? (
            <Spinner size="lg" />
          ) : (
            <Table
              rows={WORKSPACES}
              rowKey={(row) => row.id}
              columns={[
                { id: "name", header: "Название", cell: (row) => (<span style={{ display: "inline-flex", gap: spacing.xs, alignItems: "center" }}><StatusDot status={row.status === "active" ? "online" : "offline"} />{row.name}</span>) },
                { id: "plan", header: "Тариф", cell: (row) => <Chip tone={row.plan === "company" ? "brand" : "neutral"} size="sm">{row.plan}</Chip> },
                { id: "members", header: "Участников", cell: (row) => row.members, align: "end" },
                { id: "status", header: "Статус", cell: (row) => <Badge tone={row.status === "active" ? "success" : "danger"}>{row.status}</Badge> },
                {
                  id: "actions",
                  header: "",
                  align: "end",
                  cell: (row) => (
                    <Menu.Root size="sm" placement="bottom-end" trigger={<IconButton label="Действия" size="xs" variant="outline">⋯</IconButton>}>
                      <Menu.Item>Открыть как владелец</Menu.Item>
                      <Menu.Item danger onSelect={() => setDanger(row.id)}>
                        Заблокировать
                      </Menu.Item>
                    </Menu.Root>
                  ),
                },
              ]}
            />
          )}
          <div style={{ marginTop: spacing.lg }}>
            <Pagination page={page} pageCount={12} size="md" shape="square" siblings={2} onChange={setPage} />
          </div>
        </Card>
      ) : null}

      {tab === "flags" ? (
        <Card title="Флаги">
          {["Публичная бета", "Автономный библиотекарь", "Новый обзор"].map((flag) => (
            <div key={flag} style={{ display: "flex", alignItems: "center", gap: spacing.md, padding: `${spacing.sm}px 0` }}>
              <Tooltip label="Действует для всех пространств">
                <span>{flag}</span>
              </Tooltip>
              <span style={{ flex: 1 }} />
              <Switch checked size="md" />
            </div>
          ))}
        </Card>
      ) : null}

      {tab === "legacy" ? (
        <Card title="Старые отчёты">
          <LegacyTable rows={[{ Отчёт: "Синки за 2025", Строк: "1 204" }, { Отчёт: "Ошибки за 2025", Строк: "37" }]} />
          <div style={{ display: "flex", gap: spacing.sm, marginTop: spacing.lg }}>
            <OldButton onClick={() => setLegacy(true)}>Открыть архив</OldButton>
            <Btn style="secondary" size="sm">
              Выгрузить
            </Btn>
          </div>
        </Card>
      ) : null}

      <ConfirmDialog open={danger != null} title="Заблокировать пространство?" onConfirm={() => setDanger(null)} onClose={() => setDanger(null)} />
      <LegacyModal open={legacy} title="Архив отчётов">
        <p>Архив хранится 12 месяцев.</p>
        <OldButton kind="ghost" onClick={() => setLegacy(false)}>
          Закрыть
        </OldButton>
      </LegacyModal>
    </AppShell>
  );
}
