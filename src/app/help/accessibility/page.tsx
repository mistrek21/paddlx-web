// src/app/help/accessibility/page.tsx

import { Metadata } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import {
	Accessibility,
	Eye,
	Keyboard,
	Volume2,
	HelpCircle,
	CheckCircle,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import FAQSection, { FAQ } from '../../_components/faq/FaqSection';
import DynamicCtaSection from '../../_components/cta/DynamicCtaSection';

const accessibilityFaqs: FAQ[] = [
	{
		id: 1,
		question: 'Is paddlX accessible to users with disabilities?',
		answer:
			'Yes, paddlX is designed with accessibility in mind, including support for screen readers, high-contrast modes, keyboard navigation, and ARIA labels throughout the app.',
		category: 'Accessibility Help',
	},
	{
		id: 2,
		question: 'How do I enable dark mode or high contrast?',
		answer:
			'Navigate to your account settings and choose either Dark Mode or High Contrast Mode under the “Accessibility” tab. This helps visually-impaired users browse more comfortably.',
		category: 'Accessibility Help',
	},
	{
		id: 3,
		question: 'Can I navigate paddlX without a mouse?',
		answer:
			'Absolutely. All interactive elements are reachable and usable via keyboard navigation (Tab, Shift+Tab, Enter, etc.). Skip links are provided for easier access to main content.',
		category: 'Accessibility Help',
	},
	{
		id: 4,
		question: 'Are images and icons described for screen readers?',
		answer:
			'Yes, all major images and icons use meaningful alt text or aria-labels so screen readers provide useful descriptions.',
		category: 'Accessibility Help',
	},
	{
		id: 5,
		question: 'How do I report an accessibility issue?',
		answer:
			'If you find any part of paddlX difficult to use, please use our Accessibility Support form or contact our support team. We value your feedback.',
		category: 'Accessibility Help',
	},
];

export const metadata: Metadata = {
	title: 'Accessibility Help & Support | paddlX',
	description:
		'Get help with accessibility features on paddlX. Find answers to common questions about screen readers, keyboard navigation, high-contrast modes, and more.',
	keywords: [
		'paddlX accessibility help',
		'screen reader support',
		'keyboard navigation',
		'high contrast mode',
		'accessible booking',
		'accessible app support',
		'a11y',
	],
	openGraph: {
		title: 'Accessibility Help & Support | paddlX',
		description:
			'Find answers to accessibility questions, learn about features, and get help using paddlX if you have a disability.',
		url: 'https://www.paddlx.com/help/accessibility',
		type: 'website',
	},
};

const jsonLd = {
	'@context': 'https://schema.org',
	'@type': 'FAQPage',
	'mainEntity': accessibilityFaqs.slice(0, 10).map((faq) => ({
		'@type': 'Question',
		'name': faq.question,
		'acceptedAnswer': {
			'@type': 'Answer',
			'text': faq.answer,
		},
	})),
};

export default function AccessibilityHelpPage() {
	return (
		<>
			<Head>
				<script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
			</Head>
			<div className="bg-white text-slate-800">
				{/* Hero Section */}
				<section className="relative bg-blue-50 py-20 lg:py-32">
					<div className="container mx-auto px-6 text-center">
						<Accessibility className="w-16 h-16 mx-auto text-blue-700 mb-6" />
						<h1 className="text-4xl lg:text-6xl font-extrabold text-dark-slate mb-4 leading-tight">
							Accessibility Help & Support
						</h1>
						<p className="text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto mb-8">
							Find answers to accessibility questions, learn how to use paddlX with
							assistive technologies, and get support to ensure an inclusive
							experience.
						</p>
						<Button
							asChild
							size="lg"
							className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg shadow-blue-200 transition-transform hover:scale-105"
						>
							<Link href="/support">Contact Accessibility Support</Link>
						</Button>
					</div>
				</section>

				{/* Common Accessibility Features */}
				<section className="py-20">
					<div className="container mx-auto px-6">
						<div className="text-center mb-16">
							<h2 className="text-3xl lg:text-4xl font-bold text-dark-slate">
								Accessible Features Overview
							</h2>
							<p className="text-slate-500 mt-4 max-w-2xl mx-auto">
								paddlX is committed to digital accessibility for all users.
							</p>
						</div>
						<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
							<div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
								<Eye className="w-10 h-10 text-blue-500 mb-4" />
								<h3 className="text-lg font-bold mb-2">Screen Reader Friendly</h3>
								<p className="text-slate-600 text-sm mb-4">
									All major navigation provided with ARIA labels and alt text.
								</p>
								<Link
									href="#faq"
									className="text-blue-700 text-sm font-semibold hover:underline"
								>
									Learn more →
								</Link>
							</div>
							<div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
								<Keyboard className="w-10 h-10 text-purple-600 mb-4" />
								<h3 className="text-lg font-bold mb-2">Full Keyboard Navigation</h3>
								<p className="text-slate-600 text-sm mb-4">
									Easily move between elements using Tab, Shift+Tab, and Enter.
								</p>
								<Link
									href="#faq"
									className="text-blue-700 text-sm font-semibold hover:underline"
								>
									Learn more →
								</Link>
							</div>
							<div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
								<Volume2 className="w-10 h-10 text-green-600 mb-4" />
								<h3 className="text-lg font-bold mb-2">Audio & Voice</h3>
								<p className="text-slate-600 text-sm mb-4">
									Designed to work with speech-to-text and text-to-speech tools.
								</p>
								<Link
									href="#faq"
									className="text-blue-700 text-sm font-semibold hover:underline"
								>
									Learn more →
								</Link>
							</div>
							<div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
								<HelpCircle className="w-10 h-10 text-pink-500 mb-4" />
								<h3 className="text-lg font-bold mb-2">Accessibility Support</h3>
								<p className="text-slate-600 text-sm mb-4">
									Our dedicated team responds to feedback and improves accessibility.
								</p>
								<Link
									href="#faq"
									className="text-blue-700 text-sm font-semibold hover:underline"
								>
									Learn more →
								</Link>
							</div>
						</div>
					</div>
				</section>

				{/* Security/Standards Section */}
				<section className="bg-slate-50 py-20">
					<div className="container mx-auto px-6">
						<div className="grid lg:grid-cols-2 gap-16 items-center">
							<div>
								<CheckCircle className="w-12 h-12 text-blue-700 mb-6" />
								<h2 className="text-3xl lg:text-4xl font-bold text-dark-slate mb-6">
									Committed to Accessibility Standards
								</h2>
								<p className="text-slate-600 mb-6">
									paddlX adheres to WCAG 2.1 guidelines and tests regularly for
									compliance with accessibility standards.
								</p>
								<ul className="space-y-4">
									<li className="flex items-start">
										<CheckCircle className="text-blue-700 w-6 h-6 mr-3 flex-shrink-0 mt-0.5" />
										<div>
											<h4 className="font-bold">Screen Reader Tested</h4>
											<p className="text-slate-600 text-sm">
												Optimized for popular screen readers (NVDA, JAWS, VoiceOver).
											</p>
										</div>
									</li>
									<li className="flex items-start">
										<CheckCircle className="text-blue-700 w-6 h-6 mr-3 flex-shrink-0 mt-0.5" />
										<div>
											<h4 className="font-bold">Keyboard Only Workflows</h4>
											<p className="text-slate-600 text-sm">
												No mouse required for full site navigation.
											</p>
										</div>
									</li>
									<li className="flex items-start">
										<CheckCircle className="text-blue-700 w-6 h-6 mr-3 flex-shrink-0 mt-0.5" />
										<div>
											<h4 className="font-bold">Color Contrast Compliance</h4>
											<p className="text-slate-600 text-sm">
												Text and UI have at least 4.5:1 color contrast.
											</p>
										</div>
									</li>
									<li className="flex items-start">
										<CheckCircle className="text-blue-700 w-6 h-6 mr-3 flex-shrink-0 mt-0.5" />
										<div>
											<h4 className="font-bold">Continuous Improvement</h4>
											<p className="text-slate-600 text-sm">
												Accessibility is never “done”—help us make it better!
											</p>
										</div>
									</li>
								</ul>
							</div>
							{/* Quick Accessibility Tips (analogous to troubleshooting) */}
							<div className="bg-gradient-to-br from-blue-50 to-blue-100 p-12 rounded-2xl">
								<h3 className="text-2xl font-bold text-dark-slate mb-6">
									Quick Accessibility Tips
								</h3>
								<div className="space-y-4">
									<div className="bg-white p-4 rounded-lg">
										<div className="flex items-center mb-2">
											<div className="bg-blue-200 text-blue-700 font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3">
												1
											</div>
											<h4 className="font-bold">Use “Skip to Content”</h4>
										</div>
										<p className="text-slate-600 text-sm ml-11">
											Press Tab at page load to jump directly to main content.
										</p>
									</div>
									<div className="bg-white p-4 rounded-lg">
										<div className="flex items-center mb-2">
											<div className="bg-blue-200 text-blue-700 font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3">
												2
											</div>
											<h4 className="font-bold">Enable High Contrast</h4>
										</div>
										<p className="text-slate-600 text-sm ml-11">
											Switch themes in your settings for better visibility.
										</p>
									</div>
									<div className="bg-white p-4 rounded-lg">
										<div className="flex items-center mb-2">
											<div className="bg-blue-200 text-blue-700 font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3">
												3
											</div>
											<h4 className="font-bold">Screen Reader Shortcuts</h4>
										</div>
										<p className="text-slate-600 text-sm ml-11">
											Use your device’s commands to have content read aloud.
										</p>
									</div>
									<div className="bg-white p-4 rounded-lg">
										<div className="flex items-center mb-2">
											<div className="bg-blue-200 text-blue-700 font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3">
												4
											</div>
											<h4 className="font-bold">Accessible Support Channel</h4>
										</div>
										<p className="text-slate-600 text-sm ml-11">
											Our helpdesk is accessible. Let us know what you need.
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
						faqs={accessibilityFaqs}
						title="Accessibility FAQs"
						subtitle="Find detailed answers to all your accessibility questions"
						colorScheme="blue"
					/>
				</div>

				{/* Still Need Help CTA */}
				<DynamicCtaSection
					buttonHref="/support"
					buttonText="Contact Accessibility Support"
					featureList={[
						'Accessibility specialists available',
						'Feedback-driven improvements',
						'Assistive tech support',
					]}
					title="Still Need Help?"
					subtitle="Our accessibility team is ready to assist you with any accessibility questions or suggestions."
					colorScheme="blue"
				/>
			</div>
		</>
	);
}
