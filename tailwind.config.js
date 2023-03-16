/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "gray-bg": '#eeeeee'
      }
    },
    boxShadow: {
      navbar: "0px 5px 10px 0px rgba(120, 120, 120, 0.1), 0 2px 3px -1px rgba(3, 3, 4, 0.05)",
      "2xl": "0 0px 40px 0px rgba(0, 0, 0, 0.1)",
    },
    screens: {
      sm: "640px",
      // => @media {min-width: 640px} { ... }

      md: "768px",
      // => @media {min-width: 768px} { ... }

      lg: "1103px",
      // => @media {min-width: 1024px} { ... }

      xl: "1280px",
      // => @media {min-width: 1280px} { ... }

      "2xl": "1536px",
      // => @media {min-width: 1536px} { ... }

      "3xl": "1720px",
      // => @media {min-width: 1536px} { ... }

      "4xl": "1856px",
      // => @media {min-width: 640px} { ... }
    },
  },
  plugins: [
      require("@tailwindcss/forms"),
      require("@tailwindcss/typography"),
      require("@tailwindcss/line-clamp"),
      require("@tailwindcss/aspect-ratio"),
      require('@tailwindcss/typography'),
  ]
}
