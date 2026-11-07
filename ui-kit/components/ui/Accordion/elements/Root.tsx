"use client";
import { Accordion as BaseAccordion } from "@chakra-ui/react";

import type { AccordionRootProps } from "../Accordion.types";

export function Root({ "data-testid": testId = "Accordion", ...props }: AccordionRootProps) {
  return <BaseAccordion.Root data-testid={testId} {...props} />;
}
