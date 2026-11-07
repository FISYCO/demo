"use client";
import { Carousel as BaseCarousel } from "@chakra-ui/react";
import { AngleRight } from "../../../../../src/icons/angle-right";

import { IconButton } from "../../IconButton";
import type { CarouselNextTriggerProps } from "../Carousel.types";

export function NextTrigger({
  "data-testid": testId = "Carousel__NextTrigger",
  label,
  children,
  ...props
}: CarouselNextTriggerProps) {
  return (
    <BaseCarousel.NextTrigger asChild {...props}>
      <IconButton aria-label={label} variant="outline" size="sm" data-testid={testId}>
        {children ?? <AngleRight />}
      </IconButton>
    </BaseCarousel.NextTrigger>
  );
}
