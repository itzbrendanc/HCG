/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        hcg: {
          50: '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#2F6FB4',
          600: '#1F5F9E',
          700: '#174C82',
          800: '#123A63',
          900: '#0B2641',
        },
        night: {
          50: '#F7F7F8',
          100: '#E8E9ED',
          200: '#C8CBD6',
          300: '#A2A8BD',
          400: '#767FA0',
          500: '#535A7A',
          600: '#3D425D',
          700: '#2B2E45',
          800: '#1B1D2E',
          900: '#0B0C14',
          950: '#05060B',
        },
      },
      boxShadow: {
        soft: '0 16px 40px rgba(0, 0, 0, 0.45)',
        card: '0 26px 70px rgba(0, 0, 0, 0.55)',
        glow: '0 0 0 1px rgba(47, 111, 180, 0.25), 0 18px 60px rgba(47, 111, 180, 0.18)',
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.25rem',
      },
    },
  },
  plugins: [],
}
