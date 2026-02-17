/**
 * Primitive Animation Tokens
 *
 * Duration, easing, and animation timing values for TORICO products.
 */

/**
 * Animation duration values (in milliseconds)
 */
export const duration = {
  /** Instant - no perceptible delay (0ms) */
  instant: 0,
  /** Very fast - micro-interactions (50ms) */
  fastest: 50,
  /** Fast - quick feedback (100ms) */
  fast: 100,
  /** Normal - standard transitions (200ms) */
  normal: 200,
  /** Slow - deliberate transitions (300ms) */
  slow: 300,
  /** Slower - complex transitions (400ms) */
  slower: 400,
  /** Slowest - dramatic transitions (500ms) */
  slowest: 500,
} as const;

/**
 * Easing functions for React Native Animated
 * These are CSS-compatible cubic-bezier values
 */
export const easing = {
  /** Linear - constant speed */
  linear: 'linear',
  /** Ease - slight acceleration and deceleration */
  ease: 'ease',
  /** Ease In - accelerating from rest */
  easeIn: 'ease-in',
  /** Ease Out - decelerating to rest (most common for UI) */
  easeOut: 'ease-out',
  /** Ease In Out - accelerate then decelerate */
  easeInOut: 'ease-in-out',
} as const;

/**
 * Custom cubic-bezier values for specific use cases
 * Format: [x1, y1, x2, y2]
 */
export const bezier = {
  /** Standard easing - balanced entry/exit */
  standard: [0.4, 0, 0.2, 1] as const,
  /** Emphasized - quick start, slow finish (for entries) */
  emphasized: [0, 0, 0.2, 1] as const,
  /** Decelerate - quick start, gradual stop */
  decelerate: [0, 0, 0.2, 1] as const,
  /** Accelerate - gradual start, quick exit */
  accelerate: [0.4, 0, 1, 1] as const,
  /** Sharp - minimal easing */
  sharp: [0.4, 0, 0.6, 1] as const,
  /** Bounce - slight overshoot */
  bounce: [0.68, -0.55, 0.265, 1.55] as const,
} as const;

/**
 * Spring animation configurations for React Native Animated.spring()
 */
export const spring = {
  /** Gentle - subtle spring effect */
  gentle: {
    stiffness: 120,
    damping: 14,
    mass: 1,
  },
  /** Default - balanced spring */
  default: {
    stiffness: 150,
    damping: 15,
    mass: 1,
  },
  /** Bouncy - noticeable bounce */
  bouncy: {
    stiffness: 180,
    damping: 12,
    mass: 1,
  },
  /** Stiff - quick and responsive */
  stiff: {
    stiffness: 250,
    damping: 20,
    mass: 1,
  },
  /** Slow - deliberate motion */
  slow: {
    stiffness: 90,
    damping: 20,
    mass: 1,
  },
} as const;

/**
 * Transition presets combining duration and easing
 */
export const transition = {
  /** Quick feedback transitions */
  fast: {
    duration: duration.fast,
    easing: easing.easeOut,
  },
  /** Standard UI transitions */
  normal: {
    duration: duration.normal,
    easing: easing.easeOut,
  },
  /** Slower, more noticeable transitions */
  slow: {
    duration: duration.slow,
    easing: easing.easeInOut,
  },
  /** Modal/overlay appearance */
  modal: {
    duration: duration.slow,
    easing: easing.easeOut,
  },
  /** Page transitions */
  page: {
    duration: duration.slower,
    easing: easing.easeInOut,
  },
} as const;

/**
 * Delay values for staggered animations
 */
export const delay = {
  none: 0,
  short: 50,
  medium: 100,
  long: 200,
  stagger: 50, // Per-item delay in lists
} as const;

export type DurationScale = typeof duration;
export type EasingScale = typeof easing;
export type BezierCurves = typeof bezier;
export type SpringConfigs = typeof spring;
export type TransitionPresets = typeof transition;
export type DelayScale = typeof delay;
