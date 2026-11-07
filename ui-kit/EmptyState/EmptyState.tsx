import type { HTMLChakraProps, SystemStyleObject } from "@chakra-ui/react";
import { chakra, useSlotRecipe } from "@chakra-ui/react";
import { createContext, useContext } from "react";

import { emptyStateSlotRecipe } from "./EmptyState.recipe";

type Slot = "root" | "content" | "indicator" | "title" | "description";
const StylesContext = createContext<Record<Slot, SystemStyleObject> | null>(null);

function useStyles() {
  const styles = useContext(StylesContext);
  if (!styles) throw new Error("EmptyState parts must be inside EmptyState.Root");
  return styles;
}

export interface EmptyStateRootProps extends Omit<HTMLChakraProps<"div">, "size"> {
  size?: "sm" | "md" | "lg";
}

/** Пустое состояние с действием. */
function Root({ size = "md", ...rest }: EmptyStateRootProps) {
  const styles = useSlotRecipe({ recipe: emptyStateSlotRecipe })({ size });
  return (
    <StylesContext.Provider value={styles}>
      <chakra.div css={styles.root} {...rest} />
    </StylesContext.Provider>
  );
}

function Content(props: HTMLChakraProps<"div">) {
  return <chakra.div css={useStyles().content} {...props} />;
}

function Indicator(props: HTMLChakraProps<"span">) {
  return <chakra.span css={useStyles().indicator} {...props} />;
}

function Title(props: HTMLChakraProps<"h3">) {
  return <chakra.h3 css={useStyles().title} {...props} />;
}

function Description(props: HTMLChakraProps<"p">) {
  return <chakra.p css={useStyles().description} {...props} />;
}

export const EmptyState = { Root, Content, Indicator, Title, Description };
