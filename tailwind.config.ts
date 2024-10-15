import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: "#65E4A3",
          blue: "#0A2640",
          gray: "#777777",
        },
      },
      fontFamily: {
        manrope: ["var(--manrope)"],
        "open-sans": ["var(--open-sans)"],
        sofiat: ["var(--sofiat)"],
      },
    },
  },
  plugins: [],
};
export default config;
