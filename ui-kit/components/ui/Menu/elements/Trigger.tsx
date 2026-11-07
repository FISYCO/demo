"use client";
import { Menu as BaseMenu } from "@chakra-ui/react";

import type { MenuTriggerProps } from "../Menu.types";

export function Trigger({ "data-testid": testId = "Menu__Trigger", ...props }: MenuTriggerProps) {
  return <BaseMenu.Trigger data-testid={testId} {...props} />;
}
