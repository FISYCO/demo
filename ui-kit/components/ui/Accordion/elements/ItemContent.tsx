"use client";
import { Accordion as BaseAccordion } from "@chakra-ui/react";

import type { AccordionItemContentProps } from "../Accordion.types";

export function ItemContent({ "data-testid": testId = "Accordion__ItemContent", ...props }: AccordionItemContentProps) {
  return <BaseAccordion.ItemContent data-testid={testId} {...props} />;
}
