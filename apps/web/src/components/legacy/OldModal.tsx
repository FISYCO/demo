import type { ReactNode } from "react";

/** Модалка из первой версии кабинета. Dialog из дизайн-системы её заменяет, но удаление аккаунта так и не перевели. */
export function OldModal({ open, title, children }: { open: boolean; title: string; children: ReactNode }) {
  if (!open) return null;
  return (
    <div className="old-modal-backdrop" style={{ background: "rgba(15, 23, 42, 0.6)" }}>
      <div className="old-modal" style={{ background: "#ffffff", borderRadius: 12, padding: 24 }}>
        <h2>{title}</h2>
        {children}
      </div>
    </div>
  );
}
