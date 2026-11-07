import { defineSlotRecipe } from "@chakra-ui/react";

/**
 * Drawer recipe override.
 *
 * Sets `colorPalette: "brand"` on content so all nested tokens
 * respond to the brand palette by default.
 *
 * Тайминг (#1766): открытие 300 мс с замедлением в конце, закрытие быстрее — 200 мс с ускорением, как у диалога.
 * Раньше шторка выезжала полсекунды и ощущалась тяжелее диалога.
 */
export const drawerRecipe = defineSlotRecipe({
  className: "chakra-drawer",
  slots: [
    "backdrop",
    "positioner",
    "content",
    "header",
    "body",
    "footer",
    "title",
    "description",
    "trigger",
    "closeTrigger",
    "actionTrigger",
  ],
  base: {
    backdrop: {
      _open: { animationDuration: "slow" },
      _closed: { animationDuration: "moderate" },
    },
    content: {
      colorPalette: "brand",
      _open: { animationDuration: "slow", animationTimingFunction: "ease-out" },
      _closed: { animationDuration: "moderate", animationTimingFunction: "ease-in" },
    },
  },
});
