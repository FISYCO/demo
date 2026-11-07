"use client";
import { Timeline as BaseTimeline } from "@chakra-ui/react";

import type { TimelineRootProps } from "../Timeline.types";

// Хронологии в продукте компактные (стадии запуска, лента событий), поэтому размер и вариант
// по умолчанию — те, что использовались во всех местах до выделения компонента.
export function Root({
  size = "sm",
  variant = "outline",
  "data-testid": testId = "Timeline",
  ...props
}: TimelineRootProps) {
  return <BaseTimeline.Root size={size} variant={variant} data-testid={testId} {...props} />;
}
