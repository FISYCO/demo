import type { HTMLChakraProps, SystemStyleObject } from "@chakra-ui/react";
import { chakra, useSlotRecipe } from "@chakra-ui/react";
import { createContext, useContext } from "react";

import { checkboxCardSlotRecipe } from "./CheckboxCard.recipe";

type Slot = "root" | "control" | "label" | "description" | "addon" | "indicator" | "content";
const StylesContext = createContext<Record<Slot, SystemStyleObject> | null>(null);

function useStyles() {
  const styles = useContext(StylesContext);
  if (!styles) throw new Error("CheckboxCard parts must be inside CheckboxCard.Root");
  return styles;
}

export interface CheckboxCardRootProps extends Omit<HTMLChakraProps<"div">, "size" | "variant" | "justify" | "align" | "orientation"> {
  size?: "sm" | "md" | "lg";
  variant?: "surface" | "subtle" | "outline" | "solid";
  justify?: "start" | "end" | "center";
  align?: "start" | "end" | "center";
  orientation?: "vertical" | "horizontal";
}

/** Флажок-карточка. */
function Root({ size = "md", variant = "outline", justify, align = "start", orientation = "horizontal", ...rest }: CheckboxCardRootProps) {
  const styles = useSlotRecipe({ recipe: checkboxCardSlotRecipe })({ size, variant, justify, align, orientation });
  return (
    <StylesContext.Provider value={styles}>
      <chakra.div css={styles.root} {...rest} />
    </StylesContext.Provider>
  );
}

function Control(props: HTMLChakraProps<"div">) {
  return <chakra.div css={useStyles().control} {...props} />;
}

function Label(props: HTMLChakraProps<"span">) {
  return <chakra.span css={useStyles().label} {...props} />;
}

function Description(props: HTMLChakraProps<"p">) {
  return <chakra.p css={useStyles().description} {...props} />;
}

function Addon(props: HTMLChakraProps<"div">) {
  return <chakra.div css={useStyles().addon} {...props} />;
}

function Indicator(props: HTMLChakraProps<"span">) {
  return <chakra.span css={useStyles().indicator} {...props} />;
}

function Content(props: HTMLChakraProps<"div">) {
  return <chakra.div css={useStyles().content} {...props} />;
}

export const CheckboxCard = { Root, Control, Label, Description, Addon, Indicator, Content };
