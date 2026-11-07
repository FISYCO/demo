import type { HTMLChakraProps, SystemStyleObject } from "@chakra-ui/react";
import { chakra, useSlotRecipe } from "@chakra-ui/react";
import { createContext, useContext } from "react";

import { checkboxSlotRecipe } from "./Checkbox.recipe";

type Slot = "root" | "label" | "control" | "indicator" | "group";
const StylesContext = createContext<Record<Slot, SystemStyleObject> | null>(null);

function useStyles() {
  const styles = useContext(StylesContext);
  if (!styles) throw new Error("Checkbox parts must be inside Checkbox.Root");
  return styles;
}

export interface CheckboxRootProps extends Omit<HTMLChakraProps<"div">, "size" | "variant" | "colorPalette"> {
  size?: "xs" | "sm" | "md" | "lg";
  variant?: "outline" | "solid" | "subtle";
  colorPalette?: "gray" | "red" | "pink" | "purple" | "cyan" | "blue" | "teal" | "green" | "yellow" | "orange";
}

/** Флажок. */
function Root({ size = "md", variant = "solid", colorPalette = "gray", ...rest }: CheckboxRootProps) {
  const styles = useSlotRecipe({ recipe: checkboxSlotRecipe })({ size, variant });
  return (
    <StylesContext.Provider value={styles}>
      <chakra.div css={styles.root} colorPalette={colorPalette} {...rest} />
    </StylesContext.Provider>
  );
}

function Label(props: HTMLChakraProps<"span">) {
  return <chakra.span css={useStyles().label} {...props} />;
}

function Control(props: HTMLChakraProps<"div">) {
  return <chakra.div css={useStyles().control} {...props} />;
}

function Indicator(props: HTMLChakraProps<"span">) {
  return <chakra.span css={useStyles().indicator} {...props} />;
}

function Group(props: HTMLChakraProps<"div">) {
  return <chakra.div css={useStyles().group} {...props} />;
}

export const Checkbox = { Root, Label, Control, Indicator, Group };
