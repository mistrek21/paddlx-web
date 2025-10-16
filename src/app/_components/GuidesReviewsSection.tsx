'use client';

import { useState } from 'react';
import { ArrowRight, Play } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

// Helper function to generate URL-friendly slugs
const generateSlug = (title: string): string => {
	return title
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/(^-|-$)/g, '');
};

const tabs = [
	{ id: 'trending', label: 'TRENDING' },
	{ id: 'fixed-partner', label: 'Run a fixed-partner league on paddlx' },
	{ id: 'run-league', label: 'How to run a league on paddlx' },
	{
		id: 'scale-group',
		label: 'How to scale your pickleball group with paddlx',
	},
	{ id: 'browse', label: 'Browse all content' },
];

// Data for "Trending" tab -> "Gear we love" section. This correctly links to /pickleball-gear/...
const gearArticles = [
	{
		category: 'Pickleball Gear',
		title: 'Best pickleball paddles 2025',
		slug: 'paddles',
		image: '/professional-pickleball-paddle-close-up-on-court.jpg',
		readTime: '11 min read',
		excerpt:
			'Comprehensive review of the top pickleball paddles for 2025, including power, control, and all-court options.',
	},
	{
		category: 'Pickleball Gear',
		title: 'Top pickleball shoes for stability & comfort',
		slug: 'shoes',
		image: '/adidas-pickleball-shoes-and-equipment.jpg',
		readTime: '8 min read',
		excerpt:
			'Our expert picks for the best shoes that offer the stability and grip needed for intense pickleball matches.',
	},
	{
		category: 'Pickleball Gear',
		title: 'Best pickleball balls in 2025 - top 5 compared',
		slug: 'balls',
		image: '/colorful-pickleball-balls-arranged-on-court.jpg',
		readTime: '6 min read',
		excerpt:
			'In-depth comparison of the best indoor and outdoor pickleball balls for competitive and recreational play.',
	},
];

// Data for other tabs. These objects are self-contained for the tabbed view.
const fixedPartnerContent = {
	featured: {
		image: '/pickleball-doubles-team-celebrating-on-court.jpg',
		category: 'League Management',
		title: 'The complete guide to running a fixed-partner league',
		description:
			'Learn how to organize and manage a successful fixed-partner league where teams stay together throughout the season.',
		cta: 'Read the guide',
		readTime: '12 min read',
	},
	articles: [
		{
			category: 'Getting Started',
			title: 'Setting up team registration for fixed-partner leagues',
			image: '/people-registering-for-pickleball-tournament.jpg',
			readTime: '7 min read',
			excerpt:
				'Step-by-step guide to creating an efficient team registration process for your fixed-partner league.',
		},
		{
			category: 'Scheduling',
			title: 'Creating balanced schedules for partner leagues',
			image: '/calendar-and-schedule-planning-for-sports-league.jpg',
			readTime: '9 min read',
			excerpt:
				'Learn how to create fair and balanced schedules that keep all teams engaged throughout the season.',
		},
		{
			category: 'Tips & Tricks',
			title: 'How to handle team substitutions and absences',
			image: '/pickleball-team-discussing-strategy.jpg',
			readTime: '5 min read',
			excerpt:
				'Best practices for managing unexpected absences and substitutions in fixed-partner leagues.',
		},
	],
};

const runLeagueContent = {
	featured: {
		image: '/pickleball-league-tournament-with-multiple-courts.jpg',
		category: 'League Management',
		title: 'Your step-by-step guide to running a pickleball league',
		description:
			'Everything you need to know about organizing, scheduling, and managing a successful pickleball league on paddlx.',
		cta: 'Get started',
		readTime: '15 min read',
	},
	articles: [
		{
			category: 'Getting Started',
			title: 'Creating your first league on paddlx',
			image: '/laptop-showing-league-management-dashboard.jpg',
			readTime: '6 min read',
			excerpt:
				'Complete walkthrough of setting up your first pickleball league on the paddlx platform.',
		},
		{
			category: 'Management',
			title: 'Managing player registrations and payments',
			image: '/online-payment-and-registration-interface.jpg',
			readTime: '8 min read',
			excerpt:
				'Streamline your league operations with efficient registration and payment management tools.',
		},
		{
			category: 'Best Practices',
			title: 'Communication tips for league organizers',
			image: '/group-chat-and-communication-on-mobile-phone.jpg',
			readTime: '7 min read',
			excerpt:
				'Effective communication strategies to keep your players informed and engaged throughout the season.',
		},
	],
};

