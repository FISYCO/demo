"use client";
import { Popover as BasePopover } from "@chakra-ui/react";

import type { PopoverRootProps } from "../Popover.types";

export function Root({
  "data-testid": testId = "Popover",
  trigger,
  children,
  contentProps,
  ...props
}: PopoverRootProps) {
  // Smart mode: trigger prop provided — bundle Trigger + Positioner + Content automatically.
  if (trigger != null) {
    return (
      <BasePopover.Root {...props} data-testid={testId}>
        <BasePopover.Trigger asChild data-testid="Popover__Trigger">
          {trigger}
        </BasePopover.Trigger>
        <BasePopover.Positioner data-testid="Popover__Positioner">
          <BasePopover.Content data-testid="Popover__Content" {...contentProps}>
            {children}
          </BasePopover.Content>
        </BasePopover.Positioner>
      </BasePopover.Root>
    );
  }

  // Escape-hatch / pass-through mode: no trigger prop.
  // Children must include Popover.Trigger, Popover.Positioner, Popover.Content explicitly.
  return (
    <BasePopover.Root {...props} data-testid={testId}>
      {children}
    </BasePopover.Root>
  );
}
