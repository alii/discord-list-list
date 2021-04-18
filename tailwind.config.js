module.exports = {
	purge: ["./src/**/*.{ts,tsx}"],
	darkMode: "class",
	mode: "jit",
	theme: {
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [require("@tailwindcss/line-clamp")],
};
