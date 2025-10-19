'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Youtube, Apple, Download } from 'lucide-react';

export function Footer() {
	return (
		<footer
			className="bg-gradient-to-b from-slate-900 to-slate-950 text-white"
			role="contentinfo"
			aria-label="Site footer"
		>
			<div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
				{/* Top Section - Logo and App Downloads */}
				<div className="mb-16 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
					{/* Logo Section */}
					<div className="flex items-center gap-3">
						<Image
							src="/paddlx-logo-no-text.png"
							alt="paddlX - Book Pickleball Courts and Find Players"
							width={40}
							height={40}
							className="h-12 w-12 rounded-full object-contain bg-white shadow-lg"
							priority
						/>
						<span
							className="font-bold text-2xl sm:text-3xl text-white select-none leading-none px-3 py-2 rounded-xl bg-gradient-to-r from-primary to-primary-dark shadow-lg"
							style={{
								fontFamily: "'Space Grotesk', 'Inter', 'Segoe UI', Arial, sans-serif",
							}}
						>
							paddl
							<span className="text-primary-light ml-1 font-extrabold text-3xl sm:text-4xl inline-block -rotate-2 scale-110 align-middle">
								X
							</span>
							<span className="text-xs font-semibold align-super ml-1 tracking-normal text-primary-light">
								®
							</span>
						</span>
					</div>

					{/* App Download Section */}
					<div className="space-y-4">
						<p className="text-sm font-semibold text-primary-light uppercase tracking-widest">
							Download the app
						</p>
						<div className="flex flex-col sm:flex-row gap-4">
							{/* App Store Button */}
							<Link
								href="https://apps.apple.com/app/paddlx"
								target="_blank"
								rel="noopener noreferrer"
								className="group flex items-center gap-3 px-6 py-3 bg-white text-slate-900 rounded-xl font-semibold transition-all duration-300 hover:shadow-xl hover:scale-105 active:scale-95"
								aria-label="Download paddlX on the Apple App Store"
							>
								<Apple
									className="h-6 w-6 group-hover:scale-110 transition-transform"
									aria-hidden="true"
								/>
								<div className="flex flex-col">
									<span className="text-xs text-slate-600">Download on</span>
									<span className="text-sm font-bold">App Store</span>
								</div>
							</Link>

							{/* Google Play Button */}
							<Link
								href="https://play.google.com/store/apps/details?id=com.paddlx"
								target="_blank"
								rel="noopener noreferrer"
								className="group flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-primary to-primary-dark text-white rounded-xl font-semibold transition-all duration-300 hover:shadow-xl hover:scale-105 active:scale-95"
								aria-label="Get paddlX on Google Play Store"
							>
								<Download
									className="h-6 w-6 group-hover:scale-110 transition-transform"
									aria-hidden="true"
								/>
								<div className="flex flex-col">
									<span className="text-xs text-primary-light">Get it on</span>
									<span className="text-sm font-bold">Google Play</span>
								</div>
							</Link>
						</div>
					</div>
				</div>

				{/* Divider */}
				<div
					className="mb-12 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
					role="separator"
				/>

				{/* Links Section */}
				<nav
					className="mb-12 grid grid-cols-2 gap-8 md:grid-cols-4"
					aria-label="Footer navigation"
				>
					{/* paddlx Column */}
					<div>
						<h3 className="mb-4 text-lg font-bold text-white">paddlX</h3>
						<ul className="space-y-3">
							<li>
								<Link
									href="/court"
									className="text-slate-300 hover:text-primary-light transition-colors duration-200"
									title="Add your pickleball or paddle court to paddlX"
								>
									Add a Court
								</Link>
							</li>
							<li>
								<Link
									href="/business"
									className="text-slate-300 hover:text-primary-light transition-colors duration-200"
									title="Business solutions for court owners and clubs"
								>
									For Business
								</Link>
							</li>
							<li>
								<Link
									href="/help"
									className="text-slate-300 hover:text-primary-light transition-colors duration-200"
									title="Get help and support for paddlX"
								>
									Get Help
								</Link>
							</li>
							<li>
								<Link
									href="/coaching"
									className="text-slate-300 hover:text-primary-light transition-colors duration-200"
									title="Find pickleball coaches and lessons"
								>
									Coaching
								</Link>
							</li>
						</ul>
					</div>

					{/* Learn Column */}
					<div>
						<h3 className="mb-4 text-lg font-bold text-white">Learn</h3>
						<ul className="space-y-3">
							<li>
								<Link
									href="/how-to-play"
									className="text-slate-300 hover:text-primary-light transition-colors duration-200"
									title="Learn how to play pickleball - Beginner's guide"
								>
									How to Play
								</Link>
							</li>
							<li>
								<Link
									href="/virtual-clinic"
									className="text-slate-300 hover:text-primary-light transition-colors duration-200"
									title="Online pickleball training and video clinic"
								>
									Virtual Clinic
								</Link>
							</li>
							<li>
								<Link
									href="/videos"
									className="text-slate-300 hover:text-primary-light transition-colors duration-200"
									title="Pickleball instructional videos and tips"
								>
									Video Library
								</Link>
							</li>
							<li>
								<Link
									href="/guides"
									className="text-slate-300 hover:text-primary-light transition-colors duration-200"
									title="Pickleball guides and tutorials"
								>
									All Guides
								</Link>
							</li>
						</ul>
					</div>

					{/* Gear & Reviews Column */}
					<div>
						<h3 className="mb-4 text-lg font-bold text-white">Gear & Reviews</h3>
						<ul className="space-y-3">
							<li>
								<Link
									href="/pickleball-gear"
									className="text-slate-300 hover:text-primary-light transition-colors duration-200"
									title="Shop all pickleball gear and equipment"
								>
									All Gear
								</Link>
							</li>
							<li>
								<Link
									href="/pickleball-gear/paddles"
									className="text-slate-300 hover:text-primary-light transition-colors duration-200"
									title="Best pickleball paddle reviews and comparisons"
								>
									Pickleball Paddles
								</Link>
							</li>
							<li>
								<Link
									href="/pickleball-gear/shoes"
									className="text-slate-300 hover:text-primary-light transition-colors duration-200"
									title="Best pickleball shoes for court performance"
								>
									Pickleball Shoes
								</Link>
							</li>
							<li>
								<Link
									href="/pickleball-gear/balls"
									className="text-slate-300 hover:text-primary-light transition-colors duration-200"
									title="Best indoor and outdoor pickleball balls"
								>
									Pickleball Balls
								</Link>
							</li>
						</ul>
					</div>

					{/* Organize Column */}
					<div>
						<h3 className="mb-4 text-lg font-bold text-white">Play & Organize</h3>
						<ul className="space-y-3">
							<li>
								<Link
									href="/schedule"
									className="text-slate-300 hover:text-primary-light transition-colors duration-200"
									title="Schedule a pickleball game or session"
								>
									Schedule Play
								</Link>
							</li>
							<li>
								<Link
									href="/create-group"
									className="text-slate-300 hover:text-primary-light transition-colors duration-200"
									title="Create and manage pickleball groups"
								>
									Create a Group
								</Link>
							</li>
							<li>
								<Link
									href="/find-players"
									className="text-slate-300 hover:text-primary-light transition-colors duration-200"
									title="Find pickleball players near you"
								>
									Find Players
								</Link>
							</li>
							<li>
								<Link
									href="/round-robin"
									className="text-slate-300 hover:text-primary-light transition-colors duration-200"
									title="Organize a round robin pickleball tournament"
								>
									Round Robin
								</Link>
							</li>
						</ul>
					</div>
				</nav>

				{/* Social Media Icons */}
				<div
					className="mb-12 flex justify-center gap-4"
					role="navigation"
					aria-label="Social media links"
				>
					<Link
						href="https://facebook.com/paddlx"
						target="_blank"
						rel="noopener noreferrer"
						className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 text-primary-light transition-all duration-300 hover:bg-primary hover:text-white hover:scale-110"
						aria-label="Follow paddlX on Facebook"
					>
						<Facebook className="h-5 w-5" aria-hidden="true" />
					</Link>
					<Link
						href="https://instagram.com/paddlx"
						target="_blank"
						rel="noopener noreferrer"
						className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 text-primary-light transition-all duration-300 hover:bg-primary hover:text-white hover:scale-110"
						aria-label="Follow paddlX on Instagram"
					>
						<Instagram className="h-5 w-5" aria-hidden="true" />
					</Link>
					<Link
						href="https://tiktok.com/@paddlx"
						target="_blank"
						rel="noopener noreferrer"
						className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 text-primary-light transition-all duration-300 hover:bg-primary hover:text-white hover:scale-110"
						aria-label="Follow paddlX on TikTok"
					>
						<svg
							viewBox="0 0 24 24"
							fill="currentColor"
							className="h-5 w-5"
							aria-hidden="true"
						>
							<path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
						</svg>
					</Link>
					<Link
						href="https://x.com/paddlx"
						target="_blank"
						rel="noopener noreferrer"
						className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 text-primary-light transition-all duration-300 hover:bg-primary hover:text-white hover:scale-110"
						aria-label="Follow paddlX on X (formerly Twitter)"
					>
						<svg
							viewBox="0 0 24 24"
							fill="currentColor"
							className="h-5 w-5"
							aria-hidden="true"
						>
							<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
						</svg>
					</Link>
					<Link
						href="https://youtube.com/@paddlx"
						target="_blank"
						rel="noopener noreferrer"
						className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 text-primary-light transition-all duration-300 hover:bg-primary hover:text-white hover:scale-110"
						aria-label="Subscribe to paddlX on YouTube"
					>
						<Youtube className="h-5 w-5" aria-hidden="true" />
					</Link>
				</div>

				{/* Legal Links */}
				<nav
					className="mb-4 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm"
					aria-label="Legal and policy links"
				>
					<Link
						href="/help/accessibility"
						className="text-slate-300 hover:text-primary-light transition-colors duration-200"
						title="paddlX accessibility statement"
					>
						Accessibility
					</Link>
					<Link
						href="/help/terms"
						className="text-slate-300 hover:text-primary-light transition-colors duration-200"
						title="Terms of service for using paddlX"
					>
						Terms of Use
					</Link>
					<Link
						href="/help/privacy"
						className="text-slate-300 hover:text-primary-light transition-colors duration-200"
						title="paddlX privacy policy and data protection"
					>
						Privacy Policy
					</Link>
					<Link
						href="/help/cookies"
						className="text-slate-300 hover:text-primary-light transition-colors duration-200"
						title="Cookie policy and preferences"
					>
						Cookie Policy
					</Link>
					<Link
						href="/payments"
						className="text-slate-300 hover:text-primary-light transition-colors duration-200"
						title="Payment terms and billing information"
					>
						Payment Terms
					</Link>
					<Link
						href="/help/refund-policy"
						className="text-slate-300 hover:text-primary-light transition-colors duration-200"
						title="Refund and cancellation policy"
					>
						Refund Policy
					</Link>
					<Link
						href="/help/community-guidelines"
						className="text-slate-300 hover:text-primary-light transition-colors duration-200"
						title="Community guidelines and code of conduct"
					>
						Community Guidelines
					</Link>
				</nav>

				<div className="mb-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
					<Link
						href="/help/consent-preferences"
						className="text-slate-300 hover:text-primary-light transition-colors duration-200"
						title="Manage your consent and privacy preferences"
					>
						Consent Preferences
					</Link>
					<Link
						href="/help/do-not-sell"
						className="text-slate-300 hover:text-primary-light transition-colors duration-200"
						title="California privacy rights - Do not sell my personal information"
					>
						Do Not Sell or Share My Personal Information
					</Link>
				</div>

				{/* Copyright */}
				<div className="text-center text-sm text-slate-400">
					<p>
						<span itemProp="name">paddlX</span>® © {new Date().getFullYear()} Dink
						Technologies, Inc. All rights reserved.
					</p>
				</div>
			</div>

			{/* Structured Data for SEO */}
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						'@context': 'https://schema.org',
						'@type': 'Organization',
						'name': 'paddlX',
						'alternateName': 'Dink Technologies Inc',
						'url': 'https://www.paddlx.com',
						'logo': 'https://www.paddlx.com/paddlx-logo.png',
						'description':
							'Find and book pickleball courts, organize games, and connect with players. The ultimate platform for pickleball enthusiasts.',
						'sameAs': [
							'https://facebook.com/paddlx',
							'https://instagram.com/paddlx',
							'https://twitter.com/paddlx',
							'https://youtube.com/@paddlx',
							'https://tiktok.com/@paddlx',
						],
						'contactPoint': {
							'@type': 'ContactPoint',
							'contactType': 'Customer Support',
							'email': 'support@paddlx.com',
						},
					}),
				}}
			/>
		</footer>
	);
}
