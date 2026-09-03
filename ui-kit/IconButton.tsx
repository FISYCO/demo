import type { ReactNode } from "react";
import { forwardRef } from "react";

import { color, radius } from "./tokens";

/** Кнопка с одной иконкой. Обязательна подпись для читалок. */

export type IconButtonSize = "xs" | "sm" | "md" | "lg";
export type IconButtonVariant = "solid" | "ghost" | "outline";
export type IconButtonTone = "neutral" | "danger";

export interface IconButtonProps {
  label: string;
  size?: IconButtonSize;
  variant?: IconButtonVariant;
  tone?: IconButtonTone;
  disabled?: boolean;
  onClick?: () => void;
  children?: ReactNode;
}

const SIDE: Record<IconButtonSize, number> = { xs: 24, sm: 28, md: 36, lg: 44 };

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(function IconButton(
  { label, size = "md", variant = "ghost", tone = "neutral", disabled, onClick, children },
  ref,
) {
  const accent = tone === "danger" ? color.danger : color.brandSolid;
  return (
    <button
      ref={ref}
      type="button"
      aria-label={label}
      title={label}
      disabled={disabled}
      onClick={onClick}
      style={{
        width: SIDE[size],
        height: SIDE[size],
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: radius.md,
        background: variant === "solid" ? accent : "transparent",
        color: variant === "solid" ? color.surface : accent,
        border: `1px solid ${variant === "outline" ? color.border : "transparent"}`,
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.5 : 1,
      }}
    >
      {children}
    </button>
  );
});
