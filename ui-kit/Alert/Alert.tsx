import type { HTMLChakraProps, SystemStyleObject } from "@chakra-ui/react";
import { chakra, useSlotRecipe } from "@chakra-ui/react";
import { createContext, useContext } from "react";

import { alertSlotRecipe } from "./Alert.recipe";

type Slot = "root" | "indicator" | "content" | "title" | "description";
const StylesContext = createContext<Record<Slot, SystemStyleObject> | null>(null);

function useStyles() {
  const styles = useContext(StylesContext);
  if (!styles) throw new Error("Alert parts must be inside Alert.Root");
  return styles;
}

export interface AlertRootProps extends Omit<HTMLChakraProps<"div">, "status" | "inline" | "variant" | "size"> {
  status?: "info" | "warning" | "success" | "error" | "neutral";
  inline?: boolean;
  variant?: "subtle" | "surface" | "outline" | "solid";
  size?: "sm" | "md" | "lg";
}

/** Сообщение о состоянии. */
function Root({ status = "info", inline = false, variant = "subtle", size = "md", ...rest }: AlertRootProps) {
  const styles = useSlotRecipe({ recipe: alertSlotRecipe })({ status, inline, variant, size });
  return (
    <StylesContext.Provider value={styles}>
      <chakra.div css={styles.root} {...rest} />
    </StylesContext.Provider>
  );
}

function Indicator(props: HTMLChakraProps<"span">) {
  return <chakra.span css={useStyles().indicator} {...props} />;
}

function Content(props: HTMLChakraProps<"div">) {
  return <chakra.div css={useStyles().content} {...props} />;
}

function Title(props: HTMLChakraProps<"h3">) {
  return <chakra.h3 css={useStyles().title} {...props} />;
}

function Description(props: HTMLChakraProps<"p">) {
  return <chakra.p css={useStyles().description} {...props} />;
}

export const Alert = { Root, Indicator, Content, Title, Description };
