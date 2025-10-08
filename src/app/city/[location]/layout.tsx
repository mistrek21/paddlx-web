// src/app/city/[location]/layout.tsx

import { Metadata } from 'next';
import { notFound } from 'next/navigation';

interface CityLayoutProps {
	children: React.ReactNode;
	params: Promise<{ location: string }>;
}

// Fetch city data for metadata
async function getCityData(location: string) {
	const baseUrl = process.env.IP_CONFIG || 'http://localhost:3000';

	try {
		const url = new URL(
			`${baseUrl}/api/web/cities/by-location/${encodeURIComponent(location)}`
		);

		const response = await fetch(url.toString(), {
			next: {
				revalidate: 2592000, // Cache for 30 days (1 month)
				tags: [`city-${location}`],
			},
		});

		if (!response.ok) return null;

		const data = await response.json();
		return data.data;
	} catch (error) {
		console.error('Error fetching city data for metadata:', error);
		return null;
	}
}

// Generate metadata dynamically
export async function generateMetadata({
	params,
}: {
	params: Promise<{ location: string }>;
}): Promise<Metadata> {
	const { location } = await params;
	const cityData = await getCityData(location);

	if (!cityData) {
		return {
			title: 'City Not Found',
			description: 'The requested city could not be found.',
		};
	}

	const canonicalUrl = `${process.env.NEXT_PUBLIC_APP_URL}/city/${
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

// Cache pages for 30 days (1 month as you requested)
export const revalidate = 2592000; // 30 days in seconds

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
