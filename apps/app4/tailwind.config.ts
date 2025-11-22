import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#cc7a00",
        "background-light": "#f8f7f5",
        "background-dark": "#231b0f",
        "text-light": "#333333",
        "text-dark": "#e0e0e0",
        "text-muted-light": "#8a7e6b",
        "text-muted-dark": "#9a8f7d",
        "border-light": "#e8e5e1",
        "border-dark": "#444444",
        "surface-light": "#f0ede9",
        "surface-dark": "#2c2417",
        accent: "#9d5a44",
        "subtle-light": "#666666",
        "subtle-dark": "#a0a0a0",
        "input-bg-light": "#ffffff",
        "input-bg-dark": "#2a2a2a",
      },
      fontFamily: {
        display: ["Work Sans", "sans-serif"],
        sans: ["Work Sans", "sans-serif"],
        serif: ["Lora", "serif"],
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px",
      },
    },
  },
  plugins: [],
};
export default config;
