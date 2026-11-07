"use client";
import { Switch as BaseSwitch } from "@chakra-ui/react";

import type { SwitchLabelProps } from "../Switch.types";

export function Label({ "data-testid": testId = "Switch__Label", ...props }: SwitchLabelProps) {
  return <BaseSwitch.Label data-testid={testId} {...props} />;
}
