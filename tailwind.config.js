import { addDynamicIconSelectors } from '@iconify/tailwind';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,css,js,ts,vue}'
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        satoshi: ['Satoshi', 'sans-serif'],
        excon: ['Excon', 'sans-serif'],
        anton: ['Anton', 'sans-serif'],
        'cabin-grotesk': ['CabinGrotesk', 'sans-serif'],
        'clash-display': ['ClashDisplay', 'sans-serif'],
      }
    },
  },
  plugins: [
    addDynamicIconSelectors()
  ],
}

