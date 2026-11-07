"use client";

import { useCallback, useRef } from "react";

export type UseInfiniteScrollOptions = {
  hasNextPage: boolean;
  isFetchingNextPage: boolean;
  fetchNextPage: () => void;
  rootMargin?: string;
};

/**
 * Догрузка следующей порции, когда метка доходит до края видимой области (#1515).
 *
 * Списки листаются курсором, а не номерами страниц, поэтому листает их не компонент навигации, а этот
 * хук: `IntersectionObserver` на метке в конце списка. Бизнес-логики здесь нет — откуда берётся
 * следующая порция, решает вызывающий.
 */
export function useInfiniteScroll({
  hasNextPage,
  isFetchingNextPage,
  fetchNextPage,
  rootMargin = "200px",
}: UseInfiniteScrollOptions) {
  const observerRef = useRef<IntersectionObserver | null>(null);

  const sentinelRef = useCallback(
    (node: HTMLElement | null) => {
      if (observerRef.current) observerRef.current.disconnect();
      if (!node) return;
      observerRef.current = new IntersectionObserver(
        (entries) => {
          if (entries[0]?.isIntersecting && hasNextPage && !isFetchingNextPage) {
            fetchNextPage();
          }
        },
        { rootMargin },
      );
      observerRef.current.observe(node);
    },
    [hasNextPage, isFetchingNextPage, fetchNextPage, rootMargin],
  );

  return { sentinelRef };
}
