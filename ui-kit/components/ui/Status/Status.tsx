import { Status as BaseStatus } from "@chakra-ui/react";

import type { StatusProps } from "./Status.types";

export function Status({ children, "data-testid": testId = "Status", ...props }: StatusProps) {
  return (
    <BaseStatus.Root {...props} data-testid={testId}>
      <BaseStatus.Indicator />
      {children}
    </BaseStatus.Root>
  );
}
