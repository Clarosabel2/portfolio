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
        secundary: "#f5741c",
        darkbg:"131424",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        "gradient-cover": "linear-gradient(90.21deg, rgba(70,54,124,0.5) -5.91%, rgba(74,47,189,0.5) 111.58%)",
        "radial-custom": "radial-gradient(circle 500px at 50% 200px, #3e3e3e, transparent)",
      },
    },
  },
  plugins: [],
};
export default config;
