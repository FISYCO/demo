import type { HTMLChakraProps, SystemStyleObject } from "@chakra-ui/react";
import { chakra, useSlotRecipe } from "@chakra-ui/react";
import { createContext, useContext } from "react";

import { avatarSlotRecipe } from "./Avatar.recipe";

type Slot = "root" | "image" | "fallback";
const StylesContext = createContext<Record<Slot, SystemStyleObject> | null>(null);

function useStyles() {
  const styles = useContext(StylesContext);
  if (!styles) throw new Error("Avatar parts must be inside Avatar.Root");
  return styles;
}

export interface AvatarRootProps extends Omit<HTMLChakraProps<"div">, "size" | "variant" | "shape" | "borderless" | "colorPalette"> {
  size?: "full" | "2xs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
  variant?: "solid" | "subtle" | "outline";
  shape?: "square" | "rounded" | "full";
  borderless?: boolean;
  colorPalette?: "gray" | "red" | "pink" | "purple" | "cyan" | "blue" | "teal" | "green" | "yellow" | "orange";
}

/** Аватар человека или компании. */
function Root({ size = "md", variant = "subtle", shape = "full", borderless, colorPalette = "gray", ...rest }: AvatarRootProps) {
  const styles = useSlotRecipe({ recipe: avatarSlotRecipe })({ size, variant, shape, borderless });
  return (
    <StylesContext.Provider value={styles}>
      <chakra.div css={styles.root} colorPalette={colorPalette} {...rest} />
    </StylesContext.Provider>
  );
}

function Image(props: HTMLChakraProps<"div">) {
  return <chakra.div css={useStyles().image} {...props} />;
}

function Fallback(props: HTMLChakraProps<"div">) {
  return <chakra.div css={useStyles().fallback} {...props} />;
}

export const Avatar = { Root, Image, Fallback };
