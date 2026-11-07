"use client";
import { Carousel as BaseCarousel } from "@chakra-ui/react";

import type { CarouselItemGroupProps } from "../Carousel.types";

export function ItemGroup({
  "data-testid": testId = "Carousel__ItemGroup",
  children,
  ...props
}: CarouselItemGroupProps) {
  return (
    <BaseCarousel.ItemGroup {...props} data-testid={testId}>
      {children}
    </BaseCarousel.ItemGroup>
  );
}
