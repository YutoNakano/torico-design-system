/**
 * Light Theme Tokens
 *
 * Light mode color overrides for TORICO products.
 * Neutral-first: black interactive elements on white backgrounds.
 */

import { neutral, feedback } from '../primitives/colors';

/**
 * Light theme color palette
 */
export const lightTheme = {
  /**
   * Brand colors - Primary brand identity in light mode
   */
  brand: {
    primary: neutral[900], // #141414 - black on light
    primaryHover: neutral[700],
    primaryMuted: neutral[400],
    secondary: neutral[100],
    webPrimary: neutral[900],
    webPrimaryDark: neutral[800],
  },

  /**
   * Background colors - Light surfaces
   */
  background: {
    primary: neutral[0], // #FFFFFF
    secondary: neutral[50], // #FAFAFA
    tertiary: neutral[100], // #F5F5F5
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
    primary: neutral[900], // #141414
    secondary: neutral[600], // #666666
    tertiary: neutral[500], // #8E8E8E
    disabled: neutral[400], // #BFBFBF
    placeholder: neutral[400],
    inverse: neutral[0],
    brand: neutral[900],
    link: neutral[900],
    error: feedback.error.dark,
    success: feedback.success.dark,
    warning: feedback.warning.dark,
  },

  /**
   * Border colors
   */
  border: {
    default: neutral[200], // #EBEBEB
    subtle: neutral[100],
    muted: neutral[300],
    focus: neutral[900],
    error: feedback.error.base,
    success: feedback.success.base,
  },

  /**
   * Interactive colors
   */
  interactive: {
    primary: neutral[900], // #141414 - black buttons on light
    primaryHover: neutral[700],
    primaryPressed: neutral[600],
    primaryDisabled: neutral[300],
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
    brand: neutral[900],
    inverse: neutral[0],
    onLight: neutral[900],
  },
} as const;

export type LightTheme = typeof lightTheme;
