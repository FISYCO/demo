import type { ReactNode } from "react";
import type {
  DrawerActionTriggerProps as BaseDrawerActionTriggerProps,
  DrawerBackdropProps as BaseDrawerBackdropProps,
  DrawerBodyProps as BaseDrawerBodyProps,
  DrawerContentProps as BaseDrawerContentProps,
  DrawerDescriptionProps as BaseDrawerDescriptionProps,
  DrawerFooterProps as BaseDrawerFooterProps,
  DrawerHeaderProps as BaseDrawerHeaderProps,
  DrawerPositionerProps as BaseDrawerPositionerProps,
  DrawerRootProps as BaseDrawerRootProps,
  DrawerTitleProps as BaseDrawerTitleProps,
  DrawerTriggerProps as BaseDrawerTriggerProps,
} from "@chakra-ui/react";

import type { UIProps } from "../../../lib/component-types";

export type DrawerRootProps = UIProps<BaseDrawerRootProps>;

export interface DrawerTriggerProps extends Omit<UIProps<BaseDrawerTriggerProps>, "children"> {
  children?: ReactNode;
}

export interface DrawerHeaderProps extends Omit<UIProps<BaseDrawerHeaderProps>, "children" | "title"> {
  title?: ReactNode;
  description?: ReactNode;
  closable?: boolean;
  children?: ReactNode;
}

export type DrawerBodyProps = Omit<UIProps<BaseDrawerBodyProps>, "children"> & {
  children?: ReactNode;
};

export type DrawerFooterProps = Omit<UIProps<BaseDrawerFooterProps>, "children"> & {
  children?: ReactNode;
};

export type DrawerActionTriggerProps = Omit<UIProps<BaseDrawerActionTriggerProps>, "children"> & {
  children?: ReactNode;
};

export type DrawerBackdropProps = UIProps<BaseDrawerBackdropProps>;
export type DrawerPositionerProps = UIProps<BaseDrawerPositionerProps>;

export interface DrawerContentProps extends Omit<UIProps<BaseDrawerContentProps>, "children"> {
  backdrop?: boolean;
  /**
   * Inspector width, used with `size="full"` on the root: wide enough for a multi-column view, while the page
   * it was opened from stays visible on the left. `full` alone hid that page and read as a separate one.
   */
  wide?: boolean;
  children?: ReactNode;
}

export type DrawerTitleProps = Omit<UIProps<BaseDrawerTitleProps>, "children"> & {
  children?: ReactNode;
};

export type DrawerDescriptionProps = Omit<UIProps<BaseDrawerDescriptionProps>, "children"> & {
  children?: ReactNode;
};