const scaleGroupContent = {
	featured: {
		image: '/large-pickleball-community-playing-on-multiple-cou.jpg',
		category: 'Growth Strategy',
		title: 'Scale your pickleball community with paddlx',
		description:
			'Proven strategies to grow your pickleball group from a handful of players to a thriving community.',
		cta: 'Learn how',
		readTime: '10 min read',
	},
	articles: [
		{
			category: 'Marketing',
			title: 'Attracting new members to your pickleball group',
			image: '/social-media-marketing-for-sports-community.jpg',
			readTime: '8 min read',
			excerpt:
				'Proven marketing strategies to attract and retain new members for your pickleball community.',
		},
		{
			category: 'Engagement',
			title: 'Keeping players active and engaged',
			image: '/engaged-pickleball-players-at-social-event.jpg',
			readTime: '6 min read',
			excerpt:
				'Create a vibrant community culture that keeps players coming back week after week.',
		},
		{
			category: 'Monetization',
			title: 'Turning your group into a sustainable business',
			image: '/business-growth-chart-and-revenue-dashboard.jpg',
			readTime: '11 min read',
			excerpt:
				'Transform your passion for pickleball into a profitable and sustainable business venture.',
		},
	],
};

// FINAL CORRECTED VERSION of browseAllContent.
// The problematic "Best Pickleball Paddles" article has been replaced with the new guide.
// There is no more special 'slug' property needed here.
const browseAllContent = [
	{
		category: 'Pickleball Gear',
		title: 'Best Pickleball Paddles in 2025',
		image: '/professional-pickleball-paddle-close-up-on-court.jpg',
		readTime: '8 min read',
		excerpt: 'Comprehensive review of the top pickleball paddles for 2025.',
		href: '/pickleball-gear/paddles', // This is the exact URL you want.
	},
	{
		category: 'League Management',
		title: 'The complete guide to running a fixed-partner league',
		image: '/pickleball-doubles-team-celebrating-on-court.jpg',
		readTime: '12 min read',
		excerpt: 'Everything you need to organize a successful fixed-partner league.',
	},
	{
		category: 'Getting Started',
		title: 'Creating your first league on paddlx',
		image: '/laptop-showing-league-management-dashboard.jpg',
		readTime: '6 min read',
		excerpt: 'Complete walkthrough of setting up your first pickleball league.',
	},
	{
		category: 'Growth Strategy',
		title: 'Scale your pickleball community with paddlx',
		image: '/large-pickleball-community-playing-on-multiple-cou.jpg',
		readTime: '10 min read',
		excerpt:
			'Proven strategies to grow your pickleball group into a thriving community.',
	},
	{
		category: 'Blog',
		title: 'Watch this space - adidas is making waves in pickleball',
		image: '/adidas-pickleball-shoes-and-equipment.jpg',
		readTime: '5 min read',
		excerpt:
			'Adidas enters the pickleball market with innovative gear and apparel.',
	},
	{
		category: 'Tips & Tricks',
		title: 'How to handle team substitutions and absences',
		image: '/pickleball-team-discussing-strategy.jpg',
		readTime: '5 min read',
		excerpt: 'Best practices for managing unexpected absences in your league.',
	},
];

