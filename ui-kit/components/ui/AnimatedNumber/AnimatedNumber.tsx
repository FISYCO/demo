"use client";

import { chakra, VisuallyHidden } from "@chakra-ui/react";

import type { AnimatedNumberProps } from "./AnimatedNumber.types";

const DIGITS = "0123456789";
/**
 * Цифры столбиком: по одной на строку. `\A ` — перевод строки в `content`; пробел после него обязателен, иначе
 * следующая цифра читается как продолжение шестнадцатеричного кода (`\A1` — это «¡»).
 */
const COLUMN = `"${DIGITS.split("").join("\\A ")}"`;

/**
 * Число, которое меняется прокруткой, как счётчик (#1761): каждая цифра — колонка, которая едет к своему значению на
 * пружине. Так видно, что значение изменилось и в какую сторону, а не просто подменилось.
 *
 * Колонки привязаны к разряду справа: при `99 → 100` старые разряды доезжают, новый появляется сразу. Не цифры
 * (пробел, запятая, знак процента) стоят на месте. Читалке отдаётся само число скрытым текстом, колонки от неё
 * скрыты: `aria-label` на элементе без роли читалки пропускают.
 */
export function AnimatedNumber({ value, format = String, "data-testid": testId }: AnimatedNumberProps) {
  const text = format(value);
  const chars = text.split("");

  return (
    <chakra.span data-testid={testId} display="inline-flex" fontVariantNumeric="tabular-nums">
      <VisuallyHidden>{text}</VisuallyHidden>
      {chars.map((char, index) => {
        const fromRight = chars.length - index;
        const digit = DIGITS.indexOf(char);
        if (digit === -1) {
          return (
            <chakra.span key={`c-${fromRight}`} aria-hidden="true">
              {char}
            </chakra.span>
          );
        }
        return (
          <chakra.span key={`d-${fromRight}`} aria-hidden="true" display="inline-block" height="1lh" overflow="hidden">
            {/* Колонка цифр нарисована псевдоэлементом: в DOM нет десяти лишних цифр, и поиск по тексту (читалка,
                тесты) видит одно число. */}
            <chakra.span
              display="block"
              whiteSpace="pre"
              transform={`translateY(${-digit}lh)`}
              transitionProperty="transform"
              transitionDuration="spring"
              transitionTimingFunction="spring"
              _before={{ content: COLUMN }}
            />
          </chakra.span>
        );
      })}
    </chakra.span>
  );
}
