"use client";

import { useCallback, useRef } from "react";
import { SegmentGroup as BaseSegmentGroup, chakra } from "@chakra-ui/react";

import { useHorizontalOverflow } from "../../../lib/use-horizontal-overflow";
import { AnimatedNumber } from "../AnimatedNumber";
import type { SegmentGroupProps } from "./SegmentGroup.types";

/**
 * Один переключатель отборов и режимов (#1773). Раньше фильтры были пятью разными: залитые и контурные кнопки,
 * залитые и прозрачные, плашки с прозрачностью, коробка с фоном; часть без `aria-pressed`, одна — без фокуса.
 *
 * Выбранный вариант один на всё приложение — плашка, которая переезжает к нажатому на пружине. Семантика —
 * радиогруппа Ark: стрелки двигают выбор, Tab входит в группу один раз, читалка называет группу и выбранное.
 */
export function SegmentGroup<T extends string>({
  options,
  value,
  onValueChange,
  "aria-label": ariaLabel,
  size = "sm",
  fitted = false,
  "data-testid": testId = "SegmentGroup",
}: SegmentGroupProps<T>) {
  // Не помещается — листается внутри себя и держит выбранный пункт в видимой части (#1807).
  const rootRef = useRef<HTMLDivElement | null>(null);
  useHorizontalOverflow(rootRef, "[data-state=checked]");
  const setRoot = useCallback((node: HTMLDivElement | null) => {
    rootRef.current = node;
  }, []);
  return (
    <BaseSegmentGroup.Root
      ref={setRoot}
      data-fitted={fitted || undefined}
      value={value}
      size={size}
      aria-label={ariaLabel}
      data-testid={testId}
      onValueChange={(details) => {
        const next = options.find((option) => option.value === details.value);
        if (next) onValueChange(next.value);
      }}
    >
      <BaseSegmentGroup.Indicator />
      {options.map((option) => (
        <BaseSegmentGroup.Item
          key={option.value}
          value={option.value}
          disabled={option.disabled}
          data-testid={`${testId}__item-${option.value}`}
        >
          <BaseSegmentGroup.ItemText>
            {option.label}
            {/* Пробел — чтобы читалка не склеила подпись с числом («Новые3»). */}
            {option.count === undefined ? null : " "}
            {option.count === undefined ? null : (
              <chakra.span ms="1" color="fg.muted" fontVariantNumeric="tabular-nums">
                <AnimatedNumber value={option.count} />
              </chakra.span>
            )}
          </BaseSegmentGroup.ItemText>
          <BaseSegmentGroup.ItemHiddenInput />
        </BaseSegmentGroup.Item>
      ))}
    </BaseSegmentGroup.Root>
  );
}
