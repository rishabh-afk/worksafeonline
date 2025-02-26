import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        arial: ["Arial", "sans-serif"],
        verdana: ["Verdana", "sans-serif"],
        helvetica: ["Helvetica", "sans-serif"],
        tahoma: ["Tahoma", "sans-serif"],
        trebuchet: ["'Trebuchet MS'", "sans-serif"],
        times: ["'Times New Roman'", "serif"],
        georgia: ["Georgia", "serif"],
        courier: ["'Courier New'", "monospace"],
        palatino: ["Palatino", "serif"],
        garamond: ["Garamond", "serif"],
        segoe: ["'Segoe UI'", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        primary: "#F06022",
        // primary: "#FFC700",
        secondary: "#F06022",
      },
      boxShadow: {
        corner:
          "rgba(60, 64, 67, 0.3) 0px 0px 0px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
      },
      dropShadow: {
        "4xl": "0 35px 35px rgba(0, 0, 0, 0.25)",
      },
      maxWidth: {
        "8xl": "124rem", // 1984 px
        "9xl": "2560px", // for screens between 2K and 4K
        "10xl": "3840px", // for 4K screens
      },
      screens: {
        "3xl": "1920px", // for screens like 1080p monitors
        "4xl": "2560px", // for screens between 2K and 4K
        "5xl": "3840px", // for 4K screens
      },
      animation: {
        "fade-up": "fadeUp 1s ease-in-out",
        "fade-down": "fadeDown 1s ease-in-out",
        wave: "wave 1.5s linear infinite",
        "fade-in": "fade-in 0.5s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(50px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeDown: {
          "0%": { opacity: "0", transform: "translateY(-25px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        wave: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
