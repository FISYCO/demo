"use client";
import { Steps as BaseSteps } from "@chakra-ui/react";

import type { StepsListProps } from "../Steps.types";

export function List({ "data-testid": testId = "Steps__List", ...props }: StepsListProps) {
  return <BaseSteps.List data-testid={testId} {...props} />;
}
