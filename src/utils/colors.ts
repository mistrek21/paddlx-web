// // utilities/colors.ts

// // Define color palette for easy access
export const COLORS = {
	// Primary colors
	primary: '#2A9DB0',
	primaryDark: '#1A8DA0',
	accent: '#FF6B4A', // Added - orange/coral accent color

	dark: '#0F172A',

	// Text colors
	darkSlate: '#0F172A',
	slateGray: '#64748B', // Added - commonly used for secondary text
	lightSlate: '#475569', // Added - used for paragraph text

	// Background shades
	lightBlue1: '#E6F7F9',
	lightBlue2: '#C7EDF2',
	lightBlue3: '#F0FAFB',
	lightBlue4: '#F8FCFD',
	paleBlue: '#F0F9FF', // Added - used in feature icons

	// Utility colors
	lightGray: '#9CA3AF',
	mediumGray: '#64748B',
	white: '#FFFFFF',
	black: '#000000',

	// Semantic colors
	purple: '#8E8EEA',
	orange: '#FF6B4A',
	green: '#22C55E',
	yellow: '#FBBF24',
	red: '#EF4444',
	lightRead: '#F87171',
	teal: '#2A9DB0',

	pinkButton: '#FF2D55',

	// NEW: Enhanced primary variations
	primaryLight: '#4DB5C7', // Lighter teal for hover states

	primarySoft: '#7BC9D6', // Very light teal for backgrounds
	primarySuperSoft: '#B8DCE8', // Lightest teal for subtle accents
	primaryUltraSoft: '#E6F7F9', // Lightest teal for subtle accents
	accentDark: '#E55A3A', // Deeper orange for pressed states
	accentLight: '#FF8B6B', // Lighter orange for subtle accents

	// NEW: Unique complementary colors that make sense with teal/orange
	coral: '#FF7A6B', // Warm coral - bridges orange and pink
	mint: '#4ECDC4', // Fresh mint - complements teal beautifully
	sunset: '#FFB347', // Warm sunset orange - extends your orange family
	ocean: '#006B7D', // Deep ocean teal - darker than primaryDark
	cream: '#FFF8F0', // Warm cream - softer than pure white

	// NEW: Modern accent colors that work with your palette
	lavender: '#B8A9FF', // Soft purple - creates nice contrast with teal/orange
	lightLavender: '#E5E0FF', // <-- ADD THIS LINE
	sage: '#87A96B', // Muted sage green - earthy complement
	rose: '#FF9FB2', // Soft rose - feminine touch that works with coral
	gold: '#FFD23F', // Bright gold - premium feel, works with orange
	slate: '#485563', // Modern slate - sophisticated neutral

	// NEW: Enhanced utilities
	coolGray: '#F1F5F9', // Cool-toned light gray
	grayText: '#64748B',
	warmGray100: '#F5F5F4', // Warm-toned light gray
	border: '#E5E7EB', // Modern border color
	divider: '#D1D5DB', // Subtle dividers
	text: '#000',
	textSecondary: '#64748B',
	// NEW: Enhanced semantic colors
	success: '#10B981', // Fresh green for success states
	warning: '#F59E0B', // Amber for warnings
	error: '#F87171', // Softer red for errors
	info: '#3B82F6', // Blue for info messages

	// More colors
	successLight: '#D1FAE5', // Very light mint green - lighter version of your success color
	warningLight: '#FEF3C7', // Very light amber - lighter version of your warning color
	lightGray2: '#F8FAFC', // Slightly cooler than your existing lightGray, fits with your blue-tinted backgrounds
	background: '#FEFEFE', // Very subtle off-white, warmer than pure white but cooler than cream
	errorLight: '#FEE2E2', // Very light red/pink - lighter version of your error colors
};

// // Color usage guide:
// // Dominant: Teal/Blue (#2A9DB0)
// // Accent: Orange/Coral (#FF6B4A) for CTAs and highlights
// // Supporting: White, Dark Slate (#0F172A)
// // Accents/Tints: Various very light shades of blue/teal (#E6F7F9, #C7EDF2, #F0FAFB, #F8FCFD, #F0F9FF)
// // Text: Dark Slate for primary text, Slate Gray (#64748B) for secondary text, Light Slate (#475569) for paragraphs
// // Utility: Light Gray (#E2E8F0) for subtle borders, Black for shadows

// utilities/colors.ts

