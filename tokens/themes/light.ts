/**
 * Light Theme Tokens
 *
 * Light mode color overrides for TORICO products.
 * Note: DRAWER primarily uses dark mode, but light mode is available for
 * future use and web landing pages.
 */

import { teal, neutral, feedback } from '../primitives/colors';

/**
 * Light theme color palette
 */
export const lightTheme = {
  /**
   * Brand colors - Primary brand identity in light mode
   */
  brand: {
    primary: teal[500], // Slightly darker for better contrast on white
    primaryHover: teal[600],
    primaryMuted: teal[300],
    secondary: neutral[800],
    webPrimary: '#4A9B8E',
    webPrimaryDark: '#3A7A6F',
  },

  /**
   * Background colors - Light surfaces
   */
  background: {
    primary: neutral[0], // #FFFFFF
    secondary: neutral[50], // #F7FAFC
    tertiary: neutral[100], // #EDF2F7
    card: neutral[0],
    cardSolid: neutral[0],
    surface: neutral[50],
    surfaceDark: neutral[100],
    overlay: 'rgba(0, 0, 0, 0.5)',
    overlayLight: 'rgba(0, 0, 0, 0.3)',
    dark: neutral[800],
    black: '#000000',
    white: neutral[0],
  },

  /**
   * Text colors - Dark text on light backgrounds
   */
  text: {
    primary: neutral[900], // #171923
    secondary: neutral[600], // #4A5568
    tertiary: neutral[500], // #718096
    disabled: neutral[400], // #A0AEC0
    placeholder: neutral[400],
    inverse: neutral[0],
    brand: teal[600],
    link: teal[600],
    error: feedback.error.dark,
    success: feedback.success.dark,
    warning: feedback.warning.dark,
  },

  /**
   * Border colors
   */
  border: {
    default: neutral[200], // #E2E8F0
    subtle: neutral[100],
    muted: neutral[300],
    focus: teal[500],
    error: feedback.error.base,
    success: feedback.success.base,
  },

  /**
   * Interactive colors
   */
  interactive: {
    primary: teal[500],
    primaryHover: teal[600],
    primaryPressed: teal[700],
    primaryDisabled: teal[200],
    secondary: neutral[100],
    secondaryHover: neutral[200],
    destructive: feedback.error.base,
    destructiveHover: feedback.error.dark,
    ghost: 'transparent',
    ghostHover: neutral[100],
  },

  /**
   * Feedback colors
   */
  feedback: {
    success: {
      background: feedback.success.light,
      foreground: feedback.success.dark,
      border: feedback.success.base,
    },
    warning: {
      background: feedback.warning.light,
      foreground: feedback.warning.dark,
      border: feedback.warning.base,
    },
    error: {
      background: feedback.error.light,
      foreground: feedback.error.dark,
      border: feedback.error.base,
    },
    info: {
      background: feedback.info.light,
      foreground: feedback.info.dark,
      border: feedback.info.base,
    },
  },

  /**
   * Icon colors
   */
  icon: {
    primary: neutral[900],
    secondary: neutral[600],
    muted: neutral[500],
    disabled: neutral[400],
    brand: teal[600],
    inverse: neutral[0],
    onLight: neutral[900],
  },
} as const;

export type LightTheme = typeof lightTheme;
