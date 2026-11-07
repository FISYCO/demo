"use client";
import { Carousel as BaseCarousel } from "@chakra-ui/react";
import { AngleLeft } from "../../../../../src/icons/angle-left";

import { IconButton } from "../../IconButton";
import type { CarouselPrevTriggerProps } from "../Carousel.types";

export function PrevTrigger({
  "data-testid": testId = "Carousel__PrevTrigger",
  label,
  children,
  ...props
}: CarouselPrevTriggerProps) {
  return (
    <BaseCarousel.PrevTrigger asChild {...props}>
      <IconButton aria-label={label} variant="outline" size="sm" data-testid={testId}>
        {children ?? <AngleLeft />}
      </IconButton>
    </BaseCarousel.PrevTrigger>
  );
}
