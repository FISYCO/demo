export type {
  PopoverAnchorProps,
  PopoverBodyProps,
  PopoverCloseTriggerProps,
  PopoverContentProps,
  PopoverFooterProps,
  PopoverHeaderProps,
  PopoverPositionerProps,
  PopoverRootProps,
  PopoverTitleProps,
  PopoverTriggerProps,
} from "./Popover.types";

import { Popover as BasePopover } from "@chakra-ui/react";

import { Anchor } from "./elements/Anchor";
import { Body } from "./elements/Body";
import { CloseTrigger } from "./elements/CloseTrigger";
import { Content } from "./elements/Content";
import { Footer } from "./elements/Footer";
import { Header } from "./elements/Header";
import { Positioner } from "./elements/Positioner";
import { Root } from "./elements/Root";
import { Title } from "./elements/Title";
import { Trigger } from "./elements/Trigger";

export const Popover = {
  Root,
  Trigger,
  Anchor,
  Header,
  Title,
  Body,
  Footer,
  CloseTrigger,
  Positioner,
  Content,
  // Non-DOM utilities
  Context: BasePopover.Context,
  RootProvider: BasePopover.RootProvider,
  PropsProvider: BasePopover.PropsProvider,
};
