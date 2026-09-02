/**
 * Своя модалка.
 *
 * Написана до того, как в дизайн-системе появился `Dialog`, и с тех пор живёт своей жизнью: не
 * держит фокус, не закрывается по escape и не блокирует прокрутку фона. Оставлена намеренно —
 * это то, что библиотекарь должен находить.
 */
export function LegacyModal({ open, title, children }: { open: boolean; title: string; children?: React.ReactNode }) {
  if (!open) return null;

  return (
    <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)" }}>
      <div style={{ background: "#ffffff", borderRadius: 8, padding: 24, margin: "10% auto", width: 420 }}>
        <h2 style={{ fontSize: 16, color: "#111827" }}>{title}</h2>
        {children}
      </div>
    </div>
  );
}
