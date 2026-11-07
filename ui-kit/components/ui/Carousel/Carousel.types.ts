import type { ReactNode } from "react";
import type {
  CarouselControlProps as BaseCarouselControlProps,
  CarouselIndicatorsProps as BaseCarouselIndicatorsProps,
  CarouselItemGroupProps as BaseCarouselItemGroupProps,
  CarouselItemProps as BaseCarouselItemProps,
  CarouselNextTriggerProps as BaseCarouselNextTriggerProps,
  CarouselPrevTriggerProps as BaseCarouselPrevTriggerProps,
  CarouselRootProps as BaseCarouselRootProps,
} from "@chakra-ui/react";

import type { UIProps } from "../../../lib/component-types";

/**
 * `page`, `spacing` и `padding` — это ещё и CSS-свойства, поэтому `UIProps` вырезает их вместе
 * со style-пропами. Для карусели они управляют лентой слайдов, а не оформлением, и возвращаются
 * сюда явным списком.
 */
type CarouselMachineProps = Pick<BaseCarouselRootProps, "page" | "spacing" | "padding">;

export interface CarouselRootProps extends Omit<UIProps<BaseCarouselRootProps>, "children">, CarouselMachineProps {
  children?: ReactNode;
}

export interface CarouselItemGroupProps extends Omit<UIProps<BaseCarouselItemGroupProps>, "children"> {
  children?: ReactNode;
}

export interface CarouselControlProps extends Omit<UIProps<BaseCarouselControlProps>, "children"> {
  children?: ReactNode;
}

/**
 * Подписи обязательны: в кнопке только иконка, а весь текст интерфейса приходит из i18n
 * потребителя — своей английской строки дизайн-система не подставляет.
 */
interface CarouselTriggerLabels {
  label: string;
}

export interface CarouselPrevTriggerProps
  extends Omit<UIProps<BaseCarouselPrevTriggerProps>, "children" | "aria-label">,
    CarouselTriggerLabels {
  children?: ReactNode;
}

export interface CarouselNextTriggerProps
  extends Omit<UIProps<BaseCarouselNextTriggerProps>, "children" | "aria-label">,
    CarouselTriggerLabels {
  children?: ReactNode;
}

export interface CarouselControlsProps {
  prevLabel: string;
  nextLabel: string;
  /** Точки-индикаторы под слайдами. Выключать, когда слайдов слишком много для точек. */
  withIndicators?: boolean;
  "data-testid"?: string;
}

export type CarouselItemProps = UIProps<BaseCarouselItemProps>;
export type CarouselIndicatorsProps = UIProps<BaseCarouselIndicatorsProps>;
