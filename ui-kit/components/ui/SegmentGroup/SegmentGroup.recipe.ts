import { defineSlotRecipe } from "@chakra-ui/react";

import { horizontalOverflowFade } from "../../../lib/use-horizontal-overflow";

/**
 * Переключатель отборов (#1773) в виде вкладок (#1807): та же утопленная подложка, что у `Tabs variant="enclosed"`, без
 * разделителей между пунктами, выбранный — плашкой панели, которая переезжает на пружине.
 *
 * Ширина — по содержимому: раньше в колонке он растягивался на всю строку, и большая часть его стояла пустой. Во всю
 * ширину — только по `fitted`. Не помещается — листается внутри себя и гасит край, как полоса вкладок.
 */
export const segmentGroupRecipe = defineSlotRecipe({
  className: "chakra-segment-group",
  slots: ["root", "label", "item", "itemText", "itemControl", "indicator"],
  base: {
    root: {
      "--segment-radius": "radii.l2",
      "--segment-indicator-bg": "colors.bg.panel",
      "--segment-indicator-shadow": "shadows.xs",
      colorPalette: "brand",
      alignSelf: "flex-start",
      width: "fit-content",
      // В ряду с соседями не уступает место первой: `minW: 0` со скроллом внутри разрешал flex-ряду сжать её до прокрутки,
      // хотя место было. Прокрутка — только когда пункты шире всего контейнера (`maxW: 100%`).
      flexShrink: 0,
      minW: "0",
      maxW: "100%",
      gap: "1",
      p: "1",
      borderRadius: "l3",
      bg: "bg.muted",
      boxShadow: "inset",
      overflowX: "auto",
      scrollbarWidth: "none",
      "&::-webkit-scrollbar": { display: "none" },
      ...horizontalOverflowFade,
      // Во всю ширину — только по `fitted` (атрибут ставит компонент); пункты делят строку поровну.
      "&[data-fitted]": {
        width: "100%",
        alignSelf: "stretch",
        "& > [data-part=item]": { flex: "1" },
      },
    },
    item: {
      color: "fg.subtle",
      whiteSpace: "nowrap",
      flexShrink: 0,
      transition: "colors",
      cursor: "pointer",
      // Разделители Chakra между пунктами выглядели как сломанная вёрстка; у вкладок их нет.
      _before: { display: "none" },
      "&:hover:not([data-state=checked], [data-disabled])": { bg: "brand.emphasized/30" },
      _checked: { color: "fg", cursor: "default" },
      _focusVisible: { outline: "2px solid", outlineColor: "colorPalette.focusRing", outlineOffset: "-2px" },
    },
    indicator: {
      transitionDuration: "spring",
      transitionTimingFunction: "spring",
    },
  },
});
