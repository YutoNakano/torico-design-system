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
  /** Primary app background */
  background: '#0C0C0C',
  /** Secondary background */
  backgroundSecondary: '#141414',
  /** Tertiary background */
  backgroundTertiary: '#1A1A1A',
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
  blue: '#3B82F6',
  red: '#EF4444',
  green: '#22C55E',
  orange: '#F97316',
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
