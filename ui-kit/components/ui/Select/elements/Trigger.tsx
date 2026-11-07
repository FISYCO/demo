"use client";
import { Select as BaseSelect } from "@chakra-ui/react";
import { Times } from "../../../../../src/icons/times";

import type { SelectTriggerProps } from "../Select.types";

export function Trigger({
  "data-testid": testId = "Select__Trigger",
  children,
  clearable,
  placeholder,
  ...props
}: SelectTriggerProps) {
  return (
    // Оболочка и сама кнопка — разные узлы, и метка у них разная. Раньше обе несли
    // `Select__Trigger`: поиск по метке возвращал два элемента, и любая проверка,
    // ожидавшая один, падала. Свою метку потребителя получает кнопка, а не оболочка —
    // нажимают именно её.
    <BaseSelect.Control data-testid="Select__Control" {...props}>
      <BaseSelect.Trigger data-testid={testId}>
        {children ?? <BaseSelect.ValueText placeholder={placeholder} />}
      </BaseSelect.Trigger>
      <BaseSelect.IndicatorGroup data-testid="Select__IndicatorGroup">
        {clearable ? (
          <BaseSelect.ClearTrigger asChild data-testid="Select__ClearTrigger">
            <button type="button" aria-label="Clear">
              <Times />
            </button>
          </BaseSelect.ClearTrigger>
        ) : null}
        <BaseSelect.Indicator data-testid="Select__Indicator" />
      </BaseSelect.IndicatorGroup>
    </BaseSelect.Control>
  );
}
