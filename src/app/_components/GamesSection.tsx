// src/app/_components/GamesSection.tsx

'use client';

import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';
import { GameCard } from './GameCard';
import { GameCardSkeleton } from './GameCardSkeleton';

const IP_CONFIG =
	process.env.NEXT_PUBLIC_IP_CONFIG || 'https://paddle-api.vercel.app';

function getSessionImage(game: any): string {
	// 1. Club images (use the first club image if available)
	if (
		game.club_images &&
		Array.isArray(game.club_images) &&
		game.club_images.length > 0
	) {
		return game.club_images[0]; // Or any display logic you prefer
	}
	// 2. Group image
	if (game.group_image) {
		return game.group_image;
	}
	// 3. User avatar
	if (game.user_avatar) {
		return game.user_avatar;
	}
	// 4. Fallback/default
	return '/default-court.jpg';
}

// Static fallback games to show if none are found
const fallbackGames = [
	{
		id: 1,
		image: '/indoor-pickleball-court-with-green-lighting.jpg',
		date: 'TUE 10/7',
		title: 'Indoor Pickleball Night',
		location: 'Makati Sports Club',
	},
	{
		id: 2,
		image: '/outdoor-pickleball-court-at-night.jpg',
		date: 'TUE 10/7',
		title: 'Outdoor Night Match',
		location: 'Rizal Memorial',
	},
	{
		id: 3,
		image: '/people-playing-pickleball-on-green-court.jpg',
		date: 'TUE 10/7',
		title: 'Green Court Social',
		location: 'Green Court Community',
	},
	{
		id: 4,
		image: '/pickleball-game-in-progress-on-green-court.jpg',
		date: 'TUE 10/7',
		title: 'Game in Progress',
		location: 'Ayala Circuit',
	},
	{
		id: 5,
		image: '/indoor-pickleball-court-with-green-lighting.jpg',
		date: 'WED 10/8',
		title: 'Indoor Pickleball Night',
		location: 'Makati Sports Club',
	},
	{
		id: 6,
		image: '/outdoor-pickleball-court-at-night.jpg',
		date: 'WED 10/8',
		title: 'Outdoor Night Match',
		location: 'Rizal Memorial',
	},
	{
		id: 7,
		image: '/people-playing-pickleball-on-green-court.jpg',
		date: 'THU 10/9',
		title: 'Green Court Social',
		location: 'Green Court Community',
	},
	{
		id: 8,
		image: '/pickleball-game-in-progress-on-green-court.jpg',
		date: 'THU 10/9',
		title: 'Game in Progress',
		location: 'Ayala Circuit',
	},
];

