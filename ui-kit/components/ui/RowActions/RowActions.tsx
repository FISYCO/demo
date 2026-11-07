"use client";
import type { ComponentType, SVGProps } from "react";
import { HStack, Icon } from "@chakra-ui/react";
import { Keypad } from "../../../../src/icons/keypad";

import type { UIBaseProps } from "../../../lib/component-types";
import { IconButton } from "../IconButton";
import { Menu } from "../Menu";
import { Tooltip } from "../Tooltip";

export type RowAction = {
  id: string;
  /** Подпись: она же доступное имя кнопки, она же текст подсказки и пункта меню. */
  label: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  onSelect: () => void;
  /** Необратимое действие: красное и отделено в меню. */
  danger?: boolean;
  disabled?: boolean;
};

export interface RowActionsProps extends UIBaseProps {
  actions: RowAction[];
  /** До скольких действий показывать иконками. Больше — одна кнопка с меню. */
  inlineLimit?: number;
  /** Доступное имя кнопки меню. */
  menuLabel?: string;
  /**
   * Иконка кнопки меню. По умолчанию — сетка точек: глифа-многоточия в `@fisyco/icons` пока нет,
   * каталог заполняет синхронизация библиотеки, и руками туда не добавляют.
   */
  menuIcon?: ComponentType<SVGProps<SVGSVGElement>>;
}

/**
 * Действия строки списка.
 *
 * Пока действий немного — иконки с подсказками: подпись словом («Delete», «Deactivate») делала
 * колонку действий шире самих данных, и строка читалась как набор кнопок, а не как запись (#1540).
 * Когда действий больше — одна кнопка с меню: пять иконок подряд ничем не лучше пяти слов.
 *
 * Нажатие не всплывает наверх: строка списка обычно сама ссылка, и действие в ней не должно заодно
 * открывать запись.
 */
export function RowActions({
  actions,
  inlineLimit = 3,
  menuLabel = "More actions",
  menuIcon: MenuIcon = Keypad,
  "data-testid": testId = "RowActions",
}: RowActionsProps) {
  if (actions.length === 0) return null;

  const stop = (event: { stopPropagation: () => void }) => event.stopPropagation();

  if (actions.length <= inlineLimit) {
    return (
      <HStack gap="1" justify="end" data-testid={testId}>
        {actions.map((action) => (
          <Tooltip key={action.id} content={action.label}>
            <IconButton
              size="sm"
              variant="ghost"
              aria-label={action.label}
              disabled={action.disabled}
              colorPalette={action.danger ? "red" : undefined}
              data-testid={`RowActions__${action.id}`}
              onClick={(event) => {
                stop(event);
                action.onSelect();
              }}
            >
              <Icon as={action.icon} size="sm" />
            </IconButton>
          </Tooltip>
        ))}
      </HStack>
    );
  }

  const safe = actions.filter((action) => !action.danger);
  const dangerous = actions.filter((action) => action.danger);

  return (
    <HStack gap="1" justify="end" data-testid={testId} onClick={stop}>
      {/* Обработчик — на пункте (`onClick`), а не на корне меню: `onSelect` у корня в этой сборке
          Ark не срабатывал, и действие молча ничего не делало — поймано историей `InMenu`. */}
      <Menu.Root>
        <Menu.Trigger asChild>
          <IconButton size="sm" variant="ghost" aria-label={menuLabel} data-testid={`${testId}__Trigger`}>
            <Icon as={MenuIcon} size="sm" />
          </IconButton>
        </Menu.Trigger>
        <Menu.Content>
          {safe.map((action) => (
            <Menu.Item
              key={action.id}
              value={action.id}
              disabled={action.disabled}
              onClick={action.onSelect}
              data-testid={`RowActions__${action.id}`}
            >
              <Icon as={action.icon} size="sm" />
              <Menu.ItemText>{action.label}</Menu.ItemText>
            </Menu.Item>
          ))}
          {dangerous.length > 0 ? <Menu.Separator /> : null}
          {dangerous.map((action) => (
            <Menu.Item
              key={action.id}
              value={action.id}
              disabled={action.disabled}
              onClick={action.onSelect}
              color="status.error"
              data-testid={`RowActions__${action.id}`}
            >
              <Icon as={action.icon} size="sm" />
              <Menu.ItemText>{action.label}</Menu.ItemText>
            </Menu.Item>
          ))}
        </Menu.Content>
      </Menu.Root>
    </HStack>
  );
}
