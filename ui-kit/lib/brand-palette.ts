import { defineConfig } from "@chakra-ui/react";

// ── Color conversion utilities ──────────────────────────────────────────────
// Pure math, no external deps. Converts hex ↔ OKLCH and generates
// a full brand palette from a single hex color.

/** Lightness curve matching our neutral scales (gray/slate/mauve) */
const LIGHTNESS_STEPS = [
  /* 50 */ 0.985, /* 100 */ 0.97, /* 200 */ 0.922, /* 300 */ 0.87, /* 400 */ 0.708, /* 500 */ 0.556, /* 600 */ 0.439,
  /* 700 */ 0.371, /* 800 */ 0.269, /* 900 */ 0.21, /* 950 */ 0.18,
] as const;

/** Chroma multiplier per step — peak at 500–600, fades to edges */
const CHROMA_SCALE = [
  /* 50 */ 0.15, /* 100 */ 0.2, /* 200 */ 0.35, /* 300 */ 0.5, /* 400 */ 0.75, /* 500 */ 0.95, /* 600 */ 1.0,
  /* 700 */ 0.9, /* 800 */ 0.7, /* 900 */ 0.55, /* 950 */ 0.45,
] as const;

/**
 * Boosted chroma for light mode tints (steps 50–400).
 * On white backgrounds low-chroma pastels look washed out,
 * so we retain 2–3× more saturation than the neutral curve.
 */
const CHROMA_SCALE_LIGHT = [
  /* 50 */ 0.5, /* 100 */ 0.6, /* 200 */ 0.75, /* 300 */ 0.85, /* 400 */ 0.95, /* 500 */ 1.0, /* 600 */ 1.0,
  /* 700 */ 0.9, /* 800 */ 0.7, /* 900 */ 0.55, /* 950 */ 0.45,
] as const;

const STEP_NAMES = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950] as const;
type StepName = (typeof STEP_NAMES)[number];

// ── sRGB ↔ linear ───────────────────────────────────────────────────────────

function srgbToLinear(c: number): number {
  return c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
}

function linearToSrgb(c: number): number {
  return c <= 0.0031308 ? c * 12.92 : 1.055 * c ** (1 / 2.4) - 0.055;
}

// ── hex ↔ sRGB ──────────────────────────────────────────────────────────────

function hexToSrgb(hex: string): [number, number, number] {
  const h = hex.replace("#", "");
  return [
    Number.parseInt(h.slice(0, 2), 16) / 255,
    Number.parseInt(h.slice(2, 4), 16) / 255,
    Number.parseInt(h.slice(4, 6), 16) / 255,
  ];
}

