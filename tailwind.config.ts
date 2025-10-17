import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				// Map your CSS variables to Tailwind color utilities
				'primary': 'var(--color-primary)',
				'primary-dark': 'var(--color-primary-dark)',
				'primary-light': 'var(--color-primary-light)',
				'primary-soft': 'var(--color-primary-soft)',
				'primary-super-soft': 'var(--color-primary-super-soft)',
				'primary-ultra-soft': 'var(--color-primary-ultra-soft)',
				'accent': 'var(--color-accent)',
				'accent-dark': 'var(--color-accent-dark)',
				'accent-light': 'var(--color-accent-light)',
				'dark': 'var(--color-dark)',

				'slate-gray': 'var(--color-slate-gray)',
				'light-slate': 'var(--color-light-slate)',

				'light-blue-2': 'var(--color-light-blue-2)',
				'light-blue-3': 'var(--color-light-blue-3)',
				'light-blue-4': 'var(--color-light-blue-4)',
				'pale-blue': 'var(--color-pale-blue)',
				'light-gray': 'var(--color-light-gray)',
				'medium-gray': 'var(--color-medium-gray)',
				'purple': 'var(--color-purple)',
				'orange': 'var(--color-orange)',
				'green': 'var(--color-green)',
				'yellow': 'var(--color-yellow)',
				'red': 'var(--color-red)',
				'light-red': 'var(--color-light-red)',
				'teal': 'var(--color-teal)',
				'pink-button': 'var(--color-pink-button)',

				'coral-dark': 'var(--color-coral-dark)',
				'mint': 'var(--color-mint)',
				'sunset': 'var(--color-sunset)',
				'ocean': 'var(--color-ocean)',
				'cream': 'var(--color-cream)',
				'lavender': 'var(--color-lavender)',
				'light-lavender': 'var(--color-light-lavender)',
				'sage': 'var(--color-sage)',
				'rose': 'var(--color-rose)',
				'gold': 'var(--color-gold)',
				'slate': 'var(--color-slate)',
				'cool-gray': 'var(--color-cool-gray)',
				'gray-text': 'var(--color-gray-text)',
				'warm-gray-100': 'var(--color-warm-gray-100)',
				'border': 'var(--color-border)',
				'divider': 'var(--color-divider)',
				'text': 'var(--color-text)',
				'text-secondary': 'var(--color-text-secondary)',
				'success': 'var(--color-success)',
				'warning': 'var(--color-warning)',
				'error': 'var(--color-error)',
				'info': 'var(--color-info)',
				'success-light': 'var(--color-success-light)',
				'warning-light': 'var(--color-warning-light)',
				'error-light': 'var(--color-error-light)',
				'light-gray-2': 'var(--color-light-gray-2)',
				'background': 'var(--color-background)',

				'blue': '#2563EB', // Corresponds to Tailwind's default blue-600
				'light-blue': '#06B6D4', // Corresponds to Tailwind's default cyan-500
				'light-blue-1': '#E0F2FE', // Corresponds to Tailwind's default light-blue-100 or sky-100
				'dark-slate': '#0F172A', // Corresponds to Tailwind's default slate-900
				'coral': '#FF7F50', // A standard hex code for "coral"
			},
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
					'0%': { opacity: '0', transform: 'translateY(23px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				pulse: {
					'0%': { transform: 'scale(0.9)' },
					'50%': { transform: 'scale(1.07)' },
					'100%': { transform: 'scale(1)' },
				},
				cardEnter: {
					'0%': { opacity: '0', transform: 'scale(0.92) translateY(28px)' },
					'100%': { opacity: '1', transform: 'scale(1) translateY(0)' },
				},
				accentBar: { '0%': { opacity: '0.9' }, '100%': { opacity: '0.3' } },
				bouncePop: {
					'0%': { transform: 'scale(0.85)' },
					'60%': { transform: 'scale(1.12)' },
					'100%': { transform: 'scale(1)' },
				},
				badgeIn: {
					'0%': { opacity: '0', transform: 'scale(0.85)' },
					'100%': { opacity: '1', transform: 'scale(1)' },
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
	},
	plugins: [require('tailwind-scrollbar-hide')],
};

export default config;
