import type { ReactNode } from "react";
import type { CardRootProps as BaseCardRootProps } from "@chakra-ui/react";

import type { UIProps } from "../../../lib/component-types";

export interface CardRootProps extends Omit<UIProps<BaseCardRootProps>, "variant"> {
  variant?: BaseCardRootProps["variant"] | "interactive";
  children?: ReactNode;
  isWide?: boolean;
}
