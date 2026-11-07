import type { ReactNode } from "react";
import type {
  SelectContentProps as BaseSelectContentProps,
  SelectControlProps as BaseSelectControlProps,
  SelectRootProps as BaseSelectRootProps,
} from "@chakra-ui/react";

import type { UIProps } from "../../../lib/component-types";

export type SelectRootProps<T> = UIProps<BaseSelectRootProps<T>>;

export interface SelectTriggerProps extends Omit<UIProps<BaseSelectControlProps>, "children"> {
  children?: ReactNode;
  clearable?: boolean;
  placeholder?: string;
}

export interface SelectContentProps extends UIProps<BaseSelectContentProps> {
  portalled?: boolean;
}
