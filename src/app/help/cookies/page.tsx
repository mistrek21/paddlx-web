// src/app/help/cookies/page.tsx

import { Metadata } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import {
	Cookie,
	Settings,
	Eye,
	BarChart3,
	Target,
	Shield,
	CheckCircle,
	Info,
	ExternalLink,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import DynamicCtaSection from '../../_components/cta/DynamicCtaSection';

// SEO Metadata
export const metadata: Metadata = {
	title: 'Cookie Policy | paddlX',
	description:
		'Learn about the cookies and tracking technologies used on paddlX. Understand what cookies are, why we use them, and how you can control your cookie preferences.',
	keywords: [
		'paddlX cookie policy',
		'cookies',
		'tracking technologies',
		'cookie consent',
		'privacy',
		'cookie settings',
		'GDPR cookies',
	],
	openGraph: {
		title: 'Cookie Policy | paddlX',
		description:
			'Learn about cookies and tracking technologies used on paddlX and how to manage your preferences.',
		url: 'https://www.paddlx.com/help/cookies',
		type: 'website',
	},
};

// JSON-LD Structured Data
const jsonLd = {
	'@context': 'https://schema.org',
	'@type': 'WebPage',
	'name': 'paddlX Cookie Policy',
	'description':
		'Cookie Policy explaining the use of cookies and tracking technologies on paddlX',
	'url': 'https://www.paddlx.com/help/cookies',
};

export default function CookiePolicyPage() {
	return (
		<>
			<Head>
				<script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
			</Head>
			<div className="bg-white text-slate-800">
				{/* Hero Section */}
				<section className="relative bg-amber-50 py-20 lg:py-32">
					<div className="container mx-auto px-6 text-center">
						<Cookie className="w-16 h-16 mx-auto text-amber-600 mb-6" />
						<h1 className="text-4xl lg:text-6xl font-extrabold text-dark-slate mb-4 leading-tight">
							Cookie Policy
						</h1>
						<p className="text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto mb-2">
							Last Updated: October 21, 2025
						</p>
						<p className="text-base text-slate-500 max-w-2xl mx-auto">
							This Cookie Policy explains how paddlX uses cookies and similar tracking
							technologies when you visit our website and mobile application.
						</p>
					</div>
				</section>

				{/* What Are Cookies */}
				<section className="py-20 bg-white">
					<div className="container mx-auto px-6 max-w-4xl">
						<div className="flex items-start mb-8">
							<Info className="w-8 h-8 text-amber-600 mr-4 flex-shrink-0 mt-1" />
							<div>
								<h2 className="text-3xl font-bold text-dark-slate mb-4">
									What Are Cookies?
								</h2>
								<div className="prose prose-slate max-w-none">
									<p className="text-slate-700 leading-relaxed mb-4">
										Cookies are small text files that are placed on your device (computer,
										smartphone, or tablet) when you visit a website or use an app. Cookies
										typically contain a unique identifier, the name of the website that
										created the cookie, and sometimes other information.
									</p>
									<p className="text-slate-700 leading-relaxed mb-4">
										Cookies help websites remember information about your visit, such as
										your preferred language, login status, or items in your shopping cart.
										They enable websites to provide a better, more personalized user
										experience.
									</p>

									<div className="bg-amber-50 border-l-4 border-amber-600 p-6 rounded-r-lg my-6">
										<h4 className="font-bold text-amber-900 mb-2">
											How Do Cookies Work?
										</h4>
										<p className="text-slate-700 text-sm leading-relaxed mb-3">
											When you visit paddlX, we (or our service providers) may send cookies
											to your device. Your browser stores these cookies and sends them back
											to our servers on subsequent visits. This allows us to recognize your
											device and remember your preferences.
										</p>
										<p className="text-slate-700 text-sm leading-relaxed">
											<strong>Important:</strong> Cookies can only access information that
											you have previously allowed them to store. They cannot access other
											files or information on your device.
										</p>
									</div>

									<h3 className="text-xl font-bold text-slate-800 mb-3 mt-6">
										Similar Technologies
									</h3>
									<p className="text-slate-700 leading-relaxed mb-4">
										In addition to cookies, we may use other similar tracking
										technologies, including:
									</p>
									<ul className="list-disc pl-6 mb-4 space-y-2 text-slate-700">
										<li>
											<strong>Web Beacons (Pixels):</strong> Small graphic images that
											track user activity and email opens
										</li>
										<li>
											<strong>Local Storage:</strong> Technology that stores data locally
											on your browser
										</li>
										<li>
											<strong>SDKs (Software Development Kits):</strong> Code libraries in
											mobile apps that collect usage data
										</li>
										<li>
											<strong>Device Identifiers:</strong> Unique identifiers for mobile
											devices (IDFA, Android ID)
										</li>
									</ul>
									<p className="text-slate-700 text-sm italic">
										For simplicity, we refer to all of these technologies as
										&quot;cookies&quot; in this policy unless otherwise specified.
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Types of Cookies */}
				<section className="py-20 bg-slate-50">
					<div className="container mx-auto px-6">
						<div className="text-center mb-12">
							<h2 className="text-3xl lg:text-4xl font-bold text-dark-slate mb-4">
								Types of Cookies We Use
							</h2>
							<p className="text-slate-600 max-w-2xl mx-auto">
								We use different types of cookies for various purposes. Here&apos;s a
								detailed breakdown of each category.
							</p>
						</div>

						<div className="max-w-5xl mx-auto space-y-6">
							{/* Essential Cookies */}
							<div className="bg-white rounded-2xl shadow-sm p-8 border-l-4 border-green-500">
								<div className="flex items-start mb-4">
									<Shield className="w-10 h-10 text-green-600 mr-4 flex-shrink-0" />
									<div className="flex-1">
										<div className="flex items-center justify-between mb-3">
											<h3 className="text-2xl font-bold text-slate-800">
												Essential Cookies (Required)
											</h3>
											<span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
												Always Active
											</span>
										</div>
										<p className="text-slate-700 mb-4">
											These cookies are strictly necessary for the Platform to function
											properly. They enable core functionality such as security,
											authentication, and basic navigation. The Platform cannot operate
											correctly without these cookies.
										</p>

										<h4 className="font-bold text-slate-800 mb-2">
											What Essential Cookies Do:
										</h4>
										<ul className="list-disc pl-6 mb-4 space-y-1 text-slate-700">
											<li>Keep you logged in to your account</li>
											<li>Remember items in your booking cart</li>
											<li>Enable secure areas of the Platform</li>
											<li>Authenticate your identity</li>
											<li>Prevent fraudulent activity</li>
											<li>Load balance server traffic</li>
											<li>Remember your cookie consent preferences</li>
										</ul>

										<div className="bg-slate-50 p-4 rounded-lg">
											<h4 className="font-bold text-slate-800 mb-2 text-sm">Examples:</h4>
											<ul className="text-sm text-slate-600 space-y-1">
												<li>
													<code className="bg-slate-200 px-2 py-0.5 rounded">
														session_id
													</code>{' '}
													- Maintains your login session
												</li>
												<li>
													<code className="bg-slate-200 px-2 py-0.5 rounded">
														csrf_token
													</code>{' '}
													- Protects against security attacks
												</li>
												<li>
													<code className="bg-slate-200 px-2 py-0.5 rounded">
														cookie_consent
													</code>{' '}
													- Remembers your cookie preferences
												</li>
											</ul>
										</div>

										<p className="text-sm text-slate-600 italic mt-4">
											<strong>Consent Required:</strong> No – These cookies are essential
											for the Platform to work.
										</p>
									</div>
								</div>
							</div>

							{/* Functional Cookies */}
							<div className="bg-white rounded-2xl shadow-sm p-8 border-l-4 border-blue-500">
								<div className="flex items-start mb-4">
									<Settings className="w-10 h-10 text-blue-600 mr-4 flex-shrink-0" />
									<div className="flex-1">
										<div className="flex items-center justify-between mb-3">
											<h3 className="text-2xl font-bold text-slate-800">
												Functional Cookies (Optional)
											</h3>
											<span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
												Consent Required
											</span>
										</div>
										<p className="text-slate-700 mb-4">
											These cookies enable enhanced functionality and personalization. They
											remember your preferences and settings to provide a better, more
											customized experience.
										</p>

										<h4 className="font-bold text-slate-800 mb-2">
											What Functional Cookies Do:
										</h4>
										<ul className="list-disc pl-6 mb-4 space-y-1 text-slate-700">
											<li>Remember your language preference</li>
											<li>Save your location/region settings</li>
											<li>Remember your display preferences (dark mode, font size)</li>
											<li>Store your preferred search filters</li>
											<li>Enable live chat support features</li>
											<li>Remember your &quot;favorite&quot; venues or courts</li>
										</ul>

										<div className="bg-slate-50 p-4 rounded-lg">
											<h4 className="font-bold text-slate-800 mb-2 text-sm">Examples:</h4>
											<ul className="text-sm text-slate-600 space-y-1">
												<li>
													<code className="bg-slate-200 px-2 py-0.5 rounded">language</code>{' '}
													- Stores your language preference
												</li>
												<li>
													<code className="bg-slate-200 px-2 py-0.5 rounded">region</code> -
													Remembers your selected city/region
												</li>
												<li>
													<code className="bg-slate-200 px-2 py-0.5 rounded">theme</code> -
													Saves your dark/light mode preference
												</li>
											</ul>
										</div>

										<p className="text-sm text-slate-600 italic mt-4">
											<strong>Consent Required:</strong> Yes – You can disable these
											cookies, but some features may not work as expected.
										</p>
									</div>
								</div>
							</div>

							{/* Analytics/Performance Cookies */}
							<div className="bg-white rounded-2xl shadow-sm p-8 border-l-4 border-purple-500">
								<div className="flex items-start mb-4">
									<BarChart3 className="w-10 h-10 text-purple-600 mr-4 flex-shrink-0" />
									<div className="flex-1">
										<div className="flex items-center justify-between mb-3">
											<h3 className="text-2xl font-bold text-slate-800">
												Analytics & Performance Cookies (Optional)
											</h3>
											<span className="bg-purple-100 text-purple-800 text-xs font-semibold px-3 py-1 rounded-full">
												Consent Required
											</span>
										</div>
										<p className="text-slate-700 mb-4">
											These cookies help us understand how users interact with the
											Platform. They collect anonymous information about pages visited,
											time spent, and errors encountered, helping us improve performance
											and user experience.
										</p>

										<h4 className="font-bold text-slate-800 mb-2">
											What Analytics Cookies Do:
										</h4>
										<ul className="list-disc pl-6 mb-4 space-y-1 text-slate-700">
											<li>Count visitor numbers and traffic sources</li>
											<li>Measure how long you spend on each page</li>
											<li>Track which features are most popular</li>
											<li>Identify technical issues and errors</li>
											<li>Understand user journey and navigation patterns</li>
											<li>Test new features and improvements</li>
										</ul>

										<div className="bg-slate-50 p-4 rounded-lg mb-4">
											<h4 className="font-bold text-slate-800 mb-2 text-sm">Examples:</h4>
											<ul className="text-sm text-slate-600 space-y-1">
												<li>
													<code className="bg-slate-200 px-2 py-0.5 rounded">_ga</code> -
													Google Analytics visitor tracking (2 years)
												</li>
												<li>
													<code className="bg-slate-200 px-2 py-0.5 rounded">_gid</code> -
													Google Analytics session tracking (24 hours)
												</li>
												<li>
													<code className="bg-slate-200 px-2 py-0.5 rounded">_gat</code> -
													Google Analytics request throttling (1 minute)
												</li>
											</ul>
										</div>

										<div className="bg-blue-50 p-3 rounded-lg">
											<p className="text-sm text-slate-700">
												<strong>Note:</strong> Analytics data is aggregated and anonymized.
												We cannot identify individual users from this data.
											</p>
										</div>

										<p className="text-sm text-slate-600 italic mt-4">
											<strong>Consent Required:</strong> Yes – You can opt out of analytics
											cookies without affecting core functionality.
										</p>
									</div>
								</div>
							</div>

							{/* Marketing/Targeting Cookies */}
							<div className="bg-white rounded-2xl shadow-sm p-8 border-l-4 border-orange-500">
								<div className="flex items-start mb-4">
									<Target className="w-10 h-10 text-orange-600 mr-4 flex-shrink-0" />
									<div className="flex-1">
										<div className="flex items-center justify-between mb-3">
											<h3 className="text-2xl font-bold text-slate-800">
												Marketing & Advertising Cookies (Optional)
											</h3>
											<span className="bg-orange-100 text-orange-800 text-xs font-semibold px-3 py-1 rounded-full">
												Consent Required
											</span>
										</div>
										<p className="text-slate-700 mb-4">
											These cookies track your browsing activity across websites to deliver
											personalized advertisements. They are often placed by third-party
											advertising networks with our permission.
										</p>

										<h4 className="font-bold text-slate-800 mb-2">
											What Marketing Cookies Do:
										</h4>
										<ul className="list-disc pl-6 mb-4 space-y-1 text-slate-700">
											<li>Show you relevant ads on other websites</li>
											<li>Limit how many times you see the same ad</li>
											<li>Measure advertising campaign effectiveness</li>
											<li>Track conversions from ads</li>
											<li>Enable social media sharing features</li>
											<li>Deliver personalized marketing content</li>
										</ul>

										<div className="bg-slate-50 p-4 rounded-lg mb-4">
											<h4 className="font-bold text-slate-800 mb-2 text-sm">
												Third-Party Services:
											</h4>
											<ul className="text-sm text-slate-600 space-y-1">
												<li>Google Ads (targeting and remarketing)</li>
												<li>Facebook Pixel (social media advertising)</li>
												<li>LinkedIn Insight Tag (professional network ads)</li>
												<li>Twitter/X Analytics (social media tracking)</li>
											</ul>
										</div>

										<div className="bg-amber-50 p-3 rounded-lg">
											<p className="text-sm text-slate-700">
												<strong>Privacy Tip:</strong> You can opt out of interest-based
												advertising through the Digital Advertising Alliance (DAA) at{' '}
												<a
													href="http://optout.aboutads.info"
													target="_blank"
													rel="noopener noreferrer"
													className="text-blue-600 hover:underline"
												>
													optout.aboutads.info
												</a>
												.
											</p>
										</div>

										<p className="text-sm text-slate-600 italic mt-4">
											<strong>Consent Required:</strong> Yes – These cookies are only
											activated if you provide explicit consent.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* First-Party vs Third-Party */}
				<section className="py-20 bg-white">
					<div className="container mx-auto px-6 max-w-4xl">
						<h2 className="text-3xl font-bold text-dark-slate mb-8 text-center">
							First-Party vs. Third-Party Cookies
						</h2>
						<p className="text-slate-700 leading-relaxed mb-8 text-center max-w-3xl mx-auto">
							Cookies can also be classified based on who sets them:
						</p>

						<div className="grid md:grid-cols-2 gap-8">
							<div className="bg-blue-50 p-6 rounded-xl border-2 border-blue-200">
								<h3 className="text-xl font-bold text-slate-800 mb-3">
									First-Party Cookies
								</h3>
								<p className="text-slate-700 mb-4 text-sm">
									These cookies are set directly by paddlX (the website you&apos;re
									visiting). They can only be read by our website.
								</p>
								<div className="space-y-2">
									<div className="flex items-start">
										<CheckCircle className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
										<p className="text-sm text-slate-700">Set by paddlx.com domain</p>
									</div>
									<div className="flex items-start">
										<CheckCircle className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
										<p className="text-sm text-slate-700">Used for core functionality</p>
									</div>
									<div className="flex items-start">
										<CheckCircle className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
										<p className="text-sm text-slate-700">
											Cannot track you across other sites
										</p>
									</div>
									<div className="flex items-start">
										<CheckCircle className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
										<p className="text-sm text-slate-700">Supported by all browsers</p>
									</div>
								</div>
							</div>

							<div className="bg-orange-50 p-6 rounded-xl border-2 border-orange-200">
								<h3 className="text-xl font-bold text-slate-800 mb-3">
									Third-Party Cookies
								</h3>
								<p className="text-slate-700 mb-4 text-sm">
									These cookies are set by external services we use (like Google
									Analytics or Facebook). They can track you across multiple websites.
								</p>
								<div className="space-y-2">
									<div className="flex items-start">
										<Eye className="w-5 h-5 text-orange-600 mr-2 flex-shrink-0 mt-0.5" />
										<p className="text-sm text-slate-700">
											Set by external domains (e.g., google.com)
										</p>
									</div>
									<div className="flex items-start">
										<Eye className="w-5 h-5 text-orange-600 mr-2 flex-shrink-0 mt-0.5" />
										<p className="text-sm text-slate-700">
											Used for analytics and advertising
										</p>
									</div>
									<div className="flex items-start">
										<Eye className="w-5 h-5 text-orange-600 mr-2 flex-shrink-0 mt-0.5" />
										<p className="text-sm text-slate-700">
											Can track across multiple websites
										</p>
									</div>
									<div className="flex items-start">
										<Eye className="w-5 h-5 text-orange-600 mr-2 flex-shrink-0 mt-0.5" />
										<p className="text-sm text-slate-700">
											Increasingly blocked by modern browsers
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Why We Use Cookies */}
				<section className="py-20 bg-slate-50">
					<div className="container mx-auto px-6 max-w-4xl">
						<h2 className="text-3xl font-bold text-dark-slate mb-8">
							Why We Use Cookies
						</h2>
						<div className="prose prose-slate max-w-none">
							<p className="text-slate-700 leading-relaxed mb-6">
								We use cookies for several important reasons:
							</p>

							<div className="space-y-4">
								<div className="bg-white p-5 rounded-lg shadow-sm">
									<h3 className="font-bold text-slate-800 mb-2 flex items-center">
										<span className="bg-teal-100 text-teal-700 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm font-bold">
											1
										</span>
										To Provide Core Functionality
									</h3>
									<p className="text-slate-700 text-sm ml-11">
										Essential cookies enable you to use the Platform, log in to your
										account, book courts, and complete transactions securely.
									</p>
								</div>

								<div className="bg-white p-5 rounded-lg shadow-sm">
									<h3 className="font-bold text-slate-800 mb-2 flex items-center">
										<span className="bg-teal-100 text-teal-700 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm font-bold">
											2
										</span>
										To Personalize Your Experience
									</h3>
									<p className="text-slate-700 text-sm ml-11">
										Functional cookies remember your preferences, language settings, and
										location to provide a customized experience.
									</p>
								</div>

								<div className="bg-white p-5 rounded-lg shadow-sm">
									<h3 className="font-bold text-slate-800 mb-2 flex items-center">
										<span className="bg-teal-100 text-teal-700 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm font-bold">
											3
										</span>
										To Improve Our Services
									</h3>
									<p className="text-slate-700 text-sm ml-11">
										Analytics cookies help us understand how users interact with the
										Platform, identify issues, and make improvements.
									</p>
								</div>

								<div className="bg-white p-5 rounded-lg shadow-sm">
									<h3 className="font-bold text-slate-800 mb-2 flex items-center">
										<span className="bg-teal-100 text-teal-700 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm font-bold">
											4
										</span>
										To Keep the Platform Secure
									</h3>
									<p className="text-slate-700 text-sm ml-11">
										Security cookies help protect against fraud, unauthorized access, and
										other malicious activities.
									</p>
								</div>

								<div className="bg-white p-5 rounded-lg shadow-sm">
									<h3 className="font-bold text-slate-800 mb-2 flex items-center">
										<span className="bg-teal-100 text-teal-700 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm font-bold">
											5
										</span>
										To Deliver Relevant Advertising
									</h3>
									<p className="text-slate-700 text-sm ml-11">
										Marketing cookies (with your consent) help us show you ads that are
										relevant to your interests and measure ad effectiveness.
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Managing Cookies */}
				<section className="py-20 bg-white">
					<div className="container mx-auto px-6 max-w-4xl">
						<div className="flex items-start mb-8">
							<Settings className="w-8 h-8 text-teal-600 mr-4 flex-shrink-0 mt-1" />
							<div>
								<h2 className="text-3xl font-bold text-dark-slate mb-4">
									How to Control and Delete Cookies
								</h2>
								<div className="prose prose-slate max-w-none">
									<p className="text-slate-700 leading-relaxed mb-6">
										You have several options to control and manage cookies:
									</p>

									<h3 className="text-xl font-bold text-slate-800 mb-4">
										1. Through paddlX Cookie Settings
									</h3>
									<p className="text-slate-700 mb-4">
										The easiest way to manage your cookie preferences is through our
										Cookie Settings panel:
									</p>
									<div className="bg-teal-50 border-l-4 border-teal-600 p-6 rounded-r-lg mb-6">
										<ul className="list-disc pl-6 space-y-2 text-slate-700">
											<li>
												Click the &quot;Cookie Settings&quot; link in the footer of any page
											</li>
											<li>Go to Account Settings &gt; Privacy &gt; Cookie Preferences</li>
											<li>
												Toggle different cookie categories on or off (except essential
												cookies)
											</li>
											<li>Save your preferences</li>
										</ul>
										<div className="mt-4">
											<Button
												asChild
												size="sm"
												className="bg-teal-600 hover:bg-teal-700 text-white"
											>
												<Link href="/settings/cookies">Manage Cookie Preferences</Link>
											</Button>
										</div>
									</div>

									<h3 className="text-xl font-bold text-slate-800 mb-4 mt-8">
										2. Through Your Browser Settings
									</h3>
									<p className="text-slate-700 mb-4">
										Most browsers allow you to control cookies through their settings:
									</p>

									<div className="space-y-4 mb-6">
										<div className="bg-slate-50 p-4 rounded-lg">
											<h4 className="font-bold text-slate-800 mb-2">Google Chrome</h4>
											<p className="text-sm text-slate-700 mb-2">
												Settings &gt; Privacy and security &gt; Cookies and other site data
											</p>
											<a
												href="https://support.google.com/chrome/answer/95647"
												target="_blank"
												rel="noopener noreferrer"
												className="text-teal-600 hover:underline text-sm inline-flex items-center"
											>
												Learn more
												<ExternalLink className="w-3 h-3 ml-1" />
											</a>
										</div>

										<div className="bg-slate-50 p-4 rounded-lg">
											<h4 className="font-bold text-slate-800 mb-2">Mozilla Firefox</h4>
											<p className="text-sm text-slate-700 mb-2">
												Settings &gt; Privacy & Security &gt; Cookies and Site Data
											</p>
											<a
												href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer"
												target="_blank"
												rel="noopener noreferrer"
												className="text-teal-600 hover:underline text-sm inline-flex items-center"
											>
												Learn more
												<ExternalLink className="w-3 h-3 ml-1" />
											</a>
										</div>

										<div className="bg-slate-50 p-4 rounded-lg">
											<h4 className="font-bold text-slate-800 mb-2">Safari</h4>
											<p className="text-sm text-slate-700 mb-2">
												Preferences &gt; Privacy &gt; Manage Website Data
											</p>
											<a
												href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac"
												target="_blank"
												rel="noopener noreferrer"
												className="text-teal-600 hover:underline text-sm inline-flex items-center"
											>
												Learn more
												<ExternalLink className="w-3 h-3 ml-1" />
											</a>
										</div>

										<div className="bg-slate-50 p-4 rounded-lg">
											<h4 className="font-bold text-slate-800 mb-2">Microsoft Edge</h4>
											<p className="text-sm text-slate-700 mb-2">
												Settings &gt; Cookies and site permissions &gt; Manage and delete
												cookies
											</p>
											<a
												href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
												target="_blank"
												rel="noopener noreferrer"
												className="text-teal-600 hover:underline text-sm inline-flex items-center"
											>
												Learn more
												<ExternalLink className="w-3 h-3 ml-1" />
											</a>
										</div>
									</div>

									<h3 className="text-xl font-bold text-slate-800 mb-4 mt-8">
										3. Mobile Device Settings
									</h3>
									<p className="text-slate-700 mb-4">
										On mobile devices, you can control tracking through your device
										settings:
									</p>
									<ul className="list-disc pl-6 mb-6 space-y-2 text-slate-700">
										<li>
											<strong>iOS:</strong> Settings &gt; Privacy & Security &gt; Tracking
											(toggle off &quot;Allow Apps to Request to Track&quot;)
										</li>
										<li>
											<strong>Android:</strong> Settings &gt; Google &gt; Ads &gt; Opt out
											of Ads Personalization
										</li>
									</ul>

									<h3 className="text-xl font-bold text-slate-800 mb-4 mt-8">
										4. Opt-Out Tools
									</h3>
									<p className="text-slate-700 mb-4">
										For advertising cookies, you can use industry opt-out tools:
									</p>
									<ul className="list-disc pl-6 mb-6 space-y-2 text-slate-700">
										<li>
											<strong>Digital Advertising Alliance:</strong>{' '}
											<a
												href="http://optout.aboutads.info"
												target="_blank"
												rel="noopener noreferrer"
												className="text-teal-600 hover:underline"
											>
												optout.aboutads.info
											</a>
										</li>
										<li>
											<strong>Network Advertising Initiative:</strong>{' '}
											<a
												href="http://optout.networkadvertising.org"
												target="_blank"
												rel="noopener noreferrer"
												className="text-teal-600 hover:underline"
											>
												optout.networkadvertising.org
											</a>
										</li>
										<li>
											<strong>Google Analytics Opt-out:</strong>{' '}
											<a
												href="https://tools.google.com/dlpage/gaoptout"
												target="_blank"
												rel="noopener noreferrer"
												className="text-teal-600 hover:underline"
											>
												Google Analytics Opt-out Browser Add-on
											</a>
										</li>
									</ul>

									<div className="bg-amber-50 border-l-4 border-amber-600 p-6 rounded-r-lg mt-8">
										<h4 className="font-bold text-amber-900 mb-2">
											Important: Impact of Disabling Cookies
										</h4>
										<p className="text-slate-700 text-sm leading-relaxed">
											If you disable or delete cookies, some features of the Platform may
											not function properly. For example:
										</p>
										<ul className="list-disc pl-6 mt-2 space-y-1 text-sm text-slate-700">
											<li>You may be logged out frequently</li>
											<li>Your preferences may not be saved</li>
											<li>Some pages may not load correctly</li>
											<li>You may see less relevant content and advertisements</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Cookie Lifespan */}
				<section className="py-20 bg-slate-50">
					<div className="container mx-auto px-6 max-w-4xl">
						<h2 className="text-3xl font-bold text-dark-slate mb-8">
							How Long Do Cookies Last?
						</h2>
						<div className="prose prose-slate max-w-none">
							<p className="text-slate-700 leading-relaxed mb-6">
								Cookies have different lifespans depending on their type and purpose:
							</p>

							<div className="grid md:grid-cols-2 gap-6">
								<div className="bg-white p-6 rounded-lg shadow-sm">
									<h3 className="text-lg font-bold text-slate-800 mb-3">
										Session Cookies
									</h3>
									<p className="text-slate-700 text-sm mb-3">
										These cookies are temporary and are deleted when you close your
										browser or app.
									</p>
									<p className="text-xs text-slate-600">
										<strong>Duration:</strong> Until browser/app is closed
									</p>
								</div>

								<div className="bg-white p-6 rounded-lg shadow-sm">
									<h3 className="text-lg font-bold text-slate-800 mb-3">
										Persistent Cookies
									</h3>
									<p className="text-slate-700 text-sm mb-3">
										These cookies remain on your device for a set period or until you
										manually delete them.
									</p>
									<p className="text-xs text-slate-600">
										<strong>Duration:</strong> From 30 days to 2 years (varies by cookie)
									</p>
								</div>
							</div>

							<div className="bg-blue-50 p-6 rounded-lg mt-6">
								<h4 className="font-bold text-slate-800 mb-3">
									Typical Cookie Lifespans on paddlX:
								</h4>
								<ul className="space-y-2 text-sm text-slate-700">
									<li>
										<strong>Essential cookies:</strong> Session or up to 1 year
									</li>
									<li>
										<strong>Functional cookies:</strong> 30 days to 1 year
									</li>
									<li>
										<strong>Analytics cookies:</strong> 1 day to 2 years
									</li>
									<li>
										<strong>Marketing cookies:</strong> 30 days to 1 year
									</li>
								</ul>
							</div>
						</div>
					</div>
				</section>

				{/* Updates to Policy */}
				<section className="py-20 bg-white">
					<div className="container mx-auto px-6 max-w-4xl">
						<h2 className="text-3xl font-bold text-dark-slate mb-6">
							Changes to This Cookie Policy
						</h2>
						<div className="prose prose-slate max-w-none">
							<p className="text-slate-700 leading-relaxed mb-4">
								We may update this Cookie Policy from time to time to reflect changes in
								technology, legislation, our business operations, or for other
								operational, legal, or regulatory reasons.
							</p>
							<p className="text-slate-700 leading-relaxed mb-4">
								When we make significant changes, we will notify you by:
							</p>
							<ul className="list-disc pl-6 mb-6 space-y-2 text-slate-700">
								<li>
									Updating the &quot;Last Updated&quot; date at the top of this policy
								</li>
								<li>Displaying a notice on the Platform</li>
								<li>
									Sending you an email notification (for material changes affecting your
									rights)
								</li>
							</ul>
							<p className="text-slate-700 leading-relaxed">
								We encourage you to review this Cookie Policy periodically to stay
								informed about our use of cookies.
							</p>
						</div>
					</div>
				</section>

				{/* Contact & More Info */}
				<section className="py-20 bg-slate-50">
					<div className="container mx-auto px-6 max-w-4xl">
						<div className="bg-teal-50 border-l-4 border-teal-600 p-8 rounded-r-lg">
							<h2 className="text-2xl font-bold text-dark-slate mb-4">
								Questions About Cookies?
							</h2>
							<p className="text-slate-700 leading-relaxed mb-6">
								If you have any questions about our use of cookies or this Cookie
								Policy, please contact us:
							</p>

							<div className="space-y-3 mb-6">
								<p className="text-slate-700">
									<strong>Email:</strong>{' '}
									<a
										href="mailto:privacy@paddlx.com"
										className="text-teal-600 hover:underline"
									>
										privacy@paddlx.com
									</a>
								</p>
								<p className="text-slate-700">
									<strong>Data Protection Officer:</strong>{' '}
									<a
										href="mailto:dpo@paddlx.com"
										className="text-teal-600 hover:underline"
									>
										dpo@paddlx.com
									</a>
								</p>
								<p className="text-slate-700">
									<strong>Address:</strong> [Your Business Address], Mandaluyong, Metro
									Manila, Philippines
								</p>
							</div>

							<div className="border-t border-teal-200 pt-6">
								<h3 className="font-bold text-slate-800 mb-3">Related Policies:</h3>
								<div className="flex flex-wrap gap-3">
									<Link
										href="/help/privacy"
										className="text-teal-600 hover:underline text-sm font-semibold"
									>
										Privacy Policy →
									</Link>
									<Link
										href="/help/terms"
										className="text-teal-600 hover:underline text-sm font-semibold"
									>
										Terms of Service →
									</Link>
									<Link
										href="/settings/cookies"
										className="text-teal-600 hover:underline text-sm font-semibold"
									>
										Cookie Settings →
									</Link>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* CTA Section */}
				<DynamicCtaSection
					buttonHref="/settings/cookies"
					buttonText="Manage Cookie Preferences"
					featureList={[
						'Control what cookies are used',
						'Change settings anytime',
						'Protect your privacy',
					]}
					title="Take Control of Your Cookies"
					subtitle="Customize your cookie preferences to control how we collect and use your data."
					colorScheme="teal"
				/>
			</div>
		</>
	);
}
