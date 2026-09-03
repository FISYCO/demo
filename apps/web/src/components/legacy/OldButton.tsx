/**
 * Кнопка, написанная до дизайн-системы.
 *
 * Дублирует `Btn` почти целиком, но красится своими числами и живёт в трёх экранах. Ровно то, что
 * библиотекарь должен предложить заменить.
 */
export function OldButton({ kind = "primary", children, onClick }: { kind?: "primary" | "ghost"; children?: React.ReactNode; onClick?: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        background: kind === "primary" ? "#2c3e8f" : "transparent",
        color: kind === "primary" ? "#ffffff" : "#2c3e8f",
        border: kind === "primary" ? "none" : "1px solid #c7d0e1",
        boxShadow: kind === "primary" ? "0 1px 2px rgba(15, 23, 42, 0.2)" : "none",
        outlineColor: "blue.500",
        borderRadius: 6,
        padding: "8px 14px",
        fontSize: 14,
        cursor: "pointer",
      }}
    >
      {children}
    </button>
  );
}
