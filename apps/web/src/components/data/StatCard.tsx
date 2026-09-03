import { Card, Chip, Progress, Skeleton, color, fontSize, spacing } from "@demo/ui";

/** Плитка метрики: значение, изменение и прогресс к цели. */
export interface StatCardProps {
  label: string;
  value?: string;
  delta?: number;
  target?: number;
  loading?: boolean;
}

export function StatCard({ label, value, delta, target, loading }: StatCardProps) {
  if (loading) {
    return (
      <Card tone="default">
        <Skeleton shape="text" lines={2} />
        <Skeleton shape="rect" height={6} animation="wave" />
      </Card>
    );
  }

  return (
    <Card tone="default">
      <div style={{ fontSize: fontSize.sm, color: color.textMuted }}>{label}</div>
      <div style={{ display: "flex", alignItems: "baseline", gap: spacing.sm, margin: `${spacing.xs}px 0 ${spacing.sm}px` }}>
        <span style={{ fontSize: 28, fontWeight: 700, color: color.text }}>{value}</span>
        {delta != null ? (
          <Chip tone={delta >= 0 ? "success" : "danger"} size="sm">
            {delta >= 0 ? `+${delta}%` : `${delta}%`}
          </Chip>
        ) : null}
      </div>
      {target != null ? <Progress value={target} size="xs" tone={target >= 100 ? "success" : "brand"} /> : null}
    </Card>
  );
}
