// src/app/profile/settings/consent/do-not-sell/page.tsx

import { Metadata } from 'next';
import Head from 'next/head';

import DoNotSellWrapper from './_components/DoNotSellWrapper';

export const metadata: Metadata = {
	title: 'Opt Out – Do Not Sell My Personal Information | paddlX',
	description:
		'Submit your CCPA/CPRA Do Not Sell or Share opt-out request to paddlX. Protect your privacy and data rights.',
	keywords: [
		'paddlX do not sell',
		'opt out form',
		'ccpa opt-out',
		'cpra data privacy',
		'privacy request',
	],
	openGraph: {
		title: 'Do Not Sell My Personal Information Opt Out | paddlX',
		description:
			'Submit your opt-out request to paddlX under CCPA or CPRA. We respect your right to control your data sharing.',
		url: 'https://www.paddlx.com/profile/settings/consent/do-not-sell',
		type: 'website',
	},
};

export default function DoNotSellFormPage() {
	return (
		<>
			<Head>
				{/* JSON-LD for SEO */}
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							'@context': 'https://schema.org',
							'@type': 'WebPage',
							'name': 'paddlX Do Not Sell Opt Out Form',
							'description':
								"Submit CCPA/CPRA 'Do Not Sell' personal data requests at paddlX.",
							'url': 'https://www.paddlx.com/profile/settings/consent/do-not-sell',
						}),
					}}
				/>
			</Head>

			<DoNotSellWrapper />
		</>
	);
}
