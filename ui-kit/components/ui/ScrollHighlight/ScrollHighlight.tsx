"use client";

import { useRef } from "react";
import { chakra } from "@chakra-ui/react";

import { useScrollProgress } from "../../../lib/use-scroll-progress";
import type { ScrollHighlightProps } from "./ScrollHighlight.types";

/** Насколько приглушено ещё не прочитанное слово: текст различим, но очевидно впереди. */
const DIM = 0.22;

/**
 * Фраза, которая загорается по словам, пока её прокручивают (#1784). Ставится внутрь заголовка: разметка — строчные
 * элементы, читалке достаётся обычный текст. При уменьшении движения фраза сразу горит целиком.
 */
export function ScrollHighlight({ lead, emphasis, "data-testid": testId = "ScrollHighlight" }: ScrollHighlightProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const progress = useScrollProgress(ref, { start: 0.15, end: 0.6 });
  const leadWords = lead.split(" ");
  const emphasisWords = emphasis ? emphasis.split(" ") : [];
  const total = leadWords.length + emphasisWords.length;
  const lit = progress * total;

  const word = (text: string, index: number, strong: boolean) => (
    <chakra.span
      key={`${index}-${text}`}
      opacity={lit > index + 0.2 ? 1 : DIM}
      fontWeight={strong ? "semibold" : undefined}
      transitionProperty="opacity"
      transitionDuration="moderate"
    >
      {text}
      {index < total - 1 ? " " : null}
    </chakra.span>
  );

  return (
    <chakra.span ref={ref} data-testid={testId} data-progress={progress === 1 ? "done" : "reading"}>
      {leadWords.map((text, index) => word(text, index, false))}
      {emphasisWords.map((text, index) => word(text, leadWords.length + index, true))}
    </chakra.span>
  );
}
