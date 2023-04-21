/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			"dgGreen": '435E1C',
			'accent': '812458',
			'dgBlue': '245881'
		},
		extend: {
			gridTemplateColumns: {
				'card': 'repeat(auto-fit, minmax(24ch, 1fr))'
			}
		}

	},
	plugins: [],
}
