// src/app/round-robin/page.tsx

// round-robin page

// src/app/round-robin/page.tsx

import { Metadata } from 'next';
import Head from 'next/head';
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
} from 'lucide-react';
import { Button } from '@/components/ui/button';

// SEO Metadata
export const metadata: Metadata = {
	title: 'Free Pickleball Round Robin Generator | Live Scoring & Standings',
	description:
		'Run a perfect pickleball round robin with our free generator. Automatically create matchups, collect scores on the court, and view live, shareable standings!',
	keywords: [
		'pickleball round robin generator',
		'free pickleball tournament software',
		'round robin scheduler',
		'pickleball league software',
		'live pickleball scoring',
		'pickleball standings',
		'tournament bracket generator',
	],
	openGraph: {
		title:
			'Free Pickleball Round Robin Generator | Live Scoring & Standings | paddlX',
		description:
			'Generate matchups, collect scores and view live standings for your pickleball event.',
		url: 'https://www.paddlx.com/round-robin',
		type: 'website',
		images: [
			{
				url: '/og-image-round-robin.jpg', // Replace with a relevant OG image URL
				width: 1200,
				height: 630,
				alt: 'Live standings from a pickleball round robin event',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Free Pickleball Round Robin Generator by paddlX',
		description:
			'The easiest way to run a pickleball round robin. Auto-generate schedules, track scores live, and more.',
		images: ['/twitter-image-round-robin.jpg'], // Replace with a relevant Twitter image URL
	},
};

// JSON-LD Structured Data for the Round Robin Tool
const jsonLd = {
	'@context': 'https://schema.org',
	'@type': 'SoftwareApplication',
	'name': 'paddlX Round Robin Generator',
	'applicationCategory': 'SportsApplication',
	'operatingSystem': 'Web',
	'description':
		'A free tool to generate schedules, track live scores, and display real-time standings for pickleball round robin events.',
	'featureList': [
		'Automatic matchup generation',
		'Live score tracking',
		'Real-time leaderboard and standings',
		'Player and group management',
		'Shareable event links',
		'Supports various formats (e.g., rotating partners)',
	],
	'offers': {
		'@type': 'Offer',
		'price': '0',
		'priceCurrency': 'USD',
	},
};

export default function RoundRobinPage() {
	return (
		<>
			<Head>
				<script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
			</Head>
			<div className="bg-white text-slate-800">
				{/* Hero Section */}
				<section className="relative bg-yellow-50 py-20 lg:py-32">
					<div className="container mx-auto px-6 text-center">
						<h1 className="text-4xl lg:text-6xl font-extrabold text-dark-slate mb-4 leading-tight">
							Run a Flawless Round Robin
						</h1>
						<p className="text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto mb-8">
							Generate matchups, collect scores, and view live standings! Our free tool
							makes running your next pickleball event a breeze.
						</p>
						<Button
							asChild
							size="lg"
							className="bg-coral hover:bg-coral-dark text-white font-bold py-4 px-8 rounded-full text-lg transition-transform hover:scale-105"
						>
							<Link href="/join">Create Your Event for Free</Link>
						</Button>
					</div>
				</section>

				{/* How It Works Section */}
				<section className="py-20">
					<div className="container mx-auto px-6">
						<div className="text-center mb-16">
							<h2 className="text-3xl lg:text-4xl font-bold text-dark-slate">
								Launch Your Event in Minutes
							</h2>
							<p className="text-slate-500 mt-4 max-w-2xl mx-auto">
								No more confusing spreadsheets or manual calculations.
							</p>
						</div>
						<div className="grid md:grid-cols-3 gap-10 text-center">
							<div className="flex flex-col items-center">
								<div className="bg-teal-100 text-teal-600 rounded-full p-5 mb-6">
									<Users size={32} />
								</div>
								<h3 className="text-xl font-bold mb-2">1. Add Your Players</h3>
								<p className="text-slate-600">
									Easily import players from your groups or add them manually to your
									event roster.
								</p>
							</div>
							<div className="flex flex-col items-center">
								<div className="bg-coral-100 text-coral-600 rounded-full p-5 mb-6">
									<ClipboardList size={32} />
								</div>
								<h3 className="text-xl font-bold mb-2">2. Generate Matchups</h3>
								<p className="text-slate-600">
									Our smart algorithm instantly creates a fair and balanced round-robin
									schedule for all courts.
								</p>
							</div>
							<div className="flex flex-col items-center">
								<div className="bg-yellow-100 text-yellow-600 rounded-full p-5 mb-6">
									<Trophy size={32} />
								</div>
								<h3 className="text-xl font-bold mb-2">3. Track Scores Live</h3>
								<p className="text-slate-600">
									Players can enter scores right from their phones. Standings update in
									real-time for everyone to see.
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
									src="/pickleball-live-standings.jpg" // Replace with a screenshot of your live standings interface
									alt="Live pickleball tournament standings on a tablet"
									layout="fill"
									objectFit="cover"
									className="rounded-lg shadow-xl"
								/>
							</div>
							<div>
								<h2 className="text-3xl lg:text-4xl font-bold text-dark-slate mb-6">
									Everything You Need to Run a Pro-Level Event
								</h2>
								<ul className="space-y-6">
									<li className="flex items-start">
										<BarChart3 className="text-yellow-500 w-8 h-8 mr-4 flex-shrink-0" />
										<div>
											<h4 className="font-bold text-lg">Live, Real-Time Standings</h4>
											<p className="text-slate-600">
												Keep players engaged with an up-to-the-minute leaderboard showing
												wins, losses, and point differentials.
											</p>
										</div>
									</li>
									<li className="flex items-start">
										<Zap className="text-yellow-500 w-8 h-8 mr-4 flex-shrink-0" />
										<div>
											<h4 className="font-bold text-lg">Automatic Schedule Generation</h4>
											<p className="text-slate-600">
												Instantly create a balanced schedule that ensures everyone plays the
												same number of games. No manual pairing required.
											</p>
										</div>
									</li>
									<li className="flex items-start">
										<Share2 className="text-yellow-500 w-8 h-8 mr-4 flex-shrink-0" />
										<div>
											<h4 className="font-bold text-lg">Shareable Public Link</h4>
											<p className="text-slate-600">
												Send a single link to all participants where they can view matchups,
												see court assignments, and track live standings.
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
								“I used to spend hours building round robin spreadsheets. The paddlX
								generator does it all in 30 seconds. The live standings were a huge hit
								with our members. It made our weekly social play feel like a real
								tournament!”
							</p>
							<p className="mt-6 font-bold text-lg">- David R., Club Manager</p>
						</div>
					</div>
				</section>

				{/* FAQ Section */}
				<section className="bg-slate-50 py-20">
					<div className="container mx-auto px-6">
						<div className="text-center mb-12">
							<h2 className="text-3xl lg:text-4xl font-bold text-dark-slate">
								Round Robin FAQs
							</h2>
						</div>
						<div className="max-w-3xl mx-auto space-y-6">
							<div>
								<h4 className="font-bold text-lg mb-2">
									Is the round robin generator really free?
								</h4>
								<p className="text-slate-600">
									Yes, 100%. Our round robin tool is completely free for any event size.
									Our mission is to make pickleball easier to organize and more fun to
									play.
								</p>
							</div>
							<div className="border-t border-slate-200 pt-6">
								<h4 className="font-bold text-lg mb-2">
									How many players can I have in an event?
								</h4>
								<p className="text-slate-600">
									Our tool is built to handle events of all sizes, from a single court of
									4 players to large club events with 100+ participants.
								</p>
							</div>
							<div className="border-t border-slate-200 pt-6">
								<h4 className="font-bold text-lg mb-2">
									Does it support different formats like rotating partners?
								</h4>
								<p className="text-slate-600">
									Yes! Our generator is flexible. You can set up events for fixed
									partners or have the system automatically rotate partners for each
									round, ensuring everyone gets to play with different people.
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* Final CTA */}
				<section className="bg-yellow-400 text-white py-20">
					<div className="container mx-auto px-6 text-center">
						<h2 className="text-3xl lg:text-4xl font-bold mb-4 text-yellow-900">
							Run Your Best Event Yet
						</h2>
						<p className="text-yellow-800 text-lg mb-8 max-w-2xl mx-auto">
							Stop the guesswork and start running professional, fun, and efficient
							pickleball round robins today.
						</p>
						<Button
							asChild
							size="lg"
							className="bg-white text-yellow-800 hover:bg-slate-100 font-bold py-4 px-8 rounded-full text-lg transition-transform hover:scale-105"
						>
							<Link href="/join">
								Launch the Generator <ArrowRight className="ml-2" />
							</Link>
						</Button>
					</div>
				</section>
			</div>
		</>
	);
}
