"use client";
import { Dialog as BaseDialog } from "@chakra-ui/react";

import type { DialogFooterProps } from "../Dialog.types";

export function Footer({ "data-testid": testId = "Dialog__Footer", ...props }: DialogFooterProps) {
  return <BaseDialog.Footer data-testid={testId} {...props} />;
}
