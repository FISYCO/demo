"use client";

import { ActionBar as BaseActionBar, Portal, Theme } from "@chakra-ui/react";

import { useColorMode } from "../../ColorMode";
import type { ActionBarContentProps } from "../ActionBar.types";

export function Content({ appearance, ...props }: ActionBarContentProps) {
  const { colorMode } = useColorMode();
  const resolvedAppearance = appearance === "inverted" ? (colorMode === "dark" ? "light" : "dark") : appearance;

  const bar = (
    // Chakra's ActionBar recipe ships no z-index on the positioner (auto), so the
    // bar renders under fixed app chrome (e.g. the cookie banner) and its clicks
    // are swallowed. Keep it above page content/banners, below modals/toasts.
    <BaseActionBar.Positioner zIndex="overlay">
      {/* Chakra's default content padding (py 2.5 / px 3) is bloated for our
          bars — tighten it here so all consumers get a compact pill. */}
      <BaseActionBar.Content py="1.5" px="2" gap="2" {...props} />
    </BaseActionBar.Positioner>
  );

  return (
    <Portal>
      {resolvedAppearance ? (
        // Scope the bar to a forced color mode so the panel and its children
        // (text, buttons) render fully themed-inverted — not hand-painted.
        <Theme appearance={resolvedAppearance} hasBackground={false}>
          {bar}
        </Theme>
      ) : (
        bar
      )}
    </Portal>
  );
}
