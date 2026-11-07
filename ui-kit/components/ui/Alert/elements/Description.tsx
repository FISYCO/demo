import { Alert as BaseAlert } from "@chakra-ui/react";

import type { AlertDescriptionProps } from "../Alert.types";

export function Description({ "data-testid": testId = "Alert__Description", ...props }: AlertDescriptionProps) {
  return <BaseAlert.Description data-testid={testId} {...props} />;
}
