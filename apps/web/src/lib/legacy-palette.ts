/**
 * Старая палитра продукта.
 *
 * Появилась до токенов дизайн-системы и ссылается на шкалу напрямую: «gray.500» знает только
 * светлую тему и ничего не знает о смысле. Библиотекарь должен видеть каждое такое место.
 */
export const palette = {
  text: "gray.900",
  textMuted: "gray.500",
  border: "gray.200",
  surface: "gray.50",
  primary: "blue.600",
  primaryHover: "blue.700",
  success: "green.600",
  warning: "amber.500",
  danger: "red.600",
  info: "sky.500",
} as const;

export const shadows = {
  card: "0 1px 2px rgba(15, 23, 42, 0.08)",
  popover: "0 8px 24px rgba(15, 23, 42, 0.16)",
} as const;
