import { Badge as BaseBadge } from "@chakra-ui/react";

import type { BadgeProps } from "./Badge.types";

export function Badge({ truncate, "data-testid": testId = "Badge", ...props }: BadgeProps) {
  return <BaseBadge truncate={truncate || undefined} {...props} data-testid={testId} />;
}
