/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	content: [
		'./src/**/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', 
		'.src/data.tsx',
	],

	theme: {
		// "colors": colors,
		extend: {
			colors: {
				dgPrimary: "#435E1C",
				dgSecondary: "#245881",
				accent: "#812458",
				dgPrimaryDM: "#73A92F",
				dgSecondaryDM: "#F5F5F5",
				accentDM: "#2FA9A2",
				cardBackgroundDM: "#2F2F2F"
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
