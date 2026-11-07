"use client";

import { use, ViewTransition } from "react";

import { transitionName } from "../../../../lib/transition-name";
import type { RevealSlotProps } from "../Reveal.types";
import { RevealScope } from "./Root";

/**
 * Пара «плашка скелетона ↔ настоящий блок» (#1761). Одинаковое имя в скелетоне и в контенте — и при передаче блок
 * меняет форму на месте вместо того, чтобы погаснуть и появиться заново. Имя ставится только на время перехода
 * (это делает React), поэтому блок не вырывается из своего контейнера в других анимациях.
 */
export function Slot({ name, children }: RevealSlotProps) {
  const scope = use(RevealScope);
  return (
    <ViewTransition name={transitionName(scope, name)} share="fis-morph" default="none">
      {children}
    </ViewTransition>
  );
}
