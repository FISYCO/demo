"use client";
import { Steps as BaseSteps } from "@chakra-ui/react";

import type { StepsNumberProps } from "../Steps.types";

export function StepNumber({ "data-testid": testId = "Steps__Number", ...props }: StepsNumberProps) {
  return <BaseSteps.Number data-testid={testId} {...props} />;
}
