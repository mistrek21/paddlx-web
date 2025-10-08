// src/app/sitemap.ts

import { MetadataRoute } from 'next';

export const revalidate = 86400; // 24 hours
export const dynamic = 'force-dynamic'; // Important: force dynamic rendering

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const baseUrl = process.env.IP_CONFIG || 'http://localhost:3000';
	const apiUrl = process.env.IP_CONFIG || 'http://localhost:3000';

	try {
		// Fetch from your external API
		const response = await fetch(`${apiUrl}/api/web/cities/popular`, {
			next: { revalidate: 86400 },
			cache: 'no-store', // Important for dynamic generation
		});

		if (!response.ok) {
			throw new Error('Failed to fetch cities');
		}

		const data = await response.json();
		const cities = data.cities || [];

		const cityUrls = cities.map((city: any) => ({
			url: `${baseUrl}/city/${
				city.slug || city.name.toLowerCase().replace(/\s+/g, '-')
			}`,
			lastModified: city.updatedAt ? new Date(city.updatedAt) : new Date(),
			changeFrequency: 'monthly' as const,
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
	} catch (error) {
		console.error('Error generating sitemap:', error);

		// Return minimal sitemap on error
		return [
			{
				url: baseUrl,
				lastModified: new Date(),
				changeFrequency: 'daily',
				priority: 1,
			},
		];
	}
}
