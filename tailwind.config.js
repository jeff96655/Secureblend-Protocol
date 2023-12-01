/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#101027",
          "200": "#0f0f25",
        },
        white: "#fff",
        blue: "#022bff",
        red: "#ff0000",
        yellow: "#fdf307",
        fuchsia: {
          "100": "#ff00d6",
          "200": "#ff00c7",
        },
        lime: "#06f901",
        aqua: "#01f9f9",
        black: "#000",
        deepskyblue: "#07c2fd",
      },
      spacing: {},
      fontFamily: {
        michroma: "Michroma",
        "microsoft-himalaya": "'Microsoft Himalaya'",
        podkova: "Podkova",
      },
      borderRadius: {
        "3xs": "10px",
        xl: "20px",
        "8xs": "5px",
      },
    },
    fontSize: {
      lg: "18px",
      "11xl": "30px",
      xl: "20px",
      "3xl": "22px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      md: {
        max: "960px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
