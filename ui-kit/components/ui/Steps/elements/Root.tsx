"use client";
import { useState } from "react";
import { Steps as BaseSteps } from "@chakra-ui/react";

import type { StepsRootProps } from "../Steps.types";

/**
 * Мастер по шагам. Направление шага (#1811) лежит на корне (`data-step-direction`): новый шаг приходит со стороны, куда
 * идёт человек, — вперёд справа, назад слева. Шаг меняется и через `onStepChange`, и прямо через `step` (кнопка
 * «Далее» в форме), поэтому направление выводится из смены значения, а не из события.
 */
export function Root({
  colorPalette = "brand",
  "data-testid": testId = "Steps",
  step,
  defaultStep,
  onStepChange,
  ...props
}: StepsRootProps) {
  const [seen, setSeen] = useState(step ?? defaultStep ?? 0);
  const [direction, setDirection] = useState<"forward" | "back" | undefined>(undefined);
  // Управляемый шаг сменился снаружи — направление от прошлого значения (поправка состояния во время отрисовки).
  if (step !== undefined && step !== seen) {
    setDirection(step > seen ? "forward" : "back");
    setSeen(step);
  }
  return (
    <BaseSteps.Root
      colorPalette={colorPalette}
      data-testid={testId}
      data-step-direction={direction}
      step={step}
      defaultStep={defaultStep}
      onStepChange={(details) => {
        // Неуправляемый мастер: направление от события.
        if (step === undefined) {
          setDirection(details.step > seen ? "forward" : "back");
          setSeen(details.step);
        }
        onStepChange?.(details);
      }}
      {...props}
    />
  );
}
