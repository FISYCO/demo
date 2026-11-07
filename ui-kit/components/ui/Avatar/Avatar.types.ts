import type { ReactNode } from "react";
import type { AvatarRootProps as BaseAvatarRootProps } from "@chakra-ui/react";

import type { UIProps } from "../../../lib/component-types";

export type AvatarProps = Omit<UIProps<BaseAvatarRootProps>, "children"> & {
  name?: string;
  src?: string;
  fallback?: ReactNode;
  randomColor?: boolean;
};
