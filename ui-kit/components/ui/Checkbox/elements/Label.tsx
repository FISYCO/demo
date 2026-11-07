"use client";
import { Checkbox as BaseCheckbox } from "@chakra-ui/react";

import type { CheckboxLabelProps } from "../Checkbox.types";

export function Label({ "data-testid": testId = "Checkbox__Label", ...props }: CheckboxLabelProps) {
  return <BaseCheckbox.Label data-testid={testId} {...props} />;
}
