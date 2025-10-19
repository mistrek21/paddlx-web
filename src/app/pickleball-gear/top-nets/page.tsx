// src/app/guides/pickleball-gear/top-nets/page.tsx

import { Metadata } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import {
	Award,
	DollarSign,
	Zap,
	Shield,
	CheckCircle,
	Users,
	TrendingUp,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import FAQSection, { FAQ } from '../../_components/faq/FaqSection';
import DynamicCtaSection from '../../_components/cta/DynamicCtaSection';

const netFaqs: FAQ[] = [
	{
		id: 1,
		question: 'What is the best portable pickleball net in 2025?',
		answer:
			'Top picks: Srikel FlashCourt (best overall value), OnCourt OffCourt PickleNet Deluxe (best premium portable), SwiftNet 2.1 (easiest setup), Selkirk Semi-Permanent Pro (best investment), and JOOLA Pro Net (best tournament-grade). Each excels in different categories.',
		category: 'Pickleball Nets',
	},
	{
		id: 2,
		question: 'How much should I spend on a pickleball net?',
		answer:
			'Budget: ₱2,500-₱5,600 ($50-$100) for basic portable nets. Mid-range: ₱11,200-₱28,000 ($200-$500) for quality portable nets. Premium: ₱28,000-₱56,000 ($500-$1,000+) for semi-permanent/tournament nets. Investment depends on frequency of use and desired quality.',
		category: 'Pickleball Nets',
	},
	{
		id: 3,
		question: 'What makes a good portable pickleball net?',
		answer:
			'Key features: Regulation size (22\' wide, 36" sides, 34" center), quick setup (under 10 minutes), stability (doesn\'t move when hit), lightweight for portability (17-50 lbs), durable materials (steel/aluminum frame, nylon net), and proper tension system to prevent sagging.',
		category: 'Pickleball Nets',
	},
	{
		id: 4,
		question: 'How long does it take to set up a portable pickleball net?',
		answer:
			'Quick-setup nets (SwiftNet 2.1, Srikel): 2-3 minutes. Standard portable nets (A11N, Fostoy): 5-10 minutes. Premium/wheeled nets (OnCourt OffCourt, JOOLA): 10-15 minutes. Semi-permanent nets (Selkirk Pro): 20-30 minutes first time, faster with practice.',
		category: 'Pickleball Nets',
	},
	{
		id: 5,
		question: 'Should I get a net with wheels?',
		answer:
			'Wheels are helpful if: you move the net frequently on hard surfaces, you have limited strength for lifting, or you use the net on a facility with multiple courts. Not necessary for: lightweight nets (under 25 lbs), driveways/streets where you lift net aside for cars, or single dedicated location.',
		category: 'Pickleball Nets',
	},
	{
		id: 6,
		question: "What's the difference between portable and permanent nets?",
		answer:
			'Portable nets: Easy setup/takedown, moveable, ₱5,600-₱56,000 ($100-$1,000), 17-135 lbs, good for temporary courts. Permanent nets: Anchored in concrete, immovable, ₱112,000+ ($2,000+), professional stability, requires installation, best for dedicated courts. Semi-permanent bridges the gap.',
		category: 'Pickleball Nets',
	},
	{
		id: 7,
		question: 'Are Amazon budget nets worth it?',
		answer:
			'Sub-₱5,600 ($100) nets work for: casual/beginner play, testing if you like pickleball, kids, or occasional backyard games. Drawbacks: sag easily, break faster (1 year lifespan), move in wind, flimsy materials. Investing ₱11,200-₱16,800 ($200-$300) gets significantly better quality and durability.',
		category: 'Pickleball Nets',
	},
	{
		id: 8,
		question: 'How heavy should a pickleball net be for outdoor use?',
		answer:
			"Lightweight (17-26 lbs): Easy to transport but may shift in wind. Requires sandbags/stakes. Mid-weight (40-50 lbs): Good stability without being too heavy. Easier to move than heavy options. Heavy-duty (100-135 lbs): Maximum stability, doesn't move in wind. Best for semi-permanent/facility use.",
		category: 'Pickleball Nets',
	},
	{
		id: 9,
		question: 'What is a center post and do I need one?',
		answer:
			'A center post holds the net at regulation 34" height in the middle, preventing sagging. Needed for: most portable nets, budget options, maintaining proper height. Not needed for: SwiftNet-style nets with tension cable systems, or premium nets with advanced tensioning. Downside: can rip nets over time.',
		category: 'Pickleball Nets',
	},
	{
		id: 10,
		question: 'How do I prevent my net from sagging?',
		answer:
			'Solutions: Use nets with tension strap systems (Velcro, ratchet straps), ensure center post is at proper height, tighten top cable regularly, use nets with anti-sag design (OnCourt OffCourt, SwiftNet), and avoid leaving net in rain/sun when not in use (weakens materials).',
		category: 'Pickleball Nets',
	},
];

export const metadata: Metadata = {
	title: 'Best Pickleball Nets 2025 | Complete Buying Guide',
	description:
		'Comprehensive guide to the best portable and permanent pickleball nets in 2025. Expert reviews, comparisons, and recommendations for all budgets and skill levels.',
	keywords: [
		'best pickleball nets 2025',
		'portable pickleball net',
		'pickleball net reviews',
		'OnCourt OffCourt PickleNet',
		'SwiftNet pickleball',
		'Selkirk pickleball net',
		'JOOLA pickleball net',
		'Srikel FlashCourt',
	],
	openGraph: {
		title: 'Best Pickleball Nets 2025 | Expert Reviews & Buying Guide',
		description:
			'Find the perfect pickleball net for your needs. Compare top-rated portable, semi-permanent, and budget options.',
		url: 'https://www.paddlx.com/guides/pickleball-gear/top-nets',
		type: 'website',
	},
};

const jsonLd = {
	'@context': 'https://schema.org',
	'@type': 'FAQPage',
	'mainEntity': netFaqs.map((faq) => ({
		'@type': 'Question',
		'name': faq.question,
		'acceptedAnswer': {
			'@type': 'Answer',
			'text': faq.answer,
		},
	})),
};

export default function TopNetsGuidePage() {
	return (
		<>
			<Head>
				<script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
			</Head>
			<div className="bg-white text-slate-800">
				{/* Hero Section */}
				<section className="relative bg-gradient-to-br from-green-50 to-teal-50 py-20 lg:py-32">
					<div className="container mx-auto px-6 text-center">
						<Shield className="w-16 h-16 mx-auto text-teal-600 mb-6" />
						<h1 className="text-4xl lg:text-6xl font-extrabold text-dark-slate mb-4 leading-tight">
							Best Pickleball Nets 2025
						</h1>
						<p className="text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto mb-8">
							Tested and reviewed: our comprehensive guide to the best portable,
							semi-permanent, and tournament-grade pickleball nets for every budget and
							playing situation.
						</p>
						<Button
							asChild
							size="lg"
							className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg shadow-teal-200 transition-transform hover:scale-105"
						>
							<Link href="/shop/nets">Shop Top-Rated Nets</Link>
						</Button>
					</div>
				</section>

				{/* Quick Comparison Chart */}
				<section className="py-20">
					<div className="container mx-auto px-6">
						<div className="text-center mb-12">
							<h2 className="text-3xl lg:text-4xl font-bold text-dark-slate">
								Top Picks at a Glance
							</h2>
							<p className="text-slate-500 mt-4 max-w-2xl mx-auto">
								Quick comparison of the best nets by category—find your perfect match.
							</p>
						</div>

						<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
							{/* Best Overall Value */}
							<div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl border-2 border-amber-300 shadow-md">
								<div className="flex items-center mb-4">
									<Award className="w-8 h-8 text-amber-600 mr-3" />
									<h3 className="text-xl font-bold">Best Overall Value</h3>
								</div>
								<p className="text-2xl font-extrabold text-dark-slate mb-2">
									Srikel FlashCourt
								</p>
								<p className="text-slate-600 text-sm mb-4">
									Incredible 2-minute setup, excellent playability, lightweight (26 lbs),
									great quality-to-price ratio. Perfect for recreational players.
								</p>
								<p className="text-amber-600 font-bold">~$200 (~₱11,200)</p>
							</div>

							{/* Best Premium Portable */}
							<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
								<div className="flex items-center mb-4">
									<Shield className="w-8 h-8 text-blue-600 mr-3" />
									<h3 className="text-xl font-bold">Best Premium Portable</h3>
								</div>
								<p className="text-2xl font-extrabold text-dark-slate mb-2">
									OnCourt OffCourt PickleNet Deluxe
								</p>
								<p className="text-slate-600 text-sm mb-4">
									Patented oval tubing, wheeled bases, club-level stability, anti-sag
									system. USAPA partner. Industry standard.
								</p>
								<p className="text-blue-600 font-bold">~$500 (~₱28,000)</p>
							</div>

							{/* Easiest Setup */}
							<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
								<div className="flex items-center mb-4">
									<Zap className="w-8 h-8 text-purple-600 mr-3" />
									<h3 className="text-xl font-bold">Easiest Setup</h3>
								</div>
								<p className="text-2xl font-extrabold text-dark-slate mb-2">
									SwiftNet 2.1
								</p>
								<p className="text-slate-600 text-sm mb-4">
									Revolutionary 2-3 minute setup, ultralight (17 lbs), no center post,
									carbon fiber/aluminum, plays like permanent net.
								</p>
								<p className="text-purple-600 font-bold">~$400 (~₱22,400)</p>
							</div>

							{/* Best Investment */}
							<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
								<div className="flex items-center mb-4">
									<TrendingUp className="w-8 h-8 text-green-600 mr-3" />
									<h3 className="text-xl font-bold">Best Long-Term Investment</h3>
								</div>
								<p className="text-2xl font-extrabold text-dark-slate mb-2">
									Selkirk Semi-Permanent Pro
								</p>
								<p className="text-slate-600 text-sm mb-4">
									Tournament-grade, closest to permanent without concrete. Weatherproof,
									10+ year lifespan. For serious players/facilities.
								</p>
								<p className="text-green-600 font-bold">~$2,700 (~₱151,200)</p>
							</div>

							{/* Best Tournament Net */}
							<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
								<div className="flex items-center mb-4">
									<Users className="w-8 h-8 text-indigo-600 mr-3" />
									<h3 className="text-xl font-bold">Best Tournament Net</h3>
								</div>
								<p className="text-2xl font-extrabold text-dark-slate mb-2">
									JOOLA Pro Pickleball Net
								</p>
								<p className="text-slate-600 text-sm mb-4">
									Heaviest (135 lbs), most stable, professional-grade steel,
									weatherproof. $500 less than Selkirk with similar quality.
								</p>
								<p className="text-indigo-600 font-bold">~$2,200 (~₱123,200)</p>
							</div>

							{/* Best Budget Option */}
							<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
								<div className="flex items-center mb-4">
									<DollarSign className="w-8 h-8 text-orange-600 mr-3" />
									<h3 className="text-xl font-bold">Best Budget Pick</h3>
								</div>
								<p className="text-2xl font-extrabold text-dark-slate mb-2">
									A11N 22ft Portable Net
								</p>
								<p className="text-slate-600 text-sm mb-4">
									Best value under $100. Quick setup, doesn't shift during play, balls
									roll under properly. Great for beginners.
								</p>
								<p className="text-orange-600 font-bold">~$100 (~₱5,600)</p>
							</div>
						</div>
					</div>
				</section>

				{/* Detailed Reviews */}
				<section className="bg-slate-50 py-20">
					<div className="container mx-auto px-6">
						<div className="text-center mb-16">
							<h2 className="text-3xl lg:text-4xl font-bold text-dark-slate">
								In-Depth Net Reviews
							</h2>
							<p className="text-slate-500 mt-4 max-w-2xl mx-auto">
								Detailed analysis based on hours of testing by players and experts.
							</p>
						</div>

						<div className="max-w-6xl mx-auto space-y-8">
							{/* Srikel FlashCourt */}
							<div className="bg-white p-8 rounded-2xl shadow-md border-2 border-amber-200">
								<div className="flex items-start justify-between mb-4">
									<div>
										<div className="flex items-center mb-2">
											<Award className="w-6 h-6 text-amber-600 mr-2" />
											<span className="text-sm font-bold text-amber-600 uppercase">
												Best Overall Value
											</span>
										</div>
										<h3 className="text-3xl font-bold text-dark-slate">
											Srikel FlashCourt Pickleball Net
										</h3>
									</div>
									<div className="text-right">
										<p className="text-2xl font-bold text-amber-600">$200</p>
										<p className="text-sm text-slate-500">~₱11,200</p>
									</div>
								</div>

								<div className="grid md:grid-cols-2 gap-6">
									<div>
										<h4 className="font-bold text-lg mb-3 text-green-700">Strengths</h4>
										<ul className="space-y-2">
											<li className="flex items-start text-sm">
												<CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
												<span>
													<strong>2-minute setup time</strong> — literally roll out and lock
													in place
												</span>
											</li>
											<li className="flex items-start text-sm">
												<CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
												<span>1 minute 24 seconds to take down (fastest tested)</span>
											</li>
											<li className="flex items-start text-sm">
												<CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
												<span>
													26 lbs — light enough to move, heavy enough for stability
												</span>
											</li>
											<li className="flex items-start text-sm">
												<CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
												<span>Excellent playability — tight net, no sagging</span>
											</li>
											<li className="flex items-start text-sm">
												<CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
												<span>Balls roll under net properly (not stuck)</span>
											</li>
											<li className="flex items-start text-sm">
												<CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
												<span>Quality materials feel premium for price</span>
											</li>
											<li className="flex items-start text-sm">
												<CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
												<span>Easy to move if car comes (street play)</span>
											</li>
											<li className="flex items-start text-sm">
												<CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
												<span>Discount codes available (often $25 off)</span>
											</li>
										</ul>
									</div>
									<div>
										<h4 className="font-bold text-lg mb-3 text-red-700">
											Considerations
										</h4>
										<ul className="space-y-2">
											<li className="flex items-start text-sm">
												<span className="text-red-600 mr-2">•</span>
												<span>
													Not available on Amazon (order from Srikel.com directly)
												</span>
											</li>
											<li className="flex items-start text-sm">
												<span className="text-red-600 mr-2">•</span>
												<span>May need sandbags/stakes in very windy conditions</span>
											</li>
											<li className="flex items-start text-sm">
												<span className="text-red-600 mr-2">•</span>
												<span>
													Slightly higher price than budget options (but worth it)
												</span>
											</li>
										</ul>
									</div>
								</div>

								<div className="mt-6 p-4 bg-amber-50 rounded-lg">
									<p className="text-sm">
										<strong>Best For:</strong> Recreational players, families,
										driveway/street play, anyone wanting quality without breaking the
										bank. The best "bang for buck" net in 2025 according to multiple
										independent reviewers.
									</p>
								</div>
							</div>

							{/* OnCourt OffCourt PickleNet Deluxe */}
							<div className="bg-white p-8 rounded-2xl shadow-md">
								<div className="flex items-start justify-between mb-4">
									<div>
										<div className="flex items-center mb-2">
											<Shield className="w-6 h-6 text-blue-600 mr-2" />
											<span className="text-sm font-bold text-blue-600 uppercase">
												Best Premium Portable
											</span>
										</div>
										<h3 className="text-3xl font-bold text-dark-slate">
											OnCourt OffCourt PickleNet Deluxe
										</h3>
									</div>
									<div className="text-right">
										<p className="text-2xl font-bold text-blue-600">$500</p>
										<p className="text-sm text-slate-500">~₱28,000</p>
									</div>
								</div>

								<div className="grid md:grid-cols-2 gap-6">
									<div>
										<h4 className="font-bold text-lg mb-3 text-green-700">Strengths</h4>
										<ul className="space-y-2">
											<li className="flex items-start text-sm">
												<CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
												<span>
													<strong>Patented 1.5"x3" oval tubing</strong> — twist-free, stays
													straight
												</span>
											</li>
											<li className="flex items-start text-sm">
												<CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
												<span>Extremely stable — club/facility level quality</span>
											</li>
											<li className="flex items-start text-sm">
												<CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
												<span>4" locking caster wheels on dual base units</span>
											</li>
											<li className="flex items-start text-sm">
												<CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
												<span>Anti-sag system: center base + 5 tension straps</span>
											</li>
											<li className="flex items-start text-sm">
												<CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
												<span>Hybrid aluminum/steel construction (42 lbs total)</span>
											</li>
											<li className="flex items-start text-sm">
												<CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
												<span>Wheeled 420D nylon carrying bag included</span>
											</li>
											<li className="flex items-start text-sm">
												<CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
												<span>Original USAPA partner — used by many clubs</span>
											</li>
											<li className="flex items-start text-sm">
												<CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
												<span>Near-permanent net feel when assembled</span>
											</li>
										</ul>
									</div>
									<div>
										<h4 className="font-bold text-lg mb-3 text-red-700">
											Considerations
										</h4>
										<ul className="space-y-2">
											<li className="flex items-start text-sm">
												<span className="text-red-600 mr-2">•</span>
												<span>10-15 minute setup time (multiple poles and pins)</span>
											</li>
											<li className="flex items-start text-sm">
												<span className="text-red-600 mr-2">•</span>
												<span>Bulkiest option — not ideal for solo quick games</span>
											</li>
											<li className="flex items-start text-sm">
												<span className="text-red-600 mr-2">•</span>
												<span>Premium price (~$500) — investment-level purchase</span>
											</li>
											<li className="flex items-start text-sm">
												<span className="text-red-600 mr-2">•</span>
												<span>Recommend indoor storage to prevent rust</span>
											</li>
										</ul>
									</div>
								</div>

								<div className="mt-6 p-4 bg-blue-50 rounded-lg">
									<p className="text-sm">
										<strong>Best For:</strong> Clubs, gyms, facilities, serious home
										courts, league organizers, or players wanting the most stable portable
										net available. Industry gold standard.
									</p>
								</div>
							</div>

							{/* SwiftNet 2.1 */}
							<div className="bg-white p-8 rounded-2xl shadow-md">
								<div className="flex items-start justify-between mb-4">
									<div>
										<div className="flex items-center mb-2">
											<Zap className="w-6 h-6 text-purple-600 mr-2" />
											<span className="text-sm font-bold text-purple-600 uppercase">
												Easiest Setup
											</span>
										</div>
										<h3 className="text-3xl font-bold text-dark-slate">
											SwiftNet 2.1 Portable Net
										</h3>
									</div>
									<div className="text-right">
										<p className="text-2xl font-bold text-purple-600">$400</p>
										<p className="text-sm text-slate-500">~₱22,400</p>
									</div>
								</div>

								<div className="grid md:grid-cols-2 gap-6">
									<div>
										<h4 className="font-bold text-lg mb-3 text-green-700">Strengths</h4>
										<ul className="space-y-2">
											<li className="flex items-start text-sm">
												<CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
												<span>
													<strong>Under 2-minute setup</strong> (1:47 seconds in testing)
												</span>
											</li>
											<li className="flex items-start text-sm">
												<CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
												<span>Only 17 lbs — lightest regulation net tested</span>
											</li>
											<li className="flex items-start text-sm">
												<CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
												<span>No center post — uses tension cable system</span>
											</li>
											<li className="flex items-start text-sm">
												<CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
												<span>Recycled carbon fiber brace + aluminum legs</span>
											</li>
											<li className="flex items-start text-sm">
												<CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
												<span>Plays like permanent net despite light weight</span>
											</li>
											<li className="flex items-start text-sm">
												<CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
												<span>Perfect for travel — fits in small carry bag</span>
											</li>
											<li className="flex items-start text-sm">
												<CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
												<span>Eco-friendly design (sustainability focus)</span>
											</li>
											<li className="flex items-start text-sm">
												<CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
												<span>
													Used by tournament organizers for quick court conversion
												</span>
											</li>
										</ul>
									</div>
									<div>
										<h4 className="font-bold text-lg mb-3 text-red-700">
											Considerations
										</h4>
										<ul className="space-y-2">
											<li className="flex items-start text-sm">
												<span className="text-red-600 mr-2">•</span>
												<span>Light weight means needs stakes/sandbags in wind</span>
											</li>
											<li className="flex items-start text-sm">
												<span className="text-red-600 mr-2">•</span>
												<span>Premium price for ultralight design (~$400)</span>
											</li>
											<li className="flex items-start text-sm">
												<span className="text-red-600 mr-2">•</span>
												<span>No wheels (but easy to carry at 17 lbs)</span>
											</li>
										</ul>
									</div>
								</div>

								<div className="mt-6 p-4 bg-purple-50 rounded-lg">
									<p className="text-sm">
										<strong>Best For:</strong> Players who set up/take down frequently,
										travelers, solo players, anyone prioritizing speed and portability.
										Favorite among tournament directors for temporary courts.
									</p>
								</div>
							</div>

							{/* Selkirk Semi-Permanent Pro */}
							<div className="bg-white p-8 rounded-2xl shadow-md">
								<div className="flex items-start justify-between mb-4">
									<div>
										<div className="flex items-center mb-2">
											<TrendingUp className="w-6 h-6 text-green-600 mr-2" />
											<span className="text-sm font-bold text-green-600 uppercase">
												Best Long-Term Investment
											</span>
										</div>
										<h3 className="text-3xl font-bold text-dark-slate">
											Selkirk Semi-Permanent Pro Net
										</h3>
									</div>
									<div className="text-right">
										<p className="text-2xl font-bold text-green-600">$2,700</p>
										<p className="text-sm text-slate-500">~₱151,200</p>
									</div>
								</div>

								<div className="grid md:grid-cols-2 gap-6">
									<div>
										<h4 className="font-bold text-lg mb-3 text-green-700">Strengths</h4>
										<ul className="space-y-2">
											<li className="flex items-start text-sm">
												<CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
												<span>
													<strong>Tournament-grade quality</strong> — used at professional
													events
												</span>
											</li>
											<li className="flex items-start text-sm">
												<CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
												<span>Closest thing to permanent net without concrete</span>
											</li>
											<li className="flex items-start text-sm">
												<CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
												<span>103 lbs — maximum stability, doesn't budge</span>
											</li>
											<li className="flex items-start text-sm">
												<CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
												<span>Weather-resistant — can stay up entire season</span>
											</li>
											<li className="flex items-start text-sm">
												<CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
												<span>10+ year lifespan with proper care</span>
											</li>
											<li className="flex items-start text-sm">
												<CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
												<span>
													Can be disassembled/moved when needed (unlike true permanent)
												</span>
											</li>
											<li className="flex items-start text-sm">
												<CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
												<span>Professional tension system — never sags</span>
											</li>
										</ul>
									</div>
									<div>
										<h4 className="font-bold text-lg mb-3 text-red-700">
											Considerations
										</h4>
										<ul className="space-y-2">
											<li className="flex items-start text-sm">
												<span className="text-red-600 mr-2">•</span>
												<span>Expensive ($2,700) — highest price on list</span>
											</li>
											<li className="flex items-start text-sm">
												<span className="text-red-600 mr-2">•</span>
												<span>Very heavy (103 lbs) — requires multiple people to move</span>
											</li>
											<li className="flex items-start text-sm">
												<span className="text-red-600 mr-2">•</span>
												<span>
													Not for frequent setup/takedown (possible but not practical)
												</span>
											</li>
											<li className="flex items-start text-sm">
												<span className="text-red-600 mr-2">•</span>
												<span>Overkill for casual/recreational players</span>
											</li>
										</ul>
									</div>
								</div>

								<div className="mt-6 p-4 bg-green-50 rounded-lg">
									<p className="text-sm">
										<strong>Best For:</strong> Facilities hosting tournaments, clubs with
										dedicated courts, serious players wanting permanent-net quality,
										venues needing weatherproof option that lasts 10+ years. The ultimate
										long-term investment.
									</p>
								</div>
							</div>

							{/* JOOLA Pro Net */}
							<div className="bg-white p-8 rounded-2xl shadow-md">
								<div className="flex items-start justify-between mb-4">
									<div>
										<div className="flex items-center mb-2">
											<Users className="w-6 h-6 text-indigo-600 mr-2" />
											<span className="text-sm font-bold text-indigo-600 uppercase">
												Best Tournament Net
											</span>
										</div>
										<h3 className="text-3xl font-bold text-dark-slate">
											JOOLA Pro Pickleball Net
										</h3>
									</div>
									<div className="text-right">
										<p className="text-2xl font-bold text-indigo-600">$2,200</p>
										<p className="text-sm text-slate-500">~₱123,200</p>
									</div>
								</div>

								<div className="grid md:grid-cols-2 gap-6">
									<div>
										<h4 className="font-bold text-lg mb-3 text-green-700">Strengths</h4>
										<ul className="space-y-2">
											<li className="flex items-start text-sm">
												<CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
												<span>
													<strong>Heaviest net tested (135.5 lbs)</strong> — absolute maximum
													stability
												</span>
											</li>
											<li className="flex items-start text-sm">
												<CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
												<span>
													Heavy-duty steel construction — feels like permanent net
												</span>
											</li>
											<li className="flex items-start text-sm">
												<CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
												<span>Used at Stanford pickleball, Hyatt tournaments</span>
											</li>
											<li className="flex items-start text-sm">
												<CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
												<span>Available with wheels for easier positioning</span>
											</li>
											<li className="flex items-start text-sm">
												<CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
												<span>$500 less than Selkirk with comparable quality</span>
											</li>
											<li className="flex items-start text-sm">
												<CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
												<span>Extremely durable — withstands all weather</span>
											</li>
											<li className="flex items-start text-sm">
												<CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
												<span>Best of both worlds: portability + permanence</span>
											</li>
										</ul>
									</div>
									<div>
										<h4 className="font-bold text-lg mb-3 text-red-700">
											Considerations
										</h4>
										<ul className="space-y-2">
											<li className="flex items-start text-sm">
												<span className="text-red-600 mr-2">•</span>
												<span>Heaviest option (135.5 lbs) — requires 2-3 people</span>
											</li>
											<li className="flex items-start text-sm">
												<span className="text-red-600 mr-2">•</span>
												<span>Premium price ($2,200) — investment purchase</span>
											</li>
											<li className="flex items-start text-sm">
												<span className="text-red-600 mr-2">•</span>
												<span>Not designed for frequent assembly/disassembly</span>
											</li>
										</ul>
									</div>
								</div>

								<div className="mt-6 p-4 bg-indigo-50 rounded-lg">
									<p className="text-sm">
										<strong>Best For:</strong> Tournament organizers, facilities wanting
										professional-grade equipment, clubs hosting competitive play. Best
										value in the tournament-grade category ($500 less than Selkirk).
									</p>
								</div>
							</div>

							{/* A11N Budget Pick */}
							<div className="bg-white p-8 rounded-2xl shadow-md">
								<div className="flex items-start justify-between mb-4">
									<div>
										<div className="flex items-center mb-2">
											<DollarSign className="w-6 h-6 text-orange-600 mr-2" />
											<span className="text-sm font-bold text-orange-600 uppercase">
												Best Budget Pick
											</span>
										</div>
										<h3 className="text-3xl font-bold text-dark-slate">
											A11N 22ft Portable Net System
										</h3>
									</div>
									<div className="text-right">
										<p className="text-2xl font-bold text-orange-600">$100</p>
										<p className="text-sm text-slate-500">~₱5,600</p>
									</div>
								</div>

								<div className="grid md:grid-cols-2 gap-6">
									<div>
										<h4 className="font-bold text-lg mb-3 text-green-700">Strengths</h4>
										<ul className="space-y-2">
											<li className="flex items-start text-sm">
												<CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
												<span>
													<strong>Best value under $100</strong> — amazing price-to-quality
													ratio
												</span>
											</li>
											<li className="flex items-start text-sm">
												<CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
												<span>Doesn't shift during play — stable for budget net</span>
											</li>
											<li className="flex items-start text-sm">
												<CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
												<span>Balls roll under properly (not stuck)</span>
											</li>
											<li className="flex items-start text-sm">
												<CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
												<span>Quick 5-10 minute setup — simple instructions</span>
											</li>
											<li className="flex items-start text-sm">
												<CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
												<span>More durable materials than other budget options</span>
											</li>
											<li className="flex items-start text-sm">
												<CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
												<span>Sturdy carrying bag included</span>
											</li>
											<li className="flex items-start text-sm">
												<CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
												<span>Easy to move from center post during play</span>
											</li>
										</ul>
									</div>
									<div>
										<h4 className="font-bold text-lg mb-3 text-red-700">
											Considerations
										</h4>
										<ul className="space-y-2">
											<li className="flex items-start text-sm">
												<span className="text-red-600 mr-2">•</span>
												<span>No wheels (but light enough to lift/move easily)</span>
											</li>
											<li className="flex items-start text-sm">
												<span className="text-red-600 mr-2">•</span>
												<span>
													Not as refined as $200+ options (but excellent for price)
												</span>
											</li>
											<li className="flex items-start text-sm">
												<span className="text-red-600 mr-2">•</span>
												<span>May need occasional net tightening</span>
											</li>
										</ul>
									</div>
								</div>

								<div className="mt-6 p-4 bg-orange-50 rounded-lg">
									<p className="text-sm">
										<strong>Best For:</strong> Beginners testing pickleball, families on a
										budget, occasional players, kids, or anyone wanting a functional net
										without significant investment. Best sub-$100 option by far.
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Buying Guide Section */}
				<section className="py-20">
					<div className="container mx-auto px-6">
						<div className="text-center mb-12">
							<h2 className="text-3xl lg:text-4xl font-bold text-dark-slate">
								How to Choose the Right Net
							</h2>
							<p className="text-slate-500 mt-4 max-w-2xl mx-auto">
								Key factors to consider when selecting your pickleball net.
							</p>
						</div>

						<div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
							<div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
								<h3 className="font-bold text-lg mb-3 flex items-center">
									<span className="bg-teal-100 text-teal-700 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">
										1
									</span>
									Regulation Size
								</h3>
								<p className="text-sm text-slate-600 ml-11">
									USAPA official dimensions: 22 feet wide, 36 inches at sidelines, 34
									inches at center. All nets in our guide meet these specs.
									Non-regulation nets may work for kids but affect adult gameplay.
								</p>
							</div>

							<div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
								<h3 className="font-bold text-lg mb-3 flex items-center">
									<span className="bg-teal-100 text-teal-700 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">
										2
									</span>
									Setup Time
								</h3>
								<p className="text-sm text-slate-600 ml-11">
									Quick setup (2-5 min): SwiftNet, Srikel. Standard (5-10 min): A11N,
									budget nets. Premium (10-15 min): OnCourt OffCourt, JOOLA. Consider how
									often you'll set up/take down.
								</p>
							</div>

							<div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
								<h3 className="font-bold text-lg mb-3 flex items-center">
									<span className="bg-teal-100 text-teal-700 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">
										3
									</span>
									Weight & Portability
								</h3>
								<p className="text-sm text-slate-600 ml-11">
									Ultra-light (17-26 lbs): Best for solo setup, travel. Mid-weight (40-50
									lbs): Good balance of stability and portability. Heavy-duty (100+ lbs):
									Maximum stability, facility use. Choose based on who's moving it and
									how often.
								</p>
							</div>

							<div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
								<h3 className="font-bold text-lg mb-3 flex items-center">
									<span className="bg-teal-100 text-teal-700 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">
										4
									</span>
									Stability
								</h3>
								<p className="text-sm text-slate-600 ml-11">
									Consider: frame material (steel aluminum), base design (dual bases
									single), weight distribution, and tension systems. For windy
									Philippines outdoor play, prioritize stability or use sandbags/stakes.
								</p>
							</div>

							<div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
								<h3 className="font-bold text-lg mb-3 flex items-center">
									<span className="bg-teal-100 text-teal-700 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">
										5
									</span>
									Budget
								</h3>
								<p className="text-sm text-slate-600 ml-11">
									Budget ($50-$100): A11N, Fostoy. Mid-range ($200-$500): Srikel,
									SwiftNet, OnCourt. Premium ($500-$1,000+): JOOLA, Selkirk. Don't go too
									cheap—invest at least ₱11,200 ($200) for quality that lasts.
								</p>
							</div>

							<div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
								<h3 className="font-bold text-lg mb-3 flex items-center">
									<span className="bg-teal-100 text-teal-700 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">
										6
									</span>
									Durability
								</h3>
								<p className="text-sm text-slate-600 ml-11">
									Look for: rust-resistant frames (powder-coated steel, aluminum),
									reinforced net edges, weather-resistant materials, quality tension
									systems. Budget nets last 1-2 years, mid-range 3-5 years, premium 10+
									years.
								</p>
							</div>

							<div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
								<h3 className="font-bold text-lg mb-3 flex items-center">
									<span className="bg-teal-100 text-teal-700 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">
										7
									</span>
									Special Features
								</h3>
								<p className="text-sm text-slate-600 ml-11">
									Wheels: Helpful for moving on hard surfaces (OnCourt, JOOLA). Center
									post: Common but can rip nets—SwiftNet eliminates this. Carrying bags:
									Essential for storage. Tension systems: Prevent sagging.
									Weather-resistance: Critical for outdoor permanent setup.
								</p>
							</div>

							<div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
								<h3 className="font-bold text-lg mb-3 flex items-center">
									<span className="bg-teal-100 text-teal-700 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">
										8
									</span>
									Use Case
								</h3>
								<p className="text-sm text-slate-600 ml-11">
									Driveway/street: Srikel, SwiftNet (quick setup, portable). Backyard:
									A11N, OnCourt (semi-permanent). Facility/club: JOOLA, Selkirk
									(tournament-grade). Travel: SwiftNet (17 lbs, compact). Kids: Budget
									nets work fine.
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* Comparison Table */}
				<section className="bg-slate-50 py-20">
					<div className="container mx-auto px-6">
						<div className="text-center mb-12">
							<h2 className="text-3xl lg:text-4xl font-bold text-dark-slate">
								Side-by-Side Comparison
							</h2>
							<p className="text-slate-500 mt-4 max-w-2xl mx-auto">
								Compare specs of all top nets at a glance.
							</p>
						</div>

						<div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
							<div className="overflow-x-auto">
								<table className="w-full text-sm">
									<thead className="bg-teal-600 text-white">
										<tr>
											<th className="px-4 py-3 text-left font-bold">Net</th>
											<th className="px-4 py-3 text-left font-bold">Price</th>
											<th className="px-4 py-3 text-left font-bold">Weight</th>
											<th className="px-4 py-3 text-left font-bold">Setup Time</th>
											<th className="px-4 py-3 text-left font-bold">Best For</th>
										</tr>
									</thead>
									<tbody className="divide-y divide-slate-200">
										<tr className="bg-amber-50">
											<td className="px-4 py-3 font-semibold">Srikel FlashCourt</td>
											<td className="px-4 py-3">$200</td>
											<td className="px-4 py-3">26 lbs</td>
											<td className="px-4 py-3">2 min</td>
											<td className="px-4 py-3">Best overall value</td>
										</tr>
										<tr>
											<td className="px-4 py-3 font-semibold">OnCourt OffCourt Deluxe</td>
											<td className="px-4 py-3">$500</td>
											<td className="px-4 py-3">42 lbs</td>
											<td className="px-4 py-3">10-15 min</td>
											<td className="px-4 py-3">Premium portable</td>
										</tr>
										<tr className="bg-slate-50">
											<td className="px-4 py-3 font-semibold">SwiftNet 2.1</td>
											<td className="px-4 py-3">$400</td>
											<td className="px-4 py-3">17 lbs</td>
											<td className="px-4 py-3">2-3 min</td>
											<td className="px-4 py-3">Easiest setup/travel</td>
										</tr>
										<tr>
											<td className="px-4 py-3 font-semibold">
												Selkirk Semi-Permanent Pro
											</td>
											<td className="px-4 py-3">$2,700</td>
											<td className="px-4 py-3">103 lbs</td>
											<td className="px-4 py-3">20-30 min</td>
											<td className="px-4 py-3">Tournament/facility</td>
										</tr>
										<tr className="bg-slate-50">
											<td className="px-4 py-3 font-semibold">JOOLA Pro Net</td>
											<td className="px-4 py-3">$2,200</td>
											<td className="px-4 py-3">135.5 lbs</td>
											<td className="px-4 py-3">20-30 min</td>
											<td className="px-4 py-3">Tournament-grade</td>
										</tr>
										<tr>
											<td className="px-4 py-3 font-semibold">A11N 22ft</td>
											<td className="px-4 py-3">$100</td>
											<td className="px-4 py-3">~25 lbs</td>
											<td className="px-4 py-3">5-10 min</td>
											<td className="px-4 py-3">Best budget</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</section>

				{/* FAQ Section */}
				<div id="faq">
					<FAQSection
						faqs={netFaqs}
						title="Net FAQs"
						subtitle="Common questions about choosing and using pickleball nets"
						colorScheme="primary"
					/>
				</div>

				{/* CTA Section */}
				<DynamicCtaSection
					buttonHref="/shop/nets"
					buttonText="Shop Pickleball Nets"
					featureList={[
						'Top-rated 2025 models',
						'Expert tested & reviewed',
						'All budgets & use cases',
					]}
					title="Ready to Set Up Your Court?"
					subtitle="Browse our curated selection of the best pickleball nets. From budget-friendly portable options to tournament-grade systems."
					colorScheme="teal"
				/>
			</div>
		</>
	);
}
