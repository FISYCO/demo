"use client";

import type { RefObject } from "react";
import { useEffect, useState } from "react";

export interface UseInViewOptions {
  /** Сработать один раз и больше не следить: для появлений и счётчиков. */
  once?: boolean;
  /** Доля элемента на экране, с которой он считается видимым. */
  threshold?: number;
  rootMargin?: string;
}

/**
 * Элемент на экране (#1784). Без `IntersectionObserver` (старый браузер, тест без окна) — «виден»: содержимое
 * показывается, а не ждёт события, которого не будет.
 */
export function useInView(ref: RefObject<Element | null>, options: UseInViewOptions = {}): boolean {
  const { once = false, threshold = 0, rootMargin } = options;
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;
        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      { threshold, rootMargin },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [ref, once, threshold, rootMargin]);

  return inView;
}
