"use client";
import { Dialog as BaseDialog } from "@chakra-ui/react";

import type { DialogBodyProps } from "../Dialog.types";

export function Body({ "data-testid": testId = "Dialog__Body", ...props }: DialogBodyProps) {
  return <BaseDialog.Body data-testid={testId} {...props} />;
}
