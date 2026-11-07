import { defineSlotRecipe } from "@chakra-ui/react";

export const tabsSlotRecipe = defineSlotRecipe({
  slots: ["root", "list", "trigger", "content", "contentGroup", "indicator"],
  className: "chakra-tabs",
  base: {
    root: {
      "--tabs-trigger-radius": "radii.l2",
      "--tabs-indicator-shadow": "shadows.xs",
      "--tabs-indicator-bg": "colors.bg",
      position: "relative",
      _horizontal: {
        display: "block",
      },
      _vertical: {
        display: "flex",
      },
      colorPalette: "brand",
      minW: "0",
      maxW: "100%",
    },
    list: {
      display: "inline-flex",
      position: "relative",
      isolation: "isolate",
      minH: "var(--tabs-height)",
      _horizontal: {
        flexDirection: "row",
      },
      _vertical: {
        flexDirection: "column",
      },
      maxWidth: "100%",
      overflowX: "auto",
      scrollbarWidth: "none",
      "&::-webkit-scrollbar": {
        display: "none",
      },
      "--fade-size": "24px",
      "&[data-fade-end]": {
        maskImage: "linear-gradient(to right, black calc(100% - var(--fade-size)), transparent)",
      },
      "&[data-fade-start]": {
        maskImage: "linear-gradient(to left, black calc(100% - var(--fade-size)), transparent)",
      },
      "&[data-fade-start][data-fade-end]": {
        maskImage: "linear-gradient(to right, transparent, black var(--fade-size), black calc(100% - var(--fade-size)), transparent)",
      },
    },
    trigger: {
      outline: "0",
      minW: "var(--tabs-height)",
      height: "var(--tabs-height)",
      display: "flex",
      alignItems: "center",
      fontWeight: "medium",
      position: "relative",
      cursor: "button",
      gap: "2",
      _focusVisible: {
        zIndex: 1,
        outline: "2px solid",
        outlineColor: "colorPalette.focusRing",
      },
      _disabled: {
        cursor: "disabled",
        opacity: 0.5,
      },
      whiteSpace: "nowrap",
      flexShrink: 0,
    },
    content: {
      focusVisibleRing: "inside",
      _horizontal: {
        width: "100%",
        pt: "var(--tabs-content-padding)",
      },
      _vertical: {
        height: "100%",
        ps: "var(--tabs-content-padding)",
      },
    },
    indicator: {
      width: "var(--width)",
      height: "var(--height)",
      borderRadius: "var(--tabs-trigger-radius)",
      bg: "var(--tabs-indicator-bg)",
      shadow: "var(--tabs-indicator-shadow)",
      zIndex: -1,
    },
  },
  variants: {
    fitted: {
      true: {
        list: {
          display: "flex",
        },
        trigger: {
          flex: 1,
          textAlign: "center",
          justifyContent: "center",
        },
      },
    },
    justify: {
      start: {
        list: {
          justifyContent: "flex-start",
        },
      },
      center: {
        list: {
          justifyContent: "center",
        },
      },
      end: {
        list: {
          justifyContent: "flex-end",
        },
      },
    },
    size: {
      sm: {
        root: {
          "--tabs-height": "sizes.9",
          "--tabs-content-padding": "spacing.3",
        },
        trigger: {
          py: "1",
          px: "3",
          textStyle: "sm",
        },
      },
      md: {
        root: {
          "--tabs-height": "sizes.10",
          "--tabs-content-padding": "spacing.4",
        },
        trigger: {
          py: "2",
          px: "4",
          textStyle: "sm",
        },
      },
      lg: {
        root: {
          "--tabs-height": "sizes.11",
          "--tabs-content-padding": "spacing.4.5",
        },
        trigger: {
          py: "2",
          px: "4.5",
          textStyle: "md",
        },
      },
    },
    variant: {
      line: {
        list: {
          display: "flex",
          borderColor: "border",
          _horizontal: {
            borderBottomWidth: "1px",
          },
          _vertical: {
            borderEndWidth: "1px",
          },
        },
        trigger: {
          color: "fg.muted",
          _disabled: {
            _active: {
              bg: "initial",
            },
          },
          _selected: {
            color: "fg",
            _horizontal: {
              layerStyle: "indicator.bottom",
              "--indicator-offset-y": "-1px",
              "--indicator-color": "colors.colorPalette.solid",
            },
            _vertical: {
              layerStyle: "indicator.end",
              "--indicator-offset-x": "-1px",
            },
          },
        },
      },
      subtle: {
        trigger: {
          borderRadius: "var(--tabs-trigger-radius)",
          color: "fg.muted",
          _selected: {
            bg: "colorPalette.subtle",
            color: "colorPalette.fg",
          },
        },
      },
      enclosed: {
        list: {
          bg: "bg.muted",
          padding: "1",
          borderRadius: "l3",
          minH: "calc(var(--tabs-height) - 4px)",
          shadow: "inset",
          gap: "1",
        },
        trigger: {
          justifyContent: "center",
          color: "fg.subtle",
          borderRadius: "var(--tabs-trigger-radius)",
          _selected: {
            bg: "bg",
            color: "colorPalette.fg",
            shadow: "xs",
          },
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
      outline: {
        list: {
          "--line-thickness": "1px",
          "--line-offset": "calc(var(--line-thickness) * -1)",
          borderColor: "border",
          display: "flex",
          _horizontal: {
            _before: {
              content: "\"\"",
              position: "absolute",
              bottom: "0px",
              width: "100%",
              borderBottomWidth: "var(--line-thickness)",
              borderBottomColor: "border",
            },
          },
          _vertical: {
            _before: {
              content: "\"\"",
              position: "absolute",
              insetInline: "var(--line-offset)",
              height: "calc(100% - calc(var(--line-thickness) * 2))",
              borderEndWidth: "var(--line-thickness)",
              borderEndColor: "border",
            },
          },
        },
        trigger: {
          color: "fg.muted",
          borderWidth: "1px",
          borderColor: "transparent",
          _selected: {
            bg: "currentBg",
            color: "colorPalette.fg",
          },
          _horizontal: {
            borderTopRadius: "var(--tabs-trigger-radius)",
            marginBottom: "var(--line-offset)",
            marginEnd: {
              _notLast: "var(--line-offset)",
            },
            _selected: {
              borderColor: "border",
              borderBottomColor: "transparent",
            },
          },
          _vertical: {
            borderStartRadius: "var(--tabs-trigger-radius)",
            marginEnd: "var(--line-offset)",
            marginBottom: {
              _notLast: "var(--line-offset)",
            },
            _selected: {
              borderColor: "border",
              borderEndColor: "transparent",
            },
          },
        },
      },
      plain: {
        trigger: {
          color: "fg.muted",
          _selected: {
            color: "colorPalette.fg",
          },
          borderRadius: "var(--tabs-trigger-radius)",
          "&[data-selected][data-ssr]": {
            bg: "var(--tabs-indicator-bg)",
            shadow: "var(--tabs-indicator-shadow)",
            borderRadius: "var(--tabs-trigger-radius)",
          },
        },
      },
    },
  },
  defaultVariants: {
    size: "md",
    variant: "line",
  },
});
