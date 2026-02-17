/**
 * Primitive Color Tokens
 *
 * Raw color values that form the foundation of the TORICO color system.
 * These should NOT be used directly in components - use semantic colors instead.
 */

/**
 * Teal palette - Primary brand color family
 * Based on DRAWER's signature teal (#4FD1C5)
 */
export const teal = {
  50: '#E6FFFA',
  100: '#B2F5EA',
  200: '#81E6D9',
  300: '#4FD1C5', // Brand primary
  400: '#38B2AC',
  500: '#319795',
  600: '#2C7A7B',
  700: '#285E61',
  800: '#234E52',
  900: '#1D4044',
} as const;

/**
 * Neutral palette - For backgrounds, text, and borders
 * Dark-mode first design based on DRAWER's dark UI
 */
export const neutral = {
  0: '#FFFFFF',
  50: '#F7FAFC',
  100: '#EDF2F7',
  200: '#E2E8F0',
  300: '#CBD5E0',
  400: '#A0AEC0',
  500: '#718096',
  600: '#4A5568',
  700: '#2D3748',
  800: '#1A202C',
  900: '#171923',
  950: '#0D1117',
} as const;

/**
 * App-specific dark neutrals
 * Custom dark colors used in DRAWER and Shunsaku apps
 */
export const darkNeutral = {
  /** Primary app background - matches DRAWER iOS */
  background: '#264040',
  /** Secondary background - iOS secondarySystemBackground dark mode */
  backgroundSecondary: '#1C1C1E',
  /** Tertiary background - iOS tertiarySystemBackground dark mode */
  backgroundTertiary: '#2C2C2E',
  /** Dark gray for headers and navigation */
  gray: '#1C2A2E',
  /** Calendar and picker backgrounds */
  surface: '#2A2A2A',
  /** Darker surface for calendar */
  surfaceDark: '#222222',
} as const;

/**
 * Feedback colors - For status and interactive states
 */
export const feedback = {
  success: {
    light: '#C6F6D5',
    base: '#48BB78',
    dark: '#276749',
  },
  warning: {
    light: '#FEFCBF',
    base: '#ECC94B',
    dark: '#B7791F',
  },
  error: {
    light: '#FED7D7',
    base: '#FC8181',
    dark: '#C53030',
  },
  info: {
    light: '#BEE3F8',
    base: '#63B3ED',
    dark: '#2B6CB0',
  },
} as const;

/**
 * Accent colors - Secondary accent and utility colors
 */
export const accent = {
  orange: '#ED8936',
  blue: '#4299E1',
  purple: '#9F7AEA',
  pink: '#ED64A6',
} as const;

/**
 * Legacy colors - For backward compatibility
 * These map old color names to new values
 */
export const legacy = {
  /** Original DRAWER teal with opacity */
  drawerGreen: 'rgba(0, 128, 128, 0.8)',
  /** Brighter teal for text and icons */
  drawerGreenText: '#4FD1C5',
  /** Dark gray background */
  drawerGray: '#1C2A2E',
  /** White with slight transparency */
  drawerWhite: 'rgba(255, 255, 255, 0.9)',
  /** Body text for light mode */
  bodyText: '#3F3939',
  /** Light background colors */
  lightBlue: '#A1CFF0',
  lightRed: '#F88D8D',
  lightGreen: '#87C492',
  lightYellow: '#FFF3C0',
} as const;

/**
 * Alpha values for consistent opacity usage
 */
export const alpha = {
  0: 0,
  5: 0.05,
  10: 0.1,
  20: 0.2,
  30: 0.3,
  40: 0.4,
  50: 0.5,
  60: 0.6,
  70: 0.7,
  80: 0.8,
  90: 0.9,
  100: 1,
} as const;

export type TealScale = typeof teal;
export type NeutralScale = typeof neutral;
export type DarkNeutralScale = typeof darkNeutral;
export type FeedbackColors = typeof feedback;
export type AccentColors = typeof accent;
export type LegacyColors = typeof legacy;
export type AlphaScale = typeof alpha;
