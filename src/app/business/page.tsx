// src/app/business/page.tsx

import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
	Briefcase,
	Trophy,
	BarChart3,
	ClipboardEdit,
	DollarSign,
	ShieldCheck,
	CalendarCheck,
	Send,
	Zap,
	Globe,
	TrendingUp,
	CreditCard,
	FileText,
	RefreshCw,
	CheckCircle2,
	Lock,
	ArrowRight,
	PieChart,
	ChartPie,
	Crown,
	Bell,
	Clock,
	UserPlus,
	User,
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
		category: 'Business',
	},
	{
		id: 2,
		question: 'Can I handle in-person payments?',
		answer:
			'Yes—accept on-site Cash App or QR-wallet via dynamic QR codes tied to events.',
		category: 'Business',
	},
	{
		id: 3,
		question: 'Are digital waivers legally binding?',
		answer:
			'Yes—paddlX waivers are configured to meet your jurisdiction’s eSignature regulations.',
		category: 'Business',
	},
	{
		id: 4,
		question: 'How does scheduling integrate?',
		answer:
			'Auto-sync events with Google Calendar or iCal. Notify members of schedule changes automatically.',
		category: 'Business',
	},
	{
		id: 5,
		question: 'Can I export data?',
		answer:
			'Export CSV or PDF for registrations, payments, attendance, and revenue reports with date filters.',
		category: 'Business',
	},
];

