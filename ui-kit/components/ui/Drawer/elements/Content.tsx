"use client";
import { Drawer as BaseDrawer, Portal } from "@chakra-ui/react";

import type { DrawerContentProps } from "../Drawer.types";

/** Inspector width: no wider than a comfortable reading span, and never covering the whole page. */
const WIDE_MAX_WIDTH = { base: "100vw", lg: "min(1400px, calc(100vw - 280px))" };

export function Content({
  backdrop = true,
  wide = false,
  children,
  "data-testid": testId = "Drawer__Content",
  ...props
}: DrawerContentProps) {
  return (
    <Portal>
      {backdrop ? (
        // Подложка затемняет и слегка размывает страницу (#1817): радиус небольшой, проявляется вместе с затемнением.
        // В #1766 размытие снимали из-за перерисовки на каждом кадре; замер открытия кадров не роняет, но стоимость
        // ложится на компоновщик видеокарты — если на слабой машине открытие задёргается, первым убирать его.
        <BaseDrawer.Backdrop data-testid="Drawer__Backdrop" bg="bg/70" backdropFilter="blur(4px)" />
      ) : null}
      <BaseDrawer.Positioner data-testid="Drawer__Positioner" p="4">
        <BaseDrawer.Content data-testid={testId} {...props} borderRadius="l2" maxW={wide ? WIDE_MAX_WIDTH : undefined}>
          {children}
        </BaseDrawer.Content>
      </BaseDrawer.Positioner>
    </Portal>
  );
}
