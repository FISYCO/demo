"use client";
import { Tabs as BaseTabs } from "@chakra-ui/react";

import type { TabsTriggerProps } from "../Tabs.types";

export function Trigger({ "data-testid": testId = "Tabs__Trigger", ...props }: TabsTriggerProps) {
  return <BaseTabs.Trigger data-testid={testId} {...props} />;
}
