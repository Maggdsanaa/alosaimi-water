import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#E6F0FA",
          100: "#CCE1F5",
          500: "#0B4C8C",
          600: "#093C70",
          700: "#072C54",
          900: "#061E3E",
          DEFAULT: "#0B4C8C",
        },
        secondary: {
          DEFAULT: "#2CA9E1",
          light: "#5FBEE8",
          dark: "#1E8FC4",
        },
        accent: "#00B4D8",
        dark: "#061E3E",
        light: "#F0F9FF",
        whatsapp: "#25D366",
      },
      fontFamily: {
        tajawal: ["Tajawal", "sans-serif"],
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        wave: "wave 3s ease-in-out infinite",
        drop: "drop 2s ease-in infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        wave: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        drop: {
          "0%": { transform: "translateY(-30px)", opacity: "0" },
          "50%": { opacity: "1" },
          "100%": { transform: "translateY(30px)", opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
