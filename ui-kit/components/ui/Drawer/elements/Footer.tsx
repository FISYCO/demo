"use client";
import { Drawer as BaseDrawer } from "@chakra-ui/react";

import type { DrawerFooterProps } from "../Drawer.types";

export function Footer({ "data-testid": testId = "Drawer__Footer", ...props }: DrawerFooterProps) {
  return <BaseDrawer.Footer data-testid={testId} {...props} />;
}
