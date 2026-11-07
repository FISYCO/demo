import type { ReactElement, ReactNode } from "react";
import type {
  MenuCheckboxItemProps as BaseMenuCheckboxItemProps,
  MenuContentProps as BaseMenuContentProps,
  MenuContextTriggerProps as BaseMenuContextTriggerProps,
  MenuItemGroupProps as BaseMenuItemGroupProps,
  MenuItemProps as BaseMenuItemProps,
  MenuRadioItemGroupProps as BaseMenuRadioItemGroupProps,
  MenuRadioItemProps as BaseMenuRadioItemProps,
  MenuRootProps as BaseMenuRootProps,
  MenuSeparatorProps as BaseMenuSeparatorProps,
  MenuTriggerItemProps as BaseMenuTriggerItemProps,
  MenuTriggerProps as BaseMenuTriggerProps,
} from "@chakra-ui/react";

import type { UIProps } from "../../../lib/component-types";

export interface MenuRootProps extends Omit<UIProps<BaseMenuRootProps>, "children"> {
  children?: ReactNode;
}

export interface MenuTriggerProps extends Omit<UIProps<BaseMenuTriggerProps>, "children"> {
  children: ReactElement;
}

export interface MenuContentProps extends Omit<UIProps<BaseMenuContentProps>, "children"> {
  children?: ReactNode;
}

export interface MenuItemProps extends Omit<UIProps<BaseMenuItemProps>, "children"> {
  children?: ReactNode;
}

export interface MenuGroupProps extends Omit<UIProps<BaseMenuItemGroupProps>, "children"> {
  label: ReactNode;
  children?: ReactNode;
}

export type MenuSeparatorProps = UIProps<BaseMenuSeparatorProps>;
export type MenuCheckboxItemProps = UIProps<BaseMenuCheckboxItemProps>;
export type MenuRadioItemProps = UIProps<BaseMenuRadioItemProps>;
export type MenuRadioItemGroupProps = UIProps<BaseMenuRadioItemGroupProps>;
export type MenuTriggerItemProps = UIProps<BaseMenuTriggerItemProps>;
export type MenuContextTriggerProps = UIProps<BaseMenuContextTriggerProps>;
