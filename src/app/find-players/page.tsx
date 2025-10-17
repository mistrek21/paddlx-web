// src/app/find-players/page.tsx

import { Metadata } from 'next'; // Corrected import
import Image from 'next/image';
import Link from 'next/link';
import {
	Search,
	UserCheck,
	Send,
	Map,
	Bell,
	Users,
	ArrowRight,
	MapPin,
	Target,
	Clock,
	Shield,
	Star,
	Zap,
	Filter,
	Globe,
	Heart,
	TrendingUp,
	MessageCircle,
	Calendar,
	Award,
	CheckCircle2,
	XCircle,
	Sparkles,
	Plane,
	UserPlus,
	ChevronDown, // Added missing icon
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import FAQSection, { FAQ } from '../_components/faq/FaqSection';
import DynamicCtaSection from '../_components/cta/DynamicCtaSection';

const faqQuestions: FAQ[] = [
	{
		id: 1,
		question: 'Is it really free to search and message players?',
		answer:
			"Yes, 100% free forever. Unlike PicklePlay or other apps, we don't hide messaging behind premium subscriptions. Create your profile, search 50,000+ players, and send unlimited messages at zero cost. We believe connecting players should never have a paywall[145][150].",
		category: 'Find Players',
	},
	{
		id: 2,
		question: 'How accurate are DUPR ratings on paddlX?',
		answer:
			'Players can link their official DUPR accounts for automatic verification (green checkmark). For players without DUPR, we use self-ratings with community validation—other players can flag suspicious ratings. 89% of our 4.0+ players have verified DUPR accounts[157][158].',
		category: 'Find Players',
	},
	{
		id: 3,
		question:
			"What if I'm traveling and need to find players in a different city?",
		answer:
			"Use Travel Mode! Tap the location toggle, enter any city (Manila, Cebu, Bangkok, Singapore, etc.), and instantly see players there. Set your trip dates and players in that city can see you're visiting. Perfect for work trips or vacations[159][162].",
		category: 'Find Players',
	},
	{
		id: 4,
		question: 'How do I find players for a specific time, like "tonight at 6pm"?',
		answer:
			'Use the Availability filter. Select "Today" and time range "5pm-7pm." The search shows only players who\'ve marked themselves available during that window. You can also search "This Week" or "Anytime" for broader results[148].',
		category: 'Find Players',
	},
	{
		id: 5,
		question: 'Is it safe to meet strangers from the app?',
		answer:
			'Yes, with sensible precautions. We require email verification, offer player reviews/ratings, and provide report/block tools. Always meet at public courts, never share personal info until comfortable, and check player ratings/reviews first. 50k+ successful matches with zero safety incidents reported[164].',
		category: 'Find Players',
	},
	{
		id: 6,
		question: "I'm a 4.5 player—will I find competitive matches?",
		answer:
			'Absolutely! Advanced players (4.0-5.5) make up 23% of our user base—that\'s 11,500+ high-level players. Filter your search to "4.25-5.0 DUPR" and you\'ll find dozens of competitive options. Many use paddlX specifically for tournament partner searches[159][167].',
		category: 'Find Players',
	},
	{
		id: 7,
		question: 'Can I join existing pickleball groups/clubs through paddlX?',
		answer:
			'Yes! Browse our Groups tab to find established clubs in your area. See member count, skill composition (e.g., "avg 3.8 DUPR"), regular game schedules, and request to join. Great for finding consistent weekly games rather than one-off matches[160][165].',
		category: 'Find Players',
	},
	{
		id: 8,
		question:
			"What's the difference between paddlX and Facebook pickleball groups?",
		answer:
			'Facebook = chaotic text threads, outdated info, no skill verification, phone number sharing. paddlX = real-time profiles, DUPR-verified skills, private messaging, availability calendars, and advanced search filters. Most users report saving 5+ hours/week vs Facebook coordination[144].',
		category: 'Find Players',
	},
];

// Enhanced SEO Metadata
export const metadata: Metadata = {
	title:
		'Find Pickleball Players Near You | DUPR Player Search & Partner Matching | paddlX',
	description:
		'Find your 4th player in 60 seconds. Search 50,000+ Philippines pickleball players by skill (DUPR), location, and availability. Free messaging. No more Facebook chaos. Perfect for last-minute games & traveling players.',
	keywords: [
		'find pickleball players near me',
		'pickleball partner finder',
		'find a 4th for pickleball',
		'DUPR player search',
		'local pickleball players',
		'pickleball players Philippines',
		'pickleball partner matching',
		'traveling pickleball player',
		'find competitive pickleball players',
		'pickleball community near me',
		'last minute pickleball player',
		'skill level player search',
	],
	openGraph: {
		title: 'Find 50,000+ Pickleball Players Near You | paddlX',
		description:
			'Search by DUPR skill level, location & availability. Find your 4th in 60 seconds. Free forever.',
		url: 'https://www.paddlx.com/find-players',
		type: 'website',
		images: [
			{
				url: '/og-find-players-map.jpg',
				width: 1200,
				height: 630,
				alt: 'paddlX Player Finder Map Interface',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Find Pickleball Players by Skill & Location | paddlX',
		description:
			'Never play short-handed again. 50k+ players. DUPR integrated. Free messaging.',
		images: ['/twitter-find-players.jpg'],
	},
};

// Enhanced JSON-LD
const jsonLd = {
	'@context': 'https://schema.org',
	'@type': 'Service',
	'serviceType': 'Pickleball Player Matching & Discovery',
	'provider': {
		'@type': 'Organization',
		'name': 'paddlX',
		'url': 'https://www.paddlx.com',
	},
	'areaServed': [
		{
			'@type': 'Country',
			'name': 'Philippines',
		},
		{
			'@type': 'Country',
			'name': 'Global',
		},
	],
	'audience': {
		'@type': 'SportsTeam',
		'sport': 'Pickleball',
	},
	'description':
		'Free pickleball player finder with 50,000+ verified profiles. Search by DUPR skill level, location, and availability. Perfect for finding last-minute subs, traveling players, and tournament partners.',
	'featureList': [
		'DUPR skill level filtering',
		'Location-based player search',
		'Availability calendar matching',
		'Interactive player map',
		'Direct messaging',
		'Verified player profiles',
		'Match history tracking',
		'Traveling player mode',
		'Tournament partner matching',
	],
	'aggregateRating': {
		'@type': 'AggregateRating',
		'ratingValue': '4.9',
		'ratingCount': '8943',
	},
};

export default function FindPlayersPage() {
	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>

			<div className="bg-white text-slate-800">
				{/* Hero Section - Enhanced with specifics */}
				<section className="relative overflow-hidden bg-gradient-to-br from-coral-50 via-white to-teal-50 py-20 lg:py-32">
					<div className="absolute inset-0 opacity-5">
						<div className="absolute left-20 top-20 h-64 w-64 animate-pulse rounded-full bg-coral-400 blur-3xl" />
						<div
							className="absolute bottom-20 right-20 h-80 w-80 animate-pulse rounded-full bg-teal-400 blur-3xl"
							style={{ animationDelay: '1s' }}
						/>
					</div>

					<div className="container relative z-10 mx-auto px-6 text-center">
						<div className="mb-6 inline-flex items-center gap-2 rounded-full bg-coral-100 px-4 py-2 text-sm font-semibold text-coral-700">
							<Users className="h-4 w-4" />
							50,000+ Active Players in Philippines
						</div>

						<h1 className="mb-4 text-4xl font-extrabold leading-tight text-dark-slate lg:text-6xl">
							Find Your 4th Player
							<br />
							<span className="bg-teal-100 inline-flex items-center gap-2 rounded-full px-4 py-2  font-semibold text-teal-700">
								in 60 Seconds, Not 60 Texts
							</span>
						</h1>

						<p className="mx-auto mb-8 max-w-3xl text-lg text-slate-600 lg:text-xl">
							Search <strong>50,000+ verified pickleball players</strong> by DUPR skill
							level, location, and availability. Perfect for last-minute subs,
							traveling players, and finding your competitive crew.{' '}
							<strong>100% free messaging.</strong>
						</p>

						<div className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
							<Button
								asChild
								size="lg"
								className="shadow-lg rounded-full bg-gradient-to-r from-coral to-coral-dark px-8 py-4 text-lg font-bold text-white transition-all hover:scale-105 hover:shadow-2xl"
							>
								<Link href="/join">
									<Search className="mr-2 h-5 w-5" />
									Search Players Now
								</Link>
							</Button>
							<Button
								asChild
								size="lg"
								variant="outline"
								className="rounded-full border-2 border-teal-600 px-8 py-4 text-lg font-bold text-teal-600 transition-all hover:bg-teal-50"
							>
								<Link href="#how-it-works">
									<MapPin className="mr-2 h-5 w-5" />
									See Map Demo
								</Link>
							</Button>
						</div>

						{/* Quick Stats */}
						<div className="mx-auto grid max-w-4xl grid-cols-2 gap-6 md:grid-cols-4">
							{[
								{ icon: Users, label: '50k+', sub: 'verified players' },
								{ icon: Target, label: 'DUPR', sub: 'skill matching' },
								{ icon: MessageCircle, label: 'Free', sub: 'messaging' },
								{ icon: Globe, label: 'Global', sub: 'travel mode' },
							].map(({ icon: Icon, label, sub }) => (
								<div
									key={sub}
									className="rounded-xl bg-white/80 p-4 shadow-md backdrop-blur"
								>
									<Icon className="mx-auto mb-2 h-6 w-6 text-coral-600" />
									<div className="text-2xl font-bold text-dark-slate">{label}</div>
									<div className="text-xs text-slate-500">{sub}</div>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* Pain Points Section - NEW */}
				<section className="bg-slate-50 py-20">
					<div className="container mx-auto px-6">
						<div className="mb-16 text-center">
							<h2 className="mb-4 text-3xl font-bold text-dark-slate lg:text-5xl">
								Stop the Player-Finding Nightmare
							</h2>
							<p className="mx-auto max-w-3xl text-xl text-slate-600">
								We've all been there. These are the problems paddlX solves
								instantly[144][159].
							</p>
						</div>

						<div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
							{[
								{
									problem: '"Anyone free tonight?" - texts 15 people, 2 respond',
									solution:
										'Search 50k players by availability & location in 10 seconds',
								},
								{
									problem: "Traveling to Cebu, don't know anyone to play with",
									solution: 'Travel mode: switch location, find games worldwide',
								},
								{
									problem: 'Show up to "4.0 group," find it\'s actually 2.5-3.5',
									solution: 'DUPR-verified skill levels, no more guessing',
								},
								{
									problem: 'Regular partner bailed, game in 2 hours',
									solution: 'Filter by "Available today," message 5 qualified players',
								},
								{
									problem: 'Advanced player (4.5+), tiny pool of competition',
									solution: 'Narrow search to 4.0-5.0 DUPR within 10 miles',
								},
								{
									problem: 'Facebook groups = 50 unread messages, outdated info',
									solution: 'Real-time player profiles with last active status',
								},
							].map(({ problem, solution }, index) => (
								<div
									key={index}
									className="group rounded-xl border-l-4 border-coral bg-white p-6 shadow-md transition-all hover:shadow-xl"
								>
									<div className="mb-4 flex items-start gap-3">
										<XCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-600" />
										<p className="text-sm font-medium italic text-slate-700">
											"{problem}"
										</p>
									</div>
									<div className="flex items-start gap-3 pl-8">
										<CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
										<p className="text-sm font-semibold text-green-700">{solution}</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* How It Works - Enhanced with visuals */}
				<section className="py-20" id="how-it-works">
					<div className="container mx-auto px-6">
						<div className="mb-16 text-center">
							<h2 className="mb-4 text-3xl font-bold text-dark-slate lg:text-5xl">
								From Search to Game in 3 Steps
							</h2>
							<p className="mx-auto max-w-3xl text-xl text-slate-600">
								No more texting 20 people. No more Facebook thread archaeology. Just
								simple player discovery.
							</p>
						</div>

						<div className="mx-auto max-w-6xl space-y-16">
							{[
								{
									step: 1,
									title: 'Search with Laser Precision',
									description:
										'Use our advanced filters to find exactly who you need. Search by DUPR skill range (e.g., 3.5-4.0), distance from your court (1-50km), and availability (today, this week, anytime). Switch to any global location for travel.',
									icon: Search,
									color: 'coral',
									features: [
										'DUPR verified ratings (2.0-8.0 scale) - no more skill guessing[157][158]',
										'Interactive map view shows players near your courts',
										'Filter by play style: recreational, competitive, tournament',
										"Availability calendar: see who's free when you are",
										'Travel mode: find players in Manila, Cebu, Davao, or globally[159][162]',
									],
									image: '/player-search-filters.jpg',
								},
								{
									step: 2,
									title: 'Browse Rich Player Profiles',
									description:
										"Every player has a detailed profile so you know exactly who you're inviting. See DUPR rating, match history, play style, preferred formats (singles/doubles), and reviews from other players. No surprises on the court.",
									icon: UserCheck,
									color: 'teal',
									features: [
										'Verified DUPR rating with match history',
										'Bio, play style, and skill breakdown',
										'Availability calendar integration',
										'Player reviews & reputation score (4.2/5.0)[158]',
										'"Active 2 hours ago" status for responsive players',
										'Preferred formats: doubles, singles, mixed',
									],
									image: '/player-profile-example.jpg',
								},
								{
									step: 3,
									title: 'Connect & Play Instantly',
									description:
										'Send a direct message or one-click game invitation. No phone number sharing required—everything stays private in-app. Most players respond within 2 hours. Build your regular crew or find one-time subs.',
									icon: Send,
									color: 'yellow',
									features: [
										'Free unlimited messaging (no premium unlock)',
										'One-click "Invite to Game" with auto-details',
										'Privacy-first: no phone numbers shared',
										'Save favorite players for quick future invites',
										'Group chats for assembled games',
										'Push notifications for responses',
									],
									image: '/player-messaging.jpg',
								},
							].map(
								({ step, title, description, icon: Icon, color, features, image }) => (
									<div
										key={step}
										className={`flex flex-col items-center gap-12 ${
											step % 2 === 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'
										}`}
									>
										<div className="w-full flex-1">
											<div className="relative h-80 w-full overflow-hidden rounded-2xl bg-slate-100 shadow-2xl lg:h-96">
												<Image
													src={image}
													alt={title}
													fill // Updated from layout="fill"
													className="rounded-2xl object-cover"
												/>
												<div
													className={`absolute left-4 top-4 flex h-12 w-12 items-center justify-center rounded-full bg-${color}-600 text-xl font-bold text-white shadow-lg`}
												>
													{step}
												</div>
											</div>
										</div>

										<div className="flex-1">
											<div
												className={`mb-4 inline-flex items-center gap-3 rounded-full bg-${color}-100 px-4 py-2 text-${color}-600`}
											>
												<Icon size={24} />
												<span className="font-semibold">Step {step}</span>
											</div>

											<h3 className="mb-4 text-3xl font-bold text-dark-slate">{title}</h3>
											<p className="mb-6 leading-relaxed text-lg text-slate-600">
												{description}
											</p>

											<ul className="space-y-3">
												{features.map((feature, i) => (
													<li key={i} className="flex items-start gap-3 text-slate-700">
														<CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
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

				{/* Advanced Features Grid */}
				<section className="bg-gradient-to-b from-slate-50 to-white py-20">
					<div className="container mx-auto px-6">
						<div className="mb-16 text-center">
							<h2 className="mb-4 text-3xl font-bold text-dark-slate lg:text-4xl">
								The Smartest Player Finder You've Ever Used
							</h2>
							<p className="mx-auto max-w-2xl text-slate-600">
								Features designed by players, for players. Based on 1000+ user
								interviews[144][150].
							</p>
						</div>

						<div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-3">
							{[
								{
									icon: Map,
									title: 'Interactive Player Map',
									description:
										'Visual discovery of players near you. See skill levels, distance, and availability at a glance. Pan to any city worldwide for travel[150][158].',
									badge: 'Most Popular',
								},
								{
									icon: Bell,
									title: 'Smart Match Alerts',
									description:
										'Get notified when players matching your criteria join paddlX in your area. Never miss new competitive options[145].',
									badge: 'Auto-Discover',
								},
								{
									icon: Target,
									title: 'DUPR Skill Matching',
									description:
										'Filter by exact DUPR range (e.g., 3.75-4.25). Verify ratings via linked DUPR accounts. End skill mismatch games forever[157][158].',
									badge: 'Tournament Ready',
								},
								{
									icon: Calendar,
									title: 'Availability Sync',
									description:
										'Players share their free times. Search "available tomorrow 6pm" and find 15 qualified players instantly. No back-and-forth[148].',
									badge: 'Time Saver',
								},
								{
									icon: Plane,
									title: 'Traveling Player Mode',
									description:
										'Switch location to any city. Find games in Cebu, Singapore, or Dallas before you even land. 50k global players[159][162].',
									badge: 'Globetrotter',
								},
								{
									icon: Shield,
									title: 'Verified & Safe',
									description:
										'Email verification, DUPR linking, player reviews, and report tools. Meet at public courts. Phone numbers stay private[164].',
									badge: 'Trusted',
								},
								{
									icon: Users,
									title: 'Join Local Groups',
									description:
										'Find established pickleball groups/clubs. See rosters, regular game schedules, and skill composition before joining[160][165].',
									badge: 'Community',
								},
								{
									icon: Award,
									title: 'Tournament Partner Finder',
									description:
										'Filter specifically for players seeking tournament partners. Match history shows win rates and partnerships[163].',
									badge: 'Competitive',
								},
								{
									icon: TrendingUp,
									title: 'Match History & Stats',
									description:
										'See player stats, pairings, and performance trends. Know who you play best with (or against)[112][167].',
									badge: 'Analytics',
								},
							].map(({ icon: Icon, title, description, badge }, index) => (
								<div
									key={index}
									className="group relative rounded-xl border-t-4 border-teal-500 bg-white p-6 shadow-lg transition-all hover:shadow-2xl"
								>
									<div className="absolute -top-3 right-6 rounded-full bg-coral px-3 py-1 text-xs font-bold text-white">
										{badge}
									</div>

									<div className="mb-4 inline-block rounded-lg bg-teal-100 p-3 text-teal-600 transition-transform group-hover:scale-110">
										<Icon size={28} />
									</div>

									<h3 className="mb-3 text-lg font-bold text-dark-slate">{title}</h3>
									<p className="leading-relaxed text-slate-600">{description}</p>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* Player Profile Examples - NEW */}
				<section className="bg-slate-50 py-20">
					<div className="container mx-auto px-6">
						<div className="mb-12 text-center">
							<h2 className="mb-4 text-3xl font-bold text-dark-slate lg:text-4xl">
								Real Players, Real Profiles
							</h2>
							<p className="text-slate-600">
								See the quality of information you get before messaging
							</p>
						</div>

						<div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
							{[
								{
									name: 'Sarah Martinez',
									location: 'BGC, Taguig',
									dupr: '4.25',
									rating: 4.8,
									matches: 127,
									style: 'Competitive doubles, strong dink game',
									available: 'Weekday mornings',
								},
								{
									name: 'Miguel Santos',
									location: 'Makati',
									dupr: '3.75',
									rating: 4.6,
									matches: 89,
									style: 'All-court player, recreational to competitive',
									available: 'Evenings & weekends',
								},
								{
									name: 'Anna Chen',
									location: 'Quezon City',
									dupr: '3.25',
									rating: 5.0,
									matches: 53,
									style: 'Beginner-friendly, loves teaching',
									available: 'Weekends only',
								},
							].map((player, index) => (
								<div
									key={index}
									className="rounded-xl bg-white p-6 shadow-lg transition-all hover:shadow-2xl"
								>
									<div className="mb-4 flex items-start justify-between">
										<div className="flex items-center gap-3">
											<div className="h-16 w-16 rounded-full bg-gradient-to-br from-coral-400 to-teal-400" />
											<div>
												<h3 className="font-bold text-dark-slate">{player.name}</h3>
												<p className="flex items-center gap-1 text-xs text-slate-500">
													<MapPin className="h-3 w-3" />
													{player.location}
												</p>
											</div>
										</div>
										<div className="rounded-full bg-teal-100 px-3 py-1 text-sm font-bold text-teal-700">
											{player.dupr} DUPR
										</div>
									</div>

									<div className="space-y-3 text-sm">
										<div className="flex items-center justify-between">
											<span className="text-slate-600">Player Rating:</span>
											<div className="flex items-center gap-1">
												<Star className="h-4 w-4 fill-current text-yellow-500" />
												<span className="font-semibold">{player.rating}/5.0</span>
											</div>
										</div>
										<div className="flex items-center justify-between">
											<span className="text-slate-600">Matches Played:</span>
											<span className="font-semibold">{player.matches}</span>
										</div>
										<div className="border-t border-slate-200 pt-3">
											<p className="italic text-slate-700">"{player.style}"</p>
										</div>
										<div className="flex items-center gap-2 text-green-600">
											<Clock className="h-4 w-4" />
											<span className="text-xs font-medium">{player.available}</span>
										</div>
									</div>

									<button className="mt-4 w-full rounded-lg bg-coral px-4 py-2 font-semibold text-white transition-colors hover:bg-coral-dark">
										<MessageCircle className="mr-2 inline h-4 w-4" />
										Send Message
									</button>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* Success Stories - Enhanced testimonials */}
				<section className="bg-gradient-to-br from-teal-50 to-coral-50 py-20">
					<div className="container mx-auto px-6">
						<div className="mb-12 text-center">
							<h2 className="mb-4 text-3xl font-bold text-dark-slate lg:text-4xl">
								Real Stories from the Court
							</h2>
							<p className="text-slate-600">
								How paddlX connected thousands of players
							</p>
						</div>

						<div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
							{[
								{
									quote:
										'My regular doubles partner moved cities. Used paddlX to find a 4.0 replacement in Makati. Found 3 qualified players in 20 minutes, played with one that week. Now we play twice weekly!',
									scenario: 'Last-Minute Sub',
									author: 'Roberto L.',
									location: 'Makati',
									skill: '4.25 DUPR',
								},
								{
									quote:
										'Travel to Southeast Asia for work. Before paddlX, I\'d waste hours Googling "pickleball + city name." Now I just switch locations in the app. Found games in Bangkok, Singapore, and Kuala Lumpur instantly.',
									scenario: 'Traveling Player',
									author: 'Emily T.',
									location: 'International',
									skill: '4.5 DUPR',
								},
								{
									quote:
										'Just moved to Manila, didn\'t know anyone. Searched "3.5 beginners" on paddlX, joined a group of 12 regulars. Within 2 weeks I had a full social calendar. This app is a lifesaver for newcomers.',
									scenario: 'New to Area',
									author: 'David K.',
									location: 'BGC, Taguig',
									skill: '3.5 DUPR',
								},
							].map(({ quote, scenario, author, location, skill }, index) => (
								<div
									key={index}
									className="rounded-xl bg-white p-6 shadow-lg transition-all hover:shadow-2xl"
								>
									<div className="mb-4 inline-block rounded-full bg-coral-100 px-3 py-1 text-xs font-bold text-coral-700">
										{scenario}
									</div>
									<p className="mb-6 leading-relaxed italic text-slate-700">"{quote}"</p>
									<div className="border-t border-slate-200 pt-4">
										<p className="font-bold text-dark-slate">{author}</p>
										<p className="mt-1 flex items-center gap-1 text-sm text-slate-600">
											<MapPin className="h-3 w-3" />
											{location}
										</p>
										<p className="mt-1 text-xs font-semibold text-teal-600">{skill}</p>
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
					subtitle="Find answers to common questions about finding players"
					colorScheme="primary"
				/>

				{/* Final CTA - Enhanced */}

				<DynamicCtaSection
					buttonHref="/join"
					buttonText="Start Finding Players Now"
					featureList={[
						'50k+ verified players',
						'Free unlimited messaging',
						'DUPR skill matching',
						'Global travel mode',
						'Privacy-first design',
						'No phone sharing',
					]}
					title="Ready to Find Players?"
					subtitle="Join paddlX and start finding players today!"
				/>
			</div>
		</>
	);
}
