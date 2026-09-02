import { color, fontSize, radius, spacing } from "./tokens";

/** Выбор одного значения из списка. */

export interface SelectOption {
  label: string;
  value: string;
}

export type SelectSize = "sm" | "md";

export interface SelectProps {
  options: SelectOption[];
  value?: string;
  placeholder?: string;
  size?: SelectSize;
  onChange?: (value: string) => void;
}

export function Select({ options, value, placeholder, size = "md", onChange }: SelectProps) {
  return (
    <select
      value={value ?? ""}
      onChange={(event) => onChange?.(event.target.value)}
      style={{
        height: size === "sm" ? 28 : 36,
        padding: `0 ${spacing.md}px`,
        borderRadius: radius.md,
        border: `1px solid ${color.border}`,
        background: color.surface,
        color: color.text,
        fontSize: fontSize.md,
      }}
    >
      {placeholder ? <option value="">{placeholder}</option> : null}
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
