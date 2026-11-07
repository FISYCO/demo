"use client";
import { Tabs as BaseTabs } from "@chakra-ui/react";

import type { TabsIndicatorProps } from "../Tabs.types";

export function Indicator({ "data-testid": testId = "Tabs__Indicator", ...props }: TabsIndicatorProps) {
  return <BaseTabs.Indicator data-testid={testId} {...props} />;
}
