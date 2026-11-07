"use client";
import { Popover as BasePopover } from "@chakra-ui/react";

import type { PopoverBodyProps } from "../Popover.types";

export function Body({ "data-testid": testId = "Popover__Body", ...props }: PopoverBodyProps) {
  return <BasePopover.Body data-testid={testId} {...props} />;
}