// SEO Metadata with expanded long-tail keywords & value propositions
export const metadata: Metadata = {
	title:
		'Launch & Scale Your Pickleball Business | Clinics, Leagues & Coaching Software | paddlX',
	description:
		'paddlX powers your pickleball coaching, clinics, leagues & facility management with registration, payments, digital waivers, scheduling, analytics, and marketing tools. Free to start, enterprise-grade as you grow.',
	keywords: [
		'pickleball business software',
		'launch pickleball clinic',
		'run pickleball leagues',
		'pickleball coaching platform',
		'digital waivers pickleball',
		'pickleball facility management',
		'pickleball registration software',
		'collect pickleball payments',
		'grow pickleball revenue',
		'pickleball event analytics',
		'pickleball business marketing',
		'membership management pickleball',
	],
	openGraph: {
		title: 'paddlX for Business: Clinics, Leagues & Coaching Management',
		description:
			'Manage registrations, secure payments, digital waivers, scheduling, marketing & analytics—designed for pickleball entrepreneurs.',
		url: 'https://www.paddlx.com/business',
		type: 'website',
		images: [
			{
				url: '/og-business-tools-expanded.jpg',
				width: 1200,
				height: 630,
				alt: 'paddlX Business Dashboard showing revenue and schedules',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Comprehensive Pickleball Business Platform | paddlX',
		description:
			'From booking clinics to running leagues, paddlX’s free business tools include registration, payments, waivers, scheduling, analytics, and marketing.',
		images: ['/twitter-business-expanded.jpg'],
	},
};

// JSON-LD structured data
const jsonLd = {
	'@context': 'https://schema.org',
	'@type': 'Service',
	'serviceType': 'Pickleball Business Management Software',
	'provider': { '@type': 'Organization', 'name': 'paddlX' },
	'description':
		'paddlX offers free and premium tools for pickleball coaches, league directors, and facility managers: event registration, secure payments, digital waivers, automated scheduling, customer insights, and marketing.',
	'name': 'paddlX Business Suite',
	'offers': { '@type': 'Offer', 'price': '0', 'priceCurrency': 'USD' },
};

export default function BusinessPage() {
	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>
			<div className="bg-white text-slate-800">
				{/* Hero */}
				<section className="relative bg-gradient-to-br from-green-50 to-green-100 py-24 lg:py-32 text-center overflow-hidden">
					<div className="container mx-auto px-6 relative z-10">
						<h1 className="text-4xl lg:text-6xl font-extrabold mb-4">
							Build & Scale Your Pickleball Empire
						</h1>
						<p className="text-lg text-slate-600 mb-8 max-w-3xl mx-auto">
							paddlX for Business combines registration, payments, digital waivers,
							scheduling, marketing & analytics—free to start, enterprise-grade as you
							grow.
						</p>
						<Button
							asChild
							size="lg"
							className="bg-green-600 hover:bg-green-700 text-white py-4 px-8 rounded-full shadow-lg"
						>
							<Link href="/join">
								Start Your Business Free
								<ArrowRight className="ml-2" />
							</Link>
						</Button>
						<div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-xl mx-auto">
							{[
								{ icon: UserPlus, label: '60s', sub: 'setup time' },
								{ icon: Crown, label: '50k+', sub: 'users' },
								{ icon: Zap, label: 'Instant', sub: 'automation' },
								{ icon: TrendingUp, label: '2x', sub: 'revenue growth' },
							].map(({ icon: Icon, label, sub }) => (
								<div key={sub} className="bg-white/80 backdrop-blur rounded-xl p-4">
									<Icon className="w-6 h-6 text-green-600 mx-auto mb-2" />
									<div className="text-xl font-bold">{label}</div>
									<div className="text-xs text-slate-500">{sub}</div>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* Target Audience */}
				<section className="py-20">
					<div className="container mx-auto px-6">
						<h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
							Tailored for Every Pickleball Pro
						</h2>
						<div className="grid md:grid-cols-3 gap-8">
							{[
								{
									icon: Briefcase,
									title: 'Coaches',
									desc:
										'Private lessons, group clinics, skill drills—automate bookings & payments.',
								},
								{
									icon: Trophy,
									title: 'League Directors',
									desc:
										'Run seasons, brackets & standings. Integrated scheduling & payments.',
								},
								{
									icon: User,
									title: 'Facility Managers',
									desc:
										'Maximize court usage—member dues, events calendar, occupancy analytics.',
								},
							].map(({ icon: Icon, title, desc }, i) => (
								<div
									key={i}
									className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition"
								>
									<Icon className="w-10 h-10 text-green-500 mx-auto mb-4" />
									<h3 className="text-xl font-bold mb-2">{title}</h3>
									<p className="text-slate-600">{desc}</p>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* Complete Toolkit */}
				<section className="bg-slate-50 py-20">
					<div className="container mx-auto px-6">
						<h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
							All-in-One Business Suite
						</h2>
						<div className="grid lg:grid-cols-2 gap-16 items-center">
							<div>
								<ul className="space-y-6">
									{[
										{
											icon: ClipboardEdit,
											title: 'Custom Registration Pages',
											desc:
												'Drag-and-drop form builder with waiver integration & discount codes.',
										},
										{
											icon: CreditCard,
											title: 'Secure Payments',
											desc:
												'Stripe & PayPal integration, subscriptions, coupons, and accounting exports.',
										},
										{
											icon: ShieldCheck,
											title: 'Digital Waivers',
											desc:
												'Custom liability and health forms signed at checkout—legally binding.',
										},
										{
											icon: CalendarCheck,
											title: 'Automated Scheduling',
											desc: 'Recurring classes, courts calendars, and conflict detection.',
										},
										{
											icon: FileText,
											title: 'Advanced Analytics',
											desc:
												'Revenue breakdown, attendance trends, lifetime value & retention charts.',
										},
										{
											icon: Send,
											title: 'Automated Notifications',
											desc:
												'Email/SMS/push for confirmations, reminders, cancellations & polls.',
										},
									].map(({ icon: Icon, title, desc }, i) => (
										<li key={i} className="flex items-start gap-4">
											<Icon className="w-8 h-8 text-green-600 mt-1" />
											<div>
												<h4 className="font-bold">{title}</h4>
												<p className="text-slate-600">{desc}</p>
											</div>
										</li>
									))}
								</ul>
							</div>
							<div className="relative w-full h-96">
								<Image
									src="/business-dashboard-expanded.jpg"
									alt="Expanded paddlX Business Dashboard"
									layout="fill"
									objectFit="contain"
									className="rounded-lg shadow-lg"
								/>
							</div>
						</div>
					</div>
				</section>

				{/* Advanced Services */}
				<section className="py-20">
					<div className="container mx-auto px-6">
						<h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
							Pro-Level Add-Ons
						</h2>
						<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
							{[
								{
									icon: Globe,
									title: 'Global Scaling',
									desc: 'Multi-currency, multi-language, and global tax compliance.',
								},
								{
									icon: Crown,
									title: 'White-Label Portal',
									desc:
										'Branded web and mobile experience for your brand’s look & feel.',
								},
								{
									icon: Zap,
									title: 'API & Integrations',
									desc:
										'Connect to CRMs, ERPs, email marketing, and court management systems.',
								},
								{
									icon: Clock,
									title: 'Priority Support',
									desc: '24/7 concierge onboarding and dedicated account manager.',
								},
							].map(({ icon: Icon, title, desc }, i) => (
								<div
									key={i}
									className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
								>
									<Icon className="w-8 h-8 text-green-600 mb-4" />
									<h3 className="font-bold mb-2">{title}</h3>
									<p className="text-slate-600 text-sm">{desc}</p>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* Case Studies */}
				<section className="py-20 bg-green-50 text-center">
					<h2 className="text-3xl lg:text-4xl font-bold mb-6">
						Success Stories That Inspire
					</h2>
					<div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
						{[
							{
								quote:
									'Within 3 months, our revenue doubled by adding subscriptions and early-bird pricing—paddlX analytics guided our strategy.',
								author: 'Anna Chen, Ace Pickleball Camps',
							},
							{
								quote:
									'Digital waivers and auto-reminders cut admin work by 60%. Our clinic attendance is 95% on time.',
								author: 'David Reyes, Manila Pickleball Coach',
							},
							{
								quote:
									'Using the white-label portal, our club’s branding improved member retention by 30%. Now members feel at home.',
								author: 'Mia Santos, BGC Court Manager',
							},
						].map(({ quote, author }, i) => (
							<blockquote
								key={i}
								className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition"
							>
								<p className="italic text-slate-700 mb-4">"{quote}"</p>
								<footer className="font-bold">{author}</footer>
							</blockquote>
						))}
					</div>
				</section>

				{/* FAQ */}
				<FAQSection
					faqs={faqQuestions}
					title="FAQ"
					subtitle="Find answers to common questions about running your business"
					colorScheme="green"
				/>

				<section className="bg-slate-50 py-20">
					<div className="container mx-auto px-6 max-w-4xl">
						<h2 className="text-3xl font-bold text-center mb-8">
							Everything You Need to Know
						</h2>
						{[
							{
								q: 'What are your fees?',
								a: 'Free to start. 2.9%+30¢ on transactions. Premium tiers for enterprises include white-label and advanced integrations.',
							},
							{
								q: 'Can I handle in-person payments?',
								a: 'Yes—accept on-site Cash App or QR-wallet via dynamic QR codes tied to events.',
							},
							{
								q: 'Are digital waivers legally binding?',
								a: 'Yes—paddlX waivers are configured to meet your jurisdiction’s eSignature regulations.',
							},
							{
								q: 'How does scheduling integrate?',
								a: 'Auto-sync events with Google Calendar or iCal. Notify members of schedule changes automatically.',
							},
							{
								q: 'Can I export data?',
								a: 'Export CSV or PDF for registrations, payments, attendance, and revenue reports with date filters.',
							},
						].map(({ q, a }, i) => (
							<details key={i} className="p-6 border rounded-lg mb-4 bg-white">
								<summary className="font-bold cursor-pointer">{q}</summary>
								<p className="mt-2 text-slate-600">{a}</p>
							</details>
						))}
					</div>
				</section>

				{/* Final CTA */}
				<DynamicCtaSection
					buttonHref="/join"
					buttonText="Get Started Free"
					featureList={[
						'Launch free',
						'scale fast',
						'grow your  business ',
						'grow sustainably',
					]}
					title="Ready to Accelerate Your Growth?"
					subtitle="Launch free, scale fast—paddlX provides the tools and insights to grow your pickleball business sustainably."
					buttonSubtext="No credit card required • Cancel anytime"
					colorScheme="green"
				/>
			</div>
		</>
	);
}
