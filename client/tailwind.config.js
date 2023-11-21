/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: { alimama: ["AlimamaFangYuanTiVF-Square", "helvetica"] },
      gridTemplateRows: {
        12: "repeat(12, minmax(0, 1fr))",
      },
    },
  },
  plugins: [],
};
