"use client";
import { Steps as BaseSteps } from "@chakra-ui/react";

import type { StepsItemProps } from "../Steps.types";

export function Item({ "data-testid": testId = "Steps__Item", ...props }: StepsItemProps) {
  return <BaseSteps.Item data-testid={testId} {...props} />;
}
