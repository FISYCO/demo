import type { HTMLChakraProps, SystemStyleObject } from "@chakra-ui/react";
import { chakra, useSlotRecipe } from "@chakra-ui/react";
import { createContext, useContext } from "react";

import { fileUploadSlotRecipe } from "./FileUpload.recipe";

type Slot = "root" | "dropzone" | "item" | "itemDeleteTrigger" | "itemGroup" | "itemName" | "itemPreview" | "itemPreviewImage" | "itemSizeText" | "label" | "trigger" | "clearTrigger" | "itemContent" | "dropzoneContent" | "fileText";
const StylesContext = createContext<Record<Slot, SystemStyleObject> | null>(null);

function useStyles() {
  const styles = useContext(StylesContext);
  if (!styles) throw new Error("FileUpload parts must be inside FileUpload.Root");
  return styles;
}

export interface FileUploadRootProps extends Omit<HTMLChakraProps<"div">, "css"> {

}

/** Загрузка файлов. */
function Root({ ...rest }: FileUploadRootProps) {
  const styles = useSlotRecipe({ recipe: fileUploadSlotRecipe })({  });
  return (
    <StylesContext.Provider value={styles}>
      <chakra.div css={styles.root} {...rest} />
    </StylesContext.Provider>
  );
}

function Dropzone(props: HTMLChakraProps<"div">) {
  return <chakra.div css={useStyles().dropzone} {...props} />;
}

function Item(props: HTMLChakraProps<"div">) {
  return <chakra.div css={useStyles().item} {...props} />;
}

function ItemDeleteTrigger(props: HTMLChakraProps<"button">) {
  return <chakra.button css={useStyles().itemDeleteTrigger} {...props} />;
}

function ItemGroup(props: HTMLChakraProps<"div">) {
  return <chakra.div css={useStyles().itemGroup} {...props} />;
}

function ItemName(props: HTMLChakraProps<"div">) {
  return <chakra.div css={useStyles().itemName} {...props} />;
}

function ItemPreview(props: HTMLChakraProps<"div">) {
  return <chakra.div css={useStyles().itemPreview} {...props} />;
}

function ItemPreviewImage(props: HTMLChakraProps<"div">) {
  return <chakra.div css={useStyles().itemPreviewImage} {...props} />;
}

function ItemSizeText(props: HTMLChakraProps<"span">) {
  return <chakra.span css={useStyles().itemSizeText} {...props} />;
}

function Label(props: HTMLChakraProps<"span">) {
  return <chakra.span css={useStyles().label} {...props} />;
}

function Trigger(props: HTMLChakraProps<"button">) {
  return <chakra.button css={useStyles().trigger} {...props} />;
}

function ClearTrigger(props: HTMLChakraProps<"button">) {
  return <chakra.button css={useStyles().clearTrigger} {...props} />;
}

function ItemContent(props: HTMLChakraProps<"div">) {
  return <chakra.div css={useStyles().itemContent} {...props} />;
}

function DropzoneContent(props: HTMLChakraProps<"div">) {
  return <chakra.div css={useStyles().dropzoneContent} {...props} />;
}

function FileText(props: HTMLChakraProps<"span">) {
  return <chakra.span css={useStyles().fileText} {...props} />;
}

export const FileUpload = { Root, Dropzone, Item, ItemDeleteTrigger, ItemGroup, ItemName, ItemPreview, ItemPreviewImage, ItemSizeText, Label, Trigger, ClearTrigger, ItemContent, DropzoneContent, FileText };
