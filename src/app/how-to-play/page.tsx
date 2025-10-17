// src/app/how-to-play/page.tsx

// src/app/how-to-play/page.tsx

import { Metadata } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import {
	PlayCircle,
	Check,
	X,
	MapPin,
	BookOpen,
	ArrowRight,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import DynamicCtaSection from '../_components/cta/DynamicCtaSection';

// SEO Metadata
export const metadata: Metadata = {
	title: "How to Play Pickleball: A Beginner's Guide to the Rules | paddlX",
	description:
		'Learn how to play pickleball with our easy-to-follow guide. Get out on the court with the basic rules, scoring, court layout, and beginner strategy. Start playing today!',
	keywords: [
		'how to play pickleball',
		'pickleball rules for beginners',
		'pickleball scoring',
		'pickleball kitchen rule',
		'learn to play pickleball',
		'basic pickleball rules',
		'pickleball guide',
	],
	openGraph: {
		title: "How to Play Pickleball: A Beginner's Guide | paddlX",
		description:
			'Get out on the court with the basic rules and positioning. Our simple guide makes learning pickleball fun and easy.',
		url: 'https://www.paddlx.com/how-to-play',
		type: 'article',
		images: [
			{
				url: '/og-image-how-to-play.jpg', // Replace with an engaging image of people learning to play
				width: 1200,
				height: 630,
				alt: 'A group of friends learning how to play pickleball.',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: "The Ultimate Beginner's Guide to Playing Pickleball | paddlX",
		description:
			'Master the basic rules, scoring, and strategy of pickleball in minutes with our simple guide.',
		images: ['/twitter-image-how-to-play.jpg'], // Replace with a relevant Twitter image
	},
};

// JSON-LD Structured Data
const jsonLd = {
	'@context': 'https://schema.org',
	'@type': 'HowTo',
	'name': 'How to Play Pickleball for Beginners',
	'description':
		'A step-by-step guide to understanding the basic rules, scoring, and strategy of pickleball.',
	'step': [
		{
			'@type': 'HowToStep',
			'name': 'Understand the Court',
			'text':
				'Learn the key areas of a pickleball court, including the baseline, sidelines, and the Non-Volley Zone (Kitchen). A standard court is 44 feet long and 20 feet wide.',
			'image': '/pickleball-court-diagram.jpg', // URL to a diagram of the court
		},
		{
			'@type': 'HowToStep',
			'name': 'Learn the Serve',
			'text':
				'The serve must be hit underhand from behind the baseline, diagonally across the court. It must clear the Non-Volley Zone.',
		},
		{
			'@type': 'HowToStep',
			'name': 'Follow the Two-Bounce Rule',
			'text':
				'After the serve, the ball must bounce once on the receiving side and once on the serving side before any player can hit a volley (hit the ball out of the air).',
		},
		{
			'@type': 'HowToStep',
			'name': 'Respect the Kitchen',
			'text':
				'Players cannot hit a volley while standing in the Non-Volley Zone (the "Kitchen") or on the kitchen line.',
		},
		{
			'@type': 'HowToStep',
			'name': 'Understand the Scoring',
			'text':
				'Only the serving team can score a point. Games are typically played to 11 points, and you must win by 2.',
		},
	],
};

export default function HowToPlayPage() {
	return (
		<>
			<Head>
				<script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
			</Head>
			<div className="bg-white text-slate-800">
				{/* Hero Section */}
				<section className="relative bg-green-50 py-20 lg:py-32">
					<div className="container mx-auto px-6 text-center">
						<h1 className="text-4xl lg:text-6xl font-extrabold text-dark-slate mb-4 leading-tight">
							How to Play Pickleball
						</h1>
						<p className="text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto mb-8">
							Welcome to the fastest-growing sport in the world! Get out on the court
							with this easy guide to the basic rules and positioning.
						</p>
						<Button
							asChild
							size="lg"
							className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg shadow-green-200 transition-transform hover:scale-105"
						>
							<Link href="/courts">Find a Court Near You</Link>
						</Button>
					</div>
				</section>

				{/* The Basics Section */}
				<section className="py-20">
					<div className="container mx-auto px-6">
						<div className="text-center mb-16">
							<h2 className="text-3xl lg:text-4xl font-bold text-dark-slate">
								The Basics: What You Need
							</h2>
						</div>
						<div className="grid md:grid-cols-3 gap-8 text-center">
							<div className="p-8">
								<div className="w-24 h-24 mx-auto mb-4">
									{/* Replace with an actual image of a paddle */}
									<Image
										src="/pickleball-paddle-icon.png"
										alt="Pickleball Paddle"
										width={96}
										height={96}
									/>
								</div>
								<h3 className="text-xl font-bold mb-2">A Paddle</h3>
								<p className="text-slate-600">
									A solid paddle, smaller than a tennis racket, typically made of
									composite materials.
								</p>
							</div>
							<div className="p-8">
								<div className="w-24 h-24 mx-auto mb-4">
									{/* Replace with an actual image of a ball */}
									<Image
										src="/pickleball-ball-icon.png"
										alt="Pickleball Ball"
										width={96}
										height={96}
									/>
								</div>
								<h3 className="text-xl font-bold mb-2">A Pickleball</h3>
								<p className="text-slate-600">
									A plastic, perforated ball similar to a wiffle ball, which flies slower
									than a tennis ball.
								</p>
							</div>
							<div className="p-8">
								<div className="w-24 h-24 mx-auto mb-4">
									{/* Replace with an image of a court */}
									<Image
										src="/pickleball-court-icon.png"
										alt="Pickleball Court"
										width={96}
										height={96}
									/>
								</div>
								<h3 className="text-xl font-bold mb-2">A Court</h3>
								<p className="text-slate-600">
									A court the size of a badminton court (20' x 44') with a net that is
									34" high at the center.
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* The Court Section */}
				<section className="bg-slate-50 py-20">
					<div className="container mx-auto px-6">
						<h2 className="text-3xl lg:text-4xl font-bold text-dark-slate text-center mb-12">
							Understanding the Court
						</h2>
						<div className="max-w-4xl mx-auto">
							{/* You would replace this div with an actual image/diagram */}
							<div className="bg-white p-4 rounded-lg shadow-lg mb-8">
								<Image
									src="/pickleball-court-labeled-diagram.png"
									alt="Diagram of a pickleball court with all sections labeled"
									width={1000}
									height={550}
									className="w-full rounded"
								/>
							</div>
							<ul className="space-y-4 text-lg">
								<li>
									<span className="font-bold text-green-700">Baseline:</span> The back
									line of the court where you stand behind to serve.
								</li>
								<li>
									<span className="font-bold text-green-700">Sidelines:</span> The lines
									that mark the side boundaries of the court.
								</li>
								<li>
									<span className="font-bold text-green-700">
										Non-Volley Zone ("The Kitchen"):
									</span>{' '}
									The 7-foot zone on each side of the net. You cannot hit a volley (a
									ball out of the air) while standing in this area.
								</li>
								<li>
									<span className="font-bold text-green-700">Service Courts:</span> The
									two boxes on each side where the serve must land.
								</li>
							</ul>
						</div>
					</div>
				</section>

				{/* 5 Key Rules Section */}
				<section className="py-20">
					<div className="container mx-auto px-6">
						<h2 className="text-3xl lg:text-4xl font-bold text-dark-slate text-center mb-12">
							The 5 Key Rules for Beginners
						</h2>
						<div className="max-w-3xl mx-auto space-y-8">
							<div className="p-6 border-l-4 border-green-500 bg-green-50">
								<h3 className="text-2xl font-bold mb-2">
									1. The Serve Must Be Underhand
								</h3>
								<p className="text-slate-700">
									Every point starts with an underhand serve. You must hit the ball below
									your waist, and your arm must move in an upward arc. The serve is made
									diagonally and must land in the opponent's service court, beyond the
									kitchen.
								</p>
							</div>
							<div className="p-6 border-l-4 border-green-500 bg-green-50">
								<h3 className="text-2xl font-bold mb-2">2. The Two-Bounce Rule</h3>
								<p className="text-slate-700">
									This is one of pickleball's most unique rules. After the serve, the
									ball must bounce once on each side of the court before either team can
									volley it (hit it out of the air).
									<br />
									• The receiving team must let the serve bounce.
									<br />• The serving team must let the return of serve bounce.
								</p>
							</div>
							<div className="p-6 border-l-4 border-green-500 bg-green-50">
								<h3 className="text-2xl font-bold mb-2">
									3. Stay Out of the Kitchen (on Volleys)
								</h3>
								<p className="text-slate-700">
									You cannot hit a volley (a shot hit out of the air) while any part of
									your body is in the Non-Volley Zone (the "Kitchen") or touching the
									kitchen line. Even your momentum carrying you into the kitchen after a
									volley is a fault. You can, however, enter the kitchen to hit a ball
									that has already bounced.
								</p>
							</div>
							<div className="p-6 border-l-4 border-green-500 bg-green-50">
								<h3 className="text-2xl font-bold mb-2">
									4. You Only Score on Your Serve
								</h3>
								<p className="text-slate-700">
									Just like in volleyball, only the serving team can score a point. The
									receiving team's goal is to win the rally to earn the right to serve.
								</p>
							</div>
							<div className="p-6 border-l-4 border-green-500 bg-green-50">
								<h3 className="text-2xl font-bold mb-2">
									5. The Game Ends at 11 (Win by 2)
								</h3>
								<p className="text-slate-700">
									Most games are played to 11 points, but you must win by at least two
									points. For example, a final score could be 11-9 or 13-11.
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* Scoring Section */}
				<section className="bg-slate-50 py-20">
					<div className="container mx-auto px-6">
						<h2 className="text-3xl lg:text-4xl font-bold text-dark-slate text-center mb-12">
							How Scoring Works (in Doubles)
						</h2>
						<div className="max-w-3xl mx-auto text-center">
							<p className="text-lg text-slate-700 mb-6">
								Scoring in doubles can seem tricky because of the third number. Here’s
								the breakdown:
							</p>
							<div className="bg-white p-8 rounded-lg shadow-lg text-left">
								<p className="text-2xl font-bold text-center mb-4">
									Server Score - Receiver Score - Server Number (1 or 2)
								</p>
								<ul className="list-disc list-inside space-y-2 text-slate-700">
									<li>The server always calls the score before serving.</li>
									<li>Your team's score is always called first.</li>
									<li>
										The third number is either "1" or "2" and indicates which of the two
										players on the serving team is serving.
									</li>
									<li>
										Each player on a team gets to serve until they lose a rally, then the
										serve passes to their partner. When both partners lose their serve,
										it's a "side out," and the other team gets to serve.
									</li>
									<li>
										<span className="font-bold">Exception:</span> To start the game, only
										one player on the first serving team gets to serve. The score starts
										at 0-0-2.
									</li>
								</ul>
							</div>
						</div>
					</div>
				</section>

				{/* Basic Strategy Section */}
				<section className="py-20">
					<div className="container mx-auto px-6">
						<h2 className="text-3xl lg:text-4xl font-bold text-dark-slate text-center mb-12">
							Basic Strategy & Positioning
						</h2>
						<div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
							<div className="bg-green-50 p-6 rounded-lg">
								<h3 className="font-bold text-xl mb-2">When Serving</h3>
								<p className="text-slate-700">
									After you serve, stay back behind the baseline. You must let the return
									of serve bounce (the Two-Bounce Rule), so there's no need to rush
									forward immediately.
								</p>
							</div>
							<div className="bg-green-50 p-6 rounded-lg">
								<h3 className="font-bold text-xl mb-2">When Receiving</h3>
								<p className="text-slate-700">
									After returning the serve, try to move forward to the edge of the
									Non-Volley Zone. This is the strongest position on the court.
								</p>
							</div>
							<div className="bg-green-50 p-6 rounded-lg">
								<h3 className="font-bold text-xl mb-2">Keep the Ball in Play</h3>
								<p className="text-slate-700">
									As a beginner, focus on consistency over power. Let your opponents make
									the mistakes. Hitting deep returns and soft shots into the kitchen
									("dinks") are very effective.
								</p>
							</div>
							<div className="bg-green-50 p-6 rounded-lg">
								<h3 className="font-bold text-xl mb-2">Communicate</h3>
								<p className="text-slate-700">
									In doubles, talk to your partner! Call "mine," "yours," or "bounce it!"
									to avoid confusion and cover the court effectively.
								</p>
							</div>
						</div>
					</div>
				</section>

				<DynamicCtaSection
					buttonHref="/join"
					buttonText="Book a Session"
					featureList={['Book in seconds', 'Verified coaches', 'Easy cancellations']} // TODO: Add features
					title="You're Ready to Play!"
					subtitle="The best way to learn is by doing. Grab a paddle, find a court, and give
										it a try. You'll be dinking in no time!"
					buttonSubtext="Secure booking • Verified coaches • Easy cancellations"
					colorScheme="green"
				/>
			</div>
		</>
	);
}
