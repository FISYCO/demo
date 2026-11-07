"use client";

import { useRef } from "react";
import { chakra } from "@chakra-ui/react";

import { useScrollReveal } from "../../../lib/use-scroll-reveal";
import type { ScrollRevealProps } from "./ScrollReveal.types";

/**
 * Появление при прокрутке (#1784): блок ниже первого экрана поднимается на место на пружине, когда до него доходят.
 *
 * Страница целая без движения: на сервере и в первом экране блок виден сразу, прячется только то, что начинается ниже
 * окна, — до прокрутки его всё равно не видно. При уменьшении движения не прячется ничего.
 */
export function ScrollReveal({ children, delay = 0, "data-testid": testId = "ScrollReveal" }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const hidden = !useScrollReveal(ref);

  return (
    <chakra.div
      ref={ref}
      data-testid={testId}
      data-state={hidden ? "pending" : "shown"}
      opacity={hidden ? 0 : 1}
      transform={hidden ? "translateY(24px)" : "none"}
      transitionProperty="opacity, transform"
      transitionDuration="spring"
      transitionTimingFunction="spring"
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </chakra.div>
  );
}
