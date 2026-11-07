"use client";
import { Listbox as BaseListbox } from "@chakra-ui/react";

import { Content } from "./elements/Content";
import { Group } from "./elements/Group";
import { Root } from "./elements/Root";

export const Listbox = {
  Root,
  Content,
  Group,
  // Ark interactive items — direct re-exports (function wrappers break Ark UI item tracking)
  Item: BaseListbox.Item,
  ItemText: BaseListbox.ItemText,
  ItemIndicator: BaseListbox.ItemIndicator,
  // Escape hatches (Content without ScrollArea, raw sub-components)
  BaseContent: BaseListbox.Content,
  ItemGroup: BaseListbox.ItemGroup,
  ItemGroupLabel: BaseListbox.ItemGroupLabel,
  Input: BaseListbox.Input,
  Label: BaseListbox.Label,
  ValueText: BaseListbox.ValueText,
  Empty: BaseListbox.Empty,
  // Non-DOM utilities
  Context: BaseListbox.Context,
  ItemContext: BaseListbox.ItemContext,
  RootProvider: BaseListbox.RootProvider,
  PropsProvider: BaseListbox.PropsProvider,
};

export type { ListboxContentProps, ListboxGroupProps, ListboxRootProps } from "./Listbox.types";
