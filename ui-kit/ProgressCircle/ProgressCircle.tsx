import type { HTMLChakraProps, SystemStyleObject } from "@chakra-ui/react";
import { chakra, useSlotRecipe } from "@chakra-ui/react";
import { createContext, useContext } from "react";

import { progressCircleSlotRecipe } from "./ProgressCircle.recipe";

type Slot = "root" | "label" | "track" | "range" | "valueText" | "view" | "circle" | "circleTrack" | "circleRange";
const StylesContext = createContext<Record<Slot, SystemStyleObject> | null>(null);

function useStyles() {
  const styles = useContext(StylesContext);
  if (!styles) throw new Error("ProgressCircle parts must be inside ProgressCircle.Root");
  return styles;
}

export interface ProgressCircleRootProps extends Omit<HTMLChakraProps<"div">, "size" | "colorPalette"> {
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  colorPalette?: "gray" | "red" | "pink" | "purple" | "cyan" | "blue" | "teal" | "green" | "yellow" | "orange";
}

/** Круговой прогресс. */
function Root({ size = "md", colorPalette = "gray", ...rest }: ProgressCircleRootProps) {
  const styles = useSlotRecipe({ recipe: progressCircleSlotRecipe })({ size });
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

export const ProgressCircle = { Root, Label, Track, Range, ValueText, View, Circle, CircleTrack, CircleRange };
