"use client";
import { Switch as BaseSwitch } from "@chakra-ui/react";

import type { SwitchHiddenInputProps } from "../Switch.types";

export function HiddenInput(props: SwitchHiddenInputProps) {
  return <BaseSwitch.HiddenInput {...props} />;
}
