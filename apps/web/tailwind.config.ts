import type { Config } from 'tailwindcss';
import basePreset from '@couchberg/tailwind-config/base';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  presets: [basePreset],
} satisfies Config;
