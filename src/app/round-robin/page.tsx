// src/app/round-robin/page.tsx

import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
	Trophy,
	Users,
	ClipboardList,
	BarChart3,
	Zap,
	Share2,
	ArrowRight,
	Calculator,
	Clock,
	Target,
	Shuffle,
	CheckCircle2,
	XCircle,
	Sparkles,
	Award,
	Play,
	TrendingUp,
	Settings,
	Smartphone,
	Download,
	Bell,
	ListChecks,
	ChevronDown,
	Star,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import FAQSection, { FAQ } from '../_components/faq/FaqSection';
import DynamicCtaSection from '../_components/cta/DynamicCtaSection';

const faqQuestions: FAQ[] = [
	{
		id: 1,
		question: 'Is paddlX really free for unlimited players?',
		answer:
			'Yes, 100% free forever. No hidden fees, no "free up to 10 players then pay" gimmicks. Run tournaments with 4, 40, or 400 players—zero cost. We monetize through optional premium features for large clubs (500+ members), but the core round robin generator is always free[170][172].',
		category: 'Round Robin',
	},
	{
		id: 2,
		question: 'How does the automatic tiebreaker calculation work?',
		answer:
			'We follow official USA Pickleball rules exactly[98]: 1st tiebreaker = head-to-head matches won among tied teams. 2nd = point differential of all games played. 3rd = head-to-head point differential. 4th = differential vs next-highest team. The system applies these automatically when teams are tied—no manual calculation needed.',
		category: 'Round Robin',
	},
	{
		id: 3,
		question:
			'Can I do rotating partners where everyone plays with different people?',
		answer:
			'Yes! Choose "Rotating Partners" format. Select random rotation (pure luck), skill-seeded rotation (balanced pairings), or manual assignments. Our algorithm ensures maximum variety—everyone plays with different partners each round. Perfect for social events and skill mixing[93][169].',
		category: 'Round Robin',
	},
	{
		id: 4,
		question: 'What if I have an odd number of players?',
		answer:
			'paddlX handles this automatically. The circle method algorithm assigns one player a "bye" each round, rotating fairly so everyone gets equal rest. Byes are clearly marked on the schedule so no confusion. Works for 5, 7, 9, 11+ players seamlessly[83].',
		category: 'Round Robin',
	},
	{
		id: 5,
		question: 'Does it support rally scoring or just traditional?',
		answer:
			'Both! Choose traditional scoring (11 points, serve to score) or rally scoring (15/21 points, every rally scores). Rally scoring is perfect for tournaments with tight schedules—games finish faster and more predictably[90][171][175]. We also support timed games (20pts or 15min hard stop).',
		category: 'Round Robin',
	},
	{
		id: 6,
		question: 'How does live scoring work without downloading an app?',
		answer:
			"It's web-based. Share the tournament link with players. They tap it on their phones, enter scores after each match. Standings update instantly for everyone viewing. Works on iOS, Android, desktop—no app download required. Even works offline (syncs when reconnected)[174].",
		category: 'Round Robin',
	},
	{
		id: 7,
		question: 'Can I balance pools by DUPR skill level?',
		answer:
			'Yes! Import DUPR ratings or enter them manually. paddlX auto-divides players into skill-balanced pods (e.g., Pod A = 4.0-4.5, Pod B = 3.0-3.5). Prevents blowouts and ensures competitive matches across all levels. You can also manually adjust if needed[93].',
		category: 'Round Robin',
	},
	{
		id: 8,
		question: 'What formats does paddlX support?',
		answer:
			"All major formats[93][169]: Standard round robin (everyone plays once), Double round robin (everyone plays twice), Rotating partners (partners change each round), Pool play with playoffs (pools then elimination bracket), Singles/doubles/mixed doubles. Tell us your player count and we'll suggest the best format.",
		category: 'Round Robin',
	},
];

