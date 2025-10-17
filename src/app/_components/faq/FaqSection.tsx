'use client';

// src/app/_components/faq/FaqSection.tsx

import { useState } from 'react';
import { ChevronDown, Search, HelpCircle } from 'lucide-react';

// Type definition for FAQ items
export interface FAQ {
	id?: string | number;
	question: string;
	answer: string;
	category: string;
}

interface ColorScheme {
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
}

interface FAQSectionProps {
	faqs: FAQ[];
	title: string;
	subtitle: string;
	showSearch?: boolean;
	showCategories?: boolean;
	colorScheme?:
		| 'primary'
		| 'accent'
		| 'teal'
		| 'purple'
		| 'mint'
		| 'lavender'
		| 'custom'
		| 'yellow'
		| 'blue'
		| 'green';
	customColors?: Partial<ColorScheme>;
	supportContact?: {
		enabled?: boolean;
		title?: string;
		description?: string;
		buttonText?: string;
		onContactClick?: () => void;
	};
}

// Default FAQs for demo purposes
const defaultFaqs: FAQ[] = [
	{
		id: 1,
		question: 'Can I change format mid-season?',
		answer:
			'Yes—use the "Edit Event" feature to switch formats before generating new schedules. This gives you the flexibility to adapt your league structure as needed without starting from scratch.',
		category: 'League Management',
	},
	{
		id: 2,
		question: 'How do substitutions work?',
		answer:
			'Activate sub list on registration page; subs get auto-notified and confirmed. The system automatically manages the substitute roster and sends notifications when substitutes are needed.',
		category: 'Players',
	},
	{
		id: 3,
		question: 'Is there a player/team limit?',
		answer:
			'Leagues support 4 to 64 teams or 10 to 200 individual entries. This range accommodates everything from small recreational leagues to large competitive tournaments.',
		category: 'League Management',
	},
	{
		id: 4,
		question: 'Can I collect league fees?',
		answer:
			'Integrate paddlX Payments to accept entry fees at signup. Process payments securely and automatically track who has paid, with automated reminders for outstanding fees.',
		category: 'Payments',
	},
	{
		id: 5,
		question: 'How do I embed standings?',
		answer:
			'Use the "Embed" option on the standings widget to add to your website. Simply copy the provided code snippet and paste it into your site—no technical expertise required.',
		category: 'Integration',
	},
];

