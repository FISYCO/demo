"use client";

import { useEffect } from "react";

/**
 * Ctrl+S (и ⌘S) сохраняет форму (#1521).
 *
 * Обработчик висит на окне, а не на форме: пока фокус в поле, событие до формы не дойдёт иначе.
 * Отсюда и следствие — две формы на одном экране услышат одно нажатие обе, поэтому у той, что не в
 * работе, `canSave` должен быть ложным.
 *
 * Браузерное «сохранить страницу» здесь всегда не то, чего хотел человек, поэтому событие гасится.
 */
export function useSaveShortcut({ onSave, canSave = true }: { onSave?: () => void; canSave?: boolean }) {
  useEffect(() => {
    if (!onSave) return;
    const onKey = (event: KeyboardEvent) => {
      if (!(event.ctrlKey || event.metaKey) || event.key.toLowerCase() !== "s") return;
      event.preventDefault();
      if (canSave) onSave();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onSave, canSave]);
}
