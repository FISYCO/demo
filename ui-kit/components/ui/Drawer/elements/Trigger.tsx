"use client";
import { Drawer as BaseDrawer } from "@chakra-ui/react";

import type { DrawerTriggerProps } from "../Drawer.types";

export function Trigger({ "data-testid": testId = "Drawer__Trigger", ...props }: DrawerTriggerProps) {
  return <BaseDrawer.Trigger data-testid={testId} {...props} />;
}
