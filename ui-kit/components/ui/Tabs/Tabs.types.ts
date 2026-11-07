import type { ComponentProps } from "react";
import type { Tabs as BaseTabs } from "@chakra-ui/react";

import type { UIProps } from "../../../lib/component-types";

export type TabsRootProps = UIProps<ComponentProps<typeof BaseTabs.Root>>;
export type TabsListProps = UIProps<ComponentProps<typeof BaseTabs.List>>;
export type TabsTriggerProps = UIProps<ComponentProps<typeof BaseTabs.Trigger>>;
export type TabsContentProps = UIProps<ComponentProps<typeof BaseTabs.Content>>;
export type TabsContentGroupProps = UIProps<ComponentProps<typeof BaseTabs.ContentGroup>>;
export type TabsIndicatorProps = UIProps<ComponentProps<typeof BaseTabs.Indicator>>;
