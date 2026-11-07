import type { HTMLChakraProps } from "@chakra-ui/react";
import { chakra, useRecipe } from "@chakra-ui/react";

import { colorSwatchRecipe } from "./ColorSwatch.recipe";

export interface ColorSwatchProps extends Omit<HTMLChakraProps<"span">, "size" | "shape"> {
  size?: "2xs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "inherit" | "full";
  shape?: "square" | "circle" | "rounded";
}

/** Образец цвета. */
export function ColorSwatch({ size = "md", shape = "rounded", ...rest }: ColorSwatchProps) {
  const styles = useRecipe({ recipe: colorSwatchRecipe })({ size, shape });
  return <chakra.span css={styles} {...rest} />;
}
