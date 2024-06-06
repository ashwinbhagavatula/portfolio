import { Bellefair } from "next/font/google";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'primaryBgLight' : '#EDF2F4',
      'primaryAccent' : '#D90429',
      'secondaryBgLight' : '#2B2D42',
      'primaryLight' : '#EDF2F4',
      'white': "#ffffff",
      'black': "#000000",
      'textSecondary': "#495057"

    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        bellefair : ['var(--font-bellefair)'],
        dancingScript : ['var(--font-dancingscript)'] 
      }
    },
  },
};
export default config;
