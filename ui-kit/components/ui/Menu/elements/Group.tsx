"use client";
import { Menu as BaseMenu } from "@chakra-ui/react";

import type { MenuGroupProps } from "../Menu.types";

export function Group({ "data-testid": testId = "Menu__Group", label, children, ...props }: MenuGroupProps) {
  return (
    <BaseMenu.ItemGroup data-testid={testId} {...props}>
      <BaseMenu.ItemGroupLabel data-testid="Menu__GroupLabel">{label}</BaseMenu.ItemGroupLabel>
      {children}
    </BaseMenu.ItemGroup>
  );
}
