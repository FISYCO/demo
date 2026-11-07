"use client";
import type { ReactNode } from "react";
import { useId, ViewTransition } from "react";
import { Table as BaseTable, Box, Skeleton } from "@chakra-ui/react";
import { AngleDownSmall } from "../../../../src/icons/angle-down-small";
import { AngleUpSmall } from "../../../../src/icons/angle-up-small";
import { ArrowsUpDown } from "../../../../src/icons/arrows-up-down";

import type { UIBaseProps } from "../../../lib/component-types";
import { transitionName } from "../../../lib/transition-name";
import { useHandover } from "../../../lib/use-handover";
import { ScrollArea } from "../ScrollArea";

export type TableSortDirection = "asc" | "desc";

/** Текущая сортировка: колонка и направление. Значение приходит снаружи — таблица его не хранит. */
export interface TableSort {
  columnId: string;
  direction: TableSortDirection;
}

export interface TableColumn<T> {
  id: string;
  header: ReactNode;
  cell: (item: T) => ReactNode;
  width?: string;
  align?: "start" | "center" | "end";
  /** Можно ли сортировать по этой колонке. Решает вызывающий: сортирует всё равно он. */
  sortable?: boolean;
  /**
   * Заглушка ячейки на первой загрузке, если обычная полоса не похожа на содержимое: аватар с именем, бейдж,
   * кнопка. Повторяет форму ячейки, чтобы строка не меняла высоту, когда приходят данные.
   */
  skeleton?: ReactNode;
}

/**
 * Ширины полос скелетона по колонкам (#1762). Полоса фиксированной ширины задаёт колонке ширину, близкую к
 * настоящей, — колонки не разъезжаются, когда приходят данные. Процент тут не работает: в автоматической раскладке
 * он считается от пустой ячейки.
 */
const SKELETON_WIDTHS = ["128px", "96px", "72px", "112px", "80px"];

export interface TableProps<T> extends UIBaseProps {
  data: T[];
  columns: TableColumn<T>[];
  keyExtractor: (item: T) => string;
  onRowClick?: (item: T) => void;
  rowProps?: (item: T) => Record<string, unknown>;
  loading?: boolean;
  skeletonRows?: number;
  emptyState?: ReactNode;
  caption?: ReactNode;
  colorPalette?: string;
  variant?: "line" | "outline";
  size?: "sm" | "md" | "lg";
  striped?: boolean;
  interactive?: boolean;
  stickyHeader?: boolean;
  showColumnBorder?: boolean;
  native?: boolean;
  /**
   * Сортировка управляется снаружи (#1515): таблица только показывает текущее состояние и сообщает о
   * нажатии. Данные она не переставляет — их сортирует источник, иначе на второй странице список
   * оказался бы отсортирован сам в себе.
   */
  sort?: TableSort | null;
  onSortChange?: (sort: TableSort) => void;
}

/** Первое нажатие по колонке сортирует по возрастанию, следующее по той же — переворачивает. */
function nextSort(columnId: string, current: TableSort | null | undefined): TableSort {
  if (current?.columnId !== columnId) return { columnId, direction: "asc" };
  return { columnId, direction: current.direction === "asc" ? "desc" : "asc" };
}

const ARIA_SORT: Record<TableSortDirection, "ascending" | "descending"> = {
  asc: "ascending",
  desc: "descending",
};

