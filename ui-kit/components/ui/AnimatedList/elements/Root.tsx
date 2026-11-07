"use client";

import { createContext, useId } from "react";

import { transitionName } from "../../../../lib/transition-name";
import type { AnimatedListRootProps } from "../AnimatedList.types";

export const AnimatedListScope = createContext("");

/**
 * Пространство имён элементов одного списка (#1761). Своей разметки нет: сетку или стек задаёт потребитель.
 */
export function Root({ children }: AnimatedListRootProps) {
  const scope = transitionName(useId());
  return <AnimatedListScope value={scope}>{children}</AnimatedListScope>;
}
