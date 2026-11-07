import type { HTMLChakraProps, SystemStyleObject } from "@chakra-ui/react";
import { chakra, useSlotRecipe } from "@chakra-ui/react";
import { createContext, useContext } from "react";

import { tooltipSlotRecipe } from "./Tooltip.recipe";

type Slot = "trigger" | "arrow" | "arrowTip" | "positioner" | "content";
const StylesContext = createContext<Record<Slot, SystemStyleObject> | null>(null);

function useStyles() {
  const styles = useContext(StylesContext);
  if (!styles) throw new Error("Tooltip parts must be inside Tooltip.Root");
  return styles;
}

export interface TooltipRootProps extends Omit<HTMLChakraProps<"div">, "css"> {

}

/** Подсказка. */
function Root({ ...rest }: TooltipRootProps) {
  const styles = useSlotRecipe({ recipe: tooltipSlotRecipe })({  });
  return (
    <StylesContext.Provider value={styles}>
      <chakra.div css={styles.root} {...rest} />
    </StylesContext.Provider>
  );
}

function Trigger(props: HTMLChakraProps<"button">) {
  return <chakra.button css={useStyles().trigger} {...props} />;
}

function Arrow(props: HTMLChakraProps<"div">) {
  return <chakra.div css={useStyles().arrow} {...props} />;
}

function ArrowTip(props: HTMLChakraProps<"div">) {
  return <chakra.div css={useStyles().arrowTip} {...props} />;
}

function Positioner(props: HTMLChakraProps<"div">) {
  return <chakra.div css={useStyles().positioner} {...props} />;
}

function Content(props: HTMLChakraProps<"div">) {
  return <chakra.div css={useStyles().content} {...props} />;
}

export const Tooltip = { Root, Trigger, Arrow, ArrowTip, Positioner, Content };
