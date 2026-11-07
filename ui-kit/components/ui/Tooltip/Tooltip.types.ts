import type { ReactNode } from "react";
import type {
  TooltipContentProps as BaseTooltipContentProps,
  TooltipPositionerProps as BaseTooltipPositionerProps,
  TooltipRootProps as BaseTooltipRootProps,
} from "@chakra-ui/react";

import type { UIProps } from "../../../lib/component-types";

export interface TooltipProps extends Omit<UIProps<BaseTooltipRootProps>, "children"> {
  /** Что показать. Пустая подсказка не показывается вовсе — проверять это на месте не нужно. */
  content: ReactNode;
  /** Элемент, при наведении на который подсказка появляется: он же и становится триггером. */
  children: ReactNode;
  /** Стрелка к триггеру. По умолчанию её нет: у коротких подписей она только шумит. */
  showArrow?: boolean;
  contentProps?: Omit<UIProps<BaseTooltipContentProps>, "children">;
  positionerProps?: Omit<UIProps<BaseTooltipPositionerProps>, "children">;
}
