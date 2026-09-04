/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        elyrion: {
          // Luxury Light Theme & Neumorphic Palettes
          bg: "#F5F2EB",          // Warm Alabaster Base
          bgSoft: "#FAF8F5",      // Cashmere Highlight
          card: "#EFECE4",        // Neumorphic Surface
          cardHover: "#F7F5EE",   // Elevated Surface
          border: "#E2DDD2",      // Soft Bevel Border
          borderLight: "#FFFFFF", // Light Reflection Edge

          // Deep Rich Editorial Typography
          black: "#1A171E",       // Deep Obsidian Text
          dark: "#2D2933",        // Charcoal Body
          darker: "#120F16",
          muted: "#6B6575",       // Secondary Text
          subtle: "#9E97A8",      // Placeholder/Muted Text
          cream: "#1A171E",       // Text Primary

          // Opulent Champagne Gold accents
          gold: "#C59B27",        // Royal Gold
          goldLight: "#E8C868",   // Light Gold Shimmer
          goldMuted: "#96751B",   // Deep Gold
          goldDark: "#6E5410",
          goldGlow: "rgba(197, 155, 39, 0.2)",

          // Sensory Accents
          amber: "#B85D1B",
          ruby: "#9B2242",
          emerald: "#1B5E4B",
          rose: "#D46B83",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Playfair Display", "Georgia", "serif"],
        sans: ["var(--font-jakarta)", "Plus Jakarta Sans", "Inter", "sans-serif"],
        cinzel: ["var(--font-cinzel)", "Cinzel", "serif"],
      },
      boxShadow: {
        // Neumorphic Soft Elevations
        "neu-flat": "8px 8px 18px rgba(180, 172, 155, 0.35), -8px -8px 18px rgba(255, 255, 255, 0.95)",
        "neu-sm": "4px 4px 10px rgba(180, 172, 155, 0.3), -4px -4px 10px rgba(255, 255, 255, 0.9)",
        "neu-md": "10px 10px 24px rgba(180, 172, 155, 0.4), -10px -10px 24px rgba(255, 255, 255, 0.95)",
        "neu-lg": "16px 16px 36px rgba(180, 172, 155, 0.45), -16px -16px 36px rgba(255, 255, 255, 1)",
        "neu-pressed": "inset 4px 4px 8px rgba(180, 172, 155, 0.4), inset -4px -4px 8px rgba(255, 255, 255, 0.95)",
        "neu-gold": "6px 6px 16px rgba(197, 155, 39, 0.25), -6px -6px 16px rgba(255, 255, 255, 0.9)",
        "gold-sm": "0 0 15px rgba(197, 155, 39, 0.3)",
        "gold-md": "0 0 30px rgba(197, 155, 39, 0.35)",
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #F0D37B 0%, #C59B27 50%, #9E7D1E 100%)",
        "neu-gradient": "linear-gradient(145deg, #FAF7F0, #EAE5DB)",
        "neu-convex": "linear-gradient(145deg, #FFFFFF, #E8E3D8)",
        "neu-concave": "linear-gradient(145deg, #E6E1D6, #FFFFFF)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
    },
  },
  plugins: [],
};
