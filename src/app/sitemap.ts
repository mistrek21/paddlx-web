// src/app/sitemap.ts

import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const baseUrl = process.env.IP_CONFIG || 'http://localhost:3000';

	// Fetch all AI-generated cities
	const response = await fetch(`${baseUrl}/api/web/cities/popular`, {
		next: { revalidate: 86400 },
	});

	const data = await response.json();

	const cityUrls = data.cities.map((city: any) => ({
		url: `${baseUrl}/city/${
			city.slug || city.name.toLowerCase().replace(/\s+/g, '-')
		}`,
		lastModified: new Date(),
		changeFrequency: 'weekly' as const,
		priority: city.isPopularDestination ? 0.9 : 0.7,
	}));

	return [
		{
			url: baseUrl,
			lastModified: new Date(),
			changeFrequency: 'daily',
			priority: 1,
		},
		...cityUrls,
	];
}
