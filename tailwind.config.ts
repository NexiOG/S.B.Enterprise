import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0A0E1A',
        foreground: '#FFFFFF',
        gold: {
          50: '#FFFBEB',
          100: '#FEF3C7',
          400: '#FBBF24',
          500: '#F59E0B',
          600: '#D97706',
          700: '#B45309',
        },
        emerald: {
          50: '#ECFDF5',
          100: '#D1FAE5',
          400: '#34D399',
          500: '#10B981',
          600: '#059669',
          700: '#047857',
        },
        royal: {
          900: '#0A0E1A',
          950: '#050811',
        },
      },
      fontFamily: {
        display: ['var(--font-sans)', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        sans: ['var(--font-sans)', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      boxShadow: {
        lux: '0 10px 40px -10px rgba(0,0,0,0.1), 0 20px 25px -5px rgba(0,0,0,0.05)',
        gold: '0 0 35px -5px rgba(245, 158, 11, 0.25)',
      },
    },
  },
  plugins: [],
};
export default config;
