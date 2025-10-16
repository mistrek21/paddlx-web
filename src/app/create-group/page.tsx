// src/app/create-group/page.tsx

// src/app/create-group/page.tsx

import { Metadata } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import {
	Users,
	MessageCircle,
	CalendarCheck,
	Shield,
	UserPlus,
	ArrowRight,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

// SEO Metadata
export const metadata: Metadata = {
	title: 'Manage Pickleball Groups Easily | Free Team & Group App | paddlX',
	description:
		'Stop the endless group texts. Create a free pickleball group on paddlX to easily build your roster, schedule private games, manage RSVPs, and chat with your players.',
	keywords: [
		'pickleball group management',
		'pickleball team app',
		'organize pickleball group',
		'pickleball group chat',
		'manage pickleball players',
		'track pickleball RSVPs',
		'private pickleball games',
	],
	openGraph: {
		title: 'Manage Pickleball Groups Easily | Free Team & Group App | paddlX',
		description:
			"Automatically invite your group to play and always know who's in.",
		url: 'https://www.paddlx.com/create-group',
		type: 'website',
		images: [
			{
				url: '/og-image-create-group.jpg', // Replace with relevant image
				width: 1200,
				height: 630,
				alt: 'Friends playing in a paddlX pickleball group',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'The Easiest Way to Manage Your Pickleball Group',
		description:
			'Ditch the spreadsheets and group texts. Organize your pickleball crew for free with paddlX.',
		images: ['/twitter-image-create-group.jpg'], // Replace with relevant image
	},
};

// JSON-LD Structured Data
const jsonLd = {
	'@context': 'https://schema.org',
	'@type': 'SoftwareApplication',
	'name': 'paddlX Group Management',
	'applicationCategory': 'SportsApplication',
	'operatingSystem': 'Web, iOS, Android',
	'description':
		'A free tool to create and manage pickleball groups, schedule private events, track RSVPs, and communicate via group chat.',
	'featureList': [
		'Create private or public groups',
		'Easy invite via link or contacts',
		'Schedule group-only games',
		'Automated RSVP tracking and waitlists',
		'Built-in group chat',
		'Member management',
	],
	'offers': {
		'@type': 'Offer',
		'price': '0',
		'priceCurrency': 'USD',
	},
};

export default function CreateGroupPage() {
	return (
		<>
			<Head>
				<script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
			</Head>
			<div className="bg-white text-slate-800">
				{/* Hero Section */}
				<section className="relative bg-blue-50 py-20 lg:py-32">
					{/*Decorative blob*/}
					<div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>

					<div className="container relative mx-auto px-6 text-center z-10">
						<span className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-4 block">
							Group Management made easy
						</span>
						<h1 className="text-4xl lg:text-6xl font-extrabold text-dark-slate mb-4 leading-tight">
							The Home Base for Your Pickleball Crew
						</h1>
						<p className="text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto mb-8">
							Automatically invite your group to play, manage RSVPs, and always know
							who's in. Say goodbye to chaotic text chains and messy spreadsheets.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Button
								asChild
								size="lg"
								className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-6 px-8 rounded-full text-lg shadow-lg transition-transform hover:scale-105"
							>
								<Link href="/join">Create a Group for Free</Link>
							</Button>
						</div>
					</div>
				</section>

				{/* How It Works / Problem-Solution */}
				<section className="py-20">
					<div className="container mx-auto px-6">
						<div className="text-center mb-16">
							<h2 className="text-3xl lg:text-4xl font-bold text-dark-slate">
								Organize Your Players in 3 Easy Steps
							</h2>
							<p className="text-slate-500 mt-4 max-w-2xl mx-auto">
								We've streamlined the process of getting your regular group onto the
								court.
							</p>
						</div>
						<div className="grid md:grid-cols-3 gap-12 text-center">
							<div className="flex flex-col items-center p-6 rounded-2xl hover:bg-slate-50 transition-colors">
								<div className="bg-blue-100 text-blue-600 rounded-2xl p-4 mb-6 transform -rotate-3">
									<UserPlus size={32} strokeWidth={2.5} />
								</div>
								<h3 className="text-xl font-bold mb-3">1. Build Your Roster</h3>
								<p className="text-slate-600 leading-relaxed">
									Create a group in seconds. Invite players by sharing a simple link via
									text, email, or social media.
								</p>
							</div>
							<div className="flex flex-col items-center p-6 rounded-2xl hover:bg-slate-50 transition-colors">
								<div className="bg-cyan-100 text-cyan-600 rounded-2xl p-4 mb-6 transform rotate-3">
									<CalendarCheck size={32} strokeWidth={2.5} />
								</div>
								<h3 className="text-xl font-bold mb-3">2. Schedule Private Games</h3>
								<p className="text-slate-600 leading-relaxed">
									Create events that are only visible to your group members. One click
									sends a notification to everyone.
								</p>
							</div>
							<div className="flex flex-col items-center p-6 rounded-2xl hover:bg-slate-50 transition-colors">
								<div className="bg-indigo-100 text-indigo-600 rounded-2xl p-4 mb-6 transform -rotate-3">
									<Users size={32} strokeWidth={2.5} />
								</div>
								<h3 className="text-xl font-bold mb-3">3. We Handle RSVPs</h3>
								<p className="text-slate-600 leading-relaxed">
									Players tap "In" or "Out." We track the headcount, manage waitlists,
									and send reminders automatically.
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* Features Section (Split Layout) */}
				<section className="bg-slate-50 py-24 overflow-hidden">
					<div className="container mx-auto px-6">
						<div className="grid lg:grid-cols-2 gap-16 items-center">
							{/* Text Content */}
							<div className="order-2 lg:order-1">
								<span className="text-cyan-600 font-bold tracking-wider uppercase text-sm mb-2 block">
									Powerful Features
								</span>
								<h2 className="text-3xl lg:text-4xl font-bold text-dark-slate mb-6 leading-tight">
									Ditch the Group Texts, <br /> Keep the Fun
								</h2>
								<p className="text-slate-600 mb-8 text-lg">
									paddlX gives you all the tools you need to manage a recreational group,
									a competitive team, or a local club without the headache.
								</p>

								<ul className="space-y-6">
									<li className="flex items-start">
										<div className="bg-white p-2 rounded-lg shadow-sm mr-4">
											<MessageCircle className="text-blue-500 w-6 h-6" />
										</div>
										<div>
											<h4 className="font-bold text-lg text-gray-900">
												Dedicated Group Chat
											</h4>
											<p className="text-slate-600 mt-1">
												Keep pickleball talk out of your main text app. Talk smack, share
												photos, and coordinate logistics in one place.
											</p>
										</div>
									</li>
									<li className="flex items-start">
										<div className="bg-white p-2 rounded-lg shadow-sm mr-4">
											<Shield className="text-blue-500 w-6 h-6" />
										</div>
										<div>
											<h4 className="font-bold text-lg text-gray-900">
												Total Privacy Control
											</h4>
											<p className="text-slate-600 mt-1">
												Make your group invite-only. Your player list and game schedule stay
												private and secure.
											</p>
										</div>
									</li>
									<li className="flex items-start">
										<div className="bg-white p-2 rounded-lg shadow-sm mr-4">
											<Users className="text-blue-500 w-6 h-6" />
										</div>
										<div>
											<h4 className="font-bold text-lg text-gray-900">
												Centralized Member Directory
											</h4>
											<p className="text-slate-600 mt-1">
												Always have an up-to-date list of your players, their skill levels
												(DUPR), and contact info handy.
											</p>
										</div>
									</li>
								</ul>
							</div>

							{/* Image Content */}
							<div className="order-1 lg:order-2 relative">
								<div className="absolute inset-0 bg-gradient-to-r from-cyan-200 to-blue-200 rounded-3xl transform rotate-3 scale-105 opacity-50"></div>
								<div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
									<Image
										src="/pickleball-group-chat-app.jpg" // Replace with a screenshot of group chat/roster
										alt="paddlX app interface showing group chat and game RSVPs"
										layout="fill"
										objectFit="cover"
										className="hover:scale-105 transition-transform duration-700"
									/>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Testimonial */}
				<section className="py-20 px-6 bg-white">
					<div className="container mx-auto">
						<div className="max-w-4xl mx-auto bg-blue-50 rounded-3xl p-10 lg:p-16 relative">
							<div className="text-blue-200 absolute top-6 left-8 text-6xl font-serif leading-none">
								&ldquo;
							</div>
							<div className="relative z-10 text-center">
								<p className="text-xl md:text-2xl font-medium text-slate-700 leading-relaxed">
									“I run a group of about 30 players. Before paddlX, I was managing three
									different text threads and a spreadsheet just to get 4 people on a
									court. Now, I create a game, the app notifies everyone, and the slots
									fill up instantly. It has saved me hours every week.”
								</p>
								<div className="mt-8 flex items-center justify-center">
									<div className="w-12 h-12 bg-blue-200 rounded-full overflow-hidden mr-4">
										{/* Placeholder for user avatar */}
										<Users className="w-full h-full p-2 text-blue-500" />
									</div>
									<div className="text-left">
										<p className="font-bold text-gray-900">Michael T.</p>
										<p className="text-sm text-blue-600">Group Organizer</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* FAQ Section */}
				<section className="bg-slate-50 py-20">
					<div className="container mx-auto px-6">
						<div className="text-center mb-12">
							<h2 className="text-3xl lg:text-4xl font-bold text-dark-slate">
								Group Management FAQs
							</h2>
						</div>
						<div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
							<div className="bg-white p-8 rounded-xl shadow-sm">
								<h4 className="font-bold text-lg mb-3 text-gray-900">
									Is it free to create a group?
								</h4>
								<p className="text-slate-600 leading-relaxed">
									Yes! Creating groups, inviting members, scheduling games, and using
									group chat are all 100% free features on paddlX.
								</p>
							</div>
							<div className="bg-white p-8 rounded-xl shadow-sm">
								<h4 className="font-bold text-lg mb-3 text-gray-900">
									Is there a limit to how many people can be in a group?
								</h4>
								<p className="text-slate-600 leading-relaxed">
									Currently, there are no strict limits. Whether you have a foursome or a
									club with hundreds of members, paddlX can handle it.
								</p>
							</div>
							<div className="bg-white p-8 rounded-xl shadow-sm">
								<h4 className="font-bold text-lg mb-3 text-gray-900">
									Do my players need to download the app?
								</h4>
								<p className="text-slate-600 leading-relaxed">
									For the best experience (push notifications for new games, chat), yes.
									However, they can also RSVP via the web through the link you share.
								</p>
							</div>
							<div className="bg-white p-8 rounded-xl shadow-sm">
								<h4 className="font-bold text-lg mb-3 text-gray-900">
									Can I belong to more than one group?
								</h4>
								<p className="text-slate-600 leading-relaxed">
									Absolutely. You can create or join as many groups as you like and
									manage all your schedules from one central dashboard.
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* Final CTA */}
				<section className="relative py-20 overflow-hidden">
					{/* Background Gradient */}
					<div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-cyan-500"></div>

					{/* Texture overlay */}
					<div className="absolute inset-0 opacity-10 bg-[url('/noise.png')]"></div>

					<div className="container relative mx-auto px-6 text-center z-10 text-white">
						<h2 className="text-3xl lg:text-5xl font-extrabold mb-6">
							Get Your Pickleball Crew Organized
						</h2>
						<p className="text-blue-50 text-lg/relaxed mb-10 max-w-2xl mx-auto font-medium">
							Setup takes less than 2 minutes. Start bringing your community together
							today.
						</p>
						<Button
							asChild
							size="lg"
							className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-6 px-10 rounded-full text-xl shadow-2xl transition-all hover:-translate-y-1"
						>
							<Link href="/join">
								Start Your Group <ArrowRight className="ml-2 h-6 w-6" />
							</Link>
						</Button>
						<p className="mt-4 text-sm text-blue-100 opacity-80">
							Free forever. No credit card required.
						</p>
					</div>
				</section>
			</div>
		</>
	);
}
