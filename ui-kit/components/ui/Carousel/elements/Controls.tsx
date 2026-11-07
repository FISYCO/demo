"use client";
import { Carousel as BaseCarousel } from "@chakra-ui/react";

import type { CarouselControlsProps } from "../Carousel.types";
import { Control } from "./Control";
import { NextTrigger } from "./NextTrigger";
import { PrevTrigger } from "./PrevTrigger";

/**
 * Обычная связка управления: стрелка — точки — стрелка. Отдельные `Control`, `PrevTrigger`,
 * `NextTrigger` и `Indicators` остаются на случай другой раскладки.
 */
export function Controls({
  "data-testid": testId = "Carousel__Controls",
  prevLabel,
  nextLabel,
  withIndicators = true,
}: CarouselControlsProps) {
  return (
    <Control data-testid={testId}>
      <PrevTrigger label={prevLabel} />
      {withIndicators ? <BaseCarousel.Indicators data-testid="Carousel__Indicators" /> : null}
      <NextTrigger label={nextLabel} />
    </Control>
  );
}
