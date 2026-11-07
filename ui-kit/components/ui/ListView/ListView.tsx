"use client";
import type { ReactNode } from "react";
import { Box, Stack } from "@chakra-ui/react";

import type { UIBaseProps } from "../../../lib/component-types";
import { useInfiniteScroll } from "../../../lib/use-infinite-scroll";
import { Button } from "../Button";
import type { TableProps } from "../Table";
import { Table } from "../Table";

export interface ListViewProps<T> extends Omit<TableProps<T>, "emptyState">, UIBaseProps {
  /** Поиск и фильтры. Значения и обработчики живут в приложении: адрес страницы — не дело библиотеки. */
  toolbar?: ReactNode;
  /** Пустой список: сообщение и одно действие. */
  empty?: ReactNode;
  /** Запрос не удался. Показывается вместо таблицы, тулбар при этом остаётся — запрос можно изменить. */
  error?: ReactNode;
  hasNextPage?: boolean;
  isFetchingNextPage?: boolean;
  onLoadMore?: () => void;
  /** Подпись кнопки догрузки: перевод приходит из приложения. */
  loadMoreLabel?: string;
}

/**
 * Список записей (#1528): тулбар, таблица, догрузка курсором.
 *
 * Собран из того, что уже есть: `Table` знает про колонки, кликабельную строку, скелетон и пустое
 * состояние, `useInfiniteScroll` — про догрузку. Здесь только их связка и состояния вокруг.
 *
 * Живёт в библиотеке, а не в приложении: экранов этой формы восемь в вебе (участники, счета,
 * расхождения, компоненты, источники, активность) и столько же в админке. Собрать список под одно
 * приложение значит завести второй такой же в другом.
 *
 * Данными не владеет: страницы приходят готовым списком, а откуда — решает вызывающий.
 */
export function ListView<T>({
  toolbar,
  empty,
  error,
  hasNextPage = false,
  isFetchingNextPage = false,
  onLoadMore,
  loadMoreLabel = "Load more",
  "data-testid": testId = "ListView",
  ...tableProps
}: ListViewProps<T>) {
  const { sentinelRef } = useInfiniteScroll({
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage: () => onLoadMore?.(),
  });

  return (
    <Stack gap="4" data-testid={testId}>
      {toolbar ? <Box data-testid="ListView__Toolbar">{toolbar}</Box> : null}

      {error ? <Box data-testid="ListView__Error">{error}</Box> : <Table {...tableProps} emptyState={empty} />}

      {!error && hasNextPage ? (
        // Метка догрузки — та же кнопка: наблюдатель тянет следующую порцию при прокрутке, а с
        // клавиатуры её вызывают нажатием. Без кнопки список некому листать без мыши.
        <Box ref={sentinelRef} display="flex" justifyContent="center" data-testid="ListView__More">
          <Button size="sm" variant="outline" loading={isFetchingNextPage} onClick={onLoadMore}>
            {loadMoreLabel}
          </Button>
        </Box>
      ) : null}
    </Stack>
  );
}
