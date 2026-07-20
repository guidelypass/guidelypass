import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f0f7f7",
          100: "#dcebea",
          200: "#b8d6d3",
          500: "#3d7a75",
          600: "#326661",
          700: "#29534f",
          900: "#1a3634",
        },
        accent: {
          50: "#fdf2ee",
          100: "#fbe1d6",
          200: "#f5c3ab",
          300: "#eda179",
          400: "#e57f4f",
          500: "#e4572e",
          600: "#c8451f",
          700: "#9c3618",
          800: "#7a2c15",
          900: "#5c2412",
        },
        ink: "#171717",
        cream: "#faf9f6",
      },
      fontFamily: {
        sans: ["var(--font-jakarta)", ...defaultTheme.fontFamily.sans],
        serif: ["var(--font-playfair)", ...defaultTheme.fontFamily.serif],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "none",
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
