import { defineRecipe } from "@chakra-ui/react";

/**
 * Бейдж — пилюлей (#1788): статус читается меткой, а не кнопкой. Скругление элементов управления (`l2`) после смягчения
 * углов стало 10px, и бейдж высотой 20px с таким углом выглядел бы недокнопкой.
 */
export const badgeRecipe = defineRecipe({
  className: "chakra-badge",
  base: {
    borderRadius: "full",
  },
});
