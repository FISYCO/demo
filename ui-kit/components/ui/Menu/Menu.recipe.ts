import { defineSlotRecipe } from "@chakra-ui/react";

/**
 * Menu recipe override.
 *
 * Default `subtle` variant uses a hardcoded `bg.emphasized/60` for
 * highlighted items — this ignores `colorPalette` entirely.
 * We override it to use `colorPalette.subtle` so the highlight
 * responds to the palette set on the nearest ancestor (Content).
 */
export const menuRecipe = defineSlotRecipe({
  className: "chakra-menu",
  slots: [
    "arrow",
    "arrowTip",
    "content",
    "contextTrigger",
    "indicator",
    "item",
    "itemCommand",
    "itemGroup",
    "itemGroupLabel",
    "itemIndicator",
    "itemText",
    "positioner",
    "separator",
    "trigger",
    "triggerItem",
  ],
  base: {
    content: {
      colorPalette: "brand",
    },
    item: {
      cursor: "pointer",
    },
  },
  variants: {
    variant: {
      subtle: {
        item: {
          _highlighted: {
            bg: "colorPalette.emphasized/30",
          },
        },
      },
    },
  },
});
