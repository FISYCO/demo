"use client";
import { Field as BaseField } from "@chakra-ui/react";

import type { FieldErrorTextProps } from "../Field.types";

export function ErrorText({ "data-testid": testId = "Field__ErrorText", ...props }: FieldErrorTextProps) {
  return <BaseField.ErrorText data-testid={testId} {...props} />;
}
