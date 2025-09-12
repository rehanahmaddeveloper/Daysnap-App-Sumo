import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      colors: {
        primary: {
          '50': '#FFF8F0',
          '100': '#FEF0DE',
          '200': '#FDDFAA',
          '300': '#FCCB7B',
          '400': '#FBB651',
          '500': '#FD9B32',
          '600': '#E9851F',
          '700': '#C26D1A',
          '800': '#9A571A',
          '900': '#7D481A',
          '950': '#44240A',
        }
      }
    },
  },
  plugins: [],
};
export default config;
