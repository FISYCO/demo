import { defineSlotRecipe } from "@chakra-ui/react";

/**
 * Toast recipe override (#339).
 *
 * Chakra's default toast fills the whole surface with `green.solid` / `red.solid` /
 * `orange.solid` per `data-type`, which reads as garish against this neutral, monochrome
 * design system. This recipe keeps the surface neutral (`bg.panel` + thin border) in every
 * status; the status is conveyed solely by the colored leading icon (see Toaster.tsx, using
 * the `status.*` semantic tokens). It also enlarges the close trigger into a comfortable
 * 28px hit area with a hover affordance.
 */
export const toastRecipe = defineSlotRecipe({
  className: "chakra-toast",
  slots: ["root", "title", "description", "indicator", "actionTrigger", "closeTrigger"],
  base: {
    root: {
      bg: "bg.panel",
      color: "fg",
      borderWidth: "1px",
      borderColor: "border",
      borderRadius: "l2",
      boxShadow: "lg",
      gap: "3",
      padding: "4",
      paddingEnd: "10",
      alignItems: "flex-start",
      // Neutralize Chakra's default solid status fills — status reads from the icon only.
      "&[data-type=success]": { bg: "bg.panel", color: "fg" },
      "&[data-type=warning]": { bg: "bg.panel", color: "fg" },
      "&[data-type=error]": { bg: "bg.panel", color: "fg" },
    },
    title: {
      textStyle: "sm",
      fontWeight: "semibold",
      color: "fg",
      marginEnd: "0",
    },
    description: {
      textStyle: "sm",
      color: "fg.subtle",
      opacity: "1",
    },
    indicator: {
      flexShrink: "0",
      boxSize: "5",
      marginTop: "0.5",
    },
    closeTrigger: {
      position: "absolute",
      top: "2",
      insetEnd: "2",
      boxSize: "7",
      padding: "0",
      borderRadius: "l2",
      color: "fg.muted",
      transition: "colors",
      _icon: { boxSize: "4" },
      _hover: { color: "fg", bg: "bg.muted" },
    },
  },
});
