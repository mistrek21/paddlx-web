// src/app/guides/fixed-partner/page.tsx

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
	title: 'How to Run a Fixed-Partner Pickleball League | A Step-by-Step Guide',
	description:
		'Learn how to easily run a fixed-partner pickleball league using paddlX. Our guide covers automated scheduling, score tracking, and live standings to save you hours of work.',
	keywords: [
		'run fixed-partner pickleball league',
		'pickleball league software',
		'pickleball league format',
		'pickleball league schedule generator',
		'manage pickleball league',
		'pickleball league guide',
	],
	openGraph: {
		title: 'A Guide to Running a Fixed-Partner Pickleball League on paddlX',
		description:
			'The ultimate guide to automating your fixed-partner league with scheduling, scoring, and live standings.',
		url: 'https://www.paddlx.com/guides/fixed-partner',
		type: 'article',
		images: [
			{
				url: '/og-image-guide-fixed-partner.jpg', // Replace with a relevant image
				width: 1200,
				height: 630,
				alt: 'A pickleball league standings chart on a tablet.',
			},
		],
	},
};

// JSON-LD Structured Data
const jsonLd = {
	'@context': 'https://schema.org',
	'@type': 'HowTo',
	'name': 'How to Run a Fixed-Partner Pickleball League on paddlX',
	'description':
		'A step-by-step guide for organizers on setting up and managing a fixed-partner pickleball league using automated software.',
	'totalTime': 'PT15M', // Estimated time to set up: 15 minutes
	'tool': [
		{
			'@type': 'HowToTool',
			'name': 'A free paddlX account',
		},
	],
	'step': [
		{
			'@type': 'HowToStep',
			'name': 'Step 1: Create Your Group',
			'text':
				'Set up a dedicated group for your league members. This will be the central hub for communication and event invitations.',
			'url': 'https://www.paddlx.com/guides/fixed-partner#step1',
		},
		{
			'@type': 'HowToStep',
			'name': 'Step 2: Set Up the League Event',
			'text':
				'Create a new event, give it a name, set the start and end dates, and select "Fixed-Partner League" from the format options.',
			'url': 'https://www.paddlx.com/guides/fixed-partner#step2',
		},
		{
			'@type': 'HowToStep',
			'name': 'Step 3: Register Your Teams',
			'text':
				'Invite players to the event where they will register as a team with their chosen partner.',
			'url': 'https://www.paddlx.com/guides/fixed-partner#step3',
		},
		{
			'@type': 'HowToStep',
			'name': 'Step 4: Generate the Schedule',
			'text':
				'Once registration is closed, click the "Generate Schedule" button. The software automatically creates a balanced round-robin schedule for the entire season.',
			'url': 'https://www.paddlx.com/guides/fixed-partner#step4',
		},
		{
			'@type': 'HowToStep',
			'name': 'Step 5: Run the League',
			'text':
				'Each week, teams view their matchups, play their games, and the winning team reports the score. Standings update automatically.',
			'url': 'https://www.paddlx.com/guides/fixed-partner#step5',
		},
	],
};

