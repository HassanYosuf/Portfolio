/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a0f1e',
        surface: '#111827',
        primary: '#38bdf8',
        secondary: '#818cf8',
        'text-primary': '#f1f5f9',
        'text-muted': '#94a3b8',
        border: '#1e293b',
      },
      fontFamily: {
        heading: ['Space Grotesk', 'Inter', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(135deg, #0a0f1e 0%, #1e1b4b 50%, #0a0f1e 100%)',
      },
      boxShadow: {
        'glow-primary': '0 0 20px rgba(56, 189, 248, 0.3)',
        'glow-secondary': '0 0 20px rgba(129, 140, 248, 0.3)',
      },
    },
  },
  plugins: [],
}