// Define color palette inspired by Apple's design aesthetic

export const SEMANTIC_COLORS = {
	// Text
	textPrimary: COLORS.darkSlate,
	textSecondary: COLORS.slateGray,
	textTertiary: COLORS.lightSlate,

	// Interactive
	interactive: COLORS.primary,
	interactiveHover: COLORS.primaryDark,

	// UI Elements
	backgroundPrimary: COLORS.lightBlue1,
	backgroundSecondary: COLORS.lightBlue3,
	backgroundTertiary: COLORS.lightBlue1,
	borderColor: COLORS.lightGray,

	systemGray: COLORS.lightGray,

	// States
	// success: COLORS.primary,
	// error: COLORS.accent,
	// warning: COLORS.primary,
	// info: COLORS.primary,
	highlight: COLORS.primary,

	// States (Corrected for clarity and convention)
	success: COLORS.green, // Use the defined green
	error: COLORS.red, // Use the defined red
	warning: COLORS.yellow, // Use the defined yellow
	info: COLORS.primary, // Info can remain the primary color

	// Special UI
	placeholder: COLORS.lightGray,
	overlay: 'rgba(0, 0, 0, 0.5)',
	shadow: 'rgba(0, 0, 0, 0.1)',
};

export const SESSION_COLOR_VARIANTS = {
	default: {
		badge: {
			background: COLORS.lightBlue1,
			border: COLORS.primary,
			text: COLORS.darkSlate,
		},
		price: {
			background: COLORS.lightBlue1,
			border: COLORS.primary,
			text: COLORS.primary,
		},
	},
	premium: {
		badge: {
			background: COLORS.purple + '20', // 20% opacity
			border: COLORS.purple,
			text: COLORS.purple,
		},
		price: {
			background: COLORS.purple + '15',
			border: COLORS.purple,
			text: COLORS.purple,
		},
	},
	featured: {
		badge: {
			background: COLORS.orange + '20',
			border: COLORS.orange,
			text: COLORS.orange,
		},
		price: {
			background: COLORS.orange + '15',
			border: COLORS.orange,
			text: COLORS.orange,
		},
	},
	success: {
		badge: {
			background: COLORS.green + '20',
			border: COLORS.green,
			text: COLORS.green,
		},
		price: {
			background: COLORS.green + '15',
			border: COLORS.green,
			text: COLORS.green,
		},
	},
	warning: {
		badge: {
			background: COLORS.yellow + '20',
			border: COLORS.yellow,
			text: COLORS.orange, // Using orange text for better contrast on yellow bg
		},
		price: {
			background: COLORS.yellow + '15',
			border: COLORS.yellow,
			text: COLORS.orange,
		},
	},
	teal: {
		badge: {
			background: COLORS.teal + '20',
			border: COLORS.teal,
			text: COLORS.teal,
		},
		price: {
			background: COLORS.teal + '15',
			border: COLORS.teal,
			text: COLORS.teal,
		},
	},
};

// NEW: Gradient definitions for modern UI
export const GRADIENTS = {
	primary: `linear-gradient(135deg, ${COLORS.primary} 0%, ${COLORS.primaryDark} 100%)`,
	sunset: `linear-gradient(135deg, ${COLORS.sunset} 0%, ${COLORS.coral} 100%)`,
	ocean: `linear-gradient(135deg, ${COLORS.ocean} 0%, ${COLORS.mint} 100%)`,
	royal: `linear-gradient(135deg, ${COLORS.lavender} 0%, ${COLORS.rose} 100%)`,
	warm: `linear-gradient(135deg, ${COLORS.accent} 0%, ${COLORS.sunset} 100%)`,
	cool: `linear-gradient(135deg, ${COLORS.mint} 0%, ${COLORS.primary} 100%)`,
};

// Color usage guide:
// Dominant: Blue (#007AFF) - Apple's signature blue for interactive elements
// Accent: Red (#FF3B30) for important alerts, notifications, and deletion actions
// Supporting: Pure white (#FFFFFF) with Dark Slate (#1D1D1F) for high contrast
// Backgrounds: Very subtle light grays with blue tints (#F5F5F7, #FBFBFD)
// Text: Near-black (#1D1D1F) for primary text, Gray (#86868B) for secondary text
// Additional accents: Use sparingly for specific contexts (green for success, yellow for warnings)
// UI Elements: Light Gray (#D2D2D7) for subtle borders and dividers
