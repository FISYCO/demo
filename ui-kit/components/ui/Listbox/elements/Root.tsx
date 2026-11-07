"use client";
import { Listbox as BaseListbox } from "@chakra-ui/react";

import type { ListboxRootProps } from "../Listbox.types";

export function Root<T>({ "data-testid": testId = "Listbox", colorPalette = "brand", ...props }: ListboxRootProps<T>) {
  return <BaseListbox.Root data-testid={testId} colorPalette={colorPalette} {...props} />;
}
