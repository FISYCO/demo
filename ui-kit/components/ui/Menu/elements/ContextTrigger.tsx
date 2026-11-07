"use client";
import { Menu as BaseMenu } from "@chakra-ui/react";

import type { MenuContextTriggerProps } from "../Menu.types";

export function ContextTrigger({ "data-testid": testId = "Menu__ContextTrigger", ...props }: MenuContextTriggerProps) {
  return <BaseMenu.ContextTrigger data-testid={testId} {...props} />;
}
