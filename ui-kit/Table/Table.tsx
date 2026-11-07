import type { HTMLChakraProps, SystemStyleObject } from "@chakra-ui/react";
import { chakra, useSlotRecipe } from "@chakra-ui/react";
import { createContext, useContext } from "react";

import { tableSlotRecipe } from "./Table.recipe";

type Slot = "root" | "header" | "body" | "row" | "columnHeader" | "cell" | "footer" | "caption";
const StylesContext = createContext<Record<Slot, SystemStyleObject> | null>(null);

function useStyles() {
  const styles = useContext(StylesContext);
  if (!styles) throw new Error("Table parts must be inside Table.Root");
  return styles;
}

export interface TableRootProps extends Omit<HTMLChakraProps<"table">, "interactive" | "stickyHeader" | "striped" | "showColumnBorder" | "variant" | "size"> {
  interactive?: boolean;
  stickyHeader?: boolean;
  striped?: boolean;
  showColumnBorder?: boolean;
  variant?: "line" | "outline";
  size?: "sm" | "md" | "lg";
}

/** Таблица. */
function Root({ interactive, stickyHeader, striped, showColumnBorder, variant = "line", size = "md", ...rest }: TableRootProps) {
  const styles = useSlotRecipe({ recipe: tableSlotRecipe })({ interactive, stickyHeader, striped, showColumnBorder, variant, size });
  return (
    <StylesContext.Provider value={styles}>
      <chakra.table css={styles.root} {...rest} />
    </StylesContext.Provider>
  );
}

function Header(props: HTMLChakraProps<"thead">) {
  return <chakra.thead css={useStyles().header} {...props} />;
}

function Body(props: HTMLChakraProps<"tbody">) {
  return <chakra.tbody css={useStyles().body} {...props} />;
}

function Row(props: HTMLChakraProps<"tr">) {
  return <chakra.tr css={useStyles().row} {...props} />;
}

function ColumnHeader(props: HTMLChakraProps<"th">) {
  return <chakra.th css={useStyles().columnHeader} {...props} />;
}

function Cell(props: HTMLChakraProps<"td">) {
  return <chakra.td css={useStyles().cell} {...props} />;
}

function Footer(props: HTMLChakraProps<"tfoot">) {
  return <chakra.tfoot css={useStyles().footer} {...props} />;
}

function Caption(props: HTMLChakraProps<"caption">) {
  return <chakra.caption css={useStyles().caption} {...props} />;
}

export const Table = { Root, Header, Body, Row, ColumnHeader, Cell, Footer, Caption };
