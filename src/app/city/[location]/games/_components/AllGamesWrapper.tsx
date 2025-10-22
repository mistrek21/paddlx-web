'use client';

import { useEffect, useState } from 'react';
import { GameCardSkeleton } from './GameCardSkeleton';
import { GameCard } from './GameCard';
import { CityInfo, PaddleSession } from '../types';
import CityCard from './CityCard';
import { CityInfoSkeleton } from './CityInfoSkeleton';

const API_BASE_URL = process.env.IP_CONFIG || 'https://paddle-api.vercel.app';

type Props = {
	location: string;
	cachedCity: CityInfo;
};

export default function AllGamesWrapper({ location, cachedCity }: Props) {
	const [cityInfo, setCityInfo] = useState<CityInfo>(cachedCity);
	const [games, setGames] = useState<PaddleSession[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [count, setCount] = useState(0);

	useEffect(() => {
		async function fetchGames() {
			setIsLoading(true);
			try {
				const res = await fetch(
					`${API_BASE_URL}/api/web/cities/${encodeURIComponent(location)}/games`,
					{ cache: 'no-store' }
				);

				const data = await res.json();
				setGames(data.games || []);
				setCount(data.count || 0);
				if (data.city && JSON.stringify(data.city) !== JSON.stringify(cityInfo)) {
					setCityInfo(data.city);
				}
			} catch (e) {
				console.error('Error fetching games', e);
			} finally {
				setIsLoading(false);
			}
		}

		fetchGames();
	}, [location]);

	if (isLoading) {
		return (
			<section className="bg-white py-16 px-4">
				<div className="max-w-6xl mx-auto">
					<CityInfoSkeleton />
					<h2 className="text-3xl md:text-4xl font-bold mb-8 mt-10 animate-pulse bg-gray-200 h-8 w-2/3 rounded-md" />
					<div className="flex flex-col gap-8">
						{[...Array(4)].map((_, i) => (
							<GameCardSkeleton key={i} />
						))}
					</div>
				</div>
			</section>
		);
	}

	return (
		<section className="bg-gradient-to-b from-gray-50 to-white py-12 px-4">
			<div className="max-w-7xl mx-auto">
				{/* City Info Hero Section */}
				<CityCard cityInfo={cityInfo} />

				{/* Games Section */}
				<div className="relative">
					<div className="flex items-baseline gap-3 mb-8">
						<h2 className="text-3xl md:text-4xl font-bold text-gray-900">
							Upcoming Games
						</h2>
						<div className="bg-teal-600 text-white px-4 py-1 rounded-full text-xl font-bold">
							{count}
						</div>
					</div>

					<div className="flex flex-col gap-8">
						{isLoading ? (
							[...Array(4)].map((_, i) => <GameCardSkeleton key={i} />)
						) : games.length === 0 ? (
							<div className="bg-white rounded-xl p-12 text-center shadow-lg border border-gray-100">
								<p className="text-xl text-gray-600">
									No games found in{' '}
									<span className="text-teal-600 font-semibold">
										{cityInfo?.name || 'this city'}
									</span>
								</p>
								<p className="text-gray-500 mt-2">Check back soon for new sessions!</p>
							</div>
						) : (
							games.map((game) => (
								<GameCard
									key={game.id}
									image={
										game.Paddle_Club?.images?.[0] ||
										game.group_image ||
										game.user_avatar ||
										'/default-court.jpg'
									}
									title={game.title}
									date={new Date(game.date)
										.toLocaleDateString('en-US', {
											weekday: 'short',
											month: 'short',
											day: 'numeric',
										})
										.toUpperCase()}
									location={game.location}
									formatCategory={game.formatCategory}
									suggestedLevel={game.suggestedLevel}
									isPrivate={game.isPrivate}
									duprRequired={game.duprRequired}
									numPlayers={game.numPlayers}
									Paddle_Club={game.Paddle_Club}
								/>
							))
						)}
					</div>
				</div>
			</div>
		</section>
	);
}
