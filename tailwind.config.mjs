/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        heebo: ['Heebo', 'Arial', 'sans-serif'],
      },
      colors: {
        // EZGO Official Brand Colors - Based on manufacturer site
        // Primary: #0A2140 (dark navy), Accent: #B2E3F5 (light cyan)
        ezgo: {
          50: '#E8F4FC',
          100: '#D1E9F9',
          200: '#B2E3F5',  // Light cyan from manufacturer
          300: '#7ACCED',
          400: '#42B5E5',
          500: '#1A8DC9',  // Primary action color
          600: '#146FA0',
          700: '#0F5278',
          800: '#0A3550',
          900: '#0A2140',  // Dark navy from manufacturer
          950: '#061527',
        },
        // Semantic colors
        accent: '#F59E0B',
        dark: '#0A2140',   // Using manufacturer navy as dark
        surface: '#F8FAFC',
        border: '#E2E8F0',
        muted: '#64748B',
        cyan: '#B2E3F5',   // Easy access to light cyan
      },
    },
  },
  plugins: [],
};
