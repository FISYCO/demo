import type { HTMLChakraProps, SystemStyleObject } from "@chakra-ui/react";
import { chakra, useSlotRecipe } from "@chakra-ui/react";
import { createContext, useContext } from "react";

import { drawerSlotRecipe } from "./Drawer.recipe";

type Slot = "backdrop" | "positioner" | "content" | "header" | "body" | "footer" | "title" | "description" | "trigger" | "closeTrigger" | "actionTrigger";
const StylesContext = createContext<Record<Slot, SystemStyleObject> | null>(null);

function useStyles() {
  const styles = useContext(StylesContext);
  if (!styles) throw new Error("Drawer parts must be inside Drawer.Root");
  return styles;
}

export interface DrawerRootProps extends Omit<HTMLChakraProps<"div">, "size" | "placement" | "contained"> {
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "full";
  placement?: "start" | "end" | "top" | "bottom";
  contained?: boolean;
}

/** Боковая панель. */
function Root({ size = "xs", placement = "end", contained, ...rest }: DrawerRootProps) {
  const styles = useSlotRecipe({ recipe: drawerSlotRecipe })({ size, placement, contained });
  return (
    <StylesContext.Provider value={styles}>
      <chakra.div css={styles.root} {...rest} />
    </StylesContext.Provider>
  );
}

function Backdrop(props: HTMLChakraProps<"div">) {
  return <chakra.div css={useStyles().backdrop} {...props} />;
}

function Positioner(props: HTMLChakraProps<"div">) {
  return <chakra.div css={useStyles().positioner} {...props} />;
}

function Content(props: HTMLChakraProps<"div">) {
  return <chakra.div css={useStyles().content} {...props} />;
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

function Title(props: HTMLChakraProps<"h3">) {
  return <chakra.h3 css={useStyles().title} {...props} />;
}

function Description(props: HTMLChakraProps<"p">) {
  return <chakra.p css={useStyles().description} {...props} />;
}

function Trigger(props: HTMLChakraProps<"button">) {
  return <chakra.button css={useStyles().trigger} {...props} />;
}

function CloseTrigger(props: HTMLChakraProps<"button">) {
  return <chakra.button css={useStyles().closeTrigger} {...props} />;
}

function ActionTrigger(props: HTMLChakraProps<"button">) {
  return <chakra.button css={useStyles().actionTrigger} {...props} />;
}

export const Drawer = { Root, Backdrop, Positioner, Content, Header, Body, Footer, Title, Description, Trigger, CloseTrigger, ActionTrigger };
