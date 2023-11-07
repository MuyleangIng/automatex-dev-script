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
        'cyan': {
          50: '#41DC91',
          100: '#30D987',
          200: '#26CF7D',
          300: '#23BE73',
          400: '#20AC68',
          500: '#1C9B5E',
          600: '#198A53',
          700: '#167949',
          800: '#13673F',
          900: '#105634'
        }
      },
      fontFamily: {
        'sans': ['Satoshi-Regular', ...defaultTheme.fontFamily.sans],
        'satoshi': ['satoshi', 'sans-serif'],
      },
      fontSize: {
        sm: ['16px', '22px'],
        base: ['16px', '24px'],
        lg: ['20px', '28px'],
        xl: ['24px', '32px'],
      }
    }
  },
  plugins: [
      require('flowbite/plugin')
  ],
}
