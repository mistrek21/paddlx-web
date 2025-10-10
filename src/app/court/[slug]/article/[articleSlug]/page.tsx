// src/app/court/[slug]/article/[articleSlug]/page.tsx

import { notFound } from 'next/navigation';
import ArticleDetail from './_components/ArticleDetail';
import { Article } from './_components/types';

// Force dynamic rendering
export const dynamic = 'force-dynamic';

async function getArticle(
	articleSlug: string,
	slug: string
): Promise<Article | null> {
	try {
		const url = `${process.env.IP_CONFIG}/api/web/courts/${slug}/article/${articleSlug}`;
		console.log('Fetching from URL:', url); // Debug log

		const response = await fetch(url, { cache: 'no-store' });

		console.log('Response status:', response.status); // Debug log

		if (!response.ok) {
			const errorText = await response.text();
			console.error(`API Error ${response.status}:`, errorText);
			return null;
		}

		const data = await response.json();
		return data;
	} catch (error) {
		console.error('Error fetching article:', error);
		return null;
	}
}

export default async function ArticlePage({
	params,
}: {
	params: Promise<{ articleSlug: string; slug: string }>;
}) {
	const { articleSlug, slug } = await params;

	console.log('Fetching article:', articleSlug, 'for court:', slug);

	const article = await getArticle(articleSlug, slug);

	console.log('Article result:', article);

	if (!article) return notFound();

	return <ArticleDetail article={article} courtSlug={article.club.slug} />;
}
