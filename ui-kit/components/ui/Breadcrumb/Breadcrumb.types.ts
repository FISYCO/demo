import type { ReactNode } from "react";
import type { BreadcrumbRootProps as BaseBreadcrumbRootProps, IconProps } from "@chakra-ui/react";

import type { UIBaseProps } from "../../../lib/component-types";

export type BreadcrumbItem = {
  label: ReactNode;
  href?: string;
  icon?: IconProps["as"];
};

export type BreadcrumbProps = Pick<BaseBreadcrumbRootProps, "size"> &
  UIBaseProps & {
    items: BreadcrumbItem[];
    separator?: ReactNode;
  };
