"use client";

import type { RefObject } from "react";
import { useLayoutEffect, useState } from "react";

import { useInView } from "./use-in-view";
import { useReducedMotion } from "./use-reduced-motion";

/**
 * Показан ли блок (#1784): на сервере и в первом экране — да, сразу; то, что начинается ниже окна, ждёт, пока до него
 * дойдут. Страница целая без движения — прячется только невидимое. При уменьшении движения — показан всегда.
 *
 * Основа для появлений, счётчиков и полос: всё, что «наполняется» при прокрутке, наполняется у всех одинаково.
 */
export function useScrollReveal(ref: RefObject<Element | null>): boolean {
  const reduced = useReducedMotion();
  const [belowFold, setBelowFold] = useState(false);
  const inView = useInView(ref, { once: true, rootMargin: "0px 0px -8% 0px" });

  useLayoutEffect(() => {
    const node = ref.current;
    if (!node || reduced) return;
    setBelowFold(node.getBoundingClientRect().top > window.innerHeight);
  }, [ref, reduced]);

  return reduced || !belowFold || inView;
}
