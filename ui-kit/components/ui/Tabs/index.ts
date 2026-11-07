"use client";
import { Tabs as BaseTabs } from "@chakra-ui/react";

import { Content } from "./elements/Content";
import { ContentGroup } from "./elements/ContentGroup";
import { Indicator } from "./elements/Indicator";
import { List } from "./elements/List";
import { Root } from "./elements/Root";
import { Trigger } from "./elements/Trigger";

export const Tabs = {
  Root,
  List,
  Trigger,
  Content,
  ContentGroup,
  Indicator,
  // Non-DOM utilities — re-exported directly
  Context: BaseTabs.Context,
  RootProvider: BaseTabs.RootProvider,
  PropsProvider: BaseTabs.PropsProvider,
};

// Public types
export type {
  TabsContentGroupProps,
  TabsContentProps,
  TabsIndicatorProps,
  TabsListProps,
  TabsRootProps,
  TabsTriggerProps,
} from "./Tabs.types";
