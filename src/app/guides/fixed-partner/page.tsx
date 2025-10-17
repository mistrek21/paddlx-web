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
	ChevronDown,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import FAQSection, { FAQ } from '../../_components/faq/FaqSection';
import DynamicCtaSection from '../../_components/cta/DynamicCtaSection';

const faqQuestions: FAQ[] = [
	{
		id: 1,
		question: 'Can I adjust the schedule after generation?',
		answer:
			'Yes—use the “Edit Matches” feature to swap courts or times before publishing.',
		category: 'League Management',
	},
	{
		id: 2,
		question: 'How do I handle team absences?',
		answer:
			'Activate built-in substitutes or allow single-player pick-ups via the public RSVP link.',
		category: 'Players',
	},
	{
		id: 3,
		question: 'Is there a limit on teams?',
		answer: 'No—paddlX supports leagues with 4 to 64 teams seamlessly.',
		category: 'League Management',
	},
	{
		id: 4,
		question: 'Can I charge entry fees?',
		answer:
			'Yes—integrate payments via paddlX Payments to collect fees during registration.',
		category: 'Payments',
	},
	{
		id: 5,
		question: 'How do I share standings?',
		answer:
			'Copy the live standings link or embed the widget on your club website.',
		category: 'Integration',
	},
];

export const metadata: Metadata = {
	title:
		'How to Run a Fixed-Partner Pickleball League | Automated Scheduling & Live Standings | paddlX',
	description:
		'Step-by-step guide to set up a fixed-partner pickleball league: group setup, scheduling, registration, score reporting, playoffs, and best practices—automate everything with paddlX.',
	keywords: [
		'fixed-partner pickleball league',
		'pickleball league software',
		'pickleball league guide',
		'automated scheduling pickleball',
		'live pickleball standings',
		'manage pickleball league',
		'pickleball playoffs',
		'pickleball league best practices',
	],
	openGraph: {
		title: 'Fixed-Partner League Guide | paddlX',
		description:
			'Learn how to automate your fixed-partner pickleball league with scheduling, score tracking, live standings, and playoffs in minutes.',
		url: 'https://www.paddlx.com/guides/fixed-partner',
		type: 'article',
		images: [
			{
				url: '/og-image-guide-fixed-partner.jpg',
				width: 1200,
				height: 630,
				alt: 'Tablet showing pickleball league standings',
			},
		],
	},
};

