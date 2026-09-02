import { color, fontSize, radius, spacing } from "./tokens";

/** Флажок с подписью. */

export interface CheckboxProps {
  checked?: boolean;
  label?: string;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
}

export function Checkbox({ checked = false, label, disabled, onChange }: CheckboxProps) {
  return (
    <label style={{ display: "inline-flex", alignItems: "center", gap: spacing.sm, fontSize: fontSize.md, color: color.text }}>
      <span
        style={{
          width: 16,
          height: 16,
          borderRadius: radius.sm,
          border: `1px solid ${checked ? color.brandSolid : color.border}`,
          background: checked ? color.brandSolid : color.surface,
          opacity: disabled ? 0.5 : 1,
        }}
      />
      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={(event) => onChange?.(event.target.checked)}
        style={{ position: "absolute", opacity: 0, width: 0, height: 0 }}
      />
      {label}
    </label>
  );
}