// Predefined color schemes using your app's palette
const colorSchemes: Record<string, ColorScheme> = {
	primary: {
		background: 'bg-gradient-to-br from-light-blue-1 via-white to-pale-blue',
		headerIcon: 'bg-gradient-to-br from-primary to-primary-dark',
		headerGradient:
			'bg-gradient-to-r from-primary via-primary-dark to-teal bg-clip-text text-transparent',
		searchBorder: 'border-light-blue-2 focus:border-primary',
		searchFocus: 'focus:ring-primary/20',
		categoryBadge: 'bg-gradient-to-r from-light-blue-1 to-light-blue-2',
		categoryText: 'text-primary',
		questionHover: 'group-hover:text-primary',
		chevronBg: 'bg-gradient-to-br from-light-blue-1 to-light-blue-2',
		chevronBgActive: 'bg-gradient-to-br from-primary to-primary-dark',
		chevronIcon: 'text-primary',
		chevronIconActive: 'text-white',
		borderLeft: 'border-primary',
		cardBorder: 'border-light-blue-1',
		cardBorderHover: 'hover:border-primary',
		ctaBg: 'bg-gradient-to-r from-light-blue-1 via-light-blue-2 to-pale-blue',
		ctaBorder: 'border-primary',
		ctaButton:
			'bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-ocean',
		ctaButtonHover: 'hover:shadow-xl hover:shadow-primary/20',
	},
	accent: {
		background: 'bg-gradient-to-br from-cream via-white to-warning-light',
		headerIcon: 'bg-gradient-to-br from-accent to-accent-dark',
		headerGradient:
			'bg-gradient-to-r from-accent via-coral to-sunset bg-clip-text text-transparent',
		searchBorder: 'border-accent-light focus:border-accent',
		searchFocus: 'focus:ring-accent/20',
		categoryBadge: 'bg-gradient-to-r from-warning-light to-cream',
		categoryText: 'text-accent-dark',
		questionHover: 'group-hover:text-accent',
		chevronBg: 'bg-gradient-to-br from-warning-light to-cream',
		chevronBgActive: 'bg-gradient-to-br from-accent to-accent-dark',
		chevronIcon: 'text-accent',
		chevronIconActive: 'text-white',
		borderLeft: 'border-accent',
		cardBorder: 'border-warning-light',
		cardBorderHover: 'hover:border-accent',
		ctaBg: 'bg-gradient-to-r from-warning-light via-cream to-accent-light/30',
		ctaBorder: 'border-accent',
		ctaButton:
			'bg-gradient-to-r from-accent to-coral hover:from-accent-dark hover:to-sunset',
		ctaButtonHover: 'hover:shadow-xl hover:shadow-accent/20',
	},
	teal: {
		background: 'bg-gradient-to-br from-light-blue-1 via-white to-mint/10',
		headerIcon: 'bg-gradient-to-br from-teal to-ocean',
		headerGradient:
			'bg-gradient-to-r from-teal via-mint to-primary bg-clip-text text-transparent',
		searchBorder: 'border-mint/30 focus:border-teal',
		searchFocus: 'focus:ring-teal/20',
		categoryBadge: 'bg-gradient-to-r from-light-blue-1 to-mint/20',
		categoryText: 'text-teal',
		questionHover: 'group-hover:text-teal',
		chevronBg: 'bg-gradient-to-br from-light-blue-1 to-mint/20',
		chevronBgActive: 'bg-gradient-to-br from-teal to-ocean',
		chevronIcon: 'text-teal',
		chevronIconActive: 'text-white',
		borderLeft: 'border-teal',
		cardBorder: 'border-light-blue-1',
		cardBorderHover: 'hover:border-teal',
		ctaBg: 'bg-gradient-to-r from-light-blue-1 via-mint/20 to-pale-blue',
		ctaBorder: 'border-teal',
		ctaButton:
			'bg-gradient-to-r from-teal to-mint hover:from-ocean hover:to-teal',
		ctaButtonHover: 'hover:shadow-xl hover:shadow-teal/20',
	},
	purple: {
		background: 'bg-gradient-to-br from-light-lavender via-white to-cool-gray',
		headerIcon: 'bg-gradient-to-br from-purple to-lavender',
		headerGradient:
			'bg-gradient-to-r from-purple via-lavender to-rose bg-clip-text text-transparent',
		searchBorder: 'border-lavender/30 focus:border-purple',
		searchFocus: 'focus:ring-purple/20',
		categoryBadge: 'bg-gradient-to-r from-light-lavender to-lavender/30',
		categoryText: 'text-purple',
		questionHover: 'group-hover:text-purple',
		chevronBg: 'bg-gradient-to-br from-light-lavender to-lavender/30',
		chevronBgActive: 'bg-gradient-to-br from-purple to-lavender',
		chevronIcon: 'text-purple',
		chevronIconActive: 'text-white',
		borderLeft: 'border-purple',
		cardBorder: 'border-light-lavender',
		cardBorderHover: 'hover:border-purple',
		ctaBg: 'bg-gradient-to-r from-light-lavender via-lavender/20 to-rose/10',
		ctaBorder: 'border-purple',
		ctaButton:
			'bg-gradient-to-r from-purple to-lavender hover:from-lavender hover:to-rose',
		ctaButtonHover: 'hover:shadow-xl hover:shadow-purple/20',
	},
	mint: {
		background: 'bg-gradient-to-br from-success-light via-white to-light-blue-1',
		headerIcon: 'bg-gradient-to-br from-mint to-success',
		headerGradient:
			'bg-gradient-to-r from-mint via-success to-teal bg-clip-text text-transparent',
		searchBorder: 'border-success-light focus:border-mint',
		searchFocus: 'focus:ring-mint/20',
		categoryBadge: 'bg-gradient-to-r from-success-light to-mint/20',
		categoryText: 'text-success',
		questionHover: 'group-hover:text-mint',
		chevronBg: 'bg-gradient-to-br from-success-light to-mint/20',
		chevronBgActive: 'bg-gradient-to-br from-mint to-success',
		chevronIcon: 'text-mint',
		chevronIconActive: 'text-white',
		borderLeft: 'border-mint',
		cardBorder: 'border-success-light',
		cardBorderHover: 'hover:border-mint',
		ctaBg: 'bg-gradient-to-r from-success-light via-mint/20 to-light-blue-1',
		ctaBorder: 'border-mint',
		ctaButton:
			'bg-gradient-to-r from-mint to-success hover:from-success hover:to-teal',
		ctaButtonHover: 'hover:shadow-xl hover:shadow-mint/20',
	},
	lavender: {
		background: 'bg-gradient-to-br from-light-lavender via-white to-rose/10',
		headerIcon: 'bg-gradient-to-br from-lavender to-rose',
		headerGradient:
			'bg-gradient-to-r from-lavender via-rose to-purple bg-clip-text text-transparent',
		searchBorder: 'border-rose/30 focus:border-lavender',
		searchFocus: 'focus:ring-lavender/20',
		categoryBadge: 'bg-gradient-to-r from-light-lavender to-rose/20',
		categoryText: 'text-lavender',
		questionHover: 'group-hover:text-lavender',
		chevronBg: 'bg-gradient-to-br from-light-lavender to-rose/20',
		chevronBgActive: 'bg-gradient-to-br from-lavender to-rose',
		chevronIcon: 'text-lavender',
		chevronIconActive: 'text-white',
		borderLeft: 'border-lavender',
		cardBorder: 'border-light-lavender',
		cardBorderHover: 'hover:border-lavender',
		ctaBg: 'bg-gradient-to-r from-light-lavender via-rose/20 to-lavender/10',
		ctaBorder: 'border-lavender',
		ctaButton:
			'bg-gradient-to-r from-lavender to-rose hover:from-rose hover:to-purple',
		ctaButtonHover: 'hover:shadow-xl hover:shadow-lavender/20',
	},
	yellow: {
		background: 'bg-gradient-to-br from-yellow-50 via-white to-orange-50',
		headerIcon: 'bg-gradient-to-br from-yellow to-orange',
		headerGradient: 'bg-gradient-to-r from-yellow via-orange to-coral',
		searchBorder: 'border-orange/30 focus:border-yellow',
		searchFocus: 'focus:ring-yellow/20',
		categoryBadge: 'bg-gradient-to-r from-yellow to-orange/20',
		categoryText: 'text-black',
		questionHover: 'group-hover:text-yellow',
		chevronBg: 'bg-gradient-to-br from-yellow to-orange/20',
		chevronBgActive: 'bg-gradient-to-br from-yellow to-orange',
		chevronIcon: 'text-white',
		chevronIconActive: 'text-white',
		borderLeft: 'border-yellow',
		cardBorder: 'border-yellow',
		cardBorderHover: 'hover:border-orange',
		ctaBg: 'bg-gradient-to-r from-yellow via-orange/20 to-coral',
		ctaBorder: 'border-orange',
		ctaButton:
			'bg-gradient-to-r from-orange to-yellow hover:from-yellow hover:to-coral',
		ctaButtonHover: 'hover:shadow-xl hover:shadow-orange/20',
	},
	blue: {
		// A slightly richer background for more depth
		background: 'bg-gradient-to-br from-sky-50 via-white to-cyan-50',
		// Strong, vibrant gradient for the main icon
		headerIcon: 'bg-gradient-to-br from-blue-600 to-cyan-500',
		// A dynamic and eye-catching gradient for the title
		headerGradient:
			'bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 bg-clip-text text-transparent',
		// Softer default border, with a strong blue on focus for clear feedback
		searchBorder: 'border-slate-300 focus:border-blue-500',
		searchFocus: 'focus:ring-blue-500/20',
		// High-contrast badge for better readability
		categoryBadge: 'bg-blue-100',
		categoryText: 'text-blue-700 font-semibold',
		// Makes the question pop on hover
		questionHover: 'group-hover:text-blue-600',
		// A subtle, clean background for the chevron icon
		chevronBg: 'bg-slate-100',
		// A strong, solid gradient when the FAQ is active/open
		chevronBgActive: 'bg-gradient-to-br from-blue-600 to-cyan-500',
		chevronIcon: 'text-blue-600',
		chevronIconActive: 'text-white',
		// A clear visual indicator for the answer panel
		borderLeft: 'border-blue-500',
		// A very subtle border for a cleaner, less "boxy" default state
		cardBorder: 'border-slate-200',
		// The border becomes prominent on hover, creating a nice interactive effect
		cardBorderHover: 'hover:border-blue-500',
		// A clean, simple background that doesn't compete with the button
		ctaBg: 'bg-blue-50',
		// A subtle border to frame the CTA section
		ctaBorder: 'border-blue-200',
		// A cohesive gradient that sticks to the core color palette
		ctaButton:
			'bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600',
		// A matching shadow color for a polished look
		ctaButtonHover: 'hover:shadow-lg hover:shadow-blue-500/30',
	},
	green: {
		// A subtle, professional background gradient
		background: 'bg-gradient-to-br from-green-50 via-white to-teal-50',
		// A strong, confident gradient for the main icon
		headerIcon: 'bg-gradient-to-br from-green-600 to-teal-600',
		// Dynamic gradient for the main title, using the page's core colors
		headerGradient:
			'bg-gradient-to-r from-green-600 via-teal-500 to-green-700 bg-clip-text text-transparent',
		// Clean and clear search input styles
		searchBorder: 'border-slate-300 focus:border-green-500',
		searchFocus: 'focus:ring-green-500/20',
		// High-contrast badge for excellent readability
		categoryBadge: 'bg-green-100',
		categoryText: 'text-green-800 font-semibold',
		// An engaging hover effect for questions
		questionHover: 'group-hover:text-green-600',
		// A subtle background for the chevron icon
		chevronBg: 'bg-slate-100',
		// A vibrant gradient when the FAQ is expanded
		chevronBgActive: 'bg-gradient-to-br from-green-600 to-teal-500',
		chevronIcon: 'text-green-600',
		chevronIconActive: 'text-white',
		// A clear visual accent for the answer panel
		borderLeft: 'border-green-500',
		// A soft default border for a clean, uncluttered look
		cardBorder: 'border-slate-200',
		// The border becomes prominent and on-brand during interaction
		cardBorderHover: 'hover:border-green-500',
		// A light, clean background for the final call-to-action
		ctaBg: 'bg-green-50',
		// A subtle border to frame the CTA
		ctaBorder: 'border-green-200',
		// A compelling button that matches the page's primary actions
		ctaButton:
			'bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700',
		// A matching shadow for a polished, professional finish
		ctaButtonHover: 'hover:shadow-lg hover:shadow-green-500/30',
	},
};

