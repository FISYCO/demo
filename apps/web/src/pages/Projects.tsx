import { useState } from "react";
import { Btn, EmptyState, SegmentedControl, Skeleton, spacing } from "@demo/ui";

import { FilterBar } from "../components/data/FilterBar";
import { ProjectCard, type Project } from "../components/data/ProjectCard";
import { AppShell } from "../components/layout/AppShell";
import { PageHeader } from "../components/layout/PageHeader";
import { HeroBanner } from "../components/legacy/HeroBanner";

const PROJECTS: Project[] = [
  { id: "p1", name: "Acme Web", owner: "Ирина Ковалёва", libraries: 4, health: 60, tags: ["web", "react"] },
  { id: "p2", name: "Acme Mobile", owner: "Пётр Шварц", libraries: 2, health: 88, tags: ["ios", "android"] },
  { id: "p3", name: "Acme Docs", owner: "Анна Лебедева", libraries: 1, health: 42, tags: ["docs"] },
  { id: "p4", name: "Legacy Portal", owner: "Пётр Шварц", libraries: 3, health: 30, tags: ["legacy"], archived: true },
];

/** Проекты: сетка карточек с фильтрами. */
export function Projects() {
  const [search, setSearch] = useState("");
  const [mode, setMode] = useState("grid");
  const [loading] = useState(false);

  return (
    <AppShell section="projects" crumbs={[{ label: "Acme Cloud", href: "/" }, { label: "Проекты" }]}>
      <HeroBanner title="Годовая подписка со скидкой 20%" cta="Перейти на год" />
      <PageHeader title="Проекты" primaryAction={{ label: "Новый проект" }}>
        <SegmentedControl options={[{ value: "grid", label: "Плитка" }, { value: "list", label: "Список" }]} value={mode} size="md" onChange={setMode} />
      </PageHeader>
      <FilterBar
        search={search}
        onSearch={setSearch}
        mode="all"
        modes={[{ value: "all", label: "Все" }, { value: "mine", label: "Мои" }, { value: "archived", label: "Архив" }]}
        onMode={() => undefined}
        active={[]}
        onRemove={() => undefined}
        owners={[{ label: "Ирина Ковалёва", value: "m1" }, { label: "Пётр Шварц", value: "m2" }]}
      />
      {loading ? (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: spacing.lg }}>
          <Skeleton shape="rect" height={180} />
          <Skeleton shape="rect" height={180} />
          <Skeleton shape="rect" height={180} animation="none" />
        </div>
      ) : PROJECTS.length === 0 ? (
        <EmptyState title="Проектов пока нет" description="Создайте первый и подключите библиотеку." action={<Btn style="primary" size="md">Создать</Btn>} />
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: mode === "grid" ? "repeat(3, 1fr)" : "1fr", gap: spacing.lg }}>
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} onOpen={() => undefined} />
          ))}
        </div>
      )}
    </AppShell>
  );
}
