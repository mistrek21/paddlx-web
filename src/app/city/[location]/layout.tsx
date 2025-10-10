// src/app/city/[location]/layout.tsx

import { Metadata } from 'next';
import { notFound } from 'next/navigation';

interface CityLayoutProps {
	children: React.ReactNode;
	params: Promise<{ location: string }>;
}

// Fetch city data for metadata
async function getCityData(location: string, country?: string) {
	const baseUrl = process.env.IP_CONFIG || 'http://localhost:3000';

	try {
		// Decode the location first
		const decodedLocation = decodeURIComponent(location);

		// Build URL: /api/web/cities/[location]?country=xxx
		const url = new URL(
			`${baseUrl}/api/web/cities/${encodeURIComponent(decodedLocation)}`
		);

		if (country) {
			url.searchParams.set('country', country);
		}

		console.log('🔍 Fetching:', url.toString());

		const response = await fetch(url.toString(), {
			// Don't cache at all - let the API handle caching
			cache: 'no-store',
		});

		console.log('📡 Response status:', response.status);

		if (!response.ok) {
			console.log('❌ Response not OK');
			return null;
		}

		const data = await response.json();
		console.log(
			'✅ Data received:',
			data?.name,
			'AI Generated:',
			data?.isAiGenerated
		);

		return data;
	} catch (error) {
		console.error('❌ Error fetching city data:', error);
		return null;
	}
}

// Generate metadata dynamically
export async function generateMetadata(
	{ params }: { params: Promise<{ location: string }> },
	parent: any
): Promise<Metadata> {
	const { location } = await params;

	const cityData = await getCityData(location);

	if (!cityData) {
		return {
			title: 'City Not Found',
			description: 'The requested city could not be found.',
		};
	}

	const canonicalUrl = `${process.env.IP_CONFIG}/city/${
		cityData.slug || location
	}`;
	const title =
		cityData.metaTitle ||
		`Pickleball in ${cityData.name} - Courts, Clubs & Players`;
	const description =
		cityData.metaDescription ||
		`Discover ${cityData.totalCourts} pickleball courts across ${cityData.totalClubs} clubs in ${cityData.name}, ${cityData.country}. Join the community today!`;

	return {
		title,
		description,
		keywords: cityData.keywords || [
			`${cityData.name} pickleball`,
			'pickleball courts',
			'pickleball clubs',
			cityData.country,
		],
		alternates: {
			canonical: canonicalUrl,
		},
		openGraph: {
			title,
			description,
			url: canonicalUrl,
			siteName: 'paddlX',
			images: cityData.imageUrl
				? [
						{
							url: cityData.imageUrl,
							width: 1200,
							height: 630,
							alt: `${cityData.name} pickleball courts`,
						},
				  ]
				: [],
			locale: 'en_US',
			type: 'website',
		},
		twitter: {
			card: 'summary_large_image',
			title,
			description,
			images: cityData.imageUrl ? [cityData.imageUrl] : undefined,
		},
		robots: {
			index: cityData.isVerified,
			follow: cityData.isVerified,
		},
		other: {
			'geo.position': `${cityData.latitude};${cityData.longitude}`,
			'geo.placename': cityData.name,
			'geo.region': cityData.countryCode,
		},
	};
}

// Allow all dynamic routes to be generated on-demand
export const dynamicParams = true;

// Make layout dynamic during development/AI enhancement phase
export const dynamic = 'force-dynamic';
export const revalidate = 0;

// For production (uncomment when AI generation is stable):
// export const dynamic = 'auto';
// export const revalidate = 3600;

export default async function CityLayout({
	children,
	params,
}: CityLayoutProps) {
	const { location } = await params;
	const cityData = await getCityData(location);

	if (!cityData) {
		notFound();
	}

	// Add structured data for SEO
	const structuredData = {
		'@context': 'https://schema.org',
		'@type': 'Place',
		'name': cityData.name,
		'description': cityData.description,
		'geo': {
			'@type': 'GeoCoordinates',
			'latitude': cityData.latitude,
			'longitude': cityData.longitude,
		},
		'address': {
			'@type': 'PostalAddress',
			'addressCountry': cityData.countryCode,
			'addressRegion': cityData.state,
		},
		...(cityData.imageUrl && {
			image: cityData.imageUrl,
		}),
	};

	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(structuredData),
				}}
			/>
			{children}
		</>
	);
}
