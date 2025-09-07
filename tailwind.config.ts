import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#1a3b59", // ← deep navy (adjust to your logo’s hex)
          light: "#fac34c",   // optional lighter shade
        },
      },
    },
  },
  plugins: [],
};
export default config;
