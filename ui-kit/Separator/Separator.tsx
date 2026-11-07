import type { HTMLChakraProps } from "@chakra-ui/react";
import { chakra, useRecipe } from "@chakra-ui/react";

import { separatorRecipe } from "./Separator.recipe";

export interface SeparatorProps extends Omit<HTMLChakraProps<"hr">, "variant" | "orientation" | "size"> {
  variant?: "solid" | "dashed";
  orientation?: "vertical" | "horizontal";
  size?: "xs" | "sm" | "md" | "lg";
}

/** Разделитель блоков. */
export function Separator({ variant = "solid", orientation = "horizontal", size = "sm", ...rest }: SeparatorProps) {
  const styles = useRecipe({ recipe: separatorRecipe })({ variant, orientation, size });
  return <chakra.hr css={styles} {...rest} />;
}
