import { useState } from "react";
import { Btn, Card, Chip, Dialog, Field, Input, Select, spacing } from "@demo/ui";

import { FilterBar } from "../components/data/FilterBar";
import { MemberRow, type Member } from "../components/data/MemberRow";
import { AppShell } from "../components/layout/AppShell";
import { PageHeader } from "../components/layout/PageHeader";
import { OldButton } from "../components/legacy/OldButton";

const MEMBERS: Member[] = [
  { id: "m1", name: "Ирина Ковалёва", email: "irina@acme.example", role: "owner", presence: "online", active: true },
  { id: "m2", name: "Пётр Шварц", email: "petr@acme.example", role: "admin", presence: "away", active: true },
  { id: "m3", name: "Анна Лебедева", email: "anna@acme.example", role: "member", presence: "offline", active: true },
  { id: "m4", name: "Гость Подрядчик", email: "guest@studio.example", role: "guest", presence: "offline", active: false },
];

/** Команда: участники, роли и приглашения. */
export function Team() {
  const [search, setSearch] = useState("");
  const [mode, setMode] = useState("active");
  const [inviting, setInviting] = useState(false);
  const [members, setMembers] = useState(MEMBERS);

  return (
    <AppShell section="team" crumbs={[{ label: "Acme Cloud", href: "/" }, { label: "Команда" }]}>
      <PageHeader title="Команда" description={`${members.length} участника`} primaryAction={{ label: "Пригласить", onClick: () => setInviting(true) }} />
      <FilterBar
        search={search}
        onSearch={setSearch}
        mode={mode}
        modes={[{ value: "active", label: "Активные" }, { value: "all", label: "Все" }]}
        onMode={setMode}
        active={["роль: admin"]}
        onRemove={() => undefined}
      />
      <Card tone="default">
        {members
          .filter((member) => mode === "all" || member.active)
          .map((member) => (
            <MemberRow key={member.id} member={member} onToggle={(active) => setMembers((known) => known.map((entry) => (entry.id === member.id ? { ...entry, active } : entry)))} />
          ))}
      </Card>
      <div style={{ display: "flex", gap: spacing.sm, marginTop: spacing.lg }}>
        <Chip tone="neutral" size="md">
          Владельцев: 1
        </Chip>
        <Chip tone="success" size="md">
          Активных: {members.filter((member) => member.active).length}
        </Chip>
      </div>

      <Dialog open={inviting} title="Пригласить участника" onClose={() => setInviting(false)}>
        <Field label="Почта" required>
          <Input placeholder="name@company.com" size="md" />
        </Field>
        <Field label="Роль">
          <Select options={[{ label: "Участник", value: "member" }, { label: "Администратор", value: "admin" }, { label: "Гость", value: "guest" }]} value="member" size="md" />
        </Field>
        <div style={{ display: "flex", gap: spacing.sm, justifyContent: "flex-end", marginTop: spacing.lg }}>
          <OldButton kind="ghost" onClick={() => setInviting(false)}>
            Отмена
          </OldButton>
          <Btn style="primary" size="md" onClick={() => setInviting(false)}>
            Отправить приглашение
          </Btn>
        </div>
      </Dialog>
    </AppShell>
  );
}
