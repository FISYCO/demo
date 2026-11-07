import { Progress as BaseProgress } from "@chakra-ui/react";

import { Label } from "./elements/Label";
import { Range } from "./elements/Range";
import { Root } from "./elements/Root";
import { Track } from "./elements/Track";
import { ValueText } from "./elements/ValueText";

export const Progress = {
  Root,
  Label,
  Track,
  Range,
  ValueText,
  Context: BaseProgress.Context,
  RootProvider: BaseProgress.RootProvider,
  PropsProvider: BaseProgress.PropsProvider,
};

export type {
  ProgressLabelProps,
  ProgressRangeProps,
  ProgressRootProps,
  ProgressTrackProps,
  ProgressValueTextProps,
} from "./Progress.types";
