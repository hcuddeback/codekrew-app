import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "media",
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/pages/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        border: "hsl(var(--border))",
        card: "hsl(var(--card))",
        cardForeground: "hsl(var(--card-foreground))",
        brand: {
          indigo: "#3b82f6",
          purple: "#8b5cf6",
          orange: "#f97316",
          dark: "#0a0a0a",
        },
      },
    },
  },
  plugins: [],
};

export default config;
