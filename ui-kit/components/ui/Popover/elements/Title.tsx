"use client";

import { Popover as BasePopover } from "@chakra-ui/react";

import type { PopoverTitleProps } from "../Popover.types";

/**
 * Заголовок поповера. Содержимое поповера — `role="dialog"`, и имя ему даёт именно Title: Ark
 * связывает их через `aria-labelledby`. Текст в `Header` без Title читалка именем не считает.
 */
export function Title({ "data-testid": testId = "Popover__Title", ...props }: PopoverTitleProps) {
  return <BasePopover.Title data-testid={testId} {...props} />;
}
