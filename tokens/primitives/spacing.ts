/**
 * Primitive Spacing Tokens
 *
 * 4px base spacing scale used throughout TORICO products.
 * Common values found in codebase: 4, 8, 12, 16, 20, 24
 */

/**
 * Spacing scale based on 4px increments
 * Keys represent the multiplier (e.g., 4 = 4 * 4px = 16px)
 */
export const spacing = {
  /** 0px */
  0: 0,
  /** 1px - for fine borders */
  px: 1,
  /** 2px */
  0.5: 2,
  /** 4px */
  1: 4,
  /** 6px */
  1.5: 6,
  /** 8px */
  2: 8,
  /** 10px */
  2.5: 10,
  /** 12px */
  3: 12,
  /** 14px */
  3.5: 14,
  /** 16px */
  4: 16,
  /** 20px */
  5: 20,
  /** 24px */
  6: 24,
  /** 28px */
  7: 28,
  /** 32px */
  8: 32,
  /** 36px */
  9: 36,
  /** 40px */
  10: 40,
  /** 44px */
  11: 44,
  /** 48px */
  12: 48,
  /** 56px */
  14: 56,
  /** 64px */
  16: 64,
  /** 80px */
  20: 80,
  /** 96px */
  24: 96,
  /** 112px */
  28: 112,
  /** 128px */
  32: 128,
  /** 144px */
  36: 144,
  /** 160px */
  40: 160,
} as const;

/**
 * Semantic spacing aliases for common use cases
 */
export const spacingAlias = {
  /** Extra small padding (4px) */
  xs: spacing[1],
  /** Small padding (8px) */
  sm: spacing[2],
  /** Medium padding (16px) */
  md: spacing[4],
  /** Large padding (24px) */
  lg: spacing[6],
  /** Extra large padding (32px) */
  xl: spacing[8],
  /** 2x Extra large padding (48px) */
  '2xl': spacing[12],
  /** 3x Extra large padding (64px) */
  '3xl': spacing[16],
} as const;

/**
 * Component-specific spacing
 * Common patterns used in DRAWER UI
 */
export const componentSpacing = {
  /** Card internal padding */
  cardPadding: spacing[4],
  /** Space between list items */
  listItemGap: spacing[3],
  /** Screen horizontal padding */
  screenPaddingX: spacing[4],
  /** Screen vertical padding */
  screenPaddingY: spacing[6],
  /** Space between sections */
  sectionGap: spacing[6],
  /** Input field padding */
  inputPadding: spacing[3],
  /** Button padding horizontal */
  buttonPaddingX: spacing[4],
  /** Button padding vertical */
  buttonPaddingY: spacing[3],
  /** Icon button size */
  iconButtonSize: spacing[11],
  /** Navigation header height */
  headerHeight: spacing[14],
  /** Tab bar height */
  tabBarHeight: spacing[16],
  /** Bottom safe area padding */
  bottomSafeArea: spacing[8],
} as const;

/**
 * Gap values for flex/grid layouts
 */
export const gap = {
  none: 0,
  xs: spacing[1],
  sm: spacing[2],
  md: spacing[4],
  lg: spacing[6],
  xl: spacing[8],
} as const;

export type SpacingScale = typeof spacing;
export type SpacingAlias = typeof spacingAlias;
export type ComponentSpacing = typeof componentSpacing;
export type GapScale = typeof gap;
