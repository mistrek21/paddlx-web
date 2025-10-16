import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { gearCategories } from './_others/docs-data';
import { GearLayout } from './_components/GearLayout';
import { GearArticle } from './_components/GearArticle';

// SEO: Generate metadata for each gear category page
export async function generateMetadata({
	params,
}: {
	params: Promise<{ category: string }>;
}): Promise<Metadata> {
	const { category } = await params;
	const gearData = gearCategories.find((item) => item.slug === category);

	if (!gearData) {
		return {
			title: 'Gear Not Found | paddlX',
		};
	}

	return {
		title: `${gearData.content.title} | paddlX Pickleball Gear`,
		description: gearData.content.description,
		keywords: gearData.content.keywords,
		openGraph: {
			title: gearData.content.title,
			description: gearData.content.description,
			type: 'article',
			url: `https://paddlx.com/pickleball-gear/${category}`,
			images: [
				{
					url: gearData.content.featuredImage,
					width: 1200,
					height: 630,
					alt: gearData.content.title,
				},
			],
		},
		twitter: {
			card: 'summary_large_image',
			title: gearData.content.title,
			description: gearData.content.description,
			images: [gearData.content.featuredImage],
		},
		alternates: {
			canonical: `https://paddlx.com/pickleball-gear/${category}`,
		},
	};
}

// Generate static params for all gear categories
export async function generateStaticParams() {
	return gearCategories.map((gear) => ({
		category: gear.slug,
	}));
}

export default async function GearPage({
	params,
}: {
	params: Promise<{ category: string }>;
}) {
	const { category } = await params;
	const gearData = gearCategories.find((item) => item.slug === category);

	if (!gearData) {
		notFound();
	}

	// Extract sections for the sidebar
	const sections = gearData.content.sections.map((section) => ({
		id: section.id,
		heading: section.heading,
	}));

	return (
		<GearLayout currentCategory={category} sections={sections}>
			<GearArticle data={gearData.content} />
		</GearLayout>
	);
}
