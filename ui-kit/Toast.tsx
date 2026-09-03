import type { ReactNode } from "react";

import { color, fontSize, radius, spacing } from "./tokens";

/** Короткое уведомление поверх экрана. Для постоянного сообщения на странице есть `Alert`. */

export type ToastStatus = "info" | "success" | "warning" | "danger";
export type ToastPlacement = "top-end" | "bottom-end" | "bottom-center";

export interface ToastProps {
  status?: ToastStatus;
  placement?: ToastPlacement;
  title: string;
  description?: string;
  action?: ReactNode;
  onClose?: () => void;
}

const ACCENT: Record<ToastStatus, string> = {
  info: color.brandSolid,
  success: color.success,
  warning: "#8a5a00",
  danger: color.danger,
};

export function Toast({ status = "info", placement = "bottom-end", title, description, action, onClose }: ToastProps) {
  return (
    <div
      role="status"
      style={{
        position: "fixed",
        top: placement === "top-end" ? spacing.lg : "auto",
        bottom: placement === "top-end" ? "auto" : spacing.lg,
        right: placement === "bottom-center" ? "50%" : spacing.lg,
        transform: placement === "bottom-center" ? "translateX(50%)" : "none",
        minWidth: 280,
        maxWidth: 420,
        padding: `${spacing.md}px ${spacing.lg}px`,
        borderRadius: radius.md,
        background: color.text,
        color: color.surface,
        borderLeft: `3px solid ${ACCENT[status]}`,
        display: "flex",
        gap: spacing.md,
        alignItems: "flex-start",
        boxShadow: "0 12px 32px rgba(15, 23, 42, 0.28)",
      }}
    >
      <span style={{ flex: 1 }}>
        <div style={{ fontSize: fontSize.md, fontWeight: 600 }}>{title}</div>
        {description ? <div style={{ fontSize: fontSize.sm, opacity: 0.8 }}>{description}</div> : null}
      </span>
      {action}
      {onClose ? (
        <button type="button" onClick={onClose} aria-label="Закрыть" style={{ border: "none", background: "transparent", color: "inherit", cursor: "pointer" }}>
          ×
        </button>
      ) : null}
    </div>
  );
}
