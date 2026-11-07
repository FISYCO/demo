"use client";
import { ActionBar as BaseActionBar } from "@chakra-ui/react";

import { Content } from "./elements/Content";
import { Root } from "./elements/Root";

export const ActionBar = {
  Root,
  Content,
  SelectionTrigger: BaseActionBar.SelectionTrigger,
  Separator: BaseActionBar.Separator,
  CloseTrigger: BaseActionBar.CloseTrigger,
  // Escape hatches
  Positioner: BaseActionBar.Positioner,
};

export type {
  ActionBarCloseTriggerProps,
  ActionBarContentProps,
  ActionBarRootProps,
  ActionBarSelectionTriggerProps,
  ActionBarSeparatorProps,
} from "./ActionBar.types";
