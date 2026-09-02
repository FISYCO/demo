import { color, fontSize, radius, spacing } from "./tokens";

/** Вкладки: переключение между разделами одного экрана. */

export interface TabItem {
  value: string;
  label: string;
}

export interface TabsProps {
  items: TabItem[];
  value: string;
  onChange?: (value: string) => void;
}

export function Tabs({ items, value, onChange }: TabsProps) {
  return (
    <div style={{ display: "inline-flex", gap: spacing.xs, background: color.surfaceMuted, padding: spacing.xs, borderRadius: radius.md }}>
      {items.map((item) => {
        const active = item.value === value;
        return (
          <button
            key={item.value}
            type="button"
            onClick={() => onChange?.(item.value)}
            style={{
              padding: `${spacing.xs}px ${spacing.md}px`,
              borderRadius: radius.sm,
              border: "none",
              background: active ? color.surface : "transparent",
              color: active ? color.text : color.textMuted,
              fontSize: fontSize.sm,
              fontWeight: active ? 600 : 400,
              cursor: "pointer",
            }}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}
