import { color, fontSize, radius, spacing } from "./tokens";

/** Постраничная навигация. */

export type PaginationSize = "sm" | "md";
export type PaginationShape = "square" | "round";

export interface PaginationProps {
  page: number;
  pageCount: number;
  size?: PaginationSize;
  shape?: PaginationShape;
  /** Сколько страниц показывать вокруг текущей. */
  siblings?: number;
  onChange?: (page: number) => void;
}

export function Pagination({ page, pageCount, size = "md", shape = "square", siblings = 1, onChange }: PaginationProps) {
  const side = size === "sm" ? 28 : 36;
  const pages: number[] = [];
  for (let index = Math.max(1, page - siblings); index <= Math.min(pageCount, page + siblings); index += 1) pages.push(index);

  const button = (label: string, target: number, active = false) => (
    <button
      key={`${label}-${target}`}
      type="button"
      disabled={target < 1 || target > pageCount}
      aria-current={active ? "page" : undefined}
      onClick={() => onChange?.(target)}
      style={{
        minWidth: side,
        height: side,
        padding: `0 ${spacing.sm}px`,
        borderRadius: shape === "round" ? radius.full : radius.sm,
        border: `1px solid ${active ? color.brandSolid : color.border}`,
        background: active ? color.brandSolid : color.surface,
        color: active ? color.surface : color.text,
        fontSize: size === "sm" ? fontSize.sm : fontSize.md,
        cursor: "pointer",
      }}
    >
      {label}
    </button>
  );

  return (
    <nav aria-label="Страницы" style={{ display: "flex", gap: spacing.xs }}>
      {button("‹", page - 1)}
      {pages[0] > 1 ? button("1", 1) : null}
      {pages.map((value) => button(String(value), value, value === page))}
      {pages[pages.length - 1] < pageCount ? button(String(pageCount), pageCount) : null}
      {button("›", page + 1)}
    </nav>
  );
}
