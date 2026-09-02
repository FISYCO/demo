import type { ReactNode } from "react";

import { Btn } from "./Btn";
import { color, fontSize, radius, spacing } from "./tokens";

/**
 * Модальное окно дизайн-системы.
 *
 * Существует ровно для того, чтобы его не собирали заново из `<div>`. Каждая самодельная модалка
 * в продукте — это отдельная история про фокус, escape и прокрутку фона, которую кто-то напишет
 * не до конца.
 */

export interface DialogProps {
  open: boolean;
  title: string;
  onClose: () => void;
  children?: ReactNode;
}

export function Dialog({ open, title, onClose, children }: DialogProps) {
  if (!open) return null;

  return (
    <div style={{ position: "fixed", inset: 0, background: "rgba(15, 23, 42, 0.45)", display: "grid", placeItems: "center" }}>
      <div
        role="dialog"
        aria-modal="true"
        style={{
          background: color.surface,
          borderRadius: radius.lg,
          padding: spacing.xl,
          minWidth: 360,
          border: `1px solid ${color.border}`,
        }}
      >
        <div style={{ fontSize: fontSize.lg, fontWeight: 600, marginBottom: spacing.md }}>{title}</div>
        {children}
        <div style={{ marginTop: spacing.lg, display: "flex", justifyContent: "flex-end" }}>
          <Btn style="secondary" size="sm" onClick={onClose}>
            Закрыть
          </Btn>
        </div>
      </div>
    </div>
  );
}
