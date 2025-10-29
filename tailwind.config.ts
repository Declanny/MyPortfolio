import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'manrope': ['var(--font-manrope)', 'Manrope', 'sans-serif'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        orange: {
          50: '#ffefe6',
          100: '#ffcfb0',
          200: '#ffb78a',
          300: '#ff9654',
          400: '#ff8233',
          500: '#ff6300',
          600: '#e85a00',
          700: '#b54600',
          800: '#8c3600',
          900: '#6b2a00',
        },
      },
      animation: {
        meteor: "meteor 5s linear infinite",
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