export function GuidesReviewsSection() {
	const [activeTab, setActiveTab] = useState('trending');

	// This function is for standard guides ONLY and now works for everything in the "Browse All" tab.
	const getGuideUrl = (category: string, title: string): string => {
		const categorySlug = generateSlug(category);
		const titleSlug = generateSlug(title);
		return `/guides/${categorySlug}/${titleSlug}`;
	};

	const getCategoryUrl = (category: string): string => {
		return `/guides/${generateSlug(category)}`;
	};

	const renderTrendingContent = () => (
		<div className="grid lg:grid-cols-2 gap-12">
			{/* Featured Article */}
			<article className="space-y-6">
				<Link
					href="/guides/pickleball-gear/find-the-right-paddle-quiz"
					className="block relative aspect-[4/3] rounded-2xl overflow-hidden group"
					aria-label="Take the paddle finder quiz"
				>
					<Image
						src="/person-holding-pickleball-paddle-with-question-mark.jpg"
						alt="Person holding pickleball paddle with question mark overlay"
						fill
						className="object-cover group-hover:scale-105 transition-transform duration-500"
						priority
					/>
					<div className="absolute inset-0 bg-gradient-to-t from-charcoal/95 via-charcoal/60 to-charcoal/20" />
					<div className="absolute bottom-0 left-0 right-0 p-8">
						<span className="inline-block text-xs font-bold text-charcoal bg-cream px-4 py-2 rounded-full mb-4 shadow-lg">
							Pickleball Gear
						</span>
						<h3 className="text-3xl font-bold text-white mb-4 text-balance drop-shadow-lg">
							Find the right paddle for your game — take our quiz!
						</h3>
					</div>
				</Link>
				<div className="flex flex-wrap gap-4">
					<Link
						href="/guides/pickleball-gear/find-the-right-paddle-quiz"
						className="bg-ocean hover:bg-ocean-dark text-white px-8 py-3.5 rounded-full font-semibold transition-all hover:shadow-lg hover:shadow-ocean/30"
					>
						Take the quiz
					</Link>
					<Link
						href="/pickleball-gear/paddles"
						className="flex items-center gap-2 text-ocean font-semibold hover:gap-3 transition-all px-4"
					>
						More Gear Reviews
						<ArrowRight className="w-5 h-5" aria-hidden="true" />
					</Link>
				</div>
			</article>

			{/* Gear We Love */}
			<div className="space-y-8">
				<div className="flex items-center justify-between">
					<h3 className="text-3xl font-bold text-charcoal">Gear we love</h3>
					<Link
						href="/pickleball-gear/paddles"
						className="text-ocean hover:text-ocean-dark font-medium text-sm transition-colors"
					>
						View all
					</Link>
				</div>
				<div className="space-y-6">
					{gearArticles.map((article, index) => (
						<article key={index}>
							<Link
								href={`/pickleball-gear/${article.slug}`}
								className="flex gap-5 group hover:bg-sand/30 p-4 rounded-2xl transition-all"
							>
								<div className="relative w-32 h-32 flex-shrink-0 rounded-xl overflow-hidden">
									<Image
										src={article.image || '/placeholder.svg'}
										alt={article.title}
										fill
										className="object-cover group-hover:scale-110 transition-transform duration-500"
										loading={index === 0 ? 'eager' : 'lazy'}
									/>
								</div>
								<div className="flex-1 space-y-2 flex flex-col justify-center">
									<div className="flex items-center gap-3">
										<span className="inline-block text-xs font-bold text-ocean uppercase tracking-wide">
											{article.category}
										</span>
										<span className="text-xs text-slate" aria-hidden="true">
											•
										</span>
										<time className="text-xs text-slate">{article.readTime}</time>
									</div>
									<h4 className="text-lg font-bold text-charcoal group-hover:text-ocean transition-colors leading-snug">
										{article.title}
									</h4>
									{article.excerpt && (
										<p className="text-sm text-slate line-clamp-2">{article.excerpt}</p>
									)}
								</div>
							</Link>
						</article>
					))}
				</div>
			</div>
		</div>
	);

	const renderGuideContent = (content: any) => (
		<div className="grid lg:grid-cols-2 gap-12">
			{/* Featured Guide */}
			<article className="space-y-6">
				<Link
					href={getGuideUrl(content.featured.category, content.featured.title)}
					className="block relative aspect-[4/3] rounded-2xl overflow-hidden group"
				>
					<Image
						src={content.featured.image || '/placeholder.svg'}
						alt={content.featured.title}
						fill
						className="object-cover group-hover:scale-105 transition-transform duration-500"
						priority
					/>
					<div className="absolute inset-0 bg-gradient-to-t from-charcoal/95 via-charcoal/50 to-transparent" />
					<div className="absolute top-6 left-6">
						<span className="inline-flex items-center gap-2 text-xs font-bold text-charcoal bg-sand px-4 py-2 rounded-full shadow-lg">
							<Play className="w-3 h-3 fill-current" aria-hidden="true" />
							<time>{content.featured.readTime}</time>
						</span>
					</div>
					<div className="absolute bottom-0 left-0 right-0 p-8">
						<span className="inline-block text-xs font-bold text-white bg-sunset px-4 py-2 rounded-full mb-3 shadow-lg">
							{content.featured.category}
						</span>
						<h3 className="text-3xl font-bold text-white mb-3 text-balance drop-shadow-lg">
							{content.featured.title}
						</h3>
						<p className="text-white/95 leading-relaxed mb-6 text-balance drop-shadow-md">
							{content.featured.description}
						</p>
					</div>
				</Link>
				<Link
					href={getGuideUrl(content.featured.category, content.featured.title)}
					className="block w-full bg-sunset hover:bg-sunset-light text-white px-8 py-4 rounded-full font-bold transition-all hover:shadow-lg hover:shadow-sunset/30 text-center"
				>
					{content.featured.cta}
				</Link>
			</article>

			{/* Related Articles */}
			<div className="space-y-8">
				<div className="flex items-center justify-between">
					<h3 className="text-3xl font-bold text-charcoal">Related guides</h3>
					<Link
						href={getCategoryUrl(content.featured.category)}
						className="text-sunset hover:text-sunset-light font-medium text-sm transition-colors"
					>
						View all
					</Link>
				</div>
				<div className="space-y-6">
					{content.articles.map((article: any, index: number) => (
						<article key={index}>
							<Link
								href={getGuideUrl(article.category, article.title)}
								className="flex gap-5 group hover:bg-cream/50 p-4 rounded-2xl transition-all"
							>
								<div className="relative w-32 h-32 flex-shrink-0 rounded-xl overflow-hidden">
									<Image
										src={article.image || '/placeholder.svg'}
										alt={article.title}
										fill
										className="object-cover group-hover:scale-110 transition-transform duration-500"
										loading="lazy"
									/>
								</div>
								<div className="flex-1 space-y-2 flex flex-col justify-center">
									<div className="flex items-center gap-3">
										<span className="inline-block text-xs font-bold text-sunset uppercase tracking-wide">
											{article.category}
										</span>
										<span className="text-xs text-slate" aria-hidden="true">
											•
										</span>
										<time className="text-xs text-slate">{article.readTime}</time>
									</div>
									<h4 className="text-lg font-bold text-charcoal group-hover:text-sunset transition-colors leading-snug">
										{article.title}
									</h4>
									{article.excerpt && (
										<p className="text-sm text-slate line-clamp-2">{article.excerpt}</p>
									)}
								</div>
							</Link>
						</article>
					))}
				</div>
			</div>
		</div>
	);

	const renderBrowseContent = () => (
		<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
			{browseAllContent.map((article: any, index: number) => (
				<article key={index}>
					{/* ===== FINAL, DEFINITIVE FIX #2: THE LOGIC ===== */}
					{/* This Link now checks for the 'href' property first. */}
					<Link
						href={
							// If the article object has a specific 'href', use it directly.
							article.href
								? article.href
								: // Otherwise, build the standard /guides/... URL.
								  getGuideUrl(article.category, article.title)
						}
						className="group space-y-4 hover:scale-[1.02] transition-transform duration-300 block"
					>
						<div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
							<Image
								src={article.image || '/placeholder.svg'}
								alt={article.title}
								fill
								className="object-cover group-hover:scale-110 transition-transform duration-500"
								loading={index < 3 ? 'eager' : 'lazy'}
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent group-hover:from-charcoal/80 transition-all duration-300" />
							<div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
								<div className="bg-white/90 backdrop-blur-sm rounded-full p-2">
									<ArrowRight className="w-5 h-5 text-charcoal" aria-hidden="true" />
								</div>
							</div>
						</div>
						<div className="space-y-3 px-2">
							<div className="flex items-center gap-3">
								<span className="inline-block text-xs font-bold text-ocean uppercase tracking-wide">
									{article.category}
								</span>
								<span className="text-xs text-slate" aria-hidden="true">
									•
								</span>
								<time className="text-xs text-slate">{article.readTime}</time>
							</div>
							<h3 className="text-xl font-bold text-charcoal group-hover:text-ocean transition-colors leading-snug text-balance">
								{article.title}
							</h3>
							{article.excerpt && (
								<p className="text-sm text-slate line-clamp-2">{article.excerpt}</p>
							)}
						</div>
					</Link>
				</article>
			))}
		</div>
	);

	const renderTabContent = () => {
		switch (activeTab) {
			case 'trending':
				return renderTrendingContent();
			case 'fixed-partner':
				return renderGuideContent(fixedPartnerContent);
			case 'run-league':
				return renderGuideContent(runLeagueContent);
			case 'scale-group':
				return renderGuideContent(scaleGroupContent);
			case 'browse':
				return renderBrowseContent();
			default:
				return renderTrendingContent();
		}
	};

	return (
		<section
			className="py-20 px-4 bg-gradient-to-b from-white to-cream/30"
			aria-labelledby="guides-heading"
		>
			<div className="max-w-7xl mx-auto">
				<h2
					id="guides-heading"
					className="text-4xl md:text-5xl font-bold text-charcoal mb-12 text-balance"
				>
					Up your game with our guides & reviews
				</h2>

				<nav className="mb-8" aria-label="Content categories">
					<div className="flex flex-wrap gap-2" role="tablist">
						{tabs.map((tab) => (
							<button
								key={tab.id}
								onClick={() => setActiveTab(tab.id)}
								type="button"
								role="tab"
								aria-selected={activeTab === tab.id}
								aria-controls={`tabpanel-${tab.id}`}
								id={`tab-${tab.id}`}
								className={`px-4 py-2 text-sm font-medium transition-all rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocean cursor-pointer ${
									activeTab === tab.id
										? 'bg-ocean text-white shadow-md'
										: 'bg-white text-slate-600 hover:bg-ocean/10 hover:text-ocean'
								}`}
							>
								{tab.label}
							</button>
						))}
					</div>
				</nav>

				<div
					className="animate-in fade-in duration-500"
					role="tabpanel"
					id={`tabpanel-${activeTab}`}
					aria-labelledby={`tab-${activeTab}`}
				>
					{renderTabContent()}
				</div>
			</div>
		</section>
	);
}
