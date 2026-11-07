import { defineSlotRecipe } from "@chakra-ui/react";

/**
 * Select recipe override.
 *
 * Mirrors Menu recipe: overrides default `subtle` variant highlight
 * to use `colorPalette.subtle` so items respond to the brand palette.
 */
export const selectRecipe = defineSlotRecipe({
  className: "chakra-select",
  slots: [
    "root",
    "label",
    "control",
    "trigger",
    "indicator",
    "indicatorGroup",
    "clearTrigger",
    "positioner",
    "content",
    "item",
    "itemText",
    "itemIndicator",
    "itemGroup",
    "itemGroupLabel",
    "valueText",
  ],
  base: {
    // Плейсхолдер у Chakra — `fg.muted/80`: прозрачность опускает контраст до 3:1, а WCAG требует
    // от текста подсказки тех же 4.5, что и от любого текста. Без прозрачности `fg.muted` порог держит.
    trigger: {
      _placeholderShown: {
        color: "fg.muted",
      },
    },
    content: {
      colorPalette: "brand",
    },
  },
  variants: {
    variant: {
      outline: {
        item: {
          _highlighted: {
            bg: "colorPalette.subtle",
          },
        },
      },
    },
  },
});
