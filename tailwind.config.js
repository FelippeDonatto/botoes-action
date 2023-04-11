/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    colors: {
      violet: {
        900: '#130F1E',
        500: '#8257E5',
        300: '#9674E5',
        100: '#D9CDF7'
      },

      gray: {
        700: '#3C3748',
        500: '#6A617F'
      },

      white: '#ffffff',
      transparent: 'transparent'
    },

    extend: {
      cursor: {
        default: 'url(/default.png), default',
        desabilitado: 'url(/disable.png), disable',
        loading: 'url(/loading.png), loading',
        move: 'url(/move.png), move'
      }
    }
  },
  plugins: []
}
