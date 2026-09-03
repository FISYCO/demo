import type { ReactNode } from "react";

import { color, fontSize, radius, spacing } from "./tokens";

/** Выезжающая панель. В отличие от Dialog не блокирует контекст полностью. */

export type DrawerPlacement = "start" | "end" | "bottom";
export type DrawerSize = "sm" | "md" | "lg" | "full";

export interface DrawerProps {
  open: boolean;
  title: string;
  placement?: DrawerPlacement;
  size?: DrawerSize;
  onClose: () => void;
  footer?: ReactNode;
  children?: ReactNode;
}

const WIDTH: Record<DrawerSize, string> = { sm: "320px", md: "480px", lg: "640px", full: "100%" };

export function Drawer({ open, title, placement = "end", size = "md", onClose, footer, children }: DrawerProps) {
  if (!open) return null;

  const horizontal = placement !== "bottom";

  return (
    <div
      role="presentation"
      onClick={onClose}
      style={{ position: "fixed", inset: 0, background: "rgba(15, 23, 42, 0.45)", display: "flex" }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={title}
        onClick={(event) => event.stopPropagation()}
        style={{
          marginLeft: placement === "end" ? "auto" : 0,
          marginTop: placement === "bottom" ? "auto" : 0,
          width: horizontal ? WIDTH[size] : "100%",
          height: horizontal ? "100%" : size === "full" ? "100%" : "60%",
          background: color.surface,
          color: color.text,
          borderRadius: placement === "bottom" ? `${radius.lg}px ${radius.lg}px 0 0` : 0,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <header
          style={{
            padding: `${spacing.md}px ${spacing.lg}px`,
            borderBottom: `1px solid ${color.border}`,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: fontSize.lg,
            fontWeight: 600,
          }}
        >
          {title}
          <button type="button" onClick={onClose} aria-label="Закрыть" style={{ border: "none", background: "transparent", cursor: "pointer" }}>
            ×
          </button>
        </header>
        <div style={{ flex: 1, overflow: "auto", padding: spacing.lg }}>{children}</div>
        {footer ? <footer style={{ padding: spacing.lg, borderTop: `1px solid ${color.border}` }}>{footer}</footer> : null}
      </div>
    </div>
  );
}
