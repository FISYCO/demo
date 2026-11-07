import type { ReactNode } from "react";
import type { EmptyStateRootProps as BaseEmptyStateRootProps } from "@chakra-ui/react";

import type { UIBaseProps } from "../../../lib/component-types";

export type EmptyStateProps = Pick<BaseEmptyStateRootProps, "size" | "colorPalette"> &
  UIBaseProps & {
    title: string;
    description?: string;
    image?: ReactNode;
    actions?: ReactNode;
  };
