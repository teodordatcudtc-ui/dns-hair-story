import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dns: {
          bg: '#0f0f0f',
          surface: '#1a1a1a',
          charcoal: '#2a2a2a',
          gold: '#c9a227',
          'gold-light': '#e5c158',
          'gold-dark': '#9a7b1a',
          warm: '#d4a84b',
          teal: '#2d6a6a',
          white: '#f5f5f0',
          muted: '#a0a0a0',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        script: ['var(--font-script)', 'cursive'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'gold-shine': 'goldShine 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        goldShine: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.85' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gold-subtle': 'linear-gradient(135deg, #c9a22722 0%, transparent 50%)',
      },
    },
  },
  plugins: [],
};

export default config;
