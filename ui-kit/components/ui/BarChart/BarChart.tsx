"use client";
import { Box, HStack, Stack, Text } from "@chakra-ui/react";

import type { UIBaseProps } from "../../../lib/component-types";
import { Tooltip } from "../Tooltip";

export type BarChartPoint = {
  /** Подпись точки: день, месяц, имя. Она же стоит в подсказке и на концах ряда. */
  label: string;
  value: number;
};

export interface BarChartProps extends UIBaseProps {
  data: BarChartPoint[];
  /** График — картинка для читалки: одной строкой сказать, что на нём. */
  ariaLabel: string;
  /** Высота ряда: токен размера Chakra. */
  height?: string;
  formatValue?: (value: number) => string;
}

const MIN_BAR_RATIO = 0.06;

/**
 * Ряд значений столбиками: регистрации по дням, письма по дням — что угодно счётное во времени.
 *
 * Своей оси у графика нет намеренно: он живёт в карточке рядом с числом, и число говорит «сколько»,
 * а график — «как шло». Подписи стоят под концами ряда, значение столбика — в подсказке.
 *
 * Нулевой столбик всё равно виден полоской у основания: день без событий — это ноль, а пустое место
 * на его месте читается как дыра в данных.
 */
export function BarChart({
  data,
  ariaLabel,
  height = "20",
  formatValue = (value: number) => String(value),
  "data-testid": testId = "BarChart",
}: BarChartProps) {
  const max = data.reduce((highest, point) => Math.max(highest, point.value), 0);

  if (data.length === 0) {
    return (
      <Text fontSize="sm" color="fg.muted" data-testid={testId}>
        —
      </Text>
    );
  }

  return (
    <Stack gap="1.5" data-testid={testId}>
      <HStack gap="0.5" align="end" height={height} role="img" aria-label={ariaLabel}>
        {data.map((point) => {
          // max = 0 (ни одного события за период) — не повод делить на ноль: весь ряд ложится на
          // основание, и это честная картина, а не пустое место.
          const ratio = max === 0 ? 0 : point.value / max;
          return (
            <Tooltip key={point.label} content={`${point.label}: ${formatValue(point.value)}`}>
              <Box
                flex="1"
                minW="0"
                height={`${Math.max(ratio, MIN_BAR_RATIO) * 100}%`}
                borderRadius="xs"
                bg={point.value > 0 ? "colorPalette.solid" : "bg.emphasized"}
                aria-hidden="true"
              />
            </Tooltip>
          );
        })}
      </HStack>
      <HStack justify="space-between">
        <Text fontSize="xs" color="fg.muted">
          {data.at(0)?.label}
        </Text>
        <Text fontSize="xs" color="fg.muted">
          {data.at(-1)?.label}
        </Text>
      </HStack>
    </Stack>
  );
}
