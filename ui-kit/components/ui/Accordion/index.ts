import { Accordion as BaseAccordion } from "@chakra-ui/react";

import { Item } from "./elements/Item";
import { ItemBody } from "./elements/ItemBody";
import { ItemContent } from "./elements/ItemContent";
import { ItemIndicator } from "./elements/ItemIndicator";
import { ItemTrigger } from "./elements/ItemTrigger";
import { Root } from "./elements/Root";

export const Accordion = {
  Root,
  Item,
  // Escape hatches
  ItemTrigger,
  ItemIndicator,
  ItemContent,
  ItemBody,
  // Non-DOM utilities
  Context: BaseAccordion.Context,
  ItemContext: BaseAccordion.ItemContext,
  RootProvider: BaseAccordion.RootProvider,
  PropsProvider: BaseAccordion.PropsProvider,
};

// Public types
export type {
  AccordionItemBodyProps,
  AccordionItemContentProps,
  AccordionItemIndicatorProps,
  AccordionItemProps,
  AccordionItemTriggerProps,
  AccordionRootProps,
} from "./Accordion.types";
