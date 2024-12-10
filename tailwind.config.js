// import defaultTheme from 'tailwindcss/defaultTheme'
// export default {
// 	mode: 'jit',  // JIT mode for fast compilation,
// 	content: [
// 		"./src/**/*.{html,js,jsx,ts,tsx}",
// 	],
// 	darkMode: ['class', 'class'], // Enable dark mode toggling by class
// 	theme: {
// 		container: {
// 			center: 'true',
// 			padding: '2rem',
// 			screens: {
// 				'2xl': '1400px'
// 			}
// 		},
// 		colors: {
// 			border: 'hsl(var(--border))',
// 			input: 'hsl(var(--input))',
// 			ring: 'hsl(var(--ring))',
// 			background: 'hsl(var(--background))',
// 			foreground: 'hsl(var(--foreground))',
// 			primary: {
// 				DEFAULT: 'hsl(var(--primary))',
// 				foreground: 'hsl(var(--primary-foreground))'
// 			},
// 			secondary: {
// 				DEFAULT: 'hsl(var(--secondary))',
// 				foreground: 'hsl(var(--secondary-foreground))'
// 			},
// 			destructive: {
// 				DEFAULT: 'hsl(var(--destructive))',
// 				foreground: 'hsl(var(--destructive-foreground))'
// 			},
// 			muted: {
// 				DEFAULT: 'hsl(var(--muted))',
// 				foreground: 'hsl(var(--muted-foreground))'
// 			},
// 			accent: {
// 				DEFAULT: 'hsl(var(--accent))',
// 				foreground: 'hsl(var(--accent-foreground))'
// 			},
// 			popover: {
// 				DEFAULT: 'hsl(var(--popover))',
// 				foreground: 'hsl(var(--popover-foreground))'
// 			},
// 			card: {
// 				DEFAULT: 'hsl(var(--card))',
// 				foreground: 'hsl(var(--card-foreground))'
// 			}
// 		},
// 		borderRadius: {
// 			lg: '`var(--radius)`',
// 			md: '`calc(var(--radius) - 2px)`',
// 			sm: 'calc(var(--radius) - 4px)'
// 		},
// 		fontFamily: {
// 			sans: ["var(--font-sans)", ...defaultTheme.fontFamily.sans]
// 		},
// 		keyframes: {
// 			fadeIn: {
// 				'0%': {
// 					opacity: '0'
// 				},
// 				'100%': {
// 					opacity: '1'
// 				}
// 			},
// 			'accordion-down': {
// 				from: {
// 					height: '0'
// 				},
// 				to: {
// 					height: 'var(--radix-accordion-content-height)'
// 				}
// 			},
// 			'accordion-up': {
// 				from: {
// 					height: 'var(--radix-accordion-content-height)'
// 				},
// 				to: {
// 					height: '0'
// 				}
// 			}
// 		},
// 		animation: {
// 			'fade-in': 'fadeIn 1s ease-in-out',
// 			'accordion-down': 'accordion-down 0.2s ease-out',
// 			'accordion-up': 'accordion-up 0.2s ease-out'
// 		},
// 		extend: {
// 			colors: {
// 				'color-1': 'hsl(var(--color-1))',
// 				'color-2': 'hsl(var(--color-2))',
// 				'color-3': 'hsl(var(--color-3))',
// 				'color-4': 'hsl(var(--color-4))',
// 				'color-5': 'hsl(var(--color-5))'
// 			},
// 			animation: {
// 				rainbow: 'rainbow var(--speed, 2s) infinite linear'
// 			},
// 			keyframes: {
// 				rainbow: {
// 					'0%': {
// 						'background-position': '0%'
// 					},
// 					'100%': {
// 						'background-position': '200%'
// 					}
// 				}
// 			}
// 		}
// 	},
// 	variants: {
// 		extend: {
// 			opacity: ['group-hover', 'hover', 'focus'],
// 			translate: ['responsive', 'group-hover'],
// 			scale: ['group-hover'],
// 			// Add any other variants that you plan to animate (scale, translate, opacity, etc.)
// 		},
// 	},
// 	plugins: [
// 		require('@tailwindcss/forms'),
// 		require('@tailwindcss/typography'),
// 		require("tailwindcss-animate"),
// 	],
// }


// tailwind.config.js
export default {
	mode: 'jit',  // JIT mode for fast compilation
	content: [

		"./src/**/*.{js,jsx,ts,tsx}",
		"./node_modules/react-tailwindcss-datepicker/dist/index.esm.{js,ts}"

	],
	darkMode: 'class',  // Enable dark mode support (optional)
	theme: {
		extend: {
			colors: {
				light: '#ffffff', // Light theme background
				dark: '#1f2937',  // Dark theme background
				primary: '#3490dc', // Primary color (will stay consistent)
				secondary: '#ffed4a', // Secondary color (optional)
				danger:'f60004'
			},
			screens: {
				'xs': '480px', // Custom breakpoint for very small devices
				'sm': '640px',
				'md': '768px',
				'lg': '1024px',
				'xl': '1280px',
			},
		},
		variants: {
			extend: {
				opacity: ['group-hover', 'hover', 'focus'],
				translate: ['responsive', 'group-hover'],
				scale: ['group-hover'],
				// Add any other variants that you plan to animate (scale, translate, opacity, etc.)
			},
		},
		plugins: [
			require('@tailwindcss/forms'),
			require('@tailwindcss/typography'),
		],
	}
}

