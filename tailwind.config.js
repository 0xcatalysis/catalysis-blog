const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layouts/**/*.{js,ts,jsx,tsx}',
    './data/**/*.mdx',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Satoshi', 'var(--font-space-grotesk)', ...defaultTheme.fontFamily.sans],
        satoshi: ['Satoshi', 'var(--font-space-grotesk)', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        // Custom purple theme
        'custom-purple': {
          '50': '#F9E1FF',
          '100': '#F2C4FF',
          '200': '#EAA7FF',
          '300': '#E18AFF',
          '400': '#D06DFF',
          '500': '#C050FF',
          '600': '#AB33FF',
          '700': '#9717FF',
          '800': '#7B00F5',
          '900': '#5A00B5',
          '950': '#380074',
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.700'),
            a: {
              color: theme('colors.custom-purple.600'),
              '&:hover': {
                color: theme('colors.custom-purple.700'),
              },
              code: { color: theme('colors.custom-purple.500') },
            },
            'h1,h2,h3,h4,h5,h6': {
              fontFamily: 'Satoshi, var(--font-space-grotesk), sans-serif',
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.gray.300'),
            a: {
              color: theme('colors.custom-purple.400'),
              '&:hover': {
                color: theme('colors.custom-purple.300'),
              },
              code: { color: theme('colors.custom-purple.400') },
            },
            'h1,h2,h3,h4,h5,h6': {
              color: theme('colors.gray.100'),
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
}; 