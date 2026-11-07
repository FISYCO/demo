import { Alert as BaseAlert } from "@chakra-ui/react";

import type { AlertContentProps } from "../Alert.types";

export function Content({ "data-testid": testId = "Alert__Content", ...props }: AlertContentProps) {
  return <BaseAlert.Content data-testid={testId} {...props} />;
}
