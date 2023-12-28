import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        primary: {
          500: "#6E9EB9",
          600: "#388AB9",
        },
        accent: {
          400: "#EB8776",
          500: "#EB5940",
        },
        neutral: {
          50: "#FFFFFF",
          100: "#EBECE6",
          900: "#01131D",
        },
      },
      fontSize: {
        "heading-1": [
          "6rem",
          {
            lineHeight: "6.5rem",
            letterSpacing: "0.01em",
            fontWeight: "700",
          },
        ],
        "heading-2": [
          "4rem",
          {
            lineHeight: "4.5rem",
            letterSpacing: "0.01em",
            fontWeight: "700",
          },
        ],
        "heading-3": [
          "3rem",
          {
            lineHeight: "3.5rem",
            letterSpacing: "0.01em",
            fontWeight: "400",
          },
        ],
        "heading-4": [
          "1.5rem",
          {
            lineHeight: "2rem",
            letterSpacing: "0.01em",
            fontWeight: "400",
          },
        ],
        "title-1": [
          "2rem",
          {
            lineHeight: "2.5rem",
            letterSpacing: "0.01em",
            fontWeight: "400",
          },
        ],
        "title-2": [
          "1.5rem",
          {
            lineHeight: "2rem",
            letterSpacing: "0.01em",
            fontWeight: "400",
          },
        ],
        "title-3": [
          "1rem",
          {
            lineHeight: "1.5rem",
            letterSpacing: "0.01em",
            fontWeight: "400",
          },
        ],
        "body-1": [
          "1.125rem",
          {
            lineHeight: "1.7rem",
            letterSpacing: "0.01em",
            fontWeight: "400",
          },
        ],
        "body-2": [
          "0.875rem",
          {
            lineHeight: "1.25rem",
            letterSpacing: "0.01em",
            fontWeight: "400",
          },
        ],
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {
      scale: ["group-hover"],
    },
  },
  plugins: [],
} satisfies Config;
