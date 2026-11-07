"use client";
import { Popover as BasePopover } from "@chakra-ui/react";

import type { PopoverTriggerProps } from "../Popover.types";

export function Trigger({ "data-testid": testId = "Popover__Trigger", ...props }: PopoverTriggerProps) {
  return <BasePopover.Trigger data-testid={testId} {...props} />;
}
