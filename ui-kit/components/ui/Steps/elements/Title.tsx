"use client";
import { Steps as BaseSteps } from "@chakra-ui/react";

import type { StepsTitleProps } from "../Steps.types";

export function Title({ "data-testid": testId = "Steps__Title", ...props }: StepsTitleProps) {
  return <BaseSteps.Title data-testid={testId} {...props} />;
}
