import type { ReactNode } from "react";

export interface ScrollRevealProps {
  children: ReactNode;
  /** Задержка появления, мс: соседние блоки проявляются каскадом. */
  delay?: number;
  "data-testid"?: string;
}
