"use client";
import { Field as BaseField } from "@chakra-ui/react";

import type { FieldErrorIconProps } from "../Field.types";

export function ErrorIcon({ "data-testid": testId = "Field__ErrorIcon", ...props }: FieldErrorIconProps) {
  return <BaseField.ErrorIcon data-testid={testId} {...props} />;
}
