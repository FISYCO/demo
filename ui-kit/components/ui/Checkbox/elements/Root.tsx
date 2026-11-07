"use client";
import { Checkbox as BaseCheckbox } from "@chakra-ui/react";

import type { CheckboxRootProps } from "../Checkbox.types";

export function Root({
  "data-testid": testId = "Checkbox",
  label,
  children,
  colorPalette = "brand",
  ...props
}: CheckboxRootProps) {
  return (
    <BaseCheckbox.Root data-testid={testId} colorPalette={colorPalette} {...props}>
      <BaseCheckbox.HiddenInput />
      <BaseCheckbox.Control data-testid="Checkbox__Control">
        <BaseCheckbox.Indicator data-testid="Checkbox__Indicator" />
      </BaseCheckbox.Control>
      {label != null ? <BaseCheckbox.Label data-testid="Checkbox__Label">{label}</BaseCheckbox.Label> : null}
      {children}
    </BaseCheckbox.Root>
  );
}
