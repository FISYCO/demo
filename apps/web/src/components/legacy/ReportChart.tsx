/** График в отчётах: цвета серий и сетка прописаны числами прямо в SVG. */
export function ReportChart({ series, height = 160 }: { series: Array<{ name: string; values: number[]; color?: string }>; height?: number }) {
  const width = 480;
  const max = Math.max(...series.flatMap((line) => line.values), 1);
  const palette = ["#2563eb", "#16a34a", "#f59e0b", "#dc2626"];

  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} role="img" aria-label="Динамика">
      {[0.25, 0.5, 0.75].map((tick) => (
        <line key={tick} x1={0} x2={width} y1={height * tick} y2={height * tick} stroke="#e5e7eb" strokeDasharray="4 4" />
      ))}
      {series.map((line, index) => {
        const points = line.values
          .map((value, position) => `${(position / Math.max(line.values.length - 1, 1)) * width},${height - (value / max) * height}`)
          .join(" ");
        return <polyline key={line.name} points={points} fill="none" stroke={line.color ?? palette[index % palette.length]} strokeWidth={2} />;
      })}
      <text x={8} y={16} fontSize={11} fill="#6b7280">
        {series.map((line) => line.name).join(" · ")}
      </text>
    </svg>
  );
}
