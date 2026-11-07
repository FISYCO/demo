import { Item } from "./elements/Item";
import { Root } from "./elements/Root";

/**
 * Список, в котором ничто не появляется из ниоткуда (#1761).
 *
 * ```tsx
 * const items = useMotionData(data?.items ?? []);
 * <AnimatedList.Root>
 *   <SimpleGrid>{items.map((item) => <AnimatedList.Item key={item.id} id={item.id}><Card … /></AnimatedList.Item>)}</SimpleGrid>
 * </AnimatedList.Root>
 * ```
 */
export const AnimatedList = { Root, Item };
export type { AnimatedListItemProps, AnimatedListRootProps } from "./AnimatedList.types";
