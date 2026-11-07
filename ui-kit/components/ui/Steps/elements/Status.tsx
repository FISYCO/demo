"use client";
import { Steps as BaseSteps } from "@chakra-ui/react";

import type { StepsStatusProps } from "../Steps.types";

export function Status({ "data-testid": testId = "Steps__Status", ...props }: StepsStatusProps) {
  return <BaseSteps.Status data-testid={testId} {...props} />;
}
