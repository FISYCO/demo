"use client";
import { Popover as BasePopover } from "@chakra-ui/react";

import type { PopoverHeaderProps } from "../Popover.types";

export function Header({ "data-testid": testId = "Popover__Header", ...props }: PopoverHeaderProps) {
  return <BasePopover.Header data-testid={testId} {...props} />;
}