export function GamesSection() {
	const scrollContainerRef = useRef<HTMLDivElement>(null);
	const [cityName, setCityName] = useState('Manila');
	const [isLoadingLocation, setIsLoadingLocation] = useState(false);
	const [games, setGames] = useState<any[]>([]);
	const [isLoadingGames, setIsLoadingGames] = useState(false);
	const [gamesCount, setGamesCount] = useState(fallbackGames.length); // start with fallback count

	useEffect(() => {
		const getUserLocation = () => {
			if (navigator.geolocation) {
				setIsLoadingLocation(true);
				navigator.geolocation.getCurrentPosition(
					async (position) => {
						const { latitude, longitude } = position.coords;

						try {
							// Fetch city name
							const geoResponse = await fetch(
								`https://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=1&appid=YOUR_API_KEY`
							);
							const geoData = await geoResponse.json();

							if (geoData && geoData.length > 0) {
								setCityName(geoData[0].name);
							}

							// Fetch games near location
							await fetchGamesNearby(latitude, longitude);
						} catch (error) {
							console.error('Error fetching location data:', error);
						} finally {
							setIsLoadingLocation(false);
						}
					},
					(error) => {
						let errorMessage = 'Unable to retrieve location';

						switch (error.code) {
							case error.PERMISSION_DENIED:
								errorMessage = 'User denied location permission';
								break;
							case error.POSITION_UNAVAILABLE:
								errorMessage = 'Location information unavailable';
								break;
							case error.TIMEOUT:
								errorMessage = 'Location request timed out';
								break;
							default:
								errorMessage = 'Unknown error occurred';
						}

						console.error('Geolocation error:', errorMessage, error.message);
						setIsLoadingLocation(false);
						fetchGamesNearby(14.5995, 120.9842);
					}
				);
			} else {
				// No geolocation support: use Manila
				fetchGamesNearby(14.5995, 120.9842);
			}
		};

		getUserLocation();
	}, []);

	const fetchGamesNearby = async (latitude: number, longitude: number) => {
		setIsLoadingGames(true);
		try {
			const response = await fetch(
				`${IP_CONFIG}/api/web/games/main?latitude=${latitude}&longitude=${longitude}&radius=100`
			);
			const data = await response.json();

			if (data.games && data.games.length > 0) {
				setGames(data.games);
				setGamesCount(data.count || data.games.length);
			} else {
				setGames([]); // Show fallback games!
				setGamesCount(fallbackGames.length);
			}
		} catch (error) {
			console.error('Error fetching games:', error);
			setGames([]); // fallback
			setGamesCount(fallbackGames.length);
		} finally {
			setIsLoadingGames(false);
		}
	};

	const scroll = (direction: 'left' | 'right') => {
		if (scrollContainerRef.current) {
			const scrollAmount = 400;
			const newScrollPosition =
				scrollContainerRef.current.scrollLeft +
				(direction === 'left' ? -scrollAmount : scrollAmount);

			scrollContainerRef.current.scrollTo({
				left: newScrollPosition,
				behavior: 'smooth',
			});
		}
	};

	return (
		<section className="bg-white py-16 px-4">
			<div className="max-w-7xl mx-auto">
				<div className="flex items-center justify-between mb-8">
					<h2 className="text-3xl md:text-4xl font-bold text-dark-slate">
						<span className="font-extrabold">
							{isLoadingGames ? '...' : gamesCount}
						</span>{' '}
						upcoming games near{' '}
						<span className="border-b-4 border-primary">
							{isLoadingLocation ? 'locating...' : cityName}
						</span>
					</h2>
					<div className="flex items-center gap-4">
						<div className="hidden md:flex items-center gap-2">
							<button
								onClick={() => scroll('left')}
								className="p-2 rounded-full bg-cool-gray hover:bg-teal-50 transition-colors cursor-pointer"
								aria-label="Scroll left"
							>
								<ChevronLeft className="w-5 h-5 text-dark-slate" />
							</button>
							<button
								onClick={() => scroll('right')}
								className="p-2 rounded-full bg-cool-gray hover:bg-teal-50 transition-colors cursor-pointer"
								aria-label="Scroll right"
							>
								<ChevronRight className="w-5 h-5 text-dark-slate" />
							</button>
						</div>
						<button className="flex items-center gap-2 text-primary hover:text-primary-dark transition-colors group">
							<span className="font-semibold">See all</span>
							<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
						</button>
					</div>
				</div>

				<div
					ref={scrollContainerRef}
					className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide pb-4"
					style={{
						scrollbarWidth: 'none',
						msOverflowStyle: 'none',
					}}
				>
					{isLoadingGames ? (
						<>
							{[...Array(4)].map((_, idx) => (
								<GameCardSkeleton key={idx} />
							))}
						</>
					) : games.length === 0 ? (
						fallbackGames.map((game) => (
							<div key={game.id} className="flex-none w-[280px] snap-start">
								<GameCard
									image={game.image}
									date={game.date}
									title={game.title}
									location={game.location}
								/>
							</div>
						))
					) : (
						games.map((game) => (
							<div key={game.id} className="flex-none w-[280px] snap-start">
								<GameCard
									image={getSessionImage(game)}
									date={new Date(game.date)
										.toLocaleDateString('en-US', {
											weekday: 'short',
											month: 'numeric',
											day: 'numeric',
										})
										.toUpperCase()}
									title={game.title}
									location={game.location}
								/>
							</div>
						))
					)}
				</div>
			</div>
		</section>
	);
}
