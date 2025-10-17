// src/app/lessons/page.tsx

import { Metadata } from 'next';
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
	UserPlus,
	BarChart3,
	Clock,
	Filter,
	Globe,
	MessageCircle,
	ChevronDown,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import FAQSection, { FAQ } from '../_components/faq/FaqSection';
import DynamicCtaSection from '../_components/cta/DynamicCtaSection';

const faqQuestions: FAQ[] = [
	{
		id: 1,
		question: 'How do I know a coach is qualified?',
		answer:
			'All coaches provide certifications, years of experience, and profile photos. Player reviews verify quality before booking.',
		category: 'Coaches',
	},
	{
		id: 2,
		question: 'Can I gift lessons?',
		answer:
			'Yes. Select “Gift Lesson” during checkout and enter recipient details. We send a shareable voucher link.',
		category: 'Coaches',
	},
	{
		id: 3,
		question: 'What is the cancellation policy?',
		answer:
			'Each coach sets their own policy. Policies are displayed on the booking page—typically 24–48hr notice for full refund.',
		category: 'Coaches',
	},
	{
		id: 4,
		question: 'Do coaches offer video lessons?',
		answer:
			'Many offer virtual sessions via Zoom or FaceTime. Filter by “virtual” to find remote coaching options.',
		category: 'Coaches',
	},
];

