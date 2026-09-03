import { memo } from "react";

import { color, radius } from "./tokens";

/** Заглушка на время загрузки. */

export type SkeletonShape = "text" | "circle" | "rect";
export type SkeletonAnimation = "pulse" | "wave" | "none";

export interface SkeletonProps {
  shape?: SkeletonShape;
  animation?: SkeletonAnimation;
  width?: number | string;
  height?: number | string;
  /** Для формы `text`: сколько строк. */
  lines?: number;
}

export const Skeleton = memo(function Skeleton({ shape = "text", animation = "pulse", width, height, lines = 1 }: SkeletonProps) {
  const base = {
    background: color.brandSubtle,
    opacity: animation === "none" ? 1 : 0.7,
    borderRadius: shape === "circle" ? radius.full : radius.sm,
  };

  if (shape === "text") {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        {Array.from({ length: lines }, (_, index) => (
          <span key={index} style={{ ...base, display: "block", height: height ?? 12, width: index === lines - 1 && lines > 1 ? "60%" : (width ?? "100%") }} />
        ))}
      </div>
    );
  }

  const side = width ?? (shape === "circle" ? 40 : "100%");
  return <span style={{ ...base, display: "inline-block", width: side, height: height ?? (shape === "circle" ? side : 80) }} />;
});
