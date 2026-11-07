import type { HTMLChakraProps, SystemStyleObject } from "@chakra-ui/react";
import { chakra, useSlotRecipe } from "@chakra-ui/react";
import { createContext, useContext } from "react";

import { toastSlotRecipe } from "./Toast.recipe";

type Slot = "root" | "title" | "description" | "indicator" | "actionTrigger" | "closeTrigger";
const StylesContext = createContext<Record<Slot, SystemStyleObject> | null>(null);

function useStyles() {
  const styles = useContext(StylesContext);
  if (!styles) throw new Error("Toast parts must be inside Toast.Root");
  return styles;
}

export interface ToastRootProps extends Omit<HTMLChakraProps<"div">, "css"> {

}

/** Уведомление. */
function Root({ ...rest }: ToastRootProps) {
  const styles = useSlotRecipe({ recipe: toastSlotRecipe })({  });
  return (
    <StylesContext.Provider value={styles}>
      <chakra.div css={styles.root} {...rest} />
    </StylesContext.Provider>
  );
}

function Title(props: HTMLChakraProps<"h3">) {
  return <chakra.h3 css={useStyles().title} {...props} />;
}

function Description(props: HTMLChakraProps<"p">) {
  return <chakra.p css={useStyles().description} {...props} />;
}

function Indicator(props: HTMLChakraProps<"span">) {
  return <chakra.span css={useStyles().indicator} {...props} />;
}

function ActionTrigger(props: HTMLChakraProps<"button">) {
  return <chakra.button css={useStyles().actionTrigger} {...props} />;
}

function CloseTrigger(props: HTMLChakraProps<"button">) {
  return <chakra.button css={useStyles().closeTrigger} {...props} />;
}

export const Toast = { Root, Title, Description, Indicator, ActionTrigger, CloseTrigger };
