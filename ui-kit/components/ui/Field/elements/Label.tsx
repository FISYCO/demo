"use client";
import { Field as BaseField } from "@chakra-ui/react";

import type { FieldLabelProps } from "../Field.types";

export function Label({ "data-testid": testId = "Field__Label", ...props }: FieldLabelProps) {
  return <BaseField.Label data-testid={testId} {...props} />;
}
