import type { HTMLChakraProps, SystemStyleObject } from "@chakra-ui/react";
import { chakra, useSlotRecipe } from "@chakra-ui/react";
import { createContext, useContext } from "react";

import { accordionSlotRecipe } from "./Accordion.recipe";

type Slot = "root" | "item" | "itemTrigger" | "itemContent" | "itemIndicator" | "itemBody";
const StylesContext = createContext<Record<Slot, SystemStyleObject> | null>(null);

function useStyles() {
  const styles = useContext(StylesContext);
  if (!styles) throw new Error("Accordion parts must be inside Accordion.Root");
  return styles;
}

export interface AccordionRootProps extends Omit<HTMLChakraProps<"div">, "variant" | "size"> {
  variant?: "outline" | "subtle" | "enclosed" | "plain";
  size?: "sm" | "md" | "lg";
}

/** Раскрывающиеся секции. */
function Root({ variant = "outline", size = "md", ...rest }: AccordionRootProps) {
  const styles = useSlotRecipe({ recipe: accordionSlotRecipe })({ variant, size });
  return (
    <StylesContext.Provider value={styles}>
      <chakra.div css={styles.root} {...rest} />
    </StylesContext.Provider>
  );
}

function Item(props: HTMLChakraProps<"div">) {
  return <chakra.div css={useStyles().item} {...props} />;
}

function ItemTrigger(props: HTMLChakraProps<"button">) {
  return <chakra.button css={useStyles().itemTrigger} {...props} />;
}

function ItemContent(props: HTMLChakraProps<"div">) {
  return <chakra.div css={useStyles().itemContent} {...props} />;
}

function ItemIndicator(props: HTMLChakraProps<"span">) {
  return <chakra.span css={useStyles().itemIndicator} {...props} />;
}

function ItemBody(props: HTMLChakraProps<"div">) {
  return <chakra.div css={useStyles().itemBody} {...props} />;
}

export const Accordion = { Root, Item, ItemTrigger, ItemContent, ItemIndicator, ItemBody };
