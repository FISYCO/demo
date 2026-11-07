import { Timeline as BaseTimeline } from "@chakra-ui/react";

import { Root } from "./elements/Root";

export const Timeline = {
  Root,
  Item: BaseTimeline.Item,
  Content: BaseTimeline.Content,
  Connector: BaseTimeline.Connector,
  Separator: BaseTimeline.Separator,
  Indicator: BaseTimeline.Indicator,
  Title: BaseTimeline.Title,
  Description: BaseTimeline.Description,
};

export type { TimelineRootProps } from "./Timeline.types";
