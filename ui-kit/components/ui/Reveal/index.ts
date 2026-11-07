import { Root } from "./elements/Root";
import { Slot } from "./elements/Slot";

/**
 * Скелетон уступает место контенту, а не пропадает (#1761).
 *
 * ```tsx
 * <Reveal.Root loading={isPending} skeleton={<StatsSkeleton />}>
 *   <Stats data={data} />
 * </Reveal.Root>
 * ```
 */
export const Reveal = { Root, Slot };
export type { RevealRootProps, RevealSlotProps } from "./Reveal.types";
