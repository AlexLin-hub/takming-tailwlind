/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{html,js,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#2B2B2B",
        secondary: "#626262",
        gray: { DEFAULT: "#F8F8F8", dark: "#8D8D8D", light: "#FCFCFC" }
      },
      fontFamily: {
        sans: ['PingFang TC', "Microsoft JhengHei", ...defaultTheme.fontFamily.sans],
        serif: ['Noto Serif TC', ...defaultTheme.fontFamily.serif]
      }
    },
    container: {
      center: true,
    },
  },
  plugins: [],
}
