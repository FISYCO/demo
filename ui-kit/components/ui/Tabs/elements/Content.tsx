"use client";
import { Tabs as BaseTabs } from "@chakra-ui/react";

import type { TabsContentProps } from "../Tabs.types";

export function Content({ "data-testid": testId = "Tabs__Content", ...props }: TabsContentProps) {
  return <BaseTabs.Content data-testid={testId} {...props} />;
}
