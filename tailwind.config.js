/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
export default {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}',  // Adjust based on your project structure
    './public/index.html', 
    flowbite.content(),             // If you have HTML in the public folder
  ],
  theme: {
    extend: {},
  },
  plugins: [flowbite.plugin(),],
}