const jsonLd = {
	'@context': 'https://schema.org',
	'@type': 'HowTo',
	'name': 'How to Run a Fixed-Partner Pickleball League on paddlX',
	'description':
		'Comprehensive guide for running a fixed-partner pickleball league: setup, scheduling, registration, scoring, playoffs, and best practices.',
	'totalTime': 'PT20M',
	'tool': [{ '@type': 'HowToTool', 'name': 'Free paddlX account' }],
	'step': [
		{
			'@type': 'HowToStep',
			'name': 'Create a Private Group',
			'text':
				'Set up a league group on paddlX to centralize member communication and event management.',
			'url': '#step1',
		},
		{
			'@type': 'HowToStep',
			'name': 'Configure League Event',
			'text':
				'Create an event, select Fixed-Partner League format, set season dates, registration deadline, and league rules.',
			'url': '#step2',
		},
		{
			'@type': 'HowToStep',
			'name': 'Register Teams',
			'text':
				'Invite players to register as fixed pairs. Monitor registrations and manage team rosters.',
			'url': '#step3',
		},
		{
			'@type': 'HowToStep',
			'name': 'Generate Balanced Schedule',
			'text':
				'Click “Generate Schedule” to auto-create a fair round-robin schedule, handling byes and court assignments.',
			'url': '#step4',
		},
		{
			'@type': 'HowToStep',
			'name': 'Report Scores & View Standings',
			'text':
				'Teams report weekly scores. Live standings update automatically, including wins, losses, and point differentials.',
			'url': '#step5',
		},
		{
			'@type': 'HowToStep',
			'name': 'Run Playoffs & Awards',
			'text':
				'Seed playoffs based on standings. Generate playoff bracket and host finals. Award trophies and league prizes.',
			'url': '#step6',
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
				{/* Header */}
				<section className="bg-slate-50 py-16">
					<div className="container mx-auto px-6 text-center">
						<span className="text-teal-600 uppercase font-bold tracking-wide text-sm mb-2 block">
							GUIDE
						</span>
						<h1 className="text-3xl lg:text-5xl font-extrabold mb-4">
							How to Run a Fixed-Partner Pickleball League on paddlX
						</h1>
						<p className="text-lg text-slate-600 max-w-3xl mx-auto">
							Automate every aspect of your fixed-partner league—from group creation
							and scheduling to live standings and playoffs—in under 20 minutes.
						</p>
					</div>
				</section>

				{/* Introduction */}
				<section className="container mx-auto px-6 py-12 max-w-4xl">
					<p className="mb-6">
						Fixed-partner leagues foster teamwork and competitive consistency, but
						manual scheduling and score tracking can consume hours each week. paddlX
						streamlines this process with AI-driven scheduling, real-time standings,
						and robust communication tools.
					</p>
					<p className="mb-6">
						This guide covers essential steps, advanced features, and best practices
						to ensure your league runs smoothly and your players stay engaged from
						opening serve to championship trophy.
					</p>
				</section>

				{/* Step-by-Step */}
				<div className="container mx-auto px-6 max-w-4xl space-y-12">
					{/* Step 1 */}
					<div id="step1" className="flex items-start gap-6">
						<div className="bg-teal-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg">
							1
						</div>
						<div>
							<h2 className="text-2xl font-bold">Create a Private Group</h2>
							<p className="mb-4">
								Navigate to the Groups section and click “Create Group.” Name it clearly
								(e.g., “Spring Fixed-Partner League”) and invite your members. This
								group becomes your league’s hub for announcements, scheduling, and
								communication.
							</p>
							<ul className="list-disc list-inside space-y-2">
								<li>
									Set group privacy to “Invite Only” to keep your league members secure.
								</li>
								<li>
									Add co-organizers as group admins for shared management
									responsibilities.
								</li>
								<li>
									Upload league rules and code of conduct to the group description.
								</li>
							</ul>
						</div>
					</div>

					{/* Step 2 */}
					<div id="step2" className="flex items-start gap-6">
						<div className="bg-teal-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg">
							2
						</div>
						<div>
							<h2 className="text-2xl font-bold">Configure the League Event</h2>
							<p className="mb-4">
								Within your group, click “Create Event.” Select the start and end dates
								of your season, and choose “Fixed-Partner League” from the event type
								dropdown.
							</p>
							<ul className="list-disc list-inside space-y-2">
								<li>Define registration cutoff to close sign-ups automatically.</li>
								<li>
									Customize match rules: number of games per match, point threshold, and
									tiebreaker criteria.
								</li>
								<li>Enable notifications for match reminders and score submissions.</li>
							</ul>
						</div>
					</div>

					{/* Step 3 */}
					<div id="step3" className="flex items-start gap-6">
						<div className="bg-teal-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg">
							3
						</div>
						<div>
							<h2 className="text-2xl font-bold">Register Teams</h2>
							<p className="mb-4">
								Share the event link with your members. Each team registers together—one
								member initiates registration and invites their partner to confirm.
							</p>
							<ul className="list-disc list-inside space-y-2">
								<li>Monitor team approvals in real-time on the event dashboard.</li>
								<li>Use built-in waitlist if registrations exceed your cap.</li>
								<li>Export registered teams list as CSV for offline use if needed.</li>
							</ul>
						</div>
					</div>

					{/* Step 4 */}
					<div id="step4" className="flex items-start gap-6">
						<div className="bg-teal-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg">
							4
						</div>
						<div>
							<h2 className="text-2xl font-bold">Generate Balanced Schedule</h2>
							<p className="mb-4">
								Once registration closes, click “Generate Schedule.” paddlX’s algorithm
								creates a fair round-robin schedule, handling byes and court assignments
								automatically.
							</p>
							<ul className="list-disc list-inside space-y-2">
								<li>
									Customizable court and time slot allocation to optimize venue usage.
								</li>
								<li>Skill-based seeding option ensures competitive balance.</li>
								<li>
									Review and adjust individual matchups before publishing, if desired.
								</li>
							</ul>
						</div>
					</div>

					{/* Step 5 */}
					<div id="step5" className="flex items-start gap-6">
						<div className="bg-teal-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg">
							5
						</div>
						<div>
							<h2 className="text-2xl font-bold">Report Scores & Track Standings</h2>
							<p className="mb-4">
								After each match, the winning team submits the score. Standings update
								instantly, including wins, losses, and point differential.
							</p>
							<ul className="list-disc list-inside space-y-2">
								<li>Automatic tiebreaker calculations per USA Pickleball rules.</li>
								<li>Live standings page that players can bookmark.</li>
								<li>
									Option to send weekly standings summary via email to all members.
								</li>
							</ul>
						</div>
					</div>

					{/* Step 6 */}
					<div id="step6" className="flex items-start gap-6">
						<div className="bg-teal-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg">
							6
						</div>
						<div>
							<h2 className="text-2xl font-bold">Host Playoffs & Award Trophies</h2>
							<p className="mb-4">
								Use final standings to seed single-elimination playoffs. paddlX
								generates the bracket, and you can host semifinals and finals with live
								updates.
							</p>
							<ul className="list-disc list-inside space-y-2">
								<li>Customize playoff size (top 4, 6, or 8 teams).</li>
								<li>Digital trophy badges and champion banners on group page.</li>
								<li>Post-season survey feature to gather feedback for next season.</li>
							</ul>
						</div>
					</div>
				</div>

				{/* Best Practices */}
				<section className="container mx-auto px-6 py-16 max-w-4xl">
					<h2 className="text-3xl font-bold mb-6">
						Best Practices for a Smooth League
					</h2>
					<ul className="list-disc pl-6 space-y-4 text-slate-700">
						<li>
							Publish clear rules and code of conduct before registration opens.
						</li>
						<li>
							Use group chat for mid-season polls (e.g., time changes or socials).
						</li>
						<li>Maintain a substitute list and automate sub notifications.</li>
						<li>Schedule buffers for rain delays or extended matches.</li>
						<li>Offer end-of-season awards: MVP, sportsmanship, top scorer.</li>
					</ul>
				</section>

				{/* FAQ */}
				<FAQSection
					faqs={faqQuestions}
					title="FAQ"
					subtitle="Find answers to common questions about fixed-partner"
				/>

				<DynamicCtaSection
					buttonHref="/join"
					buttonText="Create League Free"
					featureList={['Simple Setup', 'Save Hours', 'Focus on Fun']}
					title="Start Your Fixed-Partner League Today"
					subtitle="Save hours of work, deliver a pro experience, and focus on the fun. Create your free account and launch your league in minutes."
					// buttonSubtext="Secure booking • Verified coaches • Easy cancellations"
					colorScheme="teal"
				/>
			</div>
		</>
	);
}
