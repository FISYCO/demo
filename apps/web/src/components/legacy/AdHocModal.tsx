import type { ReactNode } from "react";

/** Ещё одна своя модалка, вторая после LegacyModal. Каждая команда писала свою. */
export function AdHocModal({ open, children, onClose }: { open: boolean; children?: ReactNode; onClose: () => void }) {
  if (!open) return null;
  return (
    <div onClick={onClose} style={{ position: "fixed", inset: 0, background: "rgba(17, 24, 39, 0.6)", display: "grid", placeItems: "center" }}>
      <div onClick={(event) => event.stopPropagation()} style={{ background: "hsl(0, 0%, 100%)", borderRadius: 12, padding: 20, minWidth: 360, boxShadow: "0 20px 40px rgba(0,0,0,0.25)" }}>
        {children}
        <button type="button" onClick={onClose} style={{ marginTop: 16, color: "blue.600", background: "none", border: "none", cursor: "pointer", borderTop: "1px solid gray.100" }}>
          Закрыть
        </button>
      </div>
    </div>
  );
}
