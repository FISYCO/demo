import type { HTMLChakraProps, SystemStyleObject } from "@chakra-ui/react";
import { chakra, useSlotRecipe } from "@chakra-ui/react";
import { createContext, useContext } from "react";

import { numberInputSlotRecipe } from "./NumberInput.recipe";

type Slot = "root" | "label" | "input" | "control" | "valueText" | "incrementTrigger" | "decrementTrigger" | "scrubber";
const StylesContext = createContext<Record<Slot, SystemStyleObject> | null>(null);

function useStyles() {
  const styles = useContext(StylesContext);
  if (!styles) throw new Error("NumberInput parts must be inside NumberInput.Root");
  return styles;
}

export interface NumberInputRootProps extends Omit<HTMLChakraProps<"div">, "size" | "variant"> {
  size?: "xs" | "sm" | "md" | "lg";
  variant?: "outline" | "subtle" | "flushed";
}

/** Поле числа. */
function Root({ size = "md", variant = "outline", ...rest }: NumberInputRootProps) {
  const styles = useSlotRecipe({ recipe: numberInputSlotRecipe })({ size, variant });
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

function ValueText(props: HTMLChakraProps<"span">) {
  return <chakra.span css={useStyles().valueText} {...props} />;
}

function IncrementTrigger(props: HTMLChakraProps<"button">) {
  return <chakra.button css={useStyles().incrementTrigger} {...props} />;
}

function DecrementTrigger(props: HTMLChakraProps<"button">) {
  return <chakra.button css={useStyles().decrementTrigger} {...props} />;
}

function Scrubber(props: HTMLChakraProps<"div">) {
  return <chakra.div css={useStyles().scrubber} {...props} />;
}

export const NumberInput = { Root, Label, Input, Control, ValueText, IncrementTrigger, DecrementTrigger, Scrubber };
