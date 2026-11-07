"use client";
import { Steps as BaseSteps } from "@chakra-ui/react";

import type { StepsCompletedContentProps } from "../Steps.types";

export function CompletedContent({
  "data-testid": testId = "Steps__CompletedContent",
  ...props
}: StepsCompletedContentProps) {
  return <BaseSteps.CompletedContent data-testid={testId} {...props} />;
}
