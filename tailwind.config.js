import { transform } from "typescript";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        paleBlue: "hsl(225, 100%, 94%)",
        brightBlue: "hsl(245, 75%, 52%)",
        veryPale: "hsl(225, 100%, 98%)",
        desaturated: "hsl(224, 23%, 55%)",
        darkBlue: "hsl(223, 47%, 23%)",
        buttonHover: "#786cf4",
      },
      height: {
        927: "927px",
      },
      screens: {
        "2sm": "390px",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".transition": {
          transition: "all 0.4s",
        },
        ".linkHover": {
          textDecoration: "none",
          color: "#786cf4",
        },
        ".center": {
          top: "50%",
          transform: "translateY(-50%)",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
