"use client";
import { Popover as BasePopover } from "@chakra-ui/react";

import type { PopoverPositionerProps } from "../Popover.types";

export function Positioner({ "data-testid": testId = "Popover__Positioner", ...props }: PopoverPositionerProps) {
  return <BasePopover.Positioner data-testid={testId} {...props} />;
}
