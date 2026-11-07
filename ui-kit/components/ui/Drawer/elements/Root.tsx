"use client";
import { Drawer as BaseDrawer } from "@chakra-ui/react";

import type { DrawerRootProps } from "../Drawer.types";

export function Root({ "data-testid": testId = "Drawer", ...props }: DrawerRootProps) {
  return <BaseDrawer.Root data-testid={testId} {...props} />;
}
