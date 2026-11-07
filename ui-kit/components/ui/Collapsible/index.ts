import { Collapsible as BaseCollapsible } from "@chakra-ui/react";

/**
 * Раскрывающийся блок (#1761). Прямые re-exports Chakra: обёртке добавить нечего, движение задаёт рецепт темы.
 *
 * ```tsx
 * <Collapsible.Root open={open} onOpenChange={(details) => setOpen(details.open)}>
 *   <Collapsible.Trigger asChild>
 *     <Button variant="ghost"><DisclosureIcon open={open} />Подробности</Button>
 *   </Collapsible.Trigger>
 *   <Collapsible.Content>…</Collapsible.Content>
 * </Collapsible.Root>
 * ```
 */
export const Collapsible = {
  Root: BaseCollapsible.Root,
  Trigger: BaseCollapsible.Trigger,
  Content: BaseCollapsible.Content,
  Context: BaseCollapsible.Context,
  RootProvider: BaseCollapsible.RootProvider,
};

export type {
  CollapsibleContentProps,
  CollapsibleRootProps,
  CollapsibleTriggerProps,
} from "@chakra-ui/react";
