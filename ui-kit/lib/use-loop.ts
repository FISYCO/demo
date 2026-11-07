"use client";

import type { RefObject } from "react";
import { useEffect, useState } from "react";

import { useInView } from "./use-in-view";
import { useReducedMotion } from "./use-reduced-motion";

export interface LoopStep<T extends string> {
  id: T;
  /** Сколько шаг держится на экране, мс. */
  ms: number;
}

/**
 * Петля шагов для живых примеров (#1784): шаги сменяют друг друга по кругу. Петля стоит, пока блок за экраном или
 * вкладка в фоне, и по `paused` — человек может её остановить (WCAG 2.2.2: самообновляющееся содержимое должно
 * останавливаться). При уменьшении движения петли нет: показывается шаг `rest` — самый говорящий кадр.
 */
export function useLoop<T extends string>(
  ref: RefObject<Element | null>,
  steps: readonly LoopStep<T>[],
  { rest, paused = false }: { rest: T; paused?: boolean },
): T {
  const reduced = useReducedMotion();
  const inView = useInView(ref, { threshold: 0.2 });
  const [index, setIndex] = useState(0);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const onVisibility = () => setHidden(document.visibilityState === "hidden");
    onVisibility();
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  const running = !reduced && !paused && inView && !hidden;
  const current = steps[index % steps.length];

  useEffect(() => {
    if (!running || !current) return;
    const timer = setTimeout(() => setIndex((value) => (value + 1) % steps.length), current.ms);
    return () => clearTimeout(timer);
  }, [running, current, steps.length]);

  if (reduced) return rest;
  return current?.id ?? rest;
}
