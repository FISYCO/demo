import type { ReactNode } from "react";
import type {
  AlertContentProps as BaseAlertContentProps,
  AlertDescriptionProps as BaseAlertDescriptionProps,
  AlertIndicatorProps as BaseAlertIndicatorProps,
  AlertRootProps as BaseAlertRootProps,
  AlertTitleProps as BaseAlertTitleProps,
} from "@chakra-ui/react";

import type { UIProps } from "../../../lib/component-types";

export interface AlertRootProps extends Omit<UIProps<BaseAlertRootProps>, "children"> {
  children?: ReactNode;
}

export interface AlertContentProps extends Omit<UIProps<BaseAlertContentProps>, "children"> {
  children?: ReactNode;
}

export interface AlertTitleProps extends Omit<UIProps<BaseAlertTitleProps>, "children"> {
  children?: ReactNode;
}

export interface AlertDescriptionProps extends Omit<UIProps<BaseAlertDescriptionProps>, "children"> {
  children?: ReactNode;
}

export type AlertIndicatorProps = UIProps<BaseAlertIndicatorProps>;
