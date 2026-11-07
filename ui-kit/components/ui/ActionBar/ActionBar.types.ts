import type { ActionBar as BaseActionBar } from "@chakra-ui/react";

import type { UIProps } from "../../../lib/component-types";

export type ActionBarRootProps = UIProps<BaseActionBar.RootProps>;
export type ActionBarContentProps = UIProps<BaseActionBar.ContentProps> & {
  /**
   * Force a color-mode appearance for the bar, applied via a Theme scope inside
   * the portal (inverts the panel and its children — text, buttons — too).
   * Use `"inverted"` to render the opposite of the current page theme so the bar
   * stands out against same-tone content.
   */
  appearance?: "light" | "dark" | "inverted";
  /**
   * Имя полосы для читалки. Полоса рисуется как `role="dialog"`, и без имени её объявляют просто
   * «диалог», не говоря, о чём он. Обязательно: у полосы нет видимого заголовка, из которого имя
   * можно было бы взять.
   */
  "aria-label": string;
};
export type ActionBarSeparatorProps = UIProps<BaseActionBar.SeparatorProps>;
export type ActionBarSelectionTriggerProps = UIProps<BaseActionBar.SelectionTriggerProps>;
export type ActionBarCloseTriggerProps = UIProps<BaseActionBar.CloseTriggerProps>;
