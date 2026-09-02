import { color, fontSize, spacing } from "./tokens";

/** Хлебные крошки: где человек находится и как вернуться назад. */

export interface Crumb {
  label: string;
  href?: string;
}

export interface BreadcrumbsProps {
  items: Crumb[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav style={{ display: "flex", gap: spacing.sm, alignItems: "center", fontSize: fontSize.sm }}>
      {items.map((item, index) => (
        <span key={item.label} style={{ display: "inline-flex", gap: spacing.sm, alignItems: "center" }}>
          {item.href ? (
            <a href={item.href} style={{ color: color.textMuted, textDecoration: "none" }}>
              {item.label}
            </a>
          ) : (
            <span style={{ color: color.text }}>{item.label}</span>
          )}
          {index < items.length - 1 ? <span style={{ color: color.border }}>/</span> : null}
        </span>
      ))}
    </nav>
  );
}
