import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        sm: '540px',
        md: '768px',
        lg: '992px',
        xl: '1200px',
        '2xl': '1440px',
      },
      colors: {
        black: {
          text: '#333333',
          DEFAULT: '#000',
        },
        gray: {
          1: '#b2b2b2',
          2: '#666666',
          3: '#888',
          4: '#e6e6e6',
        },
        primary: {
          DEFAULT: '#717fe0',
        },
      },
      fontFamily: {
        'sf-pro': ['var(--font-sfpro)'],
        'sf-pro-expanded': ['var(--font-sfpro-expanded)'],
        playfair: ['var(--font-playfair)'],
      },
    },
  },
  plugins: [],
};
export default config;
