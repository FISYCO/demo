import type { HTMLChakraProps, SystemStyleObject } from "@chakra-ui/react";
import { chakra, useSlotRecipe } from "@chakra-ui/react";
import { createContext, useContext } from "react";

import { selectSlotRecipe } from "./Select.recipe";

type Slot = "root" | "label" | "control" | "trigger" | "indicator" | "indicatorGroup" | "clearTrigger" | "positioner" | "content" | "item" | "itemText" | "itemIndicator" | "itemGroup" | "itemGroupLabel" | "valueText";
const StylesContext = createContext<Record<Slot, SystemStyleObject> | null>(null);

function useStyles() {
  const styles = useContext(StylesContext);
  if (!styles) throw new Error("Select parts must be inside Select.Root");
  return styles;
}

export interface SelectRootProps extends Omit<HTMLChakraProps<"div">, "variant" | "size"> {
  variant?: "outline" | "subtle" | "ghost";
  size?: "xs" | "sm" | "md" | "lg";
}

/** Выбор из списка. */
function Root({ variant = "outline", size = "md", ...rest }: SelectRootProps) {
  const styles = useSlotRecipe({ recipe: selectSlotRecipe })({ variant, size });
  return (
    <StylesContext.Provider value={styles}>
      <chakra.div css={styles.root} {...rest} />
    </StylesContext.Provider>
  );
}

function Label(props: HTMLChakraProps<"span">) {
  return <chakra.span css={useStyles().label} {...props} />;
}

function Control(props: HTMLChakraProps<"div">) {
  return <chakra.div css={useStyles().control} {...props} />;
}

function Trigger(props: HTMLChakraProps<"button">) {
  return <chakra.button css={useStyles().trigger} {...props} />;
}

function Indicator(props: HTMLChakraProps<"span">) {
  return <chakra.span css={useStyles().indicator} {...props} />;
}

function IndicatorGroup(props: HTMLChakraProps<"div">) {
  return <chakra.div css={useStyles().indicatorGroup} {...props} />;
}

function ClearTrigger(props: HTMLChakraProps<"button">) {
  return <chakra.button css={useStyles().clearTrigger} {...props} />;
}

function Positioner(props: HTMLChakraProps<"div">) {
  return <chakra.div css={useStyles().positioner} {...props} />;
}

function Content(props: HTMLChakraProps<"div">) {
  return <chakra.div css={useStyles().content} {...props} />;
}

function Item(props: HTMLChakraProps<"div">) {
  return <chakra.div css={useStyles().item} {...props} />;
}

function ItemText(props: HTMLChakraProps<"span">) {
  return <chakra.span css={useStyles().itemText} {...props} />;
}

function ItemIndicator(props: HTMLChakraProps<"span">) {
  return <chakra.span css={useStyles().itemIndicator} {...props} />;
}

function ItemGroup(props: HTMLChakraProps<"div">) {
  return <chakra.div css={useStyles().itemGroup} {...props} />;
}

function ItemGroupLabel(props: HTMLChakraProps<"div">) {
  return <chakra.div css={useStyles().itemGroupLabel} {...props} />;
}

function ValueText(props: HTMLChakraProps<"span">) {
  return <chakra.span css={useStyles().valueText} {...props} />;
}

export const Select = { Root, Label, Control, Trigger, Indicator, IndicatorGroup, ClearTrigger, Positioner, Content, Item, ItemText, ItemIndicator, ItemGroup, ItemGroupLabel, ValueText };
