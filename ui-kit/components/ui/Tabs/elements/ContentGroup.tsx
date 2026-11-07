"use client";
import { Tabs as BaseTabs } from "@chakra-ui/react";

import type { TabsContentGroupProps } from "../Tabs.types";

export function ContentGroup({ "data-testid": testId = "Tabs__ContentGroup", ...props }: TabsContentGroupProps) {
  return <BaseTabs.ContentGroup data-testid={testId} {...props} />;
}
