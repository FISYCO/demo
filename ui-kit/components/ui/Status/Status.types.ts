import type { Status as BaseStatus } from "@chakra-ui/react";

import type { UIProps } from "../../../lib/component-types";

export type StatusProps = Omit<UIProps<BaseStatus.RootProps>, "children"> & {
  /** Optional label rendered next to the indicator. */
  children?: React.ReactNode;
};
