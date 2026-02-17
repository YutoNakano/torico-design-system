/**
 * Semantic Typography Tokens
 *
 * Pre-configured text style presets for consistent typography.
 * These combine font size, weight, and line height into ready-to-use styles.
 */

import { fontSize, fontWeight, lineHeight, fontFamily } from '../primitives/typography';

/**
 * Base text style interface for React Native
 */
export interface TextStyle {
  fontSize: number;
  fontWeight: string;
  lineHeight: number;
  fontFamily?: string;
  letterSpacing?: number;
}

/**
 * Display text styles - For hero sections and large headings
 */
export const display = {
  large: {
    fontSize: fontSize['4xl'], // 32px
    fontWeight: fontWeight.bold,
    lineHeight: lineHeight['4xl'], // 40px
    fontFamily: fontFamily.sans,
  },
  medium: {
    fontSize: fontSize['3xl'], // 28px
    fontWeight: fontWeight.bold,
    lineHeight: lineHeight['3xl'], // 36px
    fontFamily: fontFamily.sans,
  },
  small: {
    fontSize: fontSize['2xl'], // 24px
    fontWeight: fontWeight.bold,
    lineHeight: lineHeight['2xl'], // 32px
    fontFamily: fontFamily.sans,
  },
} as const satisfies Record<string, TextStyle>;

/**
 * Heading text styles - For section headers
 */
export const heading = {
  large: {
    fontSize: fontSize.xl, // 20px
    fontWeight: fontWeight.bold,
    lineHeight: lineHeight.xl, // 28px
    fontFamily: fontFamily.sans,
  },
  medium: {
    fontSize: fontSize.lg, // 18px
    fontWeight: fontWeight.semibold,
    lineHeight: lineHeight.lg, // 28px
    fontFamily: fontFamily.sans,
  },
  small: {
    fontSize: fontSize.base, // 16px
    fontWeight: fontWeight.semibold,
    lineHeight: lineHeight.base, // 24px
    fontFamily: fontFamily.sans,
  },
} as const satisfies Record<string, TextStyle>;

/**
 * Body text styles - For main content
 */
export const body = {
  large: {
    fontSize: fontSize.lg, // 18px
    fontWeight: fontWeight.regular,
    lineHeight: lineHeight.lg, // 28px
    fontFamily: fontFamily.sans,
  },
  medium: {
    fontSize: fontSize.base, // 16px
    fontWeight: fontWeight.regular,
    lineHeight: lineHeight.base, // 24px
    fontFamily: fontFamily.sans,
  },
  small: {
    fontSize: fontSize.sm, // 14px
    fontWeight: fontWeight.regular,
    lineHeight: lineHeight.sm, // 20px
    fontFamily: fontFamily.sans,
  },
} as const satisfies Record<string, TextStyle>;

/**
 * Label text styles - For form labels and UI elements
 */
export const label = {
  large: {
    fontSize: fontSize.base, // 16px
    fontWeight: fontWeight.medium,
    lineHeight: lineHeight.base, // 24px
    fontFamily: fontFamily.sans,
  },
  medium: {
    fontSize: fontSize.sm, // 14px
    fontWeight: fontWeight.medium,
    lineHeight: lineHeight.sm, // 20px
    fontFamily: fontFamily.sans,
  },
  small: {
    fontSize: fontSize.xs, // 12px
    fontWeight: fontWeight.medium,
    lineHeight: lineHeight.xs, // 16px
    fontFamily: fontFamily.sans,
  },
} as const satisfies Record<string, TextStyle>;

/**
 * Caption text styles - For supporting text and metadata
 */
export const caption = {
  large: {
    fontSize: fontSize.sm, // 14px
    fontWeight: fontWeight.regular,
    lineHeight: lineHeight.sm, // 20px
    fontFamily: fontFamily.sans,
  },
  medium: {
    fontSize: fontSize.xs, // 12px
    fontWeight: fontWeight.regular,
    lineHeight: lineHeight.xs, // 16px
    fontFamily: fontFamily.sans,
  },
  small: {
    fontSize: 10, // 10px (custom for very small text)
    fontWeight: fontWeight.regular,
    lineHeight: 14,
    fontFamily: fontFamily.sans,
  },
} as const satisfies Record<string, TextStyle>;

/**
 * Button text styles - For button labels
 */
export const button = {
  large: {
    fontSize: fontSize.lg, // 18px
    fontWeight: fontWeight.semibold,
    lineHeight: lineHeight.lg, // 28px
    fontFamily: fontFamily.sans,
  },
  medium: {
    fontSize: fontSize.base, // 16px
    fontWeight: fontWeight.semibold,
    lineHeight: lineHeight.base, // 24px
    fontFamily: fontFamily.sans,
  },
  small: {
    fontSize: fontSize.sm, // 14px
    fontWeight: fontWeight.semibold,
    lineHeight: lineHeight.sm, // 20px
    fontFamily: fontFamily.sans,
  },
} as const satisfies Record<string, TextStyle>;

/**
 * Code/monospace text styles
 */
export const code = {
  large: {
    fontSize: fontSize.base, // 16px
    fontWeight: fontWeight.regular,
    lineHeight: lineHeight.base, // 24px
    fontFamily: fontFamily.mono,
  },
  medium: {
    fontSize: fontSize.sm, // 14px
    fontWeight: fontWeight.regular,
    lineHeight: lineHeight.sm, // 20px
    fontFamily: fontFamily.mono,
  },
  small: {
    fontSize: fontSize.xs, // 12px
    fontWeight: fontWeight.regular,
    lineHeight: lineHeight.xs, // 16px
    fontFamily: fontFamily.mono,
  },
} as const satisfies Record<string, TextStyle>;

/**
 * All typography presets combined
 */
export const typography = {
  display,
  heading,
  body,
  label,
  caption,
  button,
  code,
} as const;

/**
 * Flat map of common text styles for quick access
 */
export const textPresets = {
  displayLarge: display.large,
  displayMedium: display.medium,
  displaySmall: display.small,
  headingLarge: heading.large,
  headingMedium: heading.medium,
  headingSmall: heading.small,
  bodyLarge: body.large,
  bodyMedium: body.medium,
  bodySmall: body.small,
  labelLarge: label.large,
  labelMedium: label.medium,
  labelSmall: label.small,
  captionLarge: caption.large,
  captionMedium: caption.medium,
  captionSmall: caption.small,
  buttonLarge: button.large,
  buttonMedium: button.medium,
  buttonSmall: button.small,
  codeLarge: code.large,
  codeMedium: code.medium,
  codeSmall: code.small,
} as const;

export type DisplayStyles = typeof display;
export type HeadingStyles = typeof heading;
export type BodyStyles = typeof body;
export type LabelStyles = typeof label;
export type CaptionStyles = typeof caption;
export type ButtonStyles = typeof button;
export type CodeStyles = typeof code;
export type Typography = typeof typography;
export type TextPresets = typeof textPresets;
