import type { HTMLChakraProps, SystemStyleObject } from "@chakra-ui/react";
import { chakra, useSlotRecipe } from "@chakra-ui/react";
import { createContext, useContext } from "react";

import { actionBarSlotRecipe } from "./ActionBar.recipe";

type Slot = "positioner" | "content" | "separator" | "selectionTrigger" | "closeTrigger";
const StylesContext = createContext<Record<Slot, SystemStyleObject> | null>(null);

function useStyles() {
  const styles = useContext(StylesContext);
  if (!styles) throw new Error("ActionBar parts must be inside ActionBar.Root");
  return styles;
}

export interface ActionBarRootProps extends Omit<HTMLChakraProps<"div">, "placement"> {
  placement?: "bottom" | "bottom-start" | "bottom-end";
}

/** Панель действий над выбранным. */
function Root({ placement = "bottom", ...rest }: ActionBarRootProps) {
  const styles = useSlotRecipe({ recipe: actionBarSlotRecipe })({ placement });
  return (
    <StylesContext.Provider value={styles}>
      <chakra.div css={styles.root} {...rest} />
    </StylesContext.Provider>
  );
}

function Positioner(props: HTMLChakraProps<"div">) {
  return <chakra.div css={useStyles().positioner} {...props} />;
}

function Content(props: HTMLChakraProps<"div">) {
  return <chakra.div css={useStyles().content} {...props} />;
}

function Separator(props: HTMLChakraProps<"div">) {
  return <chakra.div css={useStyles().separator} {...props} />;
}

function SelectionTrigger(props: HTMLChakraProps<"button">) {
  return <chakra.button css={useStyles().selectionTrigger} {...props} />;
}

function CloseTrigger(props: HTMLChakraProps<"button">) {
  return <chakra.button css={useStyles().closeTrigger} {...props} />;
}

export const ActionBar = { Root, Positioner, Content, Separator, SelectionTrigger, CloseTrigger };
