import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        gradientblue: "rgba(31, 58, 147, 0.3)",
        gradientpink: "rgba(255, 111, 97, 0.3)"
      },
      borderColor: {
        'custom-white': 'rgba(255, 255, 255, 0.35)',
        'custom-border': 'rgba(255, 111, 97, 1)',
        'custom-card-border': 'rgba(242, 78, 30, 0.2)'
      },
      backgroundColor:{
        'custom-blue': 'rgba(31, 58, 147, 1)',
        'custom-pink': 'rgba(255, 111, 97, 1)'
      },
      textColor: {
        'custom-border': 'rgba(255, 111, 97, 1)',
        'custom-cream': 'rgba(255, 255, 255, 1)',
      },
      fontFamily: {
        playfair: 'Playfair Display',
        roboto: 'Roboto',
      }
    },
  },
  plugins: [],
} satisfies Config;
