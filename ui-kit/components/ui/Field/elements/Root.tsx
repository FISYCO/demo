"use client";
import { Field as BaseField } from "@chakra-ui/react";

import type { FieldRootProps } from "../Field.types";

export function Root({ "data-testid": testId = "Field", ...props }: FieldRootProps) {
  return <BaseField.Root data-testid={testId} {...props} />;
}
