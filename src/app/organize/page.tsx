// src/app/organize/page.tsx

// organize page

// src/app/organize/page.tsx

import { Metadata } from 'next';
import Head from 'next/head';
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
} from 'lucide-react';
import { Button } from '@/components/ui/button';

// SEO Metadata
export const metadata: Metadata = {
	title: 'Free Pickleball Game Organizer & Scheduling Tool | paddlX',
	description:
		'Effortlessly organize pickleball games in minutes. Our free scheduling tool makes it easy to find players, manage RSVPs, create groups, and schedule your next match. Join for free!',
	keywords: [
		'pickleball game organizer',
		'pickleball scheduling tool',
		'schedule pickleball games',
		'pickleball scheduler',
		'find pickleball players',
		'pickleball group organizer',
		'free pickleball scheduler',
	],
	openGraph: {
		title: 'Free Pickleball Game Organizer & Scheduling Tool | paddlX',
		description: 'Pull together a game in minutes with our free scheduling tool.',
		url: 'https://www.paddlx.com/organize',
		type: 'website',
		images: [
			{
				url: '/og-image-organize.jpg', // Replace with a relevant OG image URL
				width: 1200,
				height: 630,
				alt: 'Organize Pickleball Games Easily',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Free Pickleball Game Organizer & Scheduling Tool | paddlX',
		description:
			'The easiest way to schedule pickleball games and find players near you.',
		images: ['/twitter-image-organize.jpg'], // Replace with a relevant Twitter image URL
	},
};

// JSON-LD Structured Data
const jsonLd = {
	'@context': 'https://schema.org',
	'@type': 'SoftwareApplication',
	'name': 'paddlX Pickleball Game Organizer',
	'applicationCategory': 'SportsApplication',
	'operatingSystem': 'Web',
	'description':
		'A free scheduling tool to organize pickleball games, find players, and manage groups.',
	'featureList': [
		'Create game events in seconds',
		'Invite players & track RSVPs',
		'Automated waitlists',
		'Private & public groups',
		'Player search & discovery',
		'Direct messaging & group chat',
	],
	'offers': {
		'@type': 'Offer',
		'price': '0',
		'priceCurrency': 'USD',
	},
};

export default function OrganizePage() {
	return (
		<>
			<Head>
				<script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
			</Head>
			<div className="bg-white text-slate-800">
				{/* Hero Section */}
				<section className="relative bg-teal-50 py-20 lg:py-32">
					<div className="container mx-auto px-6 text-center">
						<h1 className="text-4xl lg:text-6xl font-extrabold text-dark-slate mb-4 leading-tight">
							Organize Pickleball Games in Minutes
						</h1>
						<p className="text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto mb-8">
							Pull together a game in minutes with our free scheduling tool. Spend less
							time coordinating and more time on the court.
						</p>
						<Button
							asChild
							size="lg"
							className="bg-coral hover:bg-coral-dark text-white font-bold py-4 px-8 rounded-full text-lg transition-transform hover:scale-105"
						>
							<Link href="/join">Get Started for Free</Link>
						</Button>
					</div>
				</section>

				{/* How It Works Section */}
				<section className="py-20">
					<div className="container mx-auto px-6">
						<div className="text-center mb-16">
							<h2 className="text-3xl lg:text-4xl font-bold text-dark-slate">
								Scheduling a Game is as Easy as 1-2-3
							</h2>
							<p className="text-slate-500 mt-4 max-w-2xl mx-auto">
								Our intuitive platform removes the hassle of organizing pickleball play.
							</p>
						</div>
						<div className="grid md:grid-cols-3 gap-10 text-center">
							<div className="flex flex-col items-center">
								<div className="bg-teal-100 text-teal-600 rounded-full p-5 mb-6">
									<CalendarPlus size={32} />
								</div>
								<h3 className="text-xl font-bold mb-2">Create an Event</h3>
								<p className="text-slate-600">
									Set the date, time, location, and skill level for your game in under a
									minute.
								</p>
							</div>
							<div className="flex flex-col items-center">
								<div className="bg-coral-100 text-coral-600 rounded-full p-5 mb-6">
									<Users size={32} />
								</div>
								<h3 className="text-xl font-bold mb-2">Invite Players</h3>
								<p className="text-slate-600">
									Invite your friends, a private group, or open it up to the local paddlX
									community.
								</p>
							</div>
							<div className="flex flex-col items-center">
								<div className="bg-yellow-100 text-yellow-600 rounded-full p-5 mb-6">
									<Zap size={32} />
								</div>
								<h3 className="text-xl font-bold mb-2">Play More Pickleball</h3>
								<p className="text-slate-600">
									We handle the RSVPs, reminders, and waitlists. You just show up and
									play!
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* Features Section */}
				<section className="bg-slate-50 py-20">
					<div className="container mx-auto px-6">
						<div className="grid lg:grid-cols-2 gap-16 items-center">
							<div className="relative w-full h-80 lg:h-96">
								<Image
									src="/pickleball-scheduling-app.jpg" // Replace with a high-quality image of your app
									alt="Pickleball scheduling tool on a smartphone"
									layout="fill"
									objectFit="cover"
									className="rounded-lg shadow-xl"
								/>
							</div>
							<div>
								<h2 className="text-3xl lg:text-4xl font-bold text-dark-slate mb-6">
									All The Tools You Need to Organize
								</h2>
								<ul className="space-y-6">
									<li className="flex items-start">
										<ShieldCheck className="text-teal-500 w-8 h-8 mr-4 flex-shrink-0" />
										<div>
											<h4 className="font-bold text-lg">Flexible Game Privacy</h4>
											<p className="text-slate-600">
												Create public games to find new players or private events for your
												regular group.
											</p>
										</div>
									</li>
									<li className="flex items-start">
										<BarChart className="text-teal-500 w-8 h-8 mr-4 flex-shrink-0" />
										<div>
											<h4 className="font-bold text-lg">Set Skill Levels</h4>
											<p className="text-slate-600">
												Ensure competitive and fun matches by setting a DUPR or self-rated
												skill range for your games.
											</p>
										</div>
									</li>
									<li className="flex items-start">
										<MessageSquare className="text-teal-500 w-8 h-8 mr-4 flex-shrink-0" />
										<div>
											<h4 className="font-bold text-lg">Effortless Communication</h4>
											<p className="text-slate-600">
												Use the built-in game chat to communicate with confirmed players
												without endless text threads.
											</p>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</section>

				{/* Testimonial Section */}
				<section className="py-20 px-6">
					<div className="container mx-auto text-center">
						<div className="max-w-3xl mx-auto">
							<p className="text-2xl font-medium text-slate-700 italic">
								“paddlX has been a game-changer for our local club. I can schedule our
								weekly round robins in seconds, and it automatically manages the
								sign-ups. I save hours every week.”
							</p>
							<p className="mt-6 font-bold text-lg">
								- Sarah L., Pickleball Organizer
							</p>
						</div>
					</div>
				</section>

				{/* FAQ Section */}
				<section className="bg-slate-50 py-20">
					<div className="container mx-auto px-6">
						<div className="text-center mb-12">
							<h2 className="text-3xl lg:text-4xl font-bold text-dark-slate">
								Frequently Asked Questions
							</h2>
						</div>
						<div className="max-w-3xl mx-auto space-y-6">
							<div>
								<h4 className="font-bold text-lg mb-2">
									Is this scheduling tool really free?
								</h4>
								<p className="text-slate-600">
									Yes! Our core scheduling features for organizing games are completely
									free to use. We believe in growing the sport by making it easy for
									everyone to play.
								</p>
							</div>
							<div className="border-t border-slate-200 pt-6">
								<h4 className="font-bold text-lg mb-2">
									Can I organize games for a private group?
								</h4>
								<p className="text-slate-600">
									Absolutely. You can create private groups and only invite members to
									your games. The event won't be visible to the public, ensuring it's
									just for your crew.
								</p>
							</div>
							<div className="border-t border-slate-200 pt-6">
								<h4 className="font-bold text-lg mb-2">
									What happens if more players sign up than spots available?
								</h4>
								<p className="text-slate-600">
									Our system automatically creates a waitlist. If a confirmed player
									drops out, the first person on the waitlist is automatically moved up
									and notified.
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* Final CTA */}
				<section className="bg-white text-slate-800 py-20">
					<div className="container mx-auto px-6 text-center">
						<h2 className="text-3xl lg:text-4xl font-bold mb-4">
							Ready to Simplify Your Pickleball Life?
						</h2>
						<p className="text-slate-600 text-lg mb-8 max-w-2xl mx-auto">
							Join over 500,000 players and start organizing games the easy way. Create
							your free account today!
						</p>
						<Button
							asChild
							size="lg"
							className="bg-white text-teal-600 hover:bg-slate-100 font-bold py-4 px-8 rounded-full text-lg transition-transform hover:scale-105"
						>
							<Link href="/join">
								Create Your First Game <ArrowRight className="ml-2" />
							</Link>
						</Button>
					</div>
				</section>
			</div>
		</>
	);
}
