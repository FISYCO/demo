"use client";

import { Box } from "@chakra-ui/react";

import type { RefreshBarProps } from "./RefreshBar.types";

/**
 * Тонкая полоса фонового обновления (#1761). Скелетон — только на первую загрузку; когда данные уже на экране и
 * приходит свежая версия, содержимое остаётся на месте, а сверху бежит эта полоса.
 *
 * Появляется с задержкой 300 мс: быстрый ответ не успевает её зажечь, и экран не моргает на каждый запрос. Гаснет
 * сразу. Переход между страницами ждёт 100 мс (`delay="navigation"`, #1804): клик должен ответить сразу. Для читалки она скрыта — обновление уже показанных данных не событие, о котором стоит объявлять.
 */
export function RefreshBar({
  active,
  placement = "inline",
  delay = "background",
  "data-testid": testId = "RefreshBar",
}: RefreshBarProps) {
  const top = placement === "top";

  return (
    <Box
      data-testid={testId}
      data-active={active ? "" : undefined}
      data-motion-keep=""
      aria-hidden="true"
      colorPalette="brand"
      position={top ? "absolute" : "relative"}
      insetX={top ? "0" : undefined}
      top={top ? "0" : undefined}
      zIndex={top ? "1" : undefined}
      height="2px"
      overflow="hidden"
      pointerEvents="none"
      opacity={active ? 1 : 0}
      transitionProperty="opacity"
      transitionDuration="moderate"
      transitionDelay={active ? (delay === "navigation" ? "100ms" : "300ms") : "0ms"}
    >
      <Box
        position="absolute"
        insetY="0"
        width="40%"
        borderRadius="full"
        bg="colorPalette.solid"
        animation="fis-sweep 1.2s ease-in-out infinite"
        animationPlayState={active ? "running" : "paused"}
      />
    </Box>
  );
}
