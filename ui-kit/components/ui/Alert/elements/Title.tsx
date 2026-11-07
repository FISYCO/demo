import { Alert as BaseAlert } from "@chakra-ui/react";

import type { AlertTitleProps } from "../Alert.types";

export function Title({ "data-testid": testId = "Alert__Title", ...props }: AlertTitleProps) {
  return <BaseAlert.Title data-testid={testId} {...props} />;
}
