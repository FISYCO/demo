import { palette, shadows } from "../../lib/legacy-palette";

/** Таблица на старой палитре: сырые токены шкалы вместо семантических. */
export function LegacyTable({ rows }: { rows: Array<Record<string, string>> }) {
  const columns = rows[0] ? Object.keys(rows[0]) : [];
  return (
    <table style={{ width: "100%", borderCollapse: "collapse", boxShadow: shadows.card, color: palette.text }}>
      <thead>
        <tr style={{ background: "gray.50", color: "gray.500", fontSize: 12, textTransform: "uppercase" }}>
          {columns.map((column) => (
            <th key={column} style={{ textAlign: "left", padding: "8px 12px", borderBottom: "1px solid #e5e7eb" }}>
              {column}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => (
          <tr key={index} style={{ borderBottom: "1px solid gray.200" }}>
            {columns.map((column) => (
              <td key={column} style={{ padding: "10px 12px", fontSize: 14, color: "gray.900" }}>
                {row[column]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
