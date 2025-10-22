// src/app/city/[location]/clubs/page.tsx

import { Metadata } from 'next';
import { cache } from 'react';
import AllClubsWrapper from './_components/AllClubsWrapper';

const API_BASE_URL = process.env.IP_CONFIG || 'https://paddle-api.vercel.app';
export const revalidate = 86400; // 24 hours cache

const getCity = cache(async (rawLocation: string) => {
	const cleanLocation = decodeURIComponent(rawLocation);
	const url = `${API_BASE_URL}/api/web/cities/${cleanLocation}`;

	const res = await fetch(url, {
		next: { revalidate },
		cache: 'force-cache',
	});

	if (!res.ok) {
		console.error('❌ Response not OK');
		throw new Error('City not found');
	}

	const data = await res.json();

	return data;
});

export async function generateMetadata({
	params,
}: {
	params: Promise<{ location: string }>;
}): Promise<Metadata> {
	const { location } = await params;
	const city = await getCity(location);

	const title = city.metaTitle || `Pickleball Clubs in ${city.name} | Paddle`;
	const description =
		city.metaDescription ||
		`Discover ${city.clubs?.length || 0} pickleball clubs in ${
			city.name
		}. Find courts, connect with players, and join the local pickleball community.`;

	const cleanLocation = decodeURIComponent(location);
	const canonicalLocation = encodeURIComponent(cleanLocation);

	return {
		title,
		description,
		alternates: {
			canonical: `https://paddle.vercel.app/city/${canonicalLocation}/clubs`,
		},
		openGraph: {
			title,
			description,
			url: `https://paddle.vercel.app/city/${canonicalLocation}/clubs`,
			siteName: 'Paddle',
			images: [
				{
					url: city.coverImageUrl || city.imageUrl || '/default-court.jpg',
					width: 1200,
					height: 630,
					alt: city.name,
				},
			],
			type: 'website',
		},
		twitter: {
			card: 'summary_large_image',
			title,
			description,
			images: [city.coverImageUrl || city.imageUrl || '/default-court.jpg'],
		},
	};
}

export default async function ClubsPage({
	params,
}: {
	params: Promise<{ location: string }>;
}) {
	const { location } = await params;
	const city = await getCity(location);
	const humanReadable = decodeURIComponent(location);

	return <AllClubsWrapper location={humanReadable} cachedCity={city} />;
}
