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

        // my custom color
        primaryBG: "#E3DED4",
        secondaryBG: "#D4C3A7",
        cardBG_1: "#6B4D32",
        cardBG_2: "#E3DED4",

        customGold: "#6B4D32",
        customOrange: "#7C5F4A",

        border1: "#6B4D32",
        border2: "#D4C3A7",

        activeOutline: "#7C5F4A",

        hoverBG: "#E7D3BA",
        hoverText: "#C3A482",

        gradient_bg_dark: "#C2B6A9",

        // creamy & cozy theme
        mainBG: "#D4C3A7",
        header_bar: "#6B4D32",
        primary_text: "#333333",
        button_badge: "#C3A482",
        icon_dark_brown: "#7C5F4A",
        icon_beige: "#E7D3BA",
      },
      fontWeight: {
        "800": "800",
        "900": "900",
      },
      textColor: {
        primaryText: "#333333",
        secondaryText: "#6B4D32",

        dark: "#333333",
        light: "#F0F0F0",
        secondary: "#666666",
      },
      boxShadow: {
        neumorphic: "3px 3px 6px #000000, -3px -3px 6px #E7D3BA",
      },
    },
  },
  plugins: [],
};
export default config;
