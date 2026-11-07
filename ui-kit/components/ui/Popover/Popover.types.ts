import type { ReactNode } from "react";
import type {
  PopoverAnchorProps as BasePopoverAnchorProps,
  PopoverBodyProps as BasePopoverBodyProps,
  PopoverCloseTriggerProps as BasePopoverCloseTriggerProps,
  PopoverContentProps as BasePopoverContentProps,
  PopoverFooterProps as BasePopoverFooterProps,
  PopoverHeaderProps as BasePopoverHeaderProps,
  PopoverPositionerProps as BasePopoverPositionerProps,
  PopoverRootProps as BasePopoverRootProps,
  PopoverTitleProps as BasePopoverTitleProps,
  PopoverTriggerProps as BasePopoverTriggerProps,
} from "@chakra-ui/react";

import type { UIProps } from "../../../lib/component-types";

export interface PopoverRootProps extends UIProps<BasePopoverRootProps> {
  trigger?: ReactNode;
  contentProps?: Omit<UIProps<BasePopoverContentProps>, "children">;
}

export type PopoverTriggerProps = UIProps<BasePopoverTriggerProps>;
export type PopoverAnchorProps = UIProps<BasePopoverAnchorProps>;
export type PopoverHeaderProps = UIProps<BasePopoverHeaderProps>;
export type PopoverTitleProps = UIProps<BasePopoverTitleProps>;
export type PopoverBodyProps = UIProps<BasePopoverBodyProps>;
export type PopoverFooterProps = UIProps<BasePopoverFooterProps>;
export type PopoverCloseTriggerProps = UIProps<BasePopoverCloseTriggerProps>;
export type PopoverPositionerProps = UIProps<BasePopoverPositionerProps>;
export type PopoverContentProps = UIProps<BasePopoverContentProps>;
