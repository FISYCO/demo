import { defineRecipe } from "@chakra-ui/react";

export const buttonRecipe = defineRecipe({
  className: "chakra-button",
  base: {
    display: "inline-flex",
    appearance: "none",
    alignItems: "center",
    justifyContent: "center",
    userSelect: "none",
    position: "relative",
    borderRadius: "l2",
    whiteSpace: "nowrap",
    verticalAlign: "middle",
    borderWidth: "1px",
    borderColor: "transparent",
    cursor: "button",
    flexShrink: "0",
    outline: "0",
    lineHeight: "1.2",
    isolation: "isolate",
    fontWeight: "medium",
    transitionProperty: "common",
    transitionDuration: "moderate",
    focusVisibleRing: "outside",
    _disabled: {
      layerStyle: "disabled",
    },
    _icon: {
      flexShrink: "0",
    },
    colorPalette: "brand",
    transition: "background-color var(--chakra-durations-moderate), border-color var(--chakra-durations-moderate), color var(--chakra-durations-moderate), box-shadow var(--chakra-durations-moderate), opacity var(--chakra-durations-moderate), transform var(--chakra-durations-spring-press) var(--chakra-easings-spring-press)",
    _active: {
      transform: "scale(0.97)",
      transitionDuration: "var(--chakra-durations-moderate), var(--chakra-durations-moderate), var(--chakra-durations-moderate), var(--chakra-durations-moderate), var(--chakra-durations-moderate), var(--chakra-durations-faster)",
    },
  },
  variants: {
    size: {
      xs: {
        h: "8",
        minW: "8",
        textStyle: "xs",
        px: "2.5",
        gap: "1",
        _icon: {
          width: "4",
          height: "4",
        },
      },
      sm: {
        h: "9",
        minW: "9",
        px: "3.5",
        textStyle: "sm",
        gap: "2",
        _icon: {
          width: "4.5",
          height: "4.5",
        },
      },
      md: {
        h: "10",
        minW: "10",
        textStyle: "sm",
        px: "4",
        gap: "2",
        _icon: {
          width: "5",
          height: "5",
        },
      },
      lg: {
        h: "11",
        minW: "11",
        textStyle: "md",
        px: "5",
        gap: "3",
        _icon: {
          width: "5",
          height: "5",
        },
      },
      xl: {
        h: "12",
        minW: "12",
        textStyle: "md",
        px: "5",
        gap: "2.5",
        _icon: {
          width: "5",
          height: "5",
        },
      },
      "2xl": {
        h: "16",
        minW: "16",
        textStyle: "lg",
        px: "7",
        gap: "3",
        _icon: {
          width: "6",
          height: "6",
        },
      },
    },
    variant: {
      solid: {
        bg: "colorPalette.solid",
        color: "colorPalette.contrast",
        borderColor: "transparent",
        _hover: {
          bg: "colorPalette.solid/90",
        },
        _expanded: {
          bg: "colorPalette.solid/90",
        },
      },
      subtle: {
        bg: "colorPalette.subtle",
        color: "colorPalette.fg",
        borderColor: "transparent",
        _hover: {
          bg: "colorPalette.muted",
        },
        _expanded: {
          bg: "colorPalette.muted",
        },
      },
      surface: {
        bg: "colorPalette.subtle",
        color: "colorPalette.fg",
        shadow: "0 0 0px 1px var(--shadow-color)",
        shadowColor: "colorPalette.muted",
        _hover: {
          bg: "colorPalette.muted",
        },
        _expanded: {
          bg: "colorPalette.muted",
        },
      },
      outline: {
        borderWidth: "1px",
        "--outline-color-legacy": "colors.colorPalette.muted",
        "--outline-color": "colors.colorPalette.border",
        borderColor: "var(--outline-color, var(--outline-color-legacy))",
        color: "colorPalette.fg",
        _hover: {
          bg: "colorPalette.subtle",
        },
        _expanded: {
          bg: "colorPalette.subtle",
        },
      },
      ghost: {
        bg: "transparent",
        color: "colorPalette.fg",
        _hover: {
          bg: "colorPalette.subtle",
        },
        _expanded: {
          bg: "colorPalette.subtle",
        },
      },
      plain: {
        color: "colorPalette.fg",
      },
    },
  },
  defaultVariants: {
    size: "md",
    variant: "solid",
  },
});
