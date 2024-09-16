/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily:{
				headerFont: ["Cinzel","serif"],
				bodyFont:["Fauna One", "sans"]
			},
			fontSize: {
				"10xl": [
							"10rem",
							"9rem"							
						],
				"12xl":[
					"12rem",
					"10rem"
				],
				"14xl": [
							"14rem",
							"12rem"							
						],
			},
		},
	},
	plugins: [],
}
