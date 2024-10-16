/** @type {import('tailwindcss').Config} */
const {nextui} = require("@nextui-org/react");

module.exports = {
  content: [
      './public/index.html',
      './src/**/*.{js,jsx}',
      './src/pages/**/*.{js,jsx}',
      './src/components/**/*.{js,jsx}',
      "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      extend: {},
  },
    darkMode: "class",
    plugins: [nextui()]
}

