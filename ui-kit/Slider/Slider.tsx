import type { HTMLChakraProps, SystemStyleObject } from "@chakra-ui/react";
import { chakra, useSlotRecipe } from "@chakra-ui/react";
import { createContext, useContext } from "react";

import { sliderSlotRecipe } from "./Slider.recipe";

type Slot = "root" | "label" | "thumb" | "valueText" | "track" | "range" | "control" | "markerGroup" | "marker" | "draggingIndicator" | "markerIndicator" | "markerLabel";
const StylesContext = createContext<Record<Slot, SystemStyleObject> | null>(null);

function useStyles() {
  const styles = useContext(StylesContext);
  if (!styles) throw new Error("Slider parts must be inside Slider.Root");
  return styles;
}

export interface SliderRootProps extends Omit<HTMLChakraProps<"div">, "size" | "variant" | "orientation" | "colorPalette"> {
  size?: "sm" | "md" | "lg";
  variant?: "outline" | "solid";
  orientation?: "vertical" | "horizontal";
  colorPalette?: "gray" | "red" | "pink" | "purple" | "cyan" | "blue" | "teal" | "green" | "yellow" | "orange";
}

/** Ползунок. */
function Root({ size = "md", variant = "outline", orientation = "horizontal", colorPalette = "gray", ...rest }: SliderRootProps) {
  const styles = useSlotRecipe({ recipe: sliderSlotRecipe })({ size, variant, orientation });
  return (
    <StylesContext.Provider value={styles}>
      <chakra.div css={styles.root} colorPalette={colorPalette} {...rest} />
    </StylesContext.Provider>
  );
}

function Label(props: HTMLChakraProps<"span">) {
  return <chakra.span css={useStyles().label} {...props} />;
}

function Thumb(props: HTMLChakraProps<"div">) {
  return <chakra.div css={useStyles().thumb} {...props} />;
}

function ValueText(props: HTMLChakraProps<"span">) {
  return <chakra.span css={useStyles().valueText} {...props} />;
}

function Track(props: HTMLChakraProps<"div">) {
  return <chakra.div css={useStyles().track} {...props} />;
}

function Range(props: HTMLChakraProps<"div">) {
  return <chakra.div css={useStyles().range} {...props} />;
}

function Control(props: HTMLChakraProps<"div">) {
  return <chakra.div css={useStyles().control} {...props} />;
}

function MarkerGroup(props: HTMLChakraProps<"div">) {
  return <chakra.div css={useStyles().markerGroup} {...props} />;
}

function Marker(props: HTMLChakraProps<"div">) {
  return <chakra.div css={useStyles().marker} {...props} />;
}

function DraggingIndicator(props: HTMLChakraProps<"span">) {
  return <chakra.span css={useStyles().draggingIndicator} {...props} />;
}

function MarkerIndicator(props: HTMLChakraProps<"span">) {
  return <chakra.span css={useStyles().markerIndicator} {...props} />;
}

function MarkerLabel(props: HTMLChakraProps<"div">) {
  return <chakra.div css={useStyles().markerLabel} {...props} />;
}

export const Slider = { Root, Label, Thumb, ValueText, Track, Range, Control, MarkerGroup, Marker, DraggingIndicator, MarkerIndicator, MarkerLabel };
