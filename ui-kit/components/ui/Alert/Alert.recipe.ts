import { defineSlotRecipe } from "@chakra-ui/react";

export const alertRecipe = defineSlotRecipe({
  className: "chakra-alert",
  slots: ["root", "indicator", "content", "title", "description"],
});
