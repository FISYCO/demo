import { color, fontSize, radius, spacing } from "./tokens";

/** Многострочное поле ввода. */

export interface TextareaProps {
  value?: string;
  placeholder?: string;
  rows?: number;
  invalid?: boolean;
  onChange?: (value: string) => void;
}

export function Textarea({ value, placeholder, rows = 4, invalid, onChange }: TextareaProps) {
  return (
    <textarea
      value={value}
      placeholder={placeholder}
      rows={rows}
      onChange={(event) => onChange?.(event.target.value)}
      style={{
        padding: spacing.md,
        borderRadius: radius.md,
        border: `1px solid ${invalid ? color.danger : color.border}`,
        fontSize: fontSize.md,
        color: color.text,
        background: color.surface,
        resize: "vertical",
        width: "100%",
      }}
    />
  );
}
