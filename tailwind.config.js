/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: '#6366f1',
          foreground: '#ffffff',
        },
        muted: {
          DEFAULT: '#6b7280',
          foreground: '#f3f4f6',
        },
        accent: '#a855f7',
      },
    },
  },
  plugins: [],
};