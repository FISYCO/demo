"use client";

import type { RefObject } from "react";
import { useEffect, useState } from "react";

import { useReducedMotion } from "./use-reduced-motion";

/**
 * Сколько блок прошёл по экрану (#1784): 0 — только показался снизу, 1 — ушёл за верх. Пересчёт раз в кадр и только
 * пока блок рядом с экраном; слушатель прокрутки пассивный. При уменьшении движения — сразу конечное состояние (1).
 *
 * `start` и `end` сужают отрезок: `start: 0.15, end: 0.6` — прогресс идёт, пока блок проходит от 15% до 60% пути.
 */
export function useScrollProgress(
  ref: RefObject<Element | null>,
  { start = 0, end = 1 }: { start?: number; end?: number } = {},
): number {
  const reduced = useReducedMotion();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node || reduced) return;
    let frame = 0;
    const measure = () => {
      frame = 0;
      const rect = node.getBoundingClientRect();
      const travelled = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
      const local = (travelled - start) / Math.max(0.0001, end - start);
      setProgress(Math.min(1, Math.max(0, local)));
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
  }, [ref, reduced, start, end]);

  return reduced ? 1 : progress;
}
