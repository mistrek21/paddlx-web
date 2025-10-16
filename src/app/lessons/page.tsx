// src/app/lessons/page.tsx

// src/app/lessons/page.tsx

import { Metadata } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import {
	BookOpen,
	Search,
	Star,
	CalendarCheck,
	User,
	Users,
	ArrowRight,
	ShieldCheck,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

// SEO Metadata
export const metadata: Metadata = {
	title: 'Find Pickleball Coaches & Book Lessons Near You | paddlX',
	description:
		'Browse and book private or group pickleball lessons with top-rated coaches in your area. Compare profiles, check availability, and book online instantly with paddlX.',
	keywords: [
		'book pickleball lessons',
		'find pickleball coach',
		'pickleball private lessons',
		'group pickleball clinics',
		'pickleball coach near me',
		'pickleball coaching',
		'learn to play pickleball',
	],
	openGraph: {
		title: 'Find Your Perfect Pickleball Coach | paddlX',
		description:
			'Browse coaches in your area for a private or group lesson and book online today.',
		url: 'https://www.paddlx.com/lessons',
		type: 'website',
		images: [
			{
				url: '/og-image-lessons.jpg', // Replace with an image of a friendly coach giving a lesson
				width: 1200,
				height: 630,
				alt: 'A player receiving a pickleball lesson from a professional coach.',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Book Pickleball Lessons with Top-Rated Coaches | paddlX',
		description:
			'Ready to improve your game? Find and book your perfect pickleball coach in just a few clicks.',
		images: ['/twitter-image-lessons.jpg'], // Replace with a relevant Twitter image
	},
};

// JSON-LD Structured Data
const jsonLd = {
	'@context': 'https://schema.org',
	'@type': 'Service',
	'serviceType': 'Pickleball Coaching Service',
	'provider': {
		'@type': 'Organization',
		'name': 'paddlX',
	},
	'description':
		'A platform to find, compare, and book lessons with local pickleball coaches. Services include private lessons and group clinics with secure online booking.',
	'name': 'paddlX Coach Finder',
	'areaServed': {
		'@type': 'Country',
		'name': 'USA', // Adjust as needed
	},
};

export default function LessonsPage() {
	return (
		<>
			<Head>
				<script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
			</Head>
			<div className="bg-white text-slate-800">
				{/* Hero Section */}
				<section className="relative bg-blue-50 py-20 lg:py-32">
					<div className="container mx-auto px-6 text-center">
						<h1 className="text-4xl lg:text-6xl font-extrabold text-dark-slate mb-4 leading-tight">
							Find Your Perfect Pickleball Coach
						</h1>
						<p className="text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto mb-8">
							Browse top-rated coaches in your area for a private or group lesson. Take
							your game to the next level, starting today.
						</p>
						<Button
							asChild
							size="lg"
							className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg shadow-blue-200 transition-transform hover:scale-105"
						>
							<Link href="/coaches">Browse Coaches Near You</Link>
						</Button>
					</div>
				</section>

				{/* How It Works Section */}
				<section className="py-20">
					<div className="container mx-auto px-6">
						<div className="text-center mb-16">
							<h2 className="text-3xl lg:text-4xl font-bold text-dark-slate">
								Booking a Lesson is Easy
							</h2>
						</div>
						<div className="grid md:grid-cols-3 gap-8 text-center">
							<div className="p-8">
								<Search className="w-12 h-12 mx-auto text-blue-500 mb-4" />
								<h3 className="text-xl font-bold mb-2">1. Browse Coaches</h3>
								<p className="text-slate-600">
									Search our directory of vetted coaches. Filter by location, specialty,
									and price to find your ideal match.
								</p>
							</div>
							<div className="p-8">
								<Star className="w-12 h-12 mx-auto text-blue-500 mb-4" />
								<h3 className="text-xl font-bold mb-2">2. Compare Profiles</h3>
								<p className="text-slate-600">
									Read reviews from other players, check a coach's qualifications, and
									view their real-time availability.
								</p>
							</div>
							<div className="p-8">
								<CalendarCheck className="w-12 h-12 mx-auto text-blue-500 mb-4" />
								<h3 className="text-xl font-bold mb-2">3. Book Instantly</h3>
								<p className="text-slate-600">
									Select a time that works for you and book your lesson securely online
									in just a few clicks.
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* Types of Lessons Section */}
				<section className="bg-slate-50 py-20">
					<div className="container mx-auto px-6">
						<div className="text-center mb-12">
							<h2 className="text-3xl lg:text-4xl font-bold text-dark-slate">
								Lessons for Every Player
							</h2>
						</div>
						<div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
							<div className="bg-white p-8 rounded-2xl border border-slate-200">
								<User className="w-8 h-8 text-blue-600 mb-4" />
								<h3 className="text-2xl font-bold mb-3">Private Lessons</h3>
								<p className="text-slate-600 mb-4">
									Get personalized, one-on-one instruction tailored to your specific
									goals. The fastest way to improve your technique.
								</p>
								<Link
									href="/coaches?type=private"
									className="font-bold text-blue-600 hover:text-blue-700 flex items-center"
								>
									Find a Private Coach <ArrowRight className="ml-2 h-5 w-5" />
								</Link>
							</div>
							<div className="bg-white p-8 rounded-2xl border border-slate-200">
								<Users className="w-8 h-8 text-blue-600 mb-4" />
								<h3 className="text-2xl font-bold mb-3">Group Clinics</h3>
								<p className="text-slate-600 mb-4">
									Learn in a fun, social setting. Group clinics are great for practicing
									specific skills and meeting new players.
								</p>
								<Link
									href="/clinics"
									className="font-bold text-blue-600 hover:text-blue-700 flex items-center"
								>
									Browse Group Clinics <ArrowRight className="ml-2 h-5 w-5" />
								</Link>
							</div>
						</div>
					</div>
				</section>

				{/* Testimonial Section */}
				<section className="py-20 px-6">
					<div className="container mx-auto text-center">
						<div className="max-w-3xl mx-auto">
							<p className="text-2xl font-medium text-slate-700 italic">
								“I booked a series of lessons with a coach I found on paddlX, and it
								completely changed my game. The booking process was so simple, and my
								coach was fantastic. My third shot drop has never been better!”
							</p>
							<p className="mt-6 font-bold text-lg">- Maria S., 3.5 DUPR Player</p>
						</div>
					</div>
				</section>

				{/* FAQ Section */}
				<section className="bg-slate-50 py-20">
					<div className="container mx-auto px-6">
						<div className="text-center mb-12">
							<h2 className="text-3xl lg:text-4xl font-bold text-dark-slate">
								Your Questions, Answered
							</h2>
						</div>
						<div className="max-w-3xl mx-auto space-y-4">
							<details className="p-6 border bg-white border-slate-200 rounded-lg">
								<summary className="font-bold text-lg cursor-pointer">
									How much do pickleball lessons cost?
								</summary>
								<p className="text-slate-600 mt-2">
									Prices vary depending on the coach's experience, location, and the type
									of lesson (private vs. group). You can browse coach profiles to see
									their rates clearly listed before you book.
								</p>
							</details>
							<details className="p-6 border bg-white border-slate-200 rounded-lg">
								<summary className="font-bold text-lg cursor-pointer">
									Are the coaches on paddlX certified?
								</summary>
								<p className="text-slate-600 mt-2">
									Many of our coaches are certified by organizations like PPR or IPTPA.
									You can view a coach's certifications and qualifications directly on
									their profile to ensure they're a good fit for you.
								</p>
							</details>
							<details className="p-6 border bg-white border-slate-200 rounded-lg">
								<summary className="font-bold text-lg cursor-pointer">
									What if I need to cancel or reschedule my lesson?
								</summary>
								<p className="text-slate-600 mt-2">
									Each coach sets their own cancellation policy, which is clearly
									displayed on their profile before you book. You can manage your
									bookings, including rescheduling, directly from your paddlX account.
								</p>
							</details>
						</div>
					</div>
				</section>

				{/* Final CTA */}
				<section className="bg-blue-600 text-white py-20">
					<div className="container mx-auto px-6 text-center">
						<h2 className="text-3xl lg:text-4xl font-bold mb-4">
							Ready to Elevate Your Game?
						</h2>
						<p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
							The right coach is waiting for you. Start your search and book a lesson
							today.
						</p>
						<Button
							asChild
							size="lg"
							className="bg-white text-blue-600 hover:bg-slate-100 font-bold py-4 px-8 rounded-full text-lg shadow-2xl transition-transform hover:scale-105"
						>
							<Link href="/coaches">
								Find Your Coach <ArrowRight className="ml-2" />
							</Link>
						</Button>
					</div>
				</section>
			</div>
		</>
	);
}
