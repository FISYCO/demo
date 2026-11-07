"use client";
import { Accordion as BaseAccordion } from "@chakra-ui/react";

import type { AccordionItemTriggerProps } from "../Accordion.types";

export function ItemTrigger({ "data-testid": testId = "Accordion__ItemTrigger", ...props }: AccordionItemTriggerProps) {
  return <BaseAccordion.ItemTrigger data-testid={testId} {...props} />;
}
