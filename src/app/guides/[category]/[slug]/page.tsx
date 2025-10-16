// /src/app/guides/[category]/[slug]/page.tsx

import { notFound } from 'next/navigation';
import { Metadata } from 'next';

import { GuideLayout } from '../_components/GuideLayout';
import { GuideArticle } from '../_components/GuideArticle';
import { guideArticles } from '../other/docs-data';

// This helper function is synchronous and correct. It expects a resolved object.
function getGuide(params: { category: string; slug: string }) {
	return guideArticles.find(
		(article) =>
			article.categorySlug === params.category && article.titleSlug === params.slug
	);
}

// Generate metadata for SEO
export async function generateMetadata({
	params,
}: {
	// The params object itself is what you await
	params: { category: string; slug: string };
}): Promise<Metadata> {
	// No need to await here, Next.js handles it for this function
	const guide = getGuide(params);

	if (!guide) {
		return { title: 'Guide Not Found | paddlX' };
	}

	return {
		title: `${guide.title} | paddlX Guides`,
		description: guide.excerpt,
		openGraph: {
			title: guide.title,
			description: guide.excerpt,
			type: 'article',
			images: [guide.image],
		},
	};
}

// Generate static pages at build time for performance
export async function generateStaticParams() {
	return guideArticles.map((guide) => ({
		category: guide.categorySlug,
		slug: guide.titleSlug,
	}));
}

// The page component itself
export default async function GuidePage({
	params,
}: {
	// FIX: The type should reflect that params is a Promise
	params: Promise<{ category: string; slug: string }>;
}) {
	// FIX: Await the params promise to get the resolved object
	const resolvedParams = await params;
	const guide = getGuide(resolvedParams);

	// If no guide is found for the given params, show a 404 page
	if (!guide) {
		notFound();
	}

	return (
		<GuideLayout guide={guide}>
			<GuideArticle guide={guide} />
		</GuideLayout>
	);
}
