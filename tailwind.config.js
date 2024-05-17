/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
		"./src/components/**/*.{js,ts,jsx,tsx}",
	],
	darkMode: "selector",
	theme: {
		fontSize: {
			xs: ["12px", "16px"],
			sm: ["14px", "20px"],
			base: ["16px", "19.5px"],
			lg: ["18px", "21.94px"],
			xl: ["20px", "24.38px"],
			"2xl": ["24px", "29.26px"],
			"3xl": ["28px", "50px"],
			"4xl": ["48px", "58px"],
			"8xl": ["96px", "106px"],
		},
		extend: {
			fontFamily: {
				sora: ["Sora", "sans-serif"],
				sourceCodePro: ["Source Code Pro", "sans-serif"],
				spaceGrotesk: ["Space Grotesk", "sans-serif"],
			},
			colors: {
				p: {
					1: "#AC6AFF",
					2: "#FFC876",
					3: "#FF776F",
					4: "#7ADB78",
					5: "#858DFF",
					6: "#FF98E2",
				},
				stroke: {
					1: "#26242C",
				},
				s: {
					1: "#FFFFFF",
					2: "#CAC6DD",
					3: "#ADA8C3",
					4: "#757185",
					5: "#3F3A52",
					6: "#252134",
					7: "#15131D",
					8: "#0E0C15",
					9: "#474060",
					10: "#43435C",
					11: "#1B1B2E",
					12: "#2E2A41",
					13: "#6C7275",
				},
			},
			screens: {
				wide: "1440px",
			},
		},
	},
	plugins: [],
};
