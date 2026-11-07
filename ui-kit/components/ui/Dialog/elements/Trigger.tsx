"use client";
import { Dialog as BaseDialog } from "@chakra-ui/react";

import type { DialogTriggerProps } from "../Dialog.types";

export function Trigger({ "data-testid": testId = "Dialog__Trigger", ...props }: DialogTriggerProps) {
  return <BaseDialog.Trigger data-testid={testId} {...props} />;
}
