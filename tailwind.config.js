/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Brand
        brand: {
          50:  '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
        },
        accent: {
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
        },
        // Surface tokens used together with CSS variables in index.css
        surface: {
          light: '#ffffff',
          'light-muted': '#f8fafc',
          dark: '#0b0f1a',
          'dark-muted': '#11172a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      keyframes: {
        'fade-in':        { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        'fade-up':        { '0%': { opacity: '0', transform: 'translateY(24px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        'fade-down':      { '0%': { opacity: '0', transform: 'translateY(-24px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        'scale-in':       { '0%': { opacity: '0', transform: 'scale(.92)' }, '100%': { opacity: '1', transform: 'scale(1)' } },
        'slide-in-left':  { '0%': { opacity: '0', transform: 'translateX(-32px)' }, '100%': { opacity: '1', transform: 'translateX(0)' } },
        'slide-in-right': { '0%': { opacity: '0', transform: 'translateX(32px)' }, '100%': { opacity: '1', transform: 'translateX(0)' } },
        float:            { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-12px)' } },
        'float-slow':     { '0%,100%': { transform: 'translateY(0) translateX(0)' }, '50%': { transform: 'translateY(-18px) translateX(8px)' } },
        'gradient-pan':   { '0%,100%': { backgroundPosition: '0% 50%' }, '50%': { backgroundPosition: '100% 50%' } },
        'blob':           { '0%,100%': { transform: 'translate(0,0) scale(1)' }, '33%': { transform: 'translate(30px,-40px) scale(1.05)' }, '66%': { transform: 'translate(-20px,20px) scale(.95)' } },
        shimmer:          { '0%': { backgroundPosition: '-200% 0' }, '100%': { backgroundPosition: '200% 0' } },
        blink:            { '0%,100%': { opacity: '1' }, '50%': { opacity: '0' } },
        'marquee-x':      { '0%': { transform: 'translateX(0)' }, '100%': { transform: 'translateX(-50%)' } },
        'progress-bar':   { '0%': { transform: 'translateX(-100%)' }, '100%': { transform: 'translateX(100%)' } },
      },
      animation: {
        'fade-in':        'fade-in .7s ease-out both',
        'fade-up':        'fade-up .8s ease-out both',
        'fade-down':      'fade-down .8s ease-out both',
        'scale-in':       'scale-in .6s ease-out both',
        'slide-in-left':  'slide-in-left .8s ease-out both',
        'slide-in-right': 'slide-in-right .8s ease-out both',
        float:            'float 6s ease-in-out infinite',
        'float-slow':     'float-slow 9s ease-in-out infinite',
        'gradient-pan':   'gradient-pan 8s ease-in-out infinite',
        blob:             'blob 14s ease-in-out infinite',
        shimmer:          'shimmer 2.4s linear infinite',
        blink:            'blink 1s step-end infinite',
        'marquee-x':      'marquee-x 30s linear infinite',
        'progress-bar':   'progress-bar 1.6s ease-in-out infinite',
      },
      backgroundImage: {
        'grid-light': "linear-gradient(rgba(15,23,42,.06) 1px,transparent 1px),linear-gradient(90deg,rgba(15,23,42,.06) 1px,transparent 1px)",
        'grid-dark':  "linear-gradient(rgba(148,163,184,.08) 1px,transparent 1px),linear-gradient(90deg,rgba(148,163,184,.08) 1px,transparent 1px)",
        'noise':      "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 .35 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
      },
      boxShadow: {
        glow:   '0 0 0 1px rgba(99,102,241,.25), 0 10px 40px -10px rgba(99,102,241,.45)',
        'glow-sm': '0 0 0 1px rgba(99,102,241,.18), 0 6px 20px -8px rgba(99,102,241,.35)',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(.19,1,.22,1)',
      },
    },
  },
  plugins: [],
};
