import { color, fontSize, radius, spacing } from "./tokens";

/** Переключатель режимов в одну строку. Для навигации по разделам есть `Tabs`. */

export type SegmentedSize = "sm" | "md";

export interface SegmentedOption {
  value: string;
  label: string;
}

export interface SegmentedControlProps {
  options: SegmentedOption[];
  value: string;
  size?: SegmentedSize;
  fullWidth?: boolean;
  onChange?: (value: string) => void;
}

export function SegmentedControl({ options, value, size = "md", fullWidth = false, onChange }: SegmentedControlProps) {
  return (
    <div
      role="tablist"
      style={{
        display: fullWidth ? "flex" : "inline-flex",
        padding: 2,
        background: color.surfaceMuted,
        borderRadius: radius.md,
        gap: 2,
      }}
    >
      {options.map((option) => {
        const active = option.value === value;
        return (
          <button
            key={option.value}
            type="button"
            role="tab"
            aria-selected={active}
            onClick={() => onChange?.(option.value)}
            style={{
              flex: fullWidth ? 1 : undefined,
              padding: size === "sm" ? `${spacing.xs}px ${spacing.sm}px` : `${spacing.sm}px ${spacing.md}px`,
              borderRadius: radius.sm,
              border: "none",
              background: active ? color.surface : "transparent",
              color: active ? color.text : color.textMuted,
              boxShadow: active ? "0 1px 2px rgba(15, 23, 42, 0.12)" : "none",
              fontSize: size === "sm" ? fontSize.sm : fontSize.md,
              fontWeight: active ? 600 : 400,
              cursor: "pointer",
            }}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
