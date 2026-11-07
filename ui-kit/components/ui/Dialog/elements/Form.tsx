"use client";

import type { FormEvent, ReactNode } from "react";
import { chakra } from "@chakra-ui/react";

export interface DialogFormProps {
  /** Что делает Enter и кнопка `type="submit"`: подтвердить, сохранить, отправить код. */
  onSubmit: () => void;
  children: ReactNode;
}

/**
 * Форма диалога (#1772): оборачивает `Dialog.Body` и `Dialog.Footer`, и Enter в поле делает то же, что главная
 * кнопка (`type="submit"`). Раскладки своей нет (`display: contents`) — тело и подвал стоят, как стояли.
 *
 * `method="dialog"`: до гидрации обработчика ещё нет, и Enter запускал нативную отправку — перезагрузку страницы с
 * потерей набранного. С `dialog` браузер никуда не уходит.
 */
export function Form({ onSubmit, children }: DialogFormProps) {
  return (
    <chakra.form
      display="contents"
      method="dialog"
      onSubmit={(event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSubmit();
      }}
      data-testid="Dialog__Form"
    >
      {children}
    </chakra.form>
  );
}
