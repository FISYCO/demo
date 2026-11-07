import { Checkbox as BaseCheckbox } from "@chakra-ui/react";

import { Control } from "./elements/Control";
import { Group } from "./elements/Group";
import { HiddenInput } from "./elements/HiddenInput";
import { Indicator } from "./elements/Indicator";
import { Label } from "./elements/Label";
import { Root } from "./elements/Root";

export const Checkbox = {
  Root,
  Group,
  // Escape hatches
  HiddenInput,
  Control,
  Indicator,
  Label,
  // Non-DOM utilities
  Context: BaseCheckbox.Context,
  RootProvider: BaseCheckbox.RootProvider,
  PropsProvider: BaseCheckbox.PropsProvider,
};

// Public types
export type {
  CheckboxControlProps,
  CheckboxGroupProps,
  CheckboxHiddenInputProps,
  CheckboxIndicatorProps,
  CheckboxLabelProps,
  CheckboxRootProps,
} from "./Checkbox.types";
