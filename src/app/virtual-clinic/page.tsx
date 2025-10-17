// src/app/virtual-clinic/page.tsx

import { Metadata } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import {
	Monitor,
	Award,
	Clock,
	Smartphone,
	CheckCircle,
	ArrowRight,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import FAQSection, { FAQ } from '../_components/faq/FaqSection';
import DynamicCtaSection from '../_components/cta/DynamicCtaSection';

const faqQuestions: FAQ[] = [
	{
		id: 1,
		question: 'Is the Virtual Clinic free?',
		answer:
			'Yes! Access to our entire library of virtual clinic videos is included with your free paddlX account. Our goal is to help more people learn and enjoy the sport.',
		category: 'Coaches',
	},
	{
		id: 2,
		question: 'Who is this clinic for?',
		answer:
			'The current curriculum is primarily designed for beginners and intermediate players (up to a 3.5 level) who want to build a strong foundation of fundamentals.',
		category: 'Coaches',
	},
	{
		id: 3,
		question: 'How often are new videos added?',
		answer:
			'We are constantly working with our pro instructors to develop new content. We aim to add new modules and advanced lessons regularly.',
		category: 'Coaches',
	},
	{
		id: 4,
		question: 'What is the cancellation policy?',
		answer:
			'Lessons are non-refundable. However, you can transfer your lesson to another date or time.',
		category: 'Coaches',
	},
];

// SEO Metadata
export const metadata: Metadata = {
	title:
		'Online Pickleball Virtual Clinic | Video Lessons from the Pros | paddlX',
	description:
		'Learn how to play pickleball from anywhere with our Virtual Clinic. Access a library of short, easy-to-follow video lessons taught by professional players. Master the fundamentals today!',
	keywords: [
		'learn pickleball online',
		'pickleball video lessons',
		'pickleball virtual clinic',
		'pickleball tips for beginners',
		'online pickleball coaching',
		'pickleball pro videos',
		'pickleball fundamentals',
	],
	openGraph: {
		title: 'paddlX Virtual Clinic: Learn Pickleball from the Pros Online',
		description:
			'A series of short, high-quality video lessons designed to take your pickleball game to the next level.',
		url: 'https://www.paddlx.com/virtual-clinic',
		type: 'website',
		images: [
			{
				url: '/og-image-virtual-clinic.jpg', // Replace with an image of a pro teaching on screen
				width: 1200,
				height: 630,
				alt: 'A professional pickleball coach giving a lesson on a laptop screen.',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Learn Pickleball Anytime, Anywhere | paddlX Virtual Clinic',
		description:
			'Unlock our library of video lessons from top pros and master the game at your own pace.',
		images: ['/twitter-image-virtual-clinic.jpg'], // Replace with a relevant Twitter image
	},
};

// JSON-LD Structured Data
const jsonLd = {
	'@context': 'https://schema.org',
	'@type': 'Course',
	'name': 'paddlX Pickleball Virtual Clinic',
	'description':
		'Learn how to play pickleball with a series of short, easy-to-follow video lessons taught by professional players.',
	'provider': {
		'@type': 'Organization',
		'name': 'paddlX',
	},
	'courseWork': [
		{ '@type': 'CourseInstance', 'name': 'Module 1: The Fundamentals' },
		{
			'@type': 'CourseInstance',
			'name': 'Module 2: Mastering the Serve & Return',
		},
		{
			'@type': 'CourseInstance',
			'name': 'Module 3: The All-Important Third Shot',
		},
		{ '@type': 'CourseInstance', 'name': 'Module 4: Winning at the Net' },
		{
			'@type': 'CourseInstance',
			'name': 'Module 5: Basic Strategy & Court Positioning',
		},
	],
};

export default function VirtualClinicPage() {
	return (
		<>
			<Head>
				<script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
			</Head>
			<div className="bg-white text-slate-800">
				{/* Hero Section */}
				<section className="relative bg-purple-50 py-20 lg:py-32">
					<div className="container mx-auto px-6 text-center">
						<h1 className="text-4xl lg:text-6xl font-extrabold text-dark-slate mb-4 leading-tight">
							Learn from the Best,
							<br /> Anywhere, Anytime.
						</h1>
						<p className="text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto mb-8">
							Our Virtual Clinic is a series of short, easy-to-follow video lessons
							taught by professional players. Master the fundamentals and level up your
							game today.
						</p>
						<Button
							asChild
							size="lg"
							className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg shadow-purple-200 transition-transform hover:scale-105"
						>
							<Link href="/join">Start Learning for Free</Link>
						</Button>
					</div>
				</section>

				{/* Features Section */}
				<section className="py-20">
					<div className="container mx-auto px-6">
						<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
							<div className="p-8">
								<Award className="w-12 h-12 mx-auto text-purple-500 mb-4" />
								<h3 className="text-xl font-bold mb-2">Learn from Pros</h3>
								<p className="text-slate-600">
									Get tips and techniques from top-level players and certified coaches.
								</p>
							</div>
							<div className="p-8">
								<Monitor className="w-12 h-12 mx-auto text-purple-500 mb-4" />
								<h3 className="text-xl font-bold mb-2">Bite-Sized Lessons</h3>
								<p className="text-slate-600">
									Each video is short and focused on a single skill, making it easy to
									learn.
								</p>
							</div>
							<div className="p-8">
								<Clock className="w-12 h-12 mx-auto text-purple-500 mb-4" />
								<h3 className="text-xl font-bold mb-2">At Your Own Pace</h3>
								<p className="text-slate-600">
									Watch and re-watch videos whenever you want, as many times as you need.
								</p>
							</div>
							<div className="p-8">
								<Smartphone className="w-12 h-12 mx-auto text-purple-500 mb-4" />
								<h3 className="text-xl font-bold mb-2">Accessible Anywhere</h3>
								<p className="text-slate-600">
									Access the full library of videos on your phone, tablet, or computer.
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* Clinic Curriculum Section */}
				<section className="bg-slate-50 py-20">
					<div className="container mx-auto px-6">
						<div className="text-center mb-16">
							<h2 className="text-3xl lg:text-4xl font-bold text-dark-slate">
								Clinic Curriculum
							</h2>
							<p className="text-slate-500 mt-4 max-w-2xl mx-auto">
								Our curriculum is designed to build your skills from the ground up,
								covering everything a new player needs to know.
							</p>
						</div>
						<div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
							<div className="bg-white p-6 rounded-lg border border-slate-200">
								<h3 className="text-xl font-bold mb-4">Module 1: The Fundamentals</h3>
								<ul className="space-y-3">
									<li className="flex items-center">
										<CheckCircle className="w-5 h-5 text-purple-500 mr-3" />
										<span>Choosing the Right Paddle</span>
									</li>
									<li className="flex items-center">
										<CheckCircle className="w-5 h-5 text-purple-500 mr-3" />
										<span>Proper Grip and Stance</span>
									</li>
									<li className="flex items-center">
										<CheckCircle className="w-5 h-5 text-purple-500 mr-3" />
										<span>Basic Court Positioning</span>
									</li>
								</ul>
							</div>
							<div className="bg-white p-6 rounded-lg border border-slate-200">
								<h3 className="text-xl font-bold mb-4">
									Module 2: Mastering the Serve & Return
								</h3>
								<ul className="space-y-3">
									<li className="flex items-center">
										<CheckCircle className="w-5 h-5 text-purple-500 mr-3" />
										<span>The Legal Underhand Serve</span>
									</li>
									<li className="flex items-center">
										<CheckCircle className="w-5 h-5 text-purple-500 mr-3" />
										<span>Aiming for Depth and Consistency</span>
									</li>
									<li className="flex items-center">
										<CheckCircle className="w-5 h-5 text-purple-500 mr-3" />
										<span>Hitting a Deep, Effective Return</span>
									</li>
								</ul>
							</div>
							<div className="bg-white p-6 rounded-lg border border-slate-200">
								<h3 className="text-xl font-bold mb-4">
									Module 3: The All-Important Third Shot
								</h3>
								<ul className="space-y-3">
									<li className="flex items-center">
										<CheckCircle className="w-5 h-5 text-purple-500 mr-3" />
										<span>Understanding the Third Shot Drop</span>
									</li>
									<li className="flex items-center">
										<CheckCircle className="w-5 h-5 text-purple-500 mr-3" />
										<span>When to Hit a Third Shot Drive</span>
									</li>
									<li className="flex items-center">
										<CheckCircle className="w-5 h-5 text-purple-500 mr-3" />
										<span>Drills to Practice Your Third Shot</span>
									</li>
								</ul>
							</div>
							<div className="bg-white p-6 rounded-lg border border-slate-200">
								<h3 className="text-xl font-bold mb-4">Module 4: Winning at the Net</h3>
								<ul className="space-y-3">
									<li className="flex items-center">
										<CheckCircle className="w-5 h-5 text-purple-500 mr-3" />
										<span>The Art of the Dink</span>
									</li>
									<li className="flex items-center">
										<CheckCircle className="w-5 h-5 text-purple-500 mr-3" />
										<span>Punch Volleys vs. Block Volleys</span>
									</li>
									<li className="flex items-center">
										<CheckCircle className="w-5 h-5 text-purple-500 mr-3" />
										<span>How to Attack from the Kitchen Line</span>
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
								“The Virtual Clinic was a game-changer for me. I was stuck at a 3.0
								level, and the videos on the third shot drop finally made it click. I
								could watch them on my lunch break and then practice on the court later.
								Highly recommend!”
							</p>
							<p className="mt-6 font-bold text-lg">- David Chen, paddlX User</p>
						</div>
					</div>
				</section>

				{/* FAQ Section */}
				<FAQSection
					faqs={faqQuestions}
					title="FAQ"
					subtitle="Find answers to common questions about lessons"
					colorScheme="purple"
				/>

				<DynamicCtaSection
					buttonHref="/join"
					buttonText="Watch Now for Free"
					featureList={['Completely Free', 'No Commitment', 'Cancel Anytime']}
					title="Ready to Transform Your Game?"
					subtitle="Unlock instant access to the complete Virtual Clinic and start learning
														from the best in the sport."
					// buttonSubtext="Secure booking • Verified coaches • Easy cancellations"
					colorScheme="purple"
				/>
			</div>
		</>
	);
}
