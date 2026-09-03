import type { ReactNode } from "react";
import { Btn, IconButton, Menu, color, fontSize, spacing } from "@demo/ui";

/** Заголовок раздела с основным действием и меню «ещё». */
export interface PageHeaderProps {
  title: string;
  description?: string;
  primaryAction?: { label: string; onClick?: () => void };
  secondaryActions?: Array<{ label: string; onSelect?: () => void; danger?: boolean }>;
  children?: ReactNode;
}

export function PageHeader({ title, description, primaryAction, secondaryActions, children }: PageHeaderProps) {
  return (
    <div style={{ display: "flex", alignItems: "flex-start", gap: spacing.lg, marginBottom: spacing.xl }}>
      <div style={{ flex: 1 }}>
        <h1 style={{ margin: 0, fontSize: 24, fontWeight: 700, color: color.text }}>{title}</h1>
        {description ? <p style={{ margin: `${spacing.xs}px 0 0`, fontSize: fontSize.md, color: color.textMuted }}>{description}</p> : null}
      </div>
      {children}
      {primaryAction ? (
        <Btn style="primary" size="md" onClick={primaryAction.onClick}>
          {primaryAction.label}
        </Btn>
      ) : null}
      {secondaryActions?.length ? (
        <Menu.Root
          placement="bottom-end"
          trigger={
            <IconButton label="Ещё" variant="outline" size="md">
              ⋯
            </IconButton>
          }
        >
          {secondaryActions.map((action) => (
            <Menu.Item key={action.label} onSelect={action.onSelect} danger={action.danger}>
              {action.label}
            </Menu.Item>
          ))}
        </Menu.Root>
      ) : null}
    </div>
  );
}
