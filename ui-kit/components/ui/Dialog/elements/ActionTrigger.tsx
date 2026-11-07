"use client";
import { Dialog as BaseDialog } from "@chakra-ui/react";

import type { DialogActionTriggerProps } from "../Dialog.types";

export function ActionTrigger({ "data-testid": testId = "Dialog__ActionTrigger", ...props }: DialogActionTriggerProps) {
  return <BaseDialog.ActionTrigger data-testid={testId} {...props} />;
}
