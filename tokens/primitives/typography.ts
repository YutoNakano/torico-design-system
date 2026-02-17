/**
 * Primitive Typography Tokens
 *
 * Raw typography values for font sizes, weights, and line heights.
 * These should NOT be used directly - use semantic typography presets instead.
 */

import { Platform } from 'react-native';

/**
 * Font size scale (in pixels)
 * Based on common sizes found in DRAWER codebase: 12, 14, 16, 20, 32
 */
export const fontSize = {
  xs: 12,
  sm: 14,
  base: 16,
  lg: 18,
  xl: 20,
  '2xl': 24,
  '3xl': 28,
  '4xl': 32,
  '5xl': 40,
  '6xl': 48,
} as const;

/**
 * Font weight values
 * Using numeric values for cross-platform consistency
 */
export const fontWeight = {
  thin: '100',
  light: '300',
  regular: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
  extrabold: '800',
  black: '900',
} as const;

/**
 * Line height multipliers
 * Expressed as multipliers of font size for flexibility
 */
export const lineHeightMultiplier = {
  none: 1,
  tight: 1.25,
  snug: 1.375,
  normal: 1.5,
  relaxed: 1.625,
  loose: 2,
} as const;

/**
 * Absolute line heights (in pixels)
 * For cases where specific pixel values are needed
 */
export const lineHeight = {
  xs: 16,
  sm: 20,
  base: 24,
  lg: 28,
  xl: 28,
  '2xl': 32,
  '3xl': 36,
  '4xl': 40,
  '5xl': 48,
  '6xl': 56,
} as const;

/**
 * Letter spacing values (in pixels)
 */
export const letterSpacing = {
  tighter: -0.8,
  tight: -0.4,
  normal: 0,
  wide: 0.4,
  wider: 0.8,
  widest: 1.6,
} as const;

/**
 * Platform-specific font families
 * Based on instant-output-native's Fonts implementation
 */
export const fontFamily = Platform.select({
  ios: {
    /** iOS system default */
    sans: 'System',
    /** iOS serif design */
    serif: 'Georgia',
    /** iOS rounded design */
    rounded: 'System',
    /** iOS monospace */
    mono: 'Menlo',
  },
  android: {
    sans: 'Roboto',
    serif: 'serif',
    rounded: 'Roboto',
    mono: 'monospace',
  },
  default: {
    sans: 'System',
    serif: 'serif',
    rounded: 'System',
    mono: 'monospace',
  },
}) as {
  sans: string;
  serif: string;
  rounded: string;
  mono: string;
};

/**
 * Web-specific font stacks
 * For use in CSS and Tailwind configurations
 */
export const webFontFamily = {
  sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
  serif: "Georgia, 'Times New Roman', serif",
  rounded: "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, system-ui, sans-serif",
  mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  lineSeed: "'LINESeedJP', system-ui, sans-serif",
} as const;

export type FontSizeScale = typeof fontSize;
export type FontWeightScale = typeof fontWeight;
export type LineHeightMultiplierScale = typeof lineHeightMultiplier;
export type LineHeightScale = typeof lineHeight;
export type LetterSpacingScale = typeof letterSpacing;
export type FontFamily = typeof fontFamily;
export type WebFontFamily = typeof webFontFamily;
