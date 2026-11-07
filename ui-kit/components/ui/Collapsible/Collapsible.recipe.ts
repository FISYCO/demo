import { defineSlotRecipe } from "@chakra-ui/react";

/**
 * Раскрытие (#1761): блок разворачивается на пружине и сворачивается быстрее, чем раскрылся, — как в iOS, где
 * уход всегда короче появления. Содержимое остаётся в DOM до конца сворачивания, поэтому не пропадает раньше, чем
 * схлопнулась высота.
 */
export const collapsibleRecipe = defineSlotRecipe({
  className: "chakra-collapsible",
  slots: ["root", "trigger", "content", "indicator"],
  base: {
    content: {
      _open: {
        animationDuration: "spring",
        animationTimingFunction: "spring",
      },
      _closed: {
        animationDuration: "exit",
        animationTimingFunction: "ease-in",
      },
    },
  },
});
