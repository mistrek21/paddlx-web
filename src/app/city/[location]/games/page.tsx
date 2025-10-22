// src/app/city/[location]/games/page.tsx

import { Metadata } from 'next';
import AllGamesWrapper from './_components/AllGamesWrapper';

const API_BASE_URL = process.env.IP_CONFIG || 'https://paddle-api.vercel.app';
export const revalidate = 86400; // 24 hours cache

export async function generateMetadata({
	params,
}: {
	params: { location: string };
}): Promise<Metadata> {
	const location = decodeURIComponent(params.location);
	const cityRes = await fetch(
		`${API_BASE_URL}/api/web/cities/${encodeURIComponent(location)}`,
		{
			next: { revalidate: 86400 },
		}
	);
	const city = await cityRes.json();

	const title = city.metaTitle || `Pickleball in ${city.name} | Paddle`;
	const description =
		city.metaDescription ||
		`${city.name} pickleball games and clubs. Find upcoming sessions, connect with players, and join the local pickleball community.`;

	return {
		title,
		description,
		alternates: {
			canonical: `https://paddle.vercel.app/city/${encodeURIComponent(
				location
			)}/games`,
		},
		openGraph: {
			title,
			description,
			url: `https://paddle.vercel.app/city/${encodeURIComponent(location)}/games`,
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
			locale: 'en_US',
		},
		twitter: {
			card: 'summary_large_image',
			title,
			description,
			images: [city.coverImageUrl || city.imageUrl || '/default-court.jpg'],
		},
		robots: {
			index: true,
			follow: true,
			googleBot: {
				index: true,
				follow: true,
			},
		},
	};
}

export default async function GamesPage({
	params,
}: {
	params: { location: string };
}) {
	const location = decodeURIComponent(params.location);
	const cityRes = await fetch(
		`${API_BASE_URL}/api/web/cities/${encodeURIComponent(location)}`,
		{
			next: { revalidate: 86400 },
		}
	);
	const city = await cityRes.json();

	return <AllGamesWrapper location={location} cachedCity={city} />;
}
