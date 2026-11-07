import type { HTMLChakraProps, SystemStyleObject } from "@chakra-ui/react";
import { chakra, useSlotRecipe } from "@chakra-ui/react";
import { createContext, useContext } from "react";

import { segmentGroupSlotRecipe } from "./SegmentGroup.recipe";

type Slot = "root" | "label" | "item" | "itemText" | "itemControl" | "indicator";
const StylesContext = createContext<Record<Slot, SystemStyleObject> | null>(null);

function useStyles() {
  const styles = useContext(StylesContext);
  if (!styles) throw new Error("SegmentGroup parts must be inside SegmentGroup.Root");
  return styles;
}

export interface SegmentGroupRootProps extends Omit<HTMLChakraProps<"div">, "size"> {
  size?: "xs" | "sm" | "md" | "lg";
}

/** Сегментированный переключатель. */
function Root({ size = "md", ...rest }: SegmentGroupRootProps) {
  const styles = useSlotRecipe({ recipe: segmentGroupSlotRecipe })({ size });
  return (
    <StylesContext.Provider value={styles}>
      <chakra.div css={styles.root} {...rest} />
    </StylesContext.Provider>
  );
}

function Label(props: HTMLChakraProps<"span">) {
  return <chakra.span css={useStyles().label} {...props} />;
}

function Item(props: HTMLChakraProps<"div">) {
  return <chakra.div css={useStyles().item} {...props} />;
}

function ItemText(props: HTMLChakraProps<"span">) {
  return <chakra.span css={useStyles().itemText} {...props} />;
}

function ItemControl(props: HTMLChakraProps<"div">) {
  return <chakra.div css={useStyles().itemControl} {...props} />;
}

function Indicator(props: HTMLChakraProps<"span">) {
  return <chakra.span css={useStyles().indicator} {...props} />;
}

export const SegmentGroup = { Root, Label, Item, ItemText, ItemControl, Indicator };
