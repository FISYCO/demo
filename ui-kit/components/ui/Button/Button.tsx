import type { ReactNode } from "react";
import { cloneElement, forwardRef, isValidElement } from "react";
import { Button as BaseButton, Box } from "@chakra-ui/react";

import type { ButtonProps } from "./Button.types";

/** Высота кнопки по размеру — в токенах Chakra; кнопка с обрезкой подписи не бывает ниже неё. */
const SIZE_HEIGHT: Record<string, string> = { "2xs": "6", xs: "8", sm: "9", md: "10", lg: "11", xl: "12", "2xl": "16" };

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ colorPalette = "brand", "data-testid": testId = "Button", lineClamp, children, ...props }, ref) => {
    // Chakra на время загрузки без `loadingText` прячет текст через `visibility: hidden`, а такой
    // текст не попадает в доступное имя: читалка объявляла просто «кнопка». Строковую подпись
    // возвращаем именем кнопки; явный `aria-label` потребителя важнее.
    const loadingName = props.loading && !props.loadingText && typeof children === "string" ? children : undefined;

    // Обрезка строк (#1655, #1842) — у подписи, а не у кнопки. `line-clamp` работает только на блоке
    // `-webkit-box`: поставленный на саму кнопку, он делал её блочной — она растягивалась на всю колонку и теряла
    // выравнивание по высоте. Кнопка остаётся строчной по ширине подписи и не шире колонки; переносу нужна
    // отпущенная высота, но не ниже высоты размера — короткая подпись выглядит как у обычной кнопки.
    const size = typeof props.size === "string" ? props.size : "md";
    const clamp = lineClamp
      ? { whiteSpace: "normal" as const, height: "auto", minHeight: SIZE_HEIGHT[size], maxWidth: "full", py: "2" }
      : {};
    const label = (content: ReactNode) =>
      lineClamp ? (
        <Box as="span" lineClamp={lineClamp} textAlign="start">
          {content}
        </Box>
      ) : (
        content
      );
    // С `asChild` кнопкой становится дочерний элемент (ссылка): подпись оборачивается внутри него.
    const content =
      props.asChild && isValidElement<{ children?: ReactNode }>(children)
        ? cloneElement(children, undefined, label(children.props.children))
        : label(children);

    return (
      <BaseButton
        ref={ref}
        colorPalette={colorPalette}
        aria-label={loadingName}
        {...clamp}
        {...props}
        data-testid={testId}
      >
        {content}
      </BaseButton>
    );
  },
);
Button.displayName = "Button";
