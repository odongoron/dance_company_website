import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
      colors: {
        'navy': {
          800: '#1a2744',
          900: '#111827',
          950: '#0b1120',
        },
        'gold': {
          200: '#ffd700',
          300: '#f4c430',
          400: '#daa520',
        },
        'dance-blue': '#1a3264',
        'dance-gold': '#c4a01c',
      },
      animation: {
        'scroll': 'scroll 40s linear infinite',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(-250px * 7))' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
