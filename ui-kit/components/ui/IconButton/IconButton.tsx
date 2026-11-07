import { forwardRef } from "react";
import { IconButton as BaseIconButton } from "@chakra-ui/react";

import type { IconButtonProps } from "./IconButton.types";

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ colorPalette = "brand", "data-testid": testId = "IconButton", ...props }, ref) => (
    <BaseIconButton ref={ref} colorPalette={colorPalette} {...props} data-testid={testId} />
  ),
);
IconButton.displayName = "IconButton";
