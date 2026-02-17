/**
 * Theme Tokens Index
 *
 * Exports light and dark theme configurations.
 * Use these for theming support in your application.
 */

export { lightTheme, type LightTheme } from './light';
export { darkTheme, type DarkTheme } from './dark';

import { lightTheme, type LightTheme } from './light';
import { darkTheme, type DarkTheme } from './dark';

/**
 * Theme union type
 */
export type Theme = LightTheme | DarkTheme;

/**
 * Theme names
 */
export type ThemeName = 'light' | 'dark';

/**
 * Theme map for easy access
 */
export const themes = {
  light: lightTheme,
  dark: darkTheme,
} as const;

/**
 * Get theme by name
 */
export function getTheme(name: ThemeName): Theme {
  return themes[name];
}

/**
 * Default theme (dark for DRAWER apps)
 */
export const defaultTheme = darkTheme;
export const defaultThemeName: ThemeName = 'dark';
