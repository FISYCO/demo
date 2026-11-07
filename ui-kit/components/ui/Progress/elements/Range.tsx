"use client";
import { Progress as BaseProgress } from "@chakra-ui/react";

import type { ProgressRangeProps } from "../Progress.types";

export function Range({ "data-testid": testId = "Progress__Range", ...props }: ProgressRangeProps) {
  return <BaseProgress.Range data-testid={testId} {...props} />;
}
