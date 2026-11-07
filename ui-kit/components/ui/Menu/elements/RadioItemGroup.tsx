"use client";
import { Menu as BaseMenu } from "@chakra-ui/react";

import type { MenuRadioItemGroupProps } from "../Menu.types";

export function RadioItemGroup({ "data-testid": testId = "Menu__RadioItemGroup", ...props }: MenuRadioItemGroupProps) {
  return <BaseMenu.RadioItemGroup data-testid={testId} {...props} />;
}
