/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: false,
  theme: {
    fontFamily: {
      'barlow': ['Barlow', 'sans-serif'],
      'fraunces': ['Fraunces', 'serif'],
    },
    fontSize: {
      'base': '18px',
    },
    fontWeight: {
      '600': 600,
      '700': 700,
      '900': 900,
    },
    textColor: {
      'soft-red': 'hsl(7, 99%, 70%)',
      'yellow': 'hsl(51, 100%, 49%)',
      'dark-desaturated-cyan': 'hsl(167, 40%, 24%)',
      'dark-blue': 'hsl(198, 62%, 26%)',
      'dark-moderate-cyan': 'hsl(168, 34%, 41%)',
      'very-dark-desaturated-blue': 'hsl(212, 27%, 19%)',
      'very-dark-grayish-blue': 'hsl(213, 9%, 39%)',
      'dark-grayish-blue': 'hsl(232, 10%, 55%)',
      'grayish-blue': 'hsl(210, 4%, 67%)',
      'white': 'hsl(0, 0%, 100%)',
      "bright-blue": 'rgba(74, 189, 242, 1)',
    },
    backgroundColor: theme => ({
      ...theme('textColor'),
    }),
    extend: {},
  },
  plugins: [],
}
