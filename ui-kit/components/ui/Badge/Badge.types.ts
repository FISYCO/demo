import type { BadgeProps as BaseBadgeProps } from "@chakra-ui/react";

import type { UIProps } from "../../../lib/component-types";

export type BadgeProps = UIProps<BaseBadgeProps> & {
  /** Truncate text with ellipsis when overflowing. */
  truncate?: boolean;
};
