/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{html,js,vue}"],
  theme: {
    extend: {
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
