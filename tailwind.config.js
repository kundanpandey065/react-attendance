// module.exports = {
//   theme: {
//     extend: {
//       fontFamily: {
//         poppins: ["Inter", "sans-serif"],
//         Inter: ["Instrument Serif", "serif"],
//         Bricolage: ["Bricolage Grotesque", "sans-serif"],
//       },
//     },
//   },
// };



/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        bricolage: ['"Bricolage Grotesque"', 'sans-serif'],
        instrument: ['"Instrument Serif"', 'serif'],
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}