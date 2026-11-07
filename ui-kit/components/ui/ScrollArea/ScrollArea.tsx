import type { ScrollAreaViewportProps as BaseScrollAreaViewportProps } from "@chakra-ui/react";
import { ScrollArea as BaseScrollArea } from "@chakra-ui/react";

import type { ScrollAreaProps } from "./ScrollArea.types";

export function ScrollArea({
  children,
  viewportRef,
  viewportProps,
  contentProps,
  scrollbarProps,
  horizontalScrollbarProps,
  thumbProps,
  horizontalThumbProps,
  cornerProps,
  showHorizontalScrollbar = false,
  showVerticalScrollbar = true,
  "data-testid": testId = "ScrollArea",
  ...rootProps
}: ScrollAreaProps) {
  const shouldShowCorner = showVerticalScrollbar || showHorizontalScrollbar;
  const resolvedViewportProps: BaseScrollAreaViewportProps & { ref?: typeof viewportRef } = {
    tabIndex: -1,
    _focusVisible: { outline: "none" },
    ...viewportProps,
    ref: viewportRef,
  };

  return (
    <BaseScrollArea.Root {...rootProps} data-testid={testId}>
      <BaseScrollArea.Viewport {...resolvedViewportProps} data-testid="ScrollArea__Viewport">
        <BaseScrollArea.Content {...contentProps} data-testid="ScrollArea__Content">
          {children}
        </BaseScrollArea.Content>
      </BaseScrollArea.Viewport>
      {showVerticalScrollbar ? (
        <BaseScrollArea.Scrollbar
          orientation="vertical"
          {...scrollbarProps}
          zIndex="sticky"
          data-testid="ScrollArea__Scrollbar"
        >
          <BaseScrollArea.Thumb {...thumbProps} data-testid="ScrollArea__Thumb" />
        </BaseScrollArea.Scrollbar>
      ) : null}
      {showHorizontalScrollbar ? (
        <BaseScrollArea.Scrollbar
          orientation="horizontal"
          {...horizontalScrollbarProps}
          data-testid="ScrollArea__Scrollbar"
        >
          <BaseScrollArea.Thumb {...horizontalThumbProps} data-testid="ScrollArea__Thumb" />
        </BaseScrollArea.Scrollbar>
      ) : null}
      {shouldShowCorner ? <BaseScrollArea.Corner {...cornerProps} data-testid="ScrollArea__Corner" /> : null}
    </BaseScrollArea.Root>
  );
}
