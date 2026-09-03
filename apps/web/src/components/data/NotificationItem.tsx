import { Avatar, Badge, IconButton, color, fontSize, spacing } from "@demo/ui";

import { formatDate } from "../../lib/format";

export interface Notification {
  id: string;
  actor: string;
  title: string;
  body: string;
  at: string;
  unread: boolean;
  severity: "info" | "breaking";
}

/** Уведомление в списке входящих. */
export function NotificationItem({ item, onArchive }: { item: Notification; onArchive: (id: string) => void }) {
  return (
    <article style={{ display: "flex", gap: spacing.md, padding: spacing.md, background: item.unread ? color.brandSubtle : color.surface, borderBottom: `1px solid ${color.border}` }}>
      <Avatar name={item.actor} size="sm" />
      <div style={{ flex: 1 }}>
        <div style={{ display: "flex", gap: spacing.sm, alignItems: "center" }}>
          <span style={{ fontSize: fontSize.md, fontWeight: item.unread ? 600 : 400, color: color.text }}>{item.title}</span>
          {item.severity === "breaking" ? <Badge tone="danger">ломающее</Badge> : null}
          <span style={{ fontSize: fontSize.xs, color: color.textMuted, marginLeft: "auto" }}>{formatDate(item.at)}</span>
        </div>
        <p style={{ margin: `${spacing.xs}px 0 0`, fontSize: fontSize.sm, color: color.textMuted }}>{item.body}</p>
      </div>
      <IconButton label="В архив" size="xs" variant="ghost" onClick={() => onArchive(item.id)}>
        ✓
      </IconButton>
    </article>
  );
}
