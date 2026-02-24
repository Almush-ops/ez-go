/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        heebo: ['Heebo', 'Arial', 'sans-serif'],
      },
      colors: {
        // EZGO Professional Blue - Primary brand color
        ezgo: {
          50: '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#2563EB',
          600: '#1D4ED8',
          700: '#1E40AF',
          800: '#1E3A8A',
          900: '#172554',
        },
        // Semantic colors
        accent: '#F59E0B',
        dark: '#0F172A',
        surface: '#F8FAFC',
        border: '#E2E8F0',
        muted: '#64748B',
      },
    },
  },
  plugins: [],
};
