import type { HTMLChakraProps, SystemStyleObject } from "@chakra-ui/react";
import { chakra, useSlotRecipe } from "@chakra-ui/react";
import { createContext, useContext } from "react";

import { pinInputSlotRecipe } from "./PinInput.recipe";

type Slot = "root" | "label" | "input" | "control";
const StylesContext = createContext<Record<Slot, SystemStyleObject> | null>(null);

function useStyles() {
  const styles = useContext(StylesContext);
  if (!styles) throw new Error("PinInput parts must be inside PinInput.Root");
  return styles;
}

export interface PinInputRootProps extends Omit<HTMLChakraProps<"div">, "size" | "variant" | "attached"> {
  size?: "2xs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
  variant?: "outline" | "subtle" | "flushed";
  attached?: boolean;
}

/** Ввод кода. */
function Root({ size = "md", variant = "outline", attached, ...rest }: PinInputRootProps) {
  const styles = useSlotRecipe({ recipe: pinInputSlotRecipe })({ size, variant, attached });
  return (
    <StylesContext.Provider value={styles}>
      <chakra.div css={styles.root} {...rest} />
    </StylesContext.Provider>
  );
}

function Label(props: HTMLChakraProps<"span">) {
  return <chakra.span css={useStyles().label} {...props} />;
}

function Input(props: HTMLChakraProps<"input">) {
  return <chakra.input css={useStyles().input} {...props} />;
}

function Control(props: HTMLChakraProps<"div">) {
  return <chakra.div css={useStyles().control} {...props} />;
}

export const PinInput = { Root, Label, Input, Control };
