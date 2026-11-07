import { defineSlotRecipe } from "@chakra-ui/react";

/**
 * Card recipe override.
 *
 * Adds `interactive` variant = outline look + pointer cursor + hover border.
 * Replaces `layerStyle="card.interactive"` with `variant="interactive"`.
 *
 * Рамка карточки — `border.muted` (#1758): на `bg.panel` токен `border` давал вдвое больший перепад, чем нужен
 * поверхности, и рамка спорила с содержимым. Наведение — шаг вверх до `border`, а не до `border.emphasized`.
 */
export const cardRecipe = defineSlotRecipe({
  className: "chakra-card",
  slots: ["root", "header", "body", "footer", "title", "description"],
  base: {
    root: {
      // Содержимое обрезается по скруглению карточки (#1809): залитая полоса или таблица у края иначе показывала
      // квадратные углы сквозь скруглённую рамку. `clip`, а не `hidden`: карточка не становится областью прокрутки, и
      // липкое внутри неё продолжает липнуть к странице.
      overflow: "clip",
    },
  },
  variants: {
    variant: {
      outline: {
        root: {
          borderColor: "border.muted",
        },
      },
      interactive: {
        root: {
          // Нажимаемая карточка — ссылка или кнопка (`asChild`, #1772): у кнопки свой выключенный текст по центру и
          // ширина по содержимому, рецепт возвращает карточке её вид. Кольцо фокуса — как у остальных элементов.
          textAlign: "start",
          "&:is(button)": { width: "100%" },
          focusVisibleRing: "outside",
          // Выбираемая плитка (#1774) — та же карточка-кнопка с `aria-pressed`: выбранная обведена акцентом.
          "&[aria-pressed=true]": { borderColor: "colorPalette.solid", _hover: { borderColor: "colorPalette.solid" } },
          bg: "bg.panel",
          borderWidth: "1px",
          borderColor: "border.muted",
          cursor: "pointer",
          // Нажатие (#1761): карточка проседает и упруго возвращается; цвета — обычным переходом, масштаб — пружиной.
          transition:
            "background-color var(--chakra-durations-moderate), border-color var(--chakra-durations-moderate), box-shadow var(--chakra-durations-moderate), transform var(--chakra-durations-spring-press) var(--chakra-easings-spring-press)",
          _hover: { borderColor: "border" },
          _active: {
            borderColor: "border",
            bg: "bg.subtle",
            transform: "scale(0.985)",
            transitionDuration:
              "var(--chakra-durations-moderate), var(--chakra-durations-moderate), var(--chakra-durations-moderate), var(--chakra-durations-faster)",
          },
          // Кликабельная карточка доступна и с клавиатуры, а значит обязана показывать фокус:
          // без кольца она для клавиатурного пользователя неотличима от соседних.
          _focusVisible: { outline: "2px solid", outlineColor: "brand.focusRing", outlineOffset: "2px" },
        },
      },
    },
  },
});
