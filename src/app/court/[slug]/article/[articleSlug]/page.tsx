// src/app/court/[slug]/article/[articleSlug]/page.tsx

import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import ArticleDetail from './_components/ArticleDetail';
import { Article } from './_components/types';

// Force dynamic rendering
export const dynamic = 'force-dynamic';

// Base URL configuration
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://paddlx.com';

async function getArticle(
	articleSlug: string,
	slug: string
): Promise<Article | null> {
	try {
		const url = `${process.env.IP_CONFIG}/api/web/courts/${slug}/article/${articleSlug}`;

		const response = await fetch(url, {
			cache: 'no-store',
			next: { revalidate: 0 },
		});

		if (!response.ok) {
			return null;
		}

		const data = await response.json();
		return data;
	} catch (error) {
		console.error('Error fetching article:', error);
		return null;
	}
}

// Generate dynamic metadata for SEO

export async function generateMetadata({
	params,
}: {
	params: Promise<{ articleSlug: string; slug: string }>;
}): Promise<Metadata> {
	const { articleSlug, slug } = await params;
	const article = await getArticle(articleSlug, slug);

	if (!article) {
		return {
			title: 'Article Not Found',
			description: 'The requested article could not be found.',
		};
	}

	const canonicalUrl = `${BASE_URL}/court/${slug}/article/${articleSlug}`;
	const description =
		article.content.slice(0, 155).trim().replace(/\s+/g, ' ') + '...';

	const keywords = [
		article.title,
		article.club.name,
		'pickleball',
		'paddle',
		article.club.city?.name,
		article.club.city?.country,
		'court',
		'sports',
	]
		.filter(Boolean)
		.join(', ');

	return {
		title: `${article.title} | ${article.club.name}`,
		description,
		keywords,
		authors: article.author.name ? [{ name: article.author.name }] : undefined,
		creator: article.author.name || 'PaddlX',
		publisher: 'PaddlX',

		alternates: {
			canonical: canonicalUrl,
		},

		openGraph: {
			title: article.title,
			description,
			url: canonicalUrl,
			siteName: 'PaddlX',
			images: article.imageUrl
				? [
						{
							url: article.imageUrl,
							width: 1200,
							height: 630,
							alt: article.title,
						},
				  ]
				: [
						{
							url: `${BASE_URL}/og-default.jpg`,
							width: 1200,
							height: 630,
							alt: 'PaddlX - Pickleball Community',
						},
				  ],
			locale: 'en_US',
			type: 'article',
			// FIX: Convert Date to ISO string
			publishedTime: article.publishedAt
				? new Date(article.publishedAt).toISOString()
				: undefined,
			modifiedTime: article.updatedAt
				? new Date(article.updatedAt).toISOString()
				: undefined,
			authors: article.author.name ? [article.author.name] : undefined,
			// FIX: Filter out undefined values and ensure array of strings
			tags: [
				'pickleball',
				'paddle',
				article.club.name,
				article.club.city?.name,
				article.club.city?.country,
			].filter((tag): tag is string => Boolean(tag)), // Type guard to ensure only strings
		},

		twitter: {
			card: 'summary_large_image',
			title: article.title,
			description,
			images: article.imageUrl ? [article.imageUrl] : undefined,
			creator: '@paddlx',
			site: '@paddlx',
		},

		robots: {
			index: true,
			follow: true,
			googleBot: {
				'index': true,
				'follow': true,
				'max-video-preview': -1,
				'max-image-preview': 'large',
				'max-snippet': -1,
			},
		},

		category: 'Sports & Recreation',
		classification: 'Article',

		verification: {
			google: 'your-google-site-verification-code',
		},

		appleWebApp: {
			capable: true,
			title: 'PaddlX',
			statusBarStyle: 'black-translucent',
		},

		formatDetection: {
			telephone: true,
			email: true,
			address: true,
		},
	};
}

export default async function ArticlePage({
	params,
}: {
	params: Promise<{ articleSlug: string; slug: string }>;
}) {
	const { articleSlug, slug } = await params;
	const article = await getArticle(articleSlug, slug);

	if (!article) return notFound();

	return (
		<>
			{/* JSON-LD Structured Data for Rich Snippets */}
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						'@context': 'https://schema.org',
						'@type': 'Article',
						'headline': article.title,
						'description': article.content.slice(0, 155).trim() + '...',
						'image': article.imageUrl || `${BASE_URL}/og-default.jpg`,
						'datePublished': article.publishedAt,
						'dateModified': article.updatedAt,
						'author': {
							'@type': 'Person',
							'name': article.author.name || 'Anonymous',
							'image': article.author.profilePicture,
						},
						'publisher': {
							'@type': 'Organization',
							'name': 'PaddlX',
							'logo': {
								'@type': 'ImageObject',
								'url': `${BASE_URL}/logo.png`,
							},
						},
						'mainEntityOfPage': {
							'@type': 'WebPage',
							'@id': `${BASE_URL}/court/${slug}/article/${articleSlug}`,
						},
						'articleSection': 'Sports & Recreation',
						'articleBody': article.content,
						'commentCount': article.commentsCount,
						'comment': article.comments?.map((comment) => ({
							'@type': 'Comment',
							'text': comment.text,
							'dateCreated': comment.createdAt,
							'author': {
								'@type': 'Person',
								'name': comment.author.username || 'Anonymous',
							},
						})),
						'about': {
							'@type': 'SportsActivityLocation',
							'name': article.club.name,
							'address': {
								'@type': 'PostalAddress',
								'streetAddress': article.club.address,
								'addressLocality': article.club.city?.name,
								'addressCountry': article.club.city?.country,
							},
							'telephone': article.club.contactPhone,
							'url': article.club.website,
							'image': article.club.images?.[0],
							'aggregateRating': article.club.averageRating
								? {
										'@type': 'AggregateRating',
										'ratingValue': article.club.averageRating,
										'reviewCount': article.club.totalReviewsCount,
										'bestRating': '5',
										'worstRating': '1',
								  }
								: undefined,
						},
						'breadcrumb': {
							'@type': 'BreadcrumbList',
							'itemListElement': [
								{
									'@type': 'ListItem',
									'position': 1,
									'name': 'Home',
									'item': BASE_URL,
								},
								{
									'@type': 'ListItem',
									'position': 2,
									'name': 'Courts',
									'item': `${BASE_URL}/courts`,
								},
								{
									'@type': 'ListItem',
									'position': 3,
									'name': article.club.name,
									'item': `${BASE_URL}/court/${slug}`,
								},
								{
									'@type': 'ListItem',
									'position': 4,
									'name': article.title,
									'item': `${BASE_URL}/court/${slug}/article/${articleSlug}`,
								},
							],
						},
					}),
				}}
			/>

			{/* Main Content */}
			<ArticleDetail article={article} courtSlug={article.club.slug} />
		</>
	);
}
