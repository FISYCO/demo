import type { HTMLChakraProps } from "@chakra-ui/react";
import { chakra, useRecipe } from "@chakra-ui/react";

import { textareaRecipe } from "./Textarea.recipe";

export interface TextareaProps extends Omit<HTMLChakraProps<"textarea">, "size" | "variant"> {
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  variant?: "outline" | "subtle" | "flushed";
}

/** Многострочное поле. */
export function Textarea({ size = "md", variant = "outline", ...rest }: TextareaProps) {
  const styles = useRecipe({ recipe: textareaRecipe })({ size, variant });
  return <chakra.textarea css={styles} {...rest} />;
}
