// /src/app/guides/[category]/[slug]/page.tsx

import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Head from 'next/head';

import { GuideLayout } from '../_components/GuideLayout';
import { GuideArticle } from '../_components/GuideArticle';
import { guideArticles } from '../other/docs-data';

// Helper to fetch guide by params
function getGuide(params: { category: string; slug: string }) {
	return guideArticles.find(
		(article) =>
			article.categorySlug === params.category && article.titleSlug === params.slug
	);
}

// Improved SEO Metadata
export async function generateMetadata({
	params,
}: {
	params: { category: string; slug: string };
}): Promise<Metadata> {
	const guide = getGuide(params);

	if (!guide) {
		return { title: 'Guide Not Found | paddlX' };
	}

	// Setup canonical and timing
	const baseUrl = 'https://www.paddlx.com'; // CHANGE to your domain!
	const canonicalUrl = `${baseUrl}/guides/${guide.categorySlug}/${guide.titleSlug}`;
	const publishedTime = guide.publishedDate
		? new Date(guide.publishedDate).toISOString()
		: undefined;
	const keywords = guide.keywords?.length
		? guide.keywords.join(', ')
		: undefined;

	return {
		title: `${guide.title} | paddlX Guides`,
		description: guide.excerpt,
		keywords,
		alternates: { canonical: canonicalUrl },
		openGraph: {
			title: guide.title,
			description: guide.excerpt,
			url: canonicalUrl,
			type: 'article',
			images: [
				{
					url: guide.image,
					width: 1200,
					height: 630,
					alt: `${guide.title} - paddlX`,
				},
			],

			siteName: 'paddlX',
		},
		twitter: {
			card: 'summary_large_image',
			title: guide.title,
			description: guide.excerpt,
			images: [guide.image],
		},
		appleWebApp: {
			title: guide.title,
		},
	};
}

// Static params for build
export async function generateStaticParams() {
	return guideArticles.map((guide) => ({
		category: guide.categorySlug,
		slug: guide.titleSlug,
	}));
}

// JSON-LD helper used for SEO rich results
function getJsonLd(guide: any) {
	return {
		'@context': 'https://schema.org',
		'@type': 'Article',
		'headline': guide.title,
		'description': guide.excerpt,
		'image': guide.image,
		'author': {
			'@type': 'Person',
			'name': guide.author?.name,
		},
		'datePublished': guide.publishedDate,
		'mainEntityOfPage': {
			'@type': 'WebPage',
			'@id': `https://www.paddlx.com/guides/${guide.categorySlug}/${guide.titleSlug}`,
		},
		'keywords': guide.keywords?.join(', ') || '',
		'articleSection': guide.category,
	};
}

// The Page Component
export default async function GuidePage({
	params,
}: {
	params: Promise<{ category: string; slug: string }>;
}) {
	const resolvedParams = await params;
	const guide = getGuide(resolvedParams);

	if (!guide) {
		notFound();
	}

	return (
		<>
			{/* SEO JSON-LD for Google rich results */}
			<Head>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(getJsonLd(guide)),
					}}
				/>
			</Head>
			<GuideLayout guide={guide}>
				<GuideArticle guide={guide} />
			</GuideLayout>
		</>
	);
}
