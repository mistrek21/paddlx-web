// src/app/help/payments/page.tsx

import { Metadata } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import {
	CreditCard,
	AlertCircle,
	RefreshCw,
	Shield,
	HelpCircle,
	CheckCircle,
	XCircle,
	Clock,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import FAQSection, { FAQ } from '../_components/faq/FaqSection';
import DynamicCtaSection from '../_components/cta/DynamicCtaSection';

const paymentFaqs: FAQ[] = [
	// Payment Basics
	{
		id: 1,
		question: 'What payment methods do you accept?',
		answer:
			'We accept all major credit and debit cards (Visa, Mastercard, American Express), GCash, PayMaya, and other digital wallets supported in your region. All payments are securely processed through Stripe.',
		category: 'Payment Help',
	},
	{
		id: 2,
		question: 'When will I be charged for my booking?',
		answer:
			"Payment is processed immediately when you confirm your booking. For tournaments and events with registration fees, you'll be charged upfront to secure your spot. Coaching sessions are paid at the time of booking.",
		category: 'Payment Help',
	},
	{
		id: 3,
		question: 'Is my payment information secure?',
		answer:
			'Yes. All payment information is encrypted and processed through Stripe, a PCI-DSS Level 1 certified payment processor. We never store your complete card details on our servers.',
		category: 'Payment Help',
	},
	{
		id: 4,
		question: 'What are the transaction fees?',
		answer:
			'paddlX charges a small platform fee of 2.9% + ₱15 per transaction to cover payment processing costs. This fee is included in the total amount you see at checkout.',
		category: 'Payment Help',
	},

	// Payment Failures
	{
		id: 5,
		question: 'Why was my payment declined?',
		answer:
			'Payments can be declined for several reasons: insufficient funds, expired card, incorrect card details (number, CVV, or expiration date), card restrictions by your bank, or exceeding your card limit. Contact your bank or card issuer for specific information about the decline.',
		category: 'Payment Help',
	},
	{
		id: 6,
		question: 'My payment failed but I was charged. What should I do?',
		answer:
			"If your payment failed but you see a charge on your account, don't worry. This is typically a temporary authorization hold that will be released by your bank within 3-5 business days. If the charge doesn't disappear after 7 days, contact us with your transaction details.",
		category: 'Payment Help',
	},
	{
		id: 7,
		question: "What does 'insufficient funds' mean?",
		answer:
			"This means your card or account doesn't have enough money to complete the transaction. Check your account balance and try again, or use a different payment method.",
		category: 'Payment Help',
	},
	{
		id: 8,
		question:
			'My card keeps getting declined even though I have enough money. Why?',
		answer:
			"Even with sufficient funds, payments can fail if: your card issuer flagged the transaction as suspicious, your card doesn't support online/international transactions, you've exceeded daily transaction limits, or your billing address doesn't match. Contact your bank to authorize the transaction.",
		category: 'Payment Help',
	},
	{
		id: 9,
		question: "I'm getting an error message. What do I do?",
		answer:
			"Try these steps: 1) Double-check all card details are correct, 2) Ensure your card hasn't expired, 3) Try a different payment method, 4) Clear your browser cache and try again, 5) Check your internet connection. If problems persist, contact support with a screenshot of the error.",
		category: 'Payment Help',
	},

	// GCash & Digital Wallets
	{
		id: 10,
		question: 'How do I pay with GCash?',
		answer:
			"At checkout, select GCash as your payment method. You'll be redirected to GCash to authorize the payment. Make sure your GCash account is fully verified and has sufficient balance.",
		category: 'Payment Help',
	},
	{
		id: 11,
		question: 'My GCash payment failed. What should I check?',
		answer:
			"Common GCash payment issues: insufficient GCash wallet balance, exceeded monthly transaction limit, GCash account not fully verified, poor internet connection, or GCash app/servers experiencing issues. Try restarting the GCash app, checking your balance, and ensuring you're fully verified.",
		category: 'Payment Help',
	},
	{
		id: 12,
		question: 'Can I get a refund to my GCash wallet?',
		answer:
			'Yes. If you paid with GCash and are eligible for a refund, the money will be returned to your GCash wallet within 5-10 business days after the refund is processed.',
		category: 'Payment Help',
	},

	// Refunds & Cancellations
	{
		id: 13,
		question: 'How do I request a refund?',
		answer:
			"Refund eligibility depends on the type of booking and the organizer's cancellation policy. To request a refund, go to your booking details and select 'Request Cancellation' or contact the event organizer directly. Approved refunds are processed within 5-10 business days.",
		category: 'Payment Help',
	},
	{
		id: 14,
		question: 'When will I receive my refund?',
		answer:
			'Once a refund is approved, it typically takes 5-10 business days to appear in your account. The exact timing depends on your bank or payment provider. Digital wallet refunds (GCash, PayMaya) are usually faster than credit card refunds.',
		category: 'Payment Help',
	},
	{
		id: 15,
		question: 'Why was I charged a cancellation fee?',
		answer:
			'Cancellation fees are set by event organizers, coaches, or venue owners according to their cancellation policy. These fees help cover administrative costs and compensate for last-minute cancellations. Always review the cancellation policy before booking.',
		category: 'Payment Help',
	},
	{
		id: 16,
		question: 'Can I get a full refund if I cancel?',
		answer:
			'Full refund eligibility depends on when you cancel and the specific cancellation policy for your booking. Generally, cancellations made well in advance (24-48 hours) have better refund terms. Check the cancellation policy displayed at checkout.',
		category: 'Payment Help',
	},

	// Disputes & Chargebacks
	{
		id: 17,
		question: "I don't recognize a charge on my statement. What should I do?",
		answer:
			"First, check your paddlX booking history to verify the transaction. Charges appear as 'paddlX' or 'STRIPE*paddlX' on your statement. If you still don't recognize it, contact us immediately before filing a dispute with your bank.",
		category: 'Payment Help',
	},
	{
		id: 18,
		question: 'How do I dispute a charge?',
		answer:
			"Before filing a chargeback with your bank, please contact paddlX support first. We can often resolve issues faster than the formal dispute process. If you've already contacted your bank, they'll investigate and contact us for evidence. The process takes 30-90 days.",
		category: 'Payment Help',
	},
	{
		id: 19,
		question: 'What happens if I file a chargeback?',
		answer:
			"Filing a chargeback initiates a formal investigation. Your bank will temporarily refund the amount while investigating. We'll provide evidence (booking confirmations, communications, service delivery proof) to your bank. False chargebacks may result in account restrictions.",
		category: 'Payment Help',
	},

	// Tournament & Event Payments
	{
		id: 20,
		question: 'Do I need to pay upfront for tournaments?',
		answer:
			'Yes, tournament registration typically requires upfront payment to secure your spot. This ensures commitment and helps organizers plan accordingly. Some tournaments may offer payment plans for higher entry fees.',
		category: 'Payment Help',
	},
	{
		id: 21,
		question: 'What happens if a tournament is cancelled?',
		answer:
			"If an organizer cancels a tournament, you'll automatically receive a full refund to your original payment method within 5-10 business days. You'll be notified via email and in-app notification.",
		category: 'Payment Help',
	},
	{
		id: 22,
		question: 'Can I transfer my tournament entry to someone else?',
		answer:
			'Entry transfer policies vary by tournament. Contact the tournament organizer directly to inquire about transfers. Some may allow it with no fee, others may charge an administrative fee, and some may not permit transfers at all.',
		category: 'Payment Help',
	},

	// Coaching & Lessons
	{
		id: 23,
		question: 'When do I pay for coaching sessions?',
		answer:
			"Payment is required at the time of booking to secure your coaching session. This ensures both your and the coach's commitment to the scheduled time.",
		category: 'Payment Help',
	},
	{
		id: 24,
		question: 'What if I need to cancel a coaching session?',
		answer:
			"Cancellation policies are set by individual coaches. Most coaches require 24-48 hours notice for cancellations to receive a refund. Late cancellations may forfeit part or all of the payment. Check your coach's specific policy before booking.",
		category: 'Payment Help',
	},

	// Court Bookings
	{
		id: 25,
		question: 'How do court booking payments work?',
		answer:
			'Court bookings require immediate payment to confirm your reservation. The venue owner receives payment after your booking is completed, minus the platform fee.',
		category: 'Payment Help',
	},
	{
		id: 26,
		question: 'Do I get charged for no-shows?',
		answer:
			"Yes. If you don't show up for your booking without proper cancellation notice (usually 24 hours), you'll be charged the full amount. Repeated no-shows may result in account restrictions.",
		category: 'Payment Help',
	},

	// Troubleshooting
	{
		id: 27,
		question: "The payment page isn't loading. What should I do?",
		answer:
			'Try these steps: 1) Check your internet connection, 2) Clear your browser cache and cookies, 3) Try a different browser or device, 4) Disable ad blockers or VPN temporarily, 5) Update your app to the latest version. If issues persist, contact support.',
		category: 'Payment Help',
	},
	{
		id: 28,
		question:
			'I accidentally paid twice. How do I get a refund for the duplicate?',
		answer:
			"Duplicate charges are automatically detected and refunded within 24-48 hours. If you don't see the refund after 3 days, contact support with both transaction IDs, and we'll process a manual refund.",
		category: 'Payment Help',
	},
	{
		id: 29,
		question: 'Why is the payment amount different from what was advertised?',
		answer:
			'The final amount includes the base price plus our platform fee (2.9% + ₱15) and any applicable taxes. All fees are clearly displayed at checkout before you confirm payment.',
		category: 'Payment Help',
	},
	{
		id: 30,
		question: 'Can I update my payment method after booking?',
		answer:
			'Once a booking is confirmed and paid, you cannot change the payment method for that transaction. However, you can update your saved payment methods in your account settings for future bookings.',
		category: 'Payment Help',
	},

	// For Organizers
	{
		id: 31,
		question: 'When do I receive my payment as an organizer/coach?',
		answer:
			'Payments are transferred to your bank account or digital wallet automatically on a weekly or bi-weekly schedule, depending on your settings. You can track pending and completed payouts in your dashboard.',
		category: 'Payment Help',
	},
	{
		id: 32,
		question: 'How do I issue a refund to a participant?',
		answer:
			"Go to the specific booking in your organizer dashboard, select 'Issue Refund', choose the refund amount (full or partial), and confirm. The refund will be processed automatically and sent to the participant's original payment method.",
		category: 'Payment Help',
	},
];

// SEO Metadata
export const metadata: Metadata = {
	title: 'Payment Help & Support | paddlX',
	description:
		'Get help with payments, refunds, and billing on paddlX. Find answers to common payment questions, troubleshoot issues, and learn about secure transactions.',
	keywords: [
		'paddlX payment help',
		'payment issues',
		'refund support',
		'GCash payment',
		'Stripe payments',
		'payment declined',
		'billing support',
		'transaction help',
	],
	openGraph: {
		title: 'Payment Help & Support | paddlX',
		description:
			'Find answers to payment questions, troubleshoot issues, and get help with refunds and billing.',
		url: 'https://www.paddlx.com/help/payments',
		type: 'website',
	},
};

// JSON-LD Structured Data
const jsonLd = {
	'@context': 'https://schema.org',
	'@type': 'FAQPage',
	'mainEntity': paymentFaqs.slice(0, 10).map((faq) => ({
		'@type': 'Question',
		'name': faq.question,
		'acceptedAnswer': {
			'@type': 'Answer',
			'text': faq.answer,
		},
	})),
};

export default function PaymentHelpPage() {
	return (
		<>
			<Head>
				<script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
			</Head>
			<div className="bg-white text-slate-800">
				{/* Hero Section */}
				<section className="relative bg-teal-50 py-20 lg:py-32">
					<div className="container mx-auto px-6 text-center">
						<CreditCard className="w-16 h-16 mx-auto text-teal-600 mb-6" />
						<h1 className="text-4xl lg:text-6xl font-extrabold text-dark-slate mb-4 leading-tight">
							Payment Help & Support
						</h1>
						<p className="text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto mb-8">
							Find answers to common payment questions, troubleshoot issues, and learn
							how to manage your transactions securely on paddlX.
						</p>
						<Button
							asChild
							size="lg"
							className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg shadow-teal-200 transition-transform hover:scale-105"
						>
							<Link href="/support">Contact Support</Link>
						</Button>
					</div>
				</section>

				{/* Quick Help Cards */}
				<section className="py-20">
					<div className="container mx-auto px-6">
						<div className="text-center mb-16">
							<h2 className="text-3xl lg:text-4xl font-bold text-dark-slate">
								Common Payment Issues
							</h2>
							<p className="text-slate-500 mt-4 max-w-2xl mx-auto">
								Quick solutions to the most frequent payment problems our users
								encounter.
							</p>
						</div>
						<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
							<div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
								<XCircle className="w-10 h-10 text-red-500 mb-4" />
								<h3 className="text-lg font-bold mb-2">Payment Declined</h3>
								<p className="text-slate-600 text-sm mb-4">
									Check card details, ensure sufficient funds, and contact your bank if
									needed.
								</p>
								<Link
									href="#faq"
									className="text-teal-600 text-sm font-semibold hover:underline"
								>
									Learn more →
								</Link>
							</div>
							<div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
								<RefreshCw className="w-10 h-10 text-orange-500 mb-4" />
								<h3 className="text-lg font-bold mb-2">Refund Status</h3>
								<p className="text-slate-600 text-sm mb-4">
									Refunds take 5-10 business days to process depending on your payment
									method.
								</p>
								<Link
									href="#faq"
									className="text-teal-600 text-sm font-semibold hover:underline"
								>
									Learn more →
								</Link>
							</div>
							<div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
								<AlertCircle className="w-10 h-10 text-amber-500 mb-4" />
								<h3 className="text-lg font-bold mb-2">GCash Issues</h3>
								<p className="text-slate-600 text-sm mb-4">
									Ensure your GCash is fully verified with sufficient balance and
									transaction limits.
								</p>
								<Link
									href="#faq"
									className="text-teal-600 text-sm font-semibold hover:underline"
								>
									Learn more →
								</Link>
							</div>
							<div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
								<HelpCircle className="w-10 h-10 text-blue-500 mb-4" />
								<h3 className="text-lg font-bold mb-2">Unknown Charges</h3>
								<p className="text-slate-600 text-sm mb-4">
									Check your booking history first. Charges appear as
									&quot;STRIPE*paddlX&quot; on statements.
								</p>
								<Link
									href="#faq"
									className="text-teal-600 text-sm font-semibold hover:underline"
								>
									Learn more →
								</Link>
							</div>
						</div>
					</div>
				</section>

				{/* Security Section */}
				<section className="bg-slate-50 py-20">
					<div className="container mx-auto px-6">
						<div className="grid lg:grid-cols-2 gap-16 items-center">
							<div>
								<Shield className="w-12 h-12 text-teal-600 mb-6" />
								<h2 className="text-3xl lg:text-4xl font-bold text-dark-slate mb-6">
									Your Payments Are Secure
								</h2>
								<p className="text-slate-600 mb-6">
									We take payment security seriously. All transactions on paddlX are
									processed through Stripe, one of the world&apos;s most trusted payment
									platforms.
								</p>
								<ul className="space-y-4">
									<li className="flex items-start">
										<CheckCircle className="text-teal-600 w-6 h-6 mr-3 flex-shrink-0 mt-0.5" />
										<div>
											<h4 className="font-bold">Bank-Level Encryption</h4>
											<p className="text-slate-600 text-sm">
												256-bit SSL encryption protects all your payment data.
											</p>
										</div>
									</li>
									<li className="flex items-start">
										<CheckCircle className="text-teal-600 w-6 h-6 mr-3 flex-shrink-0 mt-0.5" />
										<div>
											<h4 className="font-bold">PCI-DSS Certified</h4>
											<p className="text-slate-600 text-sm">
												Stripe is Level 1 PCI-DSS certified, the highest standard.
											</p>
										</div>
									</li>
									<li className="flex items-start">
										<CheckCircle className="text-teal-600 w-6 h-6 mr-3 flex-shrink-0 mt-0.5" />
										<div>
											<h4 className="font-bold">Fraud Protection</h4>
											<p className="text-slate-600 text-sm">
												Advanced machine learning detects and prevents fraudulent
												transactions.
											</p>
										</div>
									</li>
									<li className="flex items-start">
										<CheckCircle className="text-teal-600 w-6 h-6 mr-3 flex-shrink-0 mt-0.5" />
										<div>
											<h4 className="font-bold">No Stored Card Data</h4>
											<p className="text-slate-600 text-sm">
												We never store your complete card details on our servers.
											</p>
										</div>
									</li>
								</ul>
							</div>
							<div className="bg-gradient-to-br from-teal-50 to-blue-50 p-12 rounded-2xl">
								<h3 className="text-2xl font-bold text-dark-slate mb-6">
									Quick Troubleshooting Steps
								</h3>
								<div className="space-y-4">
									<div className="bg-white p-4 rounded-lg">
										<div className="flex items-center mb-2">
											<div className="bg-teal-100 text-teal-700 font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3">
												1
											</div>
											<h4 className="font-bold">Verify Card Details</h4>
										</div>
										<p className="text-slate-600 text-sm ml-11">
											Double-check card number, CVV, and expiration date.
										</p>
									</div>
									<div className="bg-white p-4 rounded-lg">
										<div className="flex items-center mb-2">
											<div className="bg-teal-100 text-teal-700 font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3">
												2
											</div>
											<h4 className="font-bold">Check Account Balance</h4>
										</div>
										<p className="text-slate-600 text-sm ml-11">
											Ensure sufficient funds for the transaction amount.
										</p>
									</div>
									<div className="bg-white p-4 rounded-lg">
										<div className="flex items-center mb-2">
											<div className="bg-teal-100 text-teal-700 font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3">
												3
											</div>
											<h4 className="font-bold">Contact Your Bank</h4>
										</div>
										<p className="text-slate-600 text-sm ml-11">
											Ask if they&apos;re blocking online or international payments.
										</p>
									</div>
									<div className="bg-white p-4 rounded-lg">
										<div className="flex items-center mb-2">
											<div className="bg-teal-100 text-teal-700 font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3">
												4
											</div>
											<h4 className="font-bold">Try Another Method</h4>
										</div>
										<p className="text-slate-600 text-sm ml-11">
											Use a different card or switch to GCash/digital wallet.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Payment Timeline */}
				<section className="py-20">
					<div className="container mx-auto px-6">
						<div className="text-center mb-16">
							<h2 className="text-3xl lg:text-4xl font-bold text-dark-slate">
								Understanding Payment Timelines
							</h2>
							<p className="text-slate-500 mt-4 max-w-2xl mx-auto">
								Know when to expect charges, refunds, and payouts.
							</p>
						</div>
						<div className="max-w-4xl mx-auto">
							<div className="space-y-8">
								<div className="flex items-start">
									<Clock className="w-8 h-8 text-teal-600 mr-4 flex-shrink-0" />
									<div>
										<h3 className="text-xl font-bold mb-2">Immediate: Booking Charges</h3>
										<p className="text-slate-600">
											Your card is charged immediately when you confirm any booking (court
											rental, coaching session, tournament registration). You&apos;ll
											receive instant confirmation.
										</p>
									</div>
								</div>
								<div className="flex items-start">
									<Clock className="w-8 h-8 text-teal-600 mr-4 flex-shrink-0" />
									<div>
										<h3 className="text-xl font-bold mb-2">
											3-5 Days: Authorization Holds Released
										</h3>
										<p className="text-slate-600">
											If a payment fails, any temporary authorization hold on your card
											will be automatically released by your bank within 3-5 business days.
										</p>
									</div>
								</div>
								<div className="flex items-start">
									<Clock className="w-8 h-8 text-teal-600 mr-4 flex-shrink-0" />
									<div>
										<h3 className="text-xl font-bold mb-2">
											5-10 Days: Refund Processing
										</h3>
										<p className="text-slate-600">
											Approved refunds are processed within 5-10 business days to your
											original payment method. Digital wallet refunds (GCash, PayMaya) are
											typically faster.
										</p>
									</div>
								</div>
								<div className="flex items-start">
									<Clock className="w-8 h-8 text-teal-600 mr-4 flex-shrink-0" />
									<div>
										<h3 className="text-xl font-bold mb-2">
											Weekly/Bi-weekly: Organizer Payouts
										</h3>
										<p className="text-slate-600">
											If you&apos;re an event organizer, coach, or venue owner, your
											earnings are automatically transferred on your selected payout
											schedule (weekly or bi-weekly).
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* FAQ Section */}
				<div id="faq">
					<FAQSection
						faqs={paymentFaqs}
						title="Payment FAQs"
						subtitle="Find detailed answers to all your payment questions"
						colorScheme="primary"
					/>
				</div>

				{/* Still Need Help CTA */}
				<DynamicCtaSection
					buttonHref="/support"
					buttonText="Contact Support Team"
					featureList={[
						'24/7 support available',
						'Average response under 2 hours',
						'Expert payment assistance',
					]}
					title="Still Need Help?"
					subtitle="Our support team is ready to assist you with any payment issues or questions you may have."
					colorScheme="teal"
				/>
			</div>
		</>
	);
}
