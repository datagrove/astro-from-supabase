/** @type {import('tailwindcss').Config} */
const { colors: defaultColors } = require('tailwindcss/defaultTheme')
const defaultTheme = require('tailwindcss/defaultTheme');

// const colors = {
// 	...defaultColors,
// 	...{
// 		"dgGreen": {
// 			"500": "435E1C"
// 		},
// 		"accent": "812458",
// 		"dgBlue": {
// 			"500": "245881"
// 		}
// 	}
// }

module.exports = {
	content: [
		'./src/components/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', 
		'.src/layouts/**/*.astro', 
		'.src/pages/**/*.astro'
	],
	darkMode: "class",
	theme: {
		// "colors": colors,
		extend: {
			colors: {
				dgGreen: "435E1C",
				accent: "812458",
				dgBlue: "245881"
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
