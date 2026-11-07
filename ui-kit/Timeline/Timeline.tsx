import type { HTMLChakraProps, SystemStyleObject } from "@chakra-ui/react";
import { chakra, useSlotRecipe } from "@chakra-ui/react";
import { createContext, useContext } from "react";

import { timelineSlotRecipe } from "./Timeline.recipe";

type Slot = "root" | "item" | "content" | "separator" | "indicator" | "connector" | "title" | "description";
const StylesContext = createContext<Record<Slot, SystemStyleObject> | null>(null);

function useStyles() {
  const styles = useContext(StylesContext);
  if (!styles) throw new Error("Timeline parts must be inside Timeline.Root");
  return styles;
}

export interface TimelineRootProps extends Omit<HTMLChakraProps<"div">, "variant" | "showLastSeparator" | "size"> {
  variant?: "subtle" | "solid" | "outline" | "plain";
  showLastSeparator?: boolean;
  size?: "sm" | "md" | "lg" | "xl";
}

/** Лента событий. */
function Root({ variant = "solid", showLastSeparator = false, size = "md", ...rest }: TimelineRootProps) {
  const styles = useSlotRecipe({ recipe: timelineSlotRecipe })({ variant, showLastSeparator, size });
  return (
    <StylesContext.Provider value={styles}>
      <chakra.div css={styles.root} {...rest} />
    </StylesContext.Provider>
  );
}

function Item(props: HTMLChakraProps<"div">) {
  return <chakra.div css={useStyles().item} {...props} />;
}

function Content(props: HTMLChakraProps<"div">) {
  return <chakra.div css={useStyles().content} {...props} />;
}

function Separator(props: HTMLChakraProps<"div">) {
  return <chakra.div css={useStyles().separator} {...props} />;
}

function Indicator(props: HTMLChakraProps<"span">) {
  return <chakra.span css={useStyles().indicator} {...props} />;
}

function Connector(props: HTMLChakraProps<"div">) {
  return <chakra.div css={useStyles().connector} {...props} />;
}

function Title(props: HTMLChakraProps<"h3">) {
  return <chakra.h3 css={useStyles().title} {...props} />;
}

function Description(props: HTMLChakraProps<"p">) {
  return <chakra.p css={useStyles().description} {...props} />;
}

export const Timeline = { Root, Item, Content, Separator, Indicator, Connector, Title, Description };
