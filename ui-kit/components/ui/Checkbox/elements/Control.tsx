"use client";
import { Checkbox as BaseCheckbox } from "@chakra-ui/react";

import type { CheckboxControlProps } from "../Checkbox.types";

export function Control({ "data-testid": testId = "Checkbox__Control", ...props }: CheckboxControlProps) {
  return <BaseCheckbox.Control data-testid={testId} {...props} />;
}
