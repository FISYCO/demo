import type { ReactNode } from "react";
import type {
  ListboxContentProps as BaseListboxContentProps,
  ListboxItemGroupProps as BaseListboxItemGroupProps,
  ListboxRootProps as BaseListboxRootProps,
} from "@chakra-ui/react";

import type { UIProps } from "../../../lib/component-types";

export type ListboxRootProps<T> = UIProps<BaseListboxRootProps<T>>;

export interface ListboxContentProps extends Omit<UIProps<BaseListboxContentProps>, "children"> {
  children?: ReactNode;
}

export interface ListboxGroupProps extends Omit<UIProps<BaseListboxItemGroupProps>, "children"> {
  label: ReactNode;
  children?: ReactNode;
}
