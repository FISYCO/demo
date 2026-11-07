"use client";
import { Switch as BaseSwitch } from "@chakra-ui/react";

import type { SwitchControlProps } from "../Switch.types";

export function Control({ "data-testid": testId = "Switch__Control", ...props }: SwitchControlProps) {
  return <BaseSwitch.Control data-testid={testId} {...props} />;
}
