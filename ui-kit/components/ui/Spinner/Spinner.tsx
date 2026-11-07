import { Spinner as BaseSpinner } from "@chakra-ui/react";

import type { SpinnerProps } from "./Spinner.types";

export function Spinner({ colorPalette = "brand", color, "data-testid": testId = "Spinner", ...props }: SpinnerProps) {
  // Chakra рисует кружок простым span, а `aria-label` на элементе без роли запрещён: читалки его
  // игнорируют. Подписанный кружок объявляется статусом — ровно тем, чем он и является.
  const role = props["aria-label"] && !props.role ? "status" : props.role;

  return <BaseSpinner colorPalette={colorPalette} color={color} {...props} role={role} data-testid={testId} />;
}
