/**
 * Light Theme Tokens
 *
 * Light mode color overrides for TORICO products.
 * Neutral-first: black interactive elements on white backgrounds.
 */

import { teal, neutral, feedback } from '../primitives/colors';

/**
 * Light theme color palette
 */
export const lightTheme = {
  /**
   * Background colors - Light surfaces
   */
  background: {
    primary: neutral[0], // #FFFFFF (iOS systemBackground)
    secondary: '#F2F2F7', // iOS secondarySystemBackground
    tertiary: neutral[0], // #FFFFFF (iOS tertiarySystemBackground)
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

  /**
   * DRAWER Green - Light mode overrides (darker teal for contrast on white)
   */
  drawerGreen: {
    primary: teal[500],           // #319795
    primaryHover: teal[600],      // #2C7A7B
    primaryPressed: teal[700],    // #285E61
    primaryDisabled: teal[200],   // #81E6D9
    text: teal[600],              // #2C7A7B
    muted: teal[400],             // #38B2AC
    tint: 'rgba(49, 151, 149, 0.1)',
    tintMedium: 'rgba(49, 151, 149, 0.2)',
  },

} as const;

export type LightTheme = typeof lightTheme;
