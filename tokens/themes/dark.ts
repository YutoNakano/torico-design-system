/**
 * Dark Theme Tokens
 *
 * Dark mode colors - the primary theme for DRAWER native apps.
 * This file re-exports the semantic colors which are already dark-mode first.
 */

import {
  background,
  text,
  border,
  interactive,
  feedbackColors,
  icon,
  drawerGreen,
} from '../semantic/colors';

/**
 * Dark theme color palette
 * This is the default theme for DRAWER and Instant Output apps.
 */
export const darkTheme = {
  background,
  text,
  border,
  interactive,
  feedback: feedbackColors,
  icon,
  drawerGreen,
} as const;

export type DarkTheme = typeof darkTheme;
