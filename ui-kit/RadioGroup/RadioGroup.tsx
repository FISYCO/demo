import type { HTMLChakraProps, SystemStyleObject } from "@chakra-ui/react";
import { chakra, useSlotRecipe } from "@chakra-ui/react";
import { createContext, useContext } from "react";

import { radioGroupSlotRecipe } from "./RadioGroup.recipe";

type Slot = "root" | "label" | "item" | "itemText" | "itemControl" | "indicator" | "itemAddon" | "itemIndicator";
const StylesContext = createContext<Record<Slot, SystemStyleObject> | null>(null);

function useStyles() {
  const styles = useContext(StylesContext);
  if (!styles) throw new Error("RadioGroup parts must be inside RadioGroup.Root");
  return styles;
}

export interface RadioGroupRootProps extends Omit<HTMLChakraProps<"div">, "variant" | "size" | "colorPalette"> {
  variant?: "outline" | "subtle" | "solid";
  size?: "xs" | "sm" | "md" | "lg";
  colorPalette?: "gray" | "red" | "pink" | "purple" | "cyan" | "blue" | "teal" | "green" | "yellow" | "orange";
}

/** Группа переключателей. */
function Root({ variant = "solid", size = "md", colorPalette = "gray", ...rest }: RadioGroupRootProps) {
  const styles = useSlotRecipe({ recipe: radioGroupSlotRecipe })({ variant, size });
  return (
    <StylesContext.Provider value={styles}>
      <chakra.div css={styles.root} colorPalette={colorPalette} {...rest} />
    </StylesContext.Provider>
  );
}

function Label(props: HTMLChakraProps<"span">) {
  return <chakra.span css={useStyles().label} {...props} />;
}

function Item(props: HTMLChakraProps<"div">) {
  return <chakra.div css={useStyles().item} {...props} />;
}

function ItemText(props: HTMLChakraProps<"span">) {
  return <chakra.span css={useStyles().itemText} {...props} />;
}

function ItemControl(props: HTMLChakraProps<"div">) {
  return <chakra.div css={useStyles().itemControl} {...props} />;
}

function Indicator(props: HTMLChakraProps<"span">) {
  return <chakra.span css={useStyles().indicator} {...props} />;
}

function ItemAddon(props: HTMLChakraProps<"div">) {
  return <chakra.div css={useStyles().itemAddon} {...props} />;
}

function ItemIndicator(props: HTMLChakraProps<"span">) {
  return <chakra.span css={useStyles().itemIndicator} {...props} />;
}

export const RadioGroup = { Root, Label, Item, ItemText, ItemControl, Indicator, ItemAddon, ItemIndicator };
