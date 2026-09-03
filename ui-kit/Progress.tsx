import { color, radius } from "./tokens";

/** Прогресс: полоса или кольцо. */

export type ProgressSize = "xs" | "sm" | "md";
export type ProgressTone = "brand" | "success" | "danger";
export type ProgressShape = "bar" | "ring";

export interface ProgressProps {
  /** 0…100; без значения — неопределённый. */
  value?: number;
  size?: ProgressSize;
  tone?: ProgressTone;
  shape?: ProgressShape;
  label?: string;
}

const THICKNESS: Record<ProgressSize, number> = { xs: 3, sm: 6, md: 10 };
const TONE: Record<ProgressTone, string> = { brand: color.brandSolid, success: color.success, danger: color.danger };

export function Progress({ value, size = "sm", tone = "brand", shape = "bar", label }: ProgressProps) {
  const clamped = value == null ? null : Math.max(0, Math.min(100, value));

  if (shape === "ring") {
    const side = size === "md" ? 48 : size === "sm" ? 32 : 20;
    return (
      <span
        role="progressbar"
        aria-label={label}
        aria-valuenow={clamped ?? undefined}
        style={{
          width: side,
          height: side,
          borderRadius: radius.full,
          background: `conic-gradient(${TONE[tone]} ${clamped ?? 25}%, ${color.brandSubtle} 0)`,
          display: "inline-block",
        }}
      />
    );
  }

  return (
    <div
      role="progressbar"
      aria-label={label}
      aria-valuenow={clamped ?? undefined}
      style={{ height: THICKNESS[size], background: color.brandSubtle, borderRadius: radius.full, overflow: "hidden" }}
    >
      <div style={{ width: `${clamped ?? 40}%`, height: "100%", background: TONE[tone], borderRadius: radius.full }} />
    </div>
  );
}
