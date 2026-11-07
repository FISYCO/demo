"use client";

import { Menu as BaseMenu, Portal } from "@chakra-ui/react";

import type { MenuContentProps } from "../Menu.types";

export function Content({ "data-testid": testId = "Menu__Content", ...props }: MenuContentProps) {
  return (
    <Portal>
      <BaseMenu.Positioner data-testid="Menu__Positioner">
        <BaseMenu.Content data-testid={testId} {...props} />
      </BaseMenu.Positioner>
    </Portal>
  );
}
