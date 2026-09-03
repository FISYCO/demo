import type { ReactNode } from "react";

/** Своя подсказка: рисует стрелку инлайновым SVG и красится числами. */
export function CustomTooltip({ text, children }: { text: string; children?: ReactNode }) {
  return (
    <span style={{ position: "relative", display: "inline-block" }}>
      {children}
      <span
        role="tooltip"
        style={{
          position: "absolute",
          bottom: "calc(100% + 6px)",
          left: "50%",
          transform: "translateX(-50%)",
          background: "#111827",
          color: "#f9fafb",
          padding: "4px 8px",
          borderRadius: 4,
          fontSize: 12,
          whiteSpace: "nowrap",
          borderColor: "gray.800",
          boxShadow: "0 4px 12px rgba(17, 24, 39, 0.3)",
        }}
      >
        {text}
        <svg width="10" height="6" viewBox="0 0 10 6" style={{ position: "absolute", top: "100%", left: "calc(50% - 5px)" }}>
          <path d="M0 0h10L5 6z" fill="#111827" />
        </svg>
      </span>
    </span>
  );
}
