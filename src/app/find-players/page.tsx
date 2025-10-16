// src/app/find-players/page.tsx

// src/app/find-players/page.tsx

import { Metadata } from 'next';
import Head from 'next/head';
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
} from 'lucide-react';
import { Button } from '@/components/ui/button';

// SEO Metadata
export const metadata: Metadata = {
	title: 'Find Pickleball Players Near You | paddlX Player Finder',
	description:
		'Need a 4th for your game? Find local pickleball players by skill level and availability with our player finder tool. Stop the text threads and start playing!',
	keywords: [
		'find pickleball players',
		'pickleball partner finder',
		'find a 4th for pickleball',
		'local pickleball players',
		'pickleball players near me',
		'pickleball groups',
		'pickleball match finder',
	],
	openGraph: {
		title: 'Find Pickleball Players Near You | paddlX',
		description: 'Find a 4th for your game without the endless text threads.',
		url: 'https://www.paddlx.com/find-players',
		type: 'website',
		images: [
			{
				url: '/og-image-find-players.jpg', // Replace with a relevant OG image URL
				width: 1200,
				height: 630,
				alt: 'Find Pickleball Players on a Map',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Find Pickleball Players Near You | paddlX',
		description:
			'The easiest way to find compatible pickleball players and partners in your area.',
		images: ['/twitter-image-find-players.jpg'], // Replace with a relevant Twitter image URL
	},
};

// JSON-LD Structured Data for the Player Finding Service
const jsonLd = {
	'@context': 'https://schema.org',
	'@type': 'Service',
	'serviceType': 'Pickleball Player Matching',
	'provider': {
		'@type': 'Organization',
		'name': 'paddlX',
	},
	'areaServed': {
		'@type': 'Country',
		'name': 'USA', // Adjust as needed
	},
	'description':
		'A free service to find and connect with local pickleball players based on skill level, availability, and location.',
	'name': 'paddlX Player Finder',
};

export default function FindPlayersPage() {
	return (
		<>
			<Head>
				<script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
			</Head>
			<div className="bg-white text-slate-800">
				{/* Hero Section */}
				<section className="relative bg-coral-50 py-20 lg:py-32">
					<div className="container mx-auto px-6 text-center">
						<h1 className="text-4xl lg:text-6xl font-extrabold text-dark-slate mb-4 leading-tight">
							Find a 4th for Your Game
						</h1>
						<p className="text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto mb-8">
							Find a 4th for your game without the endless text threads. Connect with
							local players and get on the court faster.
						</p>
						<Button
							asChild
							size="lg"
							className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-transform hover:scale-105"
						>
							<Link href="/join">Browse Players Near You</Link>
						</Button>
					</div>
				</section>

				{/* How It Works Section */}
				<section className="py-20">
					<div className="container mx-auto px-6">
						<div className="text-center mb-16">
							<h2 className="text-3xl lg:text-4xl font-bold text-dark-slate">
								Fill Your Game in 3 Simple Steps
							</h2>
							<p className="text-slate-500 mt-4 max-w-2xl mx-auto">
								Our player finder makes connecting with the local pickleball community
								effortless.
							</p>
						</div>
						<div className="grid md:grid-cols-3 gap-10 text-center">
							<div className="flex flex-col items-center">
								<div className="bg-teal-100 text-teal-600 rounded-full p-5 mb-6">
									<Search size={32} />
								</div>
								<h3 className="text-xl font-bold mb-2">Search for Players</h3>
								<p className="text-slate-600">
									Use our map or directory to browse players. Filter by skill level,
									availability, and distance. "
								</p>
							</div>
							<div className="flex flex-col items-center">
								<div className="bg-coral-100 text-coral-600 rounded-full p-5 mb-6">
									<UserCheck size={32} />
								</div>
								<h3 className="text-xl font-bold mb-2">View Profiles</h3>
								<p className="text-slate-600">
									Check out player profiles to see their DUPR rating, play style, and a
									short bio to find the perfect fit.
								</p>
							</div>
							<div className="flex flex-col items-center">
								<div className="bg-yellow-100 text-yellow-600 rounded-full p-5 mb-6">
									<Send size={32} />
								</div>
								<h3 className="text-xl font-bold mb-2">Connect & Play</h3>
								<p className="text-slate-600">
									Send a direct message or invite them to your upcoming game right from
									the app.
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
									src="/map-of-pickleball-players.jpg" // Replace with an image of your player finder map
									alt="Map interface showing pickleball players nearby"
									layout="fill"
									objectFit="cover"
									className="rounded-lg shadow-xl"
								/>
							</div>
							<div>
								<h2 className="text-3xl lg:text-4xl font-bold text-dark-slate mb-6">
									The Smart Way to Find Partners
								</h2>
								<ul className="space-y-6">
									<li className="flex items-start">
										<Map className="text-coral-500 w-8 h-8 mr-4 flex-shrink-0" />
										<div>
											<h4 className="font-bold text-lg">Interactive Player Map</h4>
											<p className="text-slate-600">
												Visually discover players in your neighborhood or any area you're
												traveling to.
											</p>
										</div>
									</li>
									<li className="flex items-start">
										<Bell className="text-coral-500 w-8 h-8 mr-4 flex-shrink-0" />
										<div>
											<h4 className="font-bold text-lg">Game Alerts</h4>
											<p className="text-slate-600">
												Get notified when a nearby game needs an extra player that matches
												your skill level.
											</p>
										</div>
									</li>
									<li className="flex items-start">
										<Users className="text-coral-500 w-8 h-8 mr-4 flex-shrink-0" />
										<div>
											<h4 className="font-bold text-lg">Join Local Groups</h4>
											<p className="text-slate-600">
												Find and join pickleball groups in your area to connect with a
												regular crew of players.
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
								“I needed a last-minute sub for my league match. I used the paddlX
								player finder and found someone with the right DUPR rating in 15
								minutes. It saved the day!”
							</p>
							<p className="mt-6 font-bold text-lg">- Mark B., Competitive Player</p>
						</div>
					</div>
				</section>

				{/* FAQ Section */}
				<section className="bg-slate-50 py-20">
					<div className="container mx-auto px-6">
						<div className="text-center mb-12">
							<h2 className="text-3xl lg:text-4xl font-bold text-dark-slate">
								Common Questions
							</h2>
						</div>
						<div className="max-w-3xl mx-auto space-y-6">
							<div>
								<h4 className="font-bold text-lg mb-2">
									How do I filter players by skill level?
								</h4>
								<p className="text-slate-600">
									Our player directory allows you to filter by DUPR rating, self-rating,
									and play style (e.g., recreational, competitive) to find the perfect
									match for your game.
								</p>
							</div>
							<div className="border-t border-slate-200 pt-6">
								<h4 className="font-bold text-lg mb-2">
									Is it free to contact other players?
								</h4>
								<p className="text-slate-600">
									Yes! Once you create your free paddlX account, you can message other
									players and invite them to games at no cost.
								</p>
							</div>
							<div className="border-t border-slate-200 pt-6">
								<h4 className="font-bold text-lg mb-2">
									Can I use this to find players when I'm traveling?
								</h4>
								<p className="text-slate-600">
									Absolutely! The player map can be centered on any location, making it
									the perfect tool to find a game and meet local players wherever you go.
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* Final CTA */}
				<section className="bg-white text-slate-800 py-20">
					<div className="container mx-auto px-6 text-center">
						<h2 className="text-3xl lg:text-4xl font-bold mb-4">
							Never Scramble for a Player Again
						</h2>
						<p className="text-slate-800 text-lg mb-8 max-w-2xl mx-auto">
							Join the fastest-growing pickleball community and find your next game,
							partner, or opponent today.
						</p>
						<Button
							asChild
							size="lg"
							className="bg-white text-slate-800 hover:bg-slate-100 font-bold py-4 px-8 rounded-full text-lg transition-transform hover:scale-105"
						>
							<Link href="/join">
								Find Your Next Match <ArrowRight className="ml-2" />
							</Link>
						</Button>
					</div>
				</section>
			</div>
		</>
	);
}
