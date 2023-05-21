/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FAFAFF',
          50: '#FFFDE7',
          100: '#FFF9C4',
          200: '#FFF59D',
          300: '#FFF176',
          400: '#FFEE58',
          500: '#F51920FF',
        },
        secondary: {
          DEFAULT: '#F51920FF',
          500: '#A3111599',
        },
        neutral: {
          DEFAULT: '#424856FF',
          300: '#DEE1E6FF',
          400: '#BDC1CAFF',
          700: '#323743FF',
        }
      },
      zIndex: {
        '1': '-1',
      }
    },
  },
  plugins: [],
}
