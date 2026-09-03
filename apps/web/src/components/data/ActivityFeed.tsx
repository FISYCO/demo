import { Avatar, Badge, List } from "@demo/ui";

import { formatDate } from "../../lib/format";

/** Лента событий. Собрана на устаревшем `List`: место, которое библиотекарь должен предложить переписать. */
export interface ActivityEvent {
  id: string;
  actor: string;
  text: string;
  at: string;
  kind: "info" | "danger";
}

export function ActivityFeed({ events, compact }: { events: ActivityEvent[]; compact?: boolean }) {
  return (
    <List
      size={compact ? "sm" : "md"}
      items={events.map((event) => ({
        id: event.id,
        primary: (
          <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
            <Avatar name={event.actor} size="sm" />
            {event.text}
          </span>
        ),
        secondary: formatDate(event.at),
        trailing: <Badge tone={event.kind === "danger" ? "danger" : "neutral"}>{event.kind}</Badge>,
      }))}
    />
  );
}
