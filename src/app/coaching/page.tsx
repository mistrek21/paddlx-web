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
import FAQSection, { FAQ } from '../_components/faq/FaqSection';
import DynamicCtaSection from '../_components/cta/DynamicCtaSection';

const faqQuestions: FAQ[] = [
	{
		id: 1,
		question: 'What are your fees?',
		answer:
			'Free to start. 2.9%+30¢ on transactions. Premium tiers for enterprises include white-label and advanced integrations.',
		category: 'Coaching',
	},
	{
		id: 2,
		question: 'Can I handle in-person payments?',
		answer:
			'Yes—accept on-site Cash App or QR-wallet via dynamic QR codes tied to events.',
		category: 'Coaching',
	},
	{
		id: 3,
		question: 'Are digital waivers legally binding?',
		answer:
			'Yes—paddlX waivers are configured to meet your jurisdiction’s eSignature regulations.',
		category: 'Coaching',
	},
	{
		id: 4,
		question: 'How does scheduling integrate?',
		answer:
			'Auto-sync events with Google Calendar or iCal. Notify members of schedule changes automatically.',
		category: 'Coaching',
	},
	{
		id: 5,
		question: 'Can I export data?',
		answer:
			'Export CSV or PDF for registrations, payments, attendance, and revenue reports with date filters.',
		category: 'Coaching',
	},
	{
		id: 6,
		question: 'How do players find and book me?',
		answer:
			"Once you create your coach profile, you'll get a unique public link you can share on social media, in your email signature, or anywhere else. Players in your area can also discover you through our coach directory.",
		category: 'Coaching',
	},
	{
		id: 7,
		question: 'Can I set my own prices and availability?',
		answer:
			'Yes, you have 100% control. Set your hourly rate for private lessons, define the price per player for clinics, and block off your calendar to show only the times you are available to coach.',
		category: 'Coaching',
	},
	{
		id: 8,
		question: 'What are the fees for using the coaching tools?',
		answer:
			"It's free to create your profile and list your services. We only make money when you do, by charging a small, transparent platform fee on each paid booking.",
		category: 'Coaching',
	},
];

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
				<FAQSection
					faqs={faqQuestions}
					title="FAQ"
					subtitle="Find answers to common questions about running your business"
					colorScheme="accent"
				/>

				<DynamicCtaSection
					buttonHref="/join"
					buttonText="Start Coaching on paddlX"
					featureList={['Launch free', 'scale fast', 'grow your business ']}
					title="Ready to Level Up Your Coaching Career?"
					subtitle="Create your free coach profile and start building your weekly programming today."
					// buttonSubtext="No credit card required • Cancel anytime"
					colorScheme="orange"
				/>
			</div>
		</>
	);
}
