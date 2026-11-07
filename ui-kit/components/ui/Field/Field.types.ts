import type { ComponentProps } from "react";
import type { Field as BaseField } from "@chakra-ui/react";

import type { UIProps } from "../../../lib/component-types";

export type FieldRootProps = UIProps<ComponentProps<typeof BaseField.Root>>;
export type FieldLabelProps = UIProps<ComponentProps<typeof BaseField.Label>>;
export type FieldHelperTextProps = UIProps<ComponentProps<typeof BaseField.HelperText>>;
export type FieldErrorTextProps = UIProps<ComponentProps<typeof BaseField.ErrorText>>;
export type FieldErrorIconProps = UIProps<ComponentProps<typeof BaseField.ErrorIcon>>;
export type FieldRequiredIndicatorProps = UIProps<ComponentProps<typeof BaseField.RequiredIndicator>>;
