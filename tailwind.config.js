/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    './node_modules/flowbite-react/**/*.js',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './public/**/*.html'
  ],
  theme: {
    extend: {
      colors: {
        // generate from https://coolors.co/27ca7a-effbf9-e3f09b-87b6a7-5b5941
        'orange': {
          50: '#FFC247',
          80: '#FFBB33',
          100: '#FFB621',
          150: '#FFAD0A',
          200: '#F5A300',
          300: '#E09600',
        },
        'cool-blue':{
          50: '#81C2EE',
          80: '#6FBAEB',
          100: '#50aae7',
          150: '#3AA0E4',
          200: '#2897E2',
          300: '#1D8DD7',

        }
      },
      fontWeight: {
        hairline: '100',
        extralight: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold : '800',
        black: '900'
      },
      fontFamily: {
        'sans': ['Satoshi-Regular', ...defaultTheme.fontFamily.sans],
        'satoshi': ['satoshi', 'sans-serif'],
      },
      fontSize: {
        sm: ['16px', '22px'],
        base: ['16px', '24px'],
        lg: ['20px', '28px'],
        xl: ['28px', '32px'],
      }
    }
  },
  plugins: [
      require('flowbite/plugin')
  ],
}
