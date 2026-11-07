import type { ReactNode } from "react";
import type {
  SwitchControlProps as BaseSwitchControlProps,
  SwitchLabelProps as BaseSwitchLabelProps,
  SwitchRootProps as BaseSwitchRootProps,
  SwitchThumbProps as BaseSwitchThumbProps,
} from "@chakra-ui/react";

import type { UIProps } from "../../../lib/component-types";

// Omit `label` from base: Chakra types it as `string`, we want `ReactNode`
export interface SwitchRootProps extends Omit<UIProps<BaseSwitchRootProps>, "children" | "label"> {
  label?: ReactNode;
  children?: ReactNode;
}

export type SwitchHiddenInputProps = React.ComponentPropsWithoutRef<"input">;
export type SwitchControlProps = UIProps<BaseSwitchControlProps>;
export type SwitchThumbProps = UIProps<BaseSwitchThumbProps>;
export type SwitchLabelProps = UIProps<BaseSwitchLabelProps>;
