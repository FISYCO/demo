"use client";
import { Steps as BaseSteps } from "@chakra-ui/react";

import type { StepsContentProps } from "../Steps.types";

/**
 * Содержимое шага. Показанный шаг приходит со стороны, куда идёт мастер (#1811): Ark прячет неактивный шаг атрибутом
 * `hidden`, а не размонтирует его, поэтому анимация запускается заново при каждом показе, а набранное в полях
 * сохраняется. Первый шаг при открытии мастера стоит на месте — направления ещё нет.
 */
export function Content({ "data-testid": testId = "Steps__Content", ...props }: StepsContentProps) {
  return (
    <BaseSteps.Content
      data-testid={testId}
      css={{
        "[data-step-direction=forward] &:not([hidden])": {
          animation: "fis-step-forward var(--chakra-durations-spring) var(--chakra-easings-spring) both",
        },
        "[data-step-direction=back] &:not([hidden])": {
          animation: "fis-step-back var(--chakra-durations-spring) var(--chakra-easings-spring) both",
        },
      }}
      {...props}
    />
  );
}
