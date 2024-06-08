import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "#8F43EE",
        input: "#8F43EE",
        ring: "#8F43EE",
        background: "#2D2727",
        foreground: "#413543",
        primary: {
          DEFAULT: "#8F43EE",
          foreground: "#FFF",
        },
        secondary: {
          DEFAULT: "#413543",
          foreground: "#73777B",
        },
        destructive: {
          DEFAULT: "#FFF",
          foreground: "#FFF",
        },
        muted: {
          DEFAULT: "#FFF",
          foreground: "#var(--muted-foreground)",
        },

        popover: {
          DEFAULT: "#FFF",
          foreground: "#var(--popover-foreground)",
        },
        card: {
          DEFAULT: "#413543",
          foreground: "#FFF",
        },
      },

    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config