import type { HTMLChakraProps, SystemStyleObject } from "@chakra-ui/react";
import { chakra, useSlotRecipe } from "@chakra-ui/react";
import { createContext, useContext } from "react";

import { stepsSlotRecipe } from "./Steps.recipe";

type Slot = "root" | "list" | "item" | "trigger" | "indicator" | "separator" | "content" | "title" | "description" | "nextTrigger" | "prevTrigger" | "progress";
const StylesContext = createContext<Record<Slot, SystemStyleObject> | null>(null);

function useStyles() {
  const styles = useContext(StylesContext);
  if (!styles) throw new Error("Steps parts must be inside Steps.Root");
  return styles;
}

export interface StepsRootProps extends Omit<HTMLChakraProps<"div">, "orientation" | "variant" | "size" | "colorPalette"> {
  orientation?: "vertical" | "horizontal";
  variant?: "solid" | "subtle";
  size?: "xs" | "sm" | "md" | "lg";
  colorPalette?: "gray" | "red" | "pink" | "purple" | "cyan" | "blue" | "teal" | "green" | "yellow" | "orange";
}

/** Шаги процесса. */
function Root({ orientation = "horizontal", variant = "solid", size = "md", colorPalette = "gray", ...rest }: StepsRootProps) {
  const styles = useSlotRecipe({ recipe: stepsSlotRecipe })({ orientation, variant, size });
  return (
    <StylesContext.Provider value={styles}>
      <chakra.div css={styles.root} colorPalette={colorPalette} {...rest} />
    </StylesContext.Provider>
  );
}

function List(props: HTMLChakraProps<"div">) {
  return <chakra.div css={useStyles().list} {...props} />;
}

function Item(props: HTMLChakraProps<"div">) {
  return <chakra.div css={useStyles().item} {...props} />;
}

function Trigger(props: HTMLChakraProps<"button">) {
  return <chakra.button css={useStyles().trigger} {...props} />;
}

function Indicator(props: HTMLChakraProps<"span">) {
  return <chakra.span css={useStyles().indicator} {...props} />;
}

function Separator(props: HTMLChakraProps<"div">) {
  return <chakra.div css={useStyles().separator} {...props} />;
}

function Content(props: HTMLChakraProps<"div">) {
  return <chakra.div css={useStyles().content} {...props} />;
}

function Title(props: HTMLChakraProps<"h3">) {
  return <chakra.h3 css={useStyles().title} {...props} />;
}

function Description(props: HTMLChakraProps<"p">) {
  return <chakra.p css={useStyles().description} {...props} />;
}

function NextTrigger(props: HTMLChakraProps<"button">) {
  return <chakra.button css={useStyles().nextTrigger} {...props} />;
}

function PrevTrigger(props: HTMLChakraProps<"button">) {
  return <chakra.button css={useStyles().prevTrigger} {...props} />;
}

function Progress(props: HTMLChakraProps<"div">) {
  return <chakra.div css={useStyles().progress} {...props} />;
}

export const Steps = { Root, List, Item, Trigger, Indicator, Separator, Content, Title, Description, NextTrigger, PrevTrigger, Progress };
