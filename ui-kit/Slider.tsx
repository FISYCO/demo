import { color, fontSize, spacing } from "./tokens";

/** Ползунок числового значения. */

export type SliderSize = "sm" | "md";
export type SliderTone = "brand" | "success";

export interface SliderProps {
  value: number;
  min?: number;
  max?: number;
  step?: number;
  size?: SliderSize;
  tone?: SliderTone;
  showValue?: boolean;
  disabled?: boolean;
  onChange?: (value: number) => void;
}

export function Slider({ value, min = 0, max = 100, step = 1, size = "md", tone = "brand", showValue = false, disabled, onChange }: SliderProps) {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: spacing.sm, width: "100%" }}>
      <input
        type="range"
        value={value}
        min={min}
        max={max}
        step={step}
        disabled={disabled}
        onChange={(event) => onChange?.(Number(event.target.value))}
        style={{
          flex: 1,
          height: size === "sm" ? 2 : 4,
          accentColor: tone === "success" ? color.success : color.brandSolid,
          cursor: disabled ? "not-allowed" : "pointer",
        }}
      />
      {showValue ? <span style={{ fontSize: fontSize.sm, color: color.textMuted, minWidth: 32, textAlign: "right" }}>{value}</span> : null}
    </span>
  );
}
