import type { ReactNode } from "react";
import { useState } from "react";

import { color, fontSize, radius, spacing } from "./tokens";

/** Раскрывающийся список секций. */

export type AccordionVariant = "line" | "boxed";
export type AccordionSize = "sm" | "md";

export interface AccordionItem {
  value: string;
  title: string;
  content: ReactNode;
}

export interface AccordionProps {
  items: AccordionItem[];
  variant?: AccordionVariant;
  size?: AccordionSize;
  /** Открытая секция по умолчанию. */
  defaultValue?: string;
  multiple?: boolean;
}

export function Accordion({ items, variant = "line", size = "md", defaultValue, multiple = false }: AccordionProps) {
  const [open, setOpen] = useState<string[]>(defaultValue ? [defaultValue] : []);

  const toggle = (value: string) => {
    setOpen((current) => {
      if (current.includes(value)) return current.filter((known) => known !== value);
      return multiple ? [...current, value] : [value];
    });
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: variant === "boxed" ? spacing.sm : 0,
      }}
    >
      {items.map((item) => {
        const expanded = open.includes(item.value);
        return (
          <div
            key={item.value}
            style={{
              border: variant === "boxed" ? `1px solid ${color.border}` : "none",
              borderBottom: variant === "line" ? `1px solid ${color.border}` : undefined,
              borderRadius: variant === "boxed" ? radius.md : 0,
              background: variant === "boxed" && expanded ? color.surfaceMuted : "transparent",
            }}
          >
            <button
              type="button"
              onClick={() => toggle(item.value)}
              aria-expanded={expanded}
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: size === "sm" ? `${spacing.sm}px ${spacing.md}px` : `${spacing.md}px ${spacing.lg}px`,
                background: "transparent",
                border: "none",
                cursor: "pointer",
                fontSize: size === "sm" ? fontSize.sm : fontSize.md,
                fontWeight: 500,
                color: color.text,
              }}
            >
              {item.title}
              <span style={{ color: color.textMuted, transform: expanded ? "rotate(180deg)" : "none" }}>⌄</span>
            </button>
            {expanded ? (
              <div style={{ padding: `0 ${spacing.lg}px ${spacing.md}px`, fontSize: fontSize.sm, color: color.textMuted }}>
                {item.content}
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
