import type { CSSProperties, ReactNode } from "react";

import { color, fontSize, radius, spacing } from "./tokens";

/**
 * Кнопка дизайн-системы.
 *
 * Имя повторяет имя набора в Figma (`btn`) намеренно: связка «макет ↔ код» выводится заново при
 * каждой индексации, и совпадающее имя — самый сильный её сигнал. Переименование здесь стоит
 * ровно одного: связка станет неуверенной, и патчи по этому компоненту уйдут в черновики.
 */

export type BtnStyle = "primary" | "secondary" | "transparent";
export type BtnSize = "sm" | "md" | "lg";
export type BtnStatus = "default" | "hover" | "disabled";

export interface BtnProps {
  /** Внешний вид: заливка, обводка или прозрачная. */
  style?: BtnStyle;
  /** Размер. В макете есть ещё `xs` — в коде его пока нет. */
  size?: BtnSize;
  /** Состояние. Состояние `focus` из макета в коде не выражено. */
  status?: BtnStatus;
  disabled?: boolean;
  onClick?: () => void;
  children?: ReactNode;
}

const PADDING: Record<BtnSize, string> = {
  sm: `${spacing.xs}px ${spacing.md}px`,
  md: `${spacing.sm}px ${spacing.lg}px`,
  lg: `${spacing.md}px ${spacing.xl}px`,
};

const HEIGHT: Record<BtnSize, number> = { sm: 28, md: 36, lg: 44 };

const SURFACE: Record<BtnStyle, CSSProperties> = {
  primary: { background: color.brandSolid, color: color.surface, border: "1px solid transparent" },
  secondary: { background: color.surface, color: color.brandSolid, border: `1px solid ${color.border}` },
  transparent: { background: "transparent", color: color.brandSolid, border: "1px solid transparent" },
};

export function Btn({ style = "primary", size = "md", status = "default", disabled, onClick, children }: BtnProps) {
  const base: CSSProperties = {
    ...SURFACE[style],
    height: HEIGHT[size],
    padding: PADDING[size],
    borderRadius: radius.md,
    fontSize: fontSize[size === "lg" ? "lg" : size === "sm" ? "sm" : "md"],
    fontWeight: 500,
    cursor: disabled || status === "disabled" ? "not-allowed" : "pointer",
    opacity: disabled || status === "disabled" ? 0.5 : 1,
    display: "inline-flex",
    alignItems: "center",
    gap: spacing.sm,
  };

  if (status === "hover" && style === "primary") base.background = color.brandSolidHover;

  return (
    <button type="button" style={base} disabled={disabled || status === "disabled"} onClick={onClick}>
      {children}
    </button>
  );
}
