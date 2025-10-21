// src/app/help/consent-preferences/page.tsx

import { Metadata } from 'next';
import Head from 'next/head';
import { Settings, Cookie, ToggleLeft, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const metadata: Metadata = {
	title: 'Consent Preferences | paddlX',
	description:
		'Manage your consent preferences for cookies and tracking technologies on paddlX. Adjust which categories you allow or disallow.',
	keywords: [
		'paddlX consent preferences',
		'cookie settings',
		'privacy settings',
		'tracking consent',
	],
	openGraph: {
		title: 'Consent Preferences | paddlX',
		description:
			'Control your consent for essential, functional, analytics, and marketing cookies on paddlX.',
		url: 'https://www.paddlx.com/help/consent-preferences',
		type: 'website',
	},
};

const jsonLd = {
	'@context': 'https://schema.org',
	'@type': 'WebPage',
	'name': 'paddlX Consent Preferences',
	'description':
		'Page to manage cookie and tracking consent preferences for paddlX users',
	'url': 'https://www.paddlx.com/help/consent-preferences',
};

export default function ConsentPreferencesPage() {
	return (
		<>
			<Head>
				<script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
			</Head>
			<div className="bg-white text-slate-800">
				{/* Hero */}
				<section className="bg-slate-50 py-20 text-center">
					<Settings className="w-16 h-16 mx-auto text-teal-600 mb-6" />
					<h1 className="text-5xl font-extrabold mb-4">Consent Preferences</h1>
					<p className="text-lg text-slate-600 max-w-2xl mx-auto">
						Manage your consent for cookies and similar tracking technologies. You can
						enable or disable optional categories at any time.
					</p>
				</section>

				{/* Consent Controls */}
				<section className="container mx-auto px-6 py-16 max-w-3xl space-y-12">
					{[
						{
							id: 'essential',
							title: 'Essential Cookies',
							description: 'Required for core functionality—cannot be disabled.',
							enabled: true,
							toggleable: false,
						},
						{
							id: 'functional',
							title: 'Functional Cookies',
							description:
								'Remember your preferences, themes, and settings to personalize your experience.',
							enabled: true,
							toggleable: true,
						},
						{
							id: 'analytics',
							title: 'Analytics Cookies',
							description:
								'Collect anonymous data to help us improve performance and user experience.',
							enabled: false,
							toggleable: true,
						},
						{
							id: 'marketing',
							title: 'Marketing Cookies',
							description:
								'Enable personalized ads and measure advertising effectiveness.',
							enabled: false,
							toggleable: true,
						},
					].map((category) => (
						<div
							key={category.id}
							className="flex items-center justify-between bg-white p-6 rounded-xl shadow-sm"
						>
							<div className="flex items-start">
								<Cookie className="w-8 h-8 text-teal-600 mr-4 flex-shrink-0" />
								<div>
									<h2 className="text-xl font-bold text-slate-800 mb-2">
										{category.title}
									</h2>
									<p className="text-slate-600">{category.description}</p>
								</div>
							</div>
							<div>
								<ToggleLeft
									className={`w-12 h-6 cursor-pointer ${
										category.enabled ? 'text-teal-600' : 'text-slate-400'
									}`}
									data-enabled={category.enabled}
									data-toggleable={category.toggleable}
									aria-disabled={!category.toggleable}
								/>
							</div>
						</div>
					))}

					{/* Save Button */}
					<div className="text-center">
						<Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white">
							Save Preferences
						</Button>
					</div>

					{/* Info Section */}
					<div className="bg-teal-50 border-l-4 border-teal-600 p-6 rounded-lg flex items-start">
						<Info className="w-6 h-6 text-teal-600 mr-3 flex-shrink-0 mt-1" />
						<p className="text-slate-700">
							You can update these preferences at any time by visiting{' '}
							<Link href="/settings/cookies" className="text-teal-600 hover:underline">
								Cookie Settings
							</Link>
							. Essential cookies remain active to ensure the site functions correctly.
						</p>
					</div>
				</section>
			</div>
		</>
	);
}
