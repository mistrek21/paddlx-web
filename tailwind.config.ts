import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			keyframes: {
				headerPop: {
					'0%': { opacity: '0', transform: 'scale(0.93) translateY(20px)' },
					'100%': { opacity: '1', transform: 'scale(1) translateY(0)' },
				},
				subFade: {
					from: { opacity: '0' },
					to: { opacity: '1' },
				},
				cardUp: {
					from: { opacity: '0', transform: 'translateY(32px) scale(0.95)' },
					to: { opacity: '1', transform: 'translateY(0) scale(1)' },
				},
				shimmerCard: {
					'0%': { transform: 'translateX(-100%)' },
					'100%': { transform: 'translateX(100%)' },
				},
			},
		},
	},
	plugins: [],
};

export default config;
