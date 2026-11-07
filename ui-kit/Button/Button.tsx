import type { HTMLChakraProps } from "@chakra-ui/react";
import { chakra, useRecipe } from "@chakra-ui/react";

import { buttonRecipe } from "./Button.recipe";

export interface ButtonProps extends Omit<HTMLChakraProps<"button">, "size" | "variant" | "colorPalette"> {
  size?: "2xs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
  variant?: "solid" | "subtle" | "surface" | "outline" | "ghost" | "plain";
  colorPalette?: "gray" | "red" | "pink" | "purple" | "cyan" | "blue" | "teal" | "green" | "yellow" | "orange";
}

/** Кнопка действия. */
export function Button({ size = "md", variant = "solid", colorPalette = "gray", ...rest }: ButtonProps) {
  const styles = useRecipe({ recipe: buttonRecipe })({ size, variant });
  return <chakra.button css={styles} colorPalette={colorPalette} {...rest} />;
}
