/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#333333', // 墨黑
          light: '#4A4A4A',
        },
        secondary: {
          DEFAULT: '#F7F3E9', // 宣纸米白
          dark: '#E8E4DA',
        },
        accent: {
          DEFAULT: '#BC002D', // 朱砂红
          light: '#D4003A',
        },
        border: {
          DEFAULT: '#E5E7EB', // 默认边框颜色
          dark: '#D1D5DB',
        }
      },
      fontFamily: {
        song: ['Songti SC', 'SimSun', 'serif'],
        sans: ['Noto Sans SC', 'sans-serif'],
        serif: ['Noto Serif SC', 'serif'],
      },
      animation: {
        'scroll-x': 'scroll-x 25s linear infinite',
        'fade-in': 'fade-in 0.5s ease-out',
      },
      keyframes: {
        'scroll-x': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
} 