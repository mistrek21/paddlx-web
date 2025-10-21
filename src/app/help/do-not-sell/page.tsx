// src/app/help/do-not-sell/page.tsx

import { Metadata } from 'next';
import Head from 'next/head';
import { ShieldOff, UserCheck, Info, Link as LinkIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
	title: 'Do Not Sell or Share My Personal Information | paddlX',
	description:
		'Exercise your right to opt out of the sale or sharing of your personal information under CCPA and similar laws.',
	keywords: [
		'paddlX do not sell',
		'CCPA opt-out',
		'privacy rights',
		'data sharing opt-out',
	],
	openGraph: {
		title: 'Do Not Sell or Share My Personal Information | paddlX',
		description:
			'Submit a request to opt out of the sale or sharing of your personal data in compliance with CCPA and applicable privacy laws.',
		url: 'https://www.paddlx.com/help/do-not-sell',
		type: 'website',
	},
};

const jsonLd = {
	'@context': 'https://schema.org',
	'@type': 'WebPage',
	'name': 'paddlX Do Not Sell or Share My Personal Information',
	'description':
		'CCPA and privacy rights request page to opt out of personal data sale or sharing',
	'url': 'https://www.paddlx.com/help/do-not-sell',
};

export default function DoNotSellPage() {
	return (
		<>
			<Head>
				<script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
			</Head>
			<div className="bg-white text-slate-800">
				{/* Hero Section */}
				<section className="bg-slate-50 py-20 text-center">
					<ShieldOff className="w-16 h-16 mx-auto text-slate-700 mb-6" />
					<h1 className="text-5xl font-extrabold mb-4">
						Do Not Sell or Share My Personal Information
					</h1>
					<p className="text-lg text-slate-600 max-w-2xl mx-auto">
						In accordance with the California Consumer Privacy Act (CCPA) and similar
						laws, you can opt out of the sale or sharing of your personal information.
					</p>
				</section>

				{/* Content */}
				<section className="container mx-auto px-6 py-16 max-w-3xl space-y-8">
					<div className="prose prose-slate">
						<h2>What This Means</h2>
						<p>
							Under certain privacy laws (e.g., CCPA), you have the right to direct a
							business that sells or shares personal information to stop doing so. This
							does not affect your ability to use paddlX or our services.
						</p>

						<h3>Your Rights Include:</h3>
						<ul>
							<li>
								<UserCheck className="inline-block w-5 h-5 text-teal-600 mr-2" />
								Right to opt out of sale of personal data
							</li>
							<li>
								<UserCheck className="inline-block w-5 h-5 text-teal-600 mr-2" />
								Right to opt out of sharing for cross-context behavioral advertising
							</li>
							<li>
								<UserCheck className="inline-block w-5 h-5 text-teal-600 mr-2" />
								Right to revoke opt-in consent
							</li>
						</ul>

						<h3>How to Submit a Request</h3>
						<p>
							To opt out, please click the button below and complete the form. We will
							process your request within 15 business days.
						</p>
					</div>

					{/* Opt-Out Button */}
					<div className="text-center">
						<Button
							size="lg"
							className="bg-slate-700 hover:bg-slate-800 text-white flex items-center justify-center mx-auto"
							asChild
						>
							<a href="/settings/consent/do-not-sell">
								<LinkIcon className="w-5 h-5 mr-2" />
								Submit Opt-Out Request
							</a>
						</Button>
					</div>

					<div className="bg-teal-50 border-l-4 border-teal-600 p-6 rounded-lg flex items-start">
						<Info className="w-6 h-6 text-teal-600 mr-3 flex-shrink-0 mt-1" />
						<p className="text-slate-700">
							You may also manage your consent preferences in your account settings at
							any time.
						</p>
					</div>

					<div className="prose prose-slate">
						<h3>Additional Information</h3>
						<p>
							We do not sell the personal information of minors under 16 without
							affirmative authorization. You can learn more about how we handle
							personal data in our{' '}
							<a href="/help/privacy" className="text-teal-600 hover:underline">
								Privacy Policy
							</a>
							.
						</p>
					</div>
				</section>
			</div>
		</>
	);
}
