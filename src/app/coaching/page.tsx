// src/app/coaching/page.tsx

// src/app/coaching/page.tsx

import { Metadata } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import {
	TrendingUp,
	CalendarDays,
	Users,
	DollarSign,
	BookOpen,
	ArrowRight,
	Check,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

// SEO Metadata
export const metadata: Metadata = {
	title: 'Pickleball Coaching Software | Scale Your Business | paddlX',
	description:
		'Scale your pickleball coaching business with paddlX. Our all-in-one software helps you manage private lessons, group clinics, player registrations, and payments.',
	keywords: [
		'pickleball coaching software',
		'manage pickleball clinics',
		'pickleball lesson scheduler',
		'grow pickleball coaching business',
		'pickleball drills',
		'pickleball programming software',
		'pickleball coach app',
	],
	openGraph: {
		title: 'Scale Your Coaching Business with paddlX',
		description:
			'Multiply your coaching earnings with weekly programming, lesson scheduling, and payment tools.',
		url: 'https://www.paddlx.com/coaching',
		type: 'website',
		images: [
			{
				url: '/og-image-coaching.jpg', // Replace with an image of a coach teaching a group
				width: 1200,
				height: 630,
				alt: 'A pickleball coach leading a successful group clinic.',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'The Ultimate Software for Pickleball Coaches | paddlX',
		description:
			'Stop the admin work. Start scaling your coaching with tools for scheduling, payments, and client management.',
		images: ['/twitter-image-coaching.jpg'], // Replace with a relevant Twitter image
	},
};

// JSON-LD Structured Data
const jsonLd = {
	'@context': 'https://schema.org',
	'@type': 'Service',
	'serviceType': 'Pickleball Coaching Management Software',
	'provider': {
		'@type': 'Organization',
		'name': 'paddlX',
	},
	'description':
		'An all-in-one platform for pickleball coaches to scale their business. Features include a public booking page, lesson and clinic scheduling, secure payment collection, client management, and a drill library.',
	'name': 'paddlX for Coaches',
};

export default function CoachingPage() {
	return (
		<>
			<Head>
				<script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
			</Head>
			<div className="bg-white text-slate-800">
				{/* Hero Section */}
				<section className="relative bg-orange-50 py-20 lg:py-32">
					<div className="container mx-auto px-6 text-center">
						<h1 className="text-4xl lg:text-6xl font-extrabold text-dark-slate mb-4 leading-tight">
							Scale Your Coaching.
							<br /> Multiply Your Impact.
						</h1>
						<p className="text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto mb-8">
							Multiply your coaching earnings with weekly programming. Go from one-off
							lessons to a full-fledged coaching business with our all-in-one software.
						</p>
						<Button
							asChild
							size="lg"
							className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg shadow-orange-200 transition-transform hover:scale-105"
						>
							<Link href="/join">Become a paddlX Coach</Link>
						</Button>
					</div>
				</section>

				{/* "From Solo Coach to Thriving Academy" Section */}
				<section className="py-20">
					<div className="container mx-auto px-6">
						<div className="text-center mb-16">
							<h2 className="text-3xl lg:text-4xl font-bold text-dark-slate">
								From Solo Coach to Thriving Academy
							</h2>
							<p className="text-slate-500 mt-4 max-w-2xl mx-auto">
								The key to growth is moving from one-to-one to one-to-many. We make that
								transition seamless.
							</p>
						</div>
						<div className="grid md:grid-cols-3 gap-8">
							<div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm text-center">
								<CalendarDays className="w-10 h-10 mx-auto text-orange-500 mb-4" />
								<h3 className="text-xl font-bold mb-2">Manage Bookings 24/7</h3>
								<p className="text-slate-600">
									Stop the back-and-forth texts. Let clients book lessons & clinics from
									your public profile whenever it's convenient for them.
								</p>
							</div>
							<div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm text-center">
								<Users className="w-10 h-10 mx-auto text-orange-500 mb-4" />
								<h3 className="text-xl font-bold mb-2">Run Group Clinics</h3>
								<p className="text-slate-600">
									The fastest way to scale. Easily create, promote, and manage group
									clinics, bootcamps, and drill sessions for maximum revenue.
								</p>
							</div>
							<div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm text-center">
								<DollarSign className="w-10 h-10 mx-auto text-orange-500 mb-4" />
								<h3 className="text-xl font-bold mb-2">Automate Payments</h3>
								<p className="text-slate-600">
									Require upfront payment for all your sessions. Get automated payouts
									and spend your time coaching, not chasing invoices.
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* The Ultimate Coaching Toolkit Section */}
				<section className="bg-slate-50 py-20">
					<div className="container mx-auto px-6">
						<div className="grid lg:grid-cols-2 gap-16 items-center">
							<div className="relative w-full h-96">
								<Image
									src="/pickleball-coach-booking-page.jpg" // Replace with a mockup of a coach's public booking page
									alt="A pickleball coach's public profile and booking page on paddlX"
									layout="fill"
									objectFit="contain"
									className="rounded-lg"
								/>
							</div>
							<div>
								<h2 className="text-3xl lg:text-4xl font-bold text-dark-slate mb-6">
									The Ultimate Coaching Toolkit
								</h2>
								<ul className="space-y-6">
									<li className="flex items-start">
										<Check className="text-orange-600 w-8 h-8 mr-4 flex-shrink-0" />
										<div>
											<h4 className="font-bold text-lg">Your Own Public Booking Page</h4>
											<p className="text-slate-600">
												Get a professional, shareable link where new and existing clients
												can view your availability and book your services.
											</p>
										</div>
									</li>
									<li className="flex items-start">
										<Check className="text-orange-600 w-8 h-8 mr-4 flex-shrink-0" />
										<div>
											<h4 className="font-bold text-lg">Client Management</h4>
											<p className="text-slate-600">
												Keep a centralized database of all your players. Track their
												progress, add private notes, and manage your relationships.
											</p>
										</div>
									</li>
									<li className="flex items-start">
										<Check className="text-orange-600 w-8 h-8 mr-4 flex-shrink-0" />
										<div>
											<h4 className="font-bold text-lg">Curated Drill Library</h4>
											<p className="text-slate-600">
												Access a library of proven drills and lesson plans. Save time on
												prep and deliver high-quality sessions every time.
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
								“paddlX gave me the tools to quit my day job. I tripled my client base
								in six months by offering weekly group clinics, all managed through the
								app. The booking and payment system is a game-changer.”
							</p>
							<p className="mt-6 font-bold text-lg">
								- Alex Johnson, Pro Pickleball Coach
							</p>
						</div>
					</div>
				</section>

				{/* FAQ Section */}
				<section className="bg-slate-50 py-20">
					<div className="container mx-auto px-6">
						<div className="text-center mb-12">
							<h2 className="text-3xl lg:text-4xl font-bold text-dark-slate">
								Coaching on paddlX: Your Questions
							</h2>
						</div>
						<div className="max-w-3xl mx-auto space-y-4">
							<details className="p-6 border bg-white border-slate-200 rounded-lg">
								<summary className="font-bold text-lg cursor-pointer">
									How do players find and book me?
								</summary>
								<p className="text-slate-600 mt-2">
									Once you create your coach profile, you'll get a unique public link you
									can share on social media, in your email signature, or anywhere else.
									Players in your area can also discover you through our coach directory.
								</p>
							</details>
							<details className="p-6 border bg-white border-slate-200 rounded-lg">
								<summary className="font-bold text-lg cursor-pointer">
									Can I set my own prices and availability?
								</summary>
								<p className="text-slate-600 mt-2">
									Yes, you have 100% control. Set your hourly rate for private lessons,
									define the price per player for clinics, and block off your calendar to
									show only the times you are available to coach.
								</p>
							</details>
							<details className="p-6 border bg-white border-slate-200 rounded-lg">
								<summary className="font-bold text-lg cursor-pointer">
									What are the fees for using the coaching tools?
								</summary>
								<p className="text-slate-600 mt-2">
									It's free to create your profile and list your services. We only make
									money when you do, by charging a small, transparent platform fee on
									each paid booking.
								</p>
							</details>
						</div>
					</div>
				</section>

				{/* Final CTA */}
				<section className="bg-orange-500 text-white py-20">
					<div className="container mx-auto px-6 text-center">
						<h2 className="text-3xl lg:text-4xl font-bold mb-4">
							Ready to Level Up Your Coaching Career?
						</h2>
						<p className="text-orange-100 text-lg mb-8 max-w-2xl mx-auto">
							Create your free coach profile and start building your weekly programming
							today.
						</p>
						<Button
							asChild
							size="lg"
							className="bg-white text-orange-600 hover:bg-slate-100 font-bold py-4 px-8 rounded-full text-lg shadow-2xl transition-transform hover:scale-105"
						>
							<Link href="/join">
								Start Coaching on paddlX <ArrowRight className="ml-2" />
							</Link>
						</Button>
					</div>
				</section>
			</div>
		</>
	);
}
