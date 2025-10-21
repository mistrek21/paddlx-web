// src/app/help/community-guidelines/page.tsx

import { Metadata } from 'next';
import Head from 'next/head';
import {
	Users,
	MessageCircle,
	ShieldOff,
	Slash,
	Smile,
	AlertCircle,
	CheckCircle,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import DynamicCtaSection from '../../_components/cta/DynamicCtaSection';
import Link from 'next/link';

export const metadata: Metadata = {
	title: 'Community Guidelines | paddlX',
	description:
		'Learn the standards for respectful, positive, and safe interactions on paddlX. Our Community Guidelines help everyone enjoy the platform.',
	keywords: [
		'paddlX community guidelines',
		'user conduct',
		'forum rules',
		'respectful behavior',
		'safe community',
	],
	openGraph: {
		title: 'Community Guidelines | paddlX',
		description:
			'Read our Community Guidelines to understand expected behavior and keep paddlX welcoming for all players.',
		url: 'https://www.paddlx.com/help/community-guidelines',
		type: 'website',
	},
};

const jsonLd = {
	'@context': 'https://schema.org',
	'@type': 'WebPage',
	'name': 'paddlX Community Guidelines',
	'description':
		'Standards for respectful, positive, and safe behavior on paddlX community features',
	'url': 'https://www.paddlx.com/help/community-guidelines',
};

export default function CommunityGuidelinesPage() {
	return (
		<>
			<Head>
				<script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
			</Head>
			<div className="bg-white text-slate-800">
				{/* Hero Section */}
				<section className="bg-blue-50 py-20 text-center">
					<Users className="w-16 h-16 mx-auto text-blue-600 mb-6" />
					<h1 className="text-5xl font-extrabold mb-4">Community Guidelines</h1>
					<p className="text-lg text-slate-600 max-w-2xl mx-auto">
						Our standards for respectful, positive, and safe interactions across all
						paddlX community features—forums, reviews, messaging, and events.
					</p>
				</section>

				{/* Quick Nav */}
				<section className="py-12 border-b border-slate-200">
					<div className="container mx-auto px-6 max-w-3xl grid grid-cols-2 gap-4 text-sm">
						{[
							{ label: 'Be Respectful', href: '#respect' },
							{ label: 'No Harassment', href: '#harassment' },
							{ label: 'Keep It Relevant', href: '#relevant' },
							{ label: 'Privacy & Safety', href: '#privacy' },
							{ label: 'No Spam', href: '#spam' },
							{ label: 'Reporting Issues', href: '#report' },
							{ label: 'Sanctions', href: '#sanctions' },
							{ label: 'Need Help?', href: '#help' },
						].map((item) => (
							<a
								key={item.href}
								href={item.href}
								className="text-blue-600 hover:underline"
							>
								{item.label}
							</a>
						))}
					</div>
				</section>

				<section className="container mx-auto px-6 py-16 max-w-4xl space-y-16">
					{/* Respect */}
					<div id="respect" className="scroll-mt-20">
						<h2 className="text-3xl font-bold mb-4">1. Be Respectful</h2>
						<p className="text-slate-700 mb-4">
							Treat all members with courtesy and kindness. Value diverse perspectives
							and foster a welcoming environment.
						</p>
						<ul className="list-disc pl-6 space-y-2 text-slate-700">
							<li>Use polite language and a constructive tone.</li>
							<li>Acknowledge cultural and skill-level differences.</li>
							<li>Encourage and support fellow players.</li>
						</ul>
					</div>

					{/* Harassment */}
					<div id="harassment" className="scroll-mt-20">
						<h2 className="text-3xl font-bold mb-4">2. No Harassment or Hate</h2>
						<p className="text-slate-700 mb-4">
							Harassment, hate speech, threats, or any form of discrimination is
							strictly prohibited.
						</p>
						<ul className="list-disc pl-6 space-y-2 text-slate-700">
							<li>Avoid insults, slurs, or personal attacks.</li>
							<li>No content targeting protected groups.</li>
							<li>Violations may result in immediate suspension.</li>
						</ul>
					</div>

					{/* Relevant */}
					<div id="relevant" className="scroll-mt-20">
						<h2 className="text-3xl font-bold mb-4">3. Keep Content Relevant</h2>
						<p className="text-slate-700 mb-4">
							Stay on topic and contribute meaningfully to discussions, reviews, and
							match posts.
						</p>
						<ul className="list-disc pl-6 space-y-2 text-slate-700">
							<li>Post in appropriate forums and threads.</li>
							<li>Ensure reviews focus on venue or coach experiences.</li>
							<li>Avoid off-topic comments and self-promotion.</li>
						</ul>
					</div>

					{/* Privacy */}
					<div id="privacy" className="scroll-mt-20">
						<h2 className="text-3xl font-bold mb-4">4. Privacy & Safety</h2>
						<p className="text-slate-700 mb-4">
							Respect others’ privacy. Do not share personal data or coordinate offline
							meetings without consent.
						</p>
						<ul className="list-disc pl-6 space-y-2 text-slate-700">
							<li>Do not post phone numbers, addresses, or private messages.</li>
							<li>
								Use in-app messaging for communication; avoid sharing emails in public.
							</li>
							<li>Report suspicious behavior to support immediately.</li>
						</ul>
					</div>

					{/* Spam */}
					<div id="spam" className="scroll-mt-20">
						<h2 className="text-3xl font-bold mb-4">5. No Spam or Self-Promotion</h2>
						<p className="text-slate-700 mb-4">
							Unsolicited promotions, affiliate links, or repeated posts are not
							allowed.
						</p>
						<ul className="list-disc pl-6 space-y-2 text-slate-700">
							<li>Avoid posting ads or commercial links.</li>
							<li>No multiple posts with identical content.</li>
							<li>Share resources only in designated areas with permission.</li>
						</ul>
					</div>

					{/* Reporting */}
					<div id="report" className="scroll-mt-20">
						<h2 className="text-3xl font-bold mb-4">6. Reporting Issues</h2>
						<p className="text-slate-700 mb-4">
							Help us maintain a positive community by reporting rule violations.
						</p>
						<ul className="list-disc pl-6 space-y-2 text-slate-700">
							<li>
								Click the “Report” button on any post or message that violates these
								guidelines.
							</li>
							<li>
								Provide context and screenshots when possible to assist our review team.
							</li>
							<li>
								Reports are confidential; harassing or retaliating against reporters is
								prohibited.
							</li>
						</ul>
					</div>

					{/* Sanctions */}
					<div id="sanctions" className="scroll-mt-20">
						<h2 className="text-3xl font-bold mb-4">7. Consequences</h2>
						<p className="text-slate-700 mb-4">
							Violations of these guidelines may lead to warnings, temporary
							suspension, or permanent ban depending on severity.
						</p>
						<ul className="list-disc pl-6 space-y-2 text-slate-700">
							<li>First offense: Warning and removal of offending content.</li>
							<li>Repeated or severe offenses: Temporary suspension (1–30 days).</li>
							<li>
								Extreme cases (threats, hate speech): Permanent ban and account
								termination.
							</li>
						</ul>
					</div>

					{/* Help */}
					<div id="help" className="scroll-mt-20">
						<h2 className="text-3xl font-bold mb-4">8. Need Assistance?</h2>
						<p className="text-slate-700 mb-6">
							For questions or to appeal a sanction, contact our community team:
						</p>
						<ul className="space-y-2 text-slate-700">
							<li>
								<strong>Email:</strong>{' '}
								<a
									href="mailto:community@paddlx.com"
									className="text-blue-600 hover:underline"
								>
									community@paddlx.com
								</a>
							</li>
							<li>
								<strong>Support Portal:</strong>{' '}
								<Link href="/support" className="text-blue-600 hover:underline">
									paddlX Support
								</Link>
							</li>
						</ul>
					</div>
				</section>

				<DynamicCtaSection
					buttonHref="/support"
					buttonText="Contact Community Team"
					featureList={[
						'Report a violation',
						'Appeal a sanction',
						'Ask about guidelines',
					]}
					title="Need Help or Have Feedback?"
					subtitle="Our community moderators are here to ensure paddlX remains positive, inclusive, and fun."
					colorScheme="blue"
				/>
			</div>
		</>
	);
}
