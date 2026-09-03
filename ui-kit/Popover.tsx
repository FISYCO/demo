import type { ReactNode } from "react";
import { useState } from "react";

import { color, fontSize, radius, spacing } from "./tokens";

/**
 * Всплывающая панель у элемента.
 *
 * @deprecated Используйте `Menu` для действий и `Drawer` для форм: у поповера нет ловушки фокуса.
 */
export type PopoverPlacement = "top" | "bottom" | "start" | "end";

export interface PopoverProps {
  trigger: ReactNode;
  placement?: PopoverPlacement;
  children?: ReactNode;
}

/** @deprecated Используйте `Menu` или `Drawer`. */
export function Popover({ trigger, placement = "bottom", children }: PopoverProps) {
  const [open, setOpen] = useState(false);
  const offset: Record<PopoverPlacement, object> = {
    top: { bottom: "100%", left: 0, marginBottom: spacing.xs },
    bottom: { top: "100%", left: 0, marginTop: spacing.xs },
    start: { right: "100%", top: 0, marginRight: spacing.xs },
    end: { left: "100%", top: 0, marginLeft: spacing.xs },
  };
  return (
    <span style={{ position: "relative", display: "inline-block" }}>
      <span onClick={() => setOpen((value) => !value)}>{trigger}</span>
      {open ? (
        <div
          style={{
            position: "absolute",
            ...offset[placement],
            minWidth: 220,
            padding: spacing.md,
            background: color.surface,
            border: `1px solid ${color.border}`,
            borderRadius: radius.md,
            fontSize: fontSize.sm,
            color: color.text,
          }}
        >
          {children}
        </div>
      ) : null}
    </span>
  );
}
