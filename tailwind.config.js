/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: '#090909',
        'true-black': '#000000',
        'warm-white': '#F8F6F2',
        'pure-white': '#FFFFFF',
        'soft-stone': '#E9E5DF',
        'warm-taupe': '#B9ADA2',
        'nude-beige': '#D8C3B5',
        'muted-blush': '#CFA7AE',
        'deep-charcoal': '#222222',
      },
      fontFamily: {
        display: ['Michroma', 'Eurostile Extended', 'Microgramma', 'Arial Wide', 'sans-serif'],
        body: ['Manrope', 'Inter', 'Arial', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.25em',
        mega: '0.35em',
      },
      borderRadius: {
        'sm': '4px',
        'md': '6px',
        'lg': '8px',
      },
      animation: {
        'subtle-pulse': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 0.3s ease-out forwards',
        'slide-up': 'slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'marquee': 'marquee 30s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
