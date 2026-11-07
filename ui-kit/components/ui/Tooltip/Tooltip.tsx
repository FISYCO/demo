"use client";

import { Tooltip as BaseTooltip, Portal } from "@chakra-ui/react";

import type { TooltipProps } from "./Tooltip.types";

/**
 * Подсказка при наведении.
 *
 * Собрана целиком: потребитель отдаёт содержимое и элемент, а портал, позиционер и контент —
 * забота компонента. Триггер здесь — сам ребёнок, и по-другому быть не может: подсказка
 * существует ровно для того элемента, который ею объясняют.
 *
 * Пустое содержимое означает «подсказки нет»: она не отрисуется. Иначе каждый потребитель писал бы
 * одно и то же условие вокруг подсказки, а забыв его — показывал бы пустой чёрный прямоугольник.
 */
export function Tooltip({
  content,
  children,
  showArrow = false,
  contentProps,
  positionerProps,
  openDelay = 300,
  closeDelay = 100,
  "data-testid": testId = "Tooltip",
  ...rootProps
}: TooltipProps) {
  if (content === null || content === undefined || content === "") {
    return <>{children}</>;
  }

  return (
    <BaseTooltip.Root openDelay={openDelay} closeDelay={closeDelay} {...rootProps}>
      <BaseTooltip.Trigger asChild data-testid="Tooltip__Trigger">
        {children}
      </BaseTooltip.Trigger>
      <Portal>
        <BaseTooltip.Positioner {...positionerProps} data-testid="Tooltip__Positioner">
          <BaseTooltip.Content {...contentProps} data-testid={testId}>
            {showArrow ? (
              <BaseTooltip.Arrow>
                <BaseTooltip.ArrowTip />
              </BaseTooltip.Arrow>
            ) : null}
            {content}
          </BaseTooltip.Content>
        </BaseTooltip.Positioner>
      </Portal>
    </BaseTooltip.Root>
  );
}
