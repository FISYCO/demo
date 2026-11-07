"use client";
import { Progress as BaseProgress } from "@chakra-ui/react";

import type { ProgressRootProps } from "../Progress.types";

export function Root({ colorPalette = "brand", "data-testid": testId = "Progress", ...props }: ProgressRootProps) {
  return <BaseProgress.Root colorPalette={colorPalette} data-testid={testId} {...props} />;
}
