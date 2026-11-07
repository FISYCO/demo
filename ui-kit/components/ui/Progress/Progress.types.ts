import type { ComponentProps } from "react";
import type { Progress as BaseProgress } from "@chakra-ui/react";

import type { UIProps } from "../../../lib/component-types";

export type ProgressRootProps = UIProps<ComponentProps<typeof BaseProgress.Root>>;
export type ProgressLabelProps = UIProps<ComponentProps<typeof BaseProgress.Label>>;
export type ProgressTrackProps = UIProps<ComponentProps<typeof BaseProgress.Track>>;
export type ProgressRangeProps = UIProps<ComponentProps<typeof BaseProgress.Range>>;
export type ProgressValueTextProps = UIProps<ComponentProps<typeof BaseProgress.ValueText>>;
