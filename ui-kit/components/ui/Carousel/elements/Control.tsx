"use client";
import { Carousel as BaseCarousel } from "@chakra-ui/react";

import type { CarouselControlProps } from "../Carousel.types";

/** Ряд под лентой слайдов. Своя раскладка нужна редко — обычно берут готовый `Carousel.Controls`. */
export function Control({ "data-testid": testId = "Carousel__Control", children, ...props }: CarouselControlProps) {
  return (
    <BaseCarousel.Control justifyContent="center" gap="4" {...props} data-testid={testId}>
      {children}
    </BaseCarousel.Control>
  );
}
