// src/app/help/privacy/page.tsx

import { Metadata } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import {
	Shield,
	Lock,
	Eye,
	Database,
	UserCheck,
	MapPin,
	CreditCard,
	Share2,
	AlertCircle,
	CheckCircle,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import DynamicCtaSection from '../../_components/cta/DynamicCtaSection';

// SEO Metadata
export const metadata: Metadata = {
	title: 'Privacy Policy | paddlX',
	description:
		'Learn how paddlX collects, uses, and protects your personal information. Read our Privacy Policy to understand your data privacy rights and our security practices.',
	keywords: [
		'paddlX privacy policy',
		'data privacy',
		'personal information',
		'Philippines data privacy',
		'user data protection',
		'privacy rights',
		'GDPR compliance',
	],
	openGraph: {
		title: 'Privacy Policy | paddlX',
		description:
			'Read our Privacy Policy to understand how we protect your personal information and respect your privacy rights.',
		url: 'https://www.paddlx.com/help/privacy',
		type: 'website',
	},
};

// JSON-LD Structured Data
const jsonLd = {
	'@context': 'https://schema.org',
	'@type': 'WebPage',
	'name': 'paddlX Privacy Policy',
	'description':
		'Privacy Policy explaining how paddlX collects, uses, and protects personal information',
	'url': 'https://www.paddlx.com/help/privacy',
};

export default function PrivacyPolicyPage() {
	return (
		<>
			<Head>
				<script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
			</Head>
			<div className="bg-white text-slate-800">
				{/* Hero Section */}
				<section className="relative bg-blue-50 py-20 lg:py-32">
					<div className="container mx-auto px-6 text-center">
						<Shield className="w-16 h-16 mx-auto text-blue-600 mb-6" />
						<h1 className="text-4xl lg:text-6xl font-extrabold text-dark-slate mb-4 leading-tight">
							Privacy Policy
						</h1>
						<p className="text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto mb-2">
							Last Updated: October 21, 2025
						</p>
						<p className="text-base text-slate-500 max-w-2xl mx-auto">
							Your privacy matters to us. This Privacy Policy explains how paddlX
							collects, uses, shares, and protects your personal information in
							compliance with the Data Privacy Act of 2012 (Republic Act No. 10173) of
							the Philippines and international data protection standards.
						</p>
					</div>
				</section>

				{/* Quick Summary */}
				<section className="py-12 bg-white border-b border-slate-200">
					<div className="container mx-auto px-6">
						<div className="max-w-5xl mx-auto">
							<h2 className="text-2xl font-bold text-center mb-8">
								Privacy Policy at a Glance
							</h2>
							<div className="grid md:grid-cols-3 gap-6">
								<div className="bg-blue-50 p-6 rounded-xl">
									<Database className="w-10 h-10 text-blue-600 mb-3" />
									<h3 className="font-bold text-lg mb-2">What We Collect</h3>
									<p className="text-slate-600 text-sm">
										Account info, booking details, location data, payment information, and
										usage analytics to provide our services.
									</p>
								</div>
								<div className="bg-blue-50 p-6 rounded-xl">
									<Lock className="w-10 h-10 text-blue-600 mb-3" />
									<h3 className="font-bold text-lg mb-2">How We Protect It</h3>
									<p className="text-slate-600 text-sm">
										Bank-level encryption, secure servers, PCI-DSS compliant payment
										processing, and regular security audits.
									</p>
								</div>
								<div className="bg-blue-50 p-6 rounded-xl">
									<UserCheck className="w-10 h-10 text-blue-600 mb-3" />
									<h3 className="font-bold text-lg mb-2">Your Rights</h3>
									<p className="text-slate-600 text-sm">
										Access, correct, delete, or export your data. Opt-out of marketing.
										Control your privacy settings anytime.
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Quick Navigation */}
				<section className="py-12 bg-slate-50">
					<div className="container mx-auto px-6">
						<h2 className="text-2xl font-bold text-center mb-8">Quick Navigation</h2>
						<div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
							{[
								{ title: 'Introduction', href: '#introduction' },
								{ title: 'Information We Collect', href: '#collection' },
								{ title: 'How We Use Your Data', href: '#usage' },
								{ title: 'Data Sharing', href: '#sharing' },
								{ title: 'Payment Information', href: '#payment' },
								{ title: 'Location Data', href: '#location' },
								{ title: 'Cookies & Tracking', href: '#cookies' },
								{ title: 'Data Security', href: '#security' },
								{ title: 'Data Retention', href: '#retention' },
								{ title: 'Your Privacy Rights', href: '#rights' },
								{ title: "Children's Privacy", href: '#children' },
								{ title: 'International Transfers', href: '#transfers' },
								{ title: 'Policy Changes', href: '#changes' },
								{ title: 'Contact Us', href: '#contact' },
							].map((item, idx) => (
								<Link
									key={idx}
									href={item.href}
									className="text-blue-600 hover:text-blue-700 hover:underline text-sm font-semibold p-3 bg-white rounded-lg text-center transition-colors shadow-sm"
								>
									{item.title}
								</Link>
							))}
						</div>
					</div>
				</section>

				{/* Privacy Content */}
				<section className="py-20">
					<div className="container mx-auto px-6 max-w-4xl">
						{/* 1. Introduction */}
						<div id="introduction" className="mb-16 scroll-mt-20">
							<div className="flex items-start mb-4">
								<Shield className="w-8 h-8 text-blue-600 mr-4 flex-shrink-0 mt-1" />
								<div>
									<h2 className="text-3xl font-bold text-dark-slate mb-4">
										1. Introduction
									</h2>
									<div className="prose prose-slate max-w-none">
										<p className="text-slate-700 leading-relaxed mb-4">
											Welcome to paddlX. We are committed to protecting your personal
											information and your right to privacy. This Privacy Policy explains
											how paddlX (operated by [Your Company Legal Name], a company
											registered in the Philippines) collects, uses, discloses, and
											safeguards your personal information when you use our website, mobile
											application, and related services (collectively, the
											&quot;Platform&quot;).
										</p>
										<p className="text-slate-700 leading-relaxed mb-4">
											This Privacy Policy applies to all users of the Platform, including
											players, venue owners, coaches, tournament organizers, and visitors.
											By using paddlX, you agree to the collection and use of information
											in accordance with this Privacy Policy.
										</p>

										<div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg my-6">
											<h4 className="font-bold text-blue-900 mb-2">
												Compliance Statement
											</h4>
											<p className="text-slate-700 text-sm leading-relaxed">
												paddlX is committed to complying with the{' '}
												<strong>Data Privacy Act of 2012 (Republic Act No. 10173)</strong>{' '}
												of the Philippines, its Implementing Rules and Regulations (IRR),
												and issuances of the National Privacy Commission (NPC). We also
												follow international best practices, including principles from the
												EU General Data Protection Regulation (GDPR) where applicable.
											</p>
										</div>

										<h3 className="text-xl font-bold text-slate-800 mb-3 mt-6">
											1.1 Data Controller Information
										</h3>
										<p className="text-slate-700 leading-relaxed mb-4">
											For the purposes of data protection law, paddlX is the data
											controller responsible for your personal information. Our contact
											details are:
										</p>
										<ul className="list-none space-y-2 text-slate-700 mb-4 bg-slate-50 p-4 rounded-lg">
											<li>
												<strong>Company Name:</strong> [Your Company Legal Name]
											</li>
											<li>
												<strong>Address:</strong> [Business Address], Mandaluyong, Metro
												Manila, Philippines
											</li>
											<li>
												<strong>Email:</strong>{' '}
												<a
													href="mailto:privacy@paddlx.com"
													className="text-blue-600 hover:underline"
												>
													privacy@paddlx.com
												</a>
											</li>
											<li>
												<strong>Data Protection Officer:</strong>{' '}
												<a
													href="mailto:dpo@paddlx.com"
													className="text-blue-600 hover:underline"
												>
													dpo@paddlx.com
												</a>
											</li>
										</ul>

										<h3 className="text-xl font-bold text-slate-800 mb-3 mt-6">
											1.2 Questions or Concerns
										</h3>
										<p className="text-slate-700 leading-relaxed">
											If you have any questions or concerns about this Privacy Policy or
											our data practices, please contact us using the information provided
											in the Contact Us section below.
										</p>
									</div>
								</div>
							</div>
						</div>

						{/* 2. Information We Collect */}
						<div id="collection" className="mb-16 scroll-mt-20">
							<div className="flex items-start mb-4">
								<Database className="w-8 h-8 text-blue-600 mr-4 flex-shrink-0 mt-1" />
								<div>
									<h2 className="text-3xl font-bold text-dark-slate mb-4">
										2. Information We Collect
									</h2>
									<div className="prose prose-slate max-w-none">
										<p className="text-slate-700 leading-relaxed mb-4">
											We collect information that you provide directly to us, information
											we obtain automatically when you use the Platform, and information
											from third-party sources.
										</p>

										<h3 className="text-xl font-bold text-slate-800 mb-3 mt-6">
											2.1 Information You Provide to Us
										</h3>

										<h4 className="text-lg font-bold text-slate-800 mb-3 mt-4">
											Account Registration Information
										</h4>
										<ul className="list-disc pl-6 mb-4 space-y-2 text-slate-700">
											<li>Full name</li>
											<li>Email address</li>
											<li>Phone number</li>
											<li>Date of birth</li>
											<li>Password (encrypted)</li>
											<li>Profile photo (optional)</li>
											<li>Gender (optional)</li>
											<li>Location/city</li>
										</ul>

										<h4 className="text-lg font-bold text-slate-800 mb-3 mt-4">
											Profile Information
										</h4>
										<ul className="list-disc pl-6 mb-4 space-y-2 text-slate-700">
											<li>Skill level and player rating</li>
											<li>Playing preferences and availability</li>
											<li>Bio and personal description</li>
											<li>Social media links (optional)</li>
											<li>Tournament history and achievements</li>
										</ul>

										<h4 className="text-lg font-bold text-slate-800 mb-3 mt-4">
											Booking and Transaction Information
										</h4>
										<ul className="list-disc pl-6 mb-4 space-y-2 text-slate-700">
											<li>Court bookings and reservations</li>
											<li>Tournament registrations</li>
											<li>Coaching session bookings</li>
											<li>Event participation records</li>
											<li>Booking history and preferences</li>
										</ul>

										<h4 className="text-lg font-bold text-slate-800 mb-3 mt-4">
											Payment Information
										</h4>
										<ul className="list-disc pl-6 mb-4 space-y-2 text-slate-700">
											<li>
												Billing name and address (collected by our payment processor)
											</li>
											<li>
												Last 4 digits of credit/debit card (for display purposes only)
											</li>
											<li>Card brand and expiration date</li>
											<li>Transaction history and receipts</li>
											<li>
												GCash, PayMaya, or other digital wallet information (handled by
												payment providers)
											</li>
										</ul>
										<p className="text-slate-700 text-sm italic mb-4">
											<strong>Important:</strong> We do NOT store full credit card numbers,
											CVV codes, or complete payment credentials on our servers. All
											payment information is securely processed and stored by Stripe, our
											PCI-DSS Level 1 certified payment processor.
										</p>

										<h4 className="text-lg font-bold text-slate-800 mb-3 mt-4">
											User-Generated Content
										</h4>
										<ul className="list-disc pl-6 mb-4 space-y-2 text-slate-700">
											<li>Reviews and ratings of venues, coaches, and events</li>
											<li>Comments and forum posts</li>
											<li>Photos and videos you upload</li>
											<li>Messages and communications with other users</li>
											<li>Tournament scores and match results</li>
										</ul>

										<h4 className="text-lg font-bold text-slate-800 mb-3 mt-4">
											Communications
										</h4>
										<ul className="list-disc pl-6 mb-4 space-y-2 text-slate-700">
											<li>Customer support inquiries and correspondence</li>
											<li>Feedback and survey responses</li>
											<li>Email and SMS communications</li>
											<li>In-app messages and notifications</li>
										</ul>

										<h3 className="text-xl font-bold text-slate-800 mb-3 mt-6">
											2.2 Information Collected Automatically
										</h3>
										<p className="text-slate-700 leading-relaxed mb-4">
											When you use the Platform, we automatically collect certain
											information about your device and how you interact with our services:
										</p>

										<h4 className="text-lg font-bold text-slate-800 mb-3 mt-4">
											Device Information
										</h4>
										<ul className="list-disc pl-6 mb-4 space-y-2 text-slate-700">
											<li>Device type, model, and manufacturer</li>
											<li>Operating system and version</li>
											<li>Browser type and version</li>
											<li>Device identifiers (IDFA, Android ID)</li>
											<li>Screen resolution and device settings</li>
										</ul>

										<h4 className="text-lg font-bold text-slate-800 mb-3 mt-4">
											Usage Information
										</h4>
										<ul className="list-disc pl-6 mb-4 space-y-2 text-slate-700">
											<li>Pages viewed and features used</li>
											<li>Time and date of access</li>
											<li>Time spent on pages</li>
											<li>Links clicked and buttons pressed</li>
											<li>Search queries within the Platform</li>
											<li>Booking and browsing patterns</li>
										</ul>

										<h4 className="text-lg font-bold text-slate-800 mb-3 mt-4">
											Technical Information
										</h4>
										<ul className="list-disc pl-6 mb-4 space-y-2 text-slate-700">
											<li>IP address</li>
											<li>Log files and error reports</li>
											<li>Crash data and performance metrics</li>
											<li>Referring/exit pages and URLs</li>
											<li>Network connection type</li>
										</ul>

										<h4 className="text-lg font-bold text-slate-800 mb-3 mt-4">
											Location Information
										</h4>
										<p className="text-slate-700 leading-relaxed mb-4">
											With your permission, we collect precise location data from your
											mobile device to:
										</p>
										<ul className="list-disc pl-6 mb-4 space-y-2 text-slate-700">
											<li>Show nearby courts and venues</li>
											<li>Calculate distances and travel times</li>
											<li>Provide location-based recommendations</li>
											<li>Enable check-ins at venues</li>
										</ul>
										<p className="text-slate-700 text-sm italic mb-4">
											You can control location permissions through your device settings at
											any time. If you deny location access, some features may not be
											available.
										</p>

										<h3 className="text-xl font-bold text-slate-800 mb-3 mt-6">
											2.3 Information from Third Parties
										</h3>
										<p className="text-slate-700 leading-relaxed mb-4">
											We may receive information about you from third-party sources:
										</p>
										<ul className="list-disc pl-6 mb-4 space-y-2 text-slate-700">
											<li>
												<strong>Social Media:</strong> If you connect your social media
												accounts (Facebook, Google), we receive basic profile information
											</li>
											<li>
												<strong>Payment Processors:</strong> Transaction confirmations and
												payment status from Stripe
											</li>
											<li>
												<strong>Analytics Providers:</strong> Aggregate usage data and
												demographics from analytics services
											</li>
											<li>
												<strong>Venue Partners:</strong> Information about your bookings and
												check-ins at partner facilities
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>

						{/* 3. How We Use Your Data */}
						<div id="usage" className="mb-16 scroll-mt-20">
							<h2 className="text-3xl font-bold text-dark-slate mb-4">
								3. How We Use Your Information
							</h2>
							<div className="prose prose-slate max-w-none">
								<p className="text-slate-700 leading-relaxed mb-4">
									We use the information we collect for the following purposes, in
									accordance with the lawful bases under the Data Privacy Act of 2012:
								</p>

								<div className="bg-slate-50 p-6 rounded-xl mb-6">
									<h3 className="text-xl font-bold text-slate-800 mb-3">
										3.1 To Provide and Maintain Our Services
									</h3>
									<ul className="list-disc pl-6 space-y-2 text-slate-700">
										<li>Create and manage your account</li>
										<li>Process court bookings and reservations</li>
										<li>Facilitate tournament registrations</li>
										<li>Connect you with coaches and other players</li>
										<li>Enable in-app messaging and communication</li>
										<li>Display venue information and availability</li>
										<li>Manage your player profile and skill ratings</li>
									</ul>
									<p className="text-sm text-slate-600 mt-3 italic">
										<strong>Legal Basis:</strong> Performance of contract, consent
									</p>
								</div>

								<div className="bg-slate-50 p-6 rounded-xl mb-6">
									<h3 className="text-xl font-bold text-slate-800 mb-3">
										3.2 To Process Transactions
									</h3>
									<ul className="list-disc pl-6 space-y-2 text-slate-700">
										<li>Process payments for bookings and services</li>
										<li>Issue invoices and receipts</li>
										<li>Handle refunds and cancellations</li>
										<li>Prevent fraud and unauthorized transactions</li>
										<li>Manage billing and payment disputes</li>
									</ul>
									<p className="text-sm text-slate-600 mt-3 italic">
										<strong>Legal Basis:</strong> Performance of contract, legal
										obligation, legitimate interests
									</p>
								</div>

								<div className="bg-slate-50 p-6 rounded-xl mb-6">
									<h3 className="text-xl font-bold text-slate-800 mb-3">
										3.3 To Communicate With You
									</h3>
									<ul className="list-disc pl-6 space-y-2 text-slate-700">
										<li>Send booking confirmations and reminders</li>
										<li>Provide customer support and respond to inquiries</li>
										<li>Send important service updates and announcements</li>
										<li>Notify you about changes to our Terms or Privacy Policy</li>
										<li>Send transactional emails and SMS messages</li>
									</ul>
									<p className="text-sm text-slate-600 mt-3 italic">
										<strong>Legal Basis:</strong> Performance of contract, legal
										obligation, legitimate interests
									</p>
								</div>

								<div className="bg-slate-50 p-6 rounded-xl mb-6">
									<h3 className="text-xl font-bold text-slate-800 mb-3">
										3.4 For Marketing and Promotional Purposes
									</h3>
									<ul className="list-disc pl-6 space-y-2 text-slate-700">
										<li>Send newsletters and promotional offers (with your consent)</li>
										<li>Inform you about new features and services</li>
										<li>Provide personalized recommendations</li>
										<li>Send information about tournaments and events in your area</li>
										<li>Conduct surveys and request feedback</li>
									</ul>
									<p className="text-sm text-slate-600 mt-3 italic">
										<strong>Legal Basis:</strong> Consent (you can opt-out anytime)
									</p>
								</div>

								<div className="bg-slate-50 p-6 rounded-xl mb-6">
									<h3 className="text-xl font-bold text-slate-800 mb-3">
										3.5 To Improve and Optimize Our Platform
									</h3>
									<ul className="list-disc pl-6 space-y-2 text-slate-700">
										<li>Analyze usage patterns and trends</li>
										<li>Test and develop new features</li>
										<li>Monitor and improve Platform performance</li>
										<li>Fix bugs and technical issues</li>
										<li>Conduct research and analytics</li>
										<li>Enhance user experience and interface design</li>
									</ul>
									<p className="text-sm text-slate-600 mt-3 italic">
										<strong>Legal Basis:</strong> Legitimate interests
									</p>
								</div>

								<div className="bg-slate-50 p-6 rounded-xl mb-6">
									<h3 className="text-xl font-bold text-slate-800 mb-3">
										3.6 For Safety and Security
									</h3>
									<ul className="list-disc pl-6 space-y-2 text-slate-700">
										<li>Verify user identity and prevent fraud</li>
										<li>Detect and prevent security threats</li>
										<li>Enforce our Terms of Service</li>
										<li>Investigate violations and abuse</li>
										<li>Protect the rights and safety of our users</li>
										<li>Comply with legal obligations</li>
									</ul>
									<p className="text-sm text-slate-600 mt-3 italic">
										<strong>Legal Basis:</strong> Legal obligation, legitimate interests,
										protection of vital interests
									</p>
								</div>

								<div className="bg-slate-50 p-6 rounded-xl mb-6">
									<h3 className="text-xl font-bold text-slate-800 mb-3">
										3.7 For Legal Compliance
									</h3>
									<ul className="list-disc pl-6 space-y-2 text-slate-700">
										<li>Comply with Philippine laws and regulations</li>
										<li>Respond to legal requests and court orders</li>
										<li>Cooperate with law enforcement</li>
										<li>Exercise or defend legal claims</li>
										<li>Maintain records as required by law</li>
									</ul>
									<p className="text-sm text-slate-600 mt-3 italic">
										<strong>Legal Basis:</strong> Legal obligation
									</p>
								</div>
							</div>
						</div>

						{/* 4. Data Sharing */}
						<div id="sharing" className="mb-16 scroll-mt-20">
							<div className="flex items-start mb-4">
								<Share2 className="w-8 h-8 text-blue-600 mr-4 flex-shrink-0 mt-1" />
								<div>
									<h2 className="text-3xl font-bold text-dark-slate mb-4">
										4. How We Share Your Information
									</h2>
									<div className="prose prose-slate max-w-none">
										<p className="text-slate-700 leading-relaxed mb-4">
											We do not sell your personal information to third parties. We may
											share your information in the following circumstances:
										</p>

										<h3 className="text-xl font-bold text-slate-800 mb-3 mt-6">
											4.1 With Service Providers
										</h3>
										<p className="text-slate-700 leading-relaxed mb-4">
											When you make a booking, your information is shared with the relevant
											service provider (venue, coach, or organizer) to fulfill your
											booking. This includes:
										</p>
										<ul className="list-disc pl-6 mb-4 space-y-2 text-slate-700">
											<li>
												<strong>Venue Owners:</strong> Name, contact information, booking
												details
											</li>
											<li>
												<strong>Coaches:</strong> Name, contact information, skill level,
												session details
											</li>
											<li>
												<strong>Tournament Organizers:</strong> Name, contact information,
												player rating, registration details
											</li>
										</ul>

										<h3 className="text-xl font-bold text-slate-800 mb-3 mt-6">
											4.2 With Third-Party Service Providers
										</h3>
										<p className="text-slate-700 leading-relaxed mb-4">
											We work with trusted third-party service providers who help us
											operate the Platform:
										</p>
										<ul className="list-disc pl-6 mb-4 space-y-2 text-slate-700">
											<li>
												<strong>Payment Processors (Stripe):</strong> To process payments
												securely
											</li>
											<li>
												<strong>Cloud Hosting (Supabase):</strong> To store and manage data
												securely
											</li>
											<li>
												<strong>Email Services:</strong> To send transactional and
												promotional emails
											</li>
											<li>
												<strong>SMS Services:</strong> To send booking reminders and
												notifications
											</li>
											<li>
												<strong>Analytics Providers:</strong> To understand Platform usage
												(Google Analytics, etc.)
											</li>
											<li>
												<strong>Customer Support Tools:</strong> To provide help and support
												services
											</li>
										</ul>
										<p className="text-slate-700 text-sm italic mb-4">
											All third-party service providers are contractually required to
											protect your data and use it only for authorized purposes.
										</p>

										<h3 className="text-xl font-bold text-slate-800 mb-3 mt-6">
											4.3 With Other Users
										</h3>
										<p className="text-slate-700 leading-relaxed mb-4">
											Certain information is visible to other users to facilitate community
											features:
										</p>
										<ul className="list-disc pl-6 mb-4 space-y-2 text-slate-700">
											<li>
												Your public profile (name, photo, skill level, bio) is visible to
												other users
											</li>
											<li>
												Tournament results and match scores may be publicly displayed
											</li>
											<li>Reviews and ratings you post are publicly visible</li>
											<li>Comments and forum posts are visible to community members</li>
										</ul>
										<p className="text-slate-700 text-sm italic mb-4">
											You can control your profile visibility in your privacy settings.
										</p>

										<h3 className="text-xl font-bold text-slate-800 mb-3 mt-6">
											4.4 For Legal Reasons
										</h3>
										<p className="text-slate-700 leading-relaxed mb-4">
											We may disclose your information if required by law or if we believe
											in good faith that such action is necessary to:
										</p>
										<ul className="list-disc pl-6 mb-4 space-y-2 text-slate-700">
											<li>Comply with a legal obligation, court order, or subpoena</li>
											<li>Protect and defend our rights or property</li>
											<li>Prevent or investigate possible wrongdoing</li>
											<li>Protect the personal safety of users or the public</li>
											<li>Protect against legal liability</li>
										</ul>

										<h3 className="text-xl font-bold text-slate-800 mb-3 mt-6">
											4.5 Business Transfers
										</h3>
										<p className="text-slate-700 leading-relaxed">
											If paddlX is involved in a merger, acquisition, asset sale, or
											bankruptcy, your personal information may be transferred as part of
											that transaction. We will notify you via email and/or prominent
											notice on the Platform before your information is transferred and
											becomes subject to a different privacy policy.
										</p>
									</div>
								</div>
							</div>
						</div>

						{/* 5. Payment Information Security */}
						<div id="payment" className="mb-16 scroll-mt-20">
							<div className="flex items-start mb-4">
								<CreditCard className="w-8 h-8 text-blue-600 mr-4 flex-shrink-0 mt-1" />
								<div>
									<h2 className="text-3xl font-bold text-dark-slate mb-4">
										5. Payment Information and Financial Data
									</h2>
									<div className="prose prose-slate max-w-none">
										<div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg mb-6">
											<h4 className="font-bold text-green-900 mb-2 flex items-center">
												<CheckCircle className="w-5 h-5 mr-2" />
												Your Payment Information is Secure
											</h4>
											<p className="text-slate-700 text-sm leading-relaxed">
												paddlX does NOT store, process, or have access to your complete
												credit card numbers, CVV codes, or full payment credentials. All
												payment information is handled exclusively by Stripe, our PCI-DSS
												Level 1 certified payment processor.
											</p>
										</div>

										<h3 className="text-xl font-bold text-slate-800 mb-3">
											How Payment Processing Works
										</h3>
										<ol className="list-decimal pl-6 mb-4 space-y-3 text-slate-700">
											<li>
												When you enter payment information, it is sent directly to Stripe
												using encrypted connections
											</li>
											<li>
												Stripe securely processes and stores your payment information
											</li>
											<li>
												Stripe returns a secure token to paddlX to represent your payment
												method
											</li>
											<li>
												paddlX stores only: last 4 digits of your card, card brand,
												expiration date, and billing name
											</li>
											<li>
												When you make a booking, we use the secure token to instruct Stripe
												to process the payment
											</li>
										</ol>

										<h3 className="text-xl font-bold text-slate-800 mb-3 mt-6">
											What Payment Information We Store
										</h3>
										<ul className="list-disc pl-6 mb-4 space-y-2 text-slate-700">
											<li>
												<strong>Limited Card Display Information:</strong> Last 4 digits,
												card brand (Visa, Mastercard, etc.), expiration date
											</li>
											<li>
												<strong>Transaction Records:</strong> Date, amount, booking
												reference, receipt
											</li>
											<li>
												<strong>Billing Information:</strong> Name and billing address for
												invoicing
											</li>
										</ul>

										<h3 className="text-xl font-bold text-slate-800 mb-3 mt-6">
											Digital Wallet Information
										</h3>
										<p className="text-slate-700 leading-relaxed mb-4">
											For payments made through GCash, PayMaya, or other digital wallets:
										</p>
										<ul className="list-disc pl-6 mb-4 space-y-2 text-slate-700">
											<li>
												Payment information is processed by the respective wallet provider
											</li>
											<li>
												We receive only transaction confirmation and receipt information
											</li>
											<li>We do not have access to your wallet credentials or balance</li>
										</ul>

										<p className="text-slate-700 leading-relaxed">
											For more information about how Stripe protects your payment data,
											please visit{' '}
											<a
												href="https://stripe.com/privacy"
												target="_blank"
												rel="noopener noreferrer"
												className="text-blue-600 hover:underline"
											>
												Stripe&apos;s Privacy Policy
											</a>
											.
										</p>
									</div>
								</div>
							</div>
						</div>

						{/* 6. Location Data */}
						<div id="location" className="mb-16 scroll-mt-20">
							<div className="flex items-start mb-4">
								<MapPin className="w-8 h-8 text-blue-600 mr-4 flex-shrink-0 mt-1" />
								<div>
									<h2 className="text-3xl font-bold text-dark-slate mb-4">
										6. Location Data and Geographic Information
									</h2>
									<div className="prose prose-slate max-w-none">
										<h3 className="text-xl font-bold text-slate-800 mb-3">
											How We Use Location Data
										</h3>
										<p className="text-slate-700 leading-relaxed mb-4">
											With your permission, paddlX collects and uses your location data to
											provide location-based features:
										</p>
										<ul className="list-disc pl-6 mb-4 space-y-2 text-slate-700">
											<li>Show nearby courts, venues, and facilities</li>
											<li>Calculate distances and provide directions</li>
											<li>Recommend events and tournaments in your area</li>
											<li>Find and connect with nearby players</li>
											<li>Enable check-in features at venues</li>
											<li>Provide location-specific content and recommendations</li>
										</ul>

										<h3 className="text-xl font-bold text-slate-800 mb-3 mt-6">
											Types of Location Data We Collect
										</h3>
										<ul className="list-disc pl-6 mb-4 space-y-2 text-slate-700">
											<li>
												<strong>Precise Location:</strong> GPS coordinates from your mobile
												device (when you grant permission)
											</li>
											<li>
												<strong>Approximate Location:</strong> City/region based on IP
												address
											</li>
											<li>
												<strong>User-Provided Location:</strong> City or region you manually
												enter in your profile
											</li>
										</ul>

										<h3 className="text-xl font-bold text-slate-800 mb-3 mt-6">
											Controlling Location Permissions
										</h3>
										<p className="text-slate-700 leading-relaxed mb-4">
											You have full control over location access:
										</p>
										<ul className="list-disc pl-6 mb-4 space-y-2 text-slate-700">
											<li>
												<strong>iOS:</strong> Settings &gt; Privacy &gt; Location Services
												&gt; paddlX
											</li>
											<li>
												<strong>Android:</strong> Settings &gt; Apps &gt; paddlX &gt;
												Permissions &gt; Location
											</li>
											<li>
												<strong>Within App:</strong> Account Settings &gt; Privacy &gt;
												Location Permissions
											</li>
										</ul>
										<p className="text-slate-700 text-sm italic">
											Note: If you disable location services, some features like
											&quot;nearby courts&quot; and distance calculations will not be
											available.
										</p>
									</div>
								</div>
							</div>
						</div>

						{/* 7. Cookies and Tracking */}
						<div id="cookies" className="mb-16 scroll-mt-20">
							<div className="flex items-start mb-4">
								<Eye className="w-8 h-8 text-blue-600 mr-4 flex-shrink-0 mt-1" />
								<div>
									<h2 className="text-3xl font-bold text-dark-slate mb-4">
										7. Cookies and Tracking Technologies
									</h2>
									<div className="prose prose-slate max-w-none">
										<h3 className="text-xl font-bold text-slate-800 mb-3">
											What Are Cookies?
										</h3>
										<p className="text-slate-700 leading-relaxed mb-4">
											Cookies are small text files placed on your device by websites and
											apps you visit. They help us provide a better experience by
											remembering your preferences and understanding how you use the
											Platform.
										</p>

										<h3 className="text-xl font-bold text-slate-800 mb-3 mt-6">
											Types of Cookies We Use
										</h3>

										<div className="space-y-4 mb-6">
											<div className="bg-slate-50 p-4 rounded-lg">
												<h4 className="font-bold text-slate-800 mb-2">
													1. Essential Cookies (Required)
												</h4>
												<p className="text-slate-700 text-sm mb-2">
													These cookies are necessary for the Platform to function properly.
													You cannot disable them.
												</p>
												<ul className="list-disc pl-6 text-sm text-slate-600">
													<li>Authentication and login sessions</li>
													<li>Security and fraud prevention</li>
													<li>Load balancing</li>
												</ul>
											</div>

											<div className="bg-slate-50 p-4 rounded-lg">
												<h4 className="font-bold text-slate-800 mb-2">
													2. Functional Cookies (Optional)
												</h4>
												<p className="text-slate-700 text-sm mb-2">
													These cookies remember your preferences and choices.
												</p>
												<ul className="list-disc pl-6 text-sm text-slate-600">
													<li>Language preferences</li>
													<li>Region/location settings</li>
													<li>Display preferences</li>
												</ul>
											</div>

											<div className="bg-slate-50 p-4 rounded-lg">
												<h4 className="font-bold text-slate-800 mb-2">
													3. Analytics Cookies (Optional)
												</h4>
												<p className="text-slate-700 text-sm mb-2">
													These cookies help us understand how users interact with the
													Platform.
												</p>
												<ul className="list-disc pl-6 text-sm text-slate-600">
													<li>Google Analytics for usage patterns</li>
													<li>Page view tracking</li>
													<li>Performance monitoring</li>
												</ul>
											</div>

											<div className="bg-slate-50 p-4 rounded-lg">
												<h4 className="font-bold text-slate-800 mb-2">
													4. Marketing Cookies (Optional)
												</h4>
												<p className="text-slate-700 text-sm mb-2">
													These cookies track your activity to deliver relevant ads.
												</p>
												<ul className="list-disc pl-6 text-sm text-slate-600">
													<li>Targeted advertising</li>
													<li>Social media integration</li>
													<li>Remarketing campaigns</li>
												</ul>
											</div>
										</div>

										<h3 className="text-xl font-bold text-slate-800 mb-3 mt-6">
											Managing Cookies
										</h3>
										<p className="text-slate-700 leading-relaxed mb-4">
											You can control cookies through:
										</p>
										<ul className="list-disc pl-6 mb-4 space-y-2 text-slate-700">
											<li>
												<strong>Cookie Banner:</strong> Accept or reject optional cookies
												when you first visit
											</li>
											<li>
												<strong>Cookie Settings:</strong> Manage preferences in your account
												settings
											</li>
											<li>
												<strong>Browser Settings:</strong> Block or delete cookies through
												your browser
											</li>
										</ul>
										<p className="text-slate-700 text-sm italic">
											Note: Blocking certain cookies may affect Platform functionality and
											user experience.
										</p>
									</div>
								</div>
							</div>
						</div>

						{/* 8. Data Security */}
						<div id="security" className="mb-16 scroll-mt-20">
							<div className="flex items-start mb-4">
								<Lock className="w-8 h-8 text-blue-600 mr-4 flex-shrink-0 mt-1" />
								<div>
									<h2 className="text-3xl font-bold text-dark-slate mb-4">
										8. Data Security
									</h2>
									<div className="prose prose-slate max-w-none">
										<p className="text-slate-700 leading-relaxed mb-4">
											We implement appropriate technical and organizational security
											measures to protect your personal information against unauthorized
											access, alteration, disclosure, or destruction.
										</p>

										<h3 className="text-xl font-bold text-slate-800 mb-3">
											Security Measures We Implement
										</h3>
										<ul className="list-disc pl-6 mb-4 space-y-2 text-slate-700">
											<li>
												<strong>Encryption:</strong> 256-bit SSL/TLS encryption for data
												transmission
											</li>
											<li>
												<strong>Data Encryption at Rest:</strong> All sensitive data is
												encrypted when stored
											</li>
											<li>
												<strong>Secure Authentication:</strong> Password hashing and
												multi-factor authentication options
											</li>
											<li>
												<strong>Access Controls:</strong> Role-based access to limit who can
												view your data
											</li>
											<li>
												<strong>Regular Security Audits:</strong> Third-party security
												assessments and penetration testing
											</li>
											<li>
												<strong>Secure Hosting:</strong> Data stored on secure cloud servers
												with redundancy
											</li>
											<li>
												<strong>Monitoring:</strong> 24/7 monitoring for security threats
												and anomalies
											</li>
											<li>
												<strong>Employee Training:</strong> Regular security and privacy
												training for all staff
											</li>
										</ul>

										<div className="bg-amber-50 border-l-4 border-amber-600 p-6 rounded-r-lg my-6">
											<h4 className="font-bold text-amber-900 mb-2 flex items-center">
												<AlertCircle className="w-5 h-5 mr-2" />
												No Absolute Security
											</h4>
											<p className="text-slate-700 text-sm leading-relaxed">
												While we implement industry-standard security measures, no method of
												transmission over the Internet or electronic storage is 100% secure.
												We cannot guarantee absolute security of your information. If you
												believe your account has been compromised, contact us immediately at{' '}
												<a
													href="mailto:security@paddlx.com"
													className="text-blue-600 hover:underline"
												>
													security@paddlx.com
												</a>
												.
											</p>
										</div>

										<h3 className="text-xl font-bold text-slate-800 mb-3 mt-6">
											Your Security Responsibilities
										</h3>
										<p className="text-slate-700 leading-relaxed mb-4">
											You can help protect your account by:
										</p>
										<ul className="list-disc pl-6 mb-4 space-y-2 text-slate-700">
											<li>Using a strong, unique password</li>
											<li>Never sharing your login credentials</li>
											<li>Logging out after each session on shared devices</li>
											<li>Enabling two-factor authentication (when available)</li>
											<li>Reporting suspicious activity immediately</li>
										</ul>
									</div>
								</div>
							</div>
						</div>

						{/* 9. Data Retention */}
						<div id="retention" className="mb-16 scroll-mt-20">
							<h2 className="text-3xl font-bold text-dark-slate mb-4">
								9. Data Retention
							</h2>
							<div className="prose prose-slate max-w-none">
								<p className="text-slate-700 leading-relaxed mb-4">
									We retain your personal information only for as long as necessary to
									fulfill the purposes outlined in this Privacy Policy, unless a longer
									retention period is required or permitted by law.
								</p>

								<h3 className="text-xl font-bold text-slate-800 mb-3">
									Retention Periods
								</h3>
								<ul className="list-disc pl-6 mb-4 space-y-2 text-slate-700">
									<li>
										<strong>Account Information:</strong> Retained while your account is
										active
									</li>
									<li>
										<strong>Booking Records:</strong> 7 years for tax and accounting
										purposes
									</li>
									<li>
										<strong>Transaction Data:</strong> 7 years as required by Philippine
										law
									</li>
									<li>
										<strong>Communication Records:</strong> 3 years for customer service
										purposes
									</li>
									<li>
										<strong>Marketing Consent:</strong> Until you withdraw consent or
										close your account
									</li>
									<li>
										<strong>Analytics Data:</strong> Aggregated data retained indefinitely
										(anonymized)
									</li>
								</ul>

								<h3 className="text-xl font-bold text-slate-800 mb-3 mt-6">
									Data Deletion
								</h3>
								<p className="text-slate-700 leading-relaxed mb-4">
									When you delete your account or request data deletion:
								</p>
								<ul className="list-disc pl-6 mb-4 space-y-2 text-slate-700">
									<li>
										Your personal information will be deleted or anonymized within 30 days
									</li>
									<li>Some data may be retained in backup systems for up to 90 days</li>
									<li>
										Certain information may be retained longer if required by law (e.g.,
										financial records)
									</li>
									<li>Aggregated, anonymized data may be retained for analytics</li>
								</ul>
							</div>
						</div>

						{/* 10. Your Privacy Rights */}
						<div id="rights" className="mb-16 scroll-mt-20">
							<div className="flex items-start mb-4">
								<UserCheck className="w-8 h-8 text-blue-600 mr-4 flex-shrink-0 mt-1" />
								<div>
									<h2 className="text-3xl font-bold text-dark-slate mb-4">
										10. Your Privacy Rights
									</h2>
									<div className="prose prose-slate max-w-none">
										<p className="text-slate-700 leading-relaxed mb-4">
											Under the Data Privacy Act of 2012 and international data protection
											laws, you have the following rights regarding your personal
											information:
										</p>

										<div className="space-y-4">
											<div className="bg-blue-50 p-4 rounded-lg">
												<h3 className="text-lg font-bold text-slate-800 mb-2">
													Right to Access
												</h3>
												<p className="text-slate-700 text-sm">
													Request a copy of the personal information we hold about you.
													Access your data anytime through your account settings.
												</p>
											</div>

											<div className="bg-blue-50 p-4 rounded-lg">
												<h3 className="text-lg font-bold text-slate-800 mb-2">
													Right to Rectification
												</h3>
												<p className="text-slate-700 text-sm">
													Correct inaccurate or incomplete personal information. You can
													update most information directly in your profile.
												</p>
											</div>

											<div className="bg-blue-50 p-4 rounded-lg">
												<h3 className="text-lg font-bold text-slate-800 mb-2">
													Right to Erasure (&quot;Right to be Forgotten&quot;)
												</h3>
												<p className="text-slate-700 text-sm">
													Request deletion of your personal information, subject to legal
													retention requirements.
												</p>
											</div>

											<div className="bg-blue-50 p-4 rounded-lg">
												<h3 className="text-lg font-bold text-slate-800 mb-2">
													Right to Data Portability
												</h3>
												<p className="text-slate-700 text-sm">
													Request a copy of your data in a structured, machine-readable
													format to transfer to another service.
												</p>
											</div>

											<div className="bg-blue-50 p-4 rounded-lg">
												<h3 className="text-lg font-bold text-slate-800 mb-2">
													Right to Object
												</h3>
												<p className="text-slate-700 text-sm">
													Object to processing of your personal information for marketing
													purposes or based on legitimate interests.
												</p>
											</div>

											<div className="bg-blue-50 p-4 rounded-lg">
												<h3 className="text-lg font-bold text-slate-800 mb-2">
													Right to Restrict Processing
												</h3>
												<p className="text-slate-700 text-sm">
													Request that we temporarily limit how we use your personal
													information.
												</p>
											</div>

											<div className="bg-blue-50 p-4 rounded-lg">
												<h3 className="text-lg font-bold text-slate-800 mb-2">
													Right to Withdraw Consent
												</h3>
												<p className="text-slate-700 text-sm">
													Withdraw your consent for data processing at any time (where
													processing is based on consent).
												</p>
											</div>

											<div className="bg-blue-50 p-4 rounded-lg">
												<h3 className="text-lg font-bold text-slate-800 mb-2">
													Right to Lodge a Complaint
												</h3>
												<p className="text-slate-700 text-sm">
													File a complaint with the National Privacy Commission if you
													believe your privacy rights have been violated.
												</p>
											</div>
										</div>

										<h3 className="text-xl font-bold text-slate-800 mb-3 mt-6">
											How to Exercise Your Rights
										</h3>
										<p className="text-slate-700 leading-relaxed mb-4">
											To exercise any of these rights:
										</p>
										<ol className="list-decimal pl-6 mb-4 space-y-2 text-slate-700">
											<li>
												<strong>Through Your Account:</strong> Access and manage many
												settings directly in your profile
											</li>
											<li>
												<strong>Email Us:</strong> Send a request to{' '}
												<a
													href="mailto:privacy@paddlx.com"
													className="text-blue-600 hover:underline"
												>
													privacy@paddlx.com
												</a>
											</li>
											<li>
												<strong>In-App Request:</strong> Use the &quot;Privacy Rights
												Request&quot; form in Settings
											</li>
										</ol>
										<p className="text-slate-700 text-sm italic">
											We will respond to your request within 15 days as required by the
											Data Privacy Act. We may ask you to verify your identity before
											processing your request.
										</p>

										<h3 className="text-xl font-bold text-slate-800 mb-3 mt-6">
											Opting Out of Marketing Communications
										</h3>
										<p className="text-slate-700 leading-relaxed mb-4">
											You can opt out of marketing emails by:
										</p>
										<ul className="list-disc pl-6 mb-4 space-y-2 text-slate-700">
											<li>Clicking &quot;Unsubscribe&quot; in any marketing email</li>
											<li>Adjusting email preferences in Account Settings</li>
											<li>
												Contacting us at{' '}
												<a
													href="mailto:privacy@paddlx.com"
													className="text-blue-600 hover:underline"
												>
													privacy@paddlx.com
												</a>
											</li>
										</ul>
										<p className="text-slate-700 text-sm italic">
											Note: You will still receive transactional emails (booking
											confirmations, receipts, etc.) even if you opt out of marketing.
										</p>
									</div>
								</div>
							</div>
						</div>

						{/* 11. Children's Privacy */}
						<div id="children" className="mb-16 scroll-mt-20">
							<h2 className="text-3xl font-bold text-dark-slate mb-4">
								11. Children&apos;s Privacy
							</h2>
							<div className="prose prose-slate max-w-none">
								<div className="bg-amber-50 border-l-4 border-amber-600 p-6 rounded-r-lg mb-6">
									<p className="text-slate-700 leading-relaxed mb-4">
										paddlX is not intended for children under the age of 18. We do not
										knowingly collect personal information from children under 18 without
										parental consent.
									</p>
								</div>

								<h3 className="text-xl font-bold text-slate-800 mb-3">
									Parental Consent Required
								</h3>
								<p className="text-slate-700 leading-relaxed mb-4">
									If you are under 18 years old:
								</p>
								<ul className="list-disc pl-6 mb-4 space-y-2 text-slate-700">
									<li>
										You must obtain permission from your parent or legal guardian before
										creating an account
									</li>
									<li>Your parent/guardian must supervise your use of the Platform</li>
									<li>
										Your parent/guardian is responsible for any bookings or transactions
									</li>
								</ul>

								<h3 className="text-xl font-bold text-slate-800 mb-3 mt-6">
									For Parents and Guardians
								</h3>
								<p className="text-slate-700 leading-relaxed mb-4">
									If you believe your child has provided personal information to paddlX
									without your consent, please contact us immediately at{' '}
									<a
										href="mailto:privacy@paddlx.com"
										className="text-blue-600 hover:underline"
									>
										privacy@paddlx.com
									</a>
									. We will promptly delete such information from our records.
								</p>
							</div>
						</div>

						{/* 12. International Data Transfers */}
						<div id="transfers" className="mb-16 scroll-mt-20">
							<h2 className="text-3xl font-bold text-dark-slate mb-4">
								12. International Data Transfers
							</h2>
							<div className="prose prose-slate max-w-none">
								<p className="text-slate-700 leading-relaxed mb-4">
									Your personal information may be transferred to and processed in
									countries other than the Philippines, including countries that may not
									have the same level of data protection laws.
								</p>

								<h3 className="text-xl font-bold text-slate-800 mb-3">
									Where We Transfer Data
								</h3>
								<ul className="list-disc pl-6 mb-4 space-y-2 text-slate-700">
									<li>
										<strong>United States:</strong> Stripe (payment processing), cloud
										hosting services
									</li>
									<li>
										<strong>Singapore:</strong> Backup data storage
									</li>
									<li>
										<strong>European Union:</strong> Analytics and monitoring services
									</li>
								</ul>

								<h3 className="text-xl font-bold text-slate-800 mb-3 mt-6">
									Safeguards for International Transfers
								</h3>
								<p className="text-slate-700 leading-relaxed mb-4">
									When we transfer your data internationally, we implement appropriate
									safeguards:
								</p>
								<ul className="list-disc pl-6 mb-4 space-y-2 text-slate-700">
									<li>
										Standard contractual clauses approved by data protection authorities
									</li>
									<li>
										Ensuring recipients comply with international data protection
										standards
									</li>
									<li>Data processing agreements with all third-party processors</li>
									<li>Encryption of data during transmission and storage</li>
								</ul>
							</div>
						</div>

						{/* 13. Changes to Privacy Policy */}
						<div id="changes" className="mb-16 scroll-mt-20">
							<h2 className="text-3xl font-bold text-dark-slate mb-4">
								13. Changes to This Privacy Policy
							</h2>
							<div className="prose prose-slate max-w-none">
								<p className="text-slate-700 leading-relaxed mb-4">
									We may update this Privacy Policy from time to time to reflect changes
									in our practices, technology, legal requirements, or other factors.
								</p>

								<h3 className="text-xl font-bold text-slate-800 mb-3">
									How We Notify You of Changes
								</h3>
								<ul className="list-disc pl-6 mb-4 space-y-2 text-slate-700">
									<li>
										The &quot;Last Updated&quot; date at the top of this policy will be
										revised
									</li>
									<li>For material changes, we will send you an email notification</li>
									<li>We will display a prominent notice on the Platform</li>
									<li>
										For significant changes affecting your rights, we may require your
										consent
									</li>
								</ul>

								<p className="text-slate-700 leading-relaxed mb-4">
									Your continued use of the Platform after changes become effective
									constitutes your acceptance of the updated Privacy Policy. We encourage
									you to review this Privacy Policy periodically.
								</p>
							</div>
						</div>

						{/* 14. Contact Us */}
						<div id="contact" className="mb-16 scroll-mt-20">
							<div className="bg-blue-50 border-l-4 border-blue-600 p-8 rounded-r-lg">
								<h2 className="text-2xl font-bold text-dark-slate mb-4">
									14. Contact Us
								</h2>
								<p className="text-slate-700 leading-relaxed mb-6">
									If you have any questions, concerns, or requests regarding this Privacy
									Policy or our data practices, please contact us:
								</p>

								<div className="space-y-4 mb-6">
									<div>
										<h3 className="font-bold text-slate-800 mb-1">
											Data Protection Officer
										</h3>
										<p className="text-slate-700">
											Email:{' '}
											<a
												href="mailto:dpo@paddlx.com"
												className="text-blue-600 hover:underline"
											>
												dpo@paddlx.com
											</a>
										</p>
									</div>

									<div>
										<h3 className="font-bold text-slate-800 mb-1">Privacy Inquiries</h3>
										<p className="text-slate-700">
											Email:{' '}
											<a
												href="mailto:privacy@paddlx.com"
												className="text-blue-600 hover:underline"
											>
												privacy@paddlx.com
											</a>
										</p>
									</div>

									<div>
										<h3 className="font-bold text-slate-800 mb-1">General Support</h3>
										<p className="text-slate-700">
											Email:{' '}
											<a
												href="mailto:support@paddlx.com"
												className="text-blue-600 hover:underline"
											>
												support@paddlx.com
											</a>
										</p>
									</div>

									<div>
										<h3 className="font-bold text-slate-800 mb-1">Mailing Address</h3>
										<p className="text-slate-700">
											[Your Company Legal Name]
											<br />
											[Street Address]
											<br />
											Mandaluyong, Metro Manila
											<br />
											Philippines [Postal Code]
										</p>
									</div>
								</div>

								<div className="border-t border-blue-200 pt-6 mt-6">
									<h3 className="font-bold text-slate-800 mb-2">
										National Privacy Commission
									</h3>
									<p className="text-slate-700 text-sm mb-2">
										If you are not satisfied with our response to your privacy concern,
										you have the right to lodge a complaint with the National Privacy
										Commission:
									</p>
									<p className="text-slate-700 text-sm">
										<strong>National Privacy Commission</strong>
										<br />
										5th Floor, Philippine International Convention Center (PICC)
										<br />
										Vicente Sotto Street, Pasay City 1307
										<br />
										Website:{' '}
										<a
											href="https://privacy.gov.ph"
											target="_blank"
											rel="noopener noreferrer"
											className="text-blue-600 hover:underline"
										>
											https://privacy.gov.ph
										</a>
										<br />
										Email: info@privacy.gov.ph
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* CTA Section */}
				<DynamicCtaSection
					buttonHref="/support"
					buttonText="Contact Privacy Team"
					featureList={[
						'Questions about your data?',
						'Need to exercise your rights?',
						'Privacy concerns or feedback?',
					]}
					title="Have Privacy Questions?"
					subtitle="Our Data Protection Officer and privacy team are here to help answer any questions about how we handle your personal information."
					colorScheme="blue"
				/>
			</div>
		</>
	);
}
