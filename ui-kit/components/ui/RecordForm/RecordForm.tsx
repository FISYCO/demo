"use client";
import type { ReactNode } from "react";
import { HStack, SimpleGrid, Stack } from "@chakra-ui/react";

import type { UIBaseProps } from "../../../lib/component-types";
import { useSaveShortcut } from "../../../lib/use-save-shortcut";

export interface RecordFormProps extends UIBaseProps {
  /** Основное содержимое записи — левая колонка. */
  children: ReactNode;
  /** Метаданные и SEO — правая колонка. Сворачиваемые блоки собираются из `Accordion`. */
  sidebar?: ReactNode;
  /** Левая часть закреплённой шапки: путь назад, вкладки языков. */
  toolbar?: ReactNode;
  /** Правая часть закреплённой шапки: состояние сохранения и кнопки. */
  actions?: ReactNode;
  /**
   * Ctrl+S (и ⌘S) вызывает это. Текстов и кнопок компонент не придумывает: и подпись состояния, и
   * сама кнопка «Сохранить» приходят в `actions` — переводы живут в приложении, а не в библиотеке.
   */
  onSave?: () => void;
  /** Пока `false`, Ctrl+S ничего не делает: нечего сохранять или сохранение уже идёт. */
  canSave?: boolean;
  sidebarWidth?: string;
}

/**
 * Каркас страницы-записи (#1515): закреплённая шапка, две колонки, Ctrl+S.
 *
 * Форму записи собирали по месту на каждом экране, и правила расходились: у редактора поста шапка с
 * состоянием и боковая панель, у категории — плоская анкета в модалке. Каркас держит одну раскладку,
 * а чем её наполнить, решает экран.
 *
 * Данными компонент не владеет: ни состоянием полей, ни признаком «есть изменения». Он показывает то,
 * что дали, и сообщает о нажатии.
 */
export function RecordForm({
  children,
  sidebar,
  toolbar,
  actions,
  onSave,
  canSave = true,
  sidebarWidth = "20rem",
  "data-testid": testId = "RecordForm",
}: RecordFormProps) {
  // Тот же хук доступен формам, которым каркас не подходит: у страницы планов редактор во второй
  // колонке, а Ctrl+S нужен и там.
  useSaveShortcut({ onSave, canSave });

  return (
    <Stack gap="4" data-testid={testId}>
      {toolbar || actions ? (
        // Шапка закреплена: на длинной форме кнопка сохранения не должна уезжать вверх. Фон
        // обязателен — без него содержимое просвечивает сквозь неё при прокрутке.
        <HStack
          position="sticky"
          top="0"
          zIndex="docked"
          bg="bg"
          justify="space-between"
          align="center"
          gap="3"
          flexWrap="wrap"
          py="2"
          data-testid="RecordForm__Bar"
        >
          <HStack gap="4" flexWrap="wrap">
            {toolbar}
          </HStack>
          <HStack gap="2" flexWrap="wrap">
            {actions}
          </HStack>
        </HStack>
      ) : null}

      <SimpleGrid
        templateColumns={{ base: "1fr", xl: `minmax(0, 1fr) ${sidebarWidth}` }}
        gap="8"
        alignItems="start"
        data-testid="RecordForm__Columns"
      >
        {/* minW=0 обязателен: без него длинная строка в ячейке растягивает колонку и ломает сетку. */}
        <Stack gap="4" minW="0" data-testid="RecordForm__Main">
          {children}
        </Stack>
        {sidebar ? (
          <Stack gap="4" minW="0" data-testid="RecordForm__Sidebar">
            {sidebar}
          </Stack>
        ) : null}
      </SimpleGrid>
    </Stack>
  );
}
