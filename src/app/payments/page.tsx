// src/app/payments/page.tsx

// src/app/payments/page.tsx

import { Metadata } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import {
	CreditCard,
	DollarSign,
	Lock,
	CheckCircle,
	ArrowRight,
	BarChart2,
	RefreshCw,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

// SEO Metadata
export const metadata: Metadata = {
	title: 'Collect Pickleball Payments | Securely with Stripe | paddlX',
	description:
		'Simplify payments for your pickleball games, clinics, and events. Securely collect credit card payments with our Stripe-powered tool. Stop chasing cash and get paid instantly.',
	keywords: [
		'collect pickleball payments',
		'pickleball payment processing',
		'stripe for pickleball',
		'pickleball registration with payment',
		'pickleball clinic payment',
		'accept credit cards for pickleball',
		'pickleball event payment',
	],
	openGraph: {
		title: 'Simplify Pickleball Payments with paddlX',
		description:
			'Securely collect payments for your pickleball games and events using our Stripe-powered platform.',
		url: 'https://www.paddlx.com/payments',
		type: 'website',
		images: [
			{
				url: '/og-image-payments.jpg', // Replace with an image showing a simple payment screen
				width: 1200,
				height: 630,
				alt: 'Collecting a payment for a pickleball event on a smartphone.',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Secure & Simple Pickleball Payments | paddlX',
		description:
			'Ditch the cash and Venmo. Accept credit card payments for your events with our easy-to-use tool, powered by Stripe.',
		images: ['/twitter-image-payments.jpg'], // Replace with a relevant Twitter image
	},
};

// JSON-LD Structured Data
const jsonLd = {
	'@context': 'https://schema.org',
	'@type': 'Service',
	'serviceType': 'Payment Processing Service',
	'provider': {
		'@type': 'Organization',
		'name': 'paddlX',
	},
	'description':
		'A secure platform for pickleball organizers to collect payments for games, clinics, and events. Powered by Stripe for secure credit card processing and automated bank payouts.',
	'name': 'paddlX Payments',
	'broker': {
		'@type': 'Organization',
		'name': 'Stripe',
	},
};

export default function PaymentsPage() {
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
							Stop Chasing Payments. <br /> Get Paid Instantly.
						</h1>
						<p className="text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto mb-8">
							Simplify payments for your pickleball games and events. Our secure,
							Stripe-powered tool handles everything for you.
						</p>
						<Button
							asChild
							size="lg"
							className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg shadow-blue-200 transition-transform hover:scale-105"
						>
							<Link href="/join">Start Collecting Payments</Link>
						</Button>
						<p className="mt-4 text-sm text-slate-500">
							Powered by <span className="font-bold">Stripe</span> for bank-level
							security.
						</p>
					</div>
				</section>

				{/* "Say Goodbye To..." Section */}
				<section className="py-20">
					<div className="container mx-auto px-6">
						<div className="text-center mb-16">
							<h2 className="text-3xl lg:text-4xl font-bold text-dark-slate">
								The Modern Way to Manage Event Finances
							</h2>
							<p className="text-slate-500 mt-4 max-w-2xl mx-auto">
								Leave the hassle of manual payment collection behind.
							</p>
						</div>
						<div className="grid md:grid-cols-3 gap-8 text-center">
							<div className="p-8">
								<DollarSign
									className="w-10 h-10 mx-auto text-red-500 mb-4"
									strokeWidth={1.5}
								/>
								<h3 className="text-xl font-bold mb-2">No More Chasing Cash</h3>
								<p className="text-slate-600">
									Players pay with a credit card during registration, guaranteeing their
									spot and your payment.
								</p>
							</div>
							<div className="p-8">
								<BarChart2
									className="w-10 h-10 mx-auto text-red-500 mb-4"
									strokeWidth={1.5}
								/>
								<h3 className="text-xl font-bold mb-2">No More Manual Tracking</h3>
								<p className="text-slate-600">
									See who has paid and who hasn't in a simple dashboard. No more
									spreadsheets or checklists.
								</p>
							</div>
							<div className="p-8">
								<Lock
									className="w-10 h-10 mx-auto text-red-500 mb-4"
									strokeWidth={1.5}
								/>
								<h3 className="text-xl font-bold mb-2">No More Payment App Chaos</h3>
								<p className="text-slate-600">
									Offer a professional, secure payment experience instead of asking for
									Venmo or Zelle.
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* All-in-One Payments Section */}
				<section className="bg-slate-50 py-20">
					<div className="container mx-auto px-6">
						<div className="grid lg:grid-cols-2 gap-16 items-center">
							<div className="relative w-full h-96">
								<Image
									src="/secure-payment-form.jpg" // Replace with a mockup of your payment form
									alt="A secure payment form for a pickleball clinic on a laptop"
									layout="fill"
									objectFit="contain"
									className="rounded-lg"
								/>
							</div>
							<div>
								<h2 className="text-3xl lg:text-4xl font-bold text-dark-slate mb-6">
									A Professional & Secure Payment Platform
								</h2>
								<ul className="space-y-6">
									<li className="flex items-start">
										<CheckCircle className="text-blue-600 w-8 h-8 mr-4 flex-shrink-0" />
										<div>
											<h4 className="font-bold text-lg">Integrated with Registration</h4>
											<p className="text-slate-600">
												Payment is a seamless step in the sign-up process. Collect fees for
												clinics, leagues, and drop-in play upfront.
											</p>
										</div>
									</li>
									<li className="flex items-start">
										<RefreshCw className="text-blue-600 w-8 h-8 mr-4 flex-shrink-0" />
										<div>
											<h4 className="font-bold text-lg">Automated Payouts</h4>
											<p className="text-slate-600">
												Securely connect your bank account and receive your earnings
												automatically. No manual transfers needed.
											</p>
										</div>
									</li>
									<li className="flex items-start">
										<CreditCard className="text-blue-600 w-8 h-8 mr-4 flex-shrink-0" />
										<div>
											<h4 className="font-bold text-lg">Easy Refunds</h4>
											<p className="text-slate-600">
												Need to cancel an event or refund a player? Process full or partial
												refunds with just a few clicks from your dashboard.
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
								“Implementing paddlX Payments was the most professional upgrade I’ve
								made to my business. Player commitment is higher because they pay
								upfront, and my revenue is way easier to track. I’ll never go back to
								collecting cash at the court.”
							</p>
							<p className="mt-6 font-bold text-lg">
								- Carlos Rodriguez, Pickleball Coach & Organizer
							</p>
						</div>
					</div>
				</section>

				{/* FAQ Section */}
				<section className="bg-slate-50 py-20">
					<div className="container mx-auto px-6">
						<div className="text-center mb-12">
							<h2 className="text-3xl lg:text-4xl font-bold text-dark-slate">
								Your Payment Questions Answered
							</h2>
						</div>
						<div className="max-w-3xl mx-auto space-y-4">
							<details className="p-6 border bg-white border-slate-200 rounded-lg">
								<summary className="font-bold text-lg cursor-pointer">
									Is it safe to collect payments through paddlX?
								</summary>
								<p className="text-slate-600 mt-2">
									Yes. All transactions are processed by Stripe, a certified PCI Service
									Provider Level 1. This is the most stringent level of certification
									available in the payments industry. Your financial data and your
									players' data are fully encrypted and secure.
								</p>
							</details>
							<details className="p-6 border bg-white border-slate-200 rounded-lg">
								<summary className="font-bold text-lg cursor-pointer">
									What are the fees?
								</summary>
								<p className="text-slate-600 mt-2">
									We charge a small, transparent platform fee on top of the standard
									Stripe processing fees. There are no setup costs or monthly fees. You
									can choose to absorb this fee or pass it on to the player during
									checkout.
								</p>
							</details>
							<details className="p-6 border bg-white border-slate-200 rounded-lg">
								<summary className="font-bold text-lg cursor-pointer">
									Can I see reports of my earnings?
								</summary>
								<p className="text-slate-600 mt-2">
									Absolutely. Your business dashboard includes detailed financial
									reporting, allowing you to track revenue per event, view all
									transactions, and easily manage your finances.
								</p>
							</details>
						</div>
					</div>
				</section>

				{/* Final CTA */}
				<section className="bg-blue-600 text-white py-20">
					<div className="container mx-auto px-6 text-center">
						<h2 className="text-3xl lg:text-4xl font-bold mb-4">
							Focus on the Game, Not the Money
						</h2>
						<p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
							Create your free account and set up your first paid event in minutes.
						</p>
						<Button
							asChild
							size="lg"
							className="bg-white text-blue-600 hover:bg-slate-100 font-bold py-4 px-8 rounded-full text-lg shadow-2xl transition-transform hover:scale-105"
						>
							<Link href="/join">
								Get Started for Free <ArrowRight className="ml-2" />
							</Link>
						</Button>
					</div>
				</section>
			</div>
		</>
	);
}
