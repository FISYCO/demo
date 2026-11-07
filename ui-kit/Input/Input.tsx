import type { HTMLChakraProps } from "@chakra-ui/react";
import { chakra, useRecipe } from "@chakra-ui/react";

import { inputRecipe } from "./Input.recipe";

export interface InputProps extends Omit<HTMLChakraProps<"input">, "size" | "variant"> {
  size?: "2xs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
  variant?: "outline" | "subtle" | "flushed";
}

/** Поле ввода. */
export function Input({ size = "md", variant = "outline", ...rest }: InputProps) {
  const styles = useRecipe({ recipe: inputRecipe })({ size, variant });
  return <chakra.input css={styles} {...rest} />;
}
