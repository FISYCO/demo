import { useState } from "react";
import { Avatar, Btn, Card, Chip, Divider, Field, Input, Tabs, Textarea, spacing } from "@demo/ui";

import { ActivityFeed } from "../components/data/ActivityFeed";
import { CommentThread } from "../components/data/CommentThread";
import { TagInput } from "../components/forms/TagInput";
import { FeedbackDrawer } from "../components/feedback/FeedbackDrawer";
import { AppShell } from "../components/layout/AppShell";
import { PageHeader } from "../components/layout/PageHeader";
import { AdHocModal } from "../components/legacy/AdHocModal";

/** Профиль участника. */
export function Profile() {
  const [tab, setTab] = useState("about");
  const [tags, setTags] = useState(["дизайн", "токены"]);
  const [feedback, setFeedback] = useState(false);
  const [confirm, setConfirm] = useState(false);

  return (
    <AppShell section="team" crumbs={[{ label: "Acme Cloud", href: "/" }, { label: "Команда", href: "/team" }, { label: "Ирина Ковалёва" }]}>
      <PageHeader title="Ирина Ковалёва" description="Владелец рабочего пространства" secondaryActions={[{ label: "Написать нам", onSelect: () => setFeedback(true) }, { label: "Удалить аккаунт", danger: true, onSelect: () => setConfirm(true) }]}>
        <Avatar name="Ирина Ковалёва" size="lg" />
      </PageHeader>
      <Tabs items={[{ value: "about", label: "О себе" }, { value: "activity", label: "Активность" }, { value: "comments", label: "Обсуждение" }]} value={tab} onChange={setTab} />

      {tab === "about" ? (
        <Card>
          <Field label="Имя">
            <Input value="Ирина Ковалёва" size="md" />
          </Field>
          <Field label="О себе" hint="Видно команде">
            <Textarea rows={4} value="Веду дизайн-систему Acme с 2023 года." />
          </Field>
          <Field label="Темы">
            <TagInput tags={tags} onChange={setTags} />
          </Field>
          <Divider />
          <div style={{ display: "flex", gap: spacing.sm, alignItems: "center" }}>
            <Chip tone="brand" size="md">
              Владелец
            </Chip>
            <Chip tone="success" size="md" variant="outline">
              Подтверждена почта
            </Chip>
            <span style={{ flex: 1 }} />
            <Btn style="primary" size="md">
              Сохранить
            </Btn>
          </div>
        </Card>
      ) : null}

      {tab === "activity" ? (
        <Card title="Последние действия">
          <ActivityFeed
            compact
            events={[
              { id: "e1", actor: "Ирина Ковалёва", text: "Приняла патч библиотекаря для Btn", at: "2026-09-03T10:00:00Z", kind: "info" },
              { id: "e2", actor: "Ирина Ковалёва", text: "Отключила автономный режим", at: "2026-09-02T14:30:00Z", kind: "danger" },
            ]}
          />
        </Card>
      ) : null}

      {tab === "comments" ? (
        <Card title="Обсуждение">
          <CommentThread comments={[{ id: "c1", author: "Пётр Шварц", text: "Добавь, пожалуйста, ссылку на регламент.", at: "2026-09-01T09:00:00Z" }]} onPost={() => undefined} />
        </Card>
      ) : null}

      <FeedbackDrawer open={feedback} onClose={() => setFeedback(false)} />
      <AdHocModal open={confirm} onClose={() => setConfirm(false)}>
        <h3 style={{ margin: 0, color: "#111827" }}>Удалить аккаунт?</h3>
        <p style={{ color: "#6b7280" }}>Все проекты перейдут следующему администратору.</p>
      </AdHocModal>
    </AppShell>
  );
}
