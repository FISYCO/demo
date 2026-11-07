import { defineSlotRecipe } from "@chakra-ui/react";

/**
 * Listbox recipe override.
 *
 * - Content resets Chakra's default maxH: 96 (384px) to none;
 *   scrolling is handled by ScrollArea bundled in Content element.
 * - Sets brand colorPalette and cursor: pointer on items.
 * - Overrides highlight color to use colorPalette.
 */
export const listboxRecipe = defineSlotRecipe({
  className: "chakra-listbox",
  slots: [
    "root",
    "content",
    "item",
    "itemText",
    "itemIndicator",
    "itemGroup",
    "itemGroupLabel",
    "label",
    "input",
    "valueText",
    "empty",
  ],
  base: {
    input: {
      width: "100%",
      minWidth: "0",
      outline: "0",
      appearance: "none",
      textAlign: "start",
      borderRadius: "l2",
      height: "var(--input-height)",
      "--input-height": "sizes.9",
      textStyle: "sm",
      px: "2.5",
      borderWidth: "1px",
      borderColor: "border",
      bg: "bg",
      focusVisibleRing: "inside",
      _placeholder: {
        color: "fg.muted",
      },
      _disabled: {
        layerStyle: "disabled",
      },
    },
    root: {
      minHeight: "0",
    },
    content: {
      colorPalette: "brand",
      maxHeight: "none",
      overflow: "visible",
      _vertical: {
        overflowY: "visible",
      },
      _horizontal: {
        overflowX: "visible",
      },
    },
    item: {
      cursor: "pointer",
      transition: "colors",
      borderRadius: "l2",
      _hover: {
        bg: "colorPalette.emphasized/30",
      },
      _selected: {
        bg: "colorPalette.emphasized/30",
      },
    },
  },
});
