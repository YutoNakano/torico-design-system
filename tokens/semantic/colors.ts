/**
 * Semantic Color Tokens
 *
 * Context-aware color tokens that map primitive colors to their intended use.
 * These are the tokens that should be used in components.
 *
 * Default values are dark-mode first (the primary theme for native apps).
 * Light theme overrides are in themes/light.ts.
 */

import { teal, neutral, darkNeutral, feedback, alpha, pastel } from '../primitives/colors';

/**
 * Brand colors - Neutral-first identity
 * In dark mode, primary interactive color is white.
 * In light mode, primary interactive color is black (overridden in light theme).
 */
export const brand = {
  /** Primary brand color (white on dark) */
  primary: neutral[0], // #FFFFFF
  /** Primary color for hover/pressed states */
  primaryHover: neutral[200],
  /** Primary color for disabled states */
  primaryMuted: neutral[500],
  /** Secondary brand color */
  secondary: darkNeutral.gray,
  /** Web-specific primary */
  webPrimary: neutral[900],
  /** Web-specific primary dark variant */
  webPrimaryDark: neutral[800],
} as const;

/**
 * Background colors - Surface and container backgrounds
 */
export const background = {
  /** Primary app background */
  primary: darkNeutral.background, // #000000
  /** Secondary background for sheets/modals */
  secondary: darkNeutral.backgroundSecondary,
  /** Tertiary background for elevated cards */
  tertiary: darkNeutral.backgroundTertiary,
  /** Card background with slight transparency */
  card: 'rgba(26, 26, 26, 0.95)',
  /** Card background solid */
  cardSolid: '#1A1A1A',
  /** Surface for inputs and interactive elements */
  surface: darkNeutral.surface,
  /** Darker surface variant */
  surfaceDark: darkNeutral.surfaceDark,
  /** Overlay background for modals */
  overlay: `rgba(0, 0, 0, ${alpha[50]})`,
  /** Light overlay */
  overlayLight: `rgba(0, 0, 0, ${alpha[30]})`,
  /** Dark solid background */
  dark: neutral[900],
  /** Pure black */
  black: '#000000',
  /** Pure white */
  white: neutral[0],
} as const;

/**
 * Text colors - Typography colors
 */
export const text = {
  /** Primary text - high emphasis */
  primary: neutral[0], // #FFFFFF
  /** Secondary text - medium emphasis */
  secondary: `rgba(255, 255, 255, ${alpha[60]})`,
  /** Tertiary text - low emphasis */
  tertiary: `rgba(255, 255, 255, ${alpha[40]})`,
  /** Disabled text */
  disabled: `rgba(255, 255, 255, ${alpha[20]})`,
  /** Placeholder text */
  placeholder: `rgba(255, 255, 255, ${alpha[30]})`,
  /** Inverse text (dark on light) */
  inverse: neutral[900],
  /** Brand-colored text (same as primary in neutral palette) */
  brand: neutral[0],
  /** Link text color */
  link: neutral[0],
  /** Error text */
  error: feedback.error.base,
  /** Success text */
  success: feedback.success.base,
  /** Warning text */
  warning: feedback.warning.dark,
} as const;

/**
 * Border colors - Borders and dividers
 */
export const border = {
  /** Default border */
  default: neutral[800],
  /** Subtle border/divider */
  subtle: `rgba(255, 255, 255, ${alpha[10]})`,
  /** Muted border */
  muted: `rgba(255, 255, 255, ${alpha[20]})`,
  /** Focused border */
  focus: neutral[0],
  /** Error border */
  error: feedback.error.base,
  /** Success border */
  success: feedback.success.base,
} as const;

/**
 * Interactive colors - Buttons, links, and interactive elements
 */
export const interactive = {
  /** Primary interactive color (white on dark) */
  primary: neutral[0],
  /** Primary hover state */
  primaryHover: neutral[200],
  /** Primary pressed state */
  primaryPressed: neutral[300],
  /** Primary disabled state */
  primaryDisabled: neutral[700],
  /** Secondary interactive */
  secondary: darkNeutral.gray,
  /** Secondary hover */
  secondaryHover: neutral[700],
  /** Destructive action */
  destructive: feedback.error.base,
  /** Destructive hover */
  destructiveHover: feedback.error.dark,
  /** Ghost interactive (transparent) */
  ghost: 'transparent',
  /** Ghost hover */
  ghostHover: `rgba(255, 255, 255, ${alpha[10]})`,
} as const;

/**
 * Feedback colors - Status and feedback states
 */
export const feedbackColors = {
  /** Success state */
  success: {
    background: feedback.success.light,
    foreground: feedback.success.base,
    border: feedback.success.base,
  },
  /** Warning state */
  warning: {
    background: feedback.warning.light,
    foreground: feedback.warning.dark,
    border: feedback.warning.base,
  },
  /** Error state */
  error: {
    background: feedback.error.light,
    foreground: feedback.error.base,
    border: feedback.error.base,
  },
  /** Info state */
  info: {
    background: feedback.info.light,
    foreground: feedback.info.dark,
    border: feedback.info.base,
  },
} as const;

/**
 * Icon colors - For icons throughout the app
 */
export const icon = {
  /** Primary icon color */
  primary: neutral[0],
  /** Secondary icon color */
  secondary: `rgba(255, 255, 255, ${alpha[60]})`,
  /** Muted icon color */
  muted: `rgba(255, 255, 255, ${alpha[40]})`,
  /** Disabled icon color */
  disabled: `rgba(255, 255, 255, ${alpha[20]})`,
  /** Brand icon color */
  brand: neutral[0],
  /** Inverse icon (dark) */
  inverse: neutral[900],
  /** Icon on light background */
  onLight: neutral[900],
} as const;

/**
 * DRAWER Green - Teal accent for the DRAWER brand identity
 * Dark-mode defaults; light theme overrides in themes/light.ts
 */
export const drawerGreen = {
  primary: teal[300],           // #4FD1C5
  primaryHover: teal[400],      // #38B2AC
  primaryPressed: teal[500],    // #319795
  primaryDisabled: teal[700],   // #285E61
  text: teal[300],              // #4FD1C5
  muted: teal[600],             // #2C7A7B
  tint: 'rgba(79, 209, 197, 0.1)',
  tintMedium: 'rgba(79, 209, 197, 0.2)',
} as const;

/**
 * Category colors - Pastel tones for note/category labels
 */
export const categoryColors = {
  blue: pastel.blue,       // #A1CFF0
  red: pastel.red,         // #F88D8D
  green: pastel.green,     // #87C492
  yellow: pastel.yellow,   // #FFF3C0
} as const;

/**
 * Semantic color tokens combined
 */
export const semanticColors = {
  brand,
  background,
  text,
  border,
  interactive,
  feedback: feedbackColors,
  icon,
  drawerGreen,
  categoryColors,
} as const;

export type BrandColors = typeof brand;
export type BackgroundColors = typeof background;
export type TextColors = typeof text;
export type BorderColors = typeof border;
export type InteractiveColors = typeof interactive;
export type FeedbackSemanticColors = typeof feedbackColors;
export type IconColors = typeof icon;
export type DrawerGreenColors = typeof drawerGreen;
export type CategoryColors = typeof categoryColors;
export type SemanticColors = typeof semanticColors;
