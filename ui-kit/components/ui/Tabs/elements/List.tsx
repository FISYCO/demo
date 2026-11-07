"use client";
import { useCallback, useRef } from "react";
import { Tabs as BaseTabs } from "@chakra-ui/react";

import { useHorizontalOverflow } from "../../../../lib/use-horizontal-overflow";
import type { TabsListProps } from "../Tabs.types";

/**
 * Полоса вкладок (#1808): не помещается — листается внутри себя, гасит край, за которым есть ещё вкладки, и держит
 * выбранную в видимой части.
 */
export function List({ "data-testid": testId = "Tabs__List", ref, ...props }: TabsListProps) {
  const ownRef = useRef<HTMLDivElement | null>(null);
  useHorizontalOverflow(ownRef, "[data-selected]");
  const setRef = useCallback(
    (node: HTMLDivElement | null) => {
      ownRef.current = node;
      if (typeof ref === "function") ref(node);
      else if (ref) ref.current = node;
    },
    [ref],
  );
  return <BaseTabs.List ref={setRef} data-testid={testId} {...props} />;
}
