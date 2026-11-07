"use client";
import type { ReactNode } from "react";
import { HStack } from "@chakra-ui/react";

import type { UIBaseProps } from "../../../lib/component-types";
import { Status } from "../Status";
import { Tabs } from "../Tabs";

/** Состояние перевода: заполнен, начат и брошен черновиком, пуст. */
export type LanguageTabState = "filled" | "draft" | "empty";

export interface LanguageTabItem {
  /** Код локали: `en`, `ru`. */
  value: string;
  label: string;
  state?: LanguageTabState;
  /**
   * Подпись состояния словами: её читает программа чтения с экрана, потому что точка возле названия
   * ей ничего не говорит. Перевод приходит из приложения — в библиотеке текстов нет.
   */
  stateLabel?: string;
}

export interface LanguageTabsProps extends UIBaseProps {
  items: LanguageTabItem[];
  value: string;
  onValueChange: (value: string) => void;
  /** Действия в полосе вкладок: «Скопировать из другого языка», «+ язык». */
  actions?: ReactNode;
  /** Поля активного языка. */
  children: ReactNode;
}

/** Точка состояния: цвет несёт смысл, подпись рядом — то же словами. */
const STATE_PALETTE: Record<LanguageTabState, string> = {
  filled: "green",
  draft: "orange",
  empty: "gray",
};

/**
 * Языки записи вкладками (#1516), а не блоками друг под другом.
 *
 * Блоки подряд росли в бесконечный свиток: у формы категории сначала весь английский набор полей,
 * под ним весь русский, и с третьим языком форму стало бы нечем окинуть взглядом.
 *
 * Панель заводится на каждый язык, даже когда поля показываются только у активного. Полоса вкладок без
 * панелей — нарушение доступности: `aria-controls` у триггера указывает на узел, которого нет, и axe
 * валит это правилом `aria-valid-attr-value`. Так сделано в редакторе поста, и это не образец.
 */
export function LanguageTabs({
  items,
  value,
  onValueChange,
  actions,
  children,
  "data-testid": testId = "LanguageTabs",
}: LanguageTabsProps) {
  return (
    <Tabs.Root
      value={value}
      onValueChange={(details) => onValueChange(details.value)}
      variant="enclosed"
      size="sm"
      data-testid={testId}
    >
      <HStack justify="space-between" align="center" gap="3" flexWrap="wrap">
        <Tabs.List data-testid="LanguageTabs__List">
          {items.map((item) => (
            <Tabs.Trigger key={item.value} value={item.value} data-testid="LanguageTabs__Trigger">
              {item.label}
              {item.state ? (
                <Status colorPalette={STATE_PALETTE[item.state]} data-testid="LanguageTabs__State">
                  {item.stateLabel}
                </Status>
              ) : null}
            </Tabs.Trigger>
          ))}
        </Tabs.List>
        {actions}
      </HStack>

      {items.map((item) => (
        <Tabs.Content key={item.value} value={item.value} data-testid="LanguageTabs__Content">
          {/* Поля рендерятся один раз: копия на каждый язык удвоила бы форму в DOM. */}
          {item.value === value ? children : null}
        </Tabs.Content>
      ))}
    </Tabs.Root>
  );
}
