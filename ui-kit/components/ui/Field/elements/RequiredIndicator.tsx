"use client";
import { Field as BaseField } from "@chakra-ui/react";

import type { FieldRequiredIndicatorProps } from "../Field.types";

export function RequiredIndicator({
  "data-testid": testId = "Field__RequiredIndicator",
  ...props
}: FieldRequiredIndicatorProps) {
  return <BaseField.RequiredIndicator data-testid={testId} {...props} />;
}
