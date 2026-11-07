"use client";
import { Accordion as BaseAccordion } from "@chakra-ui/react";

import type { AccordionItemBodyProps } from "../Accordion.types";

export function ItemBody({ "data-testid": testId = "Accordion__ItemBody", ...props }: AccordionItemBodyProps) {
  return <BaseAccordion.ItemBody data-testid={testId} {...props} />;
}
