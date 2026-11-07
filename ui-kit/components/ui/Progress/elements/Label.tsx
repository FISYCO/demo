"use client";
import { Progress as BaseProgress } from "@chakra-ui/react";

import type { ProgressLabelProps } from "../Progress.types";

export function Label({ "data-testid": testId = "Progress__Label", ...props }: ProgressLabelProps) {
  return <BaseProgress.Label data-testid={testId} {...props} />;
}
