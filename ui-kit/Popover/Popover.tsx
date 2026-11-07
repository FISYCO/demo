import type { HTMLChakraProps, SystemStyleObject } from "@chakra-ui/react";
import { chakra, useSlotRecipe } from "@chakra-ui/react";
import { createContext, useContext } from "react";

import { popoverSlotRecipe } from "./Popover.recipe";

type Slot = "arrow" | "arrowTip" | "anchor" | "trigger" | "indicator" | "positioner" | "content" | "title" | "description" | "closeTrigger" | "header" | "body" | "footer";
const StylesContext = createContext<Record<Slot, SystemStyleObject> | null>(null);

function useStyles() {
  const styles = useContext(StylesContext);
  if (!styles) throw new Error("Popover parts must be inside Popover.Root");
  return styles;
}

export interface PopoverRootProps extends Omit<HTMLChakraProps<"div">, "size"> {
  size?: "xs" | "sm" | "md" | "lg";
}

/** Всплывающая панель. */
function Root({ size = "md", ...rest }: PopoverRootProps) {
  const styles = useSlotRecipe({ recipe: popoverSlotRecipe })({ size });
  return (
    <StylesContext.Provider value={styles}>
      <chakra.div css={styles.root} {...rest} />
    </StylesContext.Provider>
  );
}

function Arrow(props: HTMLChakraProps<"div">) {
  return <chakra.div css={useStyles().arrow} {...props} />;
}

function ArrowTip(props: HTMLChakraProps<"div">) {
  return <chakra.div css={useStyles().arrowTip} {...props} />;
}

function Anchor(props: HTMLChakraProps<"div">) {
  return <chakra.div css={useStyles().anchor} {...props} />;
}

function Trigger(props: HTMLChakraProps<"button">) {
  return <chakra.button css={useStyles().trigger} {...props} />;
}

function Indicator(props: HTMLChakraProps<"span">) {
  return <chakra.span css={useStyles().indicator} {...props} />;
}

function Positioner(props: HTMLChakraProps<"div">) {
  return <chakra.div css={useStyles().positioner} {...props} />;
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

function CloseTrigger(props: HTMLChakraProps<"button">) {
  return <chakra.button css={useStyles().closeTrigger} {...props} />;
}

function Header(props: HTMLChakraProps<"div">) {
  return <chakra.div css={useStyles().header} {...props} />;
}

function Body(props: HTMLChakraProps<"div">) {
  return <chakra.div css={useStyles().body} {...props} />;
}

function Footer(props: HTMLChakraProps<"div">) {
  return <chakra.div css={useStyles().footer} {...props} />;
}

export const Popover = { Root, Arrow, ArrowTip, Anchor, Trigger, Indicator, Positioner, Content, Title, Description, CloseTrigger, Header, Body, Footer };
