"use client";

import { useEffect, useRef, useState } from "react";

import { MOTION } from "./motion";

/**
 * Подсветка изменившегося (#1761): значение, обновлённое в фоне, на секунду загорается и гаснет, чтобы было видно,
 * что изменилось. Первый показ не подсвечивается — это не изменение.
 *
 * Возвращает атрибут для разметки: `<Card.Root {...useChangeFlash(count)}>`. Сама анимация — `[data-changed]` в теме.
 */
export function useChangeFlash(value: unknown): { "data-changed"?: "" } {
  const previous = useRef(value);
  const [changed, setChanged] = useState(false);

  useEffect(() => {
    if (Object.is(previous.current, value)) return;
    previous.current = value;
    setChanged(true);
    const timer = setTimeout(() => setChanged(false), MOTION.flash);
    return () => clearTimeout(timer);
  }, [value]);

  return changed ? { "data-changed": "" } : {};
}
