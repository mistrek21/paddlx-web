// src/app/help/pickleball-gear/page.tsx

import { Metadata } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import {
	ShoppingBag,
	Target,
	Zap,
	Shield,
	TrendingUp,
	AlertTriangle,
	CheckCircle,
	DollarSign,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import FAQSection, { FAQ } from '../_components/faq/FaqSection';
import DynamicCtaSection from '../_components/cta/DynamicCtaSection';

const gearFaqs: FAQ[] = [
	// Paddle Basics
	{
		id: 1,
		question: 'What should I look for when buying my first pickleball paddle?',
		answer:
			'As a beginner, prioritize: midweight paddle (7.3-8.2 oz) for balance, polymer core for control and quieter play, medium grip size (4-4.25"), larger sweet spot for forgiveness, and a budget of ₱2,500-₱5,000. Avoid expensive pro paddles initially—focus on developing fundamentals first with a forgiving, control-oriented paddle.',
		category: 'Gear Help',
	},
	{
		id: 2,
		question: 'What is the difference between paddle weight categories?',
		answer:
			'Lightweight (<7.3 oz): Best for quick hands, control, and maneuverability. Reduces arm fatigue but less power. Midweight (7.3-8.2 oz): Most popular for beginners and intermediates. Balances power and control. Heavyweight (8.3+ oz): Maximum power for aggressive play, but can cause arm fatigue and slower reaction time.',
		category: 'Gear Help',
	},
	{
		id: 3,
		question: 'What is the ideal grip size for my paddle?',
		answer:
			'Measure from the middle crease of your palm to the tip of your ring finger—this is your ideal grip circumference (typically 4-4.5"). If between sizes, choose smaller (you can add overgrip to increase size). Test: grip the paddle and fit your opposite index finger in the gap between fingertips and thumb—it should fit snugly.',
		category: 'Gear Help',
	},
	{
		id: 4,
		question: 'What are the different paddle core materials?',
		answer:
			'Polymer (Polypropylene): Most common, 99% of modern paddles. Soft, quiet, excellent control, durable. Best for most players. Foam: Newest technology, softer feel, larger sweet spot, longer lifespan without core crush. Higher price point. Nomex/Aluminum: Older materials, harder, louder, less control. Now mainly in budget paddles. Stick with polymer or foam.',
		category: 'Gear Help',
	},
	{
		id: 5,
		question: 'Should I get a thicker or thinner paddle?',
		answer:
			"Thicker (16mm): More forgiving, larger sweet spot, better control, softer feel. Absorbs more energy for dinks and drop shots. Best for beginners and control players. Thinner (11-13mm): More power and 'pop', smaller sweet spot, less forgiving. Better for advanced players with consistent ball striking. Most beginners should start with 16mm.",
		category: 'Gear Help',
	},

	// Paddle Shopping
	{
		id: 6,
		question: 'How much should I spend on a pickleball paddle?',
		answer:
			"Beginners: ₱2,000-₱5,000 for quality starter paddles. Intermediates: ₱5,000-₱10,000 for better materials and performance. Advanced: ₱10,000-₱15,000+ for pro-level paddles. Don't overspend early—a ₱3,000 paddle is fine to learn fundamentals. Invest in better gear once you know your playing style.",
		category: 'Gear Help',
	},
	{
		id: 7,
		question: 'What pickleball brands are available in the Philippines?',
		answer:
			"Decathlon: Kukima and Artengo paddles (₱2,500-₱3,500), budget-friendly, good for beginners. Available nationwide. Toby's Sports: Wilson, Gamma, and house-brand sets. Has portable nets and balls. Chris Sports: HEAD and Karakal paddles. Multiple locations. Online: Juciao, Tecniq Introplay sets (₱2,000-₱4,000). Popular in local Facebook groups.",
		category: 'Gear Help',
	},
	{
		id: 8,
		question: 'Should I buy a paddle set or individual paddle?',
		answer:
			"Paddle sets (2 paddles + balls + bag for ₱2,000-₱4,000) are great for: playing with a partner who's also starting, trying the sport without huge investment, or gifts. Individual paddles are better when: you know your preferences, want higher quality, or have specific weight/grip requirements. Sets are convenient; individual paddles offer better performance.",
		category: 'Gear Help',
	},
	{
		id: 9,
		question: 'What are common mistakes when buying a paddle?',
		answer:
			'1) Buying cheap paddles (<₱1,500) with poor materials that break quickly. 2) Choosing pro paddles too early before knowing your style. 3) Ignoring grip size and weight, leading to discomfort. 4) Copying what friends use instead of testing yourself. 5) Prioritizing looks over performance. 6) Not checking if paddle is USAPA-approved for tournaments. 7) Buying ultra-light or ultra-heavy without testing first.',
		category: 'Gear Help',
	},
	{
		id: 10,
		question: 'Can I demo paddles before buying?',
		answer:
			'Yes! Many venues and clubs have demo paddles to try. Some brands offer 30-day return policies. At paddlX events and tournaments, vendors often set up demo stations. Ask friends to try their paddles during open play. This is the best way to find what feels right before investing ₱3,000-₱10,000.',
		category: 'Gear Help',
	},

	// Balls
	{
		id: 11,
		question: 'What is the difference between indoor and outdoor pickleballs?',
		answer:
			'Indoor balls: 26 larger holes, softer plastic, lighter (0.8 oz), slower bounce, quieter, bright yellow. Best for gym floors. Outdoor balls: 40 smaller holes, harder plastic, heavier (0.9 oz), faster bounce, wind-resistant, yellow/orange/green. Best for concrete/asphalt courts. Always use the right ball for your court surface.',
		category: 'Gear Help',
	},
	{
		id: 12,
		question: 'Which ball should I use for outdoor play in the Philippines?',
		answer:
			"Use outdoor pickleballs with 40 holes designed for wind resistance. Popular choices: Franklin X-40, Onix Dura Fast 40, or Gamma outdoor balls. In the Philippines' tropical climate with occasional wind and heat, outdoor balls last longer on concrete courts. Look for orange or yellow colors for better visibility in bright sunlight.",
		category: 'Gear Help',
	},
	{
		id: 13,
		question: 'How many pickleballs should I buy?',
		answer:
			'For casual play: 6-12 balls (₱500-₱1,000). Balls crack over time, especially outdoor ones on concrete. For regular players: 12-24 balls to always have backups. Tournament players: 36+ to ensure consistent bounce. Buy in bulk packs (6-12 balls) for better value. Replace cracked balls immediately as they affect gameplay.',
		category: 'Gear Help',
	},
	{
		id: 14,
		question: 'Why do outdoor pickleballs crack so easily?',
		answer:
			'Outdoor balls are made of harder plastic to withstand wind and rough surfaces, making them more brittle. Concrete/asphalt courts, hot temperatures, and powerful shots accelerate cracking. Indoor balls get soft and mushy instead. To extend life: store balls indoors away from heat/sun, avoid extreme temperature changes, and replace when you hear a different sound on impact.',
		category: 'Gear Help',
	},

	// Shoes
	{
		id: 15,
		question: 'Do I need special pickleball shoes or can I use tennis shoes?',
		answer:
			"While tennis shoes work, pickleball-specific shoes are better because: enhanced lateral support for side-to-side movements, herringbone/multi-directional tread patterns for quick pivots, lighter weight for faster reactions, and lower profile for court feel. Tennis shoes prioritize forward movement. Pickleball shoes reduce injury risk from the sport's unique lateral demands.",
		category: 'Gear Help',
	},
	{
		id: 16,
		question: 'Can I use running shoes for pickleball?',
		answer:
			"No! Running shoes are designed for forward motion only, not lateral movements. They lack side-to-side support, increasing ankle injury risk. The cushioning is wrong for court sports, and the tread pattern won't grip properly. You'll slip and twist ankles. Invest in proper court shoes—your ankles and knees will thank you.",
		category: 'Gear Help',
	},
	{
		id: 17,
		question: 'What should I look for in pickleball shoes?',
		answer:
			'Lateral support: Reinforced sides for quick pivots. Non-marking soles: Required for indoor courts, good for all play. Traction: Herringbone or hexagonal patterns for grip. Lightweight: Reduces fatigue during long play. Breathability: Mesh upper for hot Philippines climate. Cushioning: Balance between comfort and court feel. Budget: ₱3,000-₱6,000 for quality court shoes.',
		category: 'Gear Help',
	},
	{
		id: 18,
		question: 'How often should I replace my pickleball shoes?',
		answer:
			"Casual players (1-2x/week): Every 6-12 months. Regular players (3-5x/week): Every 3-6 months. Daily/tournament players: Every 2-3 months. Signs to replace: worn tread reducing traction, decreased cushioning causing foot pain, upper material breaking down, or loss of lateral support. Don't wait until they're destroyed—worn shoes increase injury risk.",
		category: 'Gear Help',
	},

	// Apparel
	{
		id: 19,
		question: 'What should I wear to play pickleball?',
		answer:
			'Tops: Moisture-wicking, breathable shirts (Dri-FIT, polyester). Tank tops, tees, or polos. Bottoms: Athletic shorts, skorts, leggings, or joggers with pockets for extra balls. Fabrics: Avoid cotton—use performance fabrics that dry quickly. For Philippines climate: Light colors, UV protection, ventilation panels. No strict dress code, prioritize comfort and movement.',
		category: 'Gear Help',
	},
	{
		id: 20,
		question:
			'Do I need special pickleball clothing or can I wear tennis/athletic wear?',
		answer:
			'No special pickleball clothing required! Tennis, running, or any athletic wear works perfectly. Key features: stretchy fabrics for full range of motion, moisture-wicking to stay dry, pockets for balls (helpful but optional), and breathable materials for hot weather. Many players wear regular gym clothes. Style is personal preference—functionality matters most.',
		category: 'Gear Help',
	},
	{
		id: 21,
		question: 'What accessories should I bring to the court?',
		answer:
			'Essentials: water bottle (stay hydrated in heat), towel (manage sweat), sunscreen and hat (outdoor play), and sunglasses/sports glasses (eye protection, sun glare). Optional: sweatbands, overgrips (replace worn grips), extra shirt, energy snacks, and a proper pickleball bag to organize everything. In Philippines heat, hydration is critical!',
		category: 'Gear Help',
	},
	{
		id: 22,
		question: 'Should I wear a sports bra for pickleball?',
		answer:
			'Yes! Women should wear a supportive sports bra designed for high-impact activity. Pickleball involves quick movements, jumps, and sudden stops requiring good support. Look for moisture-wicking materials, adjustable straps, and medium-to-high support levels. Test by jumping or mimicking pickleball movements before purchasing.',
		category: 'Gear Help',
	},

	// Bags & Accessories
	{
		id: 23,
		question: 'What should I keep in my pickleball bag?',
		answer:
			'Must-haves: paddle(s), balls (6+), water bottle, towel, extra overgrips, court shoes. Recommended: sunscreen, hat, sunglasses, extra shirt, personal first aid (band-aids, pain reliever, blister prevention), snacks, paddle edge tape. Optional: ball machine remote, massage roller, marker for ball numbering, ankle/wrist braces, and a portable phone charger.',
		category: 'Gear Help',
	},
	{
		id: 24,
		question: 'What type of pickleball bag do I need?',
		answer:
			'Sling bags: Compact, carries 1-2 paddles, balls, essentials. Great for recreational players (₱800-₱1,500). Backpacks: Holds 2-4 paddles, change of clothes, more gear. Good for regular players (₱1,500-₱3,000). Tour bags: Large, 6+ paddles, shoes compartment, wet/dry sections. For serious players and coaches (₱3,000-₱6,000+). Choose based on how much gear you carry.',
		category: 'Gear Help',
	},
	{
		id: 25,
		question: 'What are overgrips and do I need them?',
		answer:
			"Overgrips are thin wraps applied over your paddle's original grip to: absorb sweat, improve tackiness, add cushioning, and customize grip size slightly. Replace every 2-4 weeks or when worn. Cost: ₱200-₱500 for 3-pack. In hot Philippines climate with sweaty hands, overgrips are essential for maintaining good paddle control. Always carry extras in your bag.",
		category: 'Gear Help',
	},
	{
		id: 26,
		question: 'Do I need a paddle cover?',
		answer:
			'Yes! Paddle covers protect your investment from: scratches during transport, edge damage from dropping, sun/heat exposure degrading materials, and moisture that can damage the core. Most paddles come with a basic cover. Upgraded neoprene or padded covers (₱300-₱800) offer better protection. Use covers especially when transporting multiple paddles in one bag.',
		category: 'Gear Help',
	},

	// Equipment Care
	{
		id: 27,
		question: 'How do I take care of my pickleball paddle?',
		answer:
			"Clean regularly: Wipe face with damp microfiber cloth after play to remove dirt/oil. Storage: Keep in paddle cover away from extreme heat/cold. Avoid leaving in car. Grip maintenance: Replace overgrip when worn. Clean grip with barely-damp cloth. Protect edges: Apply edge guard tape to prevent chipping. Avoid: Don't slam paddle on ground, leave in direct sunlight, or expose to extreme temperatures.",
		category: 'Gear Help',
	},
	{
		id: 28,
		question: 'How long does a pickleball paddle last?',
		answer:
			'Quality paddles: 1-3 years with regular play (3-5x/week). Factors affecting lifespan: play frequency, intensity, care, and core material. Signs to replace: loss of pop/power, visible delamination (face separating), core crush (soft spots), or edge damage. Advanced players replace paddles more frequently (6-12 months) to maintain peak performance. Budget paddles may last only 3-6 months.',
		category: 'Gear Help',
	},
	{
		id: 29,
		question: 'Can I repair a cracked or damaged paddle?',
		answer:
			"Minor edge chips: Can be repaired with edge guard tape or epoxy. Surface scratches: Normal wear, don't affect performance much. Delamination or core crush: Not repairable—paddle is done. Cracked face: Some players use epoxy but this is tournament-illegal. Once structural damage occurs, it's time for a new paddle. Focus on prevention with proper care.",
		category: 'Gear Help',
	},
	{
		id: 30,
		question: 'Why does my paddle face feel rough or smooth?',
		answer:
			'Texture is intentional! Textured/rough faces (carbon fiber, raw composite): Generate more spin, better ball bite, slightly more control. Used by advanced players. Smooth faces (graphite, some fiberglass): Less spin, more consistent pop, easier for beginners. Over time, textured faces can smooth out from use, reducing spin capability. This is normal paddle wear.',
		category: 'Gear Help',
	},

	// Additional Gear
	{
		id: 31,
		question: 'Do I need a portable net?',
		answer:
			'Only if: you want to play anywhere (driveways, parking lots, parks without courts), you organize regular home games, or you run clinics/events. Quality portable nets cost ₱5,000-₱15,000. Look for: regulation height (36" at sides, 34" at center), stability (weighted bases), easy setup/takedown, and carrying case. Otherwise, play at established courts with permanent nets.',
		category: 'Gear Help',
	},
	{
		id: 32,
		question: 'Should I wear protective eyewear?',
		answer:
			'Highly recommended! Pickleball balls can travel 40+ mph, and eye injuries do occur. Protective eyewear prevents: ball strikes to the eye, sun glare affecting vision, and wind/debris irritation outdoors. Options: sports sunglasses with polycarbonate lenses, protective sports goggles, or transition lenses for indoor/outdoor. Cost: ₱800-₱3,000. Your vision is worth protecting.',
		category: 'Gear Help',
	},
	{
		id: 33,
		question: 'What is tungsten tape and do I need it?',
		answer:
			"Tungsten tape is weighted tape (heavier than lead tape) used to customize paddle weight and balance. Advanced players use it to: add weight for more power, adjust swing weight, or change the paddle's sweet spot location. Beginners: Don't need it yet—focus on fundamentals. Intermediate+: Can experiment to fine-tune paddle feel. Cost: ₱300-₱600. Apply carefully in small amounts.",
		category: 'Gear Help',
	},
	{
		id: 34,
		question: 'Do I need a ball machine?',
		answer:
			'Ball machines (₱30,000-₱100,000+) are for: serious players wanting solo practice, coaches running drills, or facilities offering lessons. Not necessary for recreational players. Alternatives: practice with partners, join clinics, or use wall practice. If you play casually 1-2x/week, invest that money in coaching sessions instead for better improvement.',
		category: 'Gear Help',
	},

	// Buying Advice
	{
		id: 35,
		question: 'What is USAPA approval and why does it matter?',
		answer:
			'USAPA (USA Pickleball Association) approval means the paddle meets official tournament specifications for: size, weight, surface texture, and materials. Matters if: you plan to play in sanctioned tournaments, want assurance of quality, or follow official rules. For recreational play only: non-approved paddles are fine. Most quality paddles ₱2,500+ are USAPA-approved.',
		category: 'Gear Help',
	},
	{
		id: 36,
		question: 'Is it worth buying expensive pro-level paddles as a beginner?',
		answer:
			"No! Here's why: Pro paddles (₱10,000-₱15,000+) are designed for advanced techniques you haven't developed yet. They're often less forgiving with smaller sweet spots. You don't know your playing style preferences yet. The money is better spent on lessons, court time, and quality shoes. Start with a solid ₱2,500-₱5,000 paddle and upgrade later.",
		category: 'Gear Help',
	},
	{
		id: 37,
		question: 'What is the total cost to start playing pickleball?',
		answer:
			'Minimum budget: Paddle ₱2,000-₱3,000, balls (6-pack) ₱500, court shoes ₱3,000, athletic wear (if needed) ₱1,000, water bottle/towel ₱300. Total: ₱6,800-₱7,800. Comfortable budget: Better paddle ₱4,000-₱5,000, quality shoes ₱4,000-₱5,000, bag ₱1,500, accessories ₱1,000. Total: ₱10,500-₱12,500. Court fees: ₱300-₱800/hour. Much cheaper than tennis or golf!',
		category: 'Gear Help',
	},
	{
		id: 38,
		question: 'Where can I try equipment before buying?',
		answer:
			'Demo programs: Some brands/retailers offer 30-day trials. Club demos: Many clubs have paddles to borrow during play. Tournaments: Vendors set up demo stations at paddlX events. Friends: Ask to try different paddles during open play. Facebook groups: Philippine pickleball communities often have gear trading/demo opportunities. Pro shops: Some let you test on-site.',
		category: 'Gear Help',
	},
];

// SEO Metadata
export const metadata: Metadata = {
	title: 'Pickleball Gear Guide & Equipment Help | paddlX',
	description:
		'Complete guide to buying pickleball equipment in the Philippines. Learn about paddles, shoes, balls, apparel, and accessories. Find the best gear for your budget and skill level.',
	keywords: [
		'pickleball gear Philippines',
		'pickleball paddle buying guide',
		'pickleball equipment',
		'best pickleball paddles',
		'pickleball shoes',
		'indoor outdoor pickleballs',
		'Decathlon pickleball',
		'pickleball gear cost',
	],
	openGraph: {
		title: 'Pickleball Gear Guide & Equipment Help | paddlX',
		description:
			'Everything you need to know about buying pickleball equipment. Paddle selection, shoes, balls, and more.',
		url: 'https://www.paddlx.com/help/pickleball-gear',
		type: 'website',
	},
};

// JSON-LD Structured Data
const jsonLd = {
	'@context': 'https://schema.org',
	'@type': 'FAQPage',
	'mainEntity': gearFaqs.slice(0, 10).map((faq) => ({
		'@type': 'Question',
		'name': faq.question,
		'acceptedAnswer': {
			'@type': 'Answer',
			'text': faq.answer,
		},
	})),
};

export default function PickleballGearHelpPage() {
	return (
		<>
			<Head>
				<script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
			</Head>
			<div className="bg-white text-slate-800">
				{/* Hero Section */}
				<section className="relative bg-orange-50 py-20 lg:py-32">
					<div className="container mx-auto px-6 text-center">
						<ShoppingBag className="w-16 h-16 mx-auto text-orange-600 mb-6" />
						<h1 className="text-4xl lg:text-6xl font-extrabold text-dark-slate mb-4 leading-tight">
							Pickleball Gear Guide
						</h1>
						<p className="text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto mb-8">
							Your complete resource for choosing the right pickleball equipment. From
							paddles to shoes, balls to bags—make informed decisions and avoid common
							buying mistakes.
						</p>
						<Button
							asChild
							size="lg"
							className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg shadow-orange-200 transition-transform hover:scale-105"
						>
							<Link href="/shop">Shop Gear</Link>
						</Button>
					</div>
				</section>

				{/* Essential Gear Overview */}
				<section className="py-20">
					<div className="container mx-auto px-6">
						<div className="text-center mb-16">
							<h2 className="text-3xl lg:text-4xl font-bold text-dark-slate">
								Essential Pickleball Equipment
							</h2>
							<p className="text-slate-500 mt-4 max-w-2xl mx-auto">
								Here's what you need to get started, organized by priority and budget.
							</p>
						</div>
						<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
							<div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
								<div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
									<Target className="w-6 h-6 text-orange-600" />
								</div>
								<h3 className="text-lg font-bold mb-2">Paddle</h3>
								<p className="text-slate-600 text-sm mb-3">
									Your most important equipment. Choose midweight (7.3-8.2 oz), polymer
									core, 16mm thickness for beginners.
								</p>
								<p className="text-orange-600 font-bold">₱2,500-₱5,000</p>
							</div>

							<div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
								<div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
									<Shield className="w-6 h-6 text-blue-600" />
								</div>
								<h3 className="text-lg font-bold mb-2">Court Shoes</h3>
								<p className="text-slate-600 text-sm mb-3">
									Don't skip this! Proper lateral support prevents injuries. Non-marking
									soles with herringbone traction.
								</p>
								<p className="text-blue-600 font-bold">₱3,000-₱6,000</p>
							</div>

							<div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
								<div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
									<Zap className="w-6 h-6 text-green-600" />
								</div>
								<h3 className="text-lg font-bold mb-2">Pickleballs</h3>
								<p className="text-slate-600 text-sm mb-3">
									Outdoor balls (40 holes) for concrete courts. Indoor balls (26 holes)
									for gym floors. Buy 6-12 to start.
								</p>
								<p className="text-green-600 font-bold">₱500-₱1,000</p>
							</div>

							<div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
								<div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
									<ShoppingBag className="w-6 h-6 text-purple-600" />
								</div>
								<h3 className="text-lg font-bold mb-2">Accessories</h3>
								<p className="text-slate-600 text-sm mb-3">
									Water bottle, towel, overgrips, sunscreen, bag, extra shirt. Essential
									for Philippines heat!
								</p>
								<p className="text-purple-600 font-bold">₱1,000-₱2,000</p>
							</div>
						</div>

						<div className="mt-12 p-6 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-2xl border border-orange-100">
							<h3 className="text-2xl font-bold text-center mb-4">
								Total Startup Cost
							</h3>
							<div className="grid md:grid-cols-2 gap-6">
								<div className="bg-white p-6 rounded-xl">
									<h4 className="font-bold text-lg mb-3 text-center">Minimum Budget</h4>
									<ul className="space-y-2 text-sm">
										<li className="flex justify-between">
											<span>Paddle</span>
											<span className="font-semibold">₱2,500</span>
										</li>
										<li className="flex justify-between">
											<span>Shoes</span>
											<span className="font-semibold">₱3,000</span>
										</li>
										<li className="flex justify-between">
											<span>Balls (6-pack)</span>
											<span className="font-semibold">₱500</span>
										</li>
										<li className="flex justify-between">
											<span>Accessories</span>
											<span className="font-semibold">₱800</span>
										</li>
										<li className="flex justify-between pt-2 border-t font-bold text-base">
											<span>Total</span>
											<span className="text-orange-600">₱6,800</span>
										</li>
									</ul>
								</div>
								<div className="bg-white p-6 rounded-xl">
									<h4 className="font-bold text-lg mb-3 text-center">
										Comfortable Budget
									</h4>
									<ul className="space-y-2 text-sm">
										<li className="flex justify-between">
											<span>Quality Paddle</span>
											<span className="font-semibold">₱4,500</span>
										</li>
										<li className="flex justify-between">
											<span>Better Shoes</span>
											<span className="font-semibold">₱4,500</span>
										</li>
										<li className="flex justify-between">
											<span>Balls (12-pack)</span>
											<span className="font-semibold">₱800</span>
										</li>
										<li className="flex justify-between">
											<span>Bag + Accessories</span>
											<span className="font-semibold">₱2,000</span>
										</li>
										<li className="flex justify-between pt-2 border-t font-bold text-base">
											<span>Total</span>
											<span className="text-orange-600">₱11,800</span>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Paddle Buying Guide */}
				<section className="bg-slate-50 py-20">
					<div className="container mx-auto px-6">
						<div className="text-center mb-16">
							<h2 className="text-3xl lg:text-4xl font-bold text-dark-slate">
								How to Choose Your Paddle
							</h2>
							<p className="text-slate-500 mt-4 max-w-2xl mx-auto">
								The 5 critical factors that determine the right paddle for your game.
							</p>
						</div>

						<div className="max-w-5xl mx-auto space-y-8">
							{/* Weight */}
							<div className="bg-white p-8 rounded-2xl shadow-sm">
								<h3 className="text-2xl font-bold mb-4 flex items-center">
									<span className="bg-orange-100 text-orange-600 w-10 h-10 rounded-full flex items-center justify-center mr-4">
										1
									</span>
									Paddle Weight
								</h3>
								<div className="ml-14">
									<p className="text-slate-600 mb-6">
										Weight is the most important factor affecting your play style. It
										directly impacts power, control, and arm fatigue.
									</p>
									<div className="grid md:grid-cols-3 gap-4">
										<div className="p-4 bg-blue-50 rounded-lg">
											<h4 className="font-bold text-blue-900 mb-2">Lightweight</h4>
											<p className="text-sm font-semibold mb-2">&lt; 7.3 oz</p>
											<p className="text-sm text-slate-600">
												Best for quick hands, control, maneuverability. Less power, more arm
												fatigue over time.
											</p>
										</div>
										<div className="p-4 bg-green-50 rounded-lg border-2 border-green-400">
											<h4 className="font-bold text-green-900 mb-2">Midweight ⭐</h4>
											<p className="text-sm font-semibold mb-2">7.3 - 8.2 oz</p>
											<p className="text-sm text-slate-600">
												Perfect balance of power and control. Most popular for beginners and
												intermediates.
											</p>
										</div>
										<div className="p-4 bg-orange-50 rounded-lg">
											<h4 className="font-bold text-orange-900 mb-2">Heavyweight</h4>
											<p className="text-sm font-semibold mb-2">8.3+ oz</p>
											<p className="text-sm text-slate-600">
												Maximum power, drives through the ball. Can cause arm fatigue,
												slower reactions.
											</p>
										</div>
									</div>
								</div>
							</div>

							{/* Core Material */}
							<div className="bg-white p-8 rounded-2xl shadow-sm">
								<h3 className="text-2xl font-bold mb-4 flex items-center">
									<span className="bg-orange-100 text-orange-600 w-10 h-10 rounded-full flex items-center justify-center mr-4">
										2
									</span>
									Core Material
								</h3>
								<div className="ml-14">
									<p className="text-slate-600 mb-6">
										The core is the paddle's heart. 99% of modern paddles use polymer,
										which is ideal for most players.
									</p>
									<div className="space-y-3">
										<div className="flex items-start p-4 bg-green-50 rounded-lg">
											<CheckCircle className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
											<div>
												<h4 className="font-bold">Polymer (Polypropylene) - Recommended</h4>
												<p className="text-sm text-slate-600">
													Soft, quiet, excellent control, durable. Offers balance of touch
													and power. Used in 99% of quality paddles. Budget: ₱2,500-₱10,000+
												</p>
											</div>
										</div>
										<div className="flex items-start p-4 bg-blue-50 rounded-lg">
											<TrendingUp className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
											<div>
												<h4 className="font-bold">Foam - Newest Tech</h4>
												<p className="text-sm text-slate-600">
													Softer feel, larger sweet spot, no core crush. Longer lifespan.
													Premium option for advanced players. Budget: ₱8,000-₱15,000+
												</p>
											</div>
										</div>
										<div className="flex items-start p-4 bg-slate-50 rounded-lg">
											<AlertTriangle className="w-6 h-6 text-slate-600 mr-3 flex-shrink-0 mt-0.5" />
											<div>
												<h4 className="font-bold">Nomex/Aluminum - Avoid</h4>
												<p className="text-sm text-slate-600">
													Older materials. Harder, louder, less control. Found in budget
													paddles &lt;₱2,000. Not recommended unless on extreme budget.
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>

							{/* Core Thickness */}
							<div className="bg-white p-8 rounded-2xl shadow-sm">
								<h3 className="text-2xl font-bold mb-4 flex items-center">
									<span className="bg-orange-100 text-orange-600 w-10 h-10 rounded-full flex items-center justify-center mr-4">
										3
									</span>
									Core Thickness
								</h3>
								<div className="ml-14">
									<div className="grid md:grid-cols-2 gap-6">
										<div className="p-6 bg-green-50 rounded-lg border-2 border-green-400">
											<h4 className="font-bold text-lg mb-2">
												16mm (Thicker) - Beginners ⭐
											</h4>
											<ul className="space-y-2 text-sm">
												<li className="flex items-start">
													<CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
													<span>Larger sweet spot, more forgiving</span>
												</li>
												<li className="flex items-start">
													<CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
													<span>Better control and soft touch</span>
												</li>
												<li className="flex items-start">
													<CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
													<span>Absorbs energy for dinks/drops</span>
												</li>
												<li className="flex items-start">
													<CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
													<span>Quieter play</span>
												</li>
											</ul>
										</div>
										<div className="p-6 bg-orange-50 rounded-lg">
											<h4 className="font-bold text-lg mb-2">
												11-13mm (Thinner) - Advanced
											</h4>
											<ul className="space-y-2 text-sm">
												<li className="flex items-start">
													<Zap className="w-4 h-4 text-orange-600 mr-2 flex-shrink-0 mt-0.5" />
													<span>More power and &quot;pop&quot;</span>
												</li>
												<li className="flex items-start">
													<Zap className="w-4 h-4 text-orange-600 mr-2 flex-shrink-0 mt-0.5" />
													<span>Smaller sweet spot</span>
												</li>
												<li className="flex items-start">
													<Zap className="w-4 h-4 text-orange-600 mr-2 flex-shrink-0 mt-0.5" />
													<span>Less forgiving on mishits</span>
												</li>
												<li className="flex items-start">
													<Zap className="w-4 h-4 text-orange-600 mr-2 flex-shrink-0 mt-0.5" />
													<span>For consistent ball strikers</span>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>

							{/* Grip Size */}
							<div className="bg-white p-8 rounded-2xl shadow-sm">
								<h3 className="text-2xl font-bold mb-4 flex items-center">
									<span className="bg-orange-100 text-orange-600 w-10 h-10 rounded-full flex items-center justify-center mr-4">
										4
									</span>
									Grip Size
								</h3>
								<div className="ml-14">
									<p className="text-slate-600 mb-6">
										Wrong grip size causes blisters, wrist strain, and loss of control.
										Get this right!
									</p>
									<div className="bg-blue-50 p-6 rounded-lg mb-6">
										<h4 className="font-bold mb-3">How to Measure:</h4>
										<ol className="space-y-2 text-sm">
											<li className="flex items-start">
												<span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0 text-xs">
													1
												</span>
												<span>
													Open your paddle hand face-up and locate the three creases in your
													palm
												</span>
											</li>
											<li className="flex items-start">
												<span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0 text-xs">
													2
												</span>
												<span>
													Measure from the middle crease up to the tip of your ring finger
												</span>
											</li>
											<li className="flex items-start">
												<span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0 text-xs">
													3
												</span>
												<span>
													This measurement (usually 4-4.5&quot;) is your ideal grip
													circumference
												</span>
											</li>
											<li className="flex items-start">
												<span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0 text-xs">
													4
												</span>
												<span>If between sizes, choose smaller (you can add overgrip)</span>
											</li>
										</ol>
									</div>
									<div className="bg-slate-50 p-6 rounded-lg">
										<h4 className="font-bold mb-3">The Index Finger Test:</h4>
										<p className="text-sm text-slate-600">
											Grip the paddle normally. Try to fit your opposite index finger in
											the gap between your fingertips and thumb. It should fit snugly—not
											too tight, not too loose.
										</p>
									</div>
								</div>
							</div>

							{/* Surface Material */}
							<div className="bg-white p-8 rounded-2xl shadow-sm">
								<h3 className="text-2xl font-bold mb-4 flex items-center">
									<span className="bg-orange-100 text-orange-600 w-10 h-10 rounded-full flex items-center justify-center mr-4">
										5
									</span>
									Surface Material
								</h3>
								<div className="ml-14">
									<p className="text-slate-600 mb-6">
										The paddle face affects spin, control, and durability.
									</p>
									<div className="space-y-3">
										<div className="flex items-start p-4 bg-slate-50 rounded-lg">
											<div className="w-2 h-2 bg-slate-400 rounded-full mr-3 mt-2 flex-shrink-0" />
											<div>
												<h4 className="font-bold">Graphite - Classic Choice</h4>
												<p className="text-sm text-slate-600">
													Lightweight, responsive, smooth feel. Good for beginners. Less spin
													than carbon fiber. Moderate durability.
												</p>
											</div>
										</div>
										<div className="flex items-start p-4 bg-slate-50 rounded-lg">
											<div className="w-2 h-2 bg-slate-400 rounded-full mr-3 mt-2 flex-shrink-0" />
											<div>
												<h4 className="font-bold">Carbon Fiber/Raw Carbon - Popular</h4>
												<p className="text-sm text-slate-600">
													Textured surface, excellent spin generation, superior control. Most
													popular for intermediate to advanced. More expensive.
												</p>
											</div>
										</div>
										<div className="flex items-start p-4 bg-slate-50 rounded-lg">
											<div className="w-2 h-2 bg-slate-400 rounded-full mr-3 mt-2 flex-shrink-0" />
											<div>
												<h4 className="font-bold">
													Fiberglass/Composite - Budget Friendly
												</h4>
												<p className="text-sm text-slate-600">
													Softer feel, more power, less control. Good for beginners.
													Affordable. Less durable than graphite/carbon.
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Common Mistakes */}
				<section className="py-20">
					<div className="container mx-auto px-6">
						<div className="text-center mb-16">
							<h2 className="text-3xl lg:text-4xl font-bold text-dark-slate">
								7 Common Gear Buying Mistakes
							</h2>
							<p className="text-slate-500 mt-4 max-w-2xl mx-auto">
								Avoid these pitfalls to save money and frustration.
							</p>
						</div>
						<div className="max-w-4xl mx-auto space-y-4">
							<div className="flex items-start p-6 bg-red-50 rounded-xl border border-red-100">
								<AlertTriangle className="w-8 h-8 text-red-600 mr-4 flex-shrink-0" />
								<div>
									<h3 className="font-bold text-lg mb-2">
										1. Buying Ultra-Cheap Paddles (&lt;₱1,500)
									</h3>
									<p className="text-slate-600">
										Cheap paddles use poor materials (wood, low-grade composites) that
										break within weeks. They lack control and proper weight distribution.
										Minimum ₱2,500 for decent quality.
									</p>
								</div>
							</div>

							<div className="flex items-start p-6 bg-red-50 rounded-xl border border-red-100">
								<AlertTriangle className="w-8 h-8 text-red-600 mr-4 flex-shrink-0" />
								<div>
									<h3 className="font-bold text-lg mb-2">
										2. Choosing Pro Paddles Too Early
									</h3>
									<p className="text-slate-600">
										₱10,000-₱15,000 pro paddles are designed for advanced techniques.
										They're often less forgiving with smaller sweet spots. Start with
										₱2,500-₱5,000 and upgrade when you know your style.
									</p>
								</div>
							</div>

							<div className="flex items-start p-6 bg-red-50 rounded-xl border border-red-100">
								<AlertTriangle className="w-8 h-8 text-red-600 mr-4 flex-shrink-0" />
								<div>
									<h3 className="font-bold text-lg mb-2">
										3. Using Running Shoes Instead of Court Shoes
									</h3>
									<p className="text-slate-600">
										Running shoes are designed for forward motion only. They lack lateral
										support for pickleball's side-to-side movements, significantly
										increasing ankle injury risk. Invest ₱3,000- ₱6,000 in proper court
										shoes.
									</p>
								</div>
							</div>

							<div className="flex items-start p-6 bg-red-50 rounded-xl border border-red-100">
								<AlertTriangle className="w-8 h-8 text-red-600 mr-4 flex-shrink-0" />
								<div>
									<h3 className="font-bold text-lg mb-2">4. Ignoring Grip Size</h3>
									<p className="text-slate-600">
										Wrong grip size causes blisters, wrist strain, and poor control.
										Always measure your grip size before buying (middle crease to ring
										finger tip = 4-4.5&quot; typically).
									</p>
								</div>
							</div>

							<div className="flex items-start p-6 bg-red-50 rounded-xl border border-red-100">
								<AlertTriangle className="w-8 h-8 text-red-600 mr-4 flex-shrink-0" />
								<div>
									<h3 className="font-bold text-lg mb-2">
										5. Copying Friends' Paddles Without Testing
									</h3>
									<p className="text-slate-600">
										What works for your friend may not work for you. Different playing
										styles, strength levels, and hand sizes require different paddles.
										Always demo before buying.
									</p>
								</div>
							</div>

							<div className="flex items-start p-6 bg-red-50 rounded-xl border border-red-100">
								<AlertTriangle className="w-8 h-8 text-red-600 mr-4 flex-shrink-0" />
								<div>
									<h3 className="font-bold text-lg mb-2">
										6. Using Wrong Ball Type for Court Surface
									</h3>
									<p className="text-slate-600">
										Indoor balls (26 holes) crack instantly on outdoor concrete courts.
										Outdoor balls (40 holes) bounce too much indoors. Always match ball
										type to surface.
									</p>
								</div>
							</div>

							<div className="flex items-start p-6 bg-red-50 rounded-xl border border-red-100">
								<AlertTriangle className="w-8 h-8 text-red-600 mr-4 flex-shrink-0" />
								<div>
									<h3 className="font-bold text-lg mb-2">
										7. Prioritizing Looks Over Performance
									</h3>
									<p className="text-slate-600">
										A beautiful paddle that doesn't match your playing style is useless.
										Focus on specs (weight, core, thickness, grip) first, aesthetics
										second.
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Philippines Shopping Guide */}
				<section className="bg-gradient-to-br from-teal-50 to-blue-50 py-20">
					<div className="container mx-auto px-6">
						<div className="text-center mb-16">
							<h2 className="text-3xl lg:text-4xl font-bold text-dark-slate">
								Where to Buy in the Philippines
							</h2>
							<p className="text-slate-500 mt-4 max-w-2xl mx-auto">
								Trusted retailers with pickleball gear across the country.
							</p>
						</div>
						<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
							<div className="bg-white p-6 rounded-2xl shadow-sm">
								<div className="font-bold text-xl mb-2">Decathlon</div>
								<p className="text-sm text-slate-600 mb-4">
									Budget-friendly starter paddles (Kukima, Artengo) ₱2,500-₱3,500. Balls,
									bags, and apparel available.
								</p>
								<p className="text-xs text-slate-500">
									Locations: SM Fairview, SM North Edsa, SM MOA, Tiendesitas, SM Clark,
									SM Santa Rosa
								</p>
							</div>

							<div className="bg-white p-6 rounded-2xl shadow-sm">
								<div className="font-bold text-xl mb-2">Toby's Sports</div>
								<p className="text-sm text-slate-600 mb-4">
									Wilson, Gamma paddles and complete sets. Portable nets and accessories.
									Wide distribution.
								</p>
								<p className="text-xs text-slate-500">
									Locations: Multiple malls nationwide
								</p>
							</div>

							<div className="bg-white p-6 rounded-2xl shadow-sm">
								<div className="font-bold text-xl mb-2">Chris Sports</div>
								<p className="text-sm text-slate-600 mb-4">
									HEAD and Karakal brand paddles. Quality equipment with good customer
									service.
								</p>
								<p className="text-xs text-slate-500">
									Locations: QC, Mandaluyong, Pasig, Parañaque, and more
								</p>
							</div>

							<div className="bg-white p-6 rounded-2xl shadow-sm">
								<div className="font-bold text-xl mb-2">Online Options</div>
								<p className="text-sm text-slate-600 mb-4">
									Juciao paddles (₱2,000-₱4,000), Tecniq Introplay sets. Popular in PH
									pickleball Facebook groups.
								</p>
								<p className="text-xs text-slate-500">
									Check Philippine Pickleball Federation FB group for recommendations
								</p>
							</div>

							<div className="bg-white p-6 rounded-2xl shadow-sm">
								<div className="font-bold text-xl mb-2">paddlX Shop</div>
								<p className="text-sm text-slate-600 mb-4">
									Curated selection of tested paddles, balls, and accessories. Demo
									program available.
								</p>
								<p className="text-xs text-slate-500">
									Browse online or visit partner venues
								</p>
							</div>

							<div className="bg-white p-6 rounded-2xl shadow-sm">
								<div className="font-bold text-xl mb-2">Club Pro Shops</div>
								<p className="text-sm text-slate-600 mb-4">
									Many pickleball clubs have on-site pro shops. Often allow demos before
									purchase.
								</p>
								<p className="text-xs text-slate-500">
									Ask at your local court or club
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* Indoor vs Outdoor Balls Comparison */}
				<section className="py-20">
					<div className="container mx-auto px-6">
						<div className="text-center mb-16">
							<h2 className="text-3xl lg:text-4xl font-bold text-dark-slate">
								Indoor vs. Outdoor Pickleballs
							</h2>
							<p className="text-slate-500 mt-4 max-w-2xl mx-auto">
								Using the right ball for your court surface is critical for proper
								gameplay.
							</p>
						</div>
						<div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
							<div className="overflow-x-auto">
								<table className="w-full">
									<thead className="bg-orange-600 text-white">
										<tr>
											<th className="px-6 py-4 text-left font-bold">Feature</th>
											<th className="px-6 py-4 text-left font-bold">Indoor Balls</th>
											<th className="px-6 py-4 text-left font-bold">Outdoor Balls</th>
										</tr>
									</thead>
									<tbody className="divide-y divide-slate-200">
										<tr>
											<td className="px-6 py-4 font-semibold">Number of Holes</td>
											<td className="px-6 py-4">26 larger holes</td>
											<td className="px-6 py-4">40 smaller holes</td>
										</tr>
										<tr className="bg-slate-50">
											<td className="px-6 py-4 font-semibold">Material</td>
											<td className="px-6 py-4">Softer, lighter plastic</td>
											<td className="px-6 py-4">Harder, thicker plastic</td>
										</tr>
										<tr>
											<td className="px-6 py-4 font-semibold">Weight</td>
											<td className="px-6 py-4">Lighter (~0.8 oz)</td>
											<td className="px-6 py-4">Heavier (~0.9 oz)</td>
										</tr>
										<tr className="bg-slate-50">
											<td className="px-6 py-4 font-semibold">Bounce</td>
											<td className="px-6 py-4">Lower, slower, more control</td>
											<td className="px-6 py-4">Higher, faster, more bounce</td>
										</tr>
										<tr>
											<td className="px-6 py-4 font-semibold">Sound</td>
											<td className="px-6 py-4">Quieter</td>
											<td className="px-6 py-4">Louder</td>
										</tr>
										<tr className="bg-slate-50">
											<td className="px-6 py-4 font-semibold">Durability</td>
											<td className="px-6 py-4">Get soft/mushy over time</td>
											<td className="px-6 py-4">Crack easily on concrete</td>
										</tr>
										<tr>
											<td className="px-6 py-4 font-semibold">Best Surface</td>
											<td className="px-6 py-4">Gym floors, smooth indoor courts</td>
											<td className="px-6 py-4">Concrete, asphalt outdoor courts</td>
										</tr>
										<tr className="bg-slate-50">
											<td className="px-6 py-4 font-semibold">Wind Resistance</td>
											<td className="px-6 py-4">Poor (not needed)</td>
											<td className="px-6 py-4">Excellent (40 holes stabilize)</td>
										</tr>
										<tr>
											<td className="px-6 py-4 font-semibold">Color</td>
											<td className="px-6 py-4">Bright yellow</td>
											<td className="px-6 py-4">Yellow, orange, green</td>
										</tr>
										<tr className="bg-slate-50">
											<td className="px-6 py-4 font-semibold">Popular Brands</td>
											<td className="px-6 py-4">Onix Fuse, Jugs Indoor</td>
											<td className="px-6 py-4">Franklin X-40, Onix Dura Fast 40</td>
										</tr>
									</tbody>
								</table>
							</div>
							<div className="bg-orange-50 p-6 border-t border-orange-100">
								<p className="text-center text-sm text-slate-700">
									<strong>Philippines Tip:</strong> Most courts here are outdoor
									concrete. Stock up on outdoor balls with 40 holes. In tropical heat,
									balls crack faster—buy in bulk (12-24 balls) for better value.
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* FAQ Section */}
				<div id="faq">
					<FAQSection
						faqs={gearFaqs}
						title="Gear FAQs"
						subtitle="Comprehensive answers to all your pickleball equipment questions"
						colorScheme="accent"
					/>
				</div>

				{/* CTA Section */}
				<DynamicCtaSection
					buttonHref="/shop"
					buttonText="Shop Pickleball Gear"
					featureList={[
						'Curated quality equipment',
						'Philippines pricing in pesos',
						'Demo programs available',
					]}
					title="Ready to Gear Up?"
					subtitle="Browse our selection of tested and approved pickleball equipment. From beginner sets to pro-level paddles, we've got you covered."
					colorScheme="orange"
				/>
			</div>
		</>
	);
}
