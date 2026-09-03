import type { ReactNode } from "react";
import { useState } from "react";

import { color, fontSize, radius, spacing } from "./tokens";

/** Выпадающее меню из триггера и пунктов. Собирается как `Menu.Root` + `Menu.Item`. */

export type MenuSize = "sm" | "md";
export type MenuPlacement = "bottom-start" | "bottom-end";

export interface MenuRootProps {
  trigger: ReactNode;
  size?: MenuSize;
  placement?: MenuPlacement;
  children?: ReactNode;
}

export interface MenuItemProps {
  onSelect?: () => void;
  danger?: boolean;
  disabled?: boolean;
  children?: ReactNode;
}

function Root({ trigger, size = "md", placement = "bottom-start", children }: MenuRootProps) {
  const [open, setOpen] = useState(false);
  return (
    <span style={{ position: "relative", display: "inline-block" }}>
      <span onClick={() => setOpen((value) => !value)}>{trigger}</span>
      {open ? (
        <div
          role="menu"
          style={{
            position: "absolute",
            top: "100%",
            left: placement === "bottom-start" ? 0 : "auto",
            right: placement === "bottom-end" ? 0 : "auto",
            minWidth: 180,
            marginTop: spacing.xs,
            padding: spacing.xs,
            background: color.surface,
            border: `1px solid ${color.border}`,
            borderRadius: radius.md,
            boxShadow: "0 8px 24px rgba(15, 23, 42, 0.12)",
            fontSize: size === "sm" ? fontSize.sm : fontSize.md,
          }}
        >
          {children}
        </div>
      ) : null}
    </span>
  );
}

function Item({ onSelect, danger, disabled, children }: MenuItemProps) {
  return (
    <button
      type="button"
      role="menuitem"
      disabled={disabled}
      onClick={onSelect}
      style={{
        display: "block",
        width: "100%",
        textAlign: "left",
        padding: `${spacing.sm}px ${spacing.md}px`,
        border: "none",
        background: "transparent",
        borderRadius: radius.sm,
        color: danger ? color.danger : color.text,
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.5 : 1,
      }}
    >
      {children}
    </button>
  );
}

function Separator() {
  return <hr style={{ border: "none", borderTop: `1px solid ${color.border}`, margin: `${spacing.xs}px 0` }} />;
}

export const Menu = { Root, Item, Separator };
