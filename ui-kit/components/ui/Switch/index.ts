import { Switch as BaseSwitch } from "@chakra-ui/react";

import { Control } from "./elements/Control";
import { HiddenInput } from "./elements/HiddenInput";
import { Label } from "./elements/Label";
import { Root } from "./elements/Root";
import { Thumb } from "./elements/Thumb";

export const Switch = {
  Root,
  // Escape hatches
  HiddenInput,
  Control,
  Thumb,
  Label,
  // Non-DOM utilities
  Context: BaseSwitch.Context,
  RootProvider: BaseSwitch.RootProvider,
  PropsProvider: BaseSwitch.PropsProvider,
};

// Public types
export type {
  SwitchControlProps,
  SwitchHiddenInputProps,
  SwitchLabelProps,
  SwitchRootProps,
  SwitchThumbProps,
} from "./Switch.types";
