"use client";
import { Select as BaseSelect, Portal } from "@chakra-ui/react";

import type { SelectContentProps } from "../Select.types";

export function Content({ "data-testid": testId = "Select__Content", portalled = true, ...props }: SelectContentProps) {
  return (
    <Portal disabled={!portalled}>
      <BaseSelect.Positioner data-testid="Select__Positioner">
        <BaseSelect.Content data-testid={testId} {...props} />
      </BaseSelect.Positioner>
    </Portal>
  );
}
