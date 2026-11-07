"use client";

import { useDeferredValue } from "react";

/**
 * Список, изменение которого анимируется (#1761).
 *
 * Ответ запроса приходит обычным обновлением, а `<ViewTransition>` анимирует только переходы. Отложенное значение
 * React применяет переходом — и новая карточка вырастает, удалённая уходит, а не меняются рывком.
 *
 * Пустой список не откладывается (#1765): первое заполнение и так сопровождает передача скелетона, а отложенный
 * пустой массив на кадр показывал «пока ничего нет» поверх уже пришедших данных.
 */
export function useMotionData<T extends readonly unknown[]>(items: T): T {
  const deferred = useDeferredValue(items);
  return deferred.length === 0 ? items : deferred;
}
