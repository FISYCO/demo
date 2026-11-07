import type { ReactNode } from "react";
import type {
  AccordionItemBodyProps as BaseAccordionItemBodyProps,
  AccordionItemContentProps as BaseAccordionItemContentProps,
  AccordionItemIndicatorProps as BaseAccordionItemIndicatorProps,
  AccordionItemProps as BaseAccordionItemProps,
  AccordionItemTriggerProps as BaseAccordionItemTriggerProps,
  AccordionRootProps as BaseAccordionRootProps,
} from "@chakra-ui/react";

import type { UIProps } from "../../../lib/component-types";

export type AccordionRootProps = UIProps<BaseAccordionRootProps>;

export interface AccordionItemProps extends Omit<UIProps<BaseAccordionItemProps>, "children"> {
  trigger?: ReactNode;
  indicatorProps?: UIProps<BaseAccordionItemIndicatorProps>;
  children?: ReactNode;
}

export type AccordionItemTriggerProps = UIProps<BaseAccordionItemTriggerProps>;
export type AccordionItemIndicatorProps = UIProps<BaseAccordionItemIndicatorProps>;
export type AccordionItemContentProps = UIProps<BaseAccordionItemContentProps>;
export type AccordionItemBodyProps = UIProps<BaseAccordionItemBodyProps>;
