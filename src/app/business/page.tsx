// src/app/business/page.tsx

// src/app/business/page.tsx

import { Metadata } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import {
	Briefcase,
	DollarSign,
	ClipboardEdit,
	Trophy,
	ShieldCheck,
	ArrowRight,
	BarChart,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

// SEO Metadata
export const metadata: Metadata = {
	title: 'Start a Pickleball Business | Coaching & League Software | paddlX',
	description:
		'Turn your passion into a profession. paddlX provides all the tools to build a pickleball business: manage registrations, collect payments, run leagues, and host clinics.',
	keywords: [
		'start a pickleball business',
		'pickleball coaching software',
		'manage pickleball leagues',
		'run pickleball clinics',
		'pickleball payment processing',
		'pickleball event registration',
		'make money from pickleball',
	],
	openGraph: {
		title: 'Build Your Pickleball Business with paddlX',
		description:
			'Bring fun programming to your area and make money on the court with our all-in-one management software.',
		url: 'https://www.paddlx.com/business',
		type: 'website',
		images: [
			{
				url: '/og-image-business.jpg', // Replace with a professional image of a coach or organizer
				width: 1200,
				height: 630,
				alt: 'A pickleball coach running a successful clinic using paddlX',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'The All-in-One Platform to Build Your Pickleball Business | paddlX',
		description:
			'Tools for coaches, league runners, and entrepreneurs to manage registrations, payments, and players.',
		images: ['/twitter-image-business.jpg'], // Replace with a relevant Twitter image
	},
};

// JSON-LD Structured Data
const jsonLd = {
	'@context': 'https://schema.org',
	'@type': 'Service',
	'serviceType': 'Pickleball Business Management Software',
	'provider': {
		'@type': 'Organization',
		'name': 'paddlX',
	},
	'description':
		'An all-in-one platform for pickleball professionals to manage clinics, leagues, and events. Features include player registration, secure payment collection, scheduling, and waiver management.',
	'name': 'paddlX for Business',
	'offers': {
		'@type': 'Offer',
		'price': '0', // Starting price is free
		'priceCurrency': 'USD',
	},
};

export default function BusinessPage() {
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
							Turn Your Pickleball Passion into a Profession
						</h1>
						<p className="text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto mb-8">
							Bring fun programming to your area and make money on the court. We
							provide the software, you provide the passion.
						</p>
						<Button
							asChild
							size="lg"
							className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg shadow-green-200 transition-transform hover:scale-105"
						>
							<Link href="/join">Start Your Business for Free</Link>
						</Button>
					</div>
				</section>

				{/* "Who is this for?" Section */}
				<section className="py-20">
					<div className="container mx-auto px-6">
						<div className="text-center mb-16">
							<h2 className="text-3xl lg:text-4xl font-bold text-dark-slate">
								Built for Pickleball Entrepreneurs
							</h2>
						</div>
						<div className="grid md:grid-cols-3 gap-8 text-center">
							<div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
								<Briefcase className="w-10 h-10 mx-auto text-green-500 mb-4" />
								<h3 className="text-xl font-bold mb-2">Coaches</h3>
								<p className="text-slate-600">
									Scale your coaching with private lessons, group clinics, and drill
									sessions.
								</p>
							</div>
							<div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
								<Trophy className="w-10 h-10 mx-auto text-green-500 mb-4" />
								<h3 className="text-xl font-bold mb-2">Organizers</h3>
								<p className="text-slate-600">
									Run professional leagues, ladders, and tournaments with ease.
								</p>
							</div>
							<div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
								<BarChart className="w-10 h-10 mx-auto text-green-500 mb-4" />
								<h3 className="text-xl font-bold mb-2">Facility Managers</h3>
								<p className="text-slate-600">
									Maximize court usage with a full schedule of paid programming and
									events.
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* All-in-One Toolkit Section */}
				<section className="bg-slate-50 py-20">
					<div className="container mx-auto px-6">
						<div className="grid lg:grid-cols-2 gap-16 items-center">
							<div className="relative w-full h-96">
								<Image
									src="/pickleball-business-dashboard.jpg" // Replace with a screenshot of your business dashboard
									alt="paddlX business dashboard showing payments and registrations"
									layout="fill"
									objectFit="contain"
									className="rounded-lg"
								/>
							</div>
							<div>
								<h2 className="text-3xl lg:text-4xl font-bold text-dark-slate mb-6">
									Your All-in-One Business Toolkit
								</h2>
								<ul className="space-y-6">
									<li className="flex items-start">
										<ClipboardEdit className="text-green-600 w-8 h-8 mr-4 flex-shrink-0" />
										<div>
											<h4 className="font-bold text-lg">Custom Event Registration</h4>
											<p className="text-slate-600">
												Build beautiful registration pages for your clinics, leagues, and
												tournaments in minutes.
											</p>
										</div>
									</li>
									<li className="flex items-start">
										<DollarSign className="text-green-600 w-8 h-8 mr-4 flex-shrink-0" />
										<div>
											<h4 className="font-bold text-lg">Seamless Payment Collection</h4>
											<p className="text-slate-600">
												Accept credit card payments directly. Stop chasing cash and get
												automated payouts to your bank account.
											</p>
										</div>
									</li>
									<li className="flex items-start">
										<ShieldCheck className="text-green-600 w-8 h-8 mr-4 flex-shrink-0" />
										<div>
											<h4 className="font-bold text-lg">Digital Waiver Management</h4>
											<p className="text-slate-600">
												Protect your business by requiring participants to sign a digital
												liability waiver during registration.
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
								“paddlX transformed my side hustle into a real business. I went from
								managing 1 clinic a week via text message to running 5 sold-out clinics
								with waitlists. The payment and registration tools saved me over 10
								hours a week.”
							</p>
							<p className="mt-6 font-bold text-lg">
								- Emily Carter, Founder of Ace Pickleball Academy
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
						<div className="max-w-3xl mx-auto space-y-4">
							<details className="p-6 border bg-white border-slate-200 rounded-lg">
								<summary className="font-bold text-lg cursor-pointer">
									How much does it cost to use the business tools?
								</summary>
								<p className="text-slate-600 mt-2">
									It's free to create your business profile and set up events. We charge
									a small, transparent platform fee on each paid transaction. We only
									make money when you do.
								</p>
							</details>
							<details className="p-6 border bg-white border-slate-200 rounded-lg">
								<summary className="font-bold text-lg cursor-pointer">
									How do I get paid?
								</summary>
								<p className="text-slate-600 mt-2">
									We use Stripe, a global leader in online payments, to process all
									transactions securely. Payouts are automatically transferred to your
									connected bank account on a rolling basis.
								</p>
							</details>
							<details className="p-6 border bg-white border-slate-200 rounded-lg">
								<summary className="font-bold text-lg cursor-pointer">
									Can I offer free events as well?
								</summary>
								<p className="text-slate-600 mt-2">
									Absolutely! You can use our registration and management tools for your
									free events and community gatherings at no cost.
								</p>
							</details>
						</div>
					</div>
				</section>

				{/* Final CTA */}
				<section className="bg-green-600 text-white py-20">
					<div className="container mx-auto px-6 text-center">
						<h2 className="text-3xl lg:text-4xl font-bold mb-4">
							Ready to Build Your Pickleball Empire?
						</h2>
						<p className="text-green-100 text-lg mb-8 max-w-2xl mx-auto">
							Create your free business profile today and unlock the tools you need to
							grow.
						</p>
						<Button
							asChild
							size="lg"
							className="bg-white text-green-600 hover:bg-slate-100 font-bold py-4 px-8 rounded-full text-lg shadow-2xl transition-transform hover:scale-105"
						>
							<Link href="/join">
								Get Started Now <ArrowRight className="ml-2" />
							</Link>
						</Button>
					</div>
				</section>
			</div>
		</>
	);
}
