import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'deep-forest': '#0B2F27',
        'forest-green': '#164E41',
        'mint': '#5EEAD4',
        'soft-mint': '#CCFBF1',
        'off-white': '#F8FAF9',
        'dark-text': '#17211F',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero': ['clamp(2.25rem,5vw,3rem)', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'h1': ['clamp(2rem,4vw,2.75rem)', { lineHeight: '1.2' }],
        'h2': ['clamp(1.75rem,3vw,2rem)', { lineHeight: '1.25' }],
        'h3': ['1.25rem', { lineHeight: '1.4' }],
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease forwards',
        'slide-down': 'slideDown 0.3s ease forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', maxHeight: '0', transform: 'translateY(-8px)' },
          '100%': { opacity: '1', maxHeight: '600px', transform: 'translateY(0)' },
        },
      },
      boxShadow: {
        'card': '0 2px 16px 0 rgba(11,47,39,0.10)',
        'card-hover': '0 8px 32px 0 rgba(11,47,39,0.18)',
      },
      transitionTimingFunction: {
        'spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
    },
  },
  plugins: [],
}

export default config
