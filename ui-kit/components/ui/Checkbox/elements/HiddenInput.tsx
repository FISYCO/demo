"use client";
import { Checkbox as BaseCheckbox } from "@chakra-ui/react";

import type { CheckboxHiddenInputProps } from "../Checkbox.types";

export function HiddenInput(props: CheckboxHiddenInputProps) {
  return <BaseCheckbox.HiddenInput {...props} />;
}
