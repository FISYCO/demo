import type { ReactNode } from "react";

import { color, fontSize, spacing } from "./tokens";

/** Подпись, подсказка и ошибка вокруг любого поля. */

export type FieldLayout = "vertical" | "horizontal";

export interface FieldProps {
  label: string;
  hint?: string;
  error?: string;
  required?: boolean;
  layout?: FieldLayout;
  children?: ReactNode;
}

export function Field({ label, hint, error, required, layout = "vertical", children }: FieldProps) {
  return (
    <label
      style={{
        display: "flex",
        flexDirection: layout === "vertical" ? "column" : "row",
        alignItems: layout === "vertical" ? "stretch" : "center",
        gap: layout === "vertical" ? spacing.xs : spacing.lg,
      }}
    >
      <span style={{ fontSize: fontSize.sm, fontWeight: 500, color: color.text, minWidth: layout === "horizontal" ? 160 : undefined }}>
        {label}
        {required ? <span style={{ color: color.danger }}> *</span> : null}
      </span>
      <span style={{ display: "flex", flexDirection: "column", gap: spacing.xs, flex: 1 }}>
        {children}
        {error ? (
          <span style={{ fontSize: fontSize.xs, color: color.danger }}>{error}</span>
        ) : hint ? (
          <span style={{ fontSize: fontSize.xs, color: color.textMuted }}>{hint}</span>
        ) : null}
      </span>
    </label>
  );
}
