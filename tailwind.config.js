/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Surfaces — soft off-white, never stark #fff flatness
        paper: '#FAFAFB',
        'paper-2': '#F3F4F7',
        surface: '#FFFFFF',
        // Ink — cool slate scale
        ink: '#0F172A',
        'ink-muted': '#475569',
        'ink-subtle': '#94A3B8',
        // Lines
        line: '#E7EAF0',
        'line-strong': '#D5DAE4',
        // One confident accent
        accent: '#2563EB',
        'accent-ink': '#1D4ED8',
        'accent-soft': '#EEF3FF',
        // System signal colors (status dots, metrics)
        signal: '#10B981',
      },
      fontFamily: {
        display: ['Space Grotesk', 'Inter', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        card: '0 1px 2px rgba(15, 23, 42, 0.04), 0 4px 16px -4px rgba(15, 23, 42, 0.08)',
        'card-hover': '0 2px 4px rgba(15, 23, 42, 0.06), 0 12px 32px -8px rgba(15, 23, 42, 0.14)',
        'accent-glow': '0 8px 30px -8px rgba(37, 99, 235, 0.35)',
      },
      backgroundImage: {
        'grid-fade': 'radial-gradient(circle at 50% 0%, rgba(37,99,235,0.06), transparent 60%)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        blink: {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out both',
        blink: 'blink 1.1s step-end infinite',
      },
    },
  },
  plugins: [],
}
