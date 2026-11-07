"use client";
import { Carousel as BaseCarousel } from "@chakra-ui/react";

import type { CarouselRootProps } from "../Carousel.types";

/**
 * Отступ между лентой слайдов и управлением задаём здесь: у потребителя style-пропов нет,
 * а без него стрелки прилипают к слайду.
 */
export function Root({ "data-testid": testId = "Carousel", children, ...props }: CarouselRootProps) {
  return (
    <BaseCarousel.Root gap="4" {...props} data-testid={testId}>
      {children}
    </BaseCarousel.Root>
  );
}
