import type { ReactNode } from "react";
import type { SystemContext } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";

import { ColorModeProvider } from "./components/ui/ColorMode";
import { system as defaultSystem } from "./theme";

interface ThemeProviderProps {
  system?: SystemContext;
  children: ReactNode;
}

export function ThemeProvider({ system: systemProp, children }: ThemeProviderProps) {
  // Провайдер цветового режима стоит снаружи Chakra, а не внутри.
  //
  // Внутри он оказывался соседом глобальных стилей emotion, и порядок этих соседей на сервере и на
  // клиенте не совпадал: React считал разметку разошедшейся и перерисовывал всё поддерево (#1546).
  // Снаружи скрипт темы — первый ребёнок, и порядок сходится.
  return (
    <ColorModeProvider>
      <ChakraProvider value={systemProp ?? defaultSystem}>{children}</ChakraProvider>
    </ColorModeProvider>
  );
}
