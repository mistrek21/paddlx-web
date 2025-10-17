// src/app/payments/page.tsx

import { Metadata } from 'next';
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
	Globe,
	Smartphone,
	QrCode,
	Send,
	PieChart,
	CalendarCheck,
	UserCheck,
	ShieldCheck,
	TrendingUp,
	FileText,
	MessageCircle,
	Bell,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import FAQSection, { FAQ } from '../_components/faq/FaqSection';
import DynamicCtaSection from '../_components/cta/DynamicCtaSection';

const faqQuestions: FAQ[] = [
	{
		id: 1,
		question: 'Can I accept multiple payment methods in one event?',
		answer:
			'Yes. Attendees choose between Stripe card, PayPal, Cash App QR, or Paymongo. All flows are securely processed.',
		category: 'Payments',
	},
	{
		id: 2,
		question: 'How do refunds work?',
		answer:
			'Issue full or partial refunds in the dashboard. Stripe or PayPal automatically processes and notifies attendees.',
		category: 'Payments',
	},
	{
		id: 3,
		question: 'What are your platform fees?',
		answer:
			'We charge 1% platform fee on top of gateway fees (e.g., Stripe 2.9%+30¢, PayPal 2.99%+30¢). No monthly costs.',
		category: 'Payments',
	},
	{
		id: 4,
		question: 'Is my data secure?',
		answer:
			'All transactions occur via PCI Level 1 gateways. No card data touches our servers. We are GDPR and CCPA compliant.',
		category: 'Payments',
	},
	{
		id: 5,
		question: 'Can I download transaction reports?',
		answer:
			'Yes—export CSV or PDF for any date range, gateway, or event. Perfect for accounting and tax filings.',
		category: 'Payments',
	},
];

