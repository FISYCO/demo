import type { ReactNode } from "react";
import type { TextProps as BaseTextProps } from "@chakra-ui/react";

/**
 * Стилевые пропсы здесь оставлены намеренно: `TruncatedText` — это `Text`, который умеет показать
 * себя целиком, и потребитель задаёт ему размер и цвет так же, как обычному тексту. `UIProps`
 * снимает стилевые пропсы у составных компонентов, а текстовые примитивы под это правило не
 * попадают — иначе замена `Text` на `TruncatedText` требовала бы переверстать каждую строку.
 */
export interface TruncatedTextProps extends Omit<BaseTextProps, "children"> {
  children: ReactNode;
  /**
   * Что показать в подсказке, если это не сам текст. Нужно, когда в строке лежит разметка —
   * подсветка поиска, значок, — а прочитать человек должен исходное значение.
   */
  tooltip?: ReactNode;
}
