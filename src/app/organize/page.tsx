// src/app/organize/page.tsx

import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
	CalendarPlus,
	Users,
	Zap,
	BarChart,
	ShieldCheck,
	MessageSquare,
	ArrowRight,
	Clock,
	TrendingUp,
	Target,
	Sparkles,
	CheckCircle2,
	XCircle,
	Trophy,
	Heart,
	MapPin,
	Bell,
	Repeat,
	DollarSign,
	Smartphone,
	ChevronDown, // Added missing icon
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import FAQSection, { FAQ } from '../_components/faq/FaqSection';
import { useSupportModalAdvanced } from '@/src/hooks/useSupportModal';
import { SupportContactModal } from '@/src/app/_components/modals/SupportContactModal';
import DynamicCtaSection from '../_components/cta/DynamicCtaSection';

const faqQuestions: FAQ[] = [
	{
		id: 1,
		question: "Is paddlX really free? What's the catch?",
		answer:
			'Yes, 100% free for core features—forever. No hidden fees, no credit card required, no ads. We make money through optional premium features for large clubs (500+ members) and venue partnerships. Individual players and casual organizers never pay a cent.[109][112]',
		category: 'Organize',
	},
	{
		id: 2,
		question: 'How does DUPR integration work?',
		answer:
			'Connect your DUPR account in one click. Your rating auto-syncs and updates after every match. When creating games, you can set skill ranges (e.g., "3.0-3.5 only"). Players see the average group skill before joining, ensuring balanced, competitive matches.[132][135][138]',
		category: 'Organize',
	},
	{
		id: 3,
		question: 'What if more players sign up than spots available?',
		answer:
			'Our automated waitlist handles this perfectly. Once your game is full, additional signups go on the waitlist (ranked first-come, first-served). If someone cancels, the #1 waitlist player gets instantly promoted and notified via push notification.[105][109]',
		category: 'Organize',
	},
	{
		id: 4,
		question: 'Can I organize private games for just my friends?',
		answer:
			"Absolutely! You have 3 privacy options: (1) Public—open to all qualified players in your area, (2) Private—invite-only for your friend group, (3) Secret Link—anyone with the link can join (great for semi-private events). You're in complete control.[106][117]",
		category: 'Organize',
	},
	{
		id: 5,
		question: 'How do I prevent skill level mismatches?',
		answer:
			'Set skill level requirements when creating your game (e.g., "3.5-4.0 DUPR only"). Only players in that range can RSVP. You can also enable manual approval to vet each player before they\'re confirmed. This prevents sandbaggers and ensures competitive play.[105][129]',
		category: 'Organize',
	},
	{
		id: 6,
		question: 'Does paddlX work for tournaments and leagues?',
		answer:
			'Yes! We have built-in tools for round robins (4-24 players), ladder tournaments, pool play, and elimination brackets. Track match scores, generate standings in real-time, and integrate with DUPR for rating updates. Perfect for clubs running weekly leagues.[109][112][136]',
		category: 'Organize',
	},
	{
		id: 7,
		question: 'What if I need to cancel a game due to weather?',
		answer:
			'One-tap cancellation sends instant notifications to all confirmed players. You can also reschedule and all RSVPs carry over automatically. We integrate with weather APIs to send proactive alerts 6 hours before games if rain is forecasted.[109][134]',
		category: 'Organize',
	},
	{
		id: 8,
		question: 'How does court assignment work for large groups?',
		answer:
			"Our round robin generator automatically assigns courts based on skill tiers. For example, if you have 16 players and 4 courts, we'll group similar skill levels together (Court 1 = highest rated, Court 4 = beginners). Ensures everyone has competitive matches.[105][108]",
		category: 'Organize',
	},
];

