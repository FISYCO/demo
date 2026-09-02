import { color, radius } from "./tokens";

/** Переключатель: включено или выключено, без промежуточных состояний. */

export type SwitchSize = "sm" | "md";

export interface SwitchProps {
  checked?: boolean;
  size?: SwitchSize;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
}

export function Switch({ checked = false, size = "md", disabled, onChange }: SwitchProps) {
  const width = size === "sm" ? 32 : 40;
  const height = size === "sm" ? 18 : 22;

  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      disabled={disabled}
      onClick={() => onChange?.(!checked)}
      style={{
        width,
        height,
        borderRadius: radius.full,
        border: "none",
        background: checked ? color.brandSolid : color.border,
        opacity: disabled ? 0.5 : 1,
        cursor: disabled ? "not-allowed" : "pointer",
        padding: 2,
        display: "inline-flex",
        justifyContent: checked ? "flex-end" : "flex-start",
      }}
    >
      <span style={{ width: height - 4, height: height - 4, borderRadius: radius.full, background: color.surface }} />
    </button>
  );
}
