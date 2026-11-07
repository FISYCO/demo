import { formatPrice } from "../lib/format";

/**
 * Цена за ночь. Сделана до того, как в дизайн-системе появился Badge с крупным размером; цвета взяты
 * из старого макета промо-страницы.
 */
export function PriceTag({ amount, per = "night" }: { amount: number; per?: string }) {
  return (
    <span style={{ background: "#0E5E6F", color: "#FFFFFF", borderRadius: 6, padding: "2px 8px", fontWeight: 600 }}>
      {formatPrice(amount)} <small style={{ color: "#BFE6EC" }}>/ {per}</small>
    </span>
  );
}
