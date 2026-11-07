import type { HTMLChakraProps, SystemStyleObject } from "@chakra-ui/react";
import { chakra, useSlotRecipe } from "@chakra-ui/react";
import { createContext, useContext } from "react";

import { statusSlotRecipe } from "./Status.recipe";

type Slot = "root" | "indicator";
const StylesContext = createContext<Record<Slot, SystemStyleObject> | null>(null);

function useStyles() {
  const styles = useContext(StylesContext);
  if (!styles) throw new Error("Status parts must be inside Status.Root");
  return styles;
}

export interface StatusRootProps extends Omit<HTMLChakraProps<"div">, "size" | "colorPalette"> {
  size?: "sm" | "md" | "lg";
  colorPalette?: "gray" | "red" | "pink" | "purple" | "cyan" | "blue" | "teal" | "green" | "yellow" | "orange";
}

/** Статус точкой. */
function Root({ size = "md", colorPalette = "gray", ...rest }: StatusRootProps) {
  const styles = useSlotRecipe({ recipe: statusSlotRecipe })({ size });
  return (
    <StylesContext.Provider value={styles}>
      <chakra.div css={styles.root} colorPalette={colorPalette} {...rest} />
    </StylesContext.Provider>
  );
}

function Indicator(props: HTMLChakraProps<"span">) {
  return <chakra.span css={useStyles().indicator} {...props} />;
}

export const Status = { Root, Indicator };
