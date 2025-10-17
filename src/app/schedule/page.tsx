// src/app/schedule/page.tsx

import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
	CalendarPlus,
	ClipboardCheck,
	Users,
	MessageSquare,
	Bell,
	ArrowRight,
	Zap,
	Clock,
	Filter,
	Globe,
	PieChart,
	BarChart2,
	RefreshCw,
	Smartphone,
	UserPlus,
	Lock,
	LucideIcon,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import FAQSection, { FAQ } from '../_components/faq/FaqSection';
import DynamicCtaSection from '../_components/cta/DynamicCtaSection';

export const metadata: Metadata = {
	title:
		'Ultimate Pickleball Scheduler | AI Automation, Waitlist, Group Chat | paddlX',
	description:
		'The most advanced pickleball scheduling app: auto-game invites, RSVP analytics, true waitlist automation, skill filtering, court conflict prevention, and reminders. Save 5–10 hours/week, reduce no-shows by 87%, grow your community.',
	keywords: [
		'best pickleball scheduler',
		'pickleball rsvp tracker',
		'ai scheduling pickleball',
		'pickleball waitlist management',
		'automatic court booking pickleball',
		'reduce pickleball no-shows',
		'group pickleball notifications',
		'pickleball event analytics',
		'pickleball club scheduling app',
		'pickleball group chat',
	],
	openGraph: {
		title: 'Free Pickleball Game Scheduler & Waitlist App | paddlX',
		description:
			'AI automates invites, real-time RSVPs, true waitlists, scheduling conflicts, and reminders. 6+ flexible formats—trusted by 50k+ organizers.',
		url: 'https://www.paddlx.com/schedule',
		type: 'website',
		images: [
			{
				url: '/og-ultimate-scheduler.jpg',
				width: 1200,
				height: 630,
				alt: 'paddlX Scheduling Dashboard for Pickleball',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title:
			'Best Pickleball Scheduler: No-Show Guard, Waitlist, AI Reminders | paddlX',
		description:
			'Automate scheduling & fill every game—reduce no-shows, run group chats, analyze trends. Save hours each week!',
		images: ['/twitter-ultimate-scheduler.jpg'],
	},
};

// JSON-LD structured data
const jsonLd = {
	'@context': 'https://schema.org',
	'@type': 'SoftwareApplication',
	'name': 'paddlX Pickleball Scheduler',
	'applicationCategory': 'SportsApplication',
	'operatingSystem': 'Web, iOS, Android',
	'offers': { '@type': 'Offer', 'price': '0', 'priceCurrency': 'USD' },
	'featureList': [
		'AI-powered game invites',
		'Real-time RSVP tracking',
		'Smart waitlist automation',
		'In-app and SMS reminders',
		'Skill/tier filters & analytics',
		'Court conflict prevention',
		'Automatic backup/alternate search',
		'Player histories & trends',
		'Automated score entry & stats',
		'Quick group chat & comms',
	],
	'description':
		'The first AI-automated pickleball scheduling platform—reducing organizer workload by 5–10 hours/week, preventing scheduling conflicts, automatically filling last-minute cancellations, and boosting community engagement with chat, analytics, and notifications.',
};

// Type definitions
interface HeroStat {
	icon: LucideIcon;
	label: string;
	sub: string;
}

interface Feature {
	icon: LucideIcon;
	name?: string;
	title?: string;
	desc: string;
}

interface HowItWorksStep {
	step: string;
	text: string;
}

interface Testimonial {
	quote: string;
	author: string;
}

export default function SchedulePage() {
	const heroStats: HeroStat[] = [
		{ icon: Clock, label: '<1 min', sub: 'game setup' },
		{ icon: PieChart, label: '87%', sub: 'no-show reduction' },
		{ icon: Users, label: '∞', sub: 'players' },
		{ icon: BarChart2, label: '10+', sub: 'formats' },
	];

	const whyChooseFeatures: Feature[] = [
		{
			icon: Zap,
			name: 'True AI Automation',
			desc:
				'Set a schedule, and AI handles invites, RSVP reminders, auto-fill waitlists, and notifications. Spend less time on admin, more time on-court.[182][227][231]',
		},
		{
			icon: Bell,
			name: 'In-App & SMS Reminders',
			desc:
				'Automatic pings to all confirmed and backup players—reducing no-shows by up to 87%.[182][235]',
		},
		{
			icon: ClipboardCheck,
			name: 'Live RSVP Dashboard',
			desc:
				"Always know exactly who's in, on waitlist, or a no-show. Export headcounts instantly.[193][229]",
		},
		{
			icon: CalendarPlus,
			name: 'Recurring Scheduling',
			desc:
				'Tired of setting up every week? Build templates—"Monday Round Robin" repeats every week.',
		},
		{
			icon: Globe,
			name: 'Backup Finder & Geo Alerts',
			desc:
				'Automated sub search and geo-push: last-minute cancellation? paddlX finds a replacement, notifies alternates and nearby group members.[227]',
		},
		{
			icon: MessageSquare,
			name: 'Game-Specific & Group Chat',
			desc:
				'Every game has its chat room, so context stays clear and spam stays out. Pin messages and polls for food, fees, or format changes.[182][181]',
		},
	];

	const detailedFeatures: Feature[] = [
		{
			icon: Filter,
			title: 'Skill Filters & Fair Play',
			desc:
				'Set DUPR, USAPL, or custom thresholds by game—preventing mismatch and boosting game quality.[131][229]',
		},
		{
			icon: RefreshCw,
			title: 'Waitlist Automation',
			desc:
				'Cancellations instantly trigger invites for the next available player—notifications are sent, and attendance is tracked.[229][182]',
		},
		{
			icon: UserPlus,
			title: 'Unlimited Guests & Group Sizes',
			desc:
				'Accommodates 4–200 player events, with guest allowances per RSVP and anti-duplicate detection.[193][181]',
		},
		{
			icon: Smartphone,
			title: 'Universal Platform',
			desc:
				"Web, iOS, Android, and SMS—paddlX works whether you're tech-savvy or run your signups by phone.[227][182]",
		},
		{
			icon: BarChart2,
			title: 'Event Analytics Dashboard',
			desc:
				'View attendance history, player reliability, average RSVPs per session, seasonal breakdowns, and customize charts.[193][228]',
		},
		{
			icon: Lock,
			title: 'Data Security & Privacy',
			desc:
				'Encrypted communications, GDPR-compliant, and privacy controls down to the RSVP link.[227][232]',
		},
	];

	const howItWorksSteps: HowItWorksStep[] = [
		{
			step: 'Pick Date & Format',
			text:
				'Choose round robin, open play, drill session, or league template. Input player cap, skill level, and optional payment.',
		},
		{
			step: 'Send Invites',
			text:
				'Let paddlX message your group or generate a public RSVP link for new recruits.',
		},
		{
			step: 'Automate, Play, Repeat',
			text:
				'Watch as RSVPs, chat, and waitlists run themselves while you focus on the court.',
		},
	];

	const testimonials: Testimonial[] = [
		{
			quote:
				'I tried texting, group chats and Google Sheets—the waitlists and reminders on paddlX let me fill every court and save 8 hours a week.',
			author: 'Marissa, Club Scheduler (Cebu City)',
		},
		{
			quote:
				"We lost thousands on unused courts until we used paddlX to automate reminders and fill cancellations. It's now a no-brainer for our leagues.",
			author: 'James, Facility Manager (Manila)',
		},
		{
			quote:
				'Running round robin, tracking skill level, and sharing stats, all in one scheduler—my coaching groups stay motivated and sessions are packed.',
			author: 'Ashley, Coach & Organizer (Makati)',
		},
	];

	const faqs: FAQ[] = [
		{
			id: 1,
			question: 'Can I run different formats (leagues, round robin, open play)?',
			answer:
				'Yes. paddlX supports 10+ configurable modes—each with automated invitations and flexible player limits.[182][231]',
			category: 'Scheduling',
		},
		{
			id: 2,
			question: 'How does the waitlist automation actually work?',
			answer:
				'When a player cancels, paddlX instantly notifies the next on the waitlist and confirms their RSVP within a set time window.[229][227]',
			category: 'Scheduling',
		},
		{
			id: 3,
			question: 'Can I restrict by skill or rating?',
			answer:
				'Absolutely—DUPR/USAPL/club ratings, or private labels, so advanced and beginner groups never mix unintentionally.[131]',
			category: 'Scheduling',
		},
		{
			id: 4,
			question: 'What notifications do players get?',
			answer:
				'Push, email, and/or SMS reminders for confirmations, cancellations, chats, and game-day details.[182][235]',
			category: 'Scheduling',
		},
		{
			id: 5,
			question: 'Do I have to download an app?',
			answer:
				'No app required for guests. Web and SMS RSVP possible, mobile-friendly app for power users.',
			category: 'Scheduling',
		},
		{
			id: 6,
			question: 'How secure is paddlX?',
			answer:
				'Industry-standard encryption and privacy; you control group visibility and access.[227][232]',
			category: 'Scheduling',
		},
	];

	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>
			<div className="bg-white text-slate-800">
				{/* Hero Section */}
				<section className="relative bg-gradient-to-br from-violet-50 to-cyan-50 py-24 text-center">
					<div className="container relative z-10 mx-auto px-6">
						<h1 className="mb-4 text-4xl font-extrabold lg:text-6xl">
							World-Class Pickleball Scheduling—Zero Headaches
						</h1>
						<p className="mx-auto mb-8 max-w-3xl text-lg text-slate-600">
							AI-powered invites, live RSVPs, instant waitlists, auto-reminders, and
							robust analytics. 50,000+ organizers save 5–10 hours/week and reduce
							no-shows by 87% with paddlX.
						</p>
						<Button
							asChild
							size="lg"
							className="rounded-full bg-violet-600 px-8 py-4 text-white shadow-lg hover:bg-violet-700"
						>
							<Link href="/join">
								Try Free Scheduler
								<ArrowRight className="ml-2" />
							</Link>
						</Button>
						<div className="mx-auto mt-10 grid max-w-2xl grid-cols-2 gap-6 md:grid-cols-4">
							{heroStats.map(({ icon: Icon, label, sub }) => (
								<div key={sub} className="rounded-xl bg-white/80 p-4 backdrop-blur">
									<Icon className="mx-auto mb-2 h-6 w-6 text-violet-600" />
									<div className="text-xl font-bold">{label}</div>
									<div className="text-xs text-slate-500">{sub}</div>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* Why Organizers Choose paddlX */}
				<section className="bg-slate-50 py-20">
					<div className="container mx-auto px-6">
						<h2 className="mb-8 text-center text-3xl font-bold">
							Why Top Organizers Rely on paddlX
						</h2>
						<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
							{whyChooseFeatures.map(({ icon: Icon, name, desc }, i) => (
								<div
									key={i}
									className="rounded-2xl bg-white p-6 shadow transition hover:shadow-xl"
								>
									<Icon className="mb-4 h-7 w-7 text-violet-600" />
									<h3 className="mb-2 text-lg font-bold">{name}</h3>
									<p className="text-sm text-slate-600">{desc}</p>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* Features Deep Dive */}
				<section className="py-20">
					<div className="container mx-auto px-6">
						<h2 className="mb-12 text-center text-3xl font-bold">
							Unmatched Scheduling Features
						</h2>
						<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
							{detailedFeatures.map(({ icon: Icon, title, desc }, i) => (
								<div
									key={i}
									className="rounded-2xl bg-slate-50 p-8 shadow transition hover:shadow-lg"
								>
									<Icon className="mb-4 h-8 w-8 text-violet-600" />
									<h3 className="mb-2 text-lg font-bold">{title}</h3>
									<p className="text-sm text-slate-600">{desc}</p>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* How It Works */}
				<section className="bg-white py-20">
					<div className="container mx-auto px-6">
						<div className="mb-12 text-center">
							<h2 className="text-3xl font-bold">Run Any Event in 3 Steps</h2>
							<p className="mx-auto max-w-xl text-slate-500">
								Whether single games, leagues or round robin, setup takes under a
								minute.
							</p>
						</div>
						<div className="grid items-center gap-12 lg:grid-cols-2">
							<ol className="space-y-8">
								{howItWorksSteps.map(({ step, text }, i) => (
									<li key={i} className="flex items-start gap-3">
										<div className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-600 text-xl font-bold text-white">
											{i + 1}
										</div>
										<div>
											<h4 className="text-lg font-bold">{step}</h4>
											<p className="text-sm text-slate-600">{text}</p>
										</div>
									</li>
								))}
							</ol>
							<div className="relative h-80 w-full lg:h-96">
								<Image
									src="/schedule-demo.jpg"
									alt="Pickleball scheduling demo"
									fill
									className="rounded-lg object-contain shadow"
								/>
							</div>
						</div>
					</div>
				</section>

				{/* Case Studies */}
				<section className="bg-violet-100 py-20">
					<div className="container mx-auto px-6">
						<h2 className="mb-8 text-center text-3xl font-bold">
							100% Organizer-Approved
						</h2>
						<div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
							{testimonials.map(({ quote, author }, i) => (
								<div
									key={i}
									className="rounded-xl bg-white p-6 shadow-lg transition hover:shadow-xl"
								>
									<p className="mb-4 italic text-slate-700">"{quote}"</p>
									<p className="font-bold text-slate-800">{author}</p>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* FAQs */}
				<FAQSection
					faqs={faqs}
					title="FAQ"
					subtitle="Find answers to common questions about scheduling"
					colorScheme="purple"
				/>

				<DynamicCtaSection
					buttonHref="/join"
					buttonText="Try Ultimate Scheduler Free"
					featureList={[
						'87% fewer no-shows',
						'Auto-payment collection',
						'Multi-admin delegation',
						'DUPR skill requirements',
						'100% private groups',
						'Free forever',
					]}
					title="	Save 5+ Hours, Fill Every Game, Grow Your Community"
					subtitle="paddlX puts your pickleball group on autopilot—start for free now."
					buttonSubtext="No credit card required • Cancel anytime"
					colorScheme="purple"
				/>
			</div>
		</>
	);
}
