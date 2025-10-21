// src/app/help/refund-policy/page.tsx

import { Metadata } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import {
	RefreshCw,
	Clock,
	CheckCircle,
	AlertTriangle,
	CreditCard,
	HelpCircle,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import DynamicCtaSection from '../../_components/cta/DynamicCtaSection';

export const metadata: Metadata = {
	title: 'Refund Policy | paddlX',
	description:
		'Understand paddlX’s refund rules for court bookings, tournaments, coaching sessions, open matches, and multi-tenant club cancellations.',
	keywords: [
		'paddlX refund policy',
		'booking refunds',
		'court booking refund',
		'tournament refund',
		'multitenancy refund',
		'Playtomic refund',
	],
	openGraph: {
		title: 'Refund Policy | paddlX',
		description:
			'Learn how and when refunds are issued for cancellations, no-shows, club-initiated changes, and weather interruptions.',
		url: 'https://www.paddlx.com/help/refund-policy',
		type: 'website',
	},
};

const jsonLd = {
	'@context': 'https://schema.org',
	'@type': 'WebPage',
	'name': 'paddlX Refund Policy',
	'description':
		'Detailed refund and cancellation policy for multil-tenant court and event bookings on paddlX',
	'url': 'https://www.paddlx.com/help/refund-policy',
};

export default function RefundPolicyPage() {
	return (
		<>
			<Head>
				<script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
			</Head>
			<div className="bg-white text-slate-800">
				{/* Hero */}
				<section className="bg-teal-50 py-20 text-center">
					<RefreshCw className="w-16 h-16 mx-auto text-teal-600 mb-6" />
					<h1 className="text-5xl font-extrabold mb-4">Refund Policy</h1>
					<p className="text-lg text-slate-600 max-w-2xl mx-auto">
						Last Updated: October 21, 2025. Learn when and how we issue refunds for
						user cancellations, club-initiated changes, no-shows, and weather events.
					</p>
				</section>

				{/* Quick Navigation */}
				<section className="py-12 border-b border-slate-200">
					<div className="container mx-auto px-6 max-w-3xl grid grid-cols-2 gap-4 text-sm">
						{[
							{ label: 'User Cancellations', href: '#user-cancel' },
							{ label: 'Club Cancellations', href: '#club-cancel' },
							{ label: 'No-Show Policy', href: '#no-show' },
							{ label: 'Weather & Unforeseen', href: '#weather' },
							{ label: 'Processing Time', href: '#processing' },
							{ label: 'Refund Credits vs Cash', href: '#credits' },
							{ label: 'Special Events', href: '#tournaments' },
							{ label: 'Contact Support', href: '#contact' },
						].map((item) => (
							<Link
								key={item.href}
								href={item.href}
								className="text-teal-600 hover:underline"
							>
								{item.label}
							</Link>
						))}
					</div>
				</section>

				<section className="container mx-auto px-6 py-16 max-w-4xl space-y-16">
					{/* 1. User Cancellations */}
					<div id="user-cancel" className="scroll-mt-20">
						<h2 className="text-3xl font-bold text-dark-slate mb-4">
							1. User-Initiated Cancellations
						</h2>
						<p className="text-slate-700 mb-4">
							You may cancel any booking, match registration, or coaching session
							through your account or the app. Refund eligibility depends on the type
							of booking:
						</p>
						<ul className="list-disc pl-6 space-y-2 text-slate-700">
							<li>
								<strong>Court Bookings:</strong> Full refund if cancelled ≥24 hours
								before start time.
							</li>
							<li>
								<strong>Open Matches:</strong> Full refund if cancelled ≥24 hours
								before; partial or no refund if within 24 hours.
							</li>
							<li>
								<strong>Private Sessions/Coaching:</strong> Full refund if cancelled ≥48
								hours before; no refund if within 48 hours.
							</li>
							<li>
								<strong>Tournament Registrations:</strong> Refund terms set by
								organizer; displayed at checkout.
							</li>
						</ul>
					</div>

					{/* 2. Club Cancellations */}
					<div id="club-cancel" className="scroll-mt-20">
						<h2 className="text-3xl font-bold text-dark-slate mb-4">
							2. Club-Initiated Cancellations
						</h2>
						<p className="text-slate-700 mb-4">
							If a venue, coach, or organizer cancels your booking or event, you
							receive a full refund or account credit automatically:
						</p>
						<ul className="list-disc pl-6 space-y-2 text-slate-700">
							<li>
								<strong>All Booking Types:</strong> Refund to original payment method or
								instant credit to your paddlX wallet.
							</li>
							<li>
								<strong>Partial Sessions:</strong> Pro-rated refunds if session
								interrupted.
							</li>
						</ul>
					</div>

					{/* 3. No-Show Policy */}
					<div id="no-show" className="scroll-mt-20">
						<h2 className="text-3xl font-bold text-dark-slate mb-4">
							3. No-Show and Late Cancellation
						</h2>
						<p className="text-slate-700 mb-4">
							Late cancellations or no-shows result in forfeiture of the booking fee.
							This policy encourages commitment and matches industry standards:
						</p>
						<ul className="list-disc pl-6 space-y-2 text-slate-700">
							<li>
								<strong>No-Shows:</strong> No refund or credit; full charge applies.
							</li>
							<li>
								<strong>Late Cancellations:</strong> Cancelling within the cutoff window
								(24 h for courts/matches, 48 h for coaching) results in no refund.
							</li>
						</ul>
					</div>

					{/* 4. Weather & Unforeseen */}
					<div id="weather" className="scroll-mt-20">
						<h2 className="text-3xl font-bold text-dark-slate mb-4">
							4. Weather & Unforeseen Events
						</h2>
						<p className="text-slate-700 mb-4">
							If play is cancelled due to weather or other force majeure:
						</p>
						<ul className="list-disc pl-6 space-y-2 text-slate-700">
							<li>
								<strong>Full Sessions Cancelled Before Start:</strong> Full refund or
								credit.
							</li>
							<li>
								<strong>Sessions Interrupted Mid-Play:</strong> Pro-rated refund based
								on unplayed time.
							</li>
							<li>
								<strong>Organizer Discretion:</strong> Clubs may substitute a
								rescheduled slot instead of a refund.
							</li>
						</ul>
					</div>

					{/* 5. Processing Time */}
					<div id="processing" className="scroll-mt-20">
						<h2 className="text-3xl font-bold text-dark-slate mb-4">
							5. Refund Processing Time
						</h2>
						<p className="text-slate-700 mb-4">
							Refunds are processed immediately by paddlX, but banking timelines vary:
						</p>
						<ul className="list-disc pl-6 space-y-2 text-slate-700">
							<li>
								<strong>Credit/Debit Cards:</strong> 2–15 business days to appear in
								your account.
							</li>
							<li>
								<strong>paddlX Wallet Credits:</strong> Instant—visible in your wallet.
							</li>
							<li>
								<strong>Digital Wallets (GCash/PayMaya):</strong> 1–5 business days.
							</li>
						</ul>
					</div>

					{/* 6. Refund Credits vs Cash */}
					<div id="credits" className="scroll-mt-20">
						<h2 className="text-3xl font-bold text-dark-slate mb-4">
							6. Credits vs. Cash Refunds
						</h2>
						<p className="text-slate-700 mb-4">
							By default, refunds go back to the original payment method. You may opt
							for paddlX wallet credit instead:
						</p>
						<ul className="list-disc pl-6 space-y-2 text-slate-700">
							<li>
								<strong>Original Method:</strong> Standard for all card and wallet
								payments.
							</li>
							<li>
								<strong>Account Credit:</strong> Choose in settings for instant credit
								and future bookings.
							</li>
						</ul>
					</div>

					{/* 7. Tournaments & Special Events */}
					<div id="tournaments" className="scroll-mt-20">
						<h2 className="text-3xl font-bold text-dark-slate mb-4">
							7. Tournaments & Special Events
						</h2>
						<p className="text-slate-700 mb-4">
							Tournament organizers set event-specific refund terms. These will be
							clearly shown at registration:
						</p>
						<ul className="list-disc pl-6 space-y-2 text-slate-700">
							<li>
								<strong>Early Cancels:</strong> Full refund if cancelled by the
								organizer’s deadline (often 7–14 days before).
							</li>
							<li>
								<strong>Late Cancels:</strong> Partial refund or credit per event
								policy.
							</li>
							<li>
								<strong>No-Shows:</strong> No refund unless exception granted by
								organizer.
							</li>
						</ul>
					</div>

					{/* 8. Contact Support */}
					<div id="contact" className="scroll-mt-20">
						<h2 className="text-3xl font-bold text-dark-slate mb-4">8. Need Help?</h2>
						<p className="text-slate-700 mb-6">
							Contact our support team for questions or exceptional refund requests:
						</p>
						<ul className="space-y-2 text-slate-700">
							<li>
								<strong>Email:</strong>{' '}
								<a
									href="mailto:refunds@paddlx.com"
									className="text-teal-600 hover:underline"
								>
									refunds@paddlx.com
								</a>
							</li>
							<li>
								<strong>Support Portal:</strong>{' '}
								<Link href="/support" className="text-teal-600 hover:underline">
									paddlX Support
								</Link>
							</li>
						</ul>
					</div>
				</section>

				<DynamicCtaSection
					buttonHref="/support"
					buttonText="Contact Support"
					featureList={[
						'Refund timeline inquiries',
						'Exception requests',
						'Policy clarifications',
					]}
					title="Questions About Refunds?"
					subtitle="Our team is ready to help with any refund or cancellation concerns."
					colorScheme="teal"
				/>
			</div>
		</>
	);
}
