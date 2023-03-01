/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './index.html',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      screens: { xl: '1440px' },
      padding: { 30: '7.5rem' },
      backgroundImage: {
        'banner-mobile-light': 'url(/mobile-banner-light.png)',
        'banner-tablet-light': 'url(/tablet-banner-light.png)',
        'banner-desktop-light': 'url(/desktop-banner-light.png)',
        'banner-mobile-dark': 'url(/mobile-banner-dark.png)',
        'banner-tablet-dark': 'url(/tablet-banner-dark.png)',
        'banner-desktop-dark': 'url(/desktop-banner-dark.png)',
      },
    },
    fontSize: {
      base: ['1.25rem', '1.75rem'],
      lg: ['2rem', '2.5rem'],
      xl: ['2.5rem', '3rem'],
      '2xl': ['3rem', '1'],
      '3xl': ['4rem', '1'],
    },
    fontFamily: {
      title: ['Calistoga', 'cursive'],
      body: ['Raleway', 'sans-serif'],
    },
    colors: {
      white: '#FFF',
      black: '#000',
      'light-gradient': {
        start: '#BFDAE6',
        via: '#FCF0DD',
        end: '#FACF9D',
      },
      'dark-gradient': {
        start: '#304968',
        via: '#36C1A0',
        end: '#4650BD',
      },
      blue: {
        light: '#C8DEEF',
        DEFAULT: '#2E7BA2',
        dark: '#4650BD',
      },
      grey: {
        light: '#B6BCFF',
        DEFAULT: '#444444',
        dark: '#304968',
      },
      green: {
        light: '#36C1A0',
        dark: '#008364',
      },
      coral: {
        light: '#FBF0DD',
        DEFAULT: '#FACF9D',
        dark: '#DF9010',
      },
    },
  },
  plugins: [],
};