// SEO metadata with long-tail keywords
export const metadata: Metadata = {
	title: 'Book Pickleball Lessons | Find Top Coaches & Clinics Nearby | paddlX',
	description:
		'Discover and book private lessons, group clinics, and elite coaching programs. Compare coach metrics, read reviews, view availability, and secure your spot instantly with paddlX.',
	keywords: [
		'book pickleball lessons',
		'find pickleball coach near me',
		'private pickleball instruction',
		'group pickleball clinics',
		'top pickleball coaches',
		'pickleball coaching rates',
		'pickleball skill development',
		'learn pickleball strategy',
		'pickleball training app',
	],
	openGraph: {
		title: 'Browse & Book Pickleball Coaches | paddlX Lessons',
		description:
			'Instantly compare coach profiles, availability, prices, and reviews. Book private or group sessions securely online.',
		url: 'https://www.paddlx.com/lessons',
		type: 'website',
		images: [
			{
				url: '/og-lessons.jpg',
				width: 1200,
				height: 630,
				alt: 'Pickleball Coach Booking',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Find & Book Pickleball Coaches | paddlX',
		description:
			'Ready to improve your game? Browse top local coaches, view real-time availability, and book lessons instantly.',
		images: ['/twitter-lessons.jpg'],
	},
};

// JSON-LD structured data
const jsonLd = {
	'@context': 'https://schema.org',
	'@type': 'Service',
	'serviceType': 'Pickleball Coaching Service',
	'provider': { '@type': 'Organization', 'name': 'paddlX' },
	'description':
		'paddlX connects you with vetted pickleball coaches for private lessons and group clinics, offering secure online booking, ratings, and availability.',
	'name': 'paddlX Coach Finder',
	'areaServed': { '@type': 'Country', 'name': 'Global' },
};

export default function LessonsPage() {
	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>
			<div className="bg-white text-slate-800">
				{/* Hero */}
				<section className="bg-blue-50 py-24 text-center">
					<div className="container mx-auto px-6">
						<h1 className="text-4xl lg:text-6xl font-extrabold mb-4">
							Find & Book Your Perfect Pickleball Coach
						</h1>
						<p className="text-lg text-slate-600 mb-8 max-w-3xl mx-auto">
							Browse private lessons, group clinics, and elite training programs. View
							coach ratings, certifications, availability, and secure online booking
							instantly.
						</p>
						<Button
							asChild
							size="lg"
							className="bg-blue-600 hover:bg-blue-700 text-white py-4 px-8 rounded-full shadow-lg"
						>
							<Link href="/coaches">
								Browse Coaches
								<ArrowRight className="ml-2" />
							</Link>
						</Button>
					</div>
				</section>

				{/* How It Works */}
				<section className="py-20">
					<div className="container mx-auto px-6">
						<h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
						<div className="grid md:grid-cols-3 gap-8 text-center">
							<div>
								<Search className="w-12 h-12 text-blue-500 mx-auto mb-4" />
								<h3 className="text-xl font-bold mb-2">1. Search & Filter</h3>
								<p className="text-slate-600">
									Use location, skill level, price, and coach specialty filters to find
									the exact coach you need.
								</p>
							</div>
							<div>
								<UserPlus className="w-12 h-12 text-blue-500 mx-auto mb-4" />
								<h3 className="text-xl font-bold mb-2">2. Compare Profiles</h3>
								<p className="text-slate-600">
									View reviews, qualifications, match history, pricing, and real-time
									availability.
								</p>
							</div>
							<div>
								<CalendarCheck className="w-12 h-12 text-blue-500 mx-auto mb-4" />
								<h3 className="text-xl font-bold mb-2">3. Book & Play</h3>
								<p className="text-slate-600">
									Secure your lesson with instant booking and online payment. Get
									confirmation notifications immediately.
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* Lesson Types */}
				<section className="bg-slate-50 py-20">
					<div className="container mx-auto px-6">
						<h2 className="text-3xl font-bold text-center mb-8">Lesson Options</h2>
						<div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
							<div className="bg-white p-8 rounded-2xl border shadow">
								<User className="w-8 h-8 text-blue-600 mb-4" />
								<h3 className="text-2xl font-bold mb-3">Private Lessons</h3>
								<p className="text-slate-600 mb-4">
									One-on-one coaching tailored to your goals. Focus on technique,
									strategy, and personalized feedback.
								</p>
								<Link
									href="/coaches?type=private"
									className="font-bold text-blue-600 hover:underline flex items-center"
								>
									Explore Private Coaches
									<ArrowRight className="ml-2" />
								</Link>
							</div>
							<div className="bg-white p-8 rounded-2xl border shadow">
								<Users className="w-8 h-8 text-blue-600 mb-4" />
								<h3 className="text-2xl font-bold mb-3">Group Clinics</h3>
								<p className="text-slate-600 mb-4">
									Learn in a fun, social setting. Group sessions for skill-specific
									drills, strategy workshops, and match play.
								</p>
								<Link
									href="/clinics"
									className="font-bold text-blue-600 hover:underline flex items-center"
								>
									Find Group Clinics
									<ArrowRight className="ml-2" />
								</Link>
							</div>
						</div>
					</div>
				</section>

				{/* Coach Profiles Grid (sample) */}
				<section className="py-20">
					<div className="container mx-auto px-6">
						<h2 className="text-3xl font-bold text-center mb-12">Featured Coaches</h2>
						<div className="grid md:grid-cols-3 gap-8">
							{[
								{
									name: 'Alex Chen',
									rating: 4.9,
									lessons: 120,
									speciality: 'Technique & Footwork',
									rate: '$60/hr',
									location: 'New York, NY',
									avatar: '/alex.jpg',
								},
								{
									name: 'Maria Lopez',
									rating: 4.8,
									lessons: 85,
									speciality: 'Strategy & Match Play',
									rate: '$55/hr',
									location: 'Los Angeles, CA',
									avatar: '/maria.jpg',
								},
								{
									name: 'James Park',
									rating: 5.0,
									lessons: 200,
									speciality: 'Beginner to Advanced',
									rate: '$65/hr',
									location: 'Chicago, IL',
									avatar: '/james.jpg',
								},
							].map((coach, i) => (
								<div
									key={i}
									className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
								>
									<Image
										src={coach.avatar}
										alt={coach.name}
										width={80}
										height={80}
										className="rounded-full mx-auto mb-4"
									/>
									<h3 className="text-xl font-bold text-center">{coach.name}</h3>
									<div className="flex items-center justify-center gap-1 mb-2">
										<Star className="w-5 h-5 text-yellow-400" />
										{coach.rating}
									</div>
									<p className="text-slate-600 text-center mb-2">{coach.speciality}</p>
									<p className="text-slate-600 text-center mb-4">
										{coach.rate} • {coach.location}
									</p>
									<Button
										asChild
										size="sm"
										className="bg-blue-600 hover:bg-blue-700 text-white block mx-auto"
									>
										<Link href={`/coaches/${coach.name.toLowerCase().replace(' ', '-')}`}>
											View Profile
										</Link>
									</Button>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* Booking Tips & Best Practices */}
				<section className="bg-slate-50 py-20">
					<div className="container mx-auto px-6 max-w-4xl">
						<h2 className="text-3xl font-bold text-center mb-8">
							Booking Tips & Best Practices
						</h2>
						<ul className="list-disc pl-6 space-y-4 text-slate-600">
							<li>Check coach certifications and experience for your skill level.</li>
							<li>Read multiple player reviews to gauge teaching style.</li>
							<li>Book at least 48 hours in advance for popular coaches.</li>
							<li>Combine private and group lessons for comprehensive improvement.</li>
							<li>Cancel or reschedule 24+ hours before to avoid fees.</li>
						</ul>
					</div>
				</section>

				{/* Testimonial */}
				<section className="py-20 px-6">
					<div className="container mx-auto text-center">
						<div className="max-w-3xl mx-auto">
							<p className="text-2xl italic text-slate-700 mb-4">
								“Booking a coach on paddlX was seamless. I found someone who specialized
								in doubles strategy and saw results in just three sessions!”
							</p>
							<p className="font-bold">— Daniel K., 4.0 Player, Dallas, TX</p>
						</div>
					</div>
				</section>

				{/* FAQ */}
				<FAQSection
					faqs={faqQuestions}
					title="FAQ"
					subtitle="Find answers to common questions about lessons"
					colorScheme="blue"
				/>

				<DynamicCtaSection
					buttonHref="/join"
					buttonText="Browse Coaches Now"
					featureList={['Compare profiles', 'Book in seconds', 'Verified coaches']} // TODO: Add features
					title="Ready to Level Up?"
					subtitle="Find your ideal coach, book in seconds, and start improving your
							pickleball game today."
					buttonSubtext="Secure booking • Verified coaches • Easy cancellations"
					colorScheme="blue"
				/>
			</div>
		</>
	);
}
