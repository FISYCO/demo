import { defineRecipe } from "@chakra-ui/react";

/**
 * Button recipe override.
 *
 * Sets `colorPalette: "brand"` as the base default so every Button
 * and IconButton inherits brand styling without explicit prop.
 *
 * Нажатие (#1761): кнопка под пальцем проседает и упруго возвращается — нажатие видно, даже когда ответ ещё в пути.
 * Цвета меняются за `moderate`, а масштаб — на пружине отклика: перелёт пружины в цвете дал бы мерцание.
 */
export const buttonRecipe = defineRecipe({
  className: "chakra-button",
  base: {
    colorPalette: "brand",
    transition:
      "background-color var(--chakra-durations-moderate), border-color var(--chakra-durations-moderate), color var(--chakra-durations-moderate), box-shadow var(--chakra-durations-moderate), opacity var(--chakra-durations-moderate), transform var(--chakra-durations-spring-press) var(--chakra-easings-spring-press)",
    _active: {
      transform: "scale(0.97)",
      transitionDuration:
        "var(--chakra-durations-moderate), var(--chakra-durations-moderate), var(--chakra-durations-moderate), var(--chakra-durations-moderate), var(--chakra-durations-moderate), var(--chakra-durations-faster)",
    },
  },
  // Иконка кнопки — по правилу «иконка к кеглю» (#1777): у `sm` текст 14px, значит иконка 18px, а не 16px Chakra.
  variants: {
    size: {
      sm: { _icon: { width: "4.5", height: "4.5" } },
    },
  },
});
