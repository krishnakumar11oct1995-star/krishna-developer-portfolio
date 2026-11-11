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
        sf: {
          blue: '#00a1e0',
          darkBlue: '#032d60',
          accent: '#0ea5e9',
          navy: '#0b1329',
          deep: '#070b14',
          card: '#0e1628',
          border: 'rgba(255, 255, 255, 0.08)',
          glow: 'rgba(0, 161, 224, 0.15)'
        },
        slate: {
          850: '#151f32',
          750: '#283548',
          950: '#070b14',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        'glow-cyan': '0 0 25px -5px rgba(14, 165, 233, 0.3)',
        'glow-purple': '0 0 25px -5px rgba(139, 92, 246, 0.3)',
        'glow-emerald': '0 0 25px -5px rgba(16, 185, 129, 0.3)',
        'glass-card': '0 8px 32px 0 rgba(0, 0, 0, 0.4)',
        'glass-card-hover': '0 12px 40px 0 rgba(14, 165, 233, 0.12)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
};
