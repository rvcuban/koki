/**
 * Koki Design Tokens
 *
 * Central reference for the Koki design system.
 * Use CSS variables (via Tailwind classes) in components.
 * This file provides typed constants for programmatic use
 * (e.g., charts, dynamic styles, canvas rendering).
 *
 * HEX values derived from OKLCH source of truth in globals.css.
 * If the CSS values change, regenerate these via OKLCH→sRGB conversion.
 */

export const colors = {
  coral: {
    50: "#FFEFE6",
    100: "#FFDFCC",
    200: "#FFC5A6",
    300: "#FFB088",
    400: "#FF8F5E",
    500: "#FF6B35",
    600: "#E55A25",
    700: "#CC4A18",
    800: "#9E3712",
    900: "#712710",
  },
  teal: {
    50: "#E7F5F7",
    100: "#CBE7EC",
    200: "#9CCBD2",
    300: "#3C8A94",
    400: "#2C6E78",
    500: "#1B535C",
    600: "#134048",
    700: "#0A2D33",
    800: "#051F23",
    900: "#021215",
  },
  vanilla: {
    50: "#FFFBE4",
    100: "#FEF7CC",
    200: "#FFF3B0",
    300: "#FFED8A",
    400: "#FFE66D",
    500: "#F0D44F",
    600: "#D9BD44",
    700: "#BCA341",
    800: "#9A8538",
    900: "#79682E",
  },
  warm: {
    50: "#FAF8F5",
    100: "#F0ECE5",
    200: "#E0D8CC",
    300: "#C4B8A8",
    400: "#9A8E80",
    500: "#6B6158",
    600: "#4A4239",
    700: "#33291F",
    800: "#231C14",
    900: "#1A140E",
  },
} as const;

export const fonts = {
  sans: "Inter",
  heading: "Playfair Display",
  mono: "Geist Mono",
} as const;

export const spacing = {
  section: {
    sm: "4rem", // py-16
    md: "6rem", // py-24
    lg: "8rem", // py-32
  },
  container: {
    maxWidth: "80rem", // max-w-7xl
    px: {
      sm: "1rem", // px-4
      md: "1.5rem", // px-6
      lg: "2rem", // px-8
    },
  },
} as const;

export const radius = {
  sm: "0.45rem",
  md: "0.6rem",
  lg: "0.75rem",
  xl: "1.05rem",
  "2xl": "1.35rem",
  "3xl": "1.65rem",
  "4xl": "1.95rem",
} as const;

export type ColorScale = typeof colors;
export type ColorFamily = keyof ColorScale;
export type ColorShade = keyof ColorScale[ColorFamily];
