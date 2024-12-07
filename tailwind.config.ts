import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx,svg}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx,svg}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx,svg}",
  ],
  theme: {
    extend: {
      fontFamily: {
        dm: ["var(--font-dm)"],
      },
      container: {
        padding: "1rem",
        center: true,
      },
    },
  },
  plugins: [],
} satisfies Config;
