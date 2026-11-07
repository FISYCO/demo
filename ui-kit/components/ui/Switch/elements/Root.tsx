"use client";
import { Switch as BaseSwitch } from "@chakra-ui/react";

import type { SwitchRootProps } from "../Switch.types";

export function Root({
  "data-testid": testId = "Switch",
  label,
  children,
  colorPalette = "brand",
  ...props
}: SwitchRootProps) {
  return (
    <BaseSwitch.Root data-testid={testId} colorPalette={colorPalette} {...props}>
      <BaseSwitch.HiddenInput />
      <BaseSwitch.Control data-testid="Switch__Control">
        <BaseSwitch.Thumb data-testid="Switch__Thumb" />
      </BaseSwitch.Control>
      {label != null ? <BaseSwitch.Label data-testid="Switch__Label">{label}</BaseSwitch.Label> : null}
      {children}
    </BaseSwitch.Root>
  );
}
