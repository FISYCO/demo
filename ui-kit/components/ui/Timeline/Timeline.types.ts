import type { ReactNode } from "react";
import type { TimelineRootProps as BaseTimelineRootProps } from "@chakra-ui/react";

import type { UIProps } from "../../../lib/component-types";

export interface TimelineRootProps extends Omit<UIProps<BaseTimelineRootProps>, "children"> {
  children?: ReactNode;
}
