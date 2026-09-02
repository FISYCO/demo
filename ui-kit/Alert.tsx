import type { ReactNode } from "react";

import { color, fontSize, radius, spacing } from "./tokens";

/** Сообщение о состоянии: что произошло и что с этим делать. */

export type AlertStatus = "info" | "success" | "warning" | "danger";

export interface AlertProps {
  status?: AlertStatus;
  title: string;
  children?: ReactNode;
}

const SURFACE: Record<AlertStatus, { background: string; color: string }> = {
  info: { background: color.brandSubtle, color: color.brandSolid },
  success: { background: "#e6f4ec", color: color.success },
  warning: { background: "#fdf3e2", color: "#8a5a00" },
  danger: { background: "#fbeae9", color: color.danger },
};

export function Alert({ status = "info", title, children }: AlertProps) {
  return (
    <div style={{ ...SURFACE[status], borderRadius: radius.md, padding: spacing.md }}>
      <div style={{ fontSize: fontSize.md, fontWeight: 600 }}>{title}</div>
      {children ? <div style={{ fontSize: fontSize.sm, marginTop: spacing.xs }}>{children}</div> : null}
    </div>
  );
}
