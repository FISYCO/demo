"use client";
import { Drawer as BaseDrawer } from "@chakra-ui/react";

import { ActionTrigger } from "./elements/ActionTrigger";
import { Body } from "./elements/Body";
import { Content } from "./elements/Content";
import { Footer } from "./elements/Footer";
import { Header } from "./elements/Header";
import { Root } from "./elements/Root";
import { Trigger } from "./elements/Trigger";

export const Drawer = {
  Root,
  Trigger,
  Content,
  Header,
  Body,
  Footer,
  ActionTrigger,
  // Escape hatches (low-level sub-components for custom layouts)
  Backdrop: BaseDrawer.Backdrop,
  Positioner: BaseDrawer.Positioner,
  Title: BaseDrawer.Title,
  Description: BaseDrawer.Description,
  CloseTrigger: BaseDrawer.CloseTrigger,
  // Non-DOM utilities
  Context: BaseDrawer.Context,
  RootProvider: BaseDrawer.RootProvider,
  RootPropsProvider: BaseDrawer.RootPropsProvider,
};

// Public types
export type {
  DrawerActionTriggerProps,
  DrawerBackdropProps,
  DrawerBodyProps,
  DrawerContentProps,
  DrawerDescriptionProps,
  DrawerFooterProps,
  DrawerHeaderProps,
  DrawerPositionerProps,
  DrawerRootProps,
  DrawerTitleProps,
  DrawerTriggerProps,
} from "./Drawer.types";
