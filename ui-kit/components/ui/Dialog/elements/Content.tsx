"use client";
import { Dialog as BaseDialog, Portal } from "@chakra-ui/react";

import type { DialogContentProps } from "../Dialog.types";

export function Content({
  "data-testid": testId = "Dialog__Content",
  backdrop = true,
  children,
  ...props
}: DialogContentProps) {
  return (
    <Portal>
      {backdrop ? (
        // Подложка затемняет и слегка размывает страницу (#1817): радиус небольшой, проявляется вместе с затемнением.
        // В #1766 размытие снимали из-за перерисовки на каждом кадре; замер открытия кадров не роняет, но стоимость
        // ложится на компоновщик видеокарты — если на слабой машине открытие задёргается, первым убирать его.
        <BaseDialog.Backdrop data-testid="Dialog__Backdrop" bg="bg/70" backdropFilter="blur(4px)" />
      ) : null}
      <BaseDialog.Positioner data-testid="Dialog__Positioner">
        <BaseDialog.Content data-testid={testId} {...props}>
          {children}
        </BaseDialog.Content>
      </BaseDialog.Positioner>
    </Portal>
  );
}
