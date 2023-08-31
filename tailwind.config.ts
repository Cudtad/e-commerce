import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'sf-pro': ['var(--font-sfpro)'],
        'sf-pro-expanded': ['var(--font-sfpro-expanded)'],
      },
    },
  },
  plugins: [],
};
export default config;
