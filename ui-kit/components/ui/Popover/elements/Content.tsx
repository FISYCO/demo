"use client";
import { Popover as BasePopover } from "@chakra-ui/react";

import type { PopoverContentProps } from "../Popover.types";

export function Content({ "data-testid": testId = "Popover__Content", ...props }: PopoverContentProps) {
  return <BasePopover.Content data-testid={testId} {...props} />;
}
