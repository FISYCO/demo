"use client";

import { startTransition, useEffect, useState } from "react";

/**
 * Момент, когда скелетон уступает место данным (#1762). Показ меняется переходом (`startTransition`), потому что
 * `<ViewTransition>` анимирует только переходы, а ответ запроса приходит обычным обновлением. Данные, которые уже
 * есть на первом рендере (из кеша), показываются сразу и без анимации.
 *
 * Возвращает, показывать ли данные: `false`, пока идёт первая загрузка.
 */
export function useHandover(loading: boolean): boolean {
  const [shown, setShown] = useState(!loading);

  useEffect(() => {
    if (shown === !loading) return;
    startTransition(() => setShown(!loading));
  }, [loading, shown]);

  return shown;
}
