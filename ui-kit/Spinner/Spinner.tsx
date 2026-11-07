import type { HTMLChakraProps } from "@chakra-ui/react";
import { chakra, useRecipe } from "@chakra-ui/react";

import { spinnerRecipe } from "./Spinner.recipe";

export interface SpinnerProps extends Omit<HTMLChakraProps<"span">, "size" | "colorPalette"> {
  size?: "inherit" | "xs" | "sm" | "md" | "lg" | "xl";
  colorPalette?: "gray" | "red" | "pink" | "purple" | "cyan" | "blue" | "teal" | "green" | "yellow" | "orange";
}

/** Индикатор ожидания. */
export function Spinner({ size = "md", colorPalette = "gray", ...rest }: SpinnerProps) {
  const styles = useRecipe({ recipe: spinnerRecipe })({ size });
  return <chakra.span css={styles} colorPalette={colorPalette} {...rest} />;
}
