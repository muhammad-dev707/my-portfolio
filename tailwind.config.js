/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Space Grotesk"', '"Plus Jakarta Sans"', 'sans-serif'],
      },
      colors: {
        dark: {
          bg: '#08080D',
          secondary: '#101019',
          card: '#141420',
          cardHover: '#1B1B2C',
          border: 'rgba(255, 255, 255, 0.08)',
          borderHover: 'rgba(139, 92, 246, 0.35)',
        },
        accent: {
          primary: '#8B5CF6',
          secondary: '#A78BFA',
          highlight: '#C4B5FD',
          glow: 'rgba(139, 92, 246, 0.25)',
        },
        palette: {
          mainBg: '#08080D',
          secBg: '#101019',
          cardBg: '#141420',
          primary: '#8B5CF6',
          secondary: '#A78BFA',
          highlight: '#C4B5FD',
          mainText: '#FFFFFF',
          secText: '#A1A1AA',
        }
      },
      boxShadow: {
        'glow-purple': '0 0 35px -5px rgba(139, 92, 246, 0.35)',
        'glow-purple-sm': '0 0 20px -3px rgba(139, 92, 246, 0.25)',
        'glow-subtle': '0 0 40px -10px rgba(139, 92, 246, 0.15)',
        'card-dark': '0 10px 30px -10px rgba(0, 0, 0, 0.7)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 5s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      }
    },
  },
  plugins: [],
};