export default function FAQSection({
	faqs = defaultFaqs,
	title = 'Frequently Asked Questions',
	subtitle = 'Find answers to common questions about managing your league, players, and payments',
	showSearch = true,
	showCategories = true,
	colorScheme = 'primary',
	customColors,
	supportContact = {
		enabled: true,
		title: 'Still have questions?',
		description:
			'Our support team is here to help you get the most out of your league management',
		buttonText: 'Contact Support',
	},
}: FAQSectionProps) {
	const [openIndex, setOpenIndex] = useState<number | null>(null);
	const [searchQuery, setSearchQuery] = useState('');

	// Get color scheme with custom overrides
	const colors = {
		...colorSchemes[colorScheme],
		...customColors,
	};

	const filteredFaqs = faqs.filter(
		(faq) =>
			faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
			faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
			faq.category.toLowerCase().includes(searchQuery.toLowerCase())
	);

	const toggleFaq = (index: number) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	const handleContactClick = () => {
		if (supportContact?.onContactClick) {
			supportContact.onContactClick();
		} else {
			window.location.href = 'mailto:support@example.com';
		}
	};

	return (
		<section className={`${colors.background} py-20 lg:py-28`}>
			<div className="container mx-auto px-4 sm:px-6 max-w-4xl">
				{/* Header */}
				<div className="text-center mb-12">
					<div
						className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${colors.headerIcon} mb-6 shadow-lg`}
					>
						<HelpCircle className="w-8 h-8 text-white" />
					</div>
					<h2
						className={`text-4xl lg:text-5xl font-bold mb-4 ${colors.headerGradient}`}
					>
						{title}
					</h2>
					<p className="text-lg text-slate-gray max-w-2xl mx-auto">{subtitle}</p>
				</div>

				{/* Search Bar */}
				{showSearch && (
					<div className="mb-8">
						<div className="relative max-w-xl mx-auto">
							<Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-light-gray" />
							<input
								type="text"
								placeholder="Search questions..."
								value={searchQuery}
								onChange={(e) => setSearchQuery(e.target.value)}
								className={`w-full pl-12 pr-4 py-4 rounded-2xl border-2 ${colors.searchBorder} focus:outline-none focus:ring-4 ${colors.searchFocus} transition-all duration-200 text-dark-slate placeholder:text-light-gray`}
							/>
						</div>
					</div>
				)}

				{/* FAQ Items */}
				<div className="space-y-4">
					{filteredFaqs.length > 0 ? (
						filteredFaqs.map((faq, index) => (
							<div
								key={faq.id || index}
								className={`group bg-white rounded-2xl border-2 ${colors.cardBorder} ${colors.cardBorderHover} transition-all duration-300 overflow-hidden shadow-sm hover:shadow-xl`}
							>
								<button
									onClick={() => toggleFaq(index)}
									className="w-full px-6 py-5 flex items-start justify-between gap-4 text-left transition-colors duration-200"
									aria-expanded={openIndex === index}
								>
									<div className="flex-1">
										{showCategories && (
											<div className="flex items-center gap-3 mb-1">
												<span
													className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${colors.categoryBadge} ${colors.categoryText}`}
												>
													{faq.category}
												</span>
											</div>
										)}
										<h3
											className={`text-lg font-bold text-dark-slate ${colors.questionHover} transition-colors duration-200`}
										>
											{faq.question}
										</h3>
									</div>
									<div
										className={`flex-shrink-0 w-8 h-8 rounded-full ${
											colors.chevronBg
										} flex items-center justify-center transition-all duration-300 ${
											openIndex === index ? `rotate-180 ${colors.chevronBgActive}` : ''
										}`}
									>
										<ChevronDown
											className={`w-5 h-5 transition-colors duration-300 ${
												openIndex === index ? colors.chevronIconActive : colors.chevronIcon
											}`}
										/>
									</div>
								</button>

								{/* Answer */}
								<div
									className={`overflow-hidden transition-all duration-300 ease-in-out ${
										openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
									}`}
								>
									<div className="px-6 pb-6 pt-2">
										<div className={`pl-4 border-l-4 ${colors.borderLeft}`}>
											<p className="text-slate-gray leading-relaxed">{faq.answer}</p>
										</div>
									</div>
								</div>
							</div>
						))
					) : (
						<div className="text-center py-12">
							<div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-cool-gray mb-4">
								<Search className="w-8 h-8 text-light-gray" />
							</div>
							<p className="text-slate-gray text-lg">
								No questions found matching your search.
							</p>
							<button
								onClick={() => setSearchQuery('')}
								className={`mt-4 ${colors.categoryText} font-semibold underline hover:opacity-80 transition-opacity`}
							>
								Clear search
							</button>
						</div>
					)}
				</div>

				{/* Footer CTA */}
				{supportContact?.enabled && (
					<div
						className={`mt-12 text-center p-8 rounded-2xl ${colors.ctaBg} border-2 ${colors.ctaBorder}`}
					>
						<h3 className="text-xl font-bold text-dark-slate mb-2">
							{supportContact.title}
						</h3>
						<p className="text-slate-gray mb-4">{supportContact.description}</p>
						<button
							onClick={handleContactClick}
							className={`px-6 py-3 ${colors.ctaButton} text-white font-semibold rounded-xl ${colors.ctaButtonHover} hover:scale-105 transition-all duration-200 cursor-pointer`}
						>
							{supportContact.buttonText}
						</button>
					</div>
				)}
			</div>
		</section>
	);
}
