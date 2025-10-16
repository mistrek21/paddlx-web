// src/app/guides/league/page.tsx

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
} from 'lucide-react';
import { Button } from '@/components/ui/button';

// SEO Metadata
export const metadata: Metadata = {
	title: 'How to Run a Pickleball League: The Ultimate Guide | paddlX',
	description:
		'The complete guide to running a successful pickleball league. Learn about different formats and use our free software to automate scheduling, scoring, and standings.',
	keywords: [
		'how to run a pickleball league',
		'pickleball league management software',
		'pickleball league formats',
		'pickleball ladder league',
		'pickleball round robin league',
		'pickleball team league',
		'pickleball league scheduler',
	],
	openGraph: {
		title: 'The Ultimate Guide to Running a Pickleball League | paddlX',
		description:
			'From choosing a format to managing live standings, this guide covers everything you need to run a successful pickleball league.',
		url: 'https://www.paddlx.com/guides/league',
		type: 'article',
		images: [
			{
				url: '/og-image-guide-league.jpg', // Replace with a general league image
				width: 1200,
				height: 630,
				alt: 'Players competing in an organized pickleball league.',
			},
		],
	},
};

// JSON-LD Structured Data
const jsonLd = {
	'@context': 'https://schema.org',
	'@type': 'HowTo',
	'name': 'How to Run a Pickleball League on paddlX',
	'description':
		'A step-by-step guide for organizers on setting up and managing any type of pickleball league using automated software.',
	'tool': [
		{
			'@type': 'HowToTool',
			'name': 'A free paddlX account',
		},
	],
	'step': [
		{
			'@type': 'HowToStep',
			'name': 'Step 1: Choose Your League Format',
			'text':
				'Decide on the best format for your players, such as Fixed-Partner, Rotating-Partner (Round Robin), or a Ladder League.',
			'url': 'https://www.paddlx.com/guides/league#step1',
		},
		{
			'@type': 'HowToStep',
			'name': 'Step 2: Create Your Group & League Event',
			'text':
				"Set up a group to act as your league's central hub and then create the main league event, selecting your chosen format.",
			'url': 'https://www.paddlx.com/guides/league#step2',
		},
		{
			'@type': 'HowToStep',
			'name': 'Step 3: Open Registration',
			'text':
				'Invite players and have them register for the league. You can set player caps and even collect entry fees.',
			'url': 'https://www.paddlx.com/guides/league#step3',
		},
		{
			'@type': 'HowToStep',
			'name': 'Step 4: Generate the Schedule',
			'text':
				'With one click, the software automatically creates a balanced schedule based on your format and registered players.',
			'url': 'https://www.paddlx.com/guides/league#step4',
		},
		{
			'@type': 'HowToStep',
			'name': 'Step 5: Track Scores & Standings',
			'text':
				'Players report scores directly in the app, and the league standings update instantly for everyone to see.',
			'url': 'https://www.paddlx.com/guides/league#step5',
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
				{/* Article Header */}
				<section className="bg-slate-50 py-16">
					<div className="container mx-auto px-6 text-center">
						<span className="text-teal-600 font-bold tracking-wider uppercase text-sm mb-2 block">
							GUIDE
						</span>
						<h1 className="text-3xl lg:text-5xl font-extrabold text-dark-slate mb-4">
							How to Run a Pickleball League on paddlX
						</h1>
						<p className="text-lg text-slate-600 max-w-3xl mx-auto">
							Running a league is the best way to build a community, but it can be a
							lot of work. This guide covers the different league formats and how to
							manage any of them with ease using our tools.
						</p>
					</div>
				</section>

				{/* Main Article Content */}
				<div className="container mx-auto px-6 py-16 max-w-4xl">
					<article className="prose lg:prose-xl max-w-none">
						<p>
							A well-run league can be the highlight of a player's week. It provides
							consistent, competitive play and a great social outlet. But for
							organizers, it can feel like a full-time job.
						</p>
						<p>
							The good news is that software can automate 90% of the work. This guide
							will help you choose the right league format for your group and show you
							how to run it flawlessly on the paddlX platform.
						</p>

						<h2 id="step1">Step 1: Choose Your League Format</h2>
						<p>
							The first step is deciding what kind of league you want to run. Each
							format offers a different experience for your players.
						</p>

						<div className="space-y-6">
							<div className="p-6 border border-slate-200 rounded-lg">
								<h3 className="text-2xl font-bold mt-0">Fixed-Partner League</h3>
								<p>
									Players sign up as a team of two and play with that same partner for
									the entire season.
								</p>
								<p>
									<strong>Best for:</strong> Competitive play where teams want to build
									chemistry and strategy over time.
								</p>
								<Link
									href="/guides/fixed-partner"
									className="font-bold text-teal-600 hover:text-teal-700"
								>
									Read the full Fixed-Partner Guide &rarr;
								</Link>
							</div>
							<div className="p-6 border border-slate-200 rounded-lg">
								<h3 className="text-2xl font-bold mt-0">
									Rotating-Partner League (Round Robin)
								</h3>
								<p>
									Players sign up individually and are paired with different partners and
									opponents each week. Standings are tracked on an individual basis.
								</p>
								<p>
									<strong>Best for:</strong> Social leagues where the main goal is to
									have fun and play with a variety of people.
								</p>
							</div>
							<div className="p-6 border border-slate-200 rounded-lg">
								<h3 className="text-2xl font-bold mt-0">Ladder League</h3>
								<p>
									Players are ranked on a "ladder." They can challenge players above them
									to try and move up the rankings.
								</p>
								<p>
									<strong>Best for:</strong> Flexible, ongoing competition for groups
									where players have varied schedules and can't commit to a fixed weekly
									time.
								</p>
							</div>
						</div>

						<h2 id="step2">Step 2: Create Your Group & League Event</h2>
						<p>
							Once you've chosen your format, setting up the league is simple. First,
							ensure all your players are in a paddlX Group. This will be your command
							center for communication.
						</p>
						<p>
							Next, from your group page, click "Create Event." In the setup form, you
							will select "League" as the event type and then choose the specific
							format you decided on in Step 1.
						</p>

						<h2 id="step3">Step 3: Open Player Registration</h2>
						<p>
							Your event page is now a dedicated registration portal. Share the link
							with your players to sign up. From your dashboard, you can:
						</p>
						<ul className="list-disc list-inside">
							<li>Set a maximum number of players or teams.</li>
							<li>Create a waitlist that automatically fills open spots.</li>
							<li>
								(Optional) Collect league fees securely with our integrated payment
								tool.
							</li>
						</ul>

						<h2 id="step4">Step 4: Generate the Schedule</h2>
						<p>
							After registration closes, you can generate the entire season's schedule
							with one click. The software will automatically create all the weekly
							matchups based on your chosen format (e.g., a balanced round-robin for a
							fixed-partner league). No more spreadsheet headaches!
						</p>

						<h2 id="step5">Step 5: Track Scores & Live Standings</h2>
						<p>
							This is the best part. As games are played, winning players or teams can
							report the score directly in the app. The moment a score is entered, the
							official league standings are updated in real-time. Players can check the
							standings anytime to see their rank, track their performance, and see
							upcoming matches.
						</p>

						<h2 id="pro-tips">Pro Tips for League Organizers</h2>
						<ul className="list-none space-y-4">
							<li className="flex items-start">
								<CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
								<div>
									<strong>Communicate Clearly:</strong> Use the group chat to send weekly
									reminders, share standings, and build excitement.
								</div>
							</li>
							<li className="flex items-start">
								<CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
								<div>
									<strong>Establish Rules for Subs & Forfeits:</strong> Address these
									common issues before the league starts. Post the rules in your event
									description so everyone is on the same page.
								</div>
							</li>
							<li className="flex items-start">
								<CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
								<div>
									<strong>Celebrate the Winners:</strong> Plan a small party or awards
									ceremony for the final week to celebrate the champions and a successful
									season.
								</div>
							</li>
						</ul>
					</article>
				</div>

				{/* Final CTA */}
				<section className="bg-teal-600 text-white py-20">
					<div className="container mx-auto px-6 text-center">
						<h2 className="text-3xl lg:text-4xl font-bold mb-4">
							You're Ready to Be a League Commissioner
						</h2>
						<p className="text-teal-100 text-lg mb-8 max-w-2xl mx-auto">
							With the right tools, running a league is more fun than work. Provide
							your community with the competitive play they're looking for.
						</p>
						<Button
							asChild
							size="lg"
							className="bg-white text-teal-600 hover:bg-slate-100 font-bold py-4 px-8 rounded-full text-lg shadow-2xl transition-transform hover:scale-105"
						>
							<Link href="/join">
								Create Your League for Free <ArrowRight className="ml-2" />
							</Link>
						</Button>
					</div>
				</section>
			</div>
		</>
	);
}
