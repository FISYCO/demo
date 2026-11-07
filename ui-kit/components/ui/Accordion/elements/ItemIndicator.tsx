"use client";
import { Accordion as BaseAccordion } from "@chakra-ui/react";

import type { AccordionItemIndicatorProps } from "../Accordion.types";

export function ItemIndicator({
  "data-testid": testId = "Accordion__ItemIndicator",
  ...props
}: AccordionItemIndicatorProps) {
  return <BaseAccordion.ItemIndicator data-testid={testId} {...props} />;
}
