import { useState } from "react";
import { Btn, Card, Checkbox, Divider, Field, RadioGroup, Select, Switch, Toast, spacing } from "@demo/ui";

import { AppShell } from "../components/layout/AppShell";
import { PageHeader } from "../components/layout/PageHeader";

const CHANNELS = ["Ломающие изменения", "Новые патчи библиотекаря", "Ошибки синхронизации", "Еженедельная сводка"];

/** Настройки уведомлений. */
export function Notifications() {
  const [saved, setSaved] = useState(false);
  const [digest, setDigest] = useState("weekly");

  return (
    <AppShell section="settings" crumbs={[{ label: "Acme Cloud", href: "/" }, { label: "Настройки", href: "/settings" }, { label: "Уведомления" }]}>
      <PageHeader title="Уведомления" description="Что и куда присылать." />
      <Card title="Каналы">
        {CHANNELS.map((channel, index) => (
          <div key={channel}>
            <div style={{ display: "flex", alignItems: "center", gap: spacing.lg, padding: `${spacing.sm}px 0` }}>
              <span style={{ flex: 1 }}>{channel}</span>
              <Checkbox checked={index < 3} label="Почта" />
              <Checkbox checked={index === 0} label="Slack" />
              <Switch checked={index !== 3} size="sm" />
            </div>
            {index < CHANNELS.length - 1 ? <Divider /> : null}
          </div>
        ))}
      </Card>
      <Card title="Сводка">
        <Field label="Периодичность" layout="horizontal">
          <RadioGroup name="digest" value={digest} onChange={setDigest} orientation="horizontal" size="sm" options={[{ value: "daily", label: "Ежедневно" }, { value: "weekly", label: "Раз в неделю" }, { value: "never", label: "Никогда" }]} />
        </Field>
        <Field label="Время" layout="horizontal" hint="По часовому поясу рабочего пространства">
          <Select options={[{ label: "09:00", value: "9" }, { label: "12:00", value: "12" }, { label: "18:00", value: "18" }]} value="9" size="sm" />
        </Field>
        <div style={{ marginTop: spacing.lg }}>
          <Btn style="primary" size="md" onClick={() => setSaved(true)}>
            Сохранить
          </Btn>
        </div>
      </Card>
      {saved ? <Toast status="success" placement="bottom-center" title="Сохранено" onClose={() => setSaved(false)} /> : null}
    </AppShell>
  );
}
