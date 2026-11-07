import type { ReactNode } from "react";

export interface RevealRootProps {
  /**
   * Данных ещё нет: первая загрузка. Только она — фоновое обновление (`isFetching` при уже показанных данных) сюда
   * не передаётся: контент остаётся на месте, а обновление показывает `RefreshBar`.
   */
  loading: boolean;
  /** Скелетон той же формы, что и контент: он уступает место контенту, а не пропадает. */
  skeleton: ReactNode;
  children: ReactNode;
}

export interface RevealSlotProps {
  /**
   * Имя пары. Блок скелетона и настоящий блок с одним именем перетекают друг в друга: серая плашка меняет форму и
   * становится карточкой. Уникально внутри одного `Reveal.Root`.
   */
  name: string;
  children: ReactNode;
}
