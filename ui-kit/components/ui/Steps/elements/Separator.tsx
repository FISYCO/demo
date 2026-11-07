"use client";
import { Steps as BaseSteps } from "@chakra-ui/react";

import type { StepsSeparatorProps } from "../Steps.types";

export function Separator({ "data-testid": testId = "Steps__Separator", ...props }: StepsSeparatorProps) {
  return <BaseSteps.Separator data-testid={testId} {...props} />;
}
