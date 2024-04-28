const { nextui } = require('@nextui-org/react');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'home-page': `url('/images/main.jpg')`,
        'content-page': "url('/images/sprinkle.svg')",
      },
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
};
