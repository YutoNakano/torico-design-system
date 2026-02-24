/**
 * Token Build Script
 *
 * Compiles design tokens into platform-specific outputs:
 * - React Native: TypeScript module with StyleSheet-compatible values
 * - Web: Tailwind config extension and CSS custom properties
 * - Types: TypeScript declaration files
 */

import * as fs from 'fs';
import * as path from 'path';

// =============================================================================
// Token Source Data (imported at build time)
// =============================================================================

const distDir = path.resolve(__dirname, '../dist');
const nativeDir = path.join(distDir, 'native');
const webDir = path.join(distDir, 'web');
const typesDir = path.join(distDir, 'types');

// Ensure directories exist
[distDir, nativeDir, webDir, typesDir].forEach((dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

const timestamp = new Date().toISOString();

// =============================================================================
// Asset Verification
// =============================================================================

const assetsDir = path.resolve(__dirname, '../assets/characters');
const requiredAssets = [
  'drawer-app-icon.png',
  'drawer-main.png',
  'drawer-face-neutral.png',
  'drawer-face-happy.png',
  'drawer-face-frustrated.png',
  'drawer-face-confused.png',
];

const missingAssets = requiredAssets.filter(
  (asset) => !fs.existsSync(path.join(assetsDir, asset))
);

if (missingAssets.length > 0) {
  console.warn(`⚠ Missing character assets: ${missingAssets.join(', ')}`);
} else {
  console.log('✓ All character assets present');
}

// =============================================================================
// Native Output Generation
// =============================================================================

const nativeOutput = `/**
 * TORICO Design System - React Native Tokens
 *
 * Auto-generated file. Do not edit directly.
 * Generated: ${timestamp}
 */

// Re-export all tokens from source
export * from '../tokens/index';

// Additional React Native specific utilities can be added here
`;

fs.writeFileSync(path.join(nativeDir, 'index.js'), nativeOutput);
fs.writeFileSync(path.join(nativeDir, 'index.d.ts'), `export * from '../tokens/index';`);

console.log('✓ Generated native tokens');

// =============================================================================
// Web/Tailwind Output Generation
// =============================================================================

// Color values for Tailwind
const tailwindColors: Record<string, string> = {
  // Brand colors (neutral-first: white on dark, black on light)
  'brand-primary': '#FFFFFF',
  'brand-primary-hover': '#EBEBEB',
  'brand-secondary': '#1A1A1A',

  // Neutral palette
  'neutral-0': '#FFFFFF',
  'neutral-50': '#FAFAFA',
  'neutral-100': '#F5F5F5',
  'neutral-200': '#EBEBEB',
  'neutral-300': '#E0E0E0',
  'neutral-400': '#BFBFBF',
  'neutral-500': '#8E8E8E',
  'neutral-600': '#666666',
  'neutral-700': '#444444',
  'neutral-800': '#282828',
  'neutral-900': '#141414',
  'neutral-950': '#0C0C0C',

  // Dark app backgrounds
  'app-background': '#0C0C0C',
  'app-secondary': '#141414',
  'app-tertiary': '#1A1A1A',
  'app-surface': '#252525',
  'app-gray': '#1A1A1A',

  // Feedback colors
  'success': '#22C55E',
  'success-light': '#DCFCE7',
  'success-dark': '#166534',
  'warning': '#EAB308',
  'warning-light': '#FEF9C3',
  'warning-dark': '#A16207',
  'error': '#EF4444',
  'error-light': '#FEE2E2',
  'error-dark': '#B91C1C',
  'info': '#3B82F6',
  'info-light': '#DBEAFE',
  'info-dark': '#1D4ED8',
};

// Spacing scale for Tailwind
const tailwindSpacing: Record<string, string> = {
  'px': '1px',
  '0': '0',
  '0.5': '2px',
  '1': '4px',
  '1.5': '6px',
  '2': '8px',
  '2.5': '10px',
  '3': '12px',
  '3.5': '14px',
  '4': '16px',
  '5': '20px',
  '6': '24px',
  '7': '28px',
  '8': '32px',
  '9': '36px',
  '10': '40px',
  '11': '44px',
  '12': '48px',
  '14': '56px',
  '16': '64px',
  '20': '80px',
  '24': '96px',
  '28': '112px',
  '32': '128px',
};

// Font sizes for Tailwind
const tailwindFontSize: Record<string, [string, { lineHeight: string }]> = {
  'xs': ['12px', { lineHeight: '16px' }],
  'sm': ['14px', { lineHeight: '20px' }],
  'base': ['16px', { lineHeight: '24px' }],
  'lg': ['18px', { lineHeight: '28px' }],
  'xl': ['20px', { lineHeight: '28px' }],
  '2xl': ['24px', { lineHeight: '32px' }],
  '3xl': ['28px', { lineHeight: '36px' }],
  '4xl': ['32px', { lineHeight: '40px' }],
  '5xl': ['40px', { lineHeight: '48px' }],
  '6xl': ['48px', { lineHeight: '56px' }],
};

// Border radius for Tailwind
const tailwindBorderRadius: Record<string, string> = {
  'none': '0',
  'xs': '2px',
  'sm': '4px',
  'md': '8px',
  'lg': '12px',
  'xl': '16px',
  '2xl': '20px',
  '3xl': '24px',
  'full': '9999px',
};

// Box shadow for Tailwind
const tailwindBoxShadow: Record<string, string> = {
  'none': 'none',
  'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  'md': '0 2px 4px 0 rgba(0, 0, 0, 0.1)',
  'lg': '0 4px 8px 0 rgba(0, 0, 0, 0.15)',
  'xl': '0 8px 16px 0 rgba(0, 0, 0, 0.2)',
  '2xl': '0 16px 24px 0 rgba(0, 0, 0, 0.25)',
};

const tailwindConfig = `/**
 * TORICO Design System - Tailwind Config Extension
 *
 * Auto-generated file. Do not edit directly.
 * Generated: ${timestamp}
 *
 * Usage in tailwind.config.ts:
 *
 * import { toricoTokens } from '@torico/design-system/tailwind';
 *
 * export default {
 *   theme: {
 *     extend: {
 *       colors: toricoTokens.colors,
 *       spacing: toricoTokens.spacing,
 *       // ... etc
 *     }
 *   }
 * }
 */

export const toricoTokens = {
  colors: ${JSON.stringify(tailwindColors, null, 2)},
  spacing: ${JSON.stringify(tailwindSpacing, null, 2)},
  fontSize: ${JSON.stringify(tailwindFontSize, null, 2)},
  borderRadius: ${JSON.stringify(tailwindBorderRadius, null, 2)},
  boxShadow: ${JSON.stringify(tailwindBoxShadow, null, 2)},
};

export default toricoTokens;
`;

fs.writeFileSync(path.join(webDir, 'tailwind.tokens.js'), tailwindConfig);

console.log('✓ Generated Tailwind tokens');

// =============================================================================
// CSS Custom Properties Output
// =============================================================================

function colorsToCssVars(colors: Record<string, string>, prefix: string): string {
  return Object.entries(colors)
    .map(([key, value]) => `  --${prefix}-${key}: ${value};`)
    .join('\n');
}

function spacingToCssVars(spacing: Record<string, string>): string {
  return Object.entries(spacing)
    .map(([key, value]) => `  --spacing-${key}: ${value};`)
    .join('\n');
}

const cssOutput = `/**
 * TORICO Design System - CSS Custom Properties
 *
 * Auto-generated file. Do not edit directly.
 * Generated: ${timestamp}
 *
 * Usage:
 * @import '@torico/design-system/dist/web/tokens.css';
 */

:root {
  /* Colors */
${colorsToCssVars(tailwindColors, 'color')}

  /* Spacing */
${spacingToCssVars(tailwindSpacing)}

  /* Border Radius */
  --radius-none: 0;
  --radius-xs: 2px;
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
  --radius-2xl: 20px;
  --radius-3xl: 24px;
  --radius-full: 9999px;

  /* Font Sizes */
  --font-size-xs: 12px;
  --font-size-sm: 14px;
  --font-size-base: 16px;
  --font-size-lg: 18px;
  --font-size-xl: 20px;
  --font-size-2xl: 24px;
  --font-size-3xl: 28px;
  --font-size-4xl: 32px;
  --font-size-5xl: 40px;
  --font-size-6xl: 48px;

  /* Font Weights */
  --font-weight-thin: 100;
  --font-weight-light: 300;
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
  --font-weight-extrabold: 800;
  --font-weight-black: 900;

  /* Line Heights */
  --line-height-none: 1;
  --line-height-tight: 1.25;
  --line-height-snug: 1.375;
  --line-height-normal: 1.5;
  --line-height-relaxed: 1.625;
  --line-height-loose: 2;

  /* Shadows */
  --shadow-none: none;
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-md: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 4px 8px 0 rgba(0, 0, 0, 0.15);
  --shadow-xl: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  --shadow-2xl: 0 16px 24px 0 rgba(0, 0, 0, 0.25);

  /* Animation Durations */
  --duration-instant: 0ms;
  --duration-fastest: 50ms;
  --duration-fast: 100ms;
  --duration-normal: 200ms;
  --duration-slow: 300ms;
  --duration-slower: 400ms;
  --duration-slowest: 500ms;

  /* Easing */
  --ease-linear: linear;
  --ease-in: ease-in;
  --ease-out: ease-out;
  --ease-in-out: ease-in-out;
}
`;

fs.writeFileSync(path.join(webDir, 'tokens.css'), cssOutput);
fs.writeFileSync(path.join(webDir, 'index.js'), `export * from './tailwind.tokens.js';`);

console.log('✓ Generated CSS custom properties');

// =============================================================================
// Type Definitions
// =============================================================================

const typeDefinitions = `/**
 * TORICO Design System - Type Definitions
 *
 * Auto-generated file. Do not edit directly.
 * Generated: ${timestamp}
 */

export * from '../tokens/index';
`;

fs.writeFileSync(path.join(typesDir, 'index.d.ts'), typeDefinitions);

console.log('✓ Generated type definitions');

// =============================================================================
// Summary
// =============================================================================

console.log('\n✅ Token build complete!');
console.log(`   - Native: ${nativeDir}`);
console.log(`   - Web: ${webDir}`);
console.log(`   - Types: ${typesDir}`);
console.log('\n📦 Build complete!');
