"use client";
import { Progress as BaseProgress } from "@chakra-ui/react";

import type { ProgressTrackProps } from "../Progress.types";

export function Track({ "data-testid": testId = "Progress__Track", ...props }: ProgressTrackProps) {
  return <BaseProgress.Track data-testid={testId} {...props} />;
}
