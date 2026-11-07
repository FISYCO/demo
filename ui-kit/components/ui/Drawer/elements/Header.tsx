"use client";
import { Drawer as BaseDrawer, IconButton } from "@chakra-ui/react";
import { Times } from "../../../../../src/icons/times";

import type { DrawerHeaderProps } from "../Drawer.types";

export function Header({
  title,
  description,
  closable = true,
  children,
  "data-testid": testId = "Drawer__Header",
  ...props
}: DrawerHeaderProps) {
  return (
    <BaseDrawer.Header
      display="flex"
      alignItems="flex-start"
      justifyContent="space-between"
      gap="4"
      data-testid={testId}
      {...props}
    >
      <div>
        {title ? <BaseDrawer.Title data-testid="Drawer__Title">{title}</BaseDrawer.Title> : null}
        {description ? (
          <BaseDrawer.Description data-testid="Drawer__Description">{description}</BaseDrawer.Description>
        ) : null}
        {children}
      </div>
      {closable ? (
        <BaseDrawer.CloseTrigger asChild data-testid="Drawer__CloseTrigger">
          <IconButton size="sm" variant="ghost" aria-label="Close drawer" flexShrink={0}>
            <Times />
          </IconButton>
        </BaseDrawer.CloseTrigger>
      ) : null}
    </BaseDrawer.Header>
  );
}
