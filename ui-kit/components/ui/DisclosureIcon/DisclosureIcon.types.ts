export interface DisclosureIconProps {
  /** Раскрыто ли то, чем управляет кнопка. */
  open: boolean;
  /** Куда смотрит стрелка в закрытом состоянии: `right` — пункт дерева, `down` — выпадающий блок. */
  direction?: "right" | "down";
  "data-testid"?: string;
}
