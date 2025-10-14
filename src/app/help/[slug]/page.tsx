// src/app/[slug]/page.tsx

import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { docSections } from './_other/docs-data';
import { HelpCenterLayout } from './_components/HelpCenterLayout';
import { DocArticle } from './_components/DocArticle';

// SEO: Generate metadata for each page
export async function generateMetadata({
	params,
}: {
	params: Promise<{ slug: string }>;
}): Promise<Metadata> {
	const { slug } = await params;
	let article = null;

	for (const section of docSections) {
		if (section.items) {
			const foundArticle = section.items.find((item) => item.slug === slug);
			if (foundArticle) {
				article = foundArticle;
				break;
			}
		}
	}

	if (!article) {
		return {
			title: 'Article Not Found | paddlX Help Center',
		};
	}

	return {
		title: `${article.content.title} | paddlX Help Center`,
		description: article.content.description,
		openGraph: {
			title: article.content.title,
			description: article.content.description,
			type: 'article',
			url: `https://paddlx.com/help/${slug}`,
		},
		twitter: {
			card: 'summary_large_image',
			title: article.content.title,
			description: article.content.description,
		},
		alternates: {
			canonical: `https://paddlx.com/help/${slug}`,
		},
	};
}

// Generate static params for all help articles
export async function generateStaticParams() {
	const slugs: string[] = [];

	docSections.forEach((section) => {
		if (section.items) {
			section.items.forEach((item) => {
				slugs.push(item.slug);
			});
		}
	});

	return slugs.map((slug) => ({
		slug,
	}));
}

export default async function HelpArticlePage({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const { slug } = await params;

	// Find the article based on slug
	let article = null;

	for (const section of docSections) {
		if (section.items) {
			const foundArticle = section.items.find((item) => item.slug === slug);
			if (foundArticle) {
				article = foundArticle;
				break;
			}
		}
	}

	if (!article) {
		notFound();
	}

	return (
		<HelpCenterLayout currentSlug={slug}>
			<DocArticle content={article.content} />
		</HelpCenterLayout>
	);
}
