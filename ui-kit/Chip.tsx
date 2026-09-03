import type { ReactNode } from "react";

import { color, fontSize, radius, spacing } from "./tokens";

/** Маленькая плашка для фильтров, тегов и счётчиков. */

export type ChipTone = "neutral" | "brand" | "success" | "warning" | "danger";
export type ChipSize = "sm" | "md";
export type ChipVariant = "solid" | "outline";

export interface ChipProps {
  tone?: ChipTone;
  size?: ChipSize;
  variant?: ChipVariant;
  /** Крестик удаления; без обработчика не показывается. */
  onRemove?: () => void;
  children?: ReactNode;
}

const TONE: Record<ChipTone, { background: string; color: string; border: string }> = {
  neutral: { background: color.brandSubtle, color: color.textMuted, border: color.border },
  brand: { background: color.brandSolid, color: color.surface, border: color.brandSolid },
  success: { background: "#e6f4ec", color: color.success, border: color.success },
  warning: { background: "#fdf3e2", color: "#8a5a00", border: "#e2b04a" },
  danger: { background: "#fbeae9", color: color.danger, border: color.danger },
};

export function Chip({ tone = "neutral", size = "md", variant = "solid", onRemove, children }: ChipProps) {
  const palette = TONE[tone];
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: spacing.xs,
        padding: size === "sm" ? `2px ${spacing.sm}px` : `${spacing.xs}px ${spacing.md}px`,
        borderRadius: radius.full,
        fontSize: size === "sm" ? fontSize.xs : fontSize.sm,
        fontWeight: 500,
        background: variant === "solid" ? palette.background : "transparent",
        color: variant === "solid" ? palette.color : palette.border,
        border: `1px solid ${variant === "outline" ? palette.border : "transparent"}`,
      }}
    >
      {children}
      {onRemove ? (
        <button
          type="button"
          onClick={onRemove}
          aria-label="Убрать"
          style={{ border: "none", background: "transparent", color: "inherit", cursor: "pointer", padding: 0 }}
        >
          ×
        </button>
      ) : null}
    </span>
  );
}
