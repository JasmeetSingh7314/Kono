import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        playwrite: ["Playwrite AU SA", "serif"],
        nunito: ["Nunito", "serif"],
        urbanist: ["Urbanist", "serif"],
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
} satisfies Config;
