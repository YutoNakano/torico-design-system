/**
 * Primitive Shadow Tokens
 *
 * Elevation shadows for depth and hierarchy in TORICO products.
 * Shadows are defined for both iOS and Android platforms.
 */

import { Platform } from 'react-native';

/**
 * Shadow definitions for React Native
 * iOS uses shadowX properties, Android uses elevation
 */
export const shadows = {
  /** No shadow */
  none: Platform.select({
    ios: {
      shadowColor: 'transparent',
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 0,
      shadowRadius: 0,
    },
    android: {
      elevation: 0,
    },
    default: {
      shadowColor: 'transparent',
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 0,
      shadowRadius: 0,
    },
  }),

  /** Subtle shadow - for cards and minimal elevation */
  sm: Platform.select({
    ios: {
      shadowColor: '#000000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.05,
      shadowRadius: 2,
    },
    android: {
      elevation: 1,
    },
    default: {
      shadowColor: '#000000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.05,
      shadowRadius: 2,
    },
  }),

  /** Default shadow - for elevated cards */
  md: Platform.select({
    ios: {
      shadowColor: '#000000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
    },
    android: {
      elevation: 3,
    },
    default: {
      shadowColor: '#000000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
    },
  }),

  /** Medium shadow - for modals and popovers */
  lg: Platform.select({
    ios: {
      shadowColor: '#000000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.15,
      shadowRadius: 8,
    },
    android: {
      elevation: 6,
    },
    default: {
      shadowColor: '#000000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.15,
      shadowRadius: 8,
    },
  }),

  /** Large shadow - for dialogs and overlays */
  xl: Platform.select({
    ios: {
      shadowColor: '#000000',
      shadowOffset: { width: 0, height: 8 },
      shadowOpacity: 0.2,
      shadowRadius: 16,
    },
    android: {
      elevation: 12,
    },
    default: {
      shadowColor: '#000000',
      shadowOffset: { width: 0, height: 8 },
      shadowOpacity: 0.2,
      shadowRadius: 16,
    },
  }),

  /** Extra large shadow - for maximum elevation */
  '2xl': Platform.select({
    ios: {
      shadowColor: '#000000',
      shadowOffset: { width: 0, height: 16 },
      shadowOpacity: 0.25,
      shadowRadius: 24,
    },
    android: {
      elevation: 24,
    },
    default: {
      shadowColor: '#000000',
      shadowOffset: { width: 0, height: 16 },
      shadowOpacity: 0.25,
      shadowRadius: 24,
    },
  }),
} as const;

/**
 * CSS box-shadow values for web
 */
export const webShadows = {
  none: 'none',
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  md: '0 2px 4px 0 rgba(0, 0, 0, 0.1)',
  lg: '0 4px 8px 0 rgba(0, 0, 0, 0.15)',
  xl: '0 8px 16px 0 rgba(0, 0, 0, 0.2)',
  '2xl': '0 16px 24px 0 rgba(0, 0, 0, 0.25)',
  /** Inner shadow for pressed states */
  inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
} as const;

/**
 * Elevation scale (Android-style numeric scale)
 */
export const elevation = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  6: 6,
  8: 8,
  12: 12,
  16: 16,
  24: 24,
} as const;

export type ShadowScale = typeof shadows;
export type WebShadowScale = typeof webShadows;
export type ElevationScale = typeof elevation;
