"use client";

import { use, ViewTransition } from "react";

import { transitionName } from "../../../../lib/transition-name";
import type { AnimatedListItemProps } from "../AnimatedList.types";
import { AnimatedListScope } from "./Root";

/**
 * Элемент списка (#1761): новый вырастает на своём месте, удалённый сжимается и гаснет, остальные едут на пружине.
 * Анимация срабатывает, когда список меняется переходом — данные пропускаются через `useMotionData`.
 */
export function Item({ id, children }: AnimatedListItemProps) {
  const scope = use(AnimatedListScope);
  return (
    <ViewTransition
      name={transitionName(scope, id)}
      enter="fis-grow"
      exit="fis-shrink"
      update="fis-move"
      default="none"
    >
      {children}
    </ViewTransition>
  );
}
