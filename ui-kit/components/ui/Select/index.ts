"use client";
import { Select as BaseSelect } from "@chakra-ui/react";

import { Content } from "./elements/Content";
import { Root } from "./elements/Root";
import { Trigger } from "./elements/Trigger";

export const Select = {
  Root,
  Trigger,
  Content,
  // Ark interactive items — direct re-exports (function wrappers break Ark UI item tracking)
  Item: BaseSelect.Item,
  ItemText: BaseSelect.ItemText,
  ItemIndicator: BaseSelect.ItemIndicator,
  ItemGroup: BaseSelect.ItemGroup,
  ItemGroupLabel: BaseSelect.ItemGroupLabel,
  // Escape hatches
  Control: BaseSelect.Control,
  ValueText: BaseSelect.ValueText,
  Indicator: BaseSelect.Indicator,
  IndicatorGroup: BaseSelect.IndicatorGroup,
  ClearTrigger: BaseSelect.ClearTrigger,
  Positioner: BaseSelect.Positioner,
  Label: BaseSelect.Label,
  HiddenSelect: BaseSelect.HiddenSelect,
  // Non-DOM utilities
  Context: BaseSelect.Context,
  RootProvider: BaseSelect.RootProvider,
  PropsProvider: BaseSelect.PropsProvider,
};

export type { SelectContentProps, SelectRootProps, SelectTriggerProps } from "./Select.types";
