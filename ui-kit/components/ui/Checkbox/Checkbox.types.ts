import type { ReactNode } from "react";
import type {
  CheckboxControlProps as BaseCheckboxControlProps,
  CheckboxGroupProps as BaseCheckboxGroupProps,
  CheckboxIndicatorProps as BaseCheckboxIndicatorProps,
  CheckboxLabelProps as BaseCheckboxLabelProps,
  CheckboxRootProps as BaseCheckboxRootProps,
} from "@chakra-ui/react";

import type { UIProps } from "../../../lib/component-types";

export interface CheckboxRootProps extends Omit<UIProps<BaseCheckboxRootProps>, "children"> {
  label?: ReactNode;
  children?: ReactNode;
}

export type CheckboxGroupProps = UIProps<BaseCheckboxGroupProps>;
export type CheckboxHiddenInputProps = React.ComponentPropsWithoutRef<"input">;
export type CheckboxControlProps = UIProps<BaseCheckboxControlProps>;
export type CheckboxIndicatorProps = UIProps<BaseCheckboxIndicatorProps>;
export type CheckboxLabelProps = UIProps<BaseCheckboxLabelProps>;
