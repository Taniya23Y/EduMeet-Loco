/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#8f9499",
          "200": "#1d1d1d",
          "300": "rgba(29, 29, 29, 0.64)",
          "400": "rgba(0, 0, 0, 0.98)",
        },
        orange: "#ffb400",
        plum: "#bcabf2",
        thistle: {
          "100": "#ffd8f9",
          "200": "#d0bae9",
        },
        white: "#fff",
        black: "#000",
        gold: "#fccf34",
        mediumseagreen: "#4fa159",
        red: "#dc1111",
        powderblue: "#95d8e2",
        indianred: "#e0524f",
        lightslategray: "#9f94c2",
        slategray: "#6e727f",
        gainsboro: "#e1dbdb",
        whitesmoke: "#f9f9f9",
        cadetblue: "#46b7c8",
        limegreen: "#1ac42e",
        lightcoral: "#e87575",
        dimgray: "#585d69",
        lightskyblue: "#8fd1f5",
        lightpink: "#f5a1a7",
        darkgray: "#afb2bf",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
      },
      borderRadius: {
        "84xl": "103px",
        xl: "20px",
        "11xl": "30px",
        "41xl": "60px",
        "21xl": "40px",
        "31xl": "50px",
        "32xl": "51px",
      },
    },
    fontSize: {
      "31xl": "3.125rem",
      "10xl": "1.813rem",
      "16xl": "2.188rem",
      "21xl": "2.5rem",
      "26xl": "2.813rem",
      "41xl": "3.75rem",
      "62xl": "5.063rem",
      "2xl": "1.313rem",
      "7xl": "1.625rem",
      "3xl": "1.375rem",
      "9xl": "1.75rem",
      xl: "1.25rem",
      "81xl": "6.25rem",
      lg: "1.125rem",
      "6xl": "1.563rem",
      "61xl": "5rem",
      "11xl": "1.875rem",
      "51xl": "4.375rem",
      base: "1rem",
      mini: "0.938rem",
      smi: "0.813rem",
      "5xl": "1.5rem",
      "60xl": "4.938rem",
      "4xl": "1.438rem",
      "24xl": "2.688rem",
      "8xl": "1.688rem",
      lgi: "1.188rem",
      "32xl": "3.188rem",
      sm: "0.875rem",
      mid: "1.063rem",
      "12xl": "1.938rem",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
