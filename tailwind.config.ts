import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      boxShadow: {
        lift: "0 24px 80px rgba(0, 0, 0, 0.08)",
        glow: "0 18px 42px rgba(0, 0, 0, 0.1)"
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
