"use client";

import { createContext, useId, ViewTransition } from "react";

import { transitionName } from "../../../../lib/transition-name";
import { useHandover } from "../../../../lib/use-handover";
import type { RevealRootProps } from "../Reveal.types";

/** Пространство имён пар одного `Reveal.Root`: два списка на странице не должны делить имена. */
export const RevealScope = createContext("");

/**
 * Передача от скелетона к контенту (#1761). Ничто не появляется из ниоткуда: скелетон быстро гаснет, контент
 * проявляется с небольшим подъёмом, а помеченные `Reveal.Slot` блоки перетекают из своих плашек.
 *
 * Смена состояния идёт через `startTransition`, потому что `<ViewTransition>` анимирует только переходы: обычный
 * `setState` применился бы мгновенно. Уже загруженные данные (из кеша) показываются сразу и без анимации — анимировать
 * то, что пользователь уже видел, значило бы мигать.
 */
export function Root({ loading, skeleton, children }: RevealRootProps) {
  const scope = transitionName(useId());
  const shown = useHandover(loading);

  return (
    <RevealScope value={scope}>
      {shown ? (
        <ViewTransition key="content" enter="fis-reveal" exit="fis-conceal" default="none">
          {children}
        </ViewTransition>
      ) : (
        <ViewTransition key="skeleton" enter="fis-reveal" exit="fis-conceal" default="none">
          {skeleton}
        </ViewTransition>
      )}
    </RevealScope>
  );
}
