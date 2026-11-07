import { Field as BaseField } from "@chakra-ui/react";

import { ErrorIcon } from "./elements/ErrorIcon";
import { ErrorText } from "./elements/ErrorText";
import { HelperText } from "./elements/HelperText";
import { Label } from "./elements/Label";
import { RequiredIndicator } from "./elements/RequiredIndicator";
import { Root } from "./elements/Root";

export const Field = {
  Root,
  Label,
  HelperText,
  ErrorText,
  ErrorIcon,
  RequiredIndicator,
  PropsProvider: BaseField.PropsProvider,
};

export type {
  FieldErrorIconProps,
  FieldErrorTextProps,
  FieldHelperTextProps,
  FieldLabelProps,
  FieldRequiredIndicatorProps,
  FieldRootProps,
} from "./Field.types";
