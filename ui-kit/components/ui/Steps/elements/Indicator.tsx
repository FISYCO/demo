"use client";
import { Steps as BaseSteps } from "@chakra-ui/react";

import type { StepsIndicatorProps } from "../Steps.types";

export function Indicator({ "data-testid": testId = "Steps__Indicator", ...props }: StepsIndicatorProps) {
  return <BaseSteps.Indicator data-testid={testId} {...props} />;
}
