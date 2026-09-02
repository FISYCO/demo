import type { ReactNode } from "react";

import { color, fontSize, spacing } from "./tokens";

/** Таблица: колонки описываются данными, а не разметкой. */

export interface TableColumn<T> {
  id: string;
  header: string;
  cell: (row: T) => ReactNode;
  align?: "start" | "end";
}

export interface TableProps<T> {
  rows: T[];
  columns: TableColumn<T>[];
  rowKey: (row: T) => string;
  empty?: string;
}

export function Table<T>({ rows, columns, rowKey, empty = "Пусто" }: TableProps<T>) {
  if (rows.length === 0) {
    return <div style={{ color: color.textMuted, fontSize: fontSize.sm, padding: spacing.md }}>{empty}</div>;
  }

  return (
    <table style={{ width: "100%", borderCollapse: "collapse", fontSize: fontSize.md, color: color.text }}>
      <thead>
        <tr>
          {columns.map((column) => (
            <th
              key={column.id}
              style={{
                textAlign: column.align === "end" ? "right" : "left",
                padding: spacing.sm,
                borderBottom: `1px solid ${color.border}`,
                color: color.textMuted,
                fontSize: fontSize.xs,
                textTransform: "uppercase",
                letterSpacing: "0.06em",
              }}
            >
              {column.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={rowKey(row)}>
            {columns.map((column) => (
              <td
                key={column.id}
                style={{
                  padding: spacing.sm,
                  borderBottom: `1px solid ${color.border}`,
                  textAlign: column.align === "end" ? "right" : "left",
                }}
              >
                {column.cell(row)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
