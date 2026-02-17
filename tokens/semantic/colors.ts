/**
 * Semantic Color Tokens
 *
 * Context-aware color tokens that map primitive colors to their intended use.
 * These are the tokens that should be used in components.
 */

import { teal, neutral, darkNeutral, feedback, alpha } from '../primitives/colors';

/**
 * Brand colors - Primary brand identity
 */
export const brand = {
  /** Primary brand color - teal accent */
  primary: teal[300], // #4FD1C5
  /** Primary color for hover/pressed states */
  primaryHover: teal[400],
  /** Primary color for disabled states */
  primaryMuted: teal[600],
  /** Secondary brand color - dark gray */
  secondary: darkNeutral.gray, // #1C2A2E
  /** Web-specific primary (lighter teal) */
  webPrimary: '#4A9B8E',
  /** Web-specific primary dark variant */
  webPrimaryDark: '#3A7A6F',
} as const;

/**
 * Background colors - Surface and container backgrounds
 */
export const background = {
  /** Primary app background */
  primary: darkNeutral.background, // #264040
  /** Secondary background for sheets/modals */
  secondary: darkNeutral.backgroundSecondary, // #1C1C1E
  /** Tertiary background for elevated cards */
  tertiary: darkNeutral.backgroundTertiary, // #2C2C2E
  /** Card background with slight transparency */
  card: 'rgba(49, 74, 74, 0.95)',
  /** Card background solid */
  cardSolid: '#314A4A',
  /** Surface for inputs and interactive elements */
  surface: darkNeutral.surface, // #2A2A2A
  /** Darker surface variant */
  surfaceDark: darkNeutral.surfaceDark, // #222222
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
  secondary: `rgba(255, 255, 255, ${alpha[70]})`,
  /** Tertiary text - low emphasis */
  tertiary: `rgba(255, 255, 255, ${alpha[50]})`,
  /** Disabled text */
  disabled: `rgba(255, 255, 255, ${alpha[30]})`,
  /** Placeholder text */
  placeholder: `rgba(255, 255, 255, ${alpha[40]})`,
  /** Inverse text (dark on light) */
  inverse: neutral[900],
  /** Brand-colored text */
  brand: teal[300],
  /** Link text color */
  link: teal[300],
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
  default: '#333333',
  /** Subtle border/divider */
  subtle: `rgba(255, 255, 255, ${alpha[10]})`,
  /** Muted border */
  muted: `rgba(255, 255, 255, ${alpha[20]})`,
  /** Focused border */
  focus: teal[300],
  /** Error border */
  error: feedback.error.base,
  /** Success border */
  success: feedback.success.base,
} as const;

/**
 * Interactive colors - Buttons, links, and interactive elements
 */
export const interactive = {
  /** Primary interactive color */
  primary: teal[300],
  /** Primary hover state */
  primaryHover: teal[400],
  /** Primary pressed state */
  primaryPressed: teal[500],
  /** Primary disabled state */
  primaryDisabled: teal[700],
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
  secondary: `rgba(255, 255, 255, ${alpha[70]})`,
  /** Muted icon color */
  muted: `rgba(255, 255, 255, ${alpha[50]})`,
  /** Disabled icon color */
  disabled: `rgba(255, 255, 255, ${alpha[30]})`,
  /** Brand icon color */
  brand: teal[300],
  /** Inverse icon (dark) */
  inverse: neutral[900],
  /** Icon on light background */
  onLight: '#061315',
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
} as const;

export type BrandColors = typeof brand;
export type BackgroundColors = typeof background;
export type TextColors = typeof text;
export type BorderColors = typeof border;
export type InteractiveColors = typeof interactive;
export type FeedbackSemanticColors = typeof feedbackColors;
export type IconColors = typeof icon;
export type SemanticColors = typeof semanticColors;
