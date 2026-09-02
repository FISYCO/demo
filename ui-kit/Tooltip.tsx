import type { ReactNode } from "react";

import { color, fontSize, radius, spacing } from "./tokens";

/**
 * Подсказка.
 *
 * @deprecated Используйте `Popover`: подсказка не умеет держать фокус и недоступна с клавиатуры.
 */
export interface TooltipProps {
  label: string;
  children?: ReactNode;
}

export function Tooltip({ label, children }: TooltipProps) {
  return (
    <span title={label} style={{ borderBottom: `1px dashed ${color.border}`, fontSize: fontSize.sm }}>
      {children}
      <span style={{ padding: spacing.xs, borderRadius: radius.sm }} />
    </span>
  );
}