export function Table<T>({
  data,
  columns,
  keyExtractor,
  onRowClick,
  rowProps,
  loading = false,
  skeletonRows = 3,
  emptyState,
  caption,
  interactive,
  variant = "outline",
  size = "md",
  striped = true,
  sort,
  onSortChange,
  "data-testid": testId = "Table",
  ...rootProps
}: TableProps<T>) {
  const hasColumnWidths = columns.some((col) => col.width);
  const isInteractive = interactive ?? !!onRowClick;
  // Заглушки не переставляются и не держат состояния, но ключ им всё равно нужен свой: индекс в
  // ключе — та самая привычка, из-за которой ломаются настоящие строки, и правило её не различает.
  const skeletonRowIds = Array.from({ length: skeletonRows }, (_, index) => `skeleton-row-${index}`);
  // Скелетон уступает место строкам переходом (#1762): заглушки гаснут, строки проявляются. Строки с именами
  // переходов, поэтому новая строка входит, удалённая уходит, остальные съезжают — если данные меняются переходом
  // (`useMotionData` у вызывающего).
  const shown = useHandover(loading);
  const scope = transitionName(useId());

  return (
    // Широкая таблица прокручивается полосой дизайн-системы: Table.ScrollArea у Chakra — это div с
    // overflow:auto, то есть браузерный скроллбар, свой в каждой ОС. Рамка и радиус остаются на
    // внешнем контейнере: он же обрезает по радиусу содержимое, которое уезжает вбок. Перенос строк
    // в ячейках выключён, как было у Chakra, иначе колонки поплывут.
    <Box
      data-testid="Table__ScrollArea"
      overflow="hidden"
      // Тот же предохранитель, что стоял у Chakra на Table.ScrollArea: область не вылезает за
      // колонку, даже если таблица шире, — иначе вместо неё поехала бы страница.
      maxWidth="100%"
      // Рамка таблицы — поверхность, как карточка: радиус уровня l3 (#1809). Раньше здесь стоял `md` мимо уровней темы,
      // и таблица на странице скруглённых карточек выглядела кривой.
      borderRadius={variant === "outline" ? "l3" : undefined}
      border={variant === "outline" ? "1px solid" : undefined}
      borderColor={variant === "outline" ? "border.muted" : undefined}
      // Таблица прямо в карточке — без своей рамки (#1809): рамку и скругление даёт карточка, она же обрезает углы. Две
      // рамки в соседних пикселях со сдвинутым на пиксель скруглением читались одной толстой размытой линией. Условие
      // стоит здесь, а не в рецепте карточки: стилевые пропсы лежат в слое выше рецептов и перебили бы его.
      css={{ ".chakra-card__root > &": { border: "none", borderRadius: "0" } }}
    >
      <ScrollArea
        showHorizontalScrollbar
        showVerticalScrollbar={false}
        contentProps={{ whiteSpace: "nowrap" }}
        // Широкую таблицу из одного текста иначе нечем прокрутить с клавиатуры: внутри нет ничего
        // фокусируемого. Вьюпорт принимает фокус и показывает кольцо, стрелки двигают содержимое.
        viewportProps={{
          tabIndex: 0,
          _focusVisible: { outline: "2px solid", outlineColor: "brand.focusRing", outlineOffset: "-2px" },
        }}
      >
        <BaseTable.Root
          data-testid={testId}
          interactive={isInteractive || undefined}
          variant={variant}
          size={size}
          striped={striped}
          {...rootProps}
        >
          {caption ? <BaseTable.Caption data-testid="Table__Caption">{caption}</BaseTable.Caption> : null}

          {hasColumnWidths ? (
            <BaseTable.ColumnGroup>
              {columns.map((col) => (
                <BaseTable.Column key={col.id} htmlWidth={col.width} />
              ))}
            </BaseTable.ColumnGroup>
          ) : null}

          <BaseTable.Header data-testid="Table__Header">
            <BaseTable.Row>
              {columns.map((col) => {
                const sortable = Boolean(col.sortable && onSortChange);
                const active = sort?.columnId === col.id ? sort : null;
                return (
                  <BaseTable.ColumnHeader
                    key={col.id}
                    textAlign={col.align}
                    // Направление сортировки читает и программа чтения с экрана, и тест: у колонки без
                    // сортировки атрибута нет вовсе, у сортируемой — `none`, пока её не выбрали.
                    aria-sort={sortable ? (active ? ARIA_SORT[active.direction] : "none") : undefined}
                    data-testid="Table__ColumnHeader"
                  >
                    {sortable ? (
                      // Заголовок остаётся настоящей кнопкой: Enter, пробел и кольцо фокуса достаются
                      // от браузера, а не пишутся руками. Оболочка Chakra даёт только стили.
                      <Box
                        asChild
                        display="inline-flex"
                        alignItems="center"
                        gap="1"
                        cursor="pointer"
                        color="inherit"
                        // Кнопка в заголовке пишется так же, как соседние заголовки (#1803): браузер сбрасывает у кнопки
                        // регистр и шрифт, и сортируемая колонка выпадала из капса.
                        textTransform="inherit"
                        fontWeight="inherit"
                        letterSpacing="inherit"
                        fontSize="inherit"
                        borderRadius="l1"
                        _focusVisible={{
                          outline: "2px solid",
                          outlineColor: "brand.focusRing",
                          outlineOffset: "2px",
                        }}
                      >
                        <button
                          type="button"
                          onClick={() => onSortChange?.(nextSort(col.id, sort))}
                          data-testid="Table__SortTrigger"
                        >
                          {col.header}
                          <Box asChild aria-hidden color={active ? "fg" : "fg.subtle"} data-testid="Table__SortIcon">
                            {active ? (
                              active.direction === "asc" ? (
                                <AngleUpSmall />
                              ) : (
                                <AngleDownSmall />
                              )
                            ) : (
                              <ArrowsUpDown />
                            )}
                          </Box>
                        </button>
                      </Box>
                    ) : (
                      col.header
                    )}
                  </BaseTable.ColumnHeader>
                );
              })}
            </BaseTable.Row>
          </BaseTable.Header>

          <BaseTable.Body data-testid="Table__Body">
            {!shown ? (
              <ViewTransition key="skeleton" exit="fis-conceal" default="none">
                {skeletonRowIds.map((rowId) => (
                  <BaseTable.Row key={rowId} data-testid="Table__Row">
                    {columns.map((col, index) => (
                      <BaseTable.Cell key={col.id} textAlign={col.align} data-testid="Table__Cell">
                        {col.skeleton ?? (
                          // Высота строки — как у строки текста: строка не меняет высоту, когда приходят данные.
                          <Box height="1lh" display="flex" alignItems="center">
                            <Skeleton
                              height="0.75em"
                              width={col.width ?? SKELETON_WIDTHS[index % SKELETON_WIDTHS.length]}
                              maxW="full"
                            />
                          </Box>
                        )}
                      </BaseTable.Cell>
                    ))}
                  </BaseTable.Row>
                ))}
              </ViewTransition>
            ) : data.length === 0 && emptyState ? (
              <BaseTable.Row data-testid="Table__Row">
                <BaseTable.Cell colSpan={columns.length} data-testid="Table__Cell">
                  {emptyState}
                </BaseTable.Cell>
              </BaseTable.Row>
            ) : (
              data.map((item) => {
                const extra = rowProps?.(item);
                const key = keyExtractor(item);
                return (
                  <ViewTransition
                    key={key}
                    name={transitionName(scope, key)}
                    enter="fis-reveal"
                    exit="fis-shrink"
                    default="none"
                  >
                    <BaseTable.Row
                      cursor={onRowClick ? "pointer" : undefined}
                      onClick={onRowClick ? () => onRowClick(item) : undefined}
                      onKeyDown={
                        onRowClick
                          ? (event) => {
                              if (event.key === "Enter" || event.key === " ") {
                                event.preventDefault();
                                onRowClick(item);
                              }
                            }
                          : undefined
                      }
                      tabIndex={onRowClick ? 0 : undefined}
                      data-testid="Table__Row"
                      {...extra}
                    >
                      {columns.map((col) => (
                        <BaseTable.Cell key={col.id} textAlign={col.align} data-testid="Table__Cell">
                          {col.cell(item)}
                        </BaseTable.Cell>
                      ))}
                    </BaseTable.Row>
                  </ViewTransition>
                );
              })
            )}
          </BaseTable.Body>
        </BaseTable.Root>
      </ScrollArea>
    </Box>
  );
}
