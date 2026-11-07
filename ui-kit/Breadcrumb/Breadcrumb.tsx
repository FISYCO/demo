import type { HTMLChakraProps, SystemStyleObject } from "@chakra-ui/react";
import { chakra, useSlotRecipe } from "@chakra-ui/react";
import { createContext, useContext } from "react";

import { breadcrumbSlotRecipe } from "./Breadcrumb.recipe";

type Slot = "link" | "currentLink" | "item" | "list" | "root" | "ellipsis" | "separator";
const StylesContext = createContext<Record<Slot, SystemStyleObject> | null>(null);

function useStyles() {
  const styles = useContext(StylesContext);
  if (!styles) throw new Error("Breadcrumb parts must be inside Breadcrumb.Root");
  return styles;
}

export interface BreadcrumbRootProps extends Omit<HTMLChakraProps<"div">, "variant" | "size"> {
  variant?: "underline" | "plain";
  size?: "sm" | "md" | "lg";
}

/** Хлебные крошки. */
function Root({ variant = "plain", size = "md", ...rest }: BreadcrumbRootProps) {
  const styles = useSlotRecipe({ recipe: breadcrumbSlotRecipe })({ variant, size });
  return (
    <StylesContext.Provider value={styles}>
      <chakra.div css={styles.root} {...rest} />
    </StylesContext.Provider>
  );
}

function Link(props: HTMLChakraProps<"div">) {
  return <chakra.div css={useStyles().link} {...props} />;
}

function CurrentLink(props: HTMLChakraProps<"div">) {
  return <chakra.div css={useStyles().currentLink} {...props} />;
}

function Item(props: HTMLChakraProps<"div">) {
  return <chakra.div css={useStyles().item} {...props} />;
}

function List(props: HTMLChakraProps<"div">) {
  return <chakra.div css={useStyles().list} {...props} />;
}

function Ellipsis(props: HTMLChakraProps<"div">) {
  return <chakra.div css={useStyles().ellipsis} {...props} />;
}

function Separator(props: HTMLChakraProps<"div">) {
  return <chakra.div css={useStyles().separator} {...props} />;
}

export const Breadcrumb = { Root, Link, CurrentLink, Item, List, Ellipsis, Separator };
