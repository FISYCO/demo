"use client";
import { Popover as BasePopover } from "@chakra-ui/react";

import type { PopoverCloseTriggerProps } from "../Popover.types";

export function CloseTrigger({ "data-testid": testId = "Popover__CloseTrigger", ...props }: PopoverCloseTriggerProps) {
  return <BasePopover.CloseTrigger data-testid={testId} {...props} />;
}
