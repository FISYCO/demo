"use client";
import { Steps as BaseSteps } from "@chakra-ui/react";

import type { StepsNextTriggerProps } from "../Steps.types";

export function NextTrigger({ "data-testid": testId = "Steps__NextTrigger", ...props }: StepsNextTriggerProps) {
  return <BaseSteps.NextTrigger data-testid={testId} {...props} />;
}
