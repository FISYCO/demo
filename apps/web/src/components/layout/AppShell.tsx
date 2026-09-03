import type { ReactNode } from "react";
import { Avatar, Breadcrumbs, Divider, IconButton, Menu, spacing } from "@demo/ui";

import { Bell } from "../../../../../src/assets/icons/bell";
import { SidebarNav } from "./SidebarNav";

/** Каркас приложения: боковая навигация, шапка с крошками и содержимое. */
export interface AppShellProps {
  crumbs: Array<{ label: string; href?: string }>;
  section: string;
  children?: ReactNode;
}

export function AppShell({ crumbs, section, children }: AppShellProps) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "240px 1fr", minHeight: "100vh" }}>
      <SidebarNav active={section} />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <header style={{ display: "flex", alignItems: "center", gap: spacing.lg, padding: `${spacing.md}px ${spacing.xl}px` }}>
          <Breadcrumbs items={crumbs} />
          <span style={{ flex: 1 }} />
          <IconButton label="Уведомления" size="sm" variant="ghost">
            <Bell />
          </IconButton>
          <Divider orientation="vertical" />
          <Menu.Root
            size="sm"
            placement="bottom-end"
            trigger={<Avatar name="Ирина Ковалёва" size="sm" />}
          >
            <Menu.Item>Профиль</Menu.Item>
            <Menu.Item>Настройки</Menu.Item>
            <Menu.Separator />
            <Menu.Item danger>Выйти</Menu.Item>
          </Menu.Root>
        </header>
        <main style={{ padding: `0 ${spacing.xl}px ${spacing.xl}px` }}>{children}</main>
      </div>
    </div>
  );
}
