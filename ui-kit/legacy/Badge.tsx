import type { ReactNode } from "react";

/**
 * Старый бейдж.
 *
 * Оставлен рядом с новым `Badge` с тем же именем: так выглядит дубль, который дизайн-система
 * копит годами. Библиотекарь должен его видеть.
 */
export interface BadgeProps {
  color?: "gray" | "green" | "red";
  children?: ReactNode;
}

const COLORS = { gray: "#6b7280", green: "#059669", red: "#dc2626" };

export function Badge({ color = "gray", children }: BadgeProps) {
  return (
    <span style={{ padding: "2px 6px", borderRadius: 4, fontSize: 11, color: "#fff", background: COLORS[color] }}>
      {children}
    </span>
  );
}
