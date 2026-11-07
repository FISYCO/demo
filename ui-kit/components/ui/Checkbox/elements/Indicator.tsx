"use client";
import { Checkbox as BaseCheckbox } from "@chakra-ui/react";

import type { CheckboxIndicatorProps } from "../Checkbox.types";

export function Indicator({ "data-testid": testId = "Checkbox__Indicator", ...props }: CheckboxIndicatorProps) {
  return <BaseCheckbox.Indicator data-testid={testId} {...props} />;
}
