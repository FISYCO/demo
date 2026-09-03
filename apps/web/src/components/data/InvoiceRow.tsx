import { Badge, Btn, Chip, Menu, color, fontSize, spacing } from "@demo/ui";

import { formatDate, formatMoney } from "../../lib/format";

export interface Invoice {
  id: string;
  number: string;
  issuedAt: string;
  amount: number;
  status: "paid" | "due" | "overdue" | "void";
}

/** Строка счёта. */
export function InvoiceRow({ invoice }: { invoice: Invoice }) {
  const tone = invoice.status === "paid" ? "success" : invoice.status === "overdue" ? "danger" : "neutral";
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 120px 140px 120px 40px", alignItems: "center", gap: spacing.md, padding: `${spacing.sm}px 0`, borderBottom: `1px solid ${color.border}` }}>
      <span style={{ fontSize: fontSize.md, color: color.text }}>{invoice.number}</span>
      <span style={{ fontSize: fontSize.sm, color: color.textMuted }}>{formatDate(invoice.issuedAt)}</span>
      <span style={{ fontSize: fontSize.md, color: color.text }}>{formatMoney(invoice.amount)}</span>
      {invoice.status === "void" ? <Chip tone="neutral" size="sm" variant="outline">аннулирован</Chip> : <Badge tone={tone}>{invoice.status}</Badge>}
      <Menu.Root
        size="sm"
        placement="bottom-end"
        trigger={
          <Btn style="transparent" size="sm">
            ⋯
          </Btn>
        }
      >
        <Menu.Item>Скачать PDF</Menu.Item>
        <Menu.Item disabled={invoice.status !== "due"}>Оплатить</Menu.Item>
      </Menu.Root>
    </div>
  );
}
