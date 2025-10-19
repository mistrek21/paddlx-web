// src/app/guides/shoes/page.tsx

import { Metadata } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import {
	Award,
	DollarSign,
	Zap,
	Shield,
	CheckCircle,
	Star,
	TrendingUp,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import FAQSection, { FAQ } from '../../_components/faq/FaqSection';
import DynamicCtaSection from '../../_components/cta/DynamicCtaSection';

const shoeFaqs: FAQ[] = [
	{
		id: 1,
		question: 'What are the best pickleball shoes in 2025?',
		answer:
			'Top picks: Diadem Court Burst (best overall comfort), K-Swiss Express Light (best value), ASICS Gel-Resolution 9 (best stability), Babolat Jet Mach 3 (best for outdoor), Head Motion Pro (best for indoor), and Skechers Viper Court Pro (best for wide feet/budget).',
		category: 'Pickleball Shoes',
	},
	{
		id: 2,
		question: 'Can I use tennis shoes for pickleball?',
		answer:
			'Yes! Tennis shoes work great for pickleball since both sports require similar lateral movements and court grip. Many top pickleball shoes are actually tennis shoes (ASICS Gel-Resolution, Babolat Jet Mach). Just avoid running shoes—they lack lateral support and increase injury risk.',
		category: 'Pickleball Shoes',
	},
	{
		id: 3,
		question: 'What should I look for in pickleball shoes?',
		answer:
			'Prioritize: 1) Lateral support for side-to-side movements, 2) Non-marking outsole with herringbone tread, 3) Lightweight feel (12-15 oz), 4) Breathable mesh upper (critical for hot climates), 5) Responsive cushioning, 6) Durable toe protection, 7) Proper fit with no dead space.',
		category: 'Pickleball Shoes',
	},
	{
		id: 4,
		question: 'How much should I spend on pickleball shoes?',
		answer:
			'Budget: ₱2,800-₱5,600 ($50-$100) for quality entry-level shoes. Mid-range: ₱5,600-₱8,400 ($100-$150) for advanced features. Premium: ₱8,400-₱11,200 ($150-$200+) for pro-level technology. Sweet spot for most players: ₱5,600-₱8,400.',
		category: 'Pickleball Shoes',
	},
	{
		id: 5,
		question: 'Which shoes are best for wide feet?',
		answer:
			'Best options: Skechers Viper Court Pro (widest toe box), K-Swiss Express Light 2E, FitVille Wide Pickleball Shoe, New Balance 996v6 (comes in 2E/4E widths), Wilson Rush Pro 4.5 Wide. SQAIRZ XRZ also runs wider. Avoid: Babolat Jet Mach 3, Yonex Sonicage (narrow fit).',
		category: 'Pickleball Shoes',
	},
	{
		id: 6,
		question: 'What are the most comfortable pickleball shoes?',
		answer:
			'Most comfortable straight out of box: Diadem Court Burst (plush knit upper, minimal break-in), New Balance CT Rally (pillow-like feel), SQAIRZ XRZ (superior ankle cushioning), and New Balance 996v6 (after short break-in). All offer running-shoe-level comfort.',
		category: 'Pickleball Shoes',
	},
	{
		id: 7,
		question: 'Which shoes are best for hot weather/Philippines climate?',
		answer:
			'Most breathable: Yonex Sonicage 4 (large mesh panels), Babolat Jet Mach Pickleball (Matryx breathable weave), ASICS Solution Speed FF3 (mesh upper), New Balance 996v6 (flexible knit), Nike Vapor Pro 2 (adaptive mesh). All excel in hot, humid conditions.',
		category: 'Pickleball Shoes',
	},
	{
		id: 8,
		question: 'How often should I replace pickleball shoes?',
		answer:
			'Recreational (1-2x/week): Every 8-12 months. Regular (3-5x/week): Every 4-6 months. Competitive/daily: Every 2-3 months. Signs: worn tread, flattened cushioning, reduced lateral support, torn upper. Rotate two pairs to extend lifespan by 30-50%.',
		category: 'Pickleball Shoes',
	},
	{
		id: 9,
		question: 'Are expensive shoes worth it for beginners?',
		answer:
			'Not necessarily. ₱5,600-₱8,400 ($100-$150) range offers excellent performance for beginners (K-Swiss Express Light $90, Diadem Court Burst $150). Only invest in premium ($150+) if: you have specific foot issues, play 3+ times/week, or are committed long-term. Prioritize fit over price.',
		category: 'Pickleball Shoes',
	},
	{
		id: 10,
		question:
			"What's the difference between indoor and outdoor pickleball shoes?",
		answer:
			'Outdoor shoes: More durable outsoles (Michelin rubber), thicker materials, better toe protection for rough surfaces. Indoor shoes: Softer, lighter, more court feel, gum rubber outsoles. Most modern shoes work for both, but outdoor specialists (Babolat Jet Mach 3, SQAIRZ) last longer on concrete.',
		category: 'Pickleball Shoes',
	},
];

export const metadata: Metadata = {
	title: 'Best Pickleball Shoes 2025 | Expert Reviews & Buying Guide',
	description:
		'Comprehensive guide to the best pickleball shoes in 2025. Expert-tested reviews of Diadem, ASICS, K-Swiss, Babolat, and more. Find your perfect court shoes.',
	keywords: [
		'best pickleball shoes 2025',
		'Diadem Court Burst review',
		'K-Swiss Express Light',
		'ASICS Gel-Resolution 9',
		'pickleball shoes wide feet',
		'court shoes Philippines',
		'Babolat Jet Mach 3',
	],
	openGraph: {
		title: 'Best Pickleball Shoes 2025 | Expert Reviews',
		description:
			'Find the perfect pickleball shoes. Expert reviews, comparisons, and recommendations for all foot types and budgets.',
		url: 'https://www.paddlx.com/guides/shoes',
		type: 'website',
	},
};

const jsonLd = {
	'@context': 'https://schema.org',
	'@type': 'FAQPage',
	'mainEntity': shoeFaqs.map((faq) => ({
		'@type': 'Question',
		'name': faq.question,
		'acceptedAnswer': {
			'@type': 'Answer',
			'text': faq.answer,
		},
	})),
};

export default function ShoesGuidePage() {
	return (
		<>
			<Head>
				<script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
			</Head>
			<div className="bg-white text-slate-800">
				{/* Hero Section */}
				<section className="relative bg-gradient-to-br from-blue-50 to-indigo-50 py-20 lg:py-32">
					<div className="container mx-auto px-6 text-center">
						<Zap className="w-16 h-16 mx-auto text-blue-600 mb-6" />
						<h1 className="text-4xl lg:text-6xl font-extrabold text-dark-slate mb-4 leading-tight">
							Best Pickleball Shoes 2025
						</h1>
						<p className="text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto mb-8">
							Expert-tested and player-approved. Our comprehensive guide to the top
							pickleball shoes for performance, comfort, and injury prevention.
						</p>
						<Button
							asChild
							size="lg"
							className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg shadow-blue-200 transition-transform hover:scale-105"
						>
							<Link href="/shop/shoes">Shop Top-Rated Shoes</Link>
						</Button>
					</div>
				</section>

				{/* Top Picks Quick View */}
				<section className="py-20">
					<div className="container mx-auto px-6">
						<div className="text-center mb-12">
							<h2 className="text-3xl lg:text-4xl font-bold text-dark-slate">
								2025 Top Picks at a Glance
							</h2>
							<p className="text-slate-500 mt-4 max-w-2xl mx-auto">
								Find the perfect shoe for your playing style and foot type.
							</p>
						</div>

						<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
							{/* Diadem Court Burst */}
							<div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl border-2 border-amber-300 shadow-md">
								<div className="flex items-center mb-4">
									<Award className="w-8 h-8 text-amber-600 mr-3" />
									<h3 className="text-xl font-bold">Best Overall</h3>
								</div>
								<p className="text-2xl font-extrabold text-dark-slate mb-2">
									Diadem Court Burst
								</p>
								<p className="text-slate-600 text-sm mb-4">
									Most comfortable shoe tested. Lightweight knit upper, Rebound X
									cushioning, excellent stability. Minimal break-in required.
								</p>
								<p className="text-amber-600 font-bold">~$150 (~₱8,400)</p>
							</div>

							{/* K-Swiss Express Light */}
							<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
								<div className="flex items-center mb-4">
									<DollarSign className="w-8 h-8 text-green-600 mr-3" />
									<h3 className="text-xl font-bold">Best Value</h3>
								</div>
								<p className="text-2xl font-extrabold text-dark-slate mb-2">
									K-Swiss Express Light
								</p>
								<p className="text-slate-600 text-sm mb-4">
									Incredible performance under $100. Lightweight (12.7 oz), durable,
									great support. Available in 2E width. Best budget pick.
								</p>
								<p className="text-green-600 font-bold">~$90 (~₱5,000)</p>
							</div>

							{/* ASICS Gel-Resolution 9 */}
							<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
								<div className="flex items-center mb-4">
									<Shield className="w-8 h-8 text-blue-600 mr-3" />
									<h3 className="text-xl font-bold">Best Stability</h3>
								</div>
								<p className="text-2xl font-extrabold text-dark-slate mb-2">
									ASICS Gel-Resolution 9
								</p>
								<p className="text-slate-600 text-sm mb-4">
									Legendary stability with DYNAWALL™ sidewall. GEL® cushioning, excellent
									arch support. Perfect for aggressive movers.
								</p>
								<p className="text-blue-600 font-bold">~$140 (~₱7,800)</p>
							</div>

							{/* Babolat Jet Mach 3 */}
							<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
								<div className="flex items-center mb-4">
									<Zap className="w-8 h-8 text-purple-600 mr-3" />
									<h3 className="text-xl font-bold">Best for Outdoor</h3>
								</div>
								<p className="text-2xl font-extrabold text-dark-slate mb-2">
									Babolat Jet Mach 3
								</p>
								<p className="text-slate-600 text-sm mb-4">
									Ultra-durable Michelin rubber outsole. Lightweight (12.4 oz), excellent
									grip. #1 choice of pro players. Built for hard courts.
								</p>
								<p className="text-purple-600 font-bold">~$140 (~₱7,800)</p>
							</div>

							{/* Head Motion Pro */}
							<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
								<div className="flex items-center mb-4">
									<Star className="w-8 h-8 text-indigo-600 mr-3" />
									<h3 className="text-xl font-bold">Best for Indoor</h3>
								</div>
								<p className="text-2xl font-extrabold text-dark-slate mb-2">
									Head Motion Pro
								</p>
								<p className="text-slate-600 text-sm mb-4">
									Pickleball-specific design. Lightweight DynaFoam, wide toe box,
									sock-like fit. Perfect for indoor court feel and control.
								</p>
								<p className="text-indigo-600 font-bold">~$129 (~₱7,200)</p>
							</div>

							{/* Skechers Viper Court Pro */}
							<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
								<div className="flex items-center mb-4">
									<TrendingUp className="w-8 h-8 text-orange-600 mr-3" />
									<h3 className="text-xl font-bold">Best for Wide Feet</h3>
								</div>
								<p className="text-2xl font-extrabold text-dark-slate mb-2">
									Skechers Viper Court Pro
								</p>
								<p className="text-slate-600 text-sm mb-4">
									Widest toe box, exceptional arch support. Comfortable out of box. Great
									for bunions. Affordable price point.
								</p>
								<p className="text-orange-600 font-bold">~$95 (~₱5,300)</p>
							</div>
						</div>
					</div>
				</section>

				{/* New for 2025 Section */}
				<section className="bg-slate-50 py-20">
					<div className="container mx-auto px-6">
						<div className="text-center mb-12">
							<h2 className="text-3xl lg:text-4xl font-bold text-dark-slate">
								What's New in 2025
							</h2>
							<p className="text-slate-500 mt-4 max-w-2xl mx-auto">
								Latest releases and updates from top brands.
							</p>
						</div>

						<div className="max-w-5xl mx-auto space-y-6">
							<div className="bg-white p-6 rounded-xl shadow-sm">
								<h3 className="font-bold text-lg mb-2 flex items-center">
									<Star className="w-5 h-5 text-yellow-500 mr-2" />
									NEW: Yonex Sonicage 4 (2025 Release)
								</h3>
								<p className="text-sm text-slate-600 mb-3">
									Latest hit from Yonex with massive mesh panels for breathability.
									Extremely lightweight yet supportive. Perfect for hot climates. Early
									reviews rank it top 5 for summer 2025. ~$140
								</p>
							</div>

							<div className="bg-white p-6 rounded-xl shadow-sm">
								<h3 className="font-bold text-lg mb-2 flex items-center">
									<Star className="w-5 h-5 text-yellow-500 mr-2" />
									NEW: Franklin Sports ACV Pro (October 2025)
								</h3>
								<p className="text-sm text-slate-600 mb-3">
									Franklin's first-ever pickleball shoe, designed by veteran Bryan Cioffi
									(Converse/Reebok). Built from ground up for pickleball. Worn by Megan
									Fudge and Hayden Patriquin. Breathable, durable, multi-level
									performance. ~$120
								</p>
							</div>

							<div className="bg-white p-6 rounded-xl shadow-sm">
								<h3 className="font-bold text-lg mb-2 flex items-center">
									<Star className="w-5 h-5 text-yellow-500 mr-2" />
									UPDATED: New Balance CT Rally (2025 Model)
								</h3>
								<p className="text-sm text-slate-600 mb-3">
									Surprise favorite with pillow-like comfort and 6-month durability
									guarantee. Improved from previous version. Stiff at first but breaks in
									beautifully after 6 hours. ~$130
								</p>
							</div>

							<div className="bg-white p-6 rounded-xl shadow-sm">
								<h3 className="font-bold text-lg mb-2 flex items-center">
									<Star className="w-5 h-5 text-yellow-500 mr-2" />
									UPDATED: ASICS GEL-RENMA (New Pickleball Line)
								</h3>
								<p className="text-sm text-slate-600 mb-3">
									ASICS' first pickleball-specific shoe with unique silhouette designed
									from scratch. Engineered for pickleball athletes looking to elevate
									their game. Available now. ~$130
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* Comparison Table - Updated for 2025 */}
				<section className="py-20">
					<div className="container mx-auto px-6">
						<div className="text-center mb-12">
							<h2 className="text-3xl lg:text-4xl font-bold text-dark-slate">
								Side-by-Side Comparison
							</h2>
							<p className="text-slate-500 mt-4 max-w-2xl mx-auto">
								Compare specs and features of all top shoes.
							</p>
						</div>

						<div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
							<div className="overflow-x-auto">
								<table className="w-full text-sm">
									<thead className="bg-blue-600 text-white">
										<tr>
											<th className="px-4 py-3 text-left font-bold">Shoe</th>
											<th className="px-4 py-3 text-left font-bold">Price</th>
											<th className="px-4 py-3 text-left font-bold">Weight</th>
											<th className="px-4 py-3 text-left font-bold">Width</th>
											<th className="px-4 py-3 text-left font-bold">Best For</th>
										</tr>
									</thead>
									<tbody className="divide-y divide-slate-200">
										<tr className="bg-amber-50">
											<td className="px-4 py-3 font-semibold">Diadem Court Burst</td>
											<td className="px-4 py-3">$150</td>
											<td className="px-4 py-3">14.5 oz</td>
											<td className="px-4 py-3">Standard</td>
											<td className="px-4 py-3">Overall comfort</td>
										</tr>
										<tr>
											<td className="px-4 py-3 font-semibold">K-Swiss Express Light</td>
											<td className="px-4 py-3">$90</td>
											<td className="px-4 py-3">12.7 oz</td>
											<td className="px-4 py-3">Standard/2E</td>
											<td className="px-4 py-3">Best value</td>
										</tr>
										<tr className="bg-slate-50">
											<td className="px-4 py-3 font-semibold">ASICS Gel-Resolution 9</td>
											<td className="px-4 py-3">$140</td>
											<td className="px-4 py-3">14.8 oz</td>
											<td className="px-4 py-3">Narrow-Standard</td>
											<td className="px-4 py-3">Stability/support</td>
										</tr>
										<tr>
											<td className="px-4 py-3 font-semibold">Babolat Jet Mach 3</td>
											<td className="px-4 py-3">$140</td>
											<td className="px-4 py-3">12.4 oz</td>
											<td className="px-4 py-3">Narrow</td>
											<td className="px-4 py-3">Outdoor durability</td>
										</tr>
										<tr className="bg-slate-50">
											<td className="px-4 py-3 font-semibold">Head Motion Pro</td>
											<td className="px-4 py-3">$129</td>
											<td className="px-4 py-3">13.5 oz</td>
											<td className="px-4 py-3">Wide toe box</td>
											<td className="px-4 py-3">Indoor play</td>
										</tr>
										<tr>
											<td className="px-4 py-3 font-semibold">Skechers Viper Court Pro</td>
											<td className="px-4 py-3">$95</td>
											<td className="px-4 py-3">13.0 oz</td>
											<td className="px-4 py-3">Wide</td>
											<td className="px-4 py-3">Wide feet/bunions</td>
										</tr>
										<tr className="bg-slate-50">
											<td className="px-4 py-3 font-semibold">Yonex Sonicage 4 (NEW)</td>
											<td className="px-4 py-3">$140</td>
											<td className="px-4 py-3">11.5 oz</td>
											<td className="px-4 py-3">Standard</td>
											<td className="px-4 py-3">Hot weather/speed</td>
										</tr>
										<tr>
											<td className="px-4 py-3 font-semibold">New Balance CT Rally</td>
											<td className="px-4 py-3">$130</td>
											<td className="px-4 py-3">13.2 oz</td>
											<td className="px-4 py-3">Standard/2E/4E</td>
											<td className="px-4 py-3">Cushioned comfort</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</section>

				{/* Buying Guide - What to Look For */}
				<section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20">
					<div className="container mx-auto px-6">
						<div className="text-center mb-12">
							<h2 className="text-3xl lg:text-4xl font-bold text-dark-slate">
								What to Look For in Pickleball Shoes
							</h2>
							<p className="text-slate-500 mt-4 max-w-2xl mx-auto">
								The 7 critical factors for choosing the right shoe.
							</p>
						</div>

						<div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
							<div className="bg-white p-6 rounded-xl shadow-sm">
								<h3 className="font-bold text-lg mb-3 flex items-center">
									<span className="bg-blue-100 text-blue-700 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">
										1
									</span>
									Lateral Support
								</h3>
								<p className="text-sm text-slate-600 ml-11">
									Pickleball requires constant side-to-side movements. Look for
									reinforced sidewalls, TPU shanks, and supportive uppers to prevent
									ankle rolling during quick pivots. ASICS DYNAWALL™ and SQAIRZ TPU
									systems excel here.
								</p>
							</div>

							<div className="bg-white p-6 rounded-xl shadow-sm">
								<h3 className="font-bold text-lg mb-3 flex items-center">
									<span className="bg-blue-100 text-blue-700 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">
										2
									</span>
									Traction & Grip
								</h3>
								<p className="text-sm text-slate-600 ml-11">
									Herringbone or multi-directional tread patterns provide optimal grip
									for quick stops. Michelin rubber (Babolat) offers 0.77 friction
									coefficient. Non-marking rubber required for indoor courts. Goodyear
									(Skechers) also excellent.
								</p>
							</div>

							<div className="bg-white p-6 rounded-xl shadow-sm">
								<h3 className="font-bold text-lg mb-3 flex items-center">
									<span className="bg-blue-100 text-blue-700 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">
										3
									</span>
									Lightweight Feel
								</h3>
								<p className="text-sm text-slate-600 ml-11">
									Lighter shoes (11-13 oz) improve reaction time and reduce fatigue.
									Lightest: Yonex Sonicage 4 (11.5 oz), Babolat Jet Mach 3 (12.4 oz),
									K-Swiss Express (12.7 oz). Balance weight with support—don't sacrifice
									stability for lightness.
								</p>
							</div>

							<div className="bg-white p-6 rounded-xl shadow-sm">
								<h3 className="font-bold text-lg mb-3 flex items-center">
									<span className="bg-blue-100 text-blue-700 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">
										4
									</span>
									Breathability
								</h3>
								<p className="text-sm text-slate-600 ml-11">
									Mesh uppers with ventilation critical for Philippines' tropical heat.
									Best: Yonex Sonicage 4 (large mesh panels), Diadem Court Burst (knit
									upper), New Balance 996v6 (flexible knit). Poor breathability =
									blisters and discomfort.
								</p>
							</div>

							<div className="bg-white p-6 rounded-xl shadow-sm">
								<h3 className="font-bold text-lg mb-3 flex items-center">
									<span className="bg-blue-100 text-blue-700 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">
										5
									</span>
									Cushioning
								</h3>
								<p className="text-sm text-slate-600 ml-11">
									Balance comfort with court feel. Technologies: ASICS GEL®, Diadem
									Rebound X, New Balance FuelCell, Nike Zoom Air. Plush comfort: Diadem,
									New Balance CT Rally. Responsive/minimal: Babolat, K-Swiss. Choose
									based on preference and joint health.
								</p>
							</div>

							<div className="bg-white p-6 rounded-xl shadow-sm">
								<h3 className="font-bold text-lg mb-3 flex items-center">
									<span className="bg-blue-100 text-blue-700 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">
										6
									</span>
									Durability
								</h3>
								<p className="text-sm text-slate-600 ml-11">
									Reinforced toe caps prevent premature wear from toe-dragging.
									High-abrasion rubber in wear zones extends life. Most durable: Babolat
									Jet Mach 3 (Michelin), SQAIRZ, K-Swiss. Durability guarantees: New
									Balance CT Rally (6 months).
								</p>
							</div>

							<div className="bg-white p-6 rounded-xl shadow-sm col-span-full">
								<h3 className="font-bold text-lg mb-3 flex items-center">
									<span className="bg-blue-100 text-blue-700 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">
										7
									</span>
									Proper Fit
								</h3>
								<p className="text-sm text-slate-600 ml-11">
									<strong>MOST IMPORTANT!</strong> Snug heel/midfoot with room for toe
									splay. Thumb's width (½") between longest toe and shoe tip. Wide feet:
									Skechers Viper, K-Swiss 2E, New Balance 2E/4E, FitVille. Narrow:
									Babolat, Yonex. Try with playing socks. No dead space = better
									stability.
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* FAQ Section */}
				<div id="faq">
					<FAQSection
						faqs={shoeFaqs}
						title="Shoe FAQs"
						subtitle="Common questions about choosing pickleball shoes"
						colorScheme="blue"
					/>
				</div>

				{/* CTA Section */}
				<DynamicCtaSection
					buttonHref="/shop/shoes"
					buttonText="Shop Pickleball Shoes"
					featureList={[
						'Latest 2025 models',
						'Expert tested & reviewed',
						'All foot types & budgets',
					]}
					title="Ready to Upgrade Your Game?"
					subtitle="Browse our curated selection of the best pickleball shoes for 2025. Find your perfect fit and play with confidence."
					colorScheme="blue"
				/>
			</div>
		</>
	);
}
