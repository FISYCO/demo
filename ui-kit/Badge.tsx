import type { ReactNode } from "react";

import { color, fontSize, radius, spacing } from "./tokens";

/** Метка состояния. */

export type BadgeTone = "neutral" | "success" | "danger";

export interface BadgeProps {
  tone?: BadgeTone;
  children?: ReactNode;
}

const TONE: Record<BadgeTone, { background: string; color: string }> = {
  neutral: { background: color.brandSubtle, color: color.textMuted },
  success: { background: "#e6f4ec", color: color.success },
  danger: { background: "#fbeae9", color: color.danger },
};

export function Badge({ tone = "neutral", children }: BadgeProps) {
  return (
    <span
      style={{
        ...TONE[tone],
        borderRadius: radius.full,
        padding: `2px ${spacing.sm}px`,
        fontSize: fontSize.xs,
        fontWeight: 500,
      }}
    >
      {children}
    </span>
  );
}
