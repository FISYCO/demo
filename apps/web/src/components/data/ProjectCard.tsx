import { Avatar, Btn, Card, Chip, Progress, color, fontSize, spacing } from "@demo/ui";

import { CustomTooltip } from "../legacy/CustomTooltip";

export interface Project {
  id: string;
  name: string;
  owner: string;
  libraries: number;
  health: number;
  tags: string[];
  archived?: boolean;
}

/** Карточка проекта в сетке. */
export function ProjectCard({ project, onOpen }: { project: Project; onOpen: (id: string) => void }) {
  return (
    <Card tone={project.archived ? "muted" : "default"} title={project.name}>
      <div style={{ display: "flex", alignItems: "center", gap: spacing.sm, marginBottom: spacing.sm }}>
        <Avatar name={project.owner} size="sm" />
        <span style={{ fontSize: fontSize.sm, color: color.textMuted }}>{project.owner}</span>
        <span style={{ flex: 1 }} />
        <CustomTooltip text="Библиотек в проекте">
          <Chip tone="neutral" size="sm">
            {project.libraries}
          </Chip>
        </CustomTooltip>
      </div>
      <Progress value={project.health} size="xs" tone={project.health < 50 ? "danger" : project.health < 85 ? "brand" : "success"} label="Здоровье" />
      <div style={{ display: "flex", gap: spacing.xs, flexWrap: "wrap", margin: `${spacing.sm}px 0` }}>
        {project.tags.map((tag) => (
          <Chip key={tag} tone="neutral" size="sm" variant="outline">
            {tag}
          </Chip>
        ))}
        {project.archived ? (
          <Chip tone="warning" size="sm">
            в архиве
          </Chip>
        ) : null}
      </div>
      <Btn style="secondary" size="sm" onClick={() => onOpen(project.id)}>
        Открыть
      </Btn>
    </Card>
  );
}
