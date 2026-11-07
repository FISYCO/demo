import type { ReactNode, Ref } from "react";
import type {
  ScrollAreaContentProps as BaseScrollAreaContentProps,
  ScrollAreaCornerProps as BaseScrollAreaCornerProps,
  ScrollAreaRootProps as BaseScrollAreaRootProps,
  ScrollAreaScrollbarProps as BaseScrollAreaScrollbarProps,
  ScrollAreaThumbProps as BaseScrollAreaThumbProps,
  ScrollAreaViewportProps as BaseScrollAreaViewportProps,
} from "@chakra-ui/react";

import type { UIProps } from "../../../lib/component-types";

export type ScrollAreaProps = Omit<UIProps<BaseScrollAreaRootProps>, "children"> & {
  children: ReactNode;
  viewportRef?: Ref<HTMLDivElement>;
  viewportProps?: BaseScrollAreaViewportProps;
  contentProps?: BaseScrollAreaContentProps;
  scrollbarProps?: BaseScrollAreaScrollbarProps;
  horizontalScrollbarProps?: BaseScrollAreaScrollbarProps;
  thumbProps?: BaseScrollAreaThumbProps;
  horizontalThumbProps?: BaseScrollAreaThumbProps;
  cornerProps?: BaseScrollAreaCornerProps;
  showHorizontalScrollbar?: boolean;
  showVerticalScrollbar?: boolean;
};
