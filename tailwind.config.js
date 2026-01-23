/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
        './pages/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
        './app/**/*.{ts,tsx}',
        './src/**/*.{ts,tsx}',
    ],
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
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
                // Void Cyber Ops Palette
                "void-black": "#000000",
                "tactical-cyan": "#00F0FF",
                "alert-red": "#FF2A2A",
                "panel-gray": "#1A1A1A",

                // Keep existing system colors for backward compatibility if needed, 
                // but Map them to the new palette concept where appropriate
                ops: "#00F0FF",      // Tactical Cyan
                bio: "#FF2A2A",      // Alert Red (repurposed from Pink for consistency with 'Alert') or keep distinct? User said 'Alert Red' for errors/entropy.
                // Keeping original Life HUD colors but aligned with new naming convention where possible.
                vault: "hsl(43, 100%, 50%)",     // Gold - The Vault
                chronos: "#00F0FF",  // Cyan - Chronos
                cortex: "hsl(270, 100%, 50%)",   // Purple - Cortex
                "command-orange": "#FF9900", // High-vis orange for primary CTAs
                "vault-gold": "#FFD700", // Gold accents
            },
            fontFamily: {
                display: ["Orbitron", "sans-serif"], // Keep Orbitron for high-tech headers
                tactical: ["Oswald", "Impact", "sans-serif"], // Heavy, imposing
                code: ["JetBrains Mono", "Fira Code", "monospace"], // UI Data
                sans: ["Inter", "system-ui", "sans-serif"],
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            backgroundImage: {
                'grid-pattern': "linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)",
                'scanline': "linear-gradient(to bottom, transparent, rgba(0, 240, 255, 0.1), transparent)",
            },
            keyframes: {
                "accordion-down": {
                    from: { height: 0 },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: 0 },
                },
                glow: {
                    '0%, 100%': { opacity: '1', boxShadow: '0 0 5px rgba(0, 240, 255, 0.5)' },
                    '50%': { opacity: '0.7', boxShadow: '0 0 20px rgba(0, 240, 255, 0.8)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-5px)' },
                },
                glitch: {
                    '0%': { transform: 'translate(0)' },
                    '20%': { transform: 'translate(-2px, 2px)' },
                    '40%': { transform: 'translate(-2px, -2px)' },
                    '60%': { transform: 'translate(2px, 2px)' },
                    '80%': { transform: 'translate(2px, -2px)' },
                    '100%': { transform: 'translate(0)' },
                },
                scan: {
                    '0%': { transform: 'translateY(-100%)', opacity: '0' },
                    '50%': { opacity: '1' },
                    '100%': { transform: 'translateY(100%)', opacity: '0' },
                }
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
                "glow": "glow 2s ease-in-out infinite",
                "float": "float 4s ease-in-out infinite",
                "glitch": "glitch 0.3s cubic-bezier(.25, .46, .45, .94) both infinite",
                "scan": "scan 4s linear infinite",
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
}
