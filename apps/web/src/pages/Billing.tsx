import { useState } from "react";
import { Alert, Btn, Card, Divider, Tabs, spacing } from "@demo/ui";

import { InvoiceRow, type Invoice } from "../components/data/InvoiceRow";
import { KeyValue } from "../components/data/KeyValue";
import { PlanPicker } from "../components/forms/PlanPicker";
import { AppShell } from "../components/layout/AppShell";
import { PageHeader } from "../components/layout/PageHeader";
import { LegacyTable } from "../components/legacy/LegacyTable";
import { OldButton } from "../components/legacy/OldButton";

const INVOICES: Invoice[] = [
  { id: "i1", number: "INV-2026-091", issuedAt: "2026-09-01", amount: 4900, status: "due" },
  { id: "i2", number: "INV-2026-082", issuedAt: "2026-08-01", amount: 4900, status: "paid" },
  { id: "i3", number: "INV-2026-071", issuedAt: "2026-07-01", amount: 4900, status: "overdue" },
  { id: "i4", number: "INV-2026-062", issuedAt: "2026-06-01", amount: 0, status: "void" },
];

/** Оплата: тариф, счета и реквизиты. */
export function Billing() {
  const [tab, setTab] = useState("plan");
  const [seats, setSeats] = useState(6);

  return (
    <AppShell section="billing" crumbs={[{ label: "Acme Cloud", href: "/" }, { label: "Оплата" }]}>
      <PageHeader title="Оплата" description="Тариф, счета и способ оплаты." primaryAction={{ label: "Добавить карту" }} />
      <Alert status="info" title="Пробный период заканчивается через 6 дней">
        После этого рабочее пространство перейдёт на тариф «Соло».
      </Alert>
      <Tabs items={[{ value: "plan", label: "Тариф" }, { value: "invoices", label: "Счета" }, { value: "details", label: "Реквизиты" }]} value={tab} onChange={setTab} />

      {tab === "plan" ? <PlanPicker current="team" seats={seats} onSeats={setSeats} /> : null}

      {tab === "invoices" ? (
        <Card title="Счета">
          {INVOICES.map((invoice) => (
            <InvoiceRow key={invoice.id} invoice={invoice} />
          ))}
          <Divider label="Архив 2025" />
          <LegacyTable rows={[{ Номер: "INV-2025-120", Сумма: "4 900 ₽", Статус: "оплачен" }, { Номер: "INV-2025-110", Сумма: "4 900 ₽", Статус: "оплачен" }]} />
        </Card>
      ) : null}

      {tab === "details" ? (
        <Card title="Реквизиты">
          <KeyValue rows={[{ key: "Компания", value: "ООО «Акме»" }, { key: "ИНН", value: "7701234567" }, { key: "Почта для счетов", value: "billing@acme.example" }]} />
          <div style={{ display: "flex", gap: spacing.sm, marginTop: spacing.lg }}>
            <Btn style="primary" size="md">
              Сохранить
            </Btn>
            <OldButton kind="ghost">Отменить</OldButton>
          </div>
        </Card>
      ) : null}
    </AppShell>
  );
}
