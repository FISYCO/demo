import { useState } from "react";
import { Btn, Card, EmptyState, Pagination, SegmentedControl, Tabs, spacing } from "@demo/ui";

import { NotificationItem, type Notification } from "../components/data/NotificationItem";
import { AppShell } from "../components/layout/AppShell";
import { PageHeader } from "../components/layout/PageHeader";

const ITEMS: Notification[] = [
  { id: "n1", actor: "Ирина Ковалёва", title: "Btn: убрано значение size=xs", body: "Затронуто 14 применений в apps/web.", at: "2026-09-03T09:12:00Z", unread: true, severity: "breaking" },
  { id: "n2", actor: "Пётр Шварц", title: "Синхронизация иконок завершена", body: "Добавлено 12 иконок, обновлено 3.", at: "2026-09-02T17:40:00Z", unread: true, severity: "info" },
  { id: "n3", actor: "Анна Лебедева", title: "Токен spacing.xl изменён", body: "24 → 28. Проверьте отступы в карточках.", at: "2026-09-01T11:05:00Z", unread: false, severity: "info" },
];

/** Входящие: уведомления библиотек и библиотекаря. */
export function Inbox() {
  const [tab, setTab] = useState("all");
  const [mode, setMode] = useState("list");
  const [page, setPage] = useState(1);
  const [items, setItems] = useState(ITEMS);
  const visible = tab === "unread" ? items.filter((item) => item.unread) : items;

  return (
    <AppShell section="inbox" crumbs={[{ label: "Acme Cloud", href: "/" }, { label: "Входящие" }]}>
      <PageHeader title="Входящие" description="Что изменилось в библиотеках и что сделал библиотекарь." secondaryActions={[{ label: "Прочитать все" }, { label: "Очистить", danger: true }]}>
        <SegmentedControl options={[{ value: "list", label: "Список" }, { value: "compact", label: "Кратко" }]} value={mode} size="sm" onChange={setMode} />
      </PageHeader>
      <Tabs items={[{ value: "all", label: "Все" }, { value: "unread", label: "Непрочитанные" }, { value: "breaking", label: "Ломающие" }]} value={tab} onChange={setTab} />
      <Card tone="default">
        {visible.length === 0 ? (
          <EmptyState title="Всё прочитано" description="Новые уведомления появятся после следующей синхронизации." action={<Btn style="secondary" size="sm">Обновить</Btn>} />
        ) : (
          visible.map((item) => <NotificationItem key={item.id} item={item} onArchive={(id) => setItems((known) => known.filter((entry) => entry.id !== id))} />)
        )}
        <div style={{ marginTop: spacing.lg }}>
          <Pagination page={page} pageCount={4} size="sm" shape="round" onChange={setPage} />
        </div>
      </Card>
    </AppShell>
  );
}
