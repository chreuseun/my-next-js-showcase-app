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
        background: "var(--background)",
        foreground: "var(--foreground)",
        testColor: "#446712",

        // my custom color
        primaryBG: "#FAFAFA",
        secondaryBG: "#EAEAEA",

        customGold: "#FFD700", // Gold
        customOrange: "#FF8C00", // Orange
      },
      fontWeight: {
        "900": "900",
      },
      textColor: {
        dark: "#0A0A0A",
        light: "#F0F0F0",
        secondary: "#767676",
      },
    },
  },
  plugins: [],
};
export default config;
