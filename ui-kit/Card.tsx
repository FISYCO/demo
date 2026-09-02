import type { ReactNode } from "react";

import { color, fontSize, radius, spacing } from "./tokens";

/** Поверхность: карточка с заголовком и содержимым. */

export type CardTone = "default" | "muted";

export interface CardProps {
  title?: string;
  tone?: CardTone;
  children?: ReactNode;
}

export function Card({ title, tone = "default", children }: CardProps) {
  return (
    <div
      style={{
        background: tone === "muted" ? color.surfaceMuted : color.surface,
        border: `1px solid ${color.border}`,
        borderRadius: radius.lg,
        padding: spacing.lg,
        color: color.text,
      }}
    >
      {title ? (
        <div style={{ fontSize: fontSize.md, fontWeight: 600, marginBottom: spacing.sm }}>{title}</div>
      ) : null}
      {children}
    </div>
  );
}
