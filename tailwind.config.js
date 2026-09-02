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
        background: {
          DEFAULT: '#090A0E',
          secondary: '#11131A',
          tertiary: '#181C26',
          card: '#131620',
          hover: '#1E2333',
        },
        brand: {
          yellow: '#FEBF0F',
          yellowHover: '#F8B217',
          orange: '#F69A20',
          cyan: '#00F0FF',
          pink: '#FF007F',
          purple: '#8B5CF6',
          violet: '#7928CA',
          lime: '#10B981',
          red: '#EF4444',
        },
        border: {
          DEFAULT: 'rgba(255, 255, 255, 0.08)',
          light: 'rgba(255, 255, 255, 0.15)',
          glow: 'rgba(255, 230, 0, 0.3)',
        }
      },
      fontFamily: {
        sans: ['"Wix Madefor Display"', 'Outfit', 'Inter', 'system-ui', 'sans-serif'],
        display: ['"Wix Madefor Display"', 'Outfit', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'glow-yellow': '0 0 25px -5px rgba(254, 191, 15, 0.5)',
        'glow-cyan': '0 0 25px -5px rgba(0, 240, 255, 0.4)',
        'glow-pink': '0 0 25px -5px rgba(255, 0, 127, 0.4)',
        'card': '0 10px 30px -10px rgba(0, 0, 0, 0.5)',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.6', transform: 'scale(1.05)' },
        },
        equalizer: {
          '0%, 100%': { height: '4px' },
          '50%': { height: '24px' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      },
      animation: {
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'equalizer': 'equalizer 0.8s ease-in-out infinite',
        'marquee': 'marquee 25s linear infinite',
      }
    },
  },
  plugins: [],
}
