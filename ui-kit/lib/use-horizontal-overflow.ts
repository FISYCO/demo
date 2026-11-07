"use client";

import type { RefObject } from "react";
import { useLayoutEffect } from "react";

/** Сколько пикселей оставить до края, прокручивая выбранный пункт в видимую часть. */
const REVEAL_GAP = 24;

/**
 * Горизонтальная полоса пунктов, которая не помещается в строку (#1808): вкладки, сегменты.
 *
 * - Ставит на элемент `data-fade-start` / `data-fade-end`, когда за краем есть ещё пункты: рецепт гасит этот край, и
 *   видно, что полосу можно листать.
 * - Держит выбранный пункт (`selectedSelector`) в видимой части: при выборе и при смене ширины полоса прокручивается
 *   к нему сама. Прокручивается только полоса, а не страница — `scrollIntoView` двигал бы и окно по вертикали.
 */
export function useHorizontalOverflow(ref: RefObject<HTMLElement | null>, selectedSelector: string) {
  useLayoutEffect(() => {
    const element = ref.current;
    if (!element) return;

    const updateEdges = () => {
      element.toggleAttribute("data-fade-start", element.scrollLeft > 1);
      element.toggleAttribute("data-fade-end", element.scrollLeft + element.clientWidth < element.scrollWidth - 1);
    };
    const revealSelected = () => {
      const selected = element.querySelector(selectedSelector);
      if (!(selected instanceof HTMLElement)) return;
      const box = element.getBoundingClientRect();
      const item = selected.getBoundingClientRect();
      if (item.left < box.left) element.scrollLeft -= box.left - item.left + REVEAL_GAP;
      else if (item.right > box.right) element.scrollLeft += item.right - box.right + REVEAL_GAP;
    };
    const sync = () => {
      revealSelected();
      updateEdges();
    };

    sync();
    element.addEventListener("scroll", updateEdges, { passive: true });
    const resize = new ResizeObserver(sync);
    resize.observe(element);
    const mutations = new MutationObserver(sync);
    mutations.observe(element, {
      subtree: true,
      childList: true,
      attributes: true,
      attributeFilter: ["data-selected", "data-state"],
    });
    return () => {
      element.removeEventListener("scroll", updateEdges);
      resize.disconnect();
      mutations.disconnect();
    };
  }, [ref, selectedSelector]);
}

/** Маска краёв для рецепта: гаснет та сторона, за которой есть ещё пункты. */
export const horizontalOverflowFade = {
  "--fade-size": "24px",
  "&[data-fade-end]": {
    maskImage: "linear-gradient(to right, black calc(100% - var(--fade-size)), transparent)",
  },
  "&[data-fade-start]": {
    maskImage: "linear-gradient(to left, black calc(100% - var(--fade-size)), transparent)",
  },
  "&[data-fade-start][data-fade-end]": {
    maskImage:
      "linear-gradient(to right, transparent, black var(--fade-size), black calc(100% - var(--fade-size)), transparent)",
  },
} as const;
