import { defineSlotRecipe } from "@chakra-ui/react";

/**
 * Table recipe override.
 *
 * Applies default header/columnHeader styling so consumers don't
 * need to repeat fontSize/textTransform/color on every column.
 *
 * Линии строк и рамка — `border.muted` (#1758), как у карточки: таблица лежит в карточке, и линии ярче её рамки
 * рябили бы.
 */
export const tableRecipe = defineSlotRecipe({
  className: "chakra-table",
  slots: ["root", "header", "body", "row", "columnHeader", "cell", "footer", "caption"],
  base: {
    root: {
      colorPalette: "brand",
    },
    columnHeader: {
      fontSize: "xs",
      textTransform: "uppercase",
      color: "fg.subtle",
      fontWeight: "semibold",
      letterSpacing: "wider",
      height: "10",
      bg: "bg.panel",
    },
    cell: {
      height: "12",
      color: "brand.fg",
    },
    header: {
      bg: "bg.panel",
    },
    row: {
      transition: "colors",
    },
  },
  variants: {
    variant: {
      outline: {
        // Рамку рисует внешний контейнер (он же обрезает по радиусу). Вариант Chakra добавлял ещё одну — кольцо тенью
        // цвета `border` на 1px внутрь, — и две линии рядом читались размытой рамкой (#1809).
        root: {
          boxShadow: "none",
        },
        columnHeader: {
          borderBottom: "1px solid {colors.border.muted}",
        },
        cell: {
          borderBottom: "1px solid {colors.border.muted}",
        },
        row: {
          "&:last-child td": {
            borderBottom: "0",
          },
        },
      },
    },

    interactive: {
      true: {
        body: {
          "& tr": {
            _hover: {
              bg: "colorPalette.emphasized/10",
            },
          },
        },
      },
    },
    striped: {
      true: {
        row: {
          "&:nth-of-type(odd) td": {
            bg: "colorPalette.emphasized/5",
          },
        },
      },
    },
  },
});
