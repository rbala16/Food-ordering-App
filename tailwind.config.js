/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./public/**/*.html", // For HTML files in the public folder
    "./src/**/*.{js,jsx,ts,tsx}", // For React components inside src folder
    "./src/**/*.css", // For any CSS files inside src folder
  ],
  theme: {
    extend: {
      backgroundImage: {
        "background-image": "url('/public/images/background-img.jpg')",
        "loginImg": "url('/public/images/loginpage.jpg')",
      },
      screens: {
        xs: "480px", //x-small screen
        sm: "640px", // Small screens
        md: "768px", // Medium screens
        lg: "1024px", // Large screens
        xl: "1280px", // X-Large screens
        "2xl": "1536px", // 2X-Large screens
      },
    },
  },
  plugins: [],
};
