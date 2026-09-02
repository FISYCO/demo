import { color, fontSize, radius, spacing } from "./tokens";

/** Поле ввода. */

export type InputSize = "sm" | "md";

export interface InputProps {
  value?: string;
  placeholder?: string;
  size?: InputSize;
  invalid?: boolean;
  onChange?: (value: string) => void;
}

export function Input({ value, placeholder, size = "md", invalid, onChange }: InputProps) {
  return (
    <input
      value={value}
      placeholder={placeholder}
      onChange={(event) => onChange?.(event.target.value)}
      style={{
        height: size === "sm" ? 28 : 36,
        padding: `0 ${spacing.md}px`,
        borderRadius: radius.md,
        border: `1px solid ${invalid ? color.danger : color.border}`,
        fontSize: fontSize.md,
        color: color.text,
        background: color.surface,
      }}
    />
  );
}
