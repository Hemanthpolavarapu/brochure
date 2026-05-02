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
        paper: {
          50: "#D9D0C7",
          100: "#B7A99C",
          200: "#A78B7D"
        },
        clay: "#A05B3C",
        umber: "#7A4B3B",
        plum: {
          700: "#5A3A3D",
          800: "#3E2529",
          900: "#2C1C1D"
        },
        ink: "#1A1A1A",
        process: {
          cyan: "#68D8D6",
          magenta: "#D85C8A",
          yellow: "#F2C94C"
        }
      },
      boxShadow: {
        lift: "0 24px 80px rgba(26, 26, 26, 0.35)",
        glow: "0 0 40px rgba(160, 91, 60, 0.32)"
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
