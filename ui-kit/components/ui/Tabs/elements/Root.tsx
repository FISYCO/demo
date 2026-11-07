"use client";
import { Tabs as BaseTabs } from "@chakra-ui/react";

import type { TabsRootProps } from "../Tabs.types";

export function Root({ colorPalette = "brand", "data-testid": testId = "Tabs", ...props }: TabsRootProps) {
  return <BaseTabs.Root colorPalette={colorPalette} data-testid={testId} {...props} />;
}
