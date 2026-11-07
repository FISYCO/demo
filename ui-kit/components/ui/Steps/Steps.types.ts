import type { ComponentProps } from "react";
import type { Steps as BaseSteps } from "@chakra-ui/react";

import type { UIProps } from "../../../lib/component-types";

export type StepsRootProps = UIProps<ComponentProps<typeof BaseSteps.Root>>;
export type StepsListProps = UIProps<ComponentProps<typeof BaseSteps.List>>;
export type StepsItemProps = UIProps<ComponentProps<typeof BaseSteps.Item>>;
export type StepsTriggerProps = UIProps<ComponentProps<typeof BaseSteps.Trigger>>;
export type StepsIndicatorProps = UIProps<ComponentProps<typeof BaseSteps.Indicator>>;
export type StepsSeparatorProps = UIProps<ComponentProps<typeof BaseSteps.Separator>>;
export type StepsTitleProps = UIProps<ComponentProps<typeof BaseSteps.Title>>;
export type StepsDescriptionProps = UIProps<ComponentProps<typeof BaseSteps.Description>>;
export type StepsContentProps = UIProps<ComponentProps<typeof BaseSteps.Content>>;
export type StepsCompletedContentProps = UIProps<ComponentProps<typeof BaseSteps.CompletedContent>>;
export type StepsNumberProps = UIProps<ComponentProps<typeof BaseSteps.Number>>;
export type StepsStatusProps = UIProps<ComponentProps<typeof BaseSteps.Status>>;
export type StepsPrevTriggerProps = UIProps<ComponentProps<typeof BaseSteps.PrevTrigger>>;
export type StepsNextTriggerProps = UIProps<ComponentProps<typeof BaseSteps.NextTrigger>>;
