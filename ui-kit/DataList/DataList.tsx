import type { HTMLChakraProps, SystemStyleObject } from "@chakra-ui/react";
import { chakra, useSlotRecipe } from "@chakra-ui/react";
import { createContext, useContext } from "react";

import { dataListSlotRecipe } from "./DataList.recipe";

type Slot = "root" | "item" | "itemLabel" | "itemValue";
const StylesContext = createContext<Record<Slot, SystemStyleObject> | null>(null);

function useStyles() {
  const styles = useContext(StylesContext);
  if (!styles) throw new Error("DataList parts must be inside DataList.Root");
  return styles;
}

export interface DataListRootProps extends Omit<HTMLChakraProps<"div">, "orientation" | "size" | "variant"> {
  orientation?: "horizontal" | "vertical";
  size?: "sm" | "md" | "lg";
  variant?: "subtle" | "bold";
}

/** Список «подпись — значение». */
function Root({ orientation = "vertical", size = "md", variant = "subtle", ...rest }: DataListRootProps) {
  const styles = useSlotRecipe({ recipe: dataListSlotRecipe })({ orientation, size, variant });
  return (
    <StylesContext.Provider value={styles}>
      <chakra.div css={styles.root} {...rest} />
    </StylesContext.Provider>
  );
}

function Item(props: HTMLChakraProps<"div">) {
  return <chakra.div css={useStyles().item} {...props} />;
}

function ItemLabel(props: HTMLChakraProps<"div">) {
  return <chakra.div css={useStyles().itemLabel} {...props} />;
}

function ItemValue(props: HTMLChakraProps<"div">) {
  return <chakra.div css={useStyles().itemValue} {...props} />;
}

export const DataList = { Root, Item, ItemLabel, ItemValue };
