"use client";
import { Field as BaseField } from "@chakra-ui/react";

import type { FieldHelperTextProps } from "../Field.types";

export function HelperText({ "data-testid": testId = "Field__HelperText", ...props }: FieldHelperTextProps) {
  return <BaseField.HelperText data-testid={testId} {...props} />;
}
