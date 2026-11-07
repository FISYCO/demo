"use client";
import { Carousel as BaseCarousel } from "@chakra-ui/react";

import { Control } from "./elements/Control";
import { Controls } from "./elements/Controls";
import { ItemGroup } from "./elements/ItemGroup";
import { NextTrigger } from "./elements/NextTrigger";
import { PrevTrigger } from "./elements/PrevTrigger";
import { Root } from "./elements/Root";

export const Carousel = {
  Root,
  ItemGroup,
  Controls,
  // Раскладка управления вручную, когда готовая связка не подходит
  Control,
  PrevTrigger,
  NextTrigger,
  // Интерактивные элементы Ark — прямые ре-экспорты (обёртка ломает трекинг слайдов)
  Item: BaseCarousel.Item,
  Indicator: BaseCarousel.Indicator,
  IndicatorGroup: BaseCarousel.IndicatorGroup,
  Indicators: BaseCarousel.Indicators,
  AutoplayTrigger: BaseCarousel.AutoplayTrigger,
  AutoplayIndicator: BaseCarousel.AutoplayIndicator,
  ProgressText: BaseCarousel.ProgressText,
  // Non-DOM utilities (passthrough — raw, no className enforcement)
  Context: BaseCarousel.Context,
  RootProvider: BaseCarousel.RootProvider,
  PropsProvider: BaseCarousel.PropsProvider,
};

// Public types
export type {
  CarouselControlProps,
  CarouselControlsProps,
  CarouselIndicatorsProps,
  CarouselItemGroupProps,
  CarouselItemProps,
  CarouselNextTriggerProps,
  CarouselPrevTriggerProps,
  CarouselRootProps,
} from "./Carousel.types";