function srgbToHex(r: number, g: number, b: number): string {
  const toHex = (c: number) =>
    Math.round(Math.max(0, Math.min(1, c)) * 255)
      .toString(16)
      .padStart(2, "0");
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

// ── linear RGB ↔ OKLab ─────────────────────────────────────────────────────

function linearRgbToOklab(r: number, g: number, b: number): [number, number, number] {
  const l_ = Math.cbrt(0.4122214708 * r + 0.5363325363 * g + 0.0514459929 * b);
  const m_ = Math.cbrt(0.2119034982 * r + 0.6806995451 * g + 0.1073969566 * b);
  const s_ = Math.cbrt(0.0883024619 * r + 0.2817188376 * g + 0.6299787005 * b);

  return [
    0.2104542553 * l_ + 0.793617785 * m_ - 0.0040720468 * s_,
    1.9779984951 * l_ - 2.428592205 * m_ + 0.4505937099 * s_,
    0.0259040371 * l_ + 0.7827717662 * m_ - 0.808675766 * s_,
  ];
}

function oklabToLinearRgb(L: number, a: number, b: number): [number, number, number] {
  const l_ = L + 0.3963377774 * a + 0.2158037573 * b;
  const m_ = L - 0.1055613458 * a - 0.0638541728 * b;
  const s_ = L - 0.0894841775 * a - 1.291485548 * b;

  const l = l_ * l_ * l_;
  const m = m_ * m_ * m_;
  const s = s_ * s_ * s_;

  return [
    +4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s,
    -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s,
    -0.0041960863 * l - 0.7034186147 * m + 1.707614701 * s,
  ];
}

// ── OKLab ↔ OKLCH ───────────────────────────────────────────────────────────

function oklabToOklch(L: number, a: number, b: number): [number, number, number] {
  const C = Math.sqrt(a * a + b * b);
  let H = (Math.atan2(b, a) * 180) / Math.PI;
  if (H < 0) H += 360;
  return [L, C, H];
}

function oklchToOklab(L: number, C: number, H: number): [number, number, number] {
  const hRad = (H * Math.PI) / 180;
  return [L, C * Math.cos(hRad), C * Math.sin(hRad)];
}

// ── Public converters ───────────────────────────────────────────────────────

export function hexToOklch(hex: string): [number, number, number] {
  const [sr, sg, sb] = hexToSrgb(hex);
  const [lr, lg, lb] = [srgbToLinear(sr), srgbToLinear(sg), srgbToLinear(sb)];
  const [L, a, b] = linearRgbToOklab(lr, lg, lb);
  return oklabToOklch(L, a, b);
}

export function oklchToHex(L: number, C: number, H: number): string {
  const [labL, a, b] = oklchToOklab(L, C, H);
  const [lr, lg, lb] = oklabToLinearRgb(labL, a, b);
  return srgbToHex(linearToSrgb(lr), linearToSrgb(lg), linearToSrgb(lb));
}

// ── Gamut clamping ──────────────────────────────────────────────────────────

function isInGamut(r: number, g: number, b: number): boolean {
  const EPS = 0.001;
  return r >= -EPS && r <= 1 + EPS && g >= -EPS && g <= 1 + EPS && b >= -EPS && b <= 1 + EPS;
}

/** Binary search: reduce chroma until the color fits in sRGB gamut */
function clampChromaToGamut(L: number, C: number, H: number): number {
  if (C <= 0) return 0;
  const [a, b_] = [oklchToOklab(L, C, H)[1], oklchToOklab(L, C, H)[2]];
  const [lr, lg, lb] = oklabToLinearRgb(L, a, b_);
  if (isInGamut(lr, lg, lb)) return C;

  let lo = 0;
  let hi = C;
  for (let i = 0; i < 20; i++) {
    const mid = (lo + hi) / 2;
    const [ma, mb] = [oklchToOklab(L, mid, H)[1], oklchToOklab(L, mid, H)[2]];
    const [mr, mg, mb_] = oklabToLinearRgb(L, ma, mb);
    if (isInGamut(mr, mg, mb_)) {
      lo = mid;
    } else {
      hi = mid;
    }
  }
  return lo;
}

// ── APCA contrast ───────────────────────────────────────────────────────────

/** sRGB → Y luminance (ITU-R BT.709) via linearized sRGB */
function srgbToY(r: number, g: number, b: number): number {
  return 0.2126729 * srgbToLinear(r) + 0.7151522 * srgbToLinear(g) + 0.072175 * srgbToLinear(b);
}

/** APCA Lc (Lightness Contrast) — WCAG 3.0 draft algorithm */
function apcaLc(textY: number, bgY: number): number {
  // Soft clamp
  const txtY = textY > 0.022 ? textY : textY + (0.022 - textY) ** Math.SQRT2;
  const bgYc = bgY > 0.022 ? bgY : bgY + (0.022 - bgY) ** Math.SQRT2;

  let Lc: number;
  if (bgYc >= txtY) {
    // Normal polarity (dark text on light bg)
    Lc = (bgYc ** 0.56 - txtY ** 0.57 - 0.027) * 114;
  } else {
    // Reverse polarity (light text on dark bg)
    Lc = (bgYc ** 0.65 - txtY ** 0.62 + 0.027) * 114;
  }

  return Math.abs(Lc) < 10 ? 0 : Lc;
}

/** Pick black or white for maximum APCA contrast on given solid bg */
function contrastColor(solidHex: string): "#000000" | "#ffffff" {
  const solidY = srgbToY(...hexToSrgb(solidHex));
  const blackLc = Math.abs(apcaLc(0, solidY));
  const whiteLc = Math.abs(apcaLc(1, solidY));
  return blackLc >= whiteLc ? "#000000" : "#ffffff";
}

// ── Brand palette generation ────────────────────────────────────────────────

type BrandSlot = "solid" | "contrast" | "fg" | "subtle" | "muted" | "emphasized" | "focusRing" | "border";

export interface BrandPalette {
  light: Record<BrandSlot, string>;
  dark: Record<BrandSlot, string>;
}

/**
 * Generate a full brand palette from a single hex color.
 *
 * 1. Extracts hue (H) and chroma (C) from the input hex
 * 2. Generates an 11-step palette with our standard lightness curve
 * 3. Maps steps to 8 brand semantic slots for light and dark modes
 */
export function generateBrandPalette(hex: string): BrandPalette {
  const [, inputC, H] = hexToOklch(hex);

  function makeSteps(chromaScale: readonly number[]) {
    const s = {} as Record<StepName, string>;
    for (let i = 0; i < STEP_NAMES.length; i++) {
      const L = LIGHTNESS_STEPS[i];
      const C = clampChromaToGamut(L, inputC * chromaScale[i], H);
      s[STEP_NAMES[i]] = oklchToHex(L, C, H);
    }
    return s;
  }

  // Light mode uses boosted chroma so tints read well on white
  const light = makeSteps(CHROMA_SCALE_LIGHT);
  // Dark mode uses original chroma — already looks good
  const dark = makeSteps(CHROMA_SCALE);

  return {
    light: {
      solid: light[500],
      contrast: contrastColor(light[500]),
      fg: light[600],
      subtle: light[100],
      muted: light[200],
      emphasized: light[300],
      focusRing: light[500],
      border: light[400],
    },
    dark: {
      solid: dark[600],
      contrast: contrastColor(dark[600]),
      fg: dark[300],
      subtle: dark[800],
      muted: dark[700],
      emphasized: dark[700],
      focusRing: dark[500],
      border: dark[400],
    },
  };
}

/**
 * Create a Chakra config override with brand semantic tokens
 * generated from a single hex color. Merge with `defaultConfig`
 * and `themeConfig` via `createSystem(defaultConfig, themeConfig, createBrandConfig(hex))`.
 */
export function createBrandConfig(hex: string) {
  const palette = generateBrandPalette(hex);
  return defineConfig({
    theme: {
      semanticTokens: {
        colors: {
          brand: {
            solid: { value: { _light: palette.light.solid, _dark: palette.dark.solid } },
            contrast: { value: { _light: palette.light.contrast, _dark: palette.dark.contrast } },
            fg: { value: { _light: palette.light.fg, _dark: palette.dark.fg } },
            subtle: { value: { _light: palette.light.subtle, _dark: palette.dark.subtle } },
            muted: { value: { _light: palette.light.muted, _dark: palette.dark.muted } },
            emphasized: { value: { _light: palette.light.emphasized, _dark: palette.dark.emphasized } },
            focusRing: { value: { _light: palette.light.focusRing, _dark: palette.dark.focusRing } },
            border: { value: { _light: palette.light.border, _dark: palette.dark.border } },
          },
        },
      },
    },
  });
}
