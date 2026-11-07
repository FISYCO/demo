import type { HTMLChakraProps, SystemStyleObject } from "@chakra-ui/react";
import { chakra, useSlotRecipe } from "@chakra-ui/react";
import { createContext, useContext } from "react";

import { hoverCardSlotRecipe } from "./HoverCard.recipe";

type Slot = "arrow" | "arrowTip" | "trigger" | "positioner" | "content";
const StylesContext = createContext<Record<Slot, SystemStyleObject> | null>(null);

function useStyles() {
  const styles = useContext(StylesContext);
  if (!styles) throw new Error("HoverCard parts must be inside HoverCard.Root");
  return styles;
}

export interface HoverCardRootProps extends Omit<HTMLChakraProps<"div">, "size"> {
  size?: "xs" | "sm" | "md" | "lg";
}

/** Карточка по наведению. */
function Root({ size = "md", ...rest }: HoverCardRootProps) {
  const styles = useSlotRecipe({ recipe: hoverCardSlotRecipe })({ size });
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

function Trigger(props: HTMLChakraProps<"button">) {
  return <chakra.button css={useStyles().trigger} {...props} />;
}

function Positioner(props: HTMLChakraProps<"div">) {
  return <chakra.div css={useStyles().positioner} {...props} />;
}

function Content(props: HTMLChakraProps<"div">) {
  return <chakra.div css={useStyles().content} {...props} />;
}

export const HoverCard = { Root, Arrow, ArrowTip, Trigger, Positioner, Content };
