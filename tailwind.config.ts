import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        testColor: "#446712",

        // my custom color
        primaryBG: "#FFFCF1",
        secondaryBG: "#EAEAEA",

        customGold: "#C67C00",
        customOrange: "#E67600",

        border1: "#CFCFCF",
        border2: "#DFDFDF",

        activeOutline: "#FF8C00",

        hoverBG: "#E1E1E1",
        hoverText: "#AFAFAF",
      },
      fontWeight: {
        "800": "800",
        "900": "900",
      },
      textColor: {
        primaryText: "#0A0A0A",

        dark: "#0A0A0A",
        light: "#F0F0F0",
        secondary: "#767676",
      },
    },
  },
  plugins: [],
};
export default config;
