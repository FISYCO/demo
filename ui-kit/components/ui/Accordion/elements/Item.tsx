"use client";
import { Accordion as BaseAccordion } from "@chakra-ui/react";

import type { AccordionItemProps } from "../Accordion.types";

export function Item({
  "data-testid": testId = "Accordion__Item",
  trigger,
  indicatorProps,
  children,
  ...props
}: AccordionItemProps) {
  return (
    <BaseAccordion.Item data-testid={testId} {...props}>
      {trigger != null ? (
        <>
          <BaseAccordion.ItemTrigger data-testid="Accordion__ItemTrigger">
            {trigger}
            <BaseAccordion.ItemIndicator data-testid="Accordion__ItemIndicator" {...indicatorProps} />
          </BaseAccordion.ItemTrigger>
          <BaseAccordion.ItemContent data-testid="Accordion__ItemContent">
            <BaseAccordion.ItemBody data-testid="Accordion__ItemBody">{children}</BaseAccordion.ItemBody>
          </BaseAccordion.ItemContent>
        </>
      ) : (
        children
      )}
    </BaseAccordion.Item>
  );
}
