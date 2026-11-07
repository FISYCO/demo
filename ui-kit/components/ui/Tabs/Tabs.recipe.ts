import { defineSlotRecipe } from "@chakra-ui/react";

import { horizontalOverflowFade } from "../../../lib/use-horizontal-overflow";

export const tabsRecipe = defineSlotRecipe({
  className: "chakra-tabs",
  slots: ["root", "list", "trigger", "content", "contentGroup", "indicator"],
  base: {
    root: {
      colorPalette: "brand",
      // Вкладки — гибкий элемент строки (рядом действия, #1808): без `minW: 0` корень рос по ширине вкладок и вылезал
      // за страницу, а прокрутка полосы не включалась.
      minW: "0",
      maxW: "100%",
    },
    /**
     * Полоса вкладок прокручивается вбок, а не растягивает страницу.
     *
     * Четыре вкладки с иконками не помещаются в 360px, и без этого они раздвигали документ: вся
     * страница получала горизонтальную прокрутку, а таблица внутри — вылезала за экран (#1546).
     * Полосу прокрутки прячем: она здесь лишний шум, вкладки листаются пальцем и колесом.
     */
    list: {
      maxWidth: "100%",
      overflowX: "auto",
      scrollbarWidth: "none",
      "&::-webkit-scrollbar": { display: "none" },
      // Край, за которым есть ещё вкладки, гаснет (#1808): видно, что полосу можно листать.
      ...horizontalOverflowFade,
    },
    // Подпись вкладки не переносится и не сжимается (#1808): раньше «AI agents» ломалось на две строки, и полоса
    // становилась выше. Не помещается — полоса листается.
    trigger: {
      whiteSpace: "nowrap",
      flexShrink: 0,
    },
  },
  variants: {
    variant: {
      enclosed: {
        list: {
          bg: "bg.muted",
          shadow: "inset",
          gap: "1",
        },
        trigger: {
          color: "fg.subtle",
          transition: "colors",

          "&:hover:not([data-selected], [data-disabled])": {
            bg: "brand.emphasized/30",
          },

          "&[data-selected]": {
            bg: "bg.panel",
            cursor: "default",
          },
        },
      },
    },
  },
});
