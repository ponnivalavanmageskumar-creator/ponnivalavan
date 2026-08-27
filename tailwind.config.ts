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
        background: "#0B1120",
        surface: {
          DEFAULT: "rgba(17, 24, 39, 0.7)",
          card: "rgba(15, 23, 42, 0.65)",
          glass: "rgba(255, 255, 255, 0.05)",
          glassHover: "rgba(255, 255, 255, 0.09)",
        },
        primary: {
          DEFAULT: "#4F46E5",
          hover: "#4338CA",
          light: "#818CF8",
        },
        secondary: {
          DEFAULT: "#7C3AED",
          hover: "#6D28D9",
          light: "#A78BFA",
        },
        accent: {
          DEFAULT: "#06B6D4",
          hover: "#0891B2",
          light: "#67E8F9",
        },
        brandGreen: {
          DEFAULT: "#10B981",
          light: "#34D399",
          glow: "rgba(16, 185, 129, 0.2)",
        },
        muted: "#94A3B8",
        glassBorder: "rgba(255, 255, 255, 0.12)",
        glassBorderHover: "rgba(99, 102, 241, 0.4)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-outfit)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      animation: {
        "aurora": "aurora 25s ease-in-out infinite alternate",
        "float": "float 6s ease-in-out infinite",
        "float-delayed": "float 7s ease-in-out 2s infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "shimmer": "shimmer 2.5s linear infinite",
        "marquee": "marquee 35s linear infinite",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
      },
      keyframes: {
        aurora: {
          "0%": { transform: "translate(0%, 0%) scale(1) rotate(0deg)" },
          "50%": { transform: "translate(8%, 10%) scale(1.15) rotate(45deg)" },
          "100%": { transform: "translate(-8%, -5%) scale(0.95) rotate(-30deg)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(200%)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        glowPulse: {
          "0%, 100%": { opacity: "0.4", filter: "blur(20px)" },
          "50%": { opacity: "0.8", filter: "blur(28px)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "glass-gradient": "linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 100%)",
        "hero-glow": "radial-gradient(circle at 50% 30%, rgba(79, 70, 229, 0.15), rgba(124, 58, 237, 0.1) 40%, transparent 70%)",
        "card-gradient": "linear-gradient(145deg, rgba(30, 41, 59, 0.6) 0%, rgba(15, 23, 42, 0.8) 100%)",
      },
      boxShadow: {
        "glass": "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
        "neon-blue": "0 0 25px -5px rgba(6, 182, 212, 0.5)",
        "neon-purple": "0 0 25px -5px rgba(124, 58, 237, 0.5)",
        "neon-indigo": "0 0 25px -5px rgba(79, 70, 229, 0.5)",
        "glow-card": "0 10px 40px -10px rgba(79, 70, 229, 0.2)",
      },
    },
  },
  plugins: [],
};

export default config;
