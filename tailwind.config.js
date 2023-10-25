/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily: {
        mullish: ["Mulish", "sans-serif"],
      },
      colors: {
        bblue:"rgb(25,28,45)",
        deepBlue: "#02042a",
        lightBlue: "#2b84ea",
        lightBlue300: "#4b94ed",
        lightBlue500: "#0b72e7",
        greenLight: "#61cea6",
        grayText: "#818597",
        lightGray: "#e2e2e2",
        grayBlue: "#344a6c",
        deepBlueHead: "#162f56",
        gray2: "#525a76",
      },
      backgroundPosition: {
        left2: '-18rem 0rem',
        left3: '0rem 0rem'
      },
      backgroundSize: {
        bgsize1: '167rem 120rem',
        bgsize2: '100% 64rem',
        bgsize3: '160rem 130rem',
        bgsize4: '160rem 85rem',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}