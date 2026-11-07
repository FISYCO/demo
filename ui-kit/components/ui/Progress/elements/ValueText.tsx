"use client";
import { Progress as BaseProgress } from "@chakra-ui/react";

import type { ProgressValueTextProps } from "../Progress.types";

export function ValueText({ "data-testid": testId = "Progress__ValueText", ...props }: ProgressValueTextProps) {
  return <BaseProgress.ValueText data-testid={testId} {...props} />;
}
