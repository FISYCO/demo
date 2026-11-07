import type { HTMLChakraProps, SystemStyleObject } from "@chakra-ui/react";
import { chakra, useSlotRecipe } from "@chakra-ui/react";
import { createContext, useContext } from "react";

import { progressSlotRecipe } from "./Progress.recipe";

type Slot = "root" | "label" | "track" | "range" | "valueText" | "view" | "circle" | "circleTrack" | "circleRange";
const StylesContext = createContext<Record<Slot, SystemStyleObject> | null>(null);

function useStyles() {
  const styles = useContext(StylesContext);
  if (!styles) throw new Error("Progress parts must be inside Progress.Root");
  return styles;
}

export interface ProgressRootProps extends Omit<HTMLChakraProps<"div">, "variant" | "shape" | "striped" | "animated" | "size" | "colorPalette"> {
  variant?: "outline" | "subtle";
  shape?: "square" | "rounded" | "full";
  striped?: boolean;
  animated?: boolean;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  colorPalette?: "gray" | "red" | "pink" | "purple" | "cyan" | "blue" | "teal" | "green" | "yellow" | "orange";
}

/** Полоса прогресса. */
function Root({ variant = "outline", shape = "rounded", striped, animated, size = "md", colorPalette = "gray", ...rest }: ProgressRootProps) {
  const styles = useSlotRecipe({ recipe: progressSlotRecipe })({ variant, shape, striped, animated, size });
  return (
    <StylesContext.Provider value={styles}>
      <chakra.div css={styles.root} colorPalette={colorPalette} {...rest} />
    </StylesContext.Provider>
  );
}

function Label(props: HTMLChakraProps<"span">) {
  return <chakra.span css={useStyles().label} {...props} />;
}

function Track(props: HTMLChakraProps<"div">) {
  return <chakra.div css={useStyles().track} {...props} />;
}

function Range(props: HTMLChakraProps<"div">) {
  return <chakra.div css={useStyles().range} {...props} />;
}

function ValueText(props: HTMLChakraProps<"span">) {
  return <chakra.span css={useStyles().valueText} {...props} />;
}

function View(props: HTMLChakraProps<"div">) {
  return <chakra.div css={useStyles().view} {...props} />;
}

function Circle(props: HTMLChakraProps<"div">) {
  return <chakra.div css={useStyles().circle} {...props} />;
}

function CircleTrack(props: HTMLChakraProps<"div">) {
  return <chakra.div css={useStyles().circleTrack} {...props} />;
}

function CircleRange(props: HTMLChakraProps<"div">) {
  return <chakra.div css={useStyles().circleRange} {...props} />;
}

export const Progress = { Root, Label, Track, Range, ValueText, View, Circle, CircleTrack, CircleRange };
