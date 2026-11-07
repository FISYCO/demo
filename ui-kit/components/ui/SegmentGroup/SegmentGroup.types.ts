import type { ReactNode } from "react";

export interface SegmentGroupOption<T extends string> {
  value: T;
  label: ReactNode;
  /** Сколько записей под этим отбором — число рядом с подписью. */
  count?: number;
  disabled?: boolean;
}

export interface SegmentGroupProps<T extends string> {
  options: SegmentGroupOption<T>[];
  value: T;
  onValueChange: (value: T) => void;
  /** Что выбирается: «Отбор изменений», «Способ сравнения». Читалка называет группу им. */
  "aria-label": string;
  size?: "xs" | "sm" | "md";
  /** Во всю ширину строки, пункты делят её поровну. По умолчанию — ширина по содержимому. */
  fitted?: boolean;
  "data-testid"?: string;
}
