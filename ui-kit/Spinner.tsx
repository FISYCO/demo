import { color, radius } from "./tokens";

/** Индикатор ожидания. */

export type SpinnerSize = "sm" | "md" | "lg";

export interface SpinnerProps {
  size?: SpinnerSize;
}

const SIDE: Record<SpinnerSize, number> = { sm: 14, md: 18, lg: 24 };

export function Spinner({ size = "md" }: SpinnerProps) {
  const side = SIDE[size];
  return (
    <span
      role="status"
      style={{
        width: side,
        height: side,
        borderRadius: radius.full,
        border: `2px solid ${color.border}`,
        borderTopColor: color.brandSolid,
        display: "inline-block",
      }}
    />
  );
}
