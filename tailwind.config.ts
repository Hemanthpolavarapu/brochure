import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        background: "var(--background)",
        surface: "var(--surface)",
        accent: "var(--accent)",
        text: "var(--text)"
      },
      boxShadow: {
        lift: "0 24px 80px color-mix(in srgb, var(--background) 72%, transparent)",
        glow: "0 0 40px color-mix(in srgb, var(--accent) 28%, transparent)"
      },
      borderRadius: {
        panel: "8px",
        control: "6px"
      }
    }
  },
  plugins: []
};

export default config;
