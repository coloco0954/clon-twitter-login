/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			lineHeight:{
				tight: '1,2',
				snug: '1.375',
				normal: '1.5',
				loose: '2',

				custom: '1.55'
			},
		},
	},
	plugins: [],
}
