import type { HTMLChakraProps } from "@chakra-ui/react";
import { chakra, useRecipe } from "@chakra-ui/react";

import { skeletonRecipe } from "./Skeleton.recipe";

export interface SkeletonProps extends Omit<HTMLChakraProps<"div">, "loading" | "variant"> {
  loading?: boolean;
  variant?: "pulse" | "shine" | "none";
}

/** Заглушка загрузки. */
export function Skeleton({ loading = true, variant = "pulse", ...rest }: SkeletonProps) {
  const styles = useRecipe({ recipe: skeletonRecipe })({ loading, variant });
  return <chakra.div css={styles} {...rest} />;
}
