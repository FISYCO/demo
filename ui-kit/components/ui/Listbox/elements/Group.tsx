"use client";
import { Listbox as BaseListbox } from "@chakra-ui/react";

import type { ListboxGroupProps } from "../Listbox.types";

export function Group({ "data-testid": testId = "Listbox__Group", label, children, ...props }: ListboxGroupProps) {
  return (
    <BaseListbox.ItemGroup data-testid={testId} {...props}>
      <BaseListbox.ItemGroupLabel data-testid="Listbox__GroupLabel">{label}</BaseListbox.ItemGroupLabel>
      {children}
    </BaseListbox.ItemGroup>
  );
}
