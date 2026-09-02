/**
 * Токены дизайн-системы.
 *
 * Значения приезжают из Figma и переписываются синхронизацией: править их руками бессмысленно —
 * следующий PR от библиотеки вернёт как было.
 */

export const color = {
  brandSolid: "#2c3e8f",
  brandSolidHover: "#22317a",
  brandSubtle: "#eef1f7",
  surface: "#ffffff",
  surfaceMuted: "#f5f7fa",
  border: "#d8dfe9",
  text: "#0f172a",
  textMuted: "#64748b",
  danger: "#b3261e",
  success: "#1f7a4d",
} as const;

export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
} as const;

export const radius = {
  sm: 4,
  md: 8,
  lg: 12,
  full: 999,
} as const;

export const fontSize = {
  xs: 11,
  sm: 13,
  md: 14,
  lg: 16,
} as const;
