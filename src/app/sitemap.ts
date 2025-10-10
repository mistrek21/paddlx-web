// src/app/sitemap.ts

import { MetadataRoute } from 'next';

export const revalidate = 86400; // 24 hours
export const dynamic = 'force-dynamic';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://paddlx.com';
const API_URL = process.env.IP_CONFIG || 'http://localhost:3000';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	try {
		// Fetch cities
		const citiesResponse = await fetch(`${API_URL}/api/web/cities/popular`, {
			next: { revalidate: 86400 },
			cache: 'no-store',
		});

		const citiesData = citiesResponse.ok
			? await citiesResponse.json()
			: { cities: [] };
		const cities = citiesData.cities || [];

		// Fetch courts
		const courtsResponse = await fetch(`${API_URL}/api/web/courts`, {
			next: { revalidate: 86400 },
			cache: 'no-store',
		});

		const courtsData = courtsResponse.ok
			? await courtsResponse.json()
			: { courts: [] };
		const courts = courtsData.courts || [];

		// Fetch articles (you'll need to create this endpoint)
		const articlesResponse = await fetch(`${API_URL}/api/web/articles`, {
			next: { revalidate: 86400 },
			cache: 'no-store',
		});

		const articlesData = articlesResponse.ok
			? await articlesResponse.json()
			: { articles: [] };
		const articles = articlesData.articles || [];

		// Static pages
		const staticPages: MetadataRoute.Sitemap = [
			{
				url: BASE_URL,
				lastModified: new Date(),
				changeFrequency: 'daily',
				priority: 1,
			},
			{
				url: `${BASE_URL}/about`,
				lastModified: new Date(),
				changeFrequency: 'monthly',
				priority: 0.8,
			},
			{
				url: `${BASE_URL}/courts`,
				lastModified: new Date(),
				changeFrequency: 'daily',
				priority: 0.9,
			},
			{
				url: `${BASE_URL}/cities`,
				lastModified: new Date(),
				changeFrequency: 'weekly',
				priority: 0.8,
			},
		];

		// City pages
		const cityUrls: MetadataRoute.Sitemap = cities.map((city: any) => ({
			url: `${BASE_URL}/city/${
				city.slug || city.name.toLowerCase().replace(/\s+/g, '-')
			}`,
			lastModified: city.updatedAt ? new Date(city.updatedAt) : new Date(),
			changeFrequency: 'monthly' as const,
			priority: city.isPopularDestination ? 0.9 : 0.7,
		}));

		// Court pages
		const courtUrls: MetadataRoute.Sitemap = courts.map((court: any) => ({
			url: `${BASE_URL}/court/${court.slug}`,
			lastModified: court.updatedAt ? new Date(court.updatedAt) : new Date(),
			changeFrequency: 'weekly' as const,
			priority: 0.8,
		}));

		// Article pages
		const articleUrls: MetadataRoute.Sitemap = articles.map((article: any) => ({
			url: `${BASE_URL}/court/${article.courtSlug}/article/${article.slug}`,
			lastModified: article.updatedAt ? new Date(article.updatedAt) : new Date(),
			changeFrequency: 'daily' as const,
			priority: 0.7,
		}));

		return [...staticPages, ...cityUrls, ...courtUrls, ...articleUrls];
	} catch (error) {
		console.error('Error generating sitemap:', error);

		// Return minimal sitemap on error
		return [
			{
				url: BASE_URL,
				lastModified: new Date(),
				changeFrequency: 'daily',
				priority: 1,
			},
		];
	}
}
