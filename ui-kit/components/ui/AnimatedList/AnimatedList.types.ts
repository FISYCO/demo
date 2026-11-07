import type { ReactNode } from "react";

export interface AnimatedListRootProps {
  children: ReactNode;
}

export interface AnimatedListItemProps {
  /** Стабильный ключ записи (id), а не индекс: по нему новый элемент отличается от сдвинувшегося. */
  id: string | number;
  children: ReactNode;
}
