// src/app/guides/league/page.tsx

import { Metadata } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import {
	ClipboardList,
	Users,
	CalendarPlus,
	BarChart3,
	Trophy,
	CheckCircle,
	ArrowRight,
	ChevronDown,
	Zap,
	Globe,
	UserPlus,
	RefreshCw,
	Clock,
	ShieldCheck,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import FAQSection, { FAQ } from '../../_components/faq/FaqSection';
import DynamicCtaSection from '../../_components/cta/DynamicCtaSection';

const faqQuestions: FAQ[] = [
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

export const metadata: Metadata = {
	title:
		'How to Run a Pickleball League: Formats, Automation & Best Practices | paddlX',
	description:
		'The ultimate guide to running pickleball leagues—fixed-partner, round-robin, ladder, and more. Learn setup, registration, scheduling, scoring, playoffs, and pro tips with our free software.',
	keywords: [
		'run pickleball league',
		'pickleball league formats',
		'league management software',
		'pickleball round robin',
		'ladder pickleball league',
		'automated league scheduler',
		'pickleball playoffs',
		'league best practices',
		'pickleball standings',
	],
	openGraph: {
		title: 'Complete Pickleball League Guide | paddlX',
		description:
			'From choosing formats to live standings and playoffs, this guide shows you how to automate your league with paddlX.',
		url: 'https://www.paddlx.com/guides/league',
		type: 'article',
		images: [
			{
				url: '/og-image-guide-league.jpg',
				width: 1200,
				height: 630,
				alt: 'Organized pickleball league on paddlX',
			},
		],
	},
};

const jsonLd = {
	'@context': 'https://schema.org',
	'@type': 'HowTo',
	'name': 'How to Run a Pickleball League on paddlX',
	'description':
		'Step-by-step guide for setting up and managing any pickleball league format with automated scheduling, scoring, and standings.',
	'totalTime': 'PT30M',
	'tool': [{ '@type': 'HowToTool', 'name': 'paddlX account (free)' }],
	'step': [
		{
			'@type': 'HowToStep',
			'name': 'Choose Format',
			'text': 'Select fixed-partner, round-robin, ladder, or custom.',
			'url': '#choose-format',
		},
		{
			'@type': 'HowToStep',
			'name': 'Create Group & Event',
			'text': 'Set up your player group and league event on paddlX.',
			'url': '#create-event',
		},
		{
			'@type': 'HowToStep',
			'name': 'Open Registration',
			'text': 'Invite players, set caps, and collect fees if desired.',
			'url': '#registration',
		},
		{
			'@type': 'HowToStep',
			'name': 'Generate Schedule',
			'text': 'Click to auto-create balanced matchups.',
			'url': '#generate-schedule',
		},
		{
			'@type': 'HowToStep',
			'name': 'Report Scores',
			'text': 'Players submit scores; standings update live.',
			'url': '#report-scores',
		},
		{
			'@type': 'HowToStep',
			'name': 'Host Playoffs',
			'text': 'Seed and run playoffs with one-click bracket generation.',
			'url': '#playoffs',
		},
	],
};

export default function LeagueGuidePage() {
	return (
		<>
			<Head>
				<script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
			</Head>
			<div className="bg-white text-slate-800">
				{/* Header */}
				<section className="bg-slate-50 py-16">
					<div className="container mx-auto px-6 text-center">
						<span className="text-teal-600 uppercase font-bold text-sm mb-2 block">
							GUIDE
						</span>
						<h1 className="text-3xl lg:text-5xl font-extrabold mb-4">
							The Ultimate Guide to Running a Pickleball League
						</h1>
						<p className="text-lg text-slate-600 max-w-3xl mx-auto">
							Discover formats, automate scheduling, track scores, run playoffs, and
							engage players—all with paddlX.
						</p>
					</div>
				</section>

				{/* Introduction */}
				<section className="container mx-auto px-6 py-12 max-w-4xl">
					<p className="mb-6">
						Whether you’re organizing a casual round-robin or a competitive ladder, a
						well-structured league builds community and excitement. This guide walks
						you through proven workflows and best practices, powered by our free
						paddlX tools.
					</p>
					<p className="mb-6">
						You’ll learn how to choose the right format, set up events, handle
						registrations, generate balanced schedules, capture live standings,
						organize playoffs, and keep players engaged from start to finish.
					</p>
				</section>

				{/* Choose Format */}
				<section id="choose-format" className="py-20 bg-white">
					<div className="container mx-auto px-6 max-w-4xl">
						<h2 className="text-3xl font-bold mb-8">1. Choose Your League Format</h2>
						<div className="space-y-8">
							{[
								{
									icon: ClipboardList,
									title: 'Fixed-Partner League',
									desc:
										'Teams of two play together all season. Best for competitive consistency and teamwork.',
								},
								{
									icon: Users,
									title: 'Round-Robin / Rotating',
									desc:
										'Individuals rotate partners/opponents each round. Ideal for social play and mixing skill levels.',
								},
								{
									icon: CalendarPlus,
									title: 'Ladder / Challenge',
									desc:
										'Players challenge those above them to move up the ladder. Great for ongoing, flexible competition.',
								},
								{
									icon: Zap,
									title: 'Custom Hybrid',
									desc:
										'Combine formats—round-robin pool play into playoff bracket or fixed-partner with rotating sub weeks.',
								},
							].map((f, i) => (
								<div
									key={i}
									className="p-6 border rounded-lg bg-slate-50 flex items-start gap-4"
								>
									<f.icon className="w-8 h-8 text-teal-600 mt-1" />
									<div>
										<h3 className="font-bold text-xl mb-2">{f.title}</h3>
										<p className="text-slate-600">{f.desc}</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* Create Group & Event */}
				<section id="create-event" className="py-20 bg-slate-50">
					<div className="container mx-auto px-6 max-w-4xl">
						<h2 className="text-3xl font-bold mb-6">
							2. Create Your Group & League Event
						</h2>
						<div className="flex items-start gap-6 mb-8">
							<div className="bg-teal-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg">
								2
							</div>
							<div>
								<p className="mb-4">
									Your paddlX Group is the hub for all league communications. From there,
									click “Create Event” to configure your season.
								</p>
								<ul className="list-disc list-inside space-y-2">
									<li>Select “League” then your chosen format.</li>
									<li>Set start/end dates and registration deadline.</li>
									<li>Define match length, point caps, and tiebreakers.</li>
								</ul>
							</div>
						</div>
						<Image
							src="/league-setup-screenshot.png"
							alt="league setup form screenshot"
							width={800}
							height={450}
							className="rounded shadow mx-auto"
						/>
					</div>
				</section>

				{/* Registration */}
				<section id="registration" className="py-20 bg-white">
					<div className="container mx-auto px-6 max-w-4xl">
						<h2 className="text-3xl font-bold mb-6">3. Open Player Registration</h2>
						<p className="mb-4">
							Share your event link via email, social, or embed on your site. Players
							register individually or as teams, up to your cap.
						</p>
						<ul className="list-disc list-inside space-y-2 mb-6">
							<li>Set player/team maximums; auto-waitlist overflow.</li>
							<li>Optionally collect entry fees via paddlX Payments.</li>
							<li>Approve or decline registrations for private leagues.</li>
						</ul>
						<Image
							src="/registration-flow.png"
							alt="registration flow diagram"
							width={800}
							height={450}
							className="rounded shadow mx-auto"
						/>
					</div>
				</section>

				{/* Schedule Generation */}
				<section id="generate-schedule" className="py-20 bg-slate-50">
					<div className="container mx-auto px-6 max-w-4xl">
						<h2 className="text-3xl font-bold mb-6">
							4. Generate a Balanced Schedule
						</h2>
						<p className="mb-4">
							With registrations closed, click “Generate Schedule.” paddlX auto-creates
							matchups, handles byes, and optimizes court assignments based on
							availability.
						</p>
						<ul className="list-disc list-inside space-y-2 mb-6">
							<li>Round-robin, Swiss, ladder, or hybrid templates.</li>
							<li>Automatic court/time slot conflict detection.</li>
							<li>Skill-based seeding option for balanced competition.</li>
						</ul>
						<Image
							src="/schedule-generation.png"
							alt="schedule generation screenshot"
							width={800}
							height={450}
							className="rounded shadow mx-auto"
						/>
					</div>
				</section>

				{/* Score Reporting & Standings */}
				<section id="report-scores" className="py-20 bg-white">
					<div className="container mx-auto px-6 max-w-4xl">
						<h2 className="text-3xl font-bold mb-6">
							5. Report Scores & Live Standings
						</h2>
						<p className="mb-4">
							Players submit match results in-app. Standings update instantly, showing
							wins, losses, and point differentials.
						</p>
						<ul className="list-disc list-inside space-y-2 mb-6">
							<li>Automated tiebreaker calculations per official rules.</li>
							<li>Live standings widget for embedding or sharing.</li>
							<li>Export CSV for full season data and analytics.</li>
						</ul>
						<Image
							src="/live-standings.png"
							alt="live standings screenshot"
							width={800}
							height={450}
							className="rounded shadow mx-auto"
						/>
					</div>
				</section>

				{/* Playoffs */}
				<section id="playoffs" className="py-20 bg-slate-50">
					<div className="container mx-auto px-6 max-w-4xl">
						<h2 className="text-3xl font-bold mb-6">
							6. Host Playoffs & Award Champions
						</h2>
						<p className="mb-4">
							Seed playoffs based on standings with a single click. Generate brackets
							for semifinals, finals, and championship matches.
						</p>
						<ul className="list-disc list-inside space-y-2 mb-6">
							<li>Customize bracket size (4, 8, or 16 teams).</li>
							<li>Share playoff bracket link with participants and spectators.</li>
							<li>Issue digital trophies and highlight champions on group page.</li>
						</ul>
						<Image
							src="/playoff-bracket.png"
							alt="playoff bracket screenshot"
							width={800}
							height={450}
							className="rounded shadow mx-auto"
						/>
					</div>
				</section>

				{/* Pro Tips */}
				<section className="container mx-auto px-6 py-16 max-w-4xl">
					<h2 className="text-3xl font-bold mb-6">Pro Tips for League Success</h2>
					<ul className="list-disc pl-6 space-y-4 text-slate-700">
						<li>Publish a comprehensive rulebook in your group before sign-ups.</li>
						<li>Use polls and chat for mid-season feedback and social events.</li>
						<li>Offer mid-season socials to build community engagement.</li>
						<li>Maintain a dedicated sub list and auto-notify subs when needed.</li>
						<li>Plan for weather backups with alternate indoor or rain dates.</li>
					</ul>
				</section>

				{/* FAQ */}
				<FAQSection
					faqs={faqQuestions}
					title="FAQ"
					subtitle="Find answers to common questions about managing your league, players, and payments"
				/>

				<DynamicCtaSection
					buttonHref="/join"
					buttonText="Create League Free"
					featureList={['Simple Setup', 'Save Hours', 'Focus on Fun']}
					title="Ready to Automate Your League?"
					subtitle="Save hours of admin work, deliver a pro experience, and focus on the game. Start your league for free today."
					// buttonSubtext="Secure booking • Verified coaches • Easy cancellations"
					colorScheme="teal"
				/>
			</div>
		</>
	);
}
