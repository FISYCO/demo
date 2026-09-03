import type { ReactNode } from "react";

import { color, fontSize, spacing } from "./tokens";

/**
 * Простой список с разделителями.
 *
 * @deprecated Используйте `Table`: у списка нет заголовков, сортировки и пустого состояния.
 */
export type ListSize = "sm" | "md";

export interface ListProps {
  items: Array<{ id: string; primary: ReactNode; secondary?: ReactNode; trailing?: ReactNode }>;
  size?: ListSize;
}

/** @deprecated Используйте `Table`. */
export function List({ items, size = "md" }: ListProps) {
  return (
    <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
      {items.map((item) => (
        <li
          key={item.id}
          style={{
            display: "flex",
            alignItems: "center",
            gap: spacing.md,
            padding: size === "sm" ? `${spacing.xs}px 0` : `${spacing.sm}px 0`,
            borderBottom: `1px solid ${color.border}`,
            fontSize: size === "sm" ? fontSize.sm : fontSize.md,
          }}
        >
          <span style={{ flex: 1 }}>
            <div style={{ color: color.text }}>{item.primary}</div>
            {item.secondary ? <div style={{ fontSize: fontSize.xs, color: color.textMuted }}>{item.secondary}</div> : null}
          </span>
          {item.trailing}
        </li>
      ))}
    </ul>
  );
}
