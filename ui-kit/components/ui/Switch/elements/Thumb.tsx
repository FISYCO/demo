"use client";
import { Switch as BaseSwitch } from "@chakra-ui/react";

import type { SwitchThumbProps } from "../Switch.types";

export function Thumb({ "data-testid": testId = "Switch__Thumb", ...props }: SwitchThumbProps) {
  return <BaseSwitch.Thumb data-testid={testId} {...props} />;
}
