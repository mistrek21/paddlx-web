// src/app/robots.ts

import { MetadataRoute } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://paddlx.com';

export default function robots(): MetadataRoute.Robots {
	return {
		rules: [
			{
				userAgent: '*',
				allow: '/',
				disallow: [
					'/api/',
					'/admin/',
					'/_next/',
					'/private/',
					'/*.json$',
					'/*?*', // Disallow query parameters
				],
				crawlDelay: 1, // Be nice to servers
			},
			{
				userAgent: 'Googlebot',
				allow: '/',
				disallow: ['/api/', '/admin/', '/private/'],
			},
			{
				userAgent: 'Bingbot',
				allow: '/',
				disallow: ['/api/', '/admin/', '/private/'],
			},
			// Block bad bots
			{
				userAgent: ['AhrefsBot', 'SemrushBot', 'DotBot', 'MJ12bot', 'BLEXBot'],
				disallow: ['/'],
			},
		],
		sitemap: [
			`${BASE_URL}/sitemap-index.xml`, // Main sitemap index
			`${BASE_URL}/sitemap.xml`,
			`${BASE_URL}/sitemap-articles.xml`,
			`${BASE_URL}/sitemap-courts.xml`,
		],
		host: BASE_URL,
	};
}
