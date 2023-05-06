/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        red: {
          primary: "#FF2F01",
          secondary: "#FF7D01",
        },
        gray: {
          primary: "#D9D9D9",
          secondary: "#D2D2D2",
          third: "#ECECEC",
          forth: "#CBCBCB",
        },
        dark: {
          primary: "#1E293B",
          secondary: "#0F172A",
        },
        yellow: {
          primary: "#FFD600",
        },
      },
      padding: {
        bottom: "115px",
      },
      margin: {
        bottom: "115px",
      },
    },
  },
  plugins: [],
};
