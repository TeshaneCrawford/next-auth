const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: colors.black,
        white: colors.white,
        rose: colors.rose,
        pink: colors.pink,
        fuchsia: colors.fuchsia,
        purple: colors.purple,
        violet: colors.violet,
        indigo: colors.indigo,
        blue: colors.blue,
        lightBlue: colors.lightBlue, // Only in Tailwind CSS <=v2.1
        sky: colors.sky, // As of Tailwind CSS v2.2, `lightBlue` has been renamed to `sky`  
        cyan: colors.cyan,
        teal: colors.teal,
        emerald: colors.emerald,
        green: colors.green,
        lime: colors.lime,
        yellow: colors.yellow,
        amber: colors.amber,
        orange: colors.orange,
        red: colors.red,
        slate: colors.slate,
        zinc: colors.zinc,
        gray: colors.gray,
        neutral: colors.slate,
        stone: colors.stone,
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
}
