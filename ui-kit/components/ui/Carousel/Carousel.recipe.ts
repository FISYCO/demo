import { defineSlotRecipe } from "@chakra-ui/react";

/**
 * Неактивную точку Chakra красит светлым тоном шкалы. На секции с фоном `bg.subtle` это ровно
 * подложка: в светлой теме видна только активная точка, и карусель выглядит как один слайд. Берём
 * цвет границы — он заметен и на `bg`, и на `bg.subtle`.
 */
export const carouselRecipe = defineSlotRecipe({
  slots: ["indicator"],
  base: {
    indicator: {
      bg: "border.emphasized",
      _current: { bg: "fg" },
    },
  },
});
