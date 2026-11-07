"use client";
import { Popover as BasePopover } from "@chakra-ui/react";

import type { PopoverAnchorProps } from "../Popover.types";

export function Anchor({ "data-testid": testId = "Popover__Anchor", ...props }: PopoverAnchorProps) {
  return <BasePopover.Anchor data-testid={testId} {...props} />;
}