export default function FixedPartnerGuidePage() {
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
							How to Run a Fixed-Partner League on paddlX
						</h1>
						<p className="text-lg text-slate-600 max-w-3xl mx-auto">
							Fixed-partner leagues are a fantastic way to foster competitive play, but
							they can be a headache to manage. This guide will walk you through how to
							automate the entire process.
						</p>
					</div>
				</section>

				{/* Main Article Content */}
				<div className="container mx-auto px-6 py-16 max-w-4xl">
					<article className="prose lg:prose-xl max-w-none">
						<p>
							Fixed-partner leagues are incredibly popular because they allow players
							to build chemistry and strategy with a consistent partner over a season.
							However, for the organizer, they often mean wrestling with spreadsheets
							for scheduling, manually tracking scores, and constantly updating
							standings.
						</p>
						<p>
							The paddlX league management tool eliminates all of that manual work.
							Here’s a step-by-step look at how to set up and run your fixed-partner
							league in minutes.
						</p>

						<h2 id="step-by-step">A Step-by-Step Guide</h2>

						{/* Step 1 */}
						<div id="step1" className="flex items-start my-8">
							<div className="bg-teal-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl mr-6 flex-shrink-0">
								1
							</div>
							<div>
								<h3 className="text-2xl font-bold mt-0">Create Your Group</h3>
								<p>
									Every league on paddlX lives inside a group. This group acts as your
									league's central hub. It's where you'll manage your roster and
									communicate with all your players. If you already have a group for your
									players, you can skip this step.
								</p>
								<p>
									<strong>Action:</strong> Go to the "Groups" tab and click "Create a
									Group." Give it a name (e.g., "North Park Evening League") and invite
									your members.
								</p>
							</div>
						</div>

						{/* Step 2 */}
						<div id="step2" className="flex items-start my-8">
							<div className="bg-teal-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl mr-6 flex-shrink-0">
								2
							</div>
							<div>
								<h3 className="text-2xl font-bold mt-0">Set Up the League Event</h3>
								<p>
									Now, you'll create the league itself. This is a special type of event
									that spans multiple weeks.
								</p>
								<p>
									<strong>Action:</strong> From your group page, click "Create Event."
									Fill in the details:
								</p>
								<ul className="list-disc list-inside">
									<li>
										<strong>Title:</strong> e.g., "Summer 2025 Fixed-Partner League"
									</li>
									<li>
										<strong>Dates:</strong> Set the start and end date for the entire
										season.
									</li>
									<li>
										<strong>Format:</strong> This is the most important step! Select{' '}
										<strong>"League"</strong> and then choose the{' '}
										<strong>"Fixed-Partner"</strong> option.
									</li>
									<li>
										<strong>Registration Deadline:</strong> Set a date when you want
										sign-ups to close.
									</li>
								</ul>
							</div>
						</div>

						{/* Step 3 */}
						<div id="step3" className="flex items-start my-8">
							<div className="bg-teal-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl mr-6 flex-shrink-0">
								3
							</div>
							<div>
								<h3 className="text-2xl font-bold mt-0">Register Your Teams</h3>
								<p>
									Once the event is created, it's time to get your teams signed up.
									Players will register together as a pair.
								</p>
								<p>
									<strong>Action:</strong> Announce the league to your group. Players
									will go to the event page and see a "Register" button. One player from
									the team will register and invite their partner to confirm their spot
									on the team. You can monitor all registered teams from your event
									dashboard.
								</p>
							</div>
						</div>

						{/* Step 4 */}
						<div id="step4" className="flex items-start my-8">
							<div className="bg-teal-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl mr-6 flex-shrink-0">
								4
							</div>
							<div>
								<h3 className="text-2xl font-bold mt-0">Generate the Schedule</h3>
								<p>
									This is where the magic happens. After your registration deadline
									passes and all your teams are confirmed, you can create the entire
									season's schedule with a single click.
								</p>
								<p>
									<strong>Action:</strong> On your league dashboard, you'll see a big
									button that says <strong>"Generate Schedule."</strong> Click it, and
									our algorithm will instantly create a balanced, round-robin schedule
									where every team plays each other.
								</p>
							</div>
						</div>

						{/* Step 5 */}
						<div id="step5" className="flex items-start my-8">
							<div className="bg-teal-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl mr-6 flex-shrink-0">
								5
							</div>
							<div>
								<h3 className="text-2xl font-bold mt-0">
									Run the League & Track Scores
								</h3>
								<p>
									With the schedule set, your work is mostly done! Each week, players can
									check the app to see who they play.
								</p>
								<p>
									<strong>Action:</strong> After a match is completed, the winning team
									reports the score directly in the app. The moment they do, the league
									standings—including wins, losses, and point differential—update in
									real-time for everyone to see.
								</p>
							</div>
						</div>

						<h2 id="best-practices">Best Practices for a Successful League</h2>
						<ul className="list-none space-y-4">
							<li className="flex items-start">
								<CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
								<div>
									<strong>Set Clear Rules Upfront:</strong> Before the league starts,
									communicate your rules on substitutions, forfeits, and rainouts in the
									event description.
								</div>
							</li>
							<li className="flex items-start">
								<CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
								<div>
									<strong>Designate a Sub List:</strong> Create a list of approved
									substitutes in your group chat so teams can easily find a replacement
									if their partner is unavailable.
								</div>
							</li>
							<li className="flex items-start">
								<CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
								<div>
									<strong>Plan for Playoffs:</strong> Use the regular season standings to
									seed a single-elimination playoff bracket for the final week. This adds
									an exciting conclusion to the season!
								</div>
							</li>
						</ul>
					</article>
				</div>

				{/* Final CTA */}
				<section className="bg-teal-600 text-white py-20">
					<div className="container mx-auto px-6 text-center">
						<h2 className="text-3xl lg:text-4xl font-bold mb-4">
							Ready to Ditch the Spreadsheets?
						</h2>
						<p className="text-teal-100 text-lg mb-8 max-w-2xl mx-auto">
							Save hours of administrative work and give your players a professional
							league experience. Create your free account and set up your first league
							today.
						</p>
						<Button
							asChild
							size="lg"
							className="bg-white text-teal-600 hover:bg-slate-100 font-bold py-4 px-8 rounded-full text-lg shadow-2xl transition-transform hover:scale-105"
						>
							<Link href="/join">
								Start Your League Now <ArrowRight className="ml-2" />
							</Link>
						</Button>
					</div>
				</section>
			</div>
		</>
	);
}
