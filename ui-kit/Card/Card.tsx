import type { HTMLChakraProps, SystemStyleObject } from "@chakra-ui/react";
import { chakra, useSlotRecipe } from "@chakra-ui/react";
import { createContext, useContext } from "react";

import { cardSlotRecipe } from "./Card.recipe";

type Slot = "root" | "header" | "body" | "footer" | "title" | "description";
const StylesContext = createContext<Record<Slot, SystemStyleObject> | null>(null);

function useStyles() {
  const styles = useContext(StylesContext);
  if (!styles) throw new Error("Card parts must be inside Card.Root");
  return styles;
}

export interface CardRootProps extends Omit<HTMLChakraProps<"div">, "size" | "variant"> {
  size?: "sm" | "md" | "lg";
  variant?: "elevated" | "outline" | "subtle" | "interactive";
}

/** Карточка. */
function Root({ size = "md", variant = "outline", ...rest }: CardRootProps) {
  const styles = useSlotRecipe({ recipe: cardSlotRecipe })({ size, variant });
  return (
    <StylesContext.Provider value={styles}>
      <chakra.div css={styles.root} {...rest} />
    </StylesContext.Provider>
  );
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

export const Card = { Root, Header, Body, Footer, Title, Description };
