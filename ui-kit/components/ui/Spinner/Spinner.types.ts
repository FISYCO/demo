import type { SpinnerProps as BaseSpinnerProps } from "@chakra-ui/react";

import type { UIProps } from "../../../lib/component-types";

export type SpinnerProps = UIProps<BaseSpinnerProps> & {
  /** Semantic color token for the spinner. Defaults to colorPalette contrast. */
  color?: "fg" | "fg.subtle" | "fg.muted" | "fg.inverted" | "brand.fg";
};
