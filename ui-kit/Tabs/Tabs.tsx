import type { HTMLChakraProps, SystemStyleObject } from "@chakra-ui/react";
import { chakra, useSlotRecipe } from "@chakra-ui/react";
import { createContext, useContext } from "react";

import { tabsSlotRecipe } from "./Tabs.recipe";

type Slot = "root" | "list" | "trigger" | "content" | "contentGroup" | "indicator";
const StylesContext = createContext<Record<Slot, SystemStyleObject> | null>(null);

function useStyles() {
  const styles = useContext(StylesContext);
  if (!styles) throw new Error("Tabs parts must be inside Tabs.Root");
  return styles;
}

export interface TabsRootProps extends Omit<HTMLChakraProps<"div">, "fitted" | "justify" | "size" | "variant"> {
  fitted?: boolean;
  justify?: "start" | "center" | "end";
  size?: "sm" | "md" | "lg";
  variant?: "line" | "subtle" | "enclosed" | "outline" | "plain";
}

/** Вкладки. */
function Root({ fitted, justify, size = "md", variant = "line", ...rest }: TabsRootProps) {
  const styles = useSlotRecipe({ recipe: tabsSlotRecipe })({ fitted, justify, size, variant });
  return (
    <StylesContext.Provider value={styles}>
      <chakra.div css={styles.root} {...rest} />
    </StylesContext.Provider>
  );
}

function List(props: HTMLChakraProps<"div">) {
  return <chakra.div css={useStyles().list} {...props} />;
}

function Trigger(props: HTMLChakraProps<"button">) {
  return <chakra.button css={useStyles().trigger} {...props} />;
}

function Content(props: HTMLChakraProps<"div">) {
  return <chakra.div css={useStyles().content} {...props} />;
}

function ContentGroup(props: HTMLChakraProps<"div">) {
  return <chakra.div css={useStyles().contentGroup} {...props} />;
}

function Indicator(props: HTMLChakraProps<"span">) {
  return <chakra.span css={useStyles().indicator} {...props} />;
}

export const Tabs = { Root, List, Trigger, Content, ContentGroup, Indicator };