// SEO-friendly metadata
export const metadata: Metadata = {
	title:
		'All-in-One Pickleball Payments | Stripe, PayPal, Cash App & QR | paddlX',
	description:
		'Accept Stripe, PayPal, Cash App, Paymongo & universal QR code payments. Automated refunds, detailed reporting, and instant payouts for your pickleball games, clinics, and events.',
	keywords: [
		'collect pickleball payments',
		'pickleball payment processing',
		'stripe pickleball payments',
		'paypal pickleball registration',
		'cash app pickleball payments',
		'QR code payments pickleball',
		'pickleball event payments',
		'automated refunds pickleball',
		'pickleball revenue tracking',
		'secure pickleball payments',
	],
	openGraph: {
		title: 'Secure Multi-Method Pickleball Payments | paddlX',
		description:
			'Seamlessly integrate Stripe, PayPal, Cash App, Paymongo, and QR-wallets. Full dashboard, analytics, and automation—free to start.',
		url: 'https://www.paddlx.com/payments',
		type: 'website',
		images: [
			{
				url: '/og-payments-complete.jpg',
				width: 1200,
				height: 630,
				alt: 'paddlX Payments Dashboard',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Complete Pickleball Payments Solution | paddlX',
		description:
			'Enable Stripe, PayPal, Cash App, Paymongo & QR transactions for your pickleball events. Simplify finances and focus on the game.',
		images: ['/twitter-payments-complete.jpg'],
	},
};

// JSON-LD structured data
const jsonLd = {
	'@context': 'https://schema.org',
	'@type': 'Service',
	'serviceType': 'Event Payment Processing',
	'provider': { '@type': 'Organization', 'name': 'paddlX' },
	'description':
		'paddlX supports Stripe, PayPal, Cash App, Paymongo, and QR code wallets for secure payments. Features include auto-payouts, refunds, analytics, and compliance.',
	'name': 'paddlX Payments',
	'broker': [
		{ '@type': 'Organization', 'name': 'Stripe' },
		{ '@type': 'Organization', 'name': 'PayPal' },
		{ '@type': 'Organization', 'name': 'Cash App' },
		{ '@type': 'Organization', 'name': 'Paymongo' },
	],
};

export default function PaymentsPage() {
	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>
			<div className="bg-white text-slate-800">
				{/* Hero */}
				<section className="relative bg-gradient-to-br from-blue-50 to-violet-50 py-24 lg:py-32 text-center">
					<div className="container mx-auto px-6 relative z-10">
						<h1 className="text-4xl lg:text-6xl font-extrabold mb-4">
							The Ultimate Pickleball Payments Platform
						</h1>
						<p className="text-lg lg:text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
							Accept Stripe, PayPal, Cash App, Paymongo & universal QR-wallet payments.
							Automated payouts, detailed analytics, refunds, and 100% PCI
							compliance—all in one dashboard.
						</p>
						<Button
							asChild
							size="lg"
							className="bg-blue-600 hover:bg-blue-700 text-white py-4 px-8 rounded-full shadow-lg"
						>
							<Link href="/join">
								Enable Payments Free
								<ArrowRight className="ml-2" />
							</Link>
						</Button>
						<p className="mt-4 text-sm text-slate-500">
							Trusted by 50,000+ organizers. Powered by Stripe, PayPal, and more.
						</p>
						<div className="mt-10 grid grid-cols-3 md:grid-cols-6 gap-6 max-w-lg mx-auto">
							{[QrCode, CreditCard].map((Icon, i) => (
								<Icon key={i} className="w-10 h-10 text-blue-600 mx-auto" />
							))}
						</div>
					</div>
				</section>

				{/* Key Benefits */}
				<section className="py-20">
					<div className="container mx-auto px-6">
						<h2 className="text-3xl font-bold text-center mb-12">
							Why paddlX Payments?
						</h2>
						<div className="grid lg:grid-cols-3 gap-8">
							{[
								{
									icon: CheckCircle,
									title: '87% Fewer No-Shows',
									desc:
										'Players commit when they pay upfront. Automated reminders cut no-shows drastically.',
								},
								{
									icon: DollarSign,
									title: '99% Payment Collection',
									desc:
										'Integrated payment links and QR codes ensure you get paid—no more manual chase.',
								},
								{
									icon: TrendingUp,
									title: 'Real-Time Analytics',
									desc:
										'Dashboards show revenue by event, method, and date. Export CSV for accounting.',
								},
								{
									icon: RefreshCw,
									title: 'Auto-Refunds',
									desc:
										'Process full or partial refunds with one click. Refund window configurable.',
								},
								{
									icon: BarChart2,
									title: 'Detailed Reporting',
									desc:
										'Track sales, fees, and net payouts. Visualize trends and adjust pricing.',
								},
								{
									icon: ShieldCheck,
									title: 'Bank-Grade Security',
									desc:
										'PCI DSS Level 1 via Stripe, plus optional PayPal Secure checkout.',
								},
							].map(({ icon: Icon, title, desc }, i) => (
								<div
									key={i}
									className="bg-slate-50 p-6 rounded-2xl shadow hover:shadow-lg transition"
								>
									<Icon className="w-8 h-8 text-blue-600 mb-4" />
									<h3 className="font-bold text-lg mb-2">{title}</h3>
									<p className="text-slate-600">{desc}</p>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* Detailed Features */}
				<section className="bg-slate-100 py-20">
					<div className="container mx-auto px-6">
						<h2 className="text-3xl font-bold text-center mb-12">
							Comprehensive Feature Set
						</h2>
						<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
							{[
								{
									icon: CreditCard,
									title: 'Stripe Credit Cards',
									desc:
										'Global card acceptance. 2.9% + 30¢ per txn. 7-day auto-payout or custom schedule.',
								},
								{
									icon: Send,
									title: 'PayPal & Venmo',
									desc:
										'Instant PayPal checkout. Optionally accept Venmo via PayPal link.',
								},
								{
									icon: DollarSign,
									title: 'Cash App & Zelle',
									desc:
										'Share a QR code on-site for walk-up payments in Cash App or Zelle.',
								},
								{
									icon: DollarSign,
									title: 'Paymongo (PH)',
									desc:
										'Local payment methods—GCash, Maya, over-the-counter via 7-11 & banks.',
								},
								{
									icon: QrCode,
									title: 'Universal QR Wallets',
									desc:
										'Dynamic QR code generator for any wallet: Apple Pay, Google Pay, GrabPay.',
								},
								{
									icon: CalendarCheck,
									title: 'In-Registration Payments',
									desc: 'Embed payment step in event signup flow. No external links.',
								},
								{
									icon: Bell,
									title: 'Instant Notifications',
									desc:
										'Email, SMS & push receipts plus payment reminders for unpaid RSVPs.',
								},
								{
									icon: FileText,
									title: 'Invoicing & Receipts',
									desc: 'Automated invoices sent to participants. Download PDF or CSV.',
								},
								{
									icon: Globe,
									title: 'Multi-Currency Support',
									desc: 'Accept USD, PHP, EUR, GBP with automatic conversion rates.',
								},
								{
									icon: UserCheck,
									title: 'Attendee Reconciliation',
									desc:
										'Match payments to RSVPs; identify unpaid or duplicate registrations.',
								},
								{
									icon: Lock,
									title: 'PCI & GDPR Compliance',
									desc:
										'Sensitive data never stored on paddlX servers. Fully encrypted flows.',
								},
								{
									icon: RefreshCw,
									title: 'Automated Settlements',
									desc:
										'Choose daily, weekly, or manual settlement cycles. Fee transparency.',
								},
							].map(({ icon: Icon, title, desc }, i) => (
								<div
									key={i}
									className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
								>
									<Icon className="w-8 h-8 text-blue-600 mb-3" />
									<h3 className="font-bold mb-2">{title}</h3>
									<p className="text-slate-600 text-sm">{desc}</p>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* Setup Guide */}
				<section className="py-20">
					<div className="container mx-auto px-6">
						<h2 className="text-3xl font-bold text-center mb-12">
							Get Started in 3 Steps
						</h2>
						<div className="grid lg:grid-cols-2 gap-12 items-center">
							<ol className="space-y-8">
								{[
									{
										step: 'Connect Gateways',
										detail:
											'Instant integration with Stripe, PayPal, or Paymongo via API keys.',
									},
									{
										step: 'Configure Event Fees',
										detail:
											'Set price per player, group discounts, tax, and refund window.',
									},
									{
										step: 'Enable Checkout',
										detail:
											'Toggle “Require Payment” on any event—attendees pay to RSVP.',
									},
								].map(({ step, detail }, i) => (
									<li key={i} className="flex items-start gap-4">
										<div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl">
											{i + 1}
										</div>
										<div>
											<h4 className="font-bold text-lg">{step}</h4>
											<p className="text-slate-600">{detail}</p>
										</div>
									</li>
								))}
							</ol>
							<div className="relative w-full h-80 lg:h-96">
								<Image
									src="/payments-setup-demo.jpg"
									alt="Payments setup demo"
									layout="fill"
									objectFit="contain"
									className="rounded-lg shadow"
								/>
							</div>
						</div>
					</div>
				</section>

				{/* Case Studies */}
				<section className="py-20 bg-blue-50 text-center">
					<h2 className="text-3xl font-bold mb-8">Real Results, Real Organizers</h2>
					<div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
						{[
							{
								quote:
									'We moved all 50 members to Stripe payments. No-shows dropped by 90%, and payouts arrive automatically every Monday.',
								author: 'Laura M., Community Club Leader',
							},
							{
								quote:
									'Paymongo integration made event fees accessible for our PH players. 100% payment completion—no more manual collection.',
								author: 'Rico D., Manila Tournament Director',
							},
							{
								quote:
									'Adding PayPal & Cash App options boosted registrations by 25%—players loved having choice.',
								author: 'Anna S., Regional Clinic Organizer',
							},
						].map(({ quote, author }, i) => (
							<div
								key={i}
								className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition"
							>
								<p className="italic text-slate-700 mb-4">"{quote}"</p>
								<p className="font-bold">{author}</p>
							</div>
						))}
					</div>
				</section>

				{/* FAQ */}
				<FAQSection
					faqs={faqQuestions}
					title="FAQ"
					subtitle="Find answers to common questions about payments"
					colorScheme="blue"
				/>

				<DynamicCtaSection
					buttonHref="/join"
					buttonText="Enable Payments Now"
					featureList={[
						'Choose your payment methods',
						'Set fees',
						'Start accepting payments ',
					]}
					title="Ready to Simplify Your Finances?"
					subtitle="Choose your payment methods, set fees, and start accepting payments in minutes—all for free."
					// buttonSubtext="No credit card required • Cancel anytime"
					colorScheme="blue"
				/>
			</div>
		</>
	);
}
