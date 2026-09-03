import { color, spacing } from "./tokens";

/** Разделитель между блоками. */

export type DividerOrientation = "horizontal" | "vertical";
export type DividerTone = "default" | "strong";

export interface DividerProps {
  orientation?: DividerOrientation;
  tone?: DividerTone;
  /** Текст посередине, только для горизонтального. */
  label?: string;
}

export function Divider({ orientation = "horizontal", tone = "default", label }: DividerProps) {
  const stroke = tone === "strong" ? color.textMuted : color.border;

  if (orientation === "vertical") {
    return <span role="separator" aria-orientation="vertical" style={{ width: 1, alignSelf: "stretch", background: stroke }} />;
  }

  if (!label) {
    return <hr style={{ border: "none", borderTop: `1px solid ${stroke}`, margin: `${spacing.md}px 0` }} />;
  }

  return (
    <div role="separator" style={{ display: "flex", alignItems: "center", gap: spacing.md, margin: `${spacing.md}px 0` }}>
      <span style={{ flex: 1, height: 1, background: stroke }} />
      <span style={{ fontSize: 12, color: color.textMuted }}>{label}</span>
      <span style={{ flex: 1, height: 1, background: stroke }} />
    </div>
  );
}
