"use client";
import { Menu as BaseMenu } from "@chakra-ui/react";

import type { MenuRootProps } from "../Menu.types";

export function Root({ "data-testid": testId = "Menu", children, ...props }: MenuRootProps) {
  return (
    <BaseMenu.Root {...props} data-testid={testId}>
      {children}
    </BaseMenu.Root>
  );
}
