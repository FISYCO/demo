"use client";
import { Drawer as BaseDrawer } from "@chakra-ui/react";

import type { DrawerActionTriggerProps } from "../Drawer.types";

export function ActionTrigger({ "data-testid": testId = "Drawer__ActionTrigger", ...props }: DrawerActionTriggerProps) {
  return <BaseDrawer.ActionTrigger data-testid={testId} {...props} />;
}
