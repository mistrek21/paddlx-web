// src/app/guides/page.tsx

import { Metadata } from 'next';

import Link from 'next/link';
import { guideArticles } from './[category]/other/docs-data';
import { ArticleCard } from './[category]/_components/ArticleCard';

// Add SEO metadata for this important page
export const metadata: Metadata = {
	title: 'All Guides & Resources | paddlX Learning Center',
	description:
		'Explore our complete library of pickleball guides, reviews, tips, and strategies to improve your game and learn how to manage a successful league.',
};

export default function GuidesPage() {
	// Optional: Sort articles by date so the newest are first
	const sortedArticles = guideArticles.sort(
		(a, b) =>
			new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
	);

	return (
		<div className="bg-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
				{/* Page Header */}
				<div className="text-center pb-12 border-b border-sand">
					<nav className="text-sm mb-4 text-slate-500">
						<Link href="/" className="hover:text-ocean">
							Home
						</Link>
						<span className="mx-2">/</span>
						<span className="text-charcoal font-medium">Guides</span>
					</nav>
					<h1 className="text-4xl md:text-5xl font-extrabold text-charcoal tracking-tight text-balance">
						paddlX Learning Center
					</h1>
					<p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto text-balance">
						Browse our complete library of expert guides, tutorials, and tips. From
						learning the rules to scaling your community, we have you covered.
					</p>
				</div>

				{/* Articles Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 mt-12">
					{sortedArticles.map((article) => (
						<ArticleCard key={article.titleSlug} article={article} />
					))}
				</div>
			</div>
		</div>
	);
}
