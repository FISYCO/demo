import { ActionBar as BaseActionBar } from "@chakra-ui/react";

import type { ActionBarRootProps } from "../ActionBar.types";

export function Root(props: ActionBarRootProps) {
  return <BaseActionBar.Root closeOnInteractOutside={false} {...props} />;
}
