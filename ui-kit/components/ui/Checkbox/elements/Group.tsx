"use client";
import { Checkbox as BaseCheckbox } from "@chakra-ui/react";

import type { CheckboxGroupProps } from "../Checkbox.types";

export function Group({ "data-testid": testId = "Checkbox__Group", ...props }: CheckboxGroupProps) {
  return <BaseCheckbox.Group data-testid={testId} {...props} />;
}
