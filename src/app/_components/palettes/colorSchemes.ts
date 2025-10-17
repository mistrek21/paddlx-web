// src/app/_components/palettes/colorSchemes.ts
// Enhanced color schemes with richer backgrounds and more vibrant buttons

export type ColorScheme = {
	background: string;
	headerIcon: string;
	headerGradient: string;
	searchBorder: string;
	searchFocus: string;
	categoryBadge: string;
	categoryText: string;
	questionHover: string;
	chevronBg: string;
	chevronBgActive: string;
	chevronIcon: string;
	chevronIconActive: string;
	borderLeft: string;
	cardBorder: string;
	cardBorderHover: string;
	ctaBg: string;
	ctaBorder: string;
	ctaButton: string;
	ctaButtonHover: string;
	inputFocus: string;
};

const colorSchemes: Record<string, ColorScheme> = {
	primary: {
		background: 'bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-700',
		headerIcon: 'bg-gradient-to-br from-blue-400 to-indigo-400',
		headerGradient:
			'bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent',
		searchBorder: 'border-blue-300/30 focus:border-white',
		searchFocus: 'focus:ring-white/20 focus:ring-2',
		categoryBadge: 'bg-blue-500/20 border border-blue-300/30',
		categoryText: 'text-white font-medium',
		questionHover: 'group-hover:text-blue-200',
		chevronBg: 'bg-blue-500/20 hover:bg-blue-400/30',
		chevronBgActive: 'bg-white',
		chevronIcon: 'text-white',
		chevronIconActive: 'text-blue-600',
		borderLeft: 'border-l-4 border-blue-300',
		cardBorder: 'border border-blue-400/20',
		cardBorderHover: 'hover:border-blue-300/40 hover:shadow-lg',
		ctaBg: 'bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-800',
		ctaBorder: 'border border-blue-400/30',
		ctaButton: 'bg-white text-blue-700 hover:bg-blue-50',
		ctaButtonHover: 'hover:shadow-xl hover:shadow-white/10',
		inputFocus: 'focus:ring-blue-400/20 focus:ring-2',
	},

	accent: {
		background: 'bg-gradient-to-br from-orange-600 via-red-600 to-pink-600',
		headerIcon: 'bg-gradient-to-br from-orange-400 to-red-400',
		headerGradient:
			'bg-gradient-to-r from-white via-orange-100 to-white bg-clip-text text-transparent',
		searchBorder: 'border-orange-300/30 focus:border-white',
		searchFocus: 'focus:ring-white/20 focus:ring-2',
		categoryBadge: 'bg-orange-500/20 border border-orange-300/30',
		categoryText: 'text-white font-medium',
		questionHover: 'group-hover:text-orange-200',
		chevronBg: 'bg-orange-500/20 hover:bg-orange-400/30',
		chevronBgActive: 'bg-white',
		chevronIcon: 'text-white',
		chevronIconActive: 'text-orange-600',
		borderLeft: 'border-l-4 border-orange-300',
		cardBorder: 'border border-orange-400/20',
		cardBorderHover: 'hover:border-orange-300/40 hover:shadow-lg',
		ctaBg: 'bg-gradient-to-r from-orange-700 via-red-700 to-pink-700',
		ctaBorder: 'border border-orange-400/30',
		ctaButton: 'bg-white text-orange-700 hover:bg-orange-50',
		ctaButtonHover: 'hover:shadow-xl hover:shadow-white/10',
		inputFocus: 'focus:ring-orange-400/20 focus:ring-2',
	},

	teal: {
		background: 'bg-gradient-to-br from-teal-600 via-cyan-600 to-teal-700',
		headerIcon: 'bg-gradient-to-br from-teal-400 to-cyan-400',
		headerGradient:
			'bg-gradient-to-r from-white via-teal-100 to-white bg-clip-text text-transparent',
		searchBorder: 'border-teal-300/30 focus:border-white',
		searchFocus: 'focus:ring-white/20 focus:ring-2',
		categoryBadge: 'bg-teal-500/20 border border-teal-300/30',
		categoryText: 'text-white font-medium',
		questionHover: 'group-hover:text-teal-200',
		chevronBg: 'bg-teal-500/20 hover:bg-teal-400/30',
		chevronBgActive: 'bg-white',
		chevronIcon: 'text-white',
		chevronIconActive: 'text-teal-600',
		borderLeft: 'border-l-4 border-teal-300',
		cardBorder: 'border border-teal-400/20',
		cardBorderHover: 'hover:border-teal-300/40 hover:shadow-lg',
		ctaBg: 'bg-gradient-to-r from-teal-700 via-cyan-700 to-teal-800',
		ctaBorder: 'border border-teal-400/30',
		ctaButton: 'bg-white text-teal-700 hover:bg-teal-50',
		ctaButtonHover: 'hover:shadow-xl hover:shadow-white/10',
		inputFocus: 'focus:ring-teal-400/20 focus:ring-2',
	},

	purple: {
		background: 'bg-gradient-to-br from-purple-600 via-violet-600 to-purple-700',
		headerIcon: 'bg-gradient-to-br from-purple-400 to-violet-400',
		headerGradient:
			'bg-gradient-to-r from-white via-purple-100 to-white bg-clip-text text-transparent',
		searchBorder: 'border-purple-300/30 focus:border-white',
		searchFocus: 'focus:ring-white/20 focus:ring-2',
		categoryBadge: 'bg-purple-500/20 border border-purple-300/30',
		categoryText: 'text-white font-medium',
		questionHover: 'group-hover:text-purple-200',
		chevronBg: 'bg-purple-500/20 hover:bg-purple-400/30',
		chevronBgActive: 'bg-white',
		chevronIcon: 'text-white',
		chevronIconActive: 'text-purple-600',
		borderLeft: 'border-l-4 border-purple-300',
		cardBorder: 'border border-purple-400/20',
		cardBorderHover: 'hover:border-purple-300/40 hover:shadow-lg',
		ctaBg: 'bg-gradient-to-r from-purple-700 via-violet-700 to-purple-800',
		ctaBorder: 'border border-purple-400/30',
		ctaButton: 'bg-white text-purple-700 hover:bg-purple-50',
		ctaButtonHover: 'hover:shadow-xl hover:shadow-white/10',
		inputFocus: 'focus:ring-purple-400/20 focus:ring-2',
	},

	emerald: {
		background: 'bg-gradient-to-br from-emerald-600 via-green-600 to-emerald-700',
		headerIcon: 'bg-gradient-to-br from-emerald-400 to-green-400',
		headerGradient:
			'bg-gradient-to-r from-white via-emerald-100 to-white bg-clip-text text-transparent',
		searchBorder: 'border-emerald-300/30 focus:border-white',
		searchFocus: 'focus:ring-white/20 focus:ring-2',
		categoryBadge: 'bg-emerald-500/20 border border-emerald-300/30',
		categoryText: 'text-white font-medium',
		questionHover: 'group-hover:text-emerald-200',
		chevronBg: 'bg-emerald-500/20 hover:bg-emerald-400/30',
		chevronBgActive: 'bg-white',
		chevronIcon: 'text-white',
		chevronIconActive: 'text-emerald-600',
		borderLeft: 'border-l-4 border-emerald-300',
		cardBorder: 'border border-emerald-400/20',
		cardBorderHover: 'hover:border-emerald-300/40 hover:shadow-lg',
		ctaBg: 'bg-gradient-to-r from-emerald-700 via-green-700 to-emerald-800',
		ctaBorder: 'border border-emerald-400/30',
		ctaButton: 'bg-white text-emerald-700 hover:bg-emerald-50',
		ctaButtonHover: 'hover:shadow-xl hover:shadow-white/10',
		inputFocus: 'focus:ring-emerald-400/20 focus:ring-2',
	},

	rose: {
		background: 'bg-gradient-to-br from-rose-600 via-pink-600 to-rose-700',
		headerIcon: 'bg-gradient-to-br from-rose-400 to-pink-400',
		headerGradient:
			'bg-gradient-to-r from-white via-rose-100 to-white bg-clip-text text-transparent',
		searchBorder: 'border-rose-300/30 focus:border-white',
		searchFocus: 'focus:ring-white/20 focus:ring-2',
		categoryBadge: 'bg-rose-500/20 border border-rose-300/30',
		categoryText: 'text-white font-medium',
		questionHover: 'group-hover:text-rose-200',
		chevronBg: 'bg-rose-500/20 hover:bg-rose-400/30',
		chevronBgActive: 'bg-white',
		chevronIcon: 'text-white',
		chevronIconActive: 'text-rose-600',
		borderLeft: 'border-l-4 border-rose-300',
		cardBorder: 'border border-rose-400/20',
		cardBorderHover: 'hover:border-rose-300/40 hover:shadow-lg',
		ctaBg: 'bg-gradient-to-r from-rose-700 via-pink-700 to-rose-800',
		ctaBorder: 'border border-rose-400/30',
		ctaButton: 'bg-white text-rose-700 hover:bg-rose-50',
		ctaButtonHover: 'hover:shadow-xl hover:shadow-white/10',
		inputFocus: 'focus:ring-rose-400/20 focus:ring-2',
	},

	amber: {
		background: 'bg-gradient-to-br from-amber-600 via-orange-600 to-amber-700',
		headerIcon: 'bg-gradient-to-br from-amber-400 to-orange-400',
		headerGradient:
			'bg-gradient-to-r from-white via-amber-100 to-white bg-clip-text text-transparent',
		searchBorder: 'border-amber-300/30 focus:border-white',
		searchFocus: 'focus:ring-white/20 focus:ring-2',
		categoryBadge: 'bg-amber-500/20 border border-amber-300/30',
		categoryText: 'text-white font-medium',
		questionHover: 'group-hover:text-amber-200',
		chevronBg: 'bg-amber-500/20 hover:bg-amber-400/30',
		chevronBgActive: 'bg-white',
		chevronIcon: 'text-white',
		chevronIconActive: 'text-amber-700',
		borderLeft: 'border-l-4 border-amber-300',
		cardBorder: 'border border-amber-400/20',
		cardBorderHover: 'hover:border-amber-300/40 hover:shadow-lg',
		ctaBg: 'bg-gradient-to-r from-amber-700 via-orange-700 to-amber-800',
		ctaBorder: 'border border-amber-400/30',
		ctaButton: 'bg-white text-amber-800 hover:bg-amber-50',
		ctaButtonHover: 'hover:shadow-xl hover:shadow-white/10',
		inputFocus: 'focus:ring-amber-400/20 focus:ring-2',
	},

	slate: {
		background: 'bg-gradient-to-br from-slate-700 via-gray-800 to-slate-800',
		headerIcon: 'bg-gradient-to-br from-slate-400 to-gray-400',
		headerGradient:
			'bg-gradient-to-r from-white via-slate-100 to-white bg-clip-text text-transparent',
		searchBorder: 'border-slate-400/30 focus:border-white',
		searchFocus: 'focus:ring-white/20 focus:ring-2',
		categoryBadge: 'bg-slate-600/30 border border-slate-400/30',
		categoryText: 'text-white font-medium',
		questionHover: 'group-hover:text-slate-200',
		chevronBg: 'bg-slate-600/30 hover:bg-slate-500/40',
		chevronBgActive: 'bg-white',
		chevronIcon: 'text-white',
		chevronIconActive: 'text-slate-700',
		borderLeft: 'border-l-4 border-slate-400',
		cardBorder: 'border border-slate-500/30',
		cardBorderHover: 'hover:border-slate-400/50 hover:shadow-lg',
		ctaBg: 'bg-gradient-to-r from-slate-800 via-gray-900 to-slate-900',
		ctaBorder: 'border border-slate-500/30',
		ctaButton: 'bg-white text-slate-800 hover:bg-slate-50',
		ctaButtonHover: 'hover:shadow-xl hover:shadow-white/10',
		inputFocus: 'focus:ring-slate-400/20 focus:ring-2',
	},

	yellow: {
		background: 'bg-gradient-to-br from-yellow-500 via-orange-500 to-yellow-600',
		headerIcon: 'bg-gradient-to-br from-yellow-300 to-orange-300',
		headerGradient:
			'bg-gradient-to-r from-white via-yellow-50 to-white bg-clip-text text-transparent',
		searchBorder: 'border-yellow-300/40 focus:border-white',
		searchFocus: 'focus:ring-white/20 focus:ring-2',
		categoryBadge: 'bg-yellow-400/20 border border-yellow-300/30',
		categoryText: 'text-white font-medium',
		questionHover: 'group-hover:text-yellow-100',
		chevronBg: 'bg-yellow-400/20 hover:bg-yellow-300/30',
		chevronBgActive: 'bg-white',
		chevronIcon: 'text-white',
		chevronIconActive: 'text-yellow-700',
		borderLeft: 'border-l-4 border-yellow-300',
		cardBorder: 'border border-yellow-400/20',
		cardBorderHover: 'hover:border-yellow-300/40 hover:shadow-lg',
		ctaBg: 'bg-gradient-to-r from-yellow-600 via-orange-600 to-yellow-700',
		ctaBorder: 'border border-yellow-400/30',
		ctaButton: 'bg-white text-yellow-800 hover:bg-yellow-50',
		ctaButtonHover: 'hover:shadow-xl hover:shadow-white/10',
		inputFocus: 'focus:ring-yellow-400/20 focus:ring-2',
	},

	blue: {
		background: 'bg-gradient-to-br from-blue-600 via-cyan-500 to-blue-700',
		headerIcon: 'bg-gradient-to-br from-blue-400 to-cyan-300',
		headerGradient:
			'bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent',
		searchBorder: 'border-blue-300/30 focus:border-white',
		searchFocus: 'focus:ring-white/20 focus:ring-2',
		categoryBadge: 'bg-blue-500/20 border border-blue-300/30',
		categoryText: 'text-white font-medium',
		questionHover: 'group-hover:text-blue-100',
		chevronBg: 'bg-blue-400/20 hover:bg-blue-300/30',
		chevronBgActive: 'bg-white',
		chevronIcon: 'text-white',
		chevronIconActive: 'text-blue-600',
		borderLeft: 'border-l-4 border-blue-300',
		cardBorder: 'border border-blue-400/20',
		cardBorderHover: 'hover:border-blue-300/40 hover:shadow-lg',
		ctaBg: 'bg-gradient-to-r from-blue-700 via-cyan-600 to-blue-800',
		ctaBorder: 'border border-blue-400/30',
		ctaButton: 'bg-white text-blue-700 hover:bg-blue-50',
		ctaButtonHover: 'hover:shadow-xl hover:shadow-white/10',
		inputFocus: 'focus:ring-blue-400/20 focus:ring-2',
	},

	green: {
		background: 'bg-gradient-to-br from-green-600 via-teal-600 to-green-700',
		headerIcon: 'bg-gradient-to-br from-green-400 to-teal-400',
		headerGradient:
			'bg-gradient-to-r from-white via-green-100 to-white bg-clip-text text-transparent',
		searchBorder: 'border-green-300/30 focus:border-white',
		searchFocus: 'focus:ring-white/20 focus:ring-2',
		categoryBadge: 'bg-green-500/20 border border-green-300/30',
		categoryText: 'text-white font-medium',
		questionHover: 'group-hover:text-green-100',
		chevronBg: 'bg-green-400/20 hover:bg-green-300/30',
		chevronBgActive: 'bg-white',
		chevronIcon: 'text-white',
		chevronIconActive: 'text-green-600',
		borderLeft: 'border-l-4 border-green-300',
		cardBorder: 'border border-green-400/20',
		cardBorderHover: 'hover:border-green-300/40 hover:shadow-lg',
		ctaBg: 'bg-gradient-to-r from-green-700 via-teal-700 to-green-800',
		ctaBorder: 'border border-green-400/30',
		ctaButton: 'bg-white text-green-800 hover:bg-green-50',
		ctaButtonHover: 'hover:shadow-xl hover:shadow-white/10',
		inputFocus: 'focus:ring-green-400/20 focus:ring-2',
	},

	orange: {
		background: 'bg-gradient-to-br from-orange-500 via-orange-600 to-amber-600',
		headerIcon: 'bg-gradient-to-br from-orange-400 to-amber-400',
		headerGradient:
			'bg-gradient-to-r from-white via-orange-100 to-white bg-clip-text text-transparent',
		searchBorder: 'border-orange-300/30 focus:border-white',
		searchFocus: 'focus:ring-white/20 focus:ring-2',
		categoryBadge: 'bg-orange-400/20 border border-orange-300/30',
		categoryText: 'text-white font-medium',
		questionHover: 'group-hover:text-orange-100',
		chevronBg: 'bg-orange-400/20 hover:bg-orange-300/30',
		chevronBgActive: 'bg-white',
		chevronIcon: 'text-white',
		chevronIconActive: 'text-orange-600',
		borderLeft: 'border-l-4 border-orange-300',
		cardBorder: 'border border-orange-400/20',
		cardBorderHover: 'hover:border-orange-300/40 hover:shadow-lg',
		ctaBg: 'bg-gradient-to-r from-orange-600 via-orange-700 to-amber-700',
		ctaBorder: 'border border-orange-400/30',
		ctaButton: 'bg-white text-orange-800 hover:bg-orange-50',
		ctaButtonHover: 'hover:shadow-xl hover:shadow-white/10',
		inputFocus: 'focus:ring-orange-400/20 focus:ring-2',
	},
};

export default colorSchemes;
