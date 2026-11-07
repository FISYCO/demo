"use client";
import type { CardRootProps as BaseCardRootProps } from "@chakra-ui/react";
import { Card as BaseCard } from "@chakra-ui/react";

import type { CardRootProps } from "../Card.types";

export function Root({ variant, "data-testid": testId = "Card", isWide, ...props }: CardRootProps) {
  return (
    <BaseCard.Root
      width={isWide ? "full" : undefined}
      variant={variant as BaseCardRootProps["variant"]}
      data-testid={testId}
      {...props}
    />
  );
}
