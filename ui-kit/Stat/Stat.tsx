import type { HTMLChakraProps, SystemStyleObject } from "@chakra-ui/react";
import { chakra, useSlotRecipe } from "@chakra-ui/react";
import { createContext, useContext } from "react";

import { statSlotRecipe } from "./Stat.recipe";

type Slot = "root" | "label" | "helpText" | "valueText" | "valueUnit" | "indicator";
const StylesContext = createContext<Record<Slot, SystemStyleObject> | null>(null);

function useStyles() {
  const styles = useContext(StylesContext);
  if (!styles) throw new Error("Stat parts must be inside Stat.Root");
  return styles;
}

export interface StatRootProps extends Omit<HTMLChakraProps<"div">, "size"> {
  size?: "sm" | "md" | "lg";
}

/** Показатель с подписью. */
function Root({ size = "md", ...rest }: StatRootProps) {
  const styles = useSlotRecipe({ recipe: statSlotRecipe })({ size });
  return (
    <StylesContext.Provider value={styles}>
      <chakra.div css={styles.root} {...rest} />
    </StylesContext.Provider>
  );
}

function Label(props: HTMLChakraProps<"span">) {
  return <chakra.span css={useStyles().label} {...props} />;
}

function HelpText(props: HTMLChakraProps<"p">) {
  return <chakra.p css={useStyles().helpText} {...props} />;
}

function ValueText(props: HTMLChakraProps<"span">) {
  return <chakra.span css={useStyles().valueText} {...props} />;
}

function ValueUnit(props: HTMLChakraProps<"div">) {
  return <chakra.div css={useStyles().valueUnit} {...props} />;
}

function Indicator(props: HTMLChakraProps<"span">) {
  return <chakra.span css={useStyles().indicator} {...props} />;
}

export const Stat = { Root, Label, HelpText, ValueText, ValueUnit, Indicator };
