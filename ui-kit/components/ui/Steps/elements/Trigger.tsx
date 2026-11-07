"use client";
import { Steps as BaseSteps } from "@chakra-ui/react";

import type { StepsTriggerProps } from "../Steps.types";

export function Trigger({ "data-testid": testId = "Steps__Trigger", ...props }: StepsTriggerProps) {
  return <BaseSteps.Trigger data-testid={testId} {...props} />;
}
