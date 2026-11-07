"use client";
import { Steps as BaseSteps } from "@chakra-ui/react";

import type { StepsPrevTriggerProps } from "../Steps.types";

export function PrevTrigger({ "data-testid": testId = "Steps__PrevTrigger", ...props }: StepsPrevTriggerProps) {
  return <BaseSteps.PrevTrigger data-testid={testId} {...props} />;
}
