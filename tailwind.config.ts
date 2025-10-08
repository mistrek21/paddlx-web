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
				slideUpFade: {
					'0%': { opacity: 0, transform: 'translateY(23px)' },
					'100%': { opacity: 1, transform: 'translateY(0)' },
				},
				pulse: {
					'0%': { transform: 'scale(0.9)' },
					'50%': { transform: 'scale(1.07)' },
					'100%': { transform: 'scale(1)' },
				},
				cardEnter: {
					'0%': { opacity: 0, transform: 'scale(0.92) translateY(28px)' },
					'100%': { opacity: 1, transform: 'scale(1) translateY(0)' },
				},
				accentBar: { '0%': { opacity: 0.9 }, '100%': { opacity: 0.3 } },

				bouncePop: {
					'0%': { transform: 'scale(0.85)' },
					'60%': { transform: 'scale(1.12)' },
					'100%': { transform: 'scale(1)' },
				},
				badgeIn: {
					'0%': { opacity: 0, transform: 'scale(0.85)' },
					'100%': { opacity: 1, transform: 'scale(1)' },
				},
			},
		},
		animation: {
			shimmer: 'shimmerCard 2.8s linear infinite',
			cardUp: 'cardUp 0.8s cubic-bezier(0.6,0,0.3,1) both',
			headerPop: 'headerPop 0.7s cubic-bezier(0.6,0,0.3,1) both',
			subFade: 'subFade 1.1s ease both',
			slideUpFade: 'slideUpFade 0.6s cubic-bezier(0.16, 1, 0.3, 1) both',
			badgeEntrance: 'cardUp 0.5s cubic-bezier(0.6,0,0.3,1) both',
			trend: 'pulse 0.7s cubic-bezier(0.4,0,0.2,1) 0.16s both',
			cardEnter: 'cardEnter 0.7s cubic-bezier(0.53,1.33,0.41,0.95) both',
			accentBar: 'accentBar 3s linear infinite',
			bounceOnAppear: 'bouncePop 0.6s ease',
			badgeIn: 'badgeIn 0.5s cubic-bezier(0.53,1.33,0.41,0.95) both',
		},
	},
	plugins: [],
};

export default config;
