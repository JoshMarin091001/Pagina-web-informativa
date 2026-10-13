/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-green': '#123524',
        'secondary-green': '#1E4D37',
        'accent-gold': '#C8A96B',
        'beige-premium': '#E8D8B5',
        'bone-white': '#F5F5F0',
        'silver-main': '#C0C0C0',
        'vertex-silver': '#B8BCC2',
      },
      fontFamily: {
        cinzel: ['Cinzel', 'serif'],
        cormorant: ['"Cormorant Garamond"', 'serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      animation: {
        'marquee': 'marquee 28s linear infinite',
        'marquee-slow': 'marquee 40s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
