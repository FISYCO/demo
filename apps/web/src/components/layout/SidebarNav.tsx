import { Chip, Divider, color, fontSize, spacing } from "@demo/ui";

const SECTIONS = [
  { id: "dashboard", label: "Обзор" },
  { id: "inbox", label: "Входящие", count: 12 },
  { id: "projects", label: "Проекты" },
  { id: "reports", label: "Отчёты" },
  { id: "team", label: "Команда" },
  { id: "billing", label: "Оплата" },
];

/** Боковая навигация. */
export function SidebarNav({ active }: { active: string }) {
  return (
    <nav style={{ padding: spacing.lg, borderRight: `1px solid ${color.border}`, background: color.surfaceMuted }}>
      <div style={{ fontSize: fontSize.lg, fontWeight: 700, color: color.brandSolid, marginBottom: spacing.xl }}>Acme Cloud</div>
      {SECTIONS.map((section) => (
        <a
          key={section.id}
          href={`/${section.id}`}
          aria-current={section.id === active ? "page" : undefined}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: `${spacing.sm}px ${spacing.md}px`,
            borderRadius: 8,
            textDecoration: "none",
            color: section.id === active ? color.brandSolid : color.text,
            background: section.id === active ? color.brandSubtle : "transparent",
            fontSize: fontSize.md,
          }}
        >
          {section.label}
          {section.count ? (
            <Chip tone="brand" size="sm">
              {section.count}
            </Chip>
          ) : null}
        </a>
      ))}
      <Divider label="Администрирование" />
      <a href="/admin" style={{ display: "block", padding: `${spacing.sm}px ${spacing.md}px`, color: color.textMuted, textDecoration: "none" }}>
        Админка
      </a>
    </nav>
  );
}
