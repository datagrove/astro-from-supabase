/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	content: [
		'./src/**/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', 
		'.src/data.tsx',
	],
	darkMode: "class",
	theme: {
		// "colors": colors,
		extend: {
			colors: {
				dgGreen: "#435E1C",
				accent: "#812458",
				dgBlue: "#245881"
			},
			gridTemplateColumns: {
				'card': 'repeat(auto-fit, minmax(24ch, 1fr))'
			},
			fontFamily: {
				sans: ["InterVariable", "Inter", ...defaultTheme.fontFamily.sans],
			},
		}

	},
	plugins: [require('@tailwindcss/typography')],
}
