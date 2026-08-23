import type { Config } from "tailwindcss";

const config: Config = {
	content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				bg: "var(--bg)",
				fg: "var(--fg)",
				muted: "var(--muted)",
				card: "var(--card)",
				brand: {
					DEFAULT: "var(--accent)",
				},
			},
			fontFamily: {
				sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
				mono: ["var(--font-mono)", "ui-monospace", "monospace"],
			},
			maxWidth: {
				content: "68rem",
			},
			keyframes: {
				"pulse-dot": {
					"0%, 100%": { opacity: "1", transform: "scale(1)" },
					"50%": { opacity: "0.5", transform: "scale(1.4)" },
				},
			},
			animation: {
				"pulse-dot": "pulse-dot 2s ease-in-out infinite",
			},
		},
	},
	plugins: [],
};

export default config;
