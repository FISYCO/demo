"use client";
import { Menu as BaseMenu } from "@chakra-ui/react";

import type { MenuSeparatorProps } from "../Menu.types";

export function Separator({ "data-testid": testId = "Menu__Separator", ...props }: MenuSeparatorProps) {
  return <BaseMenu.Separator data-testid={testId} {...props} />;
}
