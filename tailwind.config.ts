import type { Config } from 'tailwindcss';
import { theme } from '@squaress/ui/theme';
const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: theme,
  plugins: [],
};
export default config;
