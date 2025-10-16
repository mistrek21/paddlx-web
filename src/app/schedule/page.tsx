// src/app/schedule/page.tsx

// src/app/schedule/page.tsx

import { Metadata } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import {
	CalendarPlus,
	ClipboardCheck,
	Users,
	MessageSquare,
	Bell,
	ArrowRight,
	Send,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

// SEO Metadata
export const metadata: Metadata = {
	title: 'Schedule Pickleball Games | Free Scheduler & RSVP Tracker | paddlX',
	description:
		'The easiest way to schedule pickleball games. Invite players, track sign-ups in real-time, manage automatic waitlists, and use dedicated game chats. Ditch the texts and play more!',
	keywords: [
		'schedule pickleball games',
		'pickleball scheduler',
		'pickleball scheduling app',
		'pickleball RSVP tracker',
		'pickleball sign up sheet',
		'pickleball waitlist management',
		'pickleball game invitations',
	],
	openGraph: {
		title: 'Schedule Pickleball Games Free | paddlX Game Scheduler',
		description:
			'Invite players, track sign ups, manage waitlists and create group texts.',
		url: 'https://www.paddlx.com/schedule',
		type: 'website',
		images: [
			{
				url: '/og-image-schedule-games.jpg', // Replace with a relevant OG image
				width: 1200,
				height: 630,
				alt: 'Scheduling a pickleball game on the paddlX app',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'The Effortless Way to Schedule Pickleball Games | paddlX',
		description:
			'Finally, a free tool to manage game invitations, RSVPs, and waitlists without the hassle.',
		images: ['/twitter-image-schedule-games.jpg'], // Replace with a relevant Twitter image
	},
};

// JSON-LD Structured Data
const jsonLd = {
	'@context': 'https://schema.org',
	'@type': 'SoftwareApplication',
	'name': 'paddlX Game Scheduler',
	'applicationCategory': 'SportsApplication',
	'operatingSystem': 'Web, iOS, Android',
	'description':
		'A free tool for scheduling pickleball games, inviting players, tracking RSVPs, managing waitlists, and communicating via game-specific chats.',
	'featureList': [
		'Game Creation and Scheduling',
		'Player Invitations',
		'Real-Time RSVP Tracking',
		'Automated Waitlist Management',
		'Integrated Group Chat per Game',
		'Push Notification Reminders',
	],
	'offers': {
		'@type': 'Offer',
		'price': '0',
		'priceCurrency': 'USD',
	},
};

export default function SchedulePage() {
	return (
		<>
			<Head>
				<script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
			</Head>
			<div className="bg-white text-slate-800">
				{/* Hero Section */}
				<section className="relative bg-violet-50 py-20 lg:py-32 overflow-hidden">
					<div className="container mx-auto px-6 text-center relative z-10">
						<h1 className="text-4xl lg:text-6xl font-extrabold text-dark-slate mb-4 leading-tight">
							The Effortless Way to Schedule Games
						</h1>
						<p className="text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto mb-8">
							Invite players, track sign-ups, manage waitlists, and create group
							texts—all in one place. Stop organizing, start playing.
						</p>
						<Button
							asChild
							size="lg"
							className="bg-violet-600 hover:bg-violet-700 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg shadow-violet-200 transition-transform hover:scale-105"
						>
							<Link href="/join">Schedule a Game for Free</Link>
						</Button>
					</div>
				</section>

				{/* Features Grid */}
				<section className="py-20">
					<div className="container mx-auto px-6">
						<div className="text-center mb-16">
							<h2 className="text-3xl lg:text-4xl font-bold text-dark-slate">
								Everything You Need to Get a Game Going
							</h2>
							<p className="text-slate-500 mt-4 max-w-2xl mx-auto">
								Our powerful scheduling tools handle all the tedious work for you.
							</p>
						</div>
						<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
							<div className="bg-slate-50 p-8 rounded-2xl">
								<div className="bg-violet-100 text-violet-600 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
									<ClipboardCheck size={24} />
								</div>
								<h3 className="text-xl font-bold mb-2">Real-Time RSVP Tracking</h3>
								<p className="text-slate-600">
									Instantly see who's in and who's out. No more manual headcounts or
									guessing who will show up.
								</p>
							</div>
							<div className="bg-slate-50 p-8 rounded-2xl">
								<div className="bg-violet-100 text-violet-600 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
									<Users size={24} />
								</div>
								<h3 className="text-xl font-bold mb-2">Automated Waitlists</h3>
								<p className="text-slate-600">
									Set a player limit and let our system manage the waitlist. If someone
									drops, the next person is automatically invited.
								</p>
							</div>
							<div className="bg-slate-50 p-8 rounded-2xl">
								<div className="bg-violet-100 text-violet-600 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
									<MessageSquare size={24} />
								</div>
								<h3 className="text-xl font-bold mb-2">Dedicated Game Chats</h3>
								<p className="text-slate-600">
									Every game gets its own group chat. Keep conversations organized and
									stop the endless notification spam.
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* How It Works Section */}
				<section className="bg-white py-20">
					<div className="container mx-auto px-6">
						<div className="grid lg:grid-cols-2 gap-16 items-center">
							<div className="relative w-full h-96">
								<Image
									src="/scheduling-pickleball-game-on-phone.jpg" // Replace with a high-quality image of your app
									alt="Scheduling a pickleball game on a smartphone with the paddlX app"
									layout="fill"
									objectFit="contain"
									className="rounded-lg"
								/>
							</div>
							<div>
								<span className="text-violet-600 font-bold tracking-wider uppercase text-sm mb-2 block">
									Simple & Fast
								</span>
								<h2 className="text-3xl lg:text-4xl font-bold text-dark-slate mb-6">
									Create a Game in Under 60 Seconds
								</h2>
								<ol className="space-y-6">
									<li className="flex items-start">
										<div className="bg-violet-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg mr-4 flex-shrink-0">
											1
										</div>
										<div>
											<h4 className="font-bold text-lg">Pick the Details</h4>
											<p className="text-slate-600">
												Choose the location, date, time, and number of players you need.
											</p>
										</div>
									</li>
									<li className="flex items-start">
										<div className="bg-violet-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg mr-4 flex-shrink-0">
											2
										</div>
										<div>
											<h4 className="font-bold text-lg">Invite Players</h4>
											<p className="text-slate-600">
												Notify your private group with one tap or share a public link for
												anyone to join.
											</p>
										</div>
									</li>
									<li className="flex items-start">
										<div className="bg-violet-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg mr-4 flex-shrink-0">
											3
										</div>
										<div>
											<h4 className="font-bold text-lg">You're All Set!</h4>
											<p className="text-slate-600">
												paddlX sends reminders to your players and keeps you updated on the
												headcount.
											</p>
										</div>
									</li>
								</ol>
							</div>
						</div>
					</div>
				</section>

				{/* Testimonial Section */}
				<section className="bg-slate-50 py-20 px-6">
					<div className="container mx-auto text-center">
						<div className="max-w-3xl mx-auto">
							<p className="text-2xl font-medium text-slate-700 italic">
								“I used to spend more time trying to confirm who was playing than
								actually playing pickleball. The paddlX scheduler solved that overnight.
								The waitlist feature is a lifesaver for our popular morning sessions.”
							</p>
							<p className="mt-6 font-bold text-lg">- Jennifer K., Game Organizer</p>
						</div>
					</div>
				</section>

				{/* FAQ Section */}
				<section className="py-20">
					<div className="container mx-auto px-6">
						<div className="text-center mb-12">
							<h2 className="text-3xl lg:text-4xl font-bold text-dark-slate">
								Your Scheduling Questions, Answered
							</h2>
						</div>
						<div className="max-w-3xl mx-auto space-y-4">
							<details className="p-6 border border-slate-200 rounded-lg">
								<summary className="font-bold text-lg cursor-pointer">
									Can I schedule recurring games?
								</summary>
								<p className="text-slate-600 mt-2">
									Yes! You can set up games to repeat daily, weekly, or on a custom
									schedule. Invite your players once and we'll handle the reminders for
									every session.
								</p>
							</details>
							<details className="p-6 border border-slate-200 rounded-lg">
								<summary className="font-bold text-lg cursor-pointer">
									How are players notified about a new game?
								</summary>
								<p className="text-slate-600 mt-2">
									If you invite a group, members get an instant push notification via the
									app. For public or link-based invites, players see the game as soon as
									they get the link.
								</p>
							</details>
							<details className="p-6 border border-slate-200 rounded-lg">
								<summary className="font-bold text-lg cursor-pointer">
									Can I edit a game after I've created it?
								</summary>
								<p className="text-slate-600 mt-2">
									Of course. You can change the time, location, or any other detail. All
									confirmed and waitlisted players will be automatically notified of the
									update.
								</p>
							</details>
						</div>
					</div>
				</section>

				{/* Final CTA */}
				<section className="bg-violet-600 text-white py-20">
					<div className="container mx-auto px-6 text-center">
						<h2 className="text-3xl lg:text-4xl font-bold mb-4">
							Ready to Play More and Plan Less?
						</h2>
						<p className="text-violet-100 text-lg mb-8 max-w-2xl mx-auto">
							Join hundreds of thousands of players who use paddlX to organize their
							games. It’s free and always will be.
						</p>
						<Button
							asChild
							size="lg"
							className="bg-white text-violet-600 hover:bg-slate-100 font-bold py-4 px-8 rounded-full text-lg shadow-2xl transition-transform hover:scale-105"
						>
							<Link href="/join">
								Create Your Free Account <ArrowRight className="ml-2" />
							</Link>
						</Button>
					</div>
				</section>
			</div>
		</>
	);
}