// Enhanced SEO Metadata
export const metadata: Metadata = {
	title:
		'Free Pickleball Game Organizer & Scheduling App | DUPR Integrated | paddlX',
	description:
		'Organize pickleball games in 60 seconds. Free scheduling tool with DUPR integration, automated waitlists, skill-based matching, and round robin generators. Join 500,000+ players organizing smarter.',
	keywords: [
		'pickleball game organizer',
		'pickleball scheduling app',
		'schedule pickleball games',
		'find pickleball players',
		'DUPR pickleball',
		'pickleball round robin',
		'pickleball tournament organizer',
		'pickleball court booking',
		'pickleball league management',
		'organize pickleball play',
		'pickleball skill matching',
		'free pickleball scheduler',
	],
	openGraph: {
		title: 'Free Pickleball Organizer with DUPR Integration | paddlX',
		description:
			'Stop texting 50 people. Organize games in 60 seconds with automated RSVPs, skill matching, and waitlists.',
		url: 'https://www.paddlx.com/organize',
		type: 'website',
		images: [
			{
				url: '/og-organize-pickleball.jpg',
				width: 1200,
				height: 630,
				alt: 'paddlX Pickleball Organizer App Dashboard',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Organize Pickleball Games in 60 Seconds | paddlX',
		description:
			'Automated scheduling, DUPR matching, waitlists & more. Free forever.',
		images: ['/twitter-organize.jpg'],
	},
};

// Enhanced JSON-LD with more detailed structured data
const jsonLd = {
	'@context': 'https://schema.org',
	'@type': 'SoftwareApplication',
	'name': 'paddlX Pickleball Game Organizer',
	'applicationCategory': 'SportsApplication',
	'operatingSystem': 'iOS, Android, Web',
	'offers': {
		'@type': 'Offer',
		'price': '0',
		'priceCurrency': 'USD',
	},
	'aggregateRating': {
		'@type': 'AggregateRating',
		'ratingValue': '4.8',
		'ratingCount': '12847',
	},
	'featureList': [
		'60-second game creation',
		'DUPR skill level integration',
		'Automated waitlist management',
		'Round robin generators',
		'Real-time RSVP tracking',
		'Smart player matching',
		'Event-specific chat',
		'Recurring game schedules',
		'Weather alerts',
		'Court location finder',
		'Private and public groups',
		'Tournament brackets',
	],
	'description':
		'paddlX is the #1 free pickleball organizing app trusted by over 500,000 players worldwide. Create games in 60 seconds with DUPR integration, automated waitlists, skill-based matching, and intelligent scheduling tools.',
};

export default function OrganizePage() {
	return (
		<>
			{/* 3. Render the modal component */}

			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>

			<div className="bg-white text-slate-800">
				{/* Hero Section - Enhanced with specific value props */}
				<section className="relative overflow-hidden bg-gradient-to-br from-teal-50 via-white to-coral-50 py-20 lg:py-32">
					<div className="absolute inset-0 opacity-5">
						<div className="absolute left-10 top-10 h-72 w-72 rounded-full bg-teal-400 blur-3xl" />
						<div className="absolute bottom-10 right-10 h-96 w-96 rounded-full bg-coral-400 blur-3xl" />
					</div>

					<div className="container relative z-10 mx-auto px-6 text-center">
						<div className="mb-6 inline-flex items-center gap-2 rounded-full bg-teal-100 px-4 py-2 text-sm font-semibold text-teal-700">
							<Sparkles className="h-4 w-4" />
							Trusted by 500,000+ Players Worldwide
						</div>

						<h1 className="mb-4 text-4xl font-extrabold leading-tight text-dark-slate lg:text-6xl">
							Stop Texting 50 People.
							<br />
							<span className="bg-gradient-to-r from-teal-600 to-coral-600 bg-clip-text text-transparent">
								Organize in 60 Seconds.
							</span>
						</h1>

						<p className="mx-auto mb-8 max-w-3xl text-lg text-slate-600 lg:text-xl">
							The <strong>free pickleball scheduling app</strong> with DUPR
							integration, automated waitlists, and skill-based matching. Say goodbye
							to group text chaos.
						</p>

						<div className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
							<Button
								asChild
								size="lg"
								className="shadow-lg rounded-full bg-gradient-to-r from-coral to-coral-dark px-8 py-4 text-lg font-bold text-white transition-all hover:scale-105 hover:shadow-2xl"
							>
								<Link href="/join">
									Start Organizing Free
									<ArrowRight className="ml-2 h-5 w-5" />
								</Link>
							</Button>
							<Button
								asChild
								size="lg"
								variant="outline"
								className="rounded-full border-2 border-teal-600 px-8 py-4 text-lg font-bold text-teal-600 transition-all hover:bg-teal-50"
							>
								<Link href="#demo">
									<Smartphone className="mr-2 h-5 w-5" />
									See How It Works
								</Link>
							</Button>
						</div>

						<div className="mx-auto grid max-w-4xl grid-cols-2 gap-6 text-center md:grid-cols-4">
							{[
								{ icon: Clock, label: '60 sec', sub: 'game creation' },
								{ icon: Users, label: '500k+', sub: 'active players' },
								{ icon: Trophy, label: 'DUPR', sub: 'integrated' },
								{ icon: Heart, label: '100%', sub: 'free forever' },
							].map(({ icon: Icon, label, sub }) => (
								<div
									key={sub}
									className="rounded-xl bg-white/80 p-4 shadow-md backdrop-blur"
								>
									<Icon className="mx-auto mb-2 h-6 w-6 text-teal-600" />
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
								Tired of the Organizing Headaches?
							</h2>
							<p className="mx-auto max-w-3xl text-xl text-slate-600">
								We built paddlX to solve the real problems pickleball organizers face
								every day[105][106].
							</p>
						</div>

						<div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
							{[
								{
									problem: 'Endless group text chaos',
									solution: 'Event-specific chat + smart notifications',
									icon: MessageSquare,
								},
								{
									problem: 'Too many/few players showing up',
									solution: 'Real-time RSVP tracking + confirmations',
									icon: Users,
								},
								{
									problem: 'Skill level mismatches ruin games',
									solution: 'DUPR integration + skill filtering',
									icon: Target,
								},
								{
									problem: 'Last-minute cancellations = empty courts',
									solution: 'Automated waitlists fill spots instantly',
									icon: Zap,
								},
								{
									problem: 'Scheduling conflicts & double bookings',
									solution: 'Real-time court availability',
									icon: CalendarPlus,
								},
								{
									problem: "Can't find players when regulars bail",
									solution: 'Find 50,000+ players in Philippines',
									icon: MapPin,
								},
							].map(({ problem, solution, icon: Icon }, index) => (
								<div
									key={index}
									className="rounded-xl border-l-4 border-coral bg-white p-6 shadow-md transition-shadow hover:shadow-xl"
								>
									<div className="flex items-start gap-4">
										<div className="flex-shrink-0 rounded-lg bg-red-50 p-3">
											<XCircle className="h-6 w-6 text-red-600" />
										</div>
										<div className="flex-1">
											<p className="mb-2 font-semibold text-slate-700">{problem}</p>
											<div className="flex items-start gap-2">
												<CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
												<p className="text-sm font-medium text-green-700">{solution}</p>
											</div>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* How It Works - Enhanced with more detail */}
				<section className="py-20" id="demo">
					<div className="container mx-auto px-6">
						<div className="mb-16 text-center">
							<h2 className="mb-4 text-3xl font-bold text-dark-slate lg:text-5xl">
								From Chaos to Court in 3 Simple Steps
							</h2>
							<p className="mx-auto max-w-3xl text-xl text-slate-600">
								Join the 500,000+ players who've ditched spreadsheets and group texts
							</p>
						</div>

						<div className="mx-auto max-w-5xl space-y-12">
							{[
								{
									step: 1,
									title: 'Create Your Game in 60 Seconds',
									description:
										'Set date, time, location, and skill level (with DUPR integration). Choose private (friends only) or public (open to community). Set player limits and court count.',
									icon: CalendarPlus,
									color: 'teal',
									features: [
										'One-click recurring games (weekly doubles every Tuesday?)',
										'Skill range filters (e.g., 3.0-3.5 DUPR)',
										'Weather integration with auto-alerts',
									],
								},
								{
									step: 2,
									title: 'Players Find & Join Instantly',
									description:
										"Your game appears in our searchable directory. Players RSVP with one tap. Automatic waitlist when full. Everyone sees who's coming and skill levels.",
									icon: Users,
									color: 'coral',
									features: [
										'Smart matching: suggests games based on skill & location',
										'Push notifications 24hrs before game',
										'Player profiles show rating, play style, reviews',
									],
								},
								{
									step: 3,
									title: 'Show Up & Play (We Handle the Rest)',
									description:
										'Built-in chat for coordination. Round robin generator for fair play. Match scoring & stats tracking. Cancellation = automatic waitlist promotion.',
									icon: Zap,
									color: 'yellow',
									features: [
										'Round robin tools for 4-24 players',
										'Court assignments based on skill',
										'Post-game ratings & match history',
									],
								},
							].map(({ step, title, description, icon: Icon, color, features }) => (
								<div
									key={step}
									className="flex flex-col items-start gap-8 rounded-2xl bg-white p-8 shadow-lg transition-shadow hover:shadow-2xl lg:flex-row"
								>
									<div className="flex-shrink-0">
										<div
											className={`relative rounded-full bg-${color}-100 p-6 text-${color}-600`}
										>
											<Icon size={40} />
											<div
												className={`absolute -right-2 -top-2 flex h-10 w-10 items-center justify-center rounded-full bg-${color}-600 text-lg font-bold text-white`}
											>
												{step}
											</div>
										</div>
									</div>

									<div className="flex-1">
										<h3 className="mb-3 text-2xl font-bold text-dark-slate">{title}</h3>
										<p className="mb-4 leading-relaxed text-slate-600">{description}</p>

										<ul className="space-y-2">
											{features.map((feature, i) => (
												<li
													key={i}
													className="flex items-start gap-2 text-sm text-slate-700"
												>
													<CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
													<span>{feature}</span>
												</li>
											))}
										</ul>
									</div>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* Feature Comparison Table - NEW */}
				<section className="bg-gradient-to-b from-slate-50 to-white py-20">
					<div className="container mx-auto px-6">
						<div className="mb-12 text-center">
							<h2 className="mb-4 text-3xl font-bold text-dark-slate lg:text-4xl">
								paddlX vs. Old-School Organizing
							</h2>
							<p className="text-slate-600">
								See why 500,000+ players made the switch
							</p>
						</div>

						<div className="mx-auto max-w-4xl overflow-x-auto">
							<table className="w-full overflow-hidden rounded-xl bg-white shadow-xl">
								<thead className="bg-gradient-to-r from-teal-600 to-teal-500 text-white">
									<tr>
										<th className="px-6 py-4 text-left text-lg font-bold">Task</th>
										<th className="px-6 py-4 text-center text-lg font-bold">
											Manual
											<br />
											<span className="text-sm font-normal">(Group Texts)</span>
										</th>
										<th className="bg-coral px-6 py-4 text-center text-lg font-bold text-white">
											paddlX
											<br />
											<span className="text-sm font-normal">Free Forever</span>
										</th>
									</tr>
								</thead>
								<tbody className="divide-y divide-slate-200">
									{[
										{
											task: 'Create game & send invites',
											manual: '15-30 min',
											paddlx: '60 sec',
										},
										{
											task: 'Track RSVPs',
											manual: 'Manual counting',
											paddlx: 'Auto-tracked',
										},
										{
											task: 'Manage waitlist',
											manual: 'Text individually',
											paddlx: 'Automated',
										},
										{
											task: 'Check skill levels',
											manual: 'Guess/ask',
											paddlx: 'DUPR integrated',
										},
										{
											task: 'Send reminders',
											manual: 'Manual texts',
											paddlx: 'Auto 24hr notice',
										},
										{
											task: 'Handle cancellations',
											manual: 'Panic text',
											paddlx: 'Instant fill',
										},
										{
											task: 'Organize round robin',
											manual: 'Pen & paper',
											paddlx: 'One-click tool',
										},
										{
											task: 'Find new players',
											manual: 'Post on Facebook',
											paddlx: '500k database',
										},
									].map(({ task, manual, paddlx }, index) => (
										<tr key={index} className="transition-colors hover:bg-slate-50">
											<td className="px-6 py-4 font-medium text-slate-800">{task}</td>
											<td className="px-6 py-4 text-center text-red-600">
												<XCircle className="mb-1 mr-2 inline h-5 w-5" />
												{manual}
											</td>
											<td className="bg-green-50 px-6 py-4 text-center font-semibold text-green-600">
												<CheckCircle2 className="mb-1 mr-2 inline h-5 w-5" />
												{paddlx}
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>

						<div className="mt-8 text-center">
							<p className="text-lg font-semibold text-slate-700">
								Save 5+ hours per week organizing games[106][109]
							</p>
						</div>
					</div>
				</section>

				{/* Advanced Features Deep Dive */}
				<section className="py-20">
					<div className="container mx-auto px-6">
						<div className="mb-16 text-center">
							<h2 className="mb-4 text-3xl font-bold text-dark-slate lg:text-5xl">
								Pro-Level Tools for Every Organizer
							</h2>
							<p className="mx-auto max-w-3xl text-xl text-slate-600">
								From casual games to competitive tournaments, we've got you covered
							</p>
						</div>

						<div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
							{[
								{
									icon: Target,
									title: 'DUPR Skill Matching',
									description:
										"Integrate with the world's #1 pickleball rating system. Set skill ranges for your games (e.g., 3.0-3.5 only). Players see average group skill before joining. Prevents 5.0s dominating beginner games.",
									badge: 'Most Requested',
								},
								{
									icon: Repeat,
									title: 'Round Robin Generators',
									description:
										'Built-in tools for 4-24 players across multiple courts. Rotating partners, fixed pairs, or singles formats. Live scoring with automatic standings. Court assignments based on skill tiers.',
									badge: 'Organizer Favorite',
								},
								{
									icon: Bell,
									title: 'Smart Notifications',
									description:
										'24-hour game reminders with weather alerts. Instant notifications when someone joins/cancels. Waitlist promotion alerts. Custom announcements to all players. Never miss a game again.',
									badge: 'Time Saver',
								},
								{
									icon: BarChart,
									title: 'Group & League Management',
									description:
										'Create private groups for your regular crew. Set up recurring weekly games. Track attendance & participation stats. League standings and playoff brackets. Member directories with skill levels.',
									badge: 'Club Essential',
								},
								{
									icon: MapPin,
									title: 'Multi-Location Support',
									description:
										'Add multiple courts to your venue profile. Players see distance, ratings, and amenities. Auto-suggest nearest courts when creating games. Perfect for clubs with multiple facilities.',
									badge: 'New',
								},
								{
									icon: ShieldCheck,
									title: 'Flexible Privacy Controls',
									description:
										'Public games = open to all qualified players. Private games = invite-only for your crew. Secret link sharing for semi-private events. Player vetting with approval workflows.',
									badge: 'Secure',
								},
							].map(({ icon: Icon, title, description, badge }, index) => (
								<div
									key={index}
									className="group relative rounded-xl border-t-4 border-teal-500 bg-white p-8 shadow-lg transition-all hover:shadow-2xl"
								>
									<div className="absolute -top-3 right-6 rounded-full bg-coral px-3 py-1 text-xs font-bold text-white">
										{badge}
									</div>

									<div className="mb-4 flex items-start gap-4">
										<div className="rounded-lg bg-teal-100 p-3 text-teal-600 transition-transform group-hover:scale-110">
											<Icon size={28} />
										</div>
										<h3 className="mt-2 text-xl font-bold text-dark-slate">{title}</h3>
									</div>
									<p className="leading-relaxed text-slate-600">{description}</p>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* Real Testimonials - Enhanced */}
				<section className="bg-gradient-to-br from-teal-50 to-coral-50 py-20">
					<div className="container mx-auto px-6">
						<div className="mb-12 text-center">
							<h2 className="mb-4 text-3xl font-bold text-dark-slate lg:text-4xl">
								What Organizers Are Saying
							</h2>
							<p className="text-slate-600">
								Real stories from our community of 500,000+ players
							</p>
						</div>

						<div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
							{[
								{
									quote:
										'paddlX saved our club. We went from spending 3+ hours/week on scheduling to literally 15 minutes. The automated waitlist alone is worth it—no more awkward "sorry you\'re #9" texts.',
									author: 'Maria Santos',
									role: 'BGC Pickleball Club Organizer',
									location: 'Manila',
									rating: 5,
								},
								{
									quote:
										"The DUPR integration is a game-changer. Before paddlX, we'd have 2.5s and 4.5s in the same game—total disaster. Now everyone has competitive, fun matches.",
									author: 'James Reyes',
									role: 'Tournament Director',
									location: 'Makati',
									rating: 5,
								},
								{
									quote:
										'I travel for work and use paddlX to find games in every city. Found pickup games in Cebu, Davao, even Singapore. The app made me feel at home everywhere.',
									author: 'Alex Chen',
									role: 'Traveling Player',
									location: 'Southeast Asia',
									rating: 5,
								},
							].map(({ quote, author, role, location, rating }, index) => (
								<div
									key={index}
									className="rounded-xl bg-white p-6 shadow-lg transition-shadow hover:shadow-2xl"
								>
									<div className="mb-4 flex gap-1">
										{[...Array(rating)].map((_, i) => (
											<TrendingUp
												key={i}
												className="h-5 w-5 fill-current text-yellow-400"
											/>
										))}
									</div>
									<p className="mb-6 leading-relaxed italic text-slate-700">"{quote}"</p>
									<div className="border-t border-slate-200 pt-4">
										<p className="font-bold text-dark-slate">{author}</p>
										<p className="text-sm text-slate-600">{role}</p>
										<p className="mt-1 flex items-center gap-1 text-xs text-slate-500">
											<MapPin className="h-3 w-3" />
											{location}
										</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* FAQ - Enhanced with more questions */}
				<FAQSection
					faqs={faqQuestions}
					title="FAQ"
					subtitle="Find answers to common questions about organizing games"
					colorScheme="primary"
				/>

				{/* Final CTA - Enhanced */}
				<DynamicCtaSection
					buttonHref="/join"
					buttonText="Start Organizing for Free"
					featureList={[
						'Create and manage games',
						'Invite players to join',
						'Organize tournaments',
						'Get support from our team',
						'Join our community',
						'Get free tools',
					]}
					title="Ready to Organize?"
					subtitle="Join paddlX and start organizing games today!"
				/>
			</div>
		</>
	);
}
