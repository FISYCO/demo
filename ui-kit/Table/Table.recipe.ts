import { defineSlotRecipe } from "@chakra-ui/react";

export const tableSlotRecipe = defineSlotRecipe({
  className: "chakra-table",
  slots: ["root", "header", "body", "row", "columnHeader", "cell", "footer", "caption"],
  base: {
    root: {
      fontVariantNumeric: "lining-nums tabular-nums",
      borderCollapse: "collapse",
      width: "full",
      textAlign: "start",
      verticalAlign: "top",
      colorPalette: "brand",
    },
    row: {
      _selected: {
        bg: "colorPalette.subtle",
      },
      transition: "colors",
    },
    cell: {
      textAlign: "start",
      alignItems: "center",
      height: "12",
      color: "brand.fg",
    },
    columnHeader: {
      fontWeight: "semibold",
      textAlign: "start",
      color: "fg.subtle",
      fontSize: "xs",
      textTransform: "uppercase",
      letterSpacing: "wider",
      height: "10",
      bg: "bg.panel",
    },
    caption: {
      fontWeight: "medium",
      textStyle: "xs",
    },
    footer: {
      fontWeight: "medium",
    },
    header: {
      bg: "bg.panel",
    },
  },
  variants: {
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
    stickyHeader: {
      true: {
        header: {
          "& :where(tr)": {
            top: "var(--table-sticky-offset, 0)",
            position: "sticky",
            zIndex: 1,
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
    showColumnBorder: {
      true: {
        columnHeader: {
          "&:not(:last-of-type)": {
            borderInlineEndWidth: "1px",
          },
        },
        cell: {
          "&:not(:last-of-type)": {
            borderInlineEndWidth: "1px",
          },
        },
      },
    },
    variant: {
      line: {
        columnHeader: {
          borderBottomWidth: "1px",
        },
        cell: {
          borderBottomWidth: "1px",
        },
        row: {
          bg: "bg",
        },
      },
      outline: {
        root: {
          boxShadow: "none",
        },
        columnHeader: {
          borderBottomWidth: "1px",
          borderBottom: "1px solid {colors.border.muted}",
        },
        header: {
          bg: "bg.muted",
        },
        row: {
          "&:not(:last-of-type)": {
            borderBottomWidth: "1px",
          },
          "&:last-child td": {
            borderBottom: "0",
          },
        },
        footer: {
          borderTopWidth: "1px",
        },
        cell: {
          borderBottom: "1px solid {colors.border.muted}",
        },
      },
    },
    size: {
      sm: {
        root: {
          textStyle: "sm",
        },
        columnHeader: {
          px: "2",
          py: "2",
        },
        cell: {
          px: "2",
          py: "2",
        },
      },
      md: {
        root: {
          textStyle: "sm",
        },
        columnHeader: {
          px: "3",
          py: "3",
        },
        cell: {
          px: "3",
          py: "3",
        },
      },
      lg: {
        root: {
          textStyle: "md",
        },
        columnHeader: {
          px: "4",
          py: "3",
        },
        cell: {
          px: "4",
          py: "3",
        },
      },
    },
  },
  defaultVariants: {
    variant: "line",
    size: "md",
  },
});
