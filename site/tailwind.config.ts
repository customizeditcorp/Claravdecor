import type { Config } from "tailwindcss"

// Color values live in app/globals.css (brandboard §4). This file only maps the
// shadcn token vocabulary onto Tailwind utilities.
const config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: { "2xl": "1280px" },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-body)", "'Helvetica Neue'", "Arial", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "'Times New Roman'", "serif"], // Playfair Display via next/font
      },
      colors: {
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: { DEFAULT: "var(--primary)", hover: "var(--primary-hover)", foreground: "var(--primary-foreground)" },
        secondary: { DEFAULT: "var(--secondary)", foreground: "var(--secondary-foreground)", muted: "var(--secondary-foreground-muted)" },
        muted: { DEFAULT: "var(--muted)", foreground: "var(--muted-foreground)" },
        accent: { DEFAULT: "var(--accent)", foreground: "var(--accent-foreground)" },
        card: { DEFAULT: "var(--card)", foreground: "var(--card-foreground)" },
        success: "var(--success)",
        error: "var(--error)",
        theme: { sage: "var(--brand-sage)", blue: "var(--brand-blue)", blush: "var(--brand-blush)" },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        card: "var(--shadow-card)",
      },
      fontSize: {
        h1: ["var(--fs-h1)", { lineHeight: "var(--lh-tight)", fontWeight: "400" }],
        h2: ["var(--fs-h2)", { lineHeight: "var(--lh-heading)", fontWeight: "400" }],
        h3: ["var(--fs-h3)", { lineHeight: "1.3", fontWeight: "400" }],
        h4: ["var(--fs-h4)", { lineHeight: "1.3", fontWeight: "500" }],
        "body-lg": ["var(--fs-body-lg)", { lineHeight: "var(--lh-body)" }],
        body: ["var(--fs-body)", { lineHeight: "var(--lh-body)" }],
        caption: ["var(--fs-caption)", { lineHeight: "1.5" }],
        eyebrow: ["var(--fs-eyebrow)", { lineHeight: "1.4", letterSpacing: "var(--ls-eyebrow)", fontWeight: "600" }],
      },
      maxWidth: {
        measure: "var(--measure)",
      },
      transitionDuration: {
        base: "var(--motion-base)",
      },
    },
  },
  plugins: [],
} satisfies Config

export default config
