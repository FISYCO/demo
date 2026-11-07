import { EmptyState as BaseEmptyState, Stack, VStack } from "@chakra-ui/react";

import type { EmptyStateProps } from "./EmptyState.types";

export function EmptyState({
  title,
  description,
  image,
  actions,
  size = "md",
  colorPalette,
  "data-testid": testId = "EmptyState",
}: EmptyStateProps) {
  return (
    <BaseEmptyState.Root size={size} colorPalette={colorPalette} data-testid={testId}>
      <BaseEmptyState.Content data-testid="EmptyState__Content">
        {image ? (
          <BaseEmptyState.Indicator color="fg.muted" fontSize="2xl" data-testid="EmptyState__Indicator">
            {image}
          </BaseEmptyState.Indicator>
        ) : null}
        <VStack alignItems="center">
          <BaseEmptyState.Title data-testid="EmptyState__Title">{title}</BaseEmptyState.Title>
          {description ? (
            <BaseEmptyState.Description data-testid="EmptyState__Description">{description}</BaseEmptyState.Description>
          ) : null}
        </VStack>
        {actions ? (
          <Stack gap="2" alignItems="center">
            {actions}
          </Stack>
        ) : null}
      </BaseEmptyState.Content>
    </BaseEmptyState.Root>
  );
}
