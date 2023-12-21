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
        'cyan': {
          50: '#e09600',
          100: '#ffcf70',
          200: '#ffc95c',
          300: '#ffc247',
          400: '#ffbb33',
          500: '#FFB41F',
          600: '#FFAD0A',
          700: '#F5A300',
          800: '#E09600',
          900: '#CC8800'
        },
        'cool-blue':{
          50: '#81C2EE',
          80: '#6FBAEB',
          100: '#50aae7',
          150: '#3AA0E4',
          200: '#2897E2',
          300: '#1D8DD7',
        },
        'base-color':{
          dark : '#f1f5f9',
          light : '#464040',
        },
        'des':{
          dark : '#9CA3AF',
          light : '#6B7280',
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
        'sans': ['Satoshi-Medium','Satoshi-Bold', ...defaultTheme.fontFamily.sans],
        'satoshi': ['satoshi', 'sans-serif'],
      },
      fontSize: {
        sm: ['16px', '22px'],
        base: ['18px', '24px'],
        lg: ['20px', '28px'],
        xl: ['28px', '32px'],
      }
    }
  },
  backgroundColor: {
    'whiteSmoke': '#f5f5f5',
  },
  plugins: [
      require('flowbite/plugin')
  ],
}
