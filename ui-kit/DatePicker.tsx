import { color, fontSize, radius, spacing } from "./tokens";

/** Выбор даты: поле с нативным календарём. */

export type DatePickerSize = "sm" | "md" | "lg";

export interface DatePickerProps {
  value?: string;
  min?: string;
  max?: string;
  size?: DatePickerSize;
  invalid?: boolean;
  disabled?: boolean;
  onChange?: (value: string) => void;
}

const HEIGHT: Record<DatePickerSize, number> = { sm: 28, md: 36, lg: 44 };

export function DatePicker({ value, min, max, size = "md", invalid, disabled, onChange }: DatePickerProps) {
  return (
    <input
      type="date"
      value={value ?? ""}
      min={min}
      max={max}
      disabled={disabled}
      aria-invalid={invalid || undefined}
      onChange={(event) => onChange?.(event.target.value)}
      style={{
        height: HEIGHT[size],
        padding: `0 ${spacing.md}px`,
        borderRadius: radius.md,
        border: `1px solid ${invalid ? color.danger : color.border}`,
        background: disabled ? color.surfaceMuted : color.surface,
        color: color.text,
        fontSize: size === "lg" ? fontSize.lg : size === "sm" ? fontSize.sm : fontSize.md,
      }}
    />
  );
}
