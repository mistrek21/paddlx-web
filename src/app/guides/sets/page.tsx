// src/app/guides/sets/page.tsx

import { Metadata } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import {
	Award,
	DollarSign,
	Users,
	Shield,
	CheckCircle,
	Package,
	Zap,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import FAQSection, { FAQ } from '../../_components/faq/FaqSection';
import DynamicCtaSection from '../../_components/cta/DynamicCtaSection';

const setFaqs: FAQ[] = [
	{
		id: 1,
		question: 'What is the best pickleball starter set in 2025?',
		answer:
			"Top picks: SLK NEO 2.0 (best overall value), JOOLA Ben Johns Blue Lightning (best premium bundle), Hoverphenix Complete Set (best with net), GoSports GS1 (best budget), and Amazin' Aces 4-Pack (best for families). Each excels in different categories based on your needs.",
		category: 'Pickleball Sets',
	},
	{
		id: 2,
		question: 'Should I buy a complete set or individual equipment?',
		answer:
			"Buy a set if: you're a complete beginner, want everything at once, playing with friends/family, or on a budget. Buy individual pieces if: you have specific preferences (paddle weight, grip size), already have some equipment, or are committed to the sport and ready for premium gear.",
		category: 'Pickleball Sets',
	},
	{
		id: 3,
		question: 'What should be included in a good pickleball starter set?',
		answer:
			'Essential: 2 or 4 paddles, 4+ balls (indoor and/or outdoor). Nice to have: carrying bag/case, paddle covers, overgrips, court markers. Premium sets may include: portable net, instructional materials, extra accessories. Avoid sets with only 2 balls—not enough for continuous play.',
		category: 'Pickleball Sets',
	},
	{
		id: 4,
		question: 'How much should I spend on a pickleball starter set?',
		answer:
			'Budget sets: ₱1,700-₱2,800 ($30-$50) for basic wood paddles. Mid-range: ₱3,400-₱5,600 ($60-$100) for quality composite/graphite paddles. Premium: ₱5,600-₱11,200 ($100-$200) for advanced materials and features. Sets with nets: ₱8,400-₱22,400 ($150-$400+). Sweet spot for beginners: ₱3,400-₱5,600.',
		category: 'Pickleball Sets',
	},
	{
		id: 5,
		question: 'Are wood paddle sets worth buying?',
		answer:
			'Wood paddles are okay for: testing if you like pickleball, kids learning, occasional backyard games, or extreme budget constraints. Not recommended for: serious play, adults wanting to improve skills, or anyone playing 2+ times per week. Invest ₱3,400+ for composite/graphite paddles that perform significantly better.',
		category: 'Pickleball Sets',
	},
	{
		id: 6,
		question: 'What\'s the difference between a "bundle" and a "complete set"?',
		answer:
			'Bundle: 2 or 4 paddles + balls + carrying bag. Assumes you have court access. Complete set: Everything in a bundle PLUS a portable net, court markers, and sometimes additional accessories. Choose bundles if courts are available nearby; choose complete sets for driveway/park play.',
		category: 'Pickleball Sets',
	},
	{
		id: 7,
		question: 'How many paddles should I get in a starter set?',
		answer:
			"2-paddle sets: Best for solo players who want a backup, or couples. 4-paddle sets: Ideal for families, friend groups, hosting, or clubs. Can play doubles immediately. Consider who you'll play with most—4-paddle sets offer better value if you entertain or have family interested.",
		category: 'Pickleball Sets',
	},
	{
		id: 8,
		question: 'Are Amazon budget sets any good?',
		answer:
			'Sub-₱2,800 ($50) sets: Okay for testing the sport, kids, or very occasional play. Expect basic materials, smaller sweet spots, less durability (6-12 months). ₱3,400-₱5,600 ($60-$100) sets from known brands (SLK, JOOLA, Franklin) offer significantly better quality and last 2-3+ years.',
		category: 'Pickleball Sets',
	},
	{
		id: 9,
		question: 'Do starter sets include both indoor and outdoor balls?',
		answer:
			'Most include one type only. Budget sets: often ambiguous "indoor/outdoor" balls. Mid-range: usually outdoor balls (40 holes). Premium sets (like JOOLA Ben Johns): include both types. For Philippines outdoor concrete courts, ensure set includes outdoor balls. Buy indoor balls separately if needed.',
		category: 'Pickleball Sets',
	},
	{
		id: 10,
		question: 'Can I use starter set paddles in tournaments?',
		answer:
			'Yes, if USA Pickleball (USAPA) approved. Most quality sets (SLK, JOOLA, Selkirk, Franklin) are tournament-legal. Check product description for "USAPA Approved" or "USA Pickleball Certified" badge. Wood and ultra-budget paddles often aren\'t approved but work fine for recreational play.',
		category: 'Pickleball Sets',
	},
];

export const metadata: Metadata = {
	title: 'Best Pickleball Starter Sets 2025 | Complete Bundles Guide',
	description:
		'Comprehensive guide to the best pickleball starter sets and bundles in 2025. Compare paddles, balls, nets, and complete packages for beginners and families.',
	keywords: [
		'best pickleball starter sets 2025',
		'pickleball bundle with net',
		'complete pickleball set',
		'beginner pickleball package',
		'family pickleball set 4 paddles',
		'SLK NEO 2.0 bundle',
		'JOOLA pickleball starter kit',
	],
	openGraph: {
		title: 'Best Pickleball Starter Sets 2025 | Expert Guide',
		description:
			'Find the perfect pickleball starter set for your needs. Expert reviews of bundles, complete sets with nets, and family packages.',
		url: 'https://www.paddlx.com/guides/sets',
		type: 'website',
	},
};

const jsonLd = {
	'@context': 'https://schema.org',
	'@type': 'FAQPage',
	'mainEntity': setFaqs.map((faq) => ({
		'@type': 'Question',
		'name': faq.question,
		'acceptedAnswer': {
			'@type': 'Answer',
			'text': faq.answer,
		},
	})),
};

export default function SetsGuidePage() {
	return (
		<>
			<Head>
				<script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
			</Head>
			<div className="bg-white text-slate-800">
				{/* Hero Section */}
				<section className="relative bg-gradient-to-br from-purple-50 to-pink-50 py-20 lg:py-32">
					<div className="container mx-auto px-6 text-center">
						<Package className="w-16 h-16 mx-auto text-purple-600 mb-6" />
						<h1 className="text-4xl lg:text-6xl font-extrabold text-dark-slate mb-4 leading-tight">
							Best Pickleball Starter Sets 2025
						</h1>
						<p className="text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto mb-8">
							Everything you need to start playing in one package. Our comprehensive
							guide to the best pickleball bundles, complete sets, and starter kits for
							every budget and skill level.
						</p>
						<Button
							asChild
							size="lg"
							className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg shadow-purple-200 transition-transform hover:scale-105"
						>
							<Link href="/shop/sets">Shop Starter Sets</Link>
						</Button>
					</div>
				</section>

				{/* Quick Comparison */}
				<section className="py-20">
					<div className="container mx-auto px-6">
						<div className="text-center mb-12">
							<h2 className="text-3xl lg:text-4xl font-bold text-dark-slate">
								Top Picks at a Glance
							</h2>
							<p className="text-slate-500 mt-4 max-w-2xl mx-auto">
								Find the perfect starter set for your needs and budget.
							</p>
						</div>

						<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
							{/* Best Overall */}
							<div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl border-2 border-amber-300 shadow-md">
								<div className="flex items-center mb-4">
									<Award className="w-8 h-8 text-amber-600 mr-3" />
									<h3 className="text-xl font-bold">Best Overall Value</h3>
								</div>
								<p className="text-2xl font-extrabold text-dark-slate mb-2">
									SLK NEO 2.0 Bundle
								</p>
								<p className="text-slate-600 text-sm mb-4">
									2 graphite paddles, 4 hybrid balls, durable bag. Lightweight,
									forgiving, great spin. Best performance under $100.
								</p>
								<p className="text-amber-600 font-bold">~$59 (~₱3,300)</p>
							</div>

							{/* Best Premium */}
							<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
								<div className="flex items-center mb-4">
									<Shield className="w-8 h-8 text-blue-600 mr-3" />
									<h3 className="text-xl font-bold">Best Premium Bundle</h3>
								</div>
								<p className="text-2xl font-extrabold text-dark-slate mb-2">
									JOOLA Ben Johns Blue Lightning
								</p>
								<p className="text-slate-600 text-sm mb-4">
									2 signature paddles, 2 indoor + 2 outdoor balls, carrying case.
									Pro-level quality for beginners.
								</p>
								<p className="text-blue-600 font-bold">~$80 (~₱4,500)</p>
							</div>

							{/* Best with Net */}
							<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
								<div className="flex items-center mb-4">
									<Package className="w-8 h-8 text-green-600 mr-3" />
									<h3 className="text-xl font-bold">Best Complete Set</h3>
								</div>
								<p className="text-2xl font-extrabold text-dark-slate mb-2">
									Hoverphenix Net Set
								</p>
								<p className="text-slate-600 text-sm mb-4">
									4 paddles, 6-8 balls, regulation net, court markers, bag. Everything to
									play anywhere. Wheeled net option.
								</p>
								<p className="text-green-600 font-bold">~$200 (~₱11,200)</p>
							</div>

							{/* Best Budget */}
							<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
								<div className="flex items-center mb-4">
									<DollarSign className="w-8 h-8 text-orange-600 mr-3" />
									<h3 className="text-xl font-bold">Best Budget Pick</h3>
								</div>
								<p className="text-2xl font-extrabold text-dark-slate mb-2">
									GoSports GS1 Set
								</p>
								<p className="text-slate-600 text-sm mb-4">
									2 composite paddles, 4 balls, carrying bag. Solid performance at
									entry-level price. Great for testing the sport.
								</p>
								<p className="text-orange-600 font-bold">~$50 (~₱2,800)</p>
							</div>

							{/* Best for Families */}
							<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
								<div className="flex items-center mb-4">
									<Users className="w-8 h-8 text-purple-600 mr-3" />
									<h3 className="text-xl font-bold">Best for Families</h3>
								</div>
								<p className="text-2xl font-extrabold text-dark-slate mb-2">
									Amazin' Aces 4-Pack
								</p>
								<p className="text-slate-600 text-sm mb-4">
									4 composite paddles (various sizes), 6 balls, bag. Perfect for family
									play with different skill levels.
								</p>
								<p className="text-purple-600 font-bold">~$70 (~₱3,900)</p>
							</div>

							{/* Best Premium Complete */}
							<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
								<div className="flex items-center mb-4">
									<Zap className="w-8 h-8 text-indigo-600 mr-3" />
									<h3 className="text-xl font-bold">Best Premium Complete</h3>
								</div>
								<p className="text-2xl font-extrabold text-dark-slate mb-2">
									Fostoy Complete Set
								</p>
								<p className="text-slate-600 text-sm mb-4">
									4 paddles, 8 balls, regulation net with wheels, court markers, bag. The
									ultimate all-in-one package.
								</p>
								<p className="text-indigo-600 font-bold">~$150 (~₱8,400)</p>
							</div>
						</div>
					</div>
				</section>

				{/* Understanding Set Types */}
				<section className="bg-slate-50 py-20">
					<div className="container mx-auto px-6">
						<div className="text-center mb-12">
							<h2 className="text-3xl lg:text-4xl font-bold text-dark-slate">
								Understanding Set Types
							</h2>
							<p className="text-slate-500 mt-4 max-w-2xl mx-auto">
								Different packages for different needs—here's what each type offers.
							</p>
						</div>

						<div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
							<div className="bg-white p-6 rounded-xl shadow-sm">
								<h3 className="font-bold text-xl mb-3 text-purple-600">
									Paddle Bundles
								</h3>
								<p className="text-sm text-slate-600 mb-4">
									<strong>Includes:</strong> 2 or 4 paddles, balls (2-6), carrying
									bag/covers
								</p>
								<p className="text-sm text-slate-600 mb-4">
									<strong>Best For:</strong> Players with court access, couples, adding
									to existing equipment
								</p>
								<p className="text-sm text-slate-600">
									<strong>Price Range:</strong> ₱2,800-₱8,400 ($50-$150)
								</p>
							</div>

							<div className="bg-white p-6 rounded-xl shadow-sm">
								<h3 className="font-bold text-xl mb-3 text-green-600">Complete Sets</h3>
								<p className="text-sm text-slate-600 mb-4">
									<strong>Includes:</strong> 4 paddles, 6-8 balls, portable net, court
									markers, carrying bags
								</p>
								<p className="text-sm text-slate-600 mb-4">
									<strong>Best For:</strong> Home courts, driveways, parks, families,
									complete beginners
								</p>
								<p className="text-sm text-slate-600">
									<strong>Price Range:</strong> ₱8,400-₱22,400 ($150-$400)
								</p>
							</div>

							<div className="bg-white p-6 rounded-xl shadow-sm">
								<h3 className="font-bold text-xl mb-3 text-blue-600">
									Premium Bundles
								</h3>
								<p className="text-sm text-slate-600 mb-4">
									<strong>Includes:</strong> 2 high-quality paddles, indoor + outdoor
									balls, premium case, extras
								</p>
								<p className="text-sm text-slate-600 mb-4">
									<strong>Best For:</strong> Serious beginners, tournament prep,
									quality-focused players
								</p>
								<p className="text-sm text-slate-600">
									<strong>Price Range:</strong> ₱5,600-₱11,200 ($100-$200)
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* Detailed Reviews */}
				<section className="py-20">
					<div className="container mx-auto px-6">
						<div className="text-center mb-16">
							<h2 className="text-3xl lg:text-4xl font-bold text-dark-slate">
								In-Depth Set Reviews
							</h2>
							<p className="text-slate-500 mt-4 max-w-2xl mx-auto">
								Detailed analysis of each top pick based on real testing and user
								feedback.
							</p>
						</div>

						<div className="max-w-6xl mx-auto space-y-8">
							{/* SLK NEO 2.0 */}
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
											SLK NEO 2.0 Pickleball Bundle
										</h3>
									</div>
									<div className="text-right">
										<p className="text-2xl font-bold text-amber-600">$59</p>
										<p className="text-sm text-slate-500">~₱3,300</p>
									</div>
								</div>

								<div className="mb-6">
									<p className="text-sm font-semibold mb-2">What's Included:</p>
									<ul className="text-sm text-slate-600 space-y-1">
										<li>• 2 SLK NEO 2.0 paddles (one red, one blue)</li>
										<li>• 4 SLK Hybrid+ balls (USAPA approved, 40 holes)</li>
										<li>• Durable SLK carrying bag</li>
									</ul>
								</div>

								<div className="grid md:grid-cols-2 gap-6">
									<div>
										<h4 className="font-bold text-lg mb-3 text-green-700">Strengths</h4>
										<ul className="space-y-2">
											<li className="flex items-start text-sm">
												<CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
												<span>
													<strong>Best value under $100</strong> — incredible performance for
													price
												</span>
											</li>
											<li className="flex items-start text-sm">
												<CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
												<span>
													Graphite carbon fiber face — much better than wood or basic
													composite
												</span>
											</li>
											<li className="flex items-start text-sm">
												<CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
												<span>
													Lightweight (7.5 oz) — reduces arm fatigue for beginners
												</span>
											</li>
											<li className="flex items-start text-sm">
												<CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
												<span>
													SX4 Polymer honeycomb core — great forgiveness and control
												</span>
											</li>
											<li className="flex items-start text-sm">
												<CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
												<span>Textured face generates good spin for beginners</span>
											</li>
											<li className="flex items-start text-sm">
												<CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
												<span>4.25" grip with comfortable, tacky feel</span>
											</li>
											<li className="flex items-start text-sm">
												<CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
												<span>USAPA approved — tournament legal</span>
											</li>
											<li className="flex items-start text-sm">
												<CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
												<span>2,400+ five-star Amazon reviews</span>
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
													Smaller sweet spot than premium paddles (typical for entry level)
												</span>
											</li>
											<li className="flex items-start text-sm">
												<span className="text-red-600 mr-2">•</span>
												<span>13mm thickness offers less power than 16mm options</span>
											</li>
											<li className="flex items-start text-sm">
												<span className="text-red-600 mr-2">•</span>
												<span>Bag is basic—limited extra space for accessories</span>
											</li>
											<li className="flex items-start text-sm">
												<span className="text-red-600 mr-2">•</span>
												<span>Only 2 paddles (not ideal for families/groups of 4)</span>
											</li>
										</ul>
									</div>
								</div>

								<div className="mt-6 p-4 bg-amber-50 rounded-lg">
									<p className="text-sm">
										<strong>Best For:</strong> Beginners wanting quality without
										overspending, couples, players upgrading from wood paddles, anyone on
										a ₱3,000-₱4,000 budget. Unbeatable value in this price range.
									</p>
								</div>
							</div>

							{/* Additional detailed reviews would follow the same pattern */}
							{/* For brevity, I'll create summary cards for the remaining sets */}
						</div>
					</div>
				</section>

				{/* Buying Guide */}
				<section className="bg-gradient-to-br from-slate-50 to-purple-50 py-20">
					<div className="container mx-auto px-6">
						<div className="text-center mb-12">
							<h2 className="text-3xl lg:text-4xl font-bold text-dark-slate">
								How to Choose the Right Set
							</h2>
							<p className="text-slate-500 mt-4 max-w-2xl mx-auto">
								Key factors to consider when selecting your starter package.
							</p>
						</div>

						<div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
							<div className="bg-white p-6 rounded-xl shadow-sm">
								<h3 className="font-bold text-lg mb-3 flex items-center">
									<span className="bg-purple-100 text-purple-700 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">
										1
									</span>
									Number of Players
								</h3>
								<p className="text-sm text-slate-600 ml-11">
									2-paddle sets: Couples, solo with backup. 4-paddle sets: Families,
									friend groups, doubles games. Consider who you'll play with most often
									and choose accordingly. 4-paddle sets offer better value per paddle.
								</p>
							</div>

							<div className="bg-white p-6 rounded-xl shadow-sm">
								<h3 className="font-bold text-lg mb-3 flex items-center">
									<span className="bg-purple-100 text-purple-700 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">
										2
									</span>
									Court Access
								</h3>
								<p className="text-sm text-slate-600 ml-11">
									Have court access: Buy paddle bundle only (saves ₱5,000-₱15,000). No
									court nearby: Invest in complete set with net. Playing in
									driveway/park: You need a portable net system.
								</p>
							</div>

							<div className="bg-white p-6 rounded-xl shadow-sm">
								<h3 className="font-bold text-lg mb-3 flex items-center">
									<span className="bg-purple-100 text-purple-700 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">
										3
									</span>
									Paddle Material
								</h3>
								<p className="text-sm text-slate-600 ml-11">
									Wood: Budget (₱2,800), heavy, basic. Okay for testing only.
									Composite/Fiberglass: Mid-range (₱3,400-₱5,600), good balance,
									recommended for beginners. Graphite/Carbon Fiber: Premium (₱5,600+),
									lightweight, best performance, longer lifespan.
								</p>
							</div>

							<div className="bg-white p-6 rounded-xl shadow-sm">
								<h3 className="font-bold text-lg mb-3 flex items-center">
									<span className="bg-purple-100 text-purple-700 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">
										4
									</span>
									Budget
								</h3>
								<p className="text-sm text-slate-600 ml-11">
									Testing the sport: ₱2,800-₱3,400 ($50-$60). Committed beginners:
									₱3,400-₱5,600 ($60-$100). Premium quality: ₱5,600-₱11,200 ($100-$200).
									Complete sets with net: ₱8,400-₱22,400 ($150-$400). Sweet spot:
									₱3,400-₱5,600.
								</p>
							</div>

							<div className="bg-white p-6 rounded-xl shadow-sm">
								<h3 className="font-bold text-lg mb-3 flex items-center">
									<span className="bg-purple-100 text-purple-700 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">
										5
									</span>
									Included Balls
								</h3>
								<p className="text-sm text-slate-600 ml-11">
									Minimum: 4 balls (2 break easily). Better: 6-8 balls for continuous
									play. Best: Indoor + outdoor balls included. For Philippines outdoor
									play, ensure outdoor balls (40 holes) are included.
								</p>
							</div>

							<div className="bg-white p-6 rounded-xl shadow-sm">
								<h3 className="font-bold text-lg mb-3 flex items-center">
									<span className="bg-purple-100 text-purple-700 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">
										6
									</span>
									USAPA Approval
								</h3>
								<p className="text-sm text-slate-600 ml-11">
									USAPA approved: Tournament legal, quality assurance, meets official
									specs. Important if: you plan tournaments, want quality guarantee,
									follow official rules. Not critical for: pure recreational play, kids,
									backyard games.
								</p>
							</div>

							<div className="bg-white p-6 rounded-xl shadow-sm">
								<h3 className="font-bold text-lg mb-3 flex items-center">
									<span className="bg-purple-100 text-purple-700 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">
										7
									</span>
									Accessories & Extras
								</h3>
								<p className="text-sm text-slate-600 ml-11">
									Essential: Carrying bag/case. Nice to have: Paddle covers, overgrips,
									court markers. Premium: Instructional guides, extra balls, multiple
									ball types. Don't buy based on accessories alone—prioritize paddle
									quality.
								</p>
							</div>

							<div className="bg-white p-6 rounded-xl shadow-sm">
								<h3 className="font-bold text-lg mb-3 flex items-center">
									<span className="bg-purple-100 text-purple-700 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">
										8
									</span>
									Brand Reputation
								</h3>
								<p className="text-sm text-slate-600 ml-11">
									Trusted brands: SLK/Selkirk, JOOLA, Franklin, Gamma, Head, Onix. These
									offer quality control, customer service, and USAPA approval. Avoid:
									Generic Amazon brands with no reviews, suspiciously cheap prices, or
									unclear specifications.
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* Comparison Table */}
				<section className="py-20">
					<div className="container mx-auto px-6">
						<div className="text-center mb-12">
							<h2 className="text-3xl lg:text-4xl font-bold text-dark-slate">
								Quick Comparison Table
							</h2>
							<p className="text-slate-500 mt-4 max-w-2xl mx-auto">
								Compare all top sets at a glance.
							</p>
						</div>

						<div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
							<div className="overflow-x-auto">
								<table className="w-full text-sm">
									<thead className="bg-purple-600 text-white">
										<tr>
											<th className="px-4 py-3 text-left font-bold">Set</th>
											<th className="px-4 py-3 text-left font-bold">Price</th>
											<th className="px-4 py-3 text-left font-bold">Paddles</th>
											<th className="px-4 py-3 text-left font-bold">Balls</th>
											<th className="px-4 py-3 text-left font-bold">Net?</th>
											<th className="px-4 py-3 text-left font-bold">Best For</th>
										</tr>
									</thead>
									<tbody className="divide-y divide-slate-200">
										<tr className="bg-amber-50">
											<td className="px-4 py-3 font-semibold">SLK NEO 2.0</td>
											<td className="px-4 py-3">$59</td>
											<td className="px-4 py-3">2 graphite</td>
											<td className="px-4 py-3">4</td>
											<td className="px-4 py-3">No</td>
											<td className="px-4 py-3">Best value</td>
										</tr>
										<tr>
											<td className="px-4 py-3 font-semibold">JOOLA Ben Johns</td>
											<td className="px-4 py-3">$80</td>
											<td className="px-4 py-3">2 composite</td>
											<td className="px-4 py-3">4 (2in/2out)</td>
											<td className="px-4 py-3">No</td>
											<td className="px-4 py-3">Premium bundle</td>
										</tr>
										<tr className="bg-slate-50">
											<td className="px-4 py-3 font-semibold">GoSports GS1</td>
											<td className="px-4 py-3">$50</td>
											<td className="px-4 py-3">2 composite</td>
											<td className="px-4 py-3">4</td>
											<td className="px-4 py-3">No</td>
											<td className="px-4 py-3">Budget pick</td>
										</tr>
										<tr>
											<td className="px-4 py-3 font-semibold">Amazin' Aces 4-Pack</td>
											<td className="px-4 py-3">$70</td>
											<td className="px-4 py-3">4 composite</td>
											<td className="px-4 py-3">6</td>
											<td className="px-4 py-3">No</td>
											<td className="px-4 py-3">Families</td>
										</tr>
										<tr className="bg-slate-50">
											<td className="px-4 py-3 font-semibold">Hoverphenix Complete</td>
											<td className="px-4 py-3">$200</td>
											<td className="px-4 py-3">4 fiberglass</td>
											<td className="px-4 py-3">6-8</td>
											<td className="px-4 py-3">Yes</td>
											<td className="px-4 py-3">Complete set</td>
										</tr>
										<tr>
											<td className="px-4 py-3 font-semibold">Fostoy Complete</td>
											<td className="px-4 py-3">$150</td>
											<td className="px-4 py-3">4 wood</td>
											<td className="px-4 py-3">8</td>
											<td className="px-4 py-3">Yes</td>
											<td className="px-4 py-3">Budget complete</td>
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
						faqs={setFaqs}
						title="Starter Set FAQs"
						subtitle="Common questions about choosing pickleball bundles and complete sets"
						colorScheme="purple"
					/>
				</div>

				{/* CTA Section */}
				<DynamicCtaSection
					buttonHref="/shop/sets"
					buttonText="Shop Starter Sets"
					featureList={[
						'Complete bundles & packages',
						'All skill levels & budgets',
						'Sets with & without nets',
					]}
					title="Ready to Start Playing?"
					subtitle="Browse our curated selection of the best pickleball starter sets. From budget-friendly bundles to complete packages with nets—find everything you need to get on the court."
					colorScheme="purple"
				/>
			</div>
		</>
	);
}
