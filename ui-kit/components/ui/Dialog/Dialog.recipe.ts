import { defineSlotRecipe } from "@chakra-ui/react";

/**
 * Dialog recipe override.
 *
 * Sets `colorPalette: "brand"` on content so all nested tokens
 * (bg, border, focus ring) respond to the brand palette by default.
 */
export const dialogRecipe = defineSlotRecipe({
  className: "chakra-dialog",
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
    content: {
      colorPalette: "brand",
    },
  },
});
