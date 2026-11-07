import { Alert as BaseAlert } from "@chakra-ui/react";

import type { AlertIndicatorProps } from "../Alert.types";

export function Indicator({ "data-testid": testId = "Alert__Indicator", ...props }: AlertIndicatorProps) {
  return <BaseAlert.Indicator data-testid={testId} {...props} />;
}
