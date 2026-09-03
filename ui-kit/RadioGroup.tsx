import { color, fontSize, spacing } from "./tokens";

/** Группа переключателей «один из». */

export type RadioOrientation = "vertical" | "horizontal";
export type RadioSize = "sm" | "md";

export interface RadioOption {
  value: string;
  label: string;
  description?: string;
  disabled?: boolean;
}

export interface RadioGroupProps {
  name: string;
  options: RadioOption[];
  value?: string;
  orientation?: RadioOrientation;
  size?: RadioSize;
  onChange?: (value: string) => void;
}

export function RadioGroup({ name, options, value, orientation = "vertical", size = "md", onChange }: RadioGroupProps) {
  return (
    <div
      role="radiogroup"
      style={{
        display: "flex",
        flexDirection: orientation === "vertical" ? "column" : "row",
        gap: orientation === "vertical" ? spacing.sm : spacing.lg,
      }}
    >
      {options.map((option) => (
        <label
          key={option.value}
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: spacing.sm,
            fontSize: size === "sm" ? fontSize.sm : fontSize.md,
            color: option.disabled ? color.textMuted : color.text,
            cursor: option.disabled ? "not-allowed" : "pointer",
          }}
        >
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={value === option.value}
            disabled={option.disabled}
            onChange={() => onChange?.(option.value)}
            style={{ accentColor: color.brandSolid, marginTop: 2 }}
          />
          <span>
            {option.label}
            {option.description ? (
              <span style={{ display: "block", fontSize: fontSize.xs, color: color.textMuted }}>{option.description}</span>
            ) : null}
          </span>
        </label>
      ))}
    </div>
  );
}
