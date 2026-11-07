import type { HTMLChakraProps, SystemStyleObject } from "@chakra-ui/react";
import { chakra, useSlotRecipe } from "@chakra-ui/react";
import { createContext, useContext } from "react";

import { menuSlotRecipe } from "./Menu.recipe";

type Slot = "arrow" | "arrowTip" | "content" | "contextTrigger" | "indicator" | "item" | "itemCommand" | "itemGroup" | "itemGroupLabel" | "itemIndicator" | "itemText" | "positioner" | "separator" | "trigger" | "triggerItem";
const StylesContext = createContext<Record<Slot, SystemStyleObject> | null>(null);

function useStyles() {
  const styles = useContext(StylesContext);
  if (!styles) throw new Error("Menu parts must be inside Menu.Root");
  return styles;
}

export interface MenuRootProps extends Omit<HTMLChakraProps<"div">, "variant" | "size"> {
  variant?: "subtle" | "solid";
  size?: "sm" | "md";
}

/** Выпадающее меню. */
function Root({ variant = "subtle", size = "md", ...rest }: MenuRootProps) {
  const styles = useSlotRecipe({ recipe: menuSlotRecipe })({ variant, size });
  return (
    <StylesContext.Provider value={styles}>
      <chakra.div css={styles.root} {...rest} />
    </StylesContext.Provider>
  );
}

function Arrow(props: HTMLChakraProps<"div">) {
  return <chakra.div css={useStyles().arrow} {...props} />;
}

function ArrowTip(props: HTMLChakraProps<"div">) {
  return <chakra.div css={useStyles().arrowTip} {...props} />;
}

function Content(props: HTMLChakraProps<"div">) {
  return <chakra.div css={useStyles().content} {...props} />;
}

function ContextTrigger(props: HTMLChakraProps<"button">) {
  return <chakra.button css={useStyles().contextTrigger} {...props} />;
}

function Indicator(props: HTMLChakraProps<"span">) {
  return <chakra.span css={useStyles().indicator} {...props} />;
}

function Item(props: HTMLChakraProps<"div">) {
  return <chakra.div css={useStyles().item} {...props} />;
}

function ItemCommand(props: HTMLChakraProps<"div">) {
  return <chakra.div css={useStyles().itemCommand} {...props} />;
}

function ItemGroup(props: HTMLChakraProps<"div">) {
  return <chakra.div css={useStyles().itemGroup} {...props} />;
}

function ItemGroupLabel(props: HTMLChakraProps<"div">) {
  return <chakra.div css={useStyles().itemGroupLabel} {...props} />;
}

function ItemIndicator(props: HTMLChakraProps<"span">) {
  return <chakra.span css={useStyles().itemIndicator} {...props} />;
}

function ItemText(props: HTMLChakraProps<"span">) {
  return <chakra.span css={useStyles().itemText} {...props} />;
}

function Positioner(props: HTMLChakraProps<"div">) {
  return <chakra.div css={useStyles().positioner} {...props} />;
}

function Separator(props: HTMLChakraProps<"div">) {
  return <chakra.div css={useStyles().separator} {...props} />;
}

function Trigger(props: HTMLChakraProps<"button">) {
  return <chakra.button css={useStyles().trigger} {...props} />;
}

function TriggerItem(props: HTMLChakraProps<"div">) {
  return <chakra.div css={useStyles().triggerItem} {...props} />;
}

export const Menu = { Root, Arrow, ArrowTip, Content, ContextTrigger, Indicator, Item, ItemCommand, ItemGroup, ItemGroupLabel, ItemIndicator, ItemText, Positioner, Separator, Trigger, TriggerItem };
