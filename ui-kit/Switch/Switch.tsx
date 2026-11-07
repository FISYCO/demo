import type { HTMLChakraProps, SystemStyleObject } from "@chakra-ui/react";
import { chakra, useSlotRecipe } from "@chakra-ui/react";
import { createContext, useContext } from "react";

import { switchSlotRecipe } from "./Switch.recipe";

type Slot = "root" | "label" | "control" | "thumb" | "indicator";
const StylesContext = createContext<Record<Slot, SystemStyleObject> | null>(null);

function useStyles() {
  const styles = useContext(StylesContext);
  if (!styles) throw new Error("Switch parts must be inside Switch.Root");
  return styles;
}

export interface SwitchRootProps extends Omit<HTMLChakraProps<"div">, "variant" | "size" | "colorPalette"> {
  variant?: "solid" | "raised";
  size?: "xs" | "sm" | "md" | "lg";
  colorPalette?: "gray" | "red" | "pink" | "purple" | "cyan" | "blue" | "teal" | "green" | "yellow" | "orange";
}

/** Переключатель. */
function Root({ variant = "solid", size = "md", colorPalette = "gray", ...rest }: SwitchRootProps) {
  const styles = useSlotRecipe({ recipe: switchSlotRecipe })({ variant, size });
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

function Thumb(props: HTMLChakraProps<"div">) {
  return <chakra.div css={useStyles().thumb} {...props} />;
}

function Indicator(props: HTMLChakraProps<"span">) {
  return <chakra.span css={useStyles().indicator} {...props} />;
}

export const Switch = { Root, Label, Control, Thumb, Indicator };
