// src/app/help/terms/page.tsx

import { Metadata } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import {
	FileText,
	Shield,
	UserCheck,
	AlertTriangle,
	Scale,
	Users,
	CreditCard,
	Ban,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import DynamicCtaSection from '../../_components/cta/DynamicCtaSection';

// SEO Metadata
export const metadata: Metadata = {
	title: 'Terms of Service | paddlX',
	description:
		'Read paddlX Terms of Service. Understand your rights and responsibilities when using our platform for court bookings, tournaments, coaching, and community features.',
	keywords: [
		'paddlX terms of service',
		'user agreement',
		'terms and conditions',
		'pickleball app terms',
		'booking terms',
		'legal agreement',
		'Philippines app terms',
	],
	openGraph: {
		title: 'Terms of Service | paddlX',
		description:
			'Read our Terms of Service to understand your rights and obligations when using paddlX.',
		url: 'https://www.paddlx.com/help/terms',
		type: 'website',
	},
};

// JSON-LD Structured Data
const jsonLd = {
	'@context': 'https://schema.org',
	'@type': 'WebPage',
	'name': 'paddlX Terms of Service',
	'description':
		'Terms of Service and legal agreement for using the paddlX platform',
	'url': 'https://www.paddlx.com/help/terms',
};

export default function TermsOfServicePage() {
	return (
		<>
			<Head>
				<script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
			</Head>
			<div className="bg-white text-slate-800">
				{/* Hero Section */}
				<section className="relative bg-slate-50 py-20 lg:py-32">
					<div className="container mx-auto px-6 text-center">
						<FileText className="w-16 h-16 mx-auto text-slate-700 mb-6" />
						<h1 className="text-4xl lg:text-6xl font-extrabold text-dark-slate mb-4 leading-tight">
							Terms of Service
						</h1>
						<p className="text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto mb-2">
							Last Updated: October 21, 2025
						</p>
						<p className="text-base text-slate-500 max-w-2xl mx-auto">
							Please read these Terms of Service carefully before using paddlX. By
							accessing or using our platform, you agree to be bound by these terms.
						</p>
					</div>
				</section>

				{/* Quick Navigation */}
				<section className="py-12 bg-white border-b border-slate-200">
					<div className="container mx-auto px-6">
						<h2 className="text-2xl font-bold text-center mb-8">Quick Navigation</h2>
						<div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
							{[
								{ title: 'Acceptance of Terms', href: '#acceptance' },
								{ title: 'Eligibility', href: '#eligibility' },
								{ title: 'User Accounts', href: '#accounts' },
								{ title: 'Platform Services', href: '#services' },
								{ title: 'Bookings & Payments', href: '#bookings' },
								{ title: 'User Conduct', href: '#conduct' },
								{ title: 'User Content', href: '#content' },
								{ title: 'Intellectual Property', href: '#ip' },
								{ title: 'Cancellations & Refunds', href: '#cancellations' },
								{ title: 'Liability & Disclaimers', href: '#liability' },
								{ title: 'Dispute Resolution', href: '#disputes' },
								{ title: 'Termination', href: '#termination' },
							].map((item, idx) => (
								<Link
									key={idx}
									href={item.href}
									className="text-teal-600 hover:text-teal-700 hover:underline text-sm font-semibold p-3 bg-slate-50 rounded-lg text-center transition-colors"
								>
									{item.title}
								</Link>
							))}
						</div>
					</div>
				</section>

				{/* Terms Content */}
				<section className="py-20">
					<div className="container mx-auto px-6 max-w-4xl">
						{/* 1. Acceptance of Terms */}
						<div id="acceptance" className="mb-16 scroll-mt-20">
							<div className="flex items-start mb-4">
								<UserCheck className="w-8 h-8 text-teal-600 mr-4 flex-shrink-0 mt-1" />
								<div>
									<h2 className="text-3xl font-bold text-dark-slate mb-4">
										1. Acceptance of Terms
									</h2>
									<div className="prose prose-slate max-w-none">
										<p className="text-slate-700 leading-relaxed mb-4">
											These Terms of Service (&quot;Terms&quot;) constitute a legally
											binding agreement between you and paddlX (operated by [Your Company
											Legal Name]), governing your access to and use of the paddlX website,
											mobile application, and related services (collectively, the
											&quot;Platform&quot;).
										</p>
										<p className="text-slate-700 leading-relaxed mb-4">
											By accessing, browsing, registering for an account, or using any part
											of the Platform, you acknowledge that you have read, understood, and
											agree to be bound by these Terms, as well as our Privacy Policy and
											any additional guidelines or rules posted on the Platform.
										</p>
										<p className="text-slate-700 leading-relaxed mb-4">
											<strong>
												IF YOU DO NOT AGREE TO THESE TERMS, YOU MUST NOT ACCESS OR USE THE
												PLATFORM.
											</strong>
										</p>
										<p className="text-slate-700 leading-relaxed">
											We reserve the right to modify, update, or change these Terms at any
											time. Any changes will be effective immediately upon posting to the
											Platform. Your continued use of the Platform after such changes
											constitutes your acceptance of the updated Terms. It is your
											responsibility to review these Terms periodically.
										</p>
									</div>
								</div>
							</div>
						</div>

						{/* 2. Eligibility */}
						<div id="eligibility" className="mb-16 scroll-mt-20">
							<div className="flex items-start mb-4">
								<Shield className="w-8 h-8 text-teal-600 mr-4 flex-shrink-0 mt-1" />
								<div>
									<h2 className="text-3xl font-bold text-dark-slate mb-4">
										2. Eligibility and User Representations
									</h2>
									<div className="prose prose-slate max-w-none">
										<p className="text-slate-700 leading-relaxed mb-4">
											To use the Platform, you must be at least 18 years of age or the age
											of legal majority in your jurisdiction, and have the legal capacity
											to enter into a binding contract. By using the Platform, you
											represent and warrant that:
										</p>
										<ul className="list-disc pl-6 mb-4 space-y-2 text-slate-700">
											<li>
												You are at least 18 years old and legally capable of entering into
												binding contracts
											</li>
											<li>
												All information you provide to paddlX is accurate, current, and
												complete
											</li>
											<li>
												You will maintain and promptly update your information to keep it
												accurate and current
											</li>
											<li>
												You have not been previously suspended or removed from the Platform
											</li>
											<li>
												Your use of the Platform complies with all applicable laws and
												regulations of the Philippines and your local jurisdiction
											</li>
											<li>
												You are not located in a country subject to a government embargo or
												designated as a &quot;terrorist supporting&quot; country
											</li>
										</ul>
										<p className="text-slate-700 leading-relaxed">
											Minors under 18 may use the Platform only with the involvement and
											consent of a parent or legal guardian. Parents and guardians are
											fully responsible for the activities of minors under their
											supervision.
										</p>
									</div>
								</div>
							</div>
						</div>

						{/* 3. User Accounts */}
						<div id="accounts" className="mb-16 scroll-mt-20">
							<div className="flex items-start mb-4">
								<Users className="w-8 h-8 text-teal-600 mr-4 flex-shrink-0 mt-1" />
								<div>
									<h2 className="text-3xl font-bold text-dark-slate mb-4">
										3. User Accounts
									</h2>
									<div className="prose prose-slate max-w-none">
										<h3 className="text-xl font-bold text-slate-800 mb-3 mt-6">
											3.1 Account Registration
										</h3>
										<p className="text-slate-700 leading-relaxed mb-4">
											To access certain features of the Platform, you must create an
											account. You agree to provide accurate, current, and complete
											information during registration and to update such information to
											keep it accurate and current.
										</p>

										<h3 className="text-xl font-bold text-slate-800 mb-3 mt-6">
											3.2 Account Security
										</h3>
										<p className="text-slate-700 leading-relaxed mb-4">
											You are responsible for maintaining the confidentiality of your
											account credentials, including your password. You are fully
											responsible for all activities that occur under your account, whether
											or not authorized by you. You agree to:
										</p>
										<ul className="list-disc pl-6 mb-4 space-y-2 text-slate-700">
											<li>
												Immediately notify paddlX of any unauthorized use of your account
											</li>
											<li>
												Ensure that you log out from your account at the end of each session
											</li>
											<li>
												Use a strong and unique password that is not used for other accounts
											</li>
											<li>Never share your account credentials with any third party</li>
										</ul>

										<h3 className="text-xl font-bold text-slate-800 mb-3 mt-6">
											3.3 Account Types
										</h3>
										<p className="text-slate-700 leading-relaxed mb-4">
											paddlX offers different types of accounts:
										</p>
										<ul className="list-disc pl-6 mb-4 space-y-2 text-slate-700">
											<li>
												<strong>Player Accounts:</strong> For individuals booking courts,
												joining tournaments, or finding coaches
											</li>
											<li>
												<strong>Venue Owner Accounts:</strong> For facility operators
												listing courts for booking
											</li>
											<li>
												<strong>Coach Accounts:</strong> For certified coaches offering
												lessons and training
											</li>
											<li>
												<strong>Organizer Accounts:</strong> For individuals or
												organizations hosting tournaments and events
											</li>
										</ul>
										<p className="text-slate-700 leading-relaxed">
											Each account type may have specific terms, verification requirements,
											and responsibilities outlined in additional agreements.
										</p>

										<h3 className="text-xl font-bold text-slate-800 mb-3 mt-6">
											3.4 Account Restrictions
										</h3>
										<p className="text-slate-700 leading-relaxed">
											You may not create more than one personal account. You may not
											transfer, sell, or otherwise make your account available to any third
											party without our prior written consent. We reserve the right to
											suspend or terminate accounts that violate these restrictions.
										</p>
									</div>
								</div>
							</div>
						</div>

						{/* 4. Platform Services */}
						<div id="services" className="mb-16 scroll-mt-20">
							<h2 className="text-3xl font-bold text-dark-slate mb-4">
								4. Platform Services
							</h2>
							<div className="prose prose-slate max-w-none">
								<p className="text-slate-700 leading-relaxed mb-4">
									paddlX provides a platform that connects users with pickleball and
									paddle sports opportunities, including:
								</p>
								<ul className="list-disc pl-6 mb-4 space-y-2 text-slate-700">
									<li>
										<strong>Court Booking:</strong> Browse and book available courts at
										registered venues
									</li>
									<li>
										<strong>Tournament Registration:</strong> Discover and register for
										tournaments and competitive events
									</li>
									<li>
										<strong>Coaching Services:</strong> Connect with certified coaches for
										lessons and training
									</li>
									<li>
										<strong>Community Features:</strong> Social networking, match finding,
										skill ratings, and player profiles
									</li>
									<li>
										<strong>Event Management:</strong> Tools for organizing and managing
										events and tournaments
									</li>
									<li>
										<strong>Venue Management:</strong> Administrative tools for facility
										operators to manage bookings and availability
									</li>
								</ul>

								<h3 className="text-xl font-bold text-slate-800 mb-3 mt-6">
									4.1 Platform Role
								</h3>
								<p className="text-slate-700 leading-relaxed mb-4">
									<strong>IMPORTANT:</strong> paddlX acts solely as an intermediary
									platform connecting users with service providers (venues, coaches,
									organizers). We do not own, operate, manage, or control any venues,
									coaching services, or events listed on the Platform.
								</p>
								<p className="text-slate-700 leading-relaxed mb-4">
									All bookings, services, events, and transactions are agreements
									directly between you and the respective service provider. paddlX is not
									a party to these agreements and assumes no liability for the quality,
									safety, legality, or any other aspect of the services provided by third
									parties through our Platform.
								</p>

								<h3 className="text-xl font-bold text-slate-800 mb-3 mt-6">
									4.2 Service Availability
								</h3>
								<p className="text-slate-700 leading-relaxed">
									We strive to maintain the Platform&apos;s availability 24/7, but we do
									not guarantee uninterrupted access. We reserve the right to modify,
									suspend, or discontinue any part of the Platform at any time, with or
									without notice, for maintenance, updates, or any other reason. We will
									not be liable for any modification, suspension, or discontinuance of
									the Platform.
								</p>
							</div>
						</div>

						{/* 5. Bookings and Payments */}
						<div id="bookings" className="mb-16 scroll-mt-20">
							<div className="flex items-start mb-4">
								<CreditCard className="w-8 h-8 text-teal-600 mr-4 flex-shrink-0 mt-1" />
								<div>
									<h2 className="text-3xl font-bold text-dark-slate mb-4">
										5. Bookings, Payments, and Fees
									</h2>
									<div className="prose prose-slate max-w-none">
										<h3 className="text-xl font-bold text-slate-800 mb-3">
											5.1 Booking Process
										</h3>
										<p className="text-slate-700 leading-relaxed mb-4">
											When you make a booking through the Platform:
										</p>
										<ul className="list-disc pl-6 mb-4 space-y-2 text-slate-700">
											<li>
												You will receive a booking confirmation via email and in-app
												notification
											</li>
											<li>
												Payment is processed immediately upon confirmation unless otherwise
												specified
											</li>
											<li>Booking times include any setup or breakdown time required</li>
											<li>
												You must arrive at least 15 minutes before your scheduled booking
												time
											</li>
											<li>
												Late arrivals (more than 15 minutes after booking start time) may
												result in forfeiture of the booking without refund
											</li>
										</ul>

										<h3 className="text-xl font-bold text-slate-800 mb-3 mt-6">
											5.2 Payment Processing
										</h3>
										<p className="text-slate-700 leading-relaxed mb-4">
											All payments are securely processed through Stripe, a PCI-DSS Level 1
											certified payment processor. By making a booking, you agree to pay
											all applicable fees, charges, and taxes in connection with your use
											of the Platform. You authorize paddlX and our payment processors to
											charge your designated payment method.
										</p>

										<h3 className="text-xl font-bold text-slate-800 mb-3 mt-6">
											5.3 Platform Fees
										</h3>
										<p className="text-slate-700 leading-relaxed mb-4">
											paddlX charges a platform service fee of 2.9% + ₱15 per transaction
											to cover payment processing and platform maintenance costs. This fee
											is included in the total amount displayed at checkout. Additional
											fees may apply for premium features or services.
										</p>

										<h3 className="text-xl font-bold text-slate-800 mb-3 mt-6">
											5.4 Pricing and Fee Changes
										</h3>
										<p className="text-slate-700 leading-relaxed mb-4">
											Service providers set their own pricing. paddlX reserves the right to
											change platform fees at any time with 30 days&apos; advance notice.
											Price changes will not affect bookings already confirmed prior to the
											notice.
										</p>

										<h3 className="text-xl font-bold text-slate-800 mb-3 mt-6">
											5.5 Payment Method Verification
										</h3>
										<p className="text-slate-700 leading-relaxed">
											We reserve the right to verify payment methods and may place
											authorization holds on your payment method. If a payment fails, we
											may attempt to charge your payment method again or request an
											alternative payment method.
										</p>
									</div>
								</div>
							</div>
						</div>

						{/* 6. User Conduct */}
						<div id="conduct" className="mb-16 scroll-mt-20">
							<div className="flex items-start mb-4">
								<Ban className="w-8 h-8 text-red-600 mr-4 flex-shrink-0 mt-1" />
								<div>
									<h2 className="text-3xl font-bold text-dark-slate mb-4">
										6. User Conduct and Prohibited Activities
									</h2>
									<div className="prose prose-slate max-w-none">
										<p className="text-slate-700 leading-relaxed mb-4">
											You agree to use the Platform only for lawful purposes and in
											accordance with these Terms. You specifically agree NOT to:
										</p>

										<div className="bg-red-50 border-l-4 border-red-600 p-4 mb-6">
											<h4 className="font-bold text-red-900 mb-2">Strictly Prohibited:</h4>
											<ul className="list-disc pl-6 space-y-2 text-slate-700">
												<li>
													Violate any local, national, or international law or regulation
												</li>
												<li>
													Impersonate any person or entity, or falsely state or misrepresent
													your affiliation with any person or entity
												</li>
												<li>
													Create multiple accounts or transfer your account to another person
												</li>
												<li>
													Use automated systems (bots, scripts, scrapers) to access the
													Platform
												</li>
												<li>
													Interfere with or disrupt the Platform or servers or networks
													connected to the Platform
												</li>
												<li>
													Attempt to gain unauthorized access to any portion of the Platform
												</li>
												<li>
													Engage in any fraudulent activity, including making fake bookings
													or providing false payment information
												</li>
												<li>Harass, abuse, threaten, or intimidate other users</li>
												<li>
													Post or transmit any content that is unlawful, harmful,
													threatening, abusive, defamatory, vulgar, obscene, or otherwise
													objectionable
												</li>
												<li>Upload viruses, malware, or any other malicious code</li>
												<li>
													Collect or harvest personal information about other users without
													their consent
												</li>
												<li>
													Use the Platform for any commercial purpose not expressly
													authorized by paddlX
												</li>
												<li>
													Reverse engineer, decompile, or disassemble any part of the
													Platform
												</li>
												<li>
													Create derivative works based on the Platform without our express
													written permission
												</li>
												<li>Resell or redistribute access to the Platform</li>
											</ul>
										</div>

										<h3 className="text-xl font-bold text-slate-800 mb-3 mt-6">
											6.1 Facility-Specific Conduct
										</h3>
										<p className="text-slate-700 leading-relaxed mb-4">
											When using booked facilities, you must:
										</p>
										<ul className="list-disc pl-6 mb-4 space-y-2 text-slate-700">
											<li>
												Follow all facility rules and regulations posted or communicated by
												the venue
											</li>
											<li>Respect the property and equipment of the facility</li>
											<li>
												Behave appropriately and respectfully toward other users and
												facility staff
											</li>
											<li>Leave the facility in the same condition you found it</li>
											<li>
												Report any damage or issues to the facility operator immediately
											</li>
										</ul>

										<h3 className="text-xl font-bold text-slate-800 mb-3 mt-6">
											6.2 Consequences of Violations
										</h3>
										<p className="text-slate-700 leading-relaxed">
											Violation of these conduct rules may result in immediate suspension
											or termination of your account, forfeiture of any bookings or
											payments, and potential legal action. We reserve the right to
											investigate violations and cooperate with law enforcement
											authorities.
										</p>
									</div>
								</div>
							</div>
						</div>

						{/* 7. User Content */}
						<div id="content" className="mb-16 scroll-mt-20">
							<h2 className="text-3xl font-bold text-dark-slate mb-4">
								7. User-Generated Content
							</h2>
							<div className="prose prose-slate max-w-none">
								<h3 className="text-xl font-bold text-slate-800 mb-3">
									7.1 Your Content
								</h3>
								<p className="text-slate-700 leading-relaxed mb-4">
									The Platform allows you to post, upload, publish, or transmit content,
									including but not limited to text, photos, videos, player profiles,
									reviews, ratings, comments, and tournament results (collectively,
									&quot;User Content&quot;). You retain all ownership rights to your User
									Content.
								</p>

								<h3 className="text-xl font-bold text-slate-800 mb-3 mt-6">
									7.2 Content License
								</h3>
								<p className="text-slate-700 leading-relaxed mb-4">
									By posting User Content on the Platform, you grant paddlX a worldwide,
									non-exclusive, royalty-free, transferable, sublicensable license to
									use, reproduce, distribute, prepare derivative works of, display, and
									perform your User Content in connection with operating and promoting
									the Platform. This license continues even if you stop using the
									Platform.
								</p>

								<h3 className="text-xl font-bold text-slate-800 mb-3 mt-6">
									7.3 Content Responsibility
								</h3>
								<p className="text-slate-700 leading-relaxed mb-4">
									You are solely responsible for all User Content you post. You represent
									and warrant that:
								</p>
								<ul className="list-disc pl-6 mb-4 space-y-2 text-slate-700">
									<li>
										You own or have the necessary rights, licenses, and permissions to use
										and authorize us to use your User Content
									</li>
									<li>
										Your User Content does not violate any third-party rights, including
										intellectual property rights, privacy rights, or publicity rights
									</li>
									<li>
										Your User Content complies with these Terms and all applicable laws
									</li>
								</ul>

								<h3 className="text-xl font-bold text-slate-800 mb-3 mt-6">
									7.4 Content Moderation
								</h3>
								<p className="text-slate-700 leading-relaxed mb-4">
									paddlX reserves the right, but not the obligation, to monitor, review,
									edit, or remove any User Content at our sole discretion, for any
									reason, including User Content that we believe violates these Terms, is
									harmful, or is otherwise objectionable. We do not endorse any User
									Content or any opinion, recommendation, or advice expressed therein.
								</p>

								<h3 className="text-xl font-bold text-slate-800 mb-3 mt-6">
									7.5 Prohibited Content
								</h3>
								<p className="text-slate-700 leading-relaxed mb-4">
									You may not post User Content that:
								</p>
								<ul className="list-disc pl-6 mb-4 space-y-2 text-slate-700">
									<li>
										Infringes any patent, trademark, trade secret, copyright, or other
										proprietary rights
									</li>
									<li>
										Contains hate speech, discriminatory content, or promotes violence
									</li>
									<li>Is sexually explicit or pornographic</li>
									<li>Contains false, misleading, or deceptive information</li>
									<li>Promotes illegal activities</li>
									<li>Contains personal information of others without their consent</li>
									<li>Contains spam, advertising, or promotional content</li>
								</ul>
							</div>
						</div>

						{/* 8. Intellectual Property */}
						<div id="ip" className="mb-16 scroll-mt-20">
							<h2 className="text-3xl font-bold text-dark-slate mb-4">
								8. Intellectual Property Rights
							</h2>
							<div className="prose prose-slate max-w-none">
								<h3 className="text-xl font-bold text-slate-800 mb-3">
									8.1 Platform Ownership
								</h3>
								<p className="text-slate-700 leading-relaxed mb-4">
									The Platform and all of its original content, features, functionality,
									and design are and will remain the exclusive property of paddlX and its
									licensors. The Platform is protected by copyright, trademark, and other
									laws of the Philippines and foreign countries.
								</p>
								<p className="text-slate-700 leading-relaxed mb-4">
									Our trademarks and trade dress may not be used in connection with any
									product or service without our prior written consent. Nothing in these
									Terms grants you any right, title, or interest in the Platform or its
									content, except for the limited access rights expressly set forth
									herein.
								</p>

								<h3 className="text-xl font-bold text-slate-800 mb-3 mt-6">
									8.2 Limited License
								</h3>
								<p className="text-slate-700 leading-relaxed">
									Subject to your compliance with these Terms, paddlX grants you a
									limited, non-exclusive, non-transferable, non-sublicensable, revocable
									license to access and use the Platform for your personal,
									non-commercial use. This license does not include any right to: (a)
									resell or commercial use of the Platform or its content; (b)
									downloading or copying of content for the benefit of another; (c) use
									of data mining, robots, or similar data gathering and extraction tools;
									or (d) any derivative use of the Platform or its content.
								</p>
							</div>
						</div>

						{/* 9. Cancellations and Refunds */}
						<div id="cancellations" className="mb-16 scroll-mt-20">
							<h2 className="text-3xl font-bold text-dark-slate mb-4">
								9. Cancellations, Modifications, and Refunds
							</h2>
							<div className="prose prose-slate max-w-none">
								<h3 className="text-xl font-bold text-slate-800 mb-3">
									9.1 Cancellation Policies
								</h3>
								<p className="text-slate-700 leading-relaxed mb-4">
									Cancellation policies vary by service provider and type of booking. The
									specific cancellation policy applicable to your booking will be clearly
									displayed before you confirm your booking. General guidelines:
								</p>
								<ul className="list-disc pl-6 mb-4 space-y-2 text-slate-700">
									<li>
										<strong>Court Bookings:</strong> Must be cancelled at least 24 hours
										in advance for a full refund
									</li>
									<li>
										<strong>Coaching Sessions:</strong> Must be cancelled at least 48
										hours in advance for a full refund
									</li>
									<li>
										<strong>Tournament Registrations:</strong> Cancellation policies set
										by tournament organizers (typically 7-14 days before event)
									</li>
								</ul>

								<h3 className="text-xl font-bold text-slate-800 mb-3 mt-6">
									9.2 How to Cancel
								</h3>
								<p className="text-slate-700 leading-relaxed mb-4">
									To request a cancellation, go to your booking details in your account
									and select &quot;Request Cancellation&quot; or contact the service
									provider directly through the Platform. Approved refunds will be
									processed within 5-10 business days to your original payment method.
								</p>

								<h3 className="text-xl font-bold text-slate-800 mb-3 mt-6">
									9.3 Service Provider Cancellations
								</h3>
								<p className="text-slate-700 leading-relaxed mb-4">
									If a service provider cancels your booking, you will automatically
									receive a full refund. We will notify you via email and in-app
									notification as soon as possible.
								</p>

								<h3 className="text-xl font-bold text-slate-800 mb-3 mt-6">
									9.4 No-Show Policy
								</h3>
								<p className="text-slate-700 leading-relaxed mb-4">
									Failure to appear for a confirmed booking without proper cancellation
									notice will result in forfeiture of the full booking amount. Repeated
									no-shows may result in account restrictions or termination.
								</p>

								<h3 className="text-xl font-bold text-slate-800 mb-3 mt-6">
									9.5 Force Majeure
								</h3>
								<p className="text-slate-700 leading-relaxed">
									In the event of cancellations due to force majeure circumstances
									(natural disasters, government orders, pandemics, etc.), special
									cancellation and refund policies may apply. We will communicate any
									such policies through the Platform and by email.
								</p>
							</div>
						</div>

						{/* 10. Disclaimers and Liability */}
						<div id="liability" className="mb-16 scroll-mt-20">
							<div className="flex items-start mb-4">
								<AlertTriangle className="w-8 h-8 text-amber-600 mr-4 flex-shrink-0 mt-1" />
								<div>
									<h2 className="text-3xl font-bold text-dark-slate mb-4">
										10. Disclaimers and Limitation of Liability
									</h2>
									<div className="prose prose-slate max-w-none">
										<div className="bg-amber-50 border-l-4 border-amber-600 p-6 mb-6">
											<h3 className="text-xl font-bold text-slate-800 mb-3">
												10.1 &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; Basis
											</h3>
											<p className="text-slate-700 leading-relaxed mb-4">
												THE PLATFORM IS PROVIDED ON AN &quot;AS IS&quot; AND &quot;AS
												AVAILABLE&quot; BASIS WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS
												OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF
												MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND
												NON-INFRINGEMENT.
											</p>
											<p className="text-slate-700 leading-relaxed">
												WE DO NOT WARRANT THAT THE PLATFORM WILL BE UNINTERRUPTED, TIMELY,
												SECURE, OR ERROR-FREE, OR THAT DEFECTS WILL BE CORRECTED. WE MAKE NO
												WARRANTY REGARDING THE QUALITY, ACCURACY, TIMELINESS, TRUTHFULNESS,
												COMPLETENESS, OR RELIABILITY OF ANY CONTENT OR SERVICES OBTAINED
												THROUGH THE PLATFORM.
											</p>
										</div>

										<h3 className="text-xl font-bold text-slate-800 mb-3 mt-6">
											10.2 Third-Party Services Disclaimer
										</h3>
										<p className="text-slate-700 leading-relaxed mb-4">
											paddlX is not responsible for the actions, content, information, or
											data of third parties (venues, coaches, organizers), and you release
											us from any claims and damages, known and unknown, arising out of or
											in any way connected with any claim you have against any such third
											parties.
										</p>

										<h3 className="text-xl font-bold text-slate-800 mb-3 mt-6">
											10.3 Physical Activity Risks
										</h3>
										<p className="text-slate-700 leading-relaxed mb-4">
											PICKLEBALL AND PADDLE SPORTS INVOLVE INHERENT RISKS OF INJURY. BY
											USING THE PLATFORM TO BOOK COURTS, LESSONS, OR EVENTS, YOU
											ACKNOWLEDGE THESE RISKS AND AGREE THAT YOU PARTICIPATE AT YOUR OWN
											RISK. paddlX IS NOT LIABLE FOR ANY INJURIES, ACCIDENTS, OR HEALTH
											ISSUES THAT MAY OCCUR DURING YOUR USE OF BOOKED FACILITIES OR
											PARTICIPATION IN EVENTS.
										</p>

										<h3 className="text-xl font-bold text-slate-800 mb-3 mt-6">
											10.4 Limitation of Liability
										</h3>
										<div className="bg-red-50 border-l-4 border-red-600 p-6 mb-6">
											<p className="text-slate-700 leading-relaxed mb-4">
												TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL
												paddlX, ITS OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, SUPPLIERS, OR
												LICENSORS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
												CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION,
												LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES,
												RESULTING FROM:
											</p>
											<ul className="list-disc pl-6 mb-4 space-y-2 text-slate-700">
												<li>
													Your access to or use of or inability to access or use the Platform
												</li>
												<li>Any conduct or content of any third party on the Platform</li>
												<li>Any content obtained from the Platform</li>
												<li>
													Unauthorized access, use, or alteration of your transmissions or
													content
												</li>
											</ul>
											<p className="text-slate-700 leading-relaxed">
												IN NO EVENT SHALL OUR AGGREGATE LIABILITY EXCEED THE AMOUNT YOU PAID
												TO paddlX IN THE SIX (6) MONTHS PRECEDING THE EVENT GIVING RISE TO
												THE LIABILITY, OR ONE HUNDRED PHILIPPINE PESOS (PHP 100), WHICHEVER
												IS GREATER.
											</p>
										</div>

										<h3 className="text-xl font-bold text-slate-800 mb-3 mt-6">
											10.5 Indemnification
										</h3>
										<p className="text-slate-700 leading-relaxed">
											You agree to defend, indemnify, and hold harmless paddlX and its
											officers, directors, employees, agents, and affiliates from and
											against any and all claims, damages, obligations, losses,
											liabilities, costs, or debt, and expenses arising from: (a) your use
											of and access to the Platform; (b) your violation of any term of
											these Terms; (c) your violation of any third-party right, including
											intellectual property, privacy, or publicity rights; or (d) any claim
											that your User Content caused damage to a third party.
										</p>
									</div>
								</div>
							</div>
						</div>

						{/* 11. Dispute Resolution */}
						<div id="disputes" className="mb-16 scroll-mt-20">
							<div className="flex items-start mb-4">
								<Scale className="w-8 h-8 text-teal-600 mr-4 flex-shrink-0 mt-1" />
								<div>
									<h2 className="text-3xl font-bold text-dark-slate mb-4">
										11. Dispute Resolution and Governing Law
									</h2>
									<div className="prose prose-slate max-w-none">
										<h3 className="text-xl font-bold text-slate-800 mb-3">
											11.1 Governing Law
										</h3>
										<p className="text-slate-700 leading-relaxed mb-4">
											These Terms shall be governed by and construed in accordance with the
											laws of the Republic of the Philippines, without regard to its
											conflict of law provisions.
										</p>

										<h3 className="text-xl font-bold text-slate-800 mb-3 mt-6">
											11.2 Informal Resolution
										</h3>
										<p className="text-slate-700 leading-relaxed mb-4">
											Before filing a formal claim, you agree to first contact us at
											legal@paddlx.com and attempt to resolve the dispute informally. We
											will attempt to resolve the dispute informally by contacting you via
											email. If a dispute is not resolved within 30 days of submission, you
											or paddlX may bring a formal proceeding.
										</p>

										<h3 className="text-xl font-bold text-slate-800 mb-3 mt-6">
											11.3 Arbitration
										</h3>
										<p className="text-slate-700 leading-relaxed mb-4">
											Any dispute, controversy, or claim arising out of or relating to
											these Terms, including the formation, interpretation, breach, or
											termination thereof, shall be resolved by arbitration in accordance
											with the Philippine Arbitration Law (Republic Act No. 9285). The
											arbitration shall take place in Metro Manila, Philippines, and shall
											be conducted in English.
										</p>

										<h3 className="text-xl font-bold text-slate-800 mb-3 mt-6">
											11.4 Jurisdiction
										</h3>
										<p className="text-slate-700 leading-relaxed">
											For any disputes that cannot be resolved through arbitration, you
											agree to submit to the personal and exclusive jurisdiction of the
											courts located in Metro Manila, Philippines.
										</p>
									</div>
								</div>
							</div>
						</div>

						{/* 12. Termination */}
						<div id="termination" className="mb-16 scroll-mt-20">
							<h2 className="text-3xl font-bold text-dark-slate mb-4">
								12. Term and Termination
							</h2>
							<div className="prose prose-slate max-w-none">
								<h3 className="text-xl font-bold text-slate-800 mb-3">12.1 Term</h3>
								<p className="text-slate-700 leading-relaxed mb-4">
									These Terms commence on the date you first access or use the Platform
									and continue until terminated in accordance with the provisions herein.
								</p>

								<h3 className="text-xl font-bold text-slate-800 mb-3 mt-6">
									12.2 Termination by You
								</h3>
								<p className="text-slate-700 leading-relaxed mb-4">
									You may terminate your account at any time by contacting us at
									support@paddlx.com or through your account settings. Termination will
									not affect any bookings already confirmed or payments already made.
								</p>

								<h3 className="text-xl font-bold text-slate-800 mb-3 mt-6">
									12.3 Termination by paddlX
								</h3>
								<p className="text-slate-700 leading-relaxed mb-4">
									We may suspend or terminate your account and access to the Platform
									immediately, without prior notice or liability, for any reason,
									including but not limited to breach of these Terms. Reasons for
									termination may include:
								</p>
								<ul className="list-disc pl-6 mb-4 space-y-2 text-slate-700">
									<li>Violation of these Terms</li>
									<li>Fraudulent or illegal activity</li>
									<li>Repeated booking cancellations or no-shows</li>
									<li>Abusive behavior toward other users or service providers</li>
									<li>Chargebacks or payment disputes</li>
									<li>Use of multiple accounts</li>
									<li>Any activity that harms paddlX or other users</li>
								</ul>

								<h3 className="text-xl font-bold text-slate-800 mb-3 mt-6">
									12.4 Effect of Termination
								</h3>
								<p className="text-slate-700 leading-relaxed mb-4">
									Upon termination, your right to use the Platform will immediately
									cease. All provisions of these Terms which by their nature should
									survive termination shall survive, including but not limited to
									ownership provisions, warranty disclaimers, indemnity, and limitations
									of liability.
								</p>
								<p className="text-slate-700 leading-relaxed">
									If your account is terminated by paddlX for violation of these Terms,
									you will not be entitled to any refund of unused fees or payments, and
									we may retain all amounts already paid as liquidated damages.
								</p>
							</div>
						</div>

						{/* 13. General Provisions */}
						<div className="mb-16">
							<h2 className="text-3xl font-bold text-dark-slate mb-4">
								13. General Provisions
							</h2>
							<div className="prose prose-slate max-w-none">
								<h3 className="text-xl font-bold text-slate-800 mb-3">
									13.1 Entire Agreement
								</h3>
								<p className="text-slate-700 leading-relaxed mb-4">
									These Terms, together with our Privacy Policy and any other agreements
									or policies incorporated by reference, constitute the entire agreement
									between you and paddlX regarding the use of the Platform and supersede
									all prior or contemporaneous understandings and agreements.
								</p>

								<h3 className="text-xl font-bold text-slate-800 mb-3 mt-6">
									13.2 Severability
								</h3>
								<p className="text-slate-700 leading-relaxed mb-4">
									If any provision of these Terms is found to be invalid or unenforceable
									by a court of competent jurisdiction, that provision shall be enforced
									to the maximum extent permissible, and the other provisions of these
									Terms shall remain in full force and effect.
								</p>

								<h3 className="text-xl font-bold text-slate-800 mb-3 mt-6">
									13.3 Waiver
								</h3>
								<p className="text-slate-700 leading-relaxed mb-4">
									No waiver of any term of these Terms shall be deemed a further or
									continuing waiver of such term or any other term, and paddlX&apos;s
									failure to assert any right or provision under these Terms shall not
									constitute a waiver of such right or provision.
								</p>

								<h3 className="text-xl font-bold text-slate-800 mb-3 mt-6">
									13.4 Assignment
								</h3>
								<p className="text-slate-700 leading-relaxed mb-4">
									You may not assign or transfer these Terms, by operation of law or
									otherwise, without our prior written consent. Any attempt by you to
									assign or transfer these Terms without such consent will be null and
									void. We may freely assign or transfer these Terms without restriction.
									Subject to the foregoing, these Terms will bind and inure to the
									benefit of the parties and their respective successors and permitted
									assigns.
								</p>

								<h3 className="text-xl font-bold text-slate-800 mb-3 mt-6">
									13.5 Force Majeure
								</h3>
								<p className="text-slate-700 leading-relaxed mb-4">
									paddlX shall not be liable for any failure to perform its obligations
									hereunder where such failure results from any cause beyond our
									reasonable control, including but not limited to mechanical,
									electronic, or communications failure or degradation, natural
									disasters, acts of God, war, terrorism, or government restrictions.
								</p>

								<h3 className="text-xl font-bold text-slate-800 mb-3 mt-6">
									13.6 Relationship of Parties
								</h3>
								<p className="text-slate-700 leading-relaxed mb-4">
									No joint venture, partnership, employment, or agency relationship
									exists between you and paddlX as a result of these Terms or your use of
									the Platform.
								</p>

								<h3 className="text-xl font-bold text-slate-800 mb-3 mt-6">
									13.7 Notices
								</h3>
								<p className="text-slate-700 leading-relaxed mb-4">
									Except as explicitly stated otherwise, any notices to paddlX shall be
									sent to legal@paddlx.com. We may provide notices to you via email (to
									the email address associated with your account), in-app notification,
									or by posting on the Platform.
								</p>

								<h3 className="text-xl font-bold text-slate-800 mb-3 mt-6">
									13.8 Language
								</h3>
								<p className="text-slate-700 leading-relaxed">
									These Terms may be translated into other languages for your
									convenience. In the event of any inconsistency or conflict between the
									English version and any translation, the English version shall prevail.
								</p>
							</div>
						</div>

						{/* Contact Information */}
						<div className="bg-teal-50 border-l-4 border-teal-600 p-8 rounded-r-lg">
							<h2 className="text-2xl font-bold text-dark-slate mb-4">
								14. Contact Information
							</h2>
							<p className="text-slate-700 leading-relaxed mb-4">
								If you have any questions about these Terms of Service, please contact
								us:
							</p>
							<ul className="space-y-2 text-slate-700">
								<li>
									<strong>Email:</strong>{' '}
									<a
										href="mailto:legal@paddlx.com"
										className="text-teal-600 hover:underline"
									>
										legal@paddlx.com
									</a>
								</li>
								<li>
									<strong>Support:</strong>{' '}
									<a
										href="mailto:support@paddlx.com"
										className="text-teal-600 hover:underline"
									>
										support@paddlx.com
									</a>
								</li>
								<li>
									<strong>Address:</strong> [Your Business Address], Mandaluyong, Metro
									Manila, Philippines
								</li>
							</ul>
							<p className="text-slate-700 mt-6 text-sm">
								<strong>Acknowledgment:</strong> By using paddlX, you acknowledge that
								you have read these Terms of Service and agree to be bound by them.
							</p>
						</div>
					</div>
				</section>

				{/* CTA Section */}
				<DynamicCtaSection
					buttonHref="/support"
					buttonText="Contact Legal Support"
					featureList={[
						'Questions about these terms?',
						'Need clarification on policies?',
						'Report terms violations',
					]}
					title="Have Questions About Our Terms?"
					subtitle="Our legal and support team is here to help clarify any questions you may have about our Terms of Service."
					colorScheme="teal"
				/>
			</div>
		</>
	);
}
