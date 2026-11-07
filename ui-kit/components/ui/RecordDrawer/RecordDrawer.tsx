"use client";
import type { ReactNode } from "react";
import { useState } from "react";
import { HStack, Text } from "@chakra-ui/react";

import type { UIBaseProps } from "../../../lib/component-types";
import { useSaveShortcut } from "../../../lib/use-save-shortcut";
import { Button } from "../Button";
import { Dialog } from "../Dialog";
import { Drawer } from "../Drawer";

export interface RecordDrawerProps extends UIBaseProps {
  open: boolean;
  /** Закрытие: компонент зовёт его только когда закрывать можно — несохранённое он придержит. */
  onOpenChange: (open: boolean) => void;
  title: ReactNode;
  /** Строка под заголовком: что это за запись, когда изменена, кем. */
  subtitle?: ReactNode;
  children: ReactNode;
  /** Левая часть подвала: удаление и прочее, что относится к записи целиком. */
  footerStart?: ReactNode;
  onSave: () => void;
  canSave?: boolean;
  saving?: boolean;
  /** Есть несохранённые правки: закрытие спросит, что с ними делать. */
  dirty?: boolean;
  saveLabel?: string;
  /**
   * Показывать ли кнопку сохранения. Запись, которая сохраняется по частям внутри своих разделов,
   * не должна нести общую кнопку: неактивная кнопка в подвале выглядит поломкой.
   */
  showSave?: boolean;
  /** Подпись «нечего сохранять». Пустая строка убирает её: у новой записи сохранять ещё нечего. */
  savedLabel?: string;
  unsavedLabel?: string;
  discardLabel?: string;
  keepEditingLabel?: string;
  unsavedTitle?: string;
  /** Строка под заголовком вопроса: что именно потеряется. */
  unsavedDescription?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "full";
}

/**
 * Просмотр-он-же-редактирование записи — в панели поверх списка.
 *
 * Отдельная страница на запись уводила со списка целиком: чтобы поправить название у трёх категорий,
 * приходилось трижды уйти и трижды вернуться, теряя позицию и отбор. Панель оставляет список на
 * месте, а адрес запоминает открытую запись — ссылку можно переслать (#1541).
 *
 * Ctrl+S сохраняет. Закрытие с несохранёнными правками не выбрасывает их молча: поверх панели
 * встаёт вопрос. Вопрос — модальное окно, а не полоса внутри панели: человек уже нажал «закрыть» и
 * смотрит не туда, полосу он пролистывал мимо (#1550).
 */
export function RecordDrawer({
  open,
  onOpenChange,
  title,
  subtitle,
  children,
  footerStart,
  onSave,
  canSave = true,
  saving = false,
  dirty = false,
  saveLabel = "Save",
  showSave = true,
  savedLabel = "All changes saved",
  unsavedLabel = "Unsaved changes",
  discardLabel = "Discard",
  keepEditingLabel = "Keep editing",
  unsavedTitle = "Unsaved changes",
  unsavedDescription = "Close the panel and the edits are gone.",
  size = "md",
  "data-testid": testId = "RecordDrawer",
}: RecordDrawerProps) {
  const [asking, setAsking] = useState(false);

  // Пока панель закрыта, сохранять нечего: иначе Ctrl+S на списке поднимал бы сохранение
  // невидимой формы (та же ловушка, что у двух RecordForm на одном экране).
  useSaveShortcut({ onSave, canSave: open && canSave && !saving });

  const requestClose = () => {
    if (dirty) {
      setAsking(true);
      return;
    }
    onOpenChange(false);
  };

  const close = () => {
    setAsking(false);
    onOpenChange(false);
  };

  return (
    <Drawer.Root
      open={open}
      onOpenChange={(details) => {
        if (details.open) {
          onOpenChange(true);
          return;
        }
        requestClose();
      }}
      placement="end"
      size={size}
      data-testid={testId}
    >
      <Drawer.Content>
        <Drawer.Header title={title} description={subtitle} closable />
        <Drawer.Body>{children}</Drawer.Body>
        <Drawer.Footer>
          <HStack justify="space-between" width="full" gap="3">
            <HStack gap="2">{footerStart}</HStack>
            {showSave ? (
              <HStack gap="3">
                {dirty || savedLabel ? (
                  <Text fontSize="xs" color="fg.muted" data-testid={`${testId}__Status`}>
                    {dirty ? unsavedLabel : savedLabel}
                  </Text>
                ) : null}
                <Button size="sm" loading={saving} disabled={!canSave} onClick={onSave} data-testid={`${testId}__Save`}>
                  {saveLabel}
                </Button>
              </HStack>
            ) : null}
          </HStack>
        </Drawer.Footer>
      </Drawer.Content>

      {/* `alertdialog` — потому что вопрос про потерю работы: читалка объявляет его сразу, а не как
          обычное окно. Esc и подложка отвечают «продолжить правку»: безопасный ответ — тот, что
          ничего не теряет. */}
      <Dialog.Root
        open={asking}
        role="alertdialog"
        onOpenChange={(details) => {
          if (!details.open) setAsking(false);
        }}
      >
        <Dialog.Content data-testid={`${testId}__UnsavedDialog`}>
          <Dialog.Header title={unsavedTitle} closable={false} />
          <Dialog.Body>
            <Text fontSize="sm" color="fg.muted">
              {unsavedDescription}
            </Text>
          </Dialog.Body>
          <Dialog.Footer>
            <Dialog.ActionTrigger asChild>
              <Button variant="outline" onClick={() => setAsking(false)}>
                {keepEditingLabel}
              </Button>
            </Dialog.ActionTrigger>
            <Button colorPalette="red" onClick={close} data-testid={`${testId}__Discard`}>
              {discardLabel}
            </Button>
          </Dialog.Footer>
        </Dialog.Content>
      </Dialog.Root>
    </Drawer.Root>
  );
}
