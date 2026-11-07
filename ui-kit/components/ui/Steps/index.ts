"use client";
import { Steps as BaseSteps } from "@chakra-ui/react";

import { CompletedContent } from "./elements/CompletedContent";
import { Content } from "./elements/Content";
import { Description } from "./elements/Description";
import { Indicator } from "./elements/Indicator";
import { Item } from "./elements/Item";
import { List } from "./elements/List";
import { NextTrigger } from "./elements/NextTrigger";
import { StepNumber } from "./elements/Number";
import { PrevTrigger } from "./elements/PrevTrigger";
import { Root } from "./elements/Root";
import { Separator } from "./elements/Separator";
import { Status } from "./elements/Status";
import { Title } from "./elements/Title";
import { Trigger } from "./elements/Trigger";

export const Steps = {
  Root,
  List,
  Item,
  Trigger,
  Indicator,
  Separator,
  Title,
  Description,
  Content,
  CompletedContent,
  Number: StepNumber,
  Status,
  PrevTrigger,
  NextTrigger,
  // Non-DOM utilities — re-exported directly
  Context: BaseSteps.Context,
  ItemContext: BaseSteps.ItemContext,
  RootProvider: BaseSteps.RootProvider,
  PropsProvider: BaseSteps.PropsProvider,
};

// Public types
export type {
  StepsCompletedContentProps,
  StepsContentProps,
  StepsDescriptionProps,
  StepsIndicatorProps,
  StepsItemProps,
  StepsListProps,
  StepsNextTriggerProps,
  StepsNumberProps,
  StepsPrevTriggerProps,
  StepsRootProps,
  StepsSeparatorProps,
  StepsStatusProps,
  StepsTitleProps,
  StepsTriggerProps,
} from "./Steps.types";
