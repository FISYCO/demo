import { defineSlotRecipe } from "@chakra-ui/react";

export const segmentGroupSlotRecipe = defineSlotRecipe({
  className: "chakra-segment-group",
  slots: ["root", "label", "item", "itemText", "itemControl", "indicator"],
  base: {
    root: {
      "--segment-radius": "radii.l2",
      "--segment-indicator-bg": "colors.bg.panel",
      "--segment-indicator-shadow": "shadows.xs",
      borderRadius: "l3",
      display: "inline-flex",
      boxShadow: "inset",
      minW: "0",
      textAlign: "center",
      position: "relative",
      isolation: "isolate",
      bg: "bg.muted",
      _vertical: {
        flexDirection: "column",
      },
      colorPalette: "brand",
      alignSelf: "flex-start",
      width: "fit-content",
      flexShrink: 0,
      maxW: "100%",
      gap: "1",
      p: "1",
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
      "&[data-fitted]": {
        width: "100%",
        alignSelf: "stretch",
        "& > [data-part=item]": {
          flex: "1",
        },
      },
    },
    item: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      userSelect: "none",
      fontSize: "sm",
      position: "relative",
      color: "fg.subtle",
      borderRadius: "var(--segment-radius)",
      cursor: "pointer",
      _disabled: {
        opacity: "0.5",
        cursor: "disabled",
      },
      "&:has(input:focus-visible)": {
        focusRing: "outside",
      },
      _before: {
        content: "\"\"",
        position: "absolute",
        bg: "border",
        transition: "opacity 0.2s",
        display: "none",
      },
      _horizontal: {
        _before: {
          insetInlineStart: 0,
          insetBlock: "1.5",
          width: "1px",
        },
      },
      _vertical: {
        _before: {
          insetBlockStart: 0,
          insetInline: "1.5",
          height: "1px",
        },
      },
      "& + &[data-state=checked], &[data-state=checked] + &, &:first-of-type": {
        _before: {
          opacity: "0",
        },
      },
      "&[data-state=checked][data-ssr]": {
        shadow: "sm",
        bg: "bg",
        borderRadius: "var(--segment-radius)",
      },
      whiteSpace: "nowrap",
      flexShrink: 0,
      transition: "colors",
      "&:hover:not([data-state=checked], [data-disabled])": {
        bg: "brand.emphasized/30",
      },
      _checked: {
        color: "fg",
        cursor: "default",
      },
      _focusVisible: {
        outline: "2px solid",
        outlineColor: "colorPalette.focusRing",
        outlineOffset: "-2px",
      },
    },
    indicator: {
      shadow: "var(--segment-indicator-shadow)",
      pos: "absolute",
      bg: "var(--segment-indicator-bg)",
      width: "var(--width)",
      height: "var(--height)",
      top: "var(--top)",
      left: "var(--left)",
      zIndex: -1,
      borderRadius: "var(--segment-radius)",
      transitionDuration: "spring",
      transitionTimingFunction: "spring",
    },
  },
  variants: {
    size: {
      xs: {
        item: {
          textStyle: "xs",
          px: "3",
          gap: "1",
          height: "6",
        },
      },
      sm: {
        item: {
          textStyle: "sm",
          px: "4",
          gap: "2",
          height: "8",
        },
      },
      md: {
        item: {
          textStyle: "sm",
          px: "4",
          gap: "2",
          height: "10",
        },
      },
      lg: {
        item: {
          textStyle: "md",
          px: "4.5",
          gap: "3",
          height: "11",
        },
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
});
