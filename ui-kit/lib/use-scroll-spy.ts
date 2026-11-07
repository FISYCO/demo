"use client";

import type { RefObject } from "react";
import { useEffect, useState } from "react";

/**
 * Какой шаг сейчас активен (#1784): последний из элементов, чей верх поднялся выше линии чтения (по умолчанию 55%
 * высоты окна). Для закреплённых историй: шаги прокручиваются, сцена рядом меняется под активный шаг.
 */
export function useScrollSpy(refs: RefObject<Element | null>[], { line = 0.55 }: { line?: number } = {}): number {
  const [active, setActive] = useState(0);

  useEffect(() => {
    let frame = 0;
    const measure = () => {
      frame = 0;
      let current = 0;
      refs.forEach((ref, index) => {
        const node = ref.current;
        if (node && node.getBoundingClientRect().top < window.innerHeight * line) current = index;
      });
      setActive(current);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(measure);
    };
    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [refs, line]);

  return active;
}
