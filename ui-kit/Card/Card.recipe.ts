import { defineSlotRecipe } from "@chakra-ui/react";

export const cardSlotRecipe = defineSlotRecipe({
  className: "chakra-card",
  slots: ["root", "header", "body", "footer", "title", "description"],
  base: {
    root: {
      display: "flex",
      flexDirection: "column",
      position: "relative",
      minWidth: "0",
      wordWrap: "break-word",
      borderRadius: "l2",
      color: "fg",
      textAlign: "start",
      overflow: "clip",
    },
    title: {
      fontWeight: "semibold",
    },
    description: {
      color: "fg.muted",
      fontSize: "sm",
    },
    header: {
      paddingInline: "var(--card-padding)",
      paddingTop: "var(--card-padding)",
      display: "flex",
      flexDirection: "column",
      gap: "1.5",
    },
    body: {
      padding: "var(--card-padding)",
      flex: "1",
      display: "flex",
      flexDirection: "column",
    },
    footer: {
      display: "flex",
      alignItems: "center",
      gap: "2",
      paddingInline: "var(--card-padding)",
      paddingBottom: "var(--card-padding)",
    },
  },
  variants: {
    size: {
      sm: {
        root: {
          "--card-padding": "spacing.4",
        },
        title: {
          textStyle: "md",
        },
      },
      md: {
        root: {
          "--card-padding": "spacing.6",
        },
        title: {
          textStyle: "lg",
        },
      },
      lg: {
        root: {
          "--card-padding": "spacing.7",
        },
        title: {
          textStyle: "xl",
        },
      },
    },
    variant: {
      elevated: {
        root: {
          bg: "bg.panel",
          boxShadow: "md",
        },
      },
      outline: {
        root: {
          bg: "bg.panel",
          borderWidth: "1px",
          borderColor: "border.muted",
        },
      },
      subtle: {
        root: {
          bg: "bg.muted",
        },
      },
      interactive: {
        root: {
          textAlign: "start",
          "&:is(button)": {
            width: "100%",
          },
          focusVisibleRing: "outside",
          "&[aria-pressed=true]": {
            borderColor: "colorPalette.solid",
            _hover: {
              borderColor: "colorPalette.solid",
            },
          },
          bg: "bg.panel",
          borderWidth: "1px",
          borderColor: "border.muted",
          cursor: "pointer",
          transition: "background-color var(--chakra-durations-moderate), border-color var(--chakra-durations-moderate), box-shadow var(--chakra-durations-moderate), transform var(--chakra-durations-spring-press) var(--chakra-easings-spring-press)",
          _hover: {
            borderColor: "border",
          },
          _active: {
            borderColor: "border",
            bg: "bg.subtle",
            transform: "scale(0.985)",
            transitionDuration: "var(--chakra-durations-moderate), var(--chakra-durations-moderate), var(--chakra-durations-moderate), var(--chakra-durations-faster)",
          },
          _focusVisible: {
            outline: "2px solid",
            outlineColor: "brand.focusRing",
            outlineOffset: "2px",
          },
        },
      },
    },
  },
  defaultVariants: {
    variant: "outline",
    size: "md",
  },
});
