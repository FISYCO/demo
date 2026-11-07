"use client";
import { Steps as BaseSteps } from "@chakra-ui/react";

import type { StepsDescriptionProps } from "../Steps.types";

export function Description({ "data-testid": testId = "Steps__Description", ...props }: StepsDescriptionProps) {
  return <BaseSteps.Description data-testid={testId} {...props} />;
}
