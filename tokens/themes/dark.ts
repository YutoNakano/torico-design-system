/**
 * Dark Theme Tokens
 *
 * Dark mode colors - the primary theme for DRAWER native apps.
 * This file re-exports the semantic colors which are already dark-mode first.
 */

import {
  brand,
  background,
  text,
  border,
  interactive,
  feedbackColors,
  icon,
} from '../semantic/colors';

/**
 * Dark theme color palette
 * This is the default theme for DRAWER and Instant Output apps.
 */
export const darkTheme = {
  brand,
  background,
  text,
  border,
  interactive,
  feedback: feedbackColors,
  icon,
} as const;

export type DarkTheme = typeof darkTheme;
