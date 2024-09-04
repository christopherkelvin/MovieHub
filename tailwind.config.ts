import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bebas: ['"Bebas Neue"', "cursive"],
        lora: ["Lora", "serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
