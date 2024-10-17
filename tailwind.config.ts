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
        // theme color setup !!!
        brand1: "var(--color-primary-brand)",
        brand2: "var(--color-secondary-brand)",
        bg1: "var(--color-bg-1)",
        bg2: "var(--color-bg-2)",
        border1: "var(--color-border)",
        border2: "var(--color-border-alt)",
        text1: "var(--color-font-primary)",
        text2: "var(--color-font-secondary)",
        success1: "var(--color-success)",
        success2: "var(--color-success-alt)",
        error1: "var(--color-error)",
        error2: "var(--color-error-alt)",
        info1: "var(--color-info)",
        info2: "var(--color-info-alt)",
        pending1: "var(--color-pending)",
        pending2: "var(--color-pending-alt)",
      },
    },
  },
  plugins: [],
};
export default config;
