/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ayur: {
          dark: '#12251B',
          forest: '#1B3B2B',
          sage: '#2D5842',
          lightSage: '#43785C',
          cream: '#F7F4EA',
          ivory: '#FCFAF5',
          gold: '#C99436',
          goldLight: '#E8C57D',
          goldMuted: '#D8B878',
          goldPale: '#FBF5E6',
          amber: '#B46D19',
          terracotta: '#A64B2A'
        }
      },
      fontFamily: {
        serif: ['Cinzel', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        hindi: ['Rozha One', 'Noto Serif Devanagari', 'serif']
      },
      boxShadow: {
        'ayur': '0 10px 30px -10px rgba(27, 59, 43, 0.15)',
        'gold': '0 10px 25px -5px rgba(201, 148, 54, 0.25)',
        'card': '0 4px 20px -2px rgba(18, 37, 27, 0.08)'
      }
    },
  },
  plugins: [],
}
