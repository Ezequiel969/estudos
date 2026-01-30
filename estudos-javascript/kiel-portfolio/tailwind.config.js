/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: [
          '"Segoe UI"',
          '"Inter"',
          'system-ui',
          '-apple-system',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
        ],
      },
      boxShadow: {
        glow: '0 0 40px rgba(79, 188, 255, 0.25)',
        soft: '0 30px 60px -40px rgba(9, 12, 20, 0.45)',
        insetGlow: 'inset 0 1px 0 rgba(255, 255, 255, 0.08)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        },
        breathe: {
          '0%, 100%': { opacity: '0.55' },
          '50%': { opacity: '1' },
        },
      },
      animation: {
        float: 'float 8s ease-in-out infinite',
        shimmer: 'shimmer 10s ease infinite',
        breathe: 'breathe 5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