// Enhanced SEO Metadata
export const metadata: Metadata = {
	title:
		'Free Pickleball Round Robin Generator | Live Scoring, Auto Brackets & DUPR | paddlX',
	description:
		'Create perfect pickleball round robins in 30 seconds. Auto-generate brackets for 4-100 players, live mobile scoring, official USA Pickleball tiebreakers, rotating partners, pool play. Free unlimited use. No Excel needed.',
	keywords: [
		'pickleball round robin generator',
		'free pickleball tournament software',
		'round robin scheduler',
		'pickleball bracket generator',
		'live pickleball scoring app',
		'rotating partners pickleball',
		'pickleball league software',
		'tournament bracket maker',
		'DUPR tournament software',
		'USA Pickleball tiebreakers',
		'rally scoring pickleball',
		'pool play generator',
	],
	openGraph: {
		title: 'Free Pickleball Round Robin Generator with Live Scoring | paddlX',
		description:
			'Generate brackets in 30 seconds. 4-100 players. Live scoring. Auto tiebreakers. Rotating partners. 100% free.',
		url: 'https://www.paddlx.com/round-robin',
		type: 'website',
		images: [
			{
				url: '/og-round-robin-live.jpg',
				width: 1200,
				height: 630,
				alt: 'paddlX Round Robin Live Standings Dashboard',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Free Pickleball Round Robin Generator | paddlX',
		description:
			'Excel? Nah. Generate perfect brackets in 30 seconds. Live scoring. Auto-everything.',
		images: ['/twitter-round-robin.jpg'],
	},
};

// Enhanced JSON-LD
const jsonLd = {
	'@context': 'https://schema.org',
	'@type': 'SoftwareApplication',
	'name': 'paddlX Round Robin Generator',
	'applicationCategory': 'SportsApplication',
	'operatingSystem': 'iOS, Android, Web',
	'offers': {
		'@type': 'Offer',
		'price': '0',
		'priceCurrency': 'USD',
	},
	'aggregateRating': {
		'@type': 'AggregateRating',
		'ratingValue': '4.9',
		'ratingCount': '3421',
	},
	'featureList': [
		'Automatic bracket generation for 4-100 players',
		'Live mobile scoring with real-time updates',
		'Official USA Pickleball tiebreakers',
		'Rotating partners algorithm',
		'Pool play with playoff brackets',
		'DUPR skill-balanced pods',
		'Rally scoring and traditional scoring',
		'Multi-court scheduling',
		'PDF/CSV export',
		'Shareable public links',
		'Push notifications',
		'Bye round management',
	],
	'description':
		'Professional pickleball round robin generator trusted by 10,000+ tournament directors. Create balanced brackets in 30 seconds, track scores live on mobile, calculate official USA Pickleball tiebreakers automatically. Supports 4-100 players, rotating partners, pool play, and DUPR integration. 100% free forever.',
};

export default function RoundRobinPage() {
	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>

			<div className="bg-white text-slate-800">
				{/* Hero Section - Enhanced */}
				<section className="relative bg-gradient-to-br from-yellow-50 via-white to-orange-50 py-20 lg:py-32 overflow-hidden">
					<div className="absolute inset-0 opacity-5">
						<div className="absolute top-10 left-10 w-72 h-72 bg-yellow-400 rounded-full blur-3xl animate-pulse" />
						<div
							className="absolute bottom-10 right-10 w-96 h-96 bg-orange-400 rounded-full blur-3xl animate-pulse"
							style={{ animationDelay: '1s' }}
						/>
					</div>

					<div className="container mx-auto px-6 text-center relative z-10">
						<div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
							<Trophy className="w-4 h-4" />
							10,000+ Tournaments Run on paddlX
						</div>

						<h1 className="text-4xl lg:text-6xl font-extrabold text-dark-slate mb-4 leading-tight">
							Ditch the Excel Spreadsheet.
							<br />
							<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-dark">
								Run Flawless Round Robins in 30 Seconds.
							</span>
						</h1>

						<p className="text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto mb-8">
							<strong>Free pickleball round robin generator</strong> with auto-brackets
							(4-100 players), live mobile scoring, USA Pickleball tiebreakers,
							rotating partners, and DUPR skill balancing. Say goodbye to manual
							calculations forever.
						</p>

						<div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
							<Button
								asChild
								size="lg"
								className="bg-gradient-to-r from-coral to-orange-600 hover:shadow-2xl text-white font-bold py-4 px-8 rounded-full text-lg transition-all hover:scale-105 shadow-lg"
							>
								<Link href="/join">
									<Play className="w-5 h-5 mr-2" />
									Create Tournament Free
								</Link>
							</Button>
							<Button
								asChild
								size="lg"
								variant="outline"
								className="border-2 border-yellow-600 text-yellow-600 hover:bg-yellow-50 font-bold py-4 px-8 rounded-full text-lg transition-all"
							>
								<Link href="#demo">
									<Smartphone className="w-5 h-5 mr-2" />
									See Live Demo
								</Link>
							</Button>
						</div>

						{/* Quick Stats */}
						<div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
							{[
								{ icon: Clock, label: '30 sec', sub: 'bracket creation' },
								{ icon: Users, label: '4-100', sub: 'players supported' },
								{ icon: Smartphone, label: 'Live', sub: 'mobile scoring' },
								{ icon: Trophy, label: '100%', sub: 'free forever' },
							].map(({ icon: Icon, label, sub }) => (
								<div
									key={sub}
									className="bg-white/80 backdrop-blur rounded-xl p-4 shadow-md"
								>
									<Icon className="w-6 h-6 mx-auto mb-2 text-yellow-600" />
									<div className="text-2xl font-bold text-dark-slate">{label}</div>
									<div className="text-xs text-slate-500">{sub}</div>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* Pain Points Section - NEW */}
				<section className="py-20 bg-slate-50">
					<div className="container mx-auto px-6">
						<div className="text-center mb-16">
							<h2 className="text-3xl lg:text-5xl font-bold text-dark-slate mb-4">
								Stop the Tournament Organizing Chaos
							</h2>
							<p className="text-xl text-slate-600 max-w-3xl mx-auto">
								We built paddlX to eliminate the headaches tournament directors face
								every week[83][93][169].
							</p>
						</div>

						<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
							{[
								{
									problem: 'Spending 30-60 min creating brackets in Excel',
									solution: 'Auto-generate perfect brackets in 30 seconds',
								},
								{
									problem: 'Players constantly asking "Who am I playing next?"',
									solution: "Shareable link shows everyone's schedule live",
								},
								{
									problem: 'Manual tiebreaker calculations cause disputes',
									solution: 'Official USA Pickleball tiebreakers auto-calculated[98]',
								},
								{
									problem: "Can't update scores real-time - need to recalculate",
									solution: 'Mobile scoring updates standings instantly',
								},
								{
									problem: 'Odd number of players = messy bye management',
									solution: 'Circle method algorithm handles byes automatically',
								},
								{
									problem: 'Partner rotation logistics are a nightmare',
									solution: 'Built-in rotating partners with fairness algorithm',
								},
							].map(({ problem, solution }, index) => (
								<div
									key={index}
									className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all border-l-4 border-yellow-500 group"
								>
									<div className="flex items-start gap-3 mb-4">
										<XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
										<p className="text-sm text-slate-700 font-medium italic">
											"{problem}"
										</p>
									</div>
									<div className="flex items-start gap-3 pl-8">
										<CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
										<p className="text-sm text-green-700 font-semibold">{solution}</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* How It Works - Enhanced with detail */}
				<section className="py-20" id="demo">
					<div className="container mx-auto px-6">
						<div className="text-center mb-16">
							<h2 className="text-3xl lg:text-5xl font-bold text-dark-slate mb-4">
								From Player List to Live Standings in 3 Clicks
							</h2>
							<p className="text-xl text-slate-600 max-w-3xl mx-auto">
								No more confusing spreadsheets. No manual calculations. Just perfect
								tournaments.
							</p>
						</div>

						<div className="max-w-6xl mx-auto space-y-16">
							{[
								{
									step: 1,
									title: 'Add Players & Choose Format',
									description:
										'Import from your paddlX groups, enter manually, or upload CSV. Choose your format: standard round robin, double round robin, rotating partners, or pool play into playoffs. Set courts available and scoring type (traditional or rally scoring).',
									icon: Users,
									color: 'yellow',
									features: [
										'Handles 4-100 players (unlimited free)[170][172]',
										'DUPR integration for skill-balanced pods[93]',
										'Rotating partners: random, seeded by skill, or manual pairings',
										'Pool play: auto-divide into balanced pools',
										'Singles, doubles, or mixed doubles support',
										'Odd numbers? Automatic bye management',
									],
									image: '/round-robin-player-setup.jpg',
								},
								{
									step: 2,
									title: 'Auto-Generate Perfect Brackets',
									description:
										'Our circle method algorithm instantly creates fair matchups ensuring everyone plays the same number of games. Assigns courts optimally based on your availability. Handles partner rotations to maximize variety. Takes 30 seconds, not 30 minutes.',
									icon: ClipboardList,
									color: 'coral',
									features: [
										'Circle method ensures mathematical fairness[83][93]',
										'Multi-court scheduling across 1-16 courts',
										'Time slot generation (e.g., 10am, 10:30am, 11am)',
										'Skill-tiered courts (best players on Court 1)',
										'Export to PDF/CSV for printing[174]',
										'Share public link for players to view schedule',
									],
									image: '/round-robin-bracket-generation.jpg',
								},
								{
									step: 3,
									title: 'Track Scores Live & Declare Winners',
									description:
										'Players enter scores from their phones. Standings update in real-time for everyone to see. System automatically calculates tiebreakers using official USA Pickleball rules: head-to-head, point differential, and more. No disputes, no manual math.',
									icon: Trophy,
									color: 'orange',
									features: [
										'Mobile-optimized score entry (no app download)',
										'Live leaderboard with point differentials',
										'Official USA Pickleball tiebreakers auto-applied[98]',
										'Push notifications when next match starts',
										'Match history tracking for DUPR submission',
										'Final results export & email to participants',
									],
									image: '/round-robin-live-scoring.jpg',
								},
							].map(
								({ step, title, description, icon: Icon, color, features, image }) => (
									<div
										key={step}
										className={`flex flex-col ${
											step % 2 === 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'
										} gap-12 items-center`}
									>
										<div className="flex-1 w-full">
											<div className="relative w-full h-80 lg:h-96 bg-slate-100 rounded-2xl shadow-2xl overflow-hidden">
												<Image
													src={image}
													alt={title}
													layout="fill"
													objectFit="cover"
													className="rounded-2xl"
												/>
												<div
													className={`absolute top-4 left-4 bg-${color}-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl shadow-lg`}
												>
													{step}
												</div>
											</div>
										</div>

										<div className="flex-1">
											<div
												className={`inline-flex items-center gap-3 bg-${color}-100 text-${color}-600 px-4 py-2 rounded-full mb-4`}
											>
												<Icon size={24} />
												<span className="font-semibold">Step {step}</span>
											</div>

											<h3 className="text-3xl font-bold text-dark-slate mb-4">{title}</h3>
											<p className="text-lg text-slate-600 mb-6 leading-relaxed">
												{description}
											</p>

											<ul className="space-y-3">
												{features.map((feature, i) => (
													<li key={i} className="flex items-start gap-3 text-slate-700">
														<CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
														<span className="leading-relaxed">{feature}</span>
													</li>
												))}
											</ul>
										</div>
									</div>
								)
							)}
						</div>
					</div>
				</section>

				{/* Tournament Formats Explainer - NEW */}
				<section className="py-20 bg-gradient-to-b from-slate-50 to-white">
					<div className="container mx-auto px-6">
						<div className="text-center mb-12">
							<h2 className="text-3xl lg:text-4xl font-bold text-dark-slate mb-4">
								Choose Your Tournament Format
							</h2>
							<p className="text-slate-600">
								paddlX supports every popular pickleball format[93][169]
							</p>
						</div>

						<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
							{[
								{
									format: 'Standard Round Robin',
									description: 'Everyone plays everyone once',
									bestFor: '4-16 players, 1-4 courts',
									time: '2-4 hours',
									icon: Users,
								},
								{
									format: 'Double Round Robin',
									description: 'Everyone plays everyone twice',
									bestFor: '3-8 players with time',
									time: '3-6 hours',
									icon: Shuffle,
								},
								{
									format: 'Rotating Partners',
									description: 'Partners change each round',
									bestFor: 'Social play, skill mixing',
									time: 'Flexible',
									icon: Target,
								},
								{
									format: 'Pool Play + Playoffs',
									description: 'Pools then elimination bracket',
									bestFor: '16+ players, 4+ courts',
									time: '4-8 hours',
									icon: Trophy,
								},
							].map(({ format, description, bestFor, time, icon: Icon }, index) => (
								<div
									key={index}
									className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all border-t-4 border-yellow-500"
								>
									<div className="bg-yellow-100 text-yellow-600 rounded-lg p-3 inline-block mb-4">
										<Icon size={28} />
									</div>

									<h3 className="text-lg font-bold text-dark-slate mb-2">{format}</h3>
									<p className="text-sm text-slate-600 mb-4">{description}</p>

									<div className="space-y-2 text-xs">
										<div className="flex items-center gap-2">
											<Target className="w-4 h-4 text-slate-400" />
											<span className="text-slate-700">{bestFor}</span>
										</div>
										<div className="flex items-center gap-2">
											<Clock className="w-4 h-4 text-slate-400" />
											<span className="text-slate-700">{time}</span>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* Scoring Systems Explainer - NEW */}
				<section className="py-20 bg-yellow-50">
					<div className="container mx-auto px-6">
						<div className="text-center mb-12">
							<h2 className="text-3xl lg:text-4xl font-bold text-dark-slate mb-4">
								Traditional or Rally Scoring? We Support Both.
							</h2>
							<p className="text-slate-600 max-w-3xl mx-auto">
								paddlX is the only round robin generator that supports both scoring
								systems[90][171][175]
							</p>
						</div>

						<div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
							<div className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-teal-500">
								<div className="flex items-center gap-3 mb-4">
									<div className="bg-teal-100 text-teal-600 rounded-lg p-3">
										<ListChecks size={28} />
									</div>
									<h3 className="text-2xl font-bold text-dark-slate">
										Traditional Scoring
									</h3>
								</div>

								<p className="text-slate-600 mb-4">
									Official USA Pickleball rules. Only serving team scores. Games to 11,
									win by 2.
								</p>

								<div className="space-y-3 text-sm">
									<div className="flex items-start gap-2">
										<CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
										<span>Standard for 90% of tournaments[171]</span>
									</div>
									<div className="flex items-start gap-2">
										<CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
										<span>Familiar to all players</span>
									</div>
									<div className="flex items-start gap-2">
										<CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
										<span>Strategic serve rotation</span>
									</div>
									<div className="flex items-start gap-2 text-red-600">
										<XCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
										<span>Games can run long (unpredictable)</span>
									</div>
								</div>
							</div>

							<div className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-orange-500">
								<div className="flex items-center gap-3 mb-4">
									<div className="bg-orange-100 text-orange-600 rounded-lg p-3">
										<Zap size={28} />
									</div>
									<h3 className="text-2xl font-bold text-dark-slate">Rally Scoring</h3>
								</div>

								<p className="text-slate-600 mb-4">
									Every rally scores a point (MLP style). Games to 15 or 21. Faster,
									predictable timing.
								</p>

								<div className="space-y-3 text-sm">
									<div className="flex items-start gap-2">
										<CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
										<span>Perfect for tight schedules[90][171]</span>
									</div>
									<div className="flex items-start gap-2">
										<CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
										<span>No "side out" delays</span>
									</div>
									<div className="flex items-start gap-2">
										<CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
										<span>Growing adoption (10% → 25%)[175]</span>
									</div>
									<div className="flex items-start gap-2 text-amber-600">
										<Award className="w-4 h-4 mt-0.5 flex-shrink-0" />
										<span>Provisional 2025 USA Pickleball status</span>
									</div>
								</div>
							</div>
						</div>

						<div className="mt-8 text-center">
							<p className="text-lg font-semibold text-slate-700">
								paddlX lets you choose per tournament. Best of both worlds.
							</p>
						</div>
					</div>
				</section>

				{/* Advanced Features Grid */}
				<section className="py-20">
					<div className="container mx-auto px-6">
						<div className="text-center mb-16">
							<h2 className="text-3xl lg:text-4xl font-bold text-dark-slate mb-4">
								Pro-Level Features That Set Us Apart
							</h2>
							<p className="text-slate-600 max-w-2xl mx-auto">
								Tournament directors love these features. Competitors charge
								$9-49/month. We're free forever.
							</p>
						</div>

						<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
							{[
								{
									icon: Calculator,
									title: 'Auto USA Pickleball Tiebreakers',
									description:
										'Automatic calculation of official tiebreakers: head-to-head wins, point differential, head-to-head differential, and cascade rules[98]. No disputes, no manual math.',
									badge: 'Official Rules',
								},
								{
									icon: Smartphone,
									title: 'Mobile-First Live Scoring',
									description:
										'Players enter scores from phones with no app download. Real-time leaderboard updates for all spectators. Works perfectly on 5" screens or 50" displays[174].',
									badge: 'Real-Time',
								},
								{
									icon: Shuffle,
									title: 'Intelligent Partner Rotation',
									description:
										'Random, skill-seeded, or manual pairings. Algorithm ensures max variety (everyone plays with different partners). Tracks chemistry for league play.',
									badge: 'Social Favorite',
								},
								{
									icon: Target,
									title: 'DUPR Skill-Balanced Pods',
									description:
										'Import DUPR ratings, auto-divide into balanced groups. Prevents 5.0s dominating 3.0 pods. Optimal competitiveness across all skill levels[93].',
									badge: 'Competitive',
								},
								{
									icon: Bell,
									title: 'Smart Notifications',
									description:
										'Push alerts 10min before your match. Court assignment changes? Instant notify. Rain delay? One-tap announcement to all players.',
									badge: 'Logistics',
								},
								{
									icon: Download,
									title: 'Export Everything',
									description:
										'PDF brackets for printing, CSV results for records, email final standings to all participants. Integrates with DUPR for match submission[174].',
									badge: 'Pro Tools',
								},
							].map(({ icon: Icon, title, description, badge }, index) => (
								<div
									key={index}
									className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all border-t-4 border-coral relative group"
								>
									<div className="absolute -top-3 right-6 bg-yellow-500 text-white text-xs font-bold px-3 py-1 rounded-full">
										{badge}
									</div>

									<div className="bg-coral-100 text-coral-600 rounded-lg p-3 inline-block mb-4 group-hover:scale-110 transition-transform">
										<Icon size={28} />
									</div>

									<h3 className="text-lg font-bold text-dark-slate mb-3">{title}</h3>
									<p className="text-slate-600 leading-relaxed">{description}</p>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* Success Stories */}
				<section className="py-20 bg-gradient-to-br from-yellow-50 to-orange-50">
					<div className="container mx-auto px-6">
						<div className="text-center mb-12">
							<h2 className="text-3xl lg:text-4xl font-bold text-dark-slate mb-4">
								Tournament Directors Love paddlX
							</h2>
							<p className="text-slate-600">Real feedback from 10,000+ events</p>
						</div>

						<div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
							{[
								{
									quote:
										'I used to spend 45 minutes in Excel creating our weekly round robin for 12 players. Now it takes 30 seconds in paddlX. The live scoring is a game-changer—players love seeing standings update in real-time.',
									author: 'David Rodriguez',
									role: 'Club Manager, Manila Pickleball',
									event: 'Weekly 12-player social',
								},
								{
									quote:
										'Ran a 48-player tournament with pool play into elimination. paddlX handled the complex tiebreakers flawlessly—3 teams tied, it auto-calculated head-to-head differential per USA Pickleball rules. Saved me hours.',
									author: 'Sarah Lim',
									role: 'Tournament Director',
									event: '48-player competitive',
								},
								{
									quote:
										'The rotating partners feature is brilliant. Set it to "skill-seeded" and everyone got competitive matches with different people each round. No complaints, all smiles. Best social event we\'ve run.',
									author: 'Miguel Santos',
									role: 'League Organizer, BGC',
									event: '16-player rotating doubles',
								},
							].map(({ quote, author, role, event }, index) => (
								<div
									key={index}
									className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all"
								>
									<div className="flex gap-1 mb-4">
										{[...Array(5)].map((_, i) => (
											<Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
										))}
									</div>
									<p className="text-slate-700 italic mb-6 leading-relaxed">"{quote}"</p>
									<div className="border-t border-slate-200 pt-4">
										<p className="font-bold text-dark-slate">{author}</p>
										<p className="text-sm text-slate-600">{role}</p>
										<p className="text-xs text-orange-600 font-semibold mt-1">{event}</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* FAQ - Comprehensive */}
				<FAQSection
					faqs={faqQuestions}
					title="FAQ"
					subtitle="Find answers to common questions about round robin games"
					colorScheme="yellow"
				/>

				{/* Final CTA - Enhanced */}

				<DynamicCtaSection
					buttonHref="/join"
					buttonText="Create Tournament Free"
					featureList={[
						'Unlimited players',
						'Live scoring',
						'Auto tiebreakers',
						'Rally scoring support',
						'DUPR integration',
						'No credit card',
					]}
					title="Ready to Run Your Best Tournament?"
					subtitle="Join 10,000+ tournament directors who stopped using Excel and started using paddlX. Free forever. Zero learning curve."
					colorScheme="yellow"
				/>
			</div>
		</>
	);
}
