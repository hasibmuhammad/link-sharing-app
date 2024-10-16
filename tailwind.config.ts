import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#633BFE",
        background: "#FAFAFA"
      },
      boxShadow: {
        custom: "rgba(99, 60, 255, 0.25) 0px 0px 32px 0px"
      }
    },
  },
  plugins: [],
};
export default config;
