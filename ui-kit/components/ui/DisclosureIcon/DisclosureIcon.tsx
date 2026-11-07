"use client";

import { Icon } from "@chakra-ui/react";
import { AngleDown } from "../../../../src/icons/angle-down";
import { AngleRight } from "../../../../src/icons/angle-right";

import type { DisclosureIconProps } from "./DisclosureIcon.types";

/**
 * Стрелка раскрытия (#1761): поворачивается на пружине вместе с открытием, а не подменяется другой иконкой. Так
 * видно, что это одна и та же стрелка и что блок раскрылся, а не открылся новый. Иконка декоративная — состояние
 * сообщает `aria-expanded` на кнопке.
 *
 * Размер у шеврона один на всё приложение (#1777): раньше он брал кегль соседнего текста и в каждом месте был свой.
 */
export function DisclosureIcon({
  open,
  direction = "right",
  "data-testid": testId = "DisclosureIcon",
}: DisclosureIconProps) {
  const angle = direction === "right" ? 90 : 180;

  return (
    <Icon
      as={direction === "right" ? AngleRight : AngleDown}
      data-testid={testId}
      data-state={open ? "open" : "closed"}
      aria-hidden="true"
      size="xs"
      flexShrink={0}
      color="fg.muted"
      transform={open ? `rotate(${angle}deg)` : "rotate(0deg)"}
      transitionProperty="transform"
      transitionDuration="springPress"
      transitionTimingFunction="springPress"
    />
  );
}
