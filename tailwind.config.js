export default {
	mode: 'jit',
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
		"./node_modules/react-tailwindcss-datepicker/dist/index.esm.{js,ts}"
	],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				minimalist: {
					primary: '#f5f5f5',
					secondary: '#e0e0e0',
					accent: '#95a5a6',
					text: '#2c3e50',
					danger: '#F60004',
					taskPriority: {
						high: '#34495e',
						medium: '#7f8c8d',
						low: '#bdc3c7'
					},
					theme: "bg-gray-100 text-gray-900 shadow-md border-gray-300",
				},
				monkMode: {
					primary: '#2c3e50',
					secondary: '#34495e',
					accent: '#95a5a6',
					text: '#ecf0f1',
					danger: '#F60004',
					taskPriority: {
						high: '#e74c3c',
						medium: '#f39c12',
						low: '#27ae60'
					},
					theme: "bg-black text-blue-400 shadow-lg border-gray-700",
				},
				energetic: {
					primary: '#6346FB',
					secondary: '#FE3AF1',
					accent: '#FE7AE2',
					text: '#ffffff',
					danger: '#F60004',
					taskPriority: {
						high: '#FE7AE2',
						medium: '#00D8FE',
						low: '#2ecc71'
					},
					theme: "bg-gradient-to-r from-[#6346FB] to-[#00D8FE] text-white",
				},
			},
			fontFamily: {
				sans: ['Inter', 'Arial', 'sans-serif'],
				rounded: ['Nunito', 'Arial', 'sans-serif'],  // Adding rounded fonts
			},
		},
	},
	plugins: [
		require('@tailwindcss/forms'),
		require('@tailwindcss/typography'),
	],
}
