import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "var(--color-ink)",
        surface: "var(--color-surface)",
        line: "var(--color-line)",
        cyan: "var(--color-cyan)",
        violet: "var(--color-violet)",
        ember: "var(--color-ember)"
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(255,255,255,0.03), 0 24px 80px rgba(0,0,0,0.32)",
        card: "0 16px 50px rgba(0,0,0,0.28)"
      },
      backgroundImage: {
        grid:
          "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)"
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"]
      },
      fontSize: {
        xs: ['0.875rem', { lineHeight: '1rem' }],
        sm: ['1rem', { lineHeight: '1.25rem' }],
        base: ['1.125rem', { lineHeight: '1.5rem' }],
        lg: ['1.25rem', { lineHeight: '1.75rem' }],
        xl: ['1.375rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.625rem', { lineHeight: '2rem' }],
        '3xl': ['2rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.375rem', { lineHeight: '2.5rem' }],
        '5xl': ['3.125rem', { lineHeight: '1' }],
        '6xl': ['3.875rem', { lineHeight: '1' }],
        '7xl': ['4.625rem', { lineHeight: '1' }],
        '8xl': ['6.125rem', { lineHeight: '1' }],
        '9xl': ['8.125rem', { lineHeight: '1' }],
      }
    }
  },
  plugins: []
};

export default config;
