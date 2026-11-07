"use client";
import { Drawer as BaseDrawer } from "@chakra-ui/react";

import type { DrawerBodyProps } from "../Drawer.types";

export function Body({ "data-testid": testId = "Drawer__Body", ...props }: DrawerBodyProps) {
  return <BaseDrawer.Body data-testid={testId} {...props} />;
}
