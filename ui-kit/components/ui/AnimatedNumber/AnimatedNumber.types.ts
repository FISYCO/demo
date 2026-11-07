export interface AnimatedNumberProps {
  value: number;
  /** Как показать число: разделители разрядов, проценты. По умолчанию — как есть. */
  format?: (value: number) => string;
  "data-testid"?: string;
}
