import type { ReactNode } from "react";

import { color, fontSize, spacing } from "./tokens";

/**
 * Пустое состояние.
 *
 * Пустой экран без объяснения неотличим от сломанного, поэтому у состояния всегда есть заголовок
 * и следующий шаг.
 */

export interface EmptyStateProps {
  title: string;
  description?: string;
  action?: ReactNode;
}

export function EmptyState({ title, description, action }: EmptyStateProps) {
  return (
    <div style={{ textAlign: "center", padding: spacing.xl, color: color.text }}>
      <div style={{ fontSize: fontSize.lg, fontWeight: 600 }}>{title}</div>
      {description ? (
        <div style={{ fontSize: fontSize.sm, color: color.textMuted, marginTop: spacing.xs }}>{description}</div>
      ) : null}
      {action ? <div style={{ marginTop: spacing.lg }}>{action}</div> : null}
    </div>
  );
}
