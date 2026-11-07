"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { Box } from "@chakra-ui/react";

import type { AutoHeightProps } from "./AutoHeight.types";

/**
 * Контейнер, который меняет высоту плавно (#1761): пришли новые строки, раскрылась ошибка, исчезла подсказка — всё,
 * что ниже, не прыгает, а съезжает на пружине.
 *
 * Высота содержимого меряется наблюдателем и задаётся числом, потому что переход от `auto` к `auto` браузер не
 * анимирует. Содержимое обрезается только на время самого перехода — в покое кольцо фокуса и тени видны целиком.
 */
export function AutoHeight({ children, "data-testid": testId }: AutoHeightProps) {
  const inner = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number | undefined>(undefined);
  const [moving, setMoving] = useState(false);

  useLayoutEffect(() => {
    const node = inner.current;
    if (!node) return;
    const observer = new ResizeObserver(([entry]) => {
      const next = entry?.borderBoxSize?.[0]?.blockSize ?? node.offsetHeight;
      setHeight((previous) => {
        if (previous !== undefined && Math.abs(previous - next) > 0.5) setMoving(true);
        return next;
      });
    });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Box
      data-testid={testId}
      height={height === undefined ? "auto" : `${height}px`}
      overflow={moving ? "hidden" : "visible"}
      transitionProperty="height"
      transitionDuration="spring"
      transitionTimingFunction="spring"
      onTransitionEnd={(event) => {
        if (event.target === event.currentTarget) setMoving(false);
      }}
    >
      <Box ref={inner}>{children}</Box>
    </Box>
  );
}
