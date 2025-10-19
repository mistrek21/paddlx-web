// src/app/help/courts/page.tsx

import { Metadata } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import {
	MapPin,
	Calendar,
	Clock,
	Users,
	Sun,
	Home,
	Zap,
	Star,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import FAQSection, { FAQ } from '../_components/faq/FaqSection';
import DynamicCtaSection from '../_components/cta/DynamicCtaSection';

const courtFaqs: FAQ[] = [
	// Court Basics
	{
		id: 1,
		question: 'What is the difference between indoor and outdoor courts?',
		answer:
			'Indoor courts have smooth surfaces (hardwood, rubber, polyurethane), use softer balls with 26 larger holes, offer climate control, and are unaffected by weather. Outdoor courts have rougher surfaces (concrete, asphalt), use harder balls with 40 smaller holes, and gameplay is influenced by wind and sun. Indoor courts are gentler on joints and provide more predictable ball bounce.',
		category: 'Court Help',
	},
	{
		id: 2,
		question: 'How do I find courts near me on paddlX?',
		answer:
			'Use our court finder to search by your city or location. Filter results by indoor/outdoor, amenities, price range, and availability. Each court listing shows photos, exact address, operating hours, pricing, and real reviews from other players.',
		category: 'Court Help',
	},
	{
		id: 3,
		question: 'What should I bring when renting a court?',
		answer:
			"Bring your paddle (or rent one on-site), court shoes with non-marking soles (no black-soled shoes), water, and a towel. Most facilities provide pickleballs. Check the specific court listing for what's included and available for rent.",
		category: 'Court Help',
	},
	{
		id: 4,
		question: 'Can I play on any court without a reservation?',
		answer:
			"Walk-in availability varies by venue. Some courts offer open play sessions where you can drop in, while others require advance reservations. Check each court's schedule and reservation policy before visiting.",
		category: 'Court Help',
	},

	// Booking Courts
	{
		id: 5,
		question: 'How do I book a court?',
		answer:
			'Search for courts in your area, select your preferred venue, choose an available date and time slot, specify the number of players, and confirm your booking with payment. Youll receive instant confirmation via email and in-app notification.',
		category: 'Court Help',
	},
	{
		id: 6,
		question: 'How far in advance can I book a court?',
		answer:
			"Most courts allow bookings 7-14 days in advance. Premium members may get extended booking windows (up to 30 days). Check each venue's specific booking policy for exact timeframes.",
		category: 'Court Help',
	},
	{
		id: 7,
		question: 'What is the minimum and maximum booking duration?',
		answer:
			'Standard bookings are in 1-hour increments with a minimum of 1 hour. Most venues allow up to 4 hours per booking session. To prevent monopolization, some venues limit back-to-back reservations.',
		category: 'Court Help',
	},
	{
		id: 8,
		question: 'How many people can I include in my court booking?',
		answer:
			"Most court bookings allow up to 6 players per court (doubles play plus rotation). Singles requires 2 players minimum. The cost can be split among all players. Check the specific venue's player limit policy.",
		category: 'Court Help',
	},
	{
		id: 9,
		question: 'Can I book multiple courts at the same time?',
		answer:
			'Yes, for large groups, tournaments, or events. For standard play, most venues limit users to 2 courts per session to ensure fair access. Contact the venue directly for bulk or private event bookings.',
		category: 'Court Help',
	},
	{
		id: 10,
		question: "Why can't I see available time slots?",
		answer:
			'If no slots appear, the court may be fully booked, outside operating hours, or blocked for maintenance/private events. Try searching different dates, times, or alternative venues nearby.',
		category: 'Court Help',
	},

	// Pricing & Fees
	{
		id: 11,
		question: 'How much does it cost to rent a court?',
		answer:
			'Court rental costs vary by location, time, and court type. Indoor courts typically range from ₱400-₱800/hour, outdoor courts from ₱300-₱600/hour. Peak hours (evenings, weekends) cost more than off-peak. Prices are shown upfront before booking.',
		category: 'Court Help',
	},
	{
		id: 12,
		question: 'What is peak vs. non-peak pricing?',
		answer:
			'Peak hours (weekday evenings 5PM-10PM, weekends, holidays) have higher rates due to demand. Non-peak hours (weekday mornings/afternoons) offer discounted rates. This encourages balanced court utilization throughout the day.',
		category: 'Court Help',
	},
	{
		id: 13,
		question: 'Are there membership options instead of pay-per-play?',
		answer:
			'Many venues offer memberships with benefits like unlimited open play, discounted court rentals, priority booking, free equipment rental, and exclusive member events. Compare membership vs. pay-per-play based on your playing frequency.',
		category: 'Court Help',
	},
	{
		id: 14,
		question: "What's included in the court rental fee?",
		answer:
			'Basic court rental includes court access, net setup, and sometimes pickleballs. Additional fees may apply for paddle rental (₱50-₱100), ball machine rental, lighting for outdoor night play, or guest fees for non-members.',
		category: 'Court Help',
	},

	// Cancellation & Changes
	{
		id: 15,
		question: 'Can I cancel or reschedule my court booking?',
		answer:
			'Cancellation policies vary by venue. Most allow free cancellations 24-48 hours before your booking. Late cancellations (within 24 hours) typically incur a 50% fee. Same-day cancellations or no-shows are charged the full amount.',
		category: 'Court Help',
	},
	{
		id: 16,
		question: 'How do I cancel my booking?',
		answer:
			"Go to 'My Bookings', select the booking you want to cancel, and click 'Cancel Booking'. Follow the prompts to confirm. Eligible refunds are processed automatically within 5-10 business days according to the venue's policy.",
		category: 'Court Help',
	},
	{
		id: 17,
		question: "What happens if I'm late or don't show up?",
		answer:
			'Your reserved time starts at the booked time whether you arrive or not—there are no time extensions for late arrivals. No-shows are charged the full amount and may result in booking restrictions for repeat offenders.',
		category: 'Court Help',
	},
	{
		id: 18,
		question: 'What if it rains for my outdoor court booking?',
		answer:
			"Most venues offer automatic rain-out policies for outdoor courts. If weather makes play unsafe, you'll receive a full refund or rebooking credit. Some venues may transfer you to an available indoor court at no extra charge.",
		category: 'Court Help',
	},
	{
		id: 19,
		question: 'Can I transfer my booking to someone else?',
		answer:
			'Booking transfers depend on venue policy. Contact the venue directly to request a transfer. Some allow it with no fee, while others treat it as a cancellation and rebooking, which may incur fees.',
		category: 'Court Help',
	},

	// Court Features & Amenities
	{
		id: 20,
		question: 'What amenities should I look for in a quality court?',
		answer:
			'Look for: regulation-sized courts (20x44 feet), smooth non-slip surfaces, permanent nets at proper height, clear lighting, adequate buffer space around courts, climate control (indoor), shade structures (outdoor), clean locker rooms, water access, pro shop, and parking.',
		category: 'Court Help',
	},
	{
		id: 21,
		question: 'Are locker rooms and showers available?',
		answer:
			"Most indoor facilities provide locker rooms with showers and changing areas. Outdoor-only venues may have basic restrooms only. Check each venue's amenities section for specific facilities available.",
		category: 'Court Help',
	},
	{
		id: 22,
		question: 'Can I buy food and drinks at the venue?',
		answer:
			"Many facilities have on-site cafeterias, juice bars, or snack shops. Some allow outside food and drinks, while others don't. Venues typically provide water fountains or water stations. Check individual venue policies.",
		category: 'Court Help',
	},
	{
		id: 23,
		question: 'Is equipment available for rent?',
		answer:
			'Most venues rent paddles (₱50-₱150), some offer ball machine rentals (₱200-₱500/hour), and pickleballs for purchase. Pro shops may sell paddles, apparel, and accessories. Call ahead to confirm availability.',
		category: 'Court Help',
	},
	{
		id: 24,
		question: 'Are the courts accessible for people with disabilities?',
		answer:
			'Accessibility varies by venue. Look for facilities with wheelchair-accessible entrances, parking, restrooms, and court-level access. Contact venues directly to discuss specific accessibility needs.',
		category: 'Court Help',
	},

	// Rules & Etiquette
	{
		id: 25,
		question: 'Do I need to sign a waiver?',
		answer:
			'Yes, all players must sign a liability waiver before playing. This is typically done once during your first visit or booking. Digital waivers are provided through paddlX and are legally binding.',
		category: 'Court Help',
	},
	{
		id: 26,
		question: 'What is proper court etiquette?',
		answer:
			'Arrive on time, respect court boundaries, rotate players fairly in doubles, retrieve balls promptly, keep noise reasonable, clean up after yourself, be courteous to other players, and follow venue-specific rules posted on-site.',
		category: 'Court Help',
	},
	{
		id: 27,
		question: 'Can I bring guests or spectators?',
		answer:
			"Most venues welcome spectators in designated areas. If guests want to play, they must be included in your booking (up to the player limit) and may incur guest fees if you're a member. Some venues charge spectator fees for tournaments.",
		category: 'Court Help',
	},
	{
		id: 28,
		question: 'Are there age restrictions for court bookings?',
		answer:
			'Most courts allow players of all ages. Minors (under 18) may need adult supervision or guardian consent. Some venues have junior-only or adult-only time slots. Check individual venue age policies.',
		category: 'Court Help',
	},
	{
		id: 29,
		question: 'Can I play music while on the court?',
		answer:
			'Music policies vary. Some outdoor venues allow low-volume personal music, but most facilities prohibit it to avoid disturbing other players. Always use headphones if music is permitted, and keep volume low enough to hear calls from your playing partners.',
		category: 'Court Help',
	},

	// Open Play & Drop-In
	{
		id: 30,
		question: 'What is open play/drop-in?',
		answer:
			'Open play is an organized session where players can show up without a partner. Players rotate in and out to mix with others of similar skill levels. Its a great way to meet new players, practice, and play multiple games.',
		category: 'Court Help',
	},
	{
		id: 31,
		question: 'Do I need to register for open play?',
		answer:
			'Most venues require advance registration to manage capacity, even for open play. Register through paddlX or the venues system, pay the open play fee (₱150-₱300), and show up during the scheduled time.',
		category: 'Court Help',
	},
	{
		id: 32,
		question: 'How are players matched during open play?',
		answer:
			'Players are typically grouped by self-reported skill level (beginner, intermediate, advanced). Common systems include paddle racks (first 4 paddles up play next) or organized rotations by the venue coordinator.',
		category: 'Court Help',
	},
	{
		id: 33,
		question: 'Can I leave open play early?',
		answer:
			'Yes, you can leave early, but there are no partial refunds. If you must cancel, do so at least 2 hours before to avoid fees. Most open play sessions last 2-3 hours.',
		category: 'Court Help',
	},

	// Membership Questions
	{
		id: 34,
		question: 'Should I get a membership or pay per play?',
		answer:
			'If you play 2-3+ times per week, membership typically offers better value. Calculate: (weekly plays × hourly rate × 4) vs. monthly membership cost. Memberships also include perks like priority booking, free open play, and equipment discounts.',
		category: 'Court Help',
	},
	{
		id: 35,
		question: 'What types of memberships are available?',
		answer:
			'Common types: Unlimited (unrestricted access), Off-Peak (weekday daytime only), Social (open play only), Premium (includes coaching/clinics), Family (multiple members), and Annual (discounted yearly rate). Each venue offers different tiers.',
		category: 'Court Help',
	},
	{
		id: 36,
		question: 'Can I pause or freeze my membership?',
		answer:
			'Many venues allow one membership freeze per year for up to 3 months (medical, travel, etc.). Requirements and fees vary. Contact your venues membership coordinator to request a freeze.',
		category: 'Court Help',
	},
	{
		id: 37,
		question: 'How do I cancel my membership?',
		answer:
			'Memberships typically require 30-day advance notice for cancellation. Submit cancellation through your venues member portal or contact them directly. Youll be charged for the current billing cycle but not beyond.',
		category: 'Court Help',
	},

	// Troubleshooting
	{
		id: 38,
		question: 'The court I booked was not as described. What do I do?',
		answer:
			'Contact the venue immediately through paddlX messaging or on-site staff. If the issue cant be resolved, request a partial or full refund through the app. Document issues with photos. Our support team can help mediate disputes.',
		category: 'Court Help',
	},
	{
		id: 39,
		question: 'Another group is using my reserved court. What should I do?',
		answer:
			'Show your booking confirmation to the group or venue staff. Court reservations are binding. If the issue persists, contact venue management immediately. You may be entitled to a refund or free extended time.',
		category: 'Court Help',
	},
	{
		id: 40,
		question: 'The court is in poor condition or unsafe. Can I get a refund?',
		answer:
			'Yes. If courts have safety hazards (cracks, slippery surfaces, broken nets, poor lighting), notify venue staff immediately. Request to move to a different court or receive a full refund. Player safety is the top priority.',
		category: 'Court Help',
	},
	{
		id: 41,
		question: 'I accidentally booked the wrong date or time. Can I change it?',
		answer:
			'If you catch the error quickly, you may be able to cancel and rebook within the free cancellation window. Otherwise, modification policies apply. Contact the venue directly—some may accommodate changes without fees.',
		category: 'Court Help',
	},
	{
		id: 42,
		question: 'Why was my booking cancelled by the venue?',
		answer:
			"Venues may cancel for: emergency maintenance, weather-related closures, private events, or facility issues. You'll receive immediate notification and automatic refund. Contact the venue for explanation and help rebooking.",
		category: 'Court Help',
	},
];

// SEO Metadata
export const metadata: Metadata = {
	title: 'Court Booking Help & Guide | paddlX',
	description:
		'Learn how to book pickleball courts on paddlX. Find answers about indoor vs outdoor courts, pricing, cancellations, amenities, and booking policies.',
	keywords: [
		'pickleball court booking',
		'how to rent pickleball court',
		'indoor outdoor pickleball courts',
		'court rental pricing',
		'pickleball court help',
		'booking cancellation policy',
		'court amenities',
	],
	openGraph: {
		title: 'Court Booking Help & Guide | paddlX',
		description:
			'Complete guide to booking pickleball courts. Learn about court types, pricing, policies, and how to find the perfect venue.',
		url: 'https://www.paddlx.com/help/courts',
		type: 'website',
	},
};

// JSON-LD Structured Data
const jsonLd = {
	'@context': 'https://schema.org',
	'@type': 'FAQPage',
	'mainEntity': courtFaqs.slice(0, 10).map((faq) => ({
		'@type': 'Question',
		'name': faq.question,
		'acceptedAnswer': {
			'@type': 'Answer',
			'text': faq.answer,
		},
	})),
};

export default function CourtsHelpPage() {
	return (
		<>
			<Head>
				<script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
			</Head>
			<div className="bg-white text-slate-800">
				{/* Hero Section */}
				<section className="relative bg-teal-50 py-20 lg:py-32">
					<div className="container mx-auto px-6 text-center">
						<MapPin className="w-16 h-16 mx-auto text-teal-600 mb-6" />
						<h1 className="text-4xl lg:text-6xl font-extrabold text-dark-slate mb-4 leading-tight">
							Court Booking Help & Guide
						</h1>
						<p className="text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto mb-8">
							Everything you need to know about finding, booking, and playing on
							pickleball courts through paddlX. From indoor vs outdoor to pricing and
							policies.
						</p>
						<Button
							asChild
							size="lg"
							className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg shadow-teal-200 transition-transform hover:scale-105"
						>
							<Link href="/courts">Find Courts Near You</Link>
						</Button>
					</div>
				</section>

				{/* Indoor vs Outdoor Comparison */}
				<section className="py-20">
					<div className="container mx-auto px-6">
						<div className="text-center mb-16">
							<h2 className="text-3xl lg:text-4xl font-bold text-dark-slate">
								Indoor vs. Outdoor Courts
							</h2>
							<p className="text-slate-500 mt-4 max-w-2xl mx-auto">
								Understanding the key differences helps you choose the right court for
								your game.
							</p>
						</div>
						<div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
							{/* Indoor Courts */}
							<div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-100">
								<div className="flex items-center mb-6">
									<Home className="w-10 h-10 text-blue-600 mr-4" />
									<h3 className="text-2xl font-bold text-dark-slate">Indoor Courts</h3>
								</div>
								<ul className="space-y-4">
									<li className="flex items-start">
										<Star className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
										<div>
											<p className="font-semibold">Climate Controlled</p>
											<p className="text-sm text-slate-600">
												Play comfortably year-round regardless of weather
											</p>
										</div>
									</li>
									<li className="flex items-start">
										<Star className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
										<div>
											<p className="font-semibold">Smooth Surfaces</p>
											<p className="text-sm text-slate-600">
												Hardwood, rubber, or polyurethane for consistent bounce
											</p>
										</div>
									</li>
									<li className="flex items-start">
										<Star className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
										<div>
											<p className="font-semibold">Softer Balls</p>
											<p className="text-sm text-slate-600">
												26 larger holes, lighter, easier to control
											</p>
										</div>
									</li>
									<li className="flex items-start">
										<Star className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
										<div>
											<p className="font-semibold">Joint-Friendly</p>
											<p className="text-sm text-slate-600">
												Cushioned surfaces reduce impact on knees and ankles
											</p>
										</div>
									</li>
									<li className="flex items-start">
										<Star className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
										<div>
											<p className="font-semibold">Premium Amenities</p>
											<p className="text-sm text-slate-600">
												Locker rooms, pro shops, cafes, spectator areas
											</p>
										</div>
									</li>
								</ul>
								<div className="mt-6 p-4 bg-white rounded-lg">
									<p className="text-sm font-semibold text-blue-900">
										Typical Cost: ₱400-₱800/hour
									</p>
								</div>
							</div>

							{/* Outdoor Courts */}
							<div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-100">
								<div className="flex items-center mb-6">
									<Sun className="w-10 h-10 text-green-600 mr-4" />
									<h3 className="text-2xl font-bold text-dark-slate">Outdoor Courts</h3>
								</div>
								<ul className="space-y-4">
									<li className="flex items-start">
										<Star className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
										<div>
											<p className="font-semibold">Natural Environment</p>
											<p className="text-sm text-slate-600">
												Fresh air, sunshine, and outdoor atmosphere
											</p>
										</div>
									</li>
									<li className="flex items-start">
										<Star className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
										<div>
											<p className="font-semibold">Concrete/Asphalt</p>
											<p className="text-sm text-slate-600">
												Rougher surface, more unpredictable bounce
											</p>
										</div>
									</li>
									<li className="flex items-start">
										<Star className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
										<div>
											<p className="font-semibold">Harder Balls</p>
											<p className="text-sm text-slate-600">
												40 smaller holes, heavier, wind-resistant
											</p>
										</div>
									</li>
									<li className="flex items-start">
										<Star className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
										<div>
											<p className="font-semibold">Weather Dependent</p>
											<p className="text-sm text-slate-600">
												Rain, wind, and sun can affect gameplay
											</p>
										</div>
									</li>
									<li className="flex items-start">
										<Star className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
										<div>
											<p className="font-semibold">More Affordable</p>
											<p className="text-sm text-slate-600">
												Lower rental rates, community court options
											</p>
										</div>
									</li>
								</ul>
								<div className="mt-6 p-4 bg-white rounded-lg">
									<p className="text-sm font-semibold text-green-900">
										Typical Cost: ₱300-₱600/hour
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* How to Book Section */}
				<section className="bg-slate-50 py-20">
					<div className="container mx-auto px-6">
						<div className="text-center mb-16">
							<h2 className="text-3xl lg:text-4xl font-bold text-dark-slate">
								How to Book a Court
							</h2>
							<p className="text-slate-500 mt-4 max-w-2xl mx-auto">
								Booking courts on paddlX is quick and easy. Follow these simple steps.
							</p>
						</div>
						<div className="max-w-4xl mx-auto">
							<div className="space-y-6">
								<div className="flex items-start bg-white p-6 rounded-xl shadow-sm">
									<div className="bg-teal-100 text-teal-700 font-bold rounded-full w-12 h-12 flex items-center justify-center mr-6 flex-shrink-0 text-xl">
										1
									</div>
									<div>
										<h3 className="text-xl font-bold mb-2 flex items-center">
											<MapPin className="w-5 h-5 mr-2 text-teal-600" />
											Search for Courts
										</h3>
										<p className="text-slate-600">
											Use the court finder to search by location, city, or neighborhood.
											Filter by indoor/outdoor, price range, amenities, and ratings to find
											your ideal venue.
										</p>
									</div>
								</div>

								<div className="flex items-start bg-white p-6 rounded-xl shadow-sm">
									<div className="bg-teal-100 text-teal-700 font-bold rounded-full w-12 h-12 flex items-center justify-center mr-6 flex-shrink-0 text-xl">
										2
									</div>
									<div>
										<h3 className="text-xl font-bold mb-2 flex items-center">
											<Calendar className="w-5 h-5 mr-2 text-teal-600" />
											Select Date & Time
										</h3>
										<p className="text-slate-600">
											Choose your preferred date and browse available time slots. Green
											slots are available, gray are booked. Select your desired duration
											(1-4 hours typically).
										</p>
									</div>
								</div>

								<div className="flex items-start bg-white p-6 rounded-xl shadow-sm">
									<div className="bg-teal-100 text-teal-700 font-bold rounded-full w-12 h-12 flex items-center justify-center mr-6 flex-shrink-0 text-xl">
										3
									</div>
									<div>
										<h3 className="text-xl font-bold mb-2 flex items-center">
											<Users className="w-5 h-5 mr-2 text-teal-600" />
											Add Players & Extras
										</h3>
										<p className="text-slate-600">
											Specify the number of players (2-6 typically). Add any extras like
											paddle rentals, ball machine, or lighting for outdoor night play if
											needed.
										</p>
									</div>
								</div>

								<div className="flex items-start bg-white p-6 rounded-xl shadow-sm">
									<div className="bg-teal-100 text-teal-700 font-bold rounded-full w-12 h-12 flex items-center justify-center mr-6 flex-shrink-0 text-xl">
										4
									</div>
									<div>
										<h3 className="text-xl font-bold mb-2 flex items-center">
											<Zap className="w-5 h-5 mr-2 text-teal-600" />
											Confirm & Pay
										</h3>
										<p className="text-slate-600">
											Review your booking details, total cost, and cancellation policy.
											Complete payment securely through Stripe. Receive instant
											confirmation via email and in-app.
										</p>
									</div>
								</div>
							</div>

							<div className="mt-12 p-8 bg-gradient-to-r from-teal-500 to-blue-500 rounded-2xl text-white">
								<h3 className="text-2xl font-bold mb-4">
									Pro Tip: Book Early for Best Availability
								</h3>
								<p className="mb-4">
									Popular courts fill up quickly, especially during peak hours (weekday
									evenings and weekends). Book 7-14 days in advance to secure your
									preferred time slot.
								</p>
								<p className="text-teal-100">
									<strong>Members get priority booking</strong> and can reserve courts up
									to 30 days in advance!
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* Quick Reference Cards */}
				<section className="py-20">
					<div className="container mx-auto px-6">
						<div className="text-center mb-16">
							<h2 className="text-3xl lg:text-4xl font-bold text-dark-slate">
								Quick Reference Guide
							</h2>
							<p className="text-slate-500 mt-4 max-w-2xl mx-auto">
								Essential information at a glance for court bookings.
							</p>
						</div>
						<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
							<div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
								<Calendar className="w-10 h-10 text-teal-600 mb-4" />
								<h3 className="text-lg font-bold mb-2">Booking Window</h3>
								<p className="text-slate-600 text-sm mb-3">
									7-14 days in advance (standard users)
								</p>
								<p className="text-teal-600 text-sm font-semibold">
									30 days for premium members
								</p>
							</div>

							<div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
								<Clock className="w-10 h-10 text-orange-600 mb-4" />
								<h3 className="text-lg font-bold mb-2">Cancellation Policy</h3>
								<p className="text-slate-600 text-sm mb-3">
									Free cancellation 24-48 hours before
								</p>
								<p className="text-orange-600 text-sm font-semibold">
									Late cancellations: 50% fee
								</p>
							</div>

							<div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
								<Users className="w-10 h-10 text-blue-600 mb-4" />
								<h3 className="text-lg font-bold mb-2">Players Per Court</h3>
								<p className="text-slate-600 text-sm mb-3">
									2-6 players typically allowed
								</p>
								<p className="text-blue-600 text-sm font-semibold">
									Split cost among all players
								</p>
							</div>

							<div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
								<Zap className="w-10 h-10 text-purple-600 mb-4" />
								<h3 className="text-lg font-bold mb-2">Booking Duration</h3>
								<p className="text-slate-600 text-sm mb-3">
									1-4 hours in 1-hour increments
								</p>
								<p className="text-purple-600 text-sm font-semibold">
									Back-to-back limits may apply
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* Membership vs Pay-Per-Play */}
				<section className="bg-gradient-to-br from-slate-50 to-teal-50 py-20">
					<div className="container mx-auto px-6">
						<div className="text-center mb-16">
							<h2 className="text-3xl lg:text-4xl font-bold text-dark-slate">
								Membership vs. Pay-Per-Play
							</h2>
							<p className="text-slate-500 mt-4 max-w-2xl mx-auto">
								Not sure which option is right for you? Here's a comparison to help you
								decide.
							</p>
						</div>
						<div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
							<div className="overflow-x-auto">
								<table className="w-full">
									<thead className="bg-teal-600 text-white">
										<tr>
											<th className="px-6 py-4 text-left font-bold">Feature</th>
											<th className="px-6 py-4 text-left font-bold">Pay-Per-Play</th>
											<th className="px-6 py-4 text-left font-bold">Membership</th>
										</tr>
									</thead>
									<tbody className="divide-y divide-slate-200">
										<tr>
											<td className="px-6 py-4 font-semibold">Best For</td>
											<td className="px-6 py-4">Casual players (1x/week)</td>
											<td className="px-6 py-4">Regular players (2-3+x/week)</td>
										</tr>
										<tr className="bg-slate-50">
											<td className="px-6 py-4 font-semibold">Court Booking</td>
											<td className="px-6 py-4">₱400-₱800/hour standard rate</td>
											<td className="px-6 py-4">Free or heavily discounted</td>
										</tr>
										<tr>
											<td className="px-6 py-4 font-semibold">Open Play</td>
											<td className="px-6 py-4">₱150-₱300 per session</td>
											<td className="px-6 py-4">Unlimited free access</td>
										</tr>
										<tr className="bg-slate-50">
											<td className="px-6 py-4 font-semibold">Priority Booking</td>
											<td className="px-6 py-4">7-14 days advance</td>
											<td className="px-6 py-4">Up to 30 days advance</td>
										</tr>
										<tr>
											<td className="px-6 py-4 font-semibold">Equipment Rental</td>
											<td className="px-6 py-4">Full price</td>
											<td className="px-6 py-4">Free or discounted (50% off)</td>
										</tr>
										<tr className="bg-slate-50">
											<td className="px-6 py-4 font-semibold">Clinics & Lessons</td>
											<td className="px-6 py-4">Full price</td>
											<td className="px-6 py-4">10-30% member discount</td>
										</tr>
										<tr>
											<td className="px-6 py-4 font-semibold">Guest Privileges</td>
											<td className="px-6 py-4">Pay guest rate</td>
											<td className="px-6 py-4">Bring guests at reduced rates</td>
										</tr>
										<tr className="bg-slate-50">
											<td className="px-6 py-4 font-semibold">Commitment</td>
											<td className="px-6 py-4">None - play when you want</td>
											<td className="px-6 py-4">
												Monthly/annual (30-day notice to cancel)
											</td>
										</tr>
									</tbody>
								</table>
							</div>
							<div className="bg-teal-50 p-6 border-t border-teal-100">
								<p className="text-center text-sm text-slate-700">
									<strong>Calculate Your Break-Even Point:</strong> If you play 2-3 times
									per week, membership typically pays for itself. Example: 3
									sessions/week × ₱600/hour × 4 weeks = ₱7,200 vs. ₱2,500-₱4,000 monthly
									membership.
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* FAQ Section */}
				<div id="faq">
					<FAQSection
						faqs={courtFaqs}
						title="Court Booking FAQs"
						subtitle="Find detailed answers to all your court-related questions"
						colorScheme="primary"
					/>
				</div>

				{/* CTA Section */}
				<DynamicCtaSection
					buttonHref="/courts"
					buttonText="Browse Courts Near You"
					featureList={[
						'Search 100+ courts nationwide',
						'Real-time availability',
						'Instant booking confirmation',
					]}
					title="Ready to Play?"
					subtitle="Find and book the perfect pickleball court for your next game. Indoor, outdoor, beginner-friendly, or tournament-ready—we've got you covered."
					colorScheme="teal"
				/>
			</div>
		</>
	);
}
