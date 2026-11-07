"use client";
import { Dialog as BaseDialog } from "@chakra-ui/react";

import type { DialogRootProps } from "../Dialog.types";

export function Root({ "data-testid": testId = "Dialog", ...props }: DialogRootProps) {
  return <BaseDialog.Root data-testid={testId} {...props} />;
}
