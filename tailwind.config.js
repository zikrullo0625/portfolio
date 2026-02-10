/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'cyber-bg': '#06070b',
        'cyber-purple': '#a855f7',
        'cyber-cyan': '#06b6d4',
        'cyber-pink': '#ec4899',
      },
      boxShadow: {
        neon: '0 0 24px rgba(168,85,247,.35), 0 0 42px rgba(6,182,212,.22)',
      },
      fontFamily: {
        display: ['ui-sans-serif', 'system-ui'],
        mono: ['ui-monospace', 'SFMono-Regular'],
      },
    },
  },
  plugins: [],
}
