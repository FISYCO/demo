export interface RefreshBarProps {
  /** Идёт фоновое обновление уже показанных данных (`isFetching && data`). */
  active: boolean;
  /**
   * `top` — полоса лежит поверх верхнего края родителя и не сдвигает содержимое (родителю нужен
   * `position="relative"`); `inline` — занимает свою строку высотой 2px.
   */
  placement?: "top" | "inline";
  /**
   * Через сколько полоса загорается. `background` (по умолчанию) — 300 мс: быстрый фоновый ответ её не зажигает.
   * `navigation` — 100 мс: клик по ссылке должен ответить сразу, а мгновенный переход всё равно её не зажжёт.
   */
  delay?: "background" | "navigation";
  "data-testid"?: string;
}
