"use client";
import { Popover as BasePopover } from "@chakra-ui/react";

import type { PopoverFooterProps } from "../Popover.types";

export function Footer({ "data-testid": testId = "Popover__Footer", ...props }: PopoverFooterProps) {
  return <BasePopover.Footer data-testid={testId} {...props} />;
}
