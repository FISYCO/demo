import type { HTMLChakraProps } from "@chakra-ui/react";
import { chakra, useRecipe } from "@chakra-ui/react";

import { badgeRecipe } from "./Badge.recipe";

export interface BadgeProps extends Omit<HTMLChakraProps<"span">, "variant" | "size" | "colorPalette"> {
  variant?: "solid" | "subtle" | "outline" | "surface" | "plain";
  size?: "xs" | "sm" | "md" | "lg";
  colorPalette?: "gray" | "red" | "pink" | "purple" | "cyan" | "blue" | "teal" | "green" | "yellow" | "orange";
}

/** Метка статуса или категории. */
export function Badge({ variant = "subtle", size = "sm", colorPalette = "gray", ...rest }: BadgeProps) {
  const styles = useRecipe({ recipe: badgeRecipe })({ variant, size });
  return <chakra.span css={styles} colorPalette={colorPalette} {...rest} />;
}
