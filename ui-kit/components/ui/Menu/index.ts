"use client";
import { Menu as BaseMenu } from "@chakra-ui/react";

import { CheckboxItem } from "./elements/CheckboxItem";
import { Content } from "./elements/Content";
import { ContextTrigger } from "./elements/ContextTrigger";
import { Group } from "./elements/Group";
import { Item } from "./elements/Item";
import { RadioItem } from "./elements/RadioItem";
import { RadioItemGroup } from "./elements/RadioItemGroup";
import { Root } from "./elements/Root";
import { Separator } from "./elements/Separator";
import { Trigger } from "./elements/Trigger";
import { TriggerItem } from "./elements/TriggerItem";

export const Menu = {
  Root,
  Trigger,
  Content,
  Item,
  Group,
  Separator,
  // Interactive items — direct re-exports: nothing to add here. Wrapping them in a function component
  // works on Ark 5.39 (story Menu → WrappedItems guards it, #1382).
  CheckboxItem,
  RadioItem,
  RadioItemGroup,
  TriggerItem,
  ContextTrigger,
  // Item sub-components (escape hatches for composition)
  ItemText: BaseMenu.ItemText,
  ItemCommand: BaseMenu.ItemCommand,
  ItemIndicator: BaseMenu.ItemIndicator,
  // Non-DOM utilities (passthrough — raw, no className enforcement)
  Context: BaseMenu.Context,
  ItemContext: BaseMenu.ItemContext,
  RootProvider: BaseMenu.RootProvider,
  RootPropsProvider: BaseMenu.RootPropsProvider,
};

// Public types
export type {
  MenuCheckboxItemProps,
  MenuContentProps,
  MenuContextTriggerProps,
  MenuGroupProps,
  MenuItemProps,
  MenuRadioItemGroupProps,
  MenuRadioItemProps,
  MenuRootProps,
  MenuSeparatorProps,
  MenuTriggerItemProps,
  MenuTriggerProps,
} from "./Menu.types";
