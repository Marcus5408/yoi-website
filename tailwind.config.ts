import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'yoi-white': '#FFFAF6',
        'yoi-black': '#1D1B34',
        'yoi-blue-1': '#04328d',
        'yoi-blue-2': '#057fbe',
        'yoi-blue-3': '#21a0d2',
        'yoi-blue-4': '#23bad2',
      },
    },
    darkMode: "class",
  },
  plugins: [],
};
export default config;
