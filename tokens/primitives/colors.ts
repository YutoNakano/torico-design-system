/**
 * Primitive Color Tokens
 *
 * Neutral-first color system for the TORICO design system.
 * Brand personality comes from character assets, not UI chrome.
 * These should NOT be used directly in components - use semantic colors instead.
 */

/**
 * Neutral palette - The core palette for all UI elements
 * Clean grayscale for a minimal, content-first aesthetic
 */
export const neutral = {
  0: '#FFFFFF',
  50: '#FAFAFA',
  100: '#F5F5F5',
  200: '#EBEBEB',
  300: '#E0E0E0',
  400: '#BFBFBF',
  500: '#8E8E8E',
  600: '#666666',
  700: '#444444',
  800: '#282828',
  900: '#141414',
  950: '#0C0C0C',
} as const;

/**
 * Dark backgrounds - Pure dark tones for dark mode
 * Clean and minimal to let character assets provide color
 */
export const darkNeutral = {
  /** Primary app background (iOS systemBackground) */
  background: '#000000',
  /** Secondary background - iOS secondarySystemBackground dark mode */
  backgroundSecondary: '#1C1C1E',
  /** Tertiary background - iOS tertiarySystemBackground dark mode */
  backgroundTertiary: '#2C2C2E',
  /** Dark gray for headers and navigation */
  gray: '#1A1A1A',
  /** Surface for inputs and interactive elements */
  surface: '#252525',
  /** Darker surface variant */
  surfaceDark: '#1E1E1E',
} as const;

/**
 * Feedback colors - For status indicators
 */
export const feedback = {
  success: {
    light: '#DCFCE7',
    base: '#22C55E',
    dark: '#166534',
  },
  warning: {
    light: '#FEF9C3',
    base: '#EAB308',
    dark: '#A16207',
  },
  error: {
    light: '#FEE2E2',
    base: '#EF4444',
    dark: '#B91C1C',
  },
  info: {
    light: '#DBEAFE',
    base: '#3B82F6',
    dark: '#1D4ED8',
  },
} as const;

/**
 * Accent colors - Minimal set for special UI needs
 */
export const accent = {
  orange: '#ED8936',
  blue: '#4299E1',
  purple: '#9F7AEA',
  pink: '#ED64A6',
  teal: '#4FD1C5',
} as const;

/**
 * Pastel colors - Soft category/label colors
 */
export const pastel = {
  blue: '#A1CFF0',
  red: '#F88D8D',
  green: '#87C492',
  yellow: '#FFF3C0',
} as const;

/**
 * Drawer brand-specific color variants
 */
export const drawer = {
  green: '#4FD1C5',
  gray: '#726E6E',
  white: 'rgba(255, 255, 255, 0.9)',
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

export type NeutralScale = typeof neutral;
export type DarkNeutralScale = typeof darkNeutral;
export type FeedbackColors = typeof feedback;
export type AccentColors = typeof accent;
export type AlphaScale = typeof alpha;
export type PastelColors = typeof pastel;
export type DrawerColors = typeof drawer;
