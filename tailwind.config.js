/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{html,jsx,js}"
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '800px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      fontFamily: {
        brand: ['"Qwitcher Grypen"', 'cursive'],
        dancing: ['"Dancing Script"', 'cursive'],
      },
      fontWeight: {
        extrabold: 1000,
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        },
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        }
      },
      animation: {
        scroll: "scroll 25s linear infinite",
        marquee: "marquee 25s linear infinite",
      }
    },
  },
  plugins: [],
}

