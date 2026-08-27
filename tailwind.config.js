/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: "#0B1120",
        foreground: "#F8FAFC",
        primary: {
          DEFAULT: "#4F46E5",
          hover: "#4338CA",
          light: "#818CF8",
          glow: "rgba(79, 70, 229, 0.4)",
        },
        secondary: {
          DEFAULT: "#7C3AED",
          hover: "#6D28D9",
          light: "#A78BFA",
          glow: "rgba(124, 58, 237, 0.4)",
        },
        accent: {
          DEFAULT: "#06B6D4",
          hover: "#0891B2",
          light: "#67E8F9",
          glow: "rgba(6, 182, 212, 0.4)",
        },
        emerald: {
          glow: "rgba(16, 185, 129, 0.4)",
        },
        muted: {
          DEFAULT: "#94A3B8",
          foreground: "#64748B",
        },
        dark: {
          900: "#070B14",
          800: "#0B1120",
          700: "#0F172A",
          600: "#1E293B",
          500: "#334155",
        },
        glass: {
          DEFAULT: "rgba(255, 255, 255, 0.08)",
          hover: "rgba(255, 255, 255, 0.12)",
          active: "rgba(255, 255, 255, 0.16)",
          subtle: "rgba(255, 255, 255, 0.04)",
          border: "rgba(255, 255, 255, 0.12)",
          borderHover: "rgba(255, 255, 255, 0.25)",
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-outfit)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'float-reverse': 'float-reverse 7s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        'marquee': 'marquee 25s linear infinite',
        'marquee-reverse': 'marquee-reverse 25s linear infinite',
        'aurora': 'aurora 15s ease infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'float-reverse': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(12px)' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        aurora: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        }
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'neon-indigo': '0 0 25px -5px rgba(79, 70, 229, 0.5)',
        'neon-purple': '0 0 25px -5px rgba(124, 58, 237, 0.5)',
        'neon-cyan': '0 0 25px -5px rgba(6, 182, 212, 0.5)',
        'glass-card': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        'glass-glow': '0 0 40px -10px rgba(79, 70, 229, 0.25)',
      }
    },
  },
  plugins: [],
};
