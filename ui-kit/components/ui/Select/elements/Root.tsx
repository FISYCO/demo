"use client";
import { Select as BaseSelect } from "@chakra-ui/react";

import type { SelectRootProps } from "../Select.types";

export function Root<T>({
  "data-testid": testId = "Select",
  colorPalette = "brand",
  variant = "outline",
  size = "md",
  ...props
}: SelectRootProps<T>) {
  return <BaseSelect.Root data-testid={testId} colorPalette={colorPalette} variant={variant} size={size} {...props} />;
}
