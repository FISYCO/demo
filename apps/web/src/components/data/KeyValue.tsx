import { Divider, color, fontSize, spacing } from "@demo/ui";

/** Пары «ключ — значение» с разделителями. */
export function KeyValue({ rows }: { rows: Array<{ key: string; value: string }> }) {
  return (
    <dl style={{ margin: 0 }}>
      {rows.map((row, index) => (
        <div key={row.key}>
          <div style={{ display: "flex", justifyContent: "space-between", padding: `${spacing.sm}px 0`, fontSize: fontSize.sm }}>
            <dt style={{ color: color.textMuted }}>{row.key}</dt>
            <dd style={{ margin: 0, color: color.text }}>{row.value}</dd>
          </div>
          {index < rows.length - 1 ? <Divider tone="default" /> : null}
        </div>
      ))}
    </dl>
  );
}
