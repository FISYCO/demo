"use client";
import { Listbox as BaseListbox, Box } from "@chakra-ui/react";

import { ScrollArea } from "../../ScrollArea";
import type { ListboxContentProps } from "../Listbox.types";

export function Content({ "data-testid": testId = "Listbox__Content", children, ...props }: ListboxContentProps) {
  return (
    <Box flex="1" minH="0" overflow="hidden">
      <ScrollArea data-testid="Listbox__ScrollArea">
        <BaseListbox.Content data-testid={testId} {...props}>
          {children}
        </BaseListbox.Content>
      </ScrollArea>
    </Box>
  );
}
