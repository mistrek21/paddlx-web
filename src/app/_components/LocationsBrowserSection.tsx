// src/app/_components/LocationsBrowserSection.tsx

'use client';

import { ChevronRight } from 'lucide-react';
import { useRef, useState } from 'react';

const tabs = ['CITIES', 'STATES', 'COUNTRIES', 'COURT TYPES', 'AMENITIES'];

const cityData = [
	{
		name: 'Houston',
		image: '/houston-skyline-dusk.jpg',
		locations: 94,
		courts: 413,
		games: 885,
	},
	{
		name: 'Toronto',
		image: '/toronto-skyline-dusk.jpg',
		locations: 82,
		courts: 260,
		games: 551,
	},
	{
		name: 'Chennai',
		image: '/chennai-skyline-dusk.jpg',
		locations: 76,
		courts: 144,
		games: null,
	},
	{
		name: 'Chicago',
		image: '/chicago-skyline-dusk.jpg',
		locations: 72,
		courts: 335,
		games: 204,
	},
	{
		name: 'United States',
		image: '/usa-skyline-dusk.jpg',
		locations: 68,
		courts: 280,
		games: 382,
	},
	{
		name: 'Seattle',
		image: '/seattle-skyline-dusk.jpg',
		locations: 63,
		courts: 251,
		games: 352,
	},
];

export function LocationsBrowserSection() {
	const [activeTab, setActiveTab] = useState('CITIES');
	const scrollContainerRef = useRef<HTMLDivElement>(null);

	const scroll = (direction: 'left' | 'right') => {
		if (scrollContainerRef.current) {
			const scrollAmount = 300;
			scrollContainerRef.current.scrollBy({
				left: direction === 'right' ? scrollAmount : -scrollAmount,
				behavior: 'smooth',
			});
		}
	};
	return (
		<section className="bg-gradient-to-b from-white to-light-blue1/30 py-16">
			<div className="container mx-auto px-4">
				<h2 className="text-3xl md:text-4xl font-bold text-dark-slate text-center mb-8">
					Find courts, games, and lessons wherever you go
				</h2>

				{/* Tabs */}
				<div className="flex justify-center gap-8 mb-12 border-b border-divider">
					{tabs.map((tab) => (
						<button
							key={tab}
							onClick={() => setActiveTab(tab)}
							className={`pb-3 text-sm font-semibold transition-colors relative ${
								activeTab === tab
									? 'text-dark-slate'
									: 'text-light-slate hover:text-slate-gray'
							}`}
						>
							{tab}
							{activeTab === tab && (
								<div className="absolute bottom-0 left-0 right-0 h-0.5 bg-teal" />
							)}
						</button>
					))}
				</div>

				{/* Cities Cards */}
				<div className="relative">
					<div
						ref={scrollContainerRef}
						className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory hide-scrollbar pb-4"
					>
						{cityData.map((city) => (
							<div
								key={city.name}
								className="flex-none w-[280px] snap-start group cursor-pointer"
							>
								<div className="relative h-[240px] rounded-lg overflow-hidden mb-4">
									<img
										src={city.image || '/placeholder.svg'}
										alt={city.name}
										className="w-full h-full object-cover transition-transform group-hover:scale-105"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
									<h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white">
										{city.name}
									</h3>
								</div>

								{/* Stats */}
								<div className="space-y-2 bg-white rounded-lg p-4 shadow-sm">
									<div className="flex justify-between items-center">
										<span className="text-sm text-slate-gray">Locations</span>
										<span className="text-sm font-semibold text-teal">
											{city.locations}
										</span>
									</div>
									<div className="flex justify-between items-center">
										<span className="text-sm text-slate-gray">Courts</span>
										<span className="text-sm font-semibold text-teal">{city.courts}</span>
									</div>
									{city.games !== null && (
										<div className="flex justify-between items-center">
											<span className="text-sm text-slate-gray">Games</span>
											<span className="text-sm font-semibold text-teal">{city.games}</span>
										</div>
									)}
								</div>
							</div>
						))}
					</div>

					{/* Scroll Button */}
					<button
						onClick={() => scroll('right')}
						className="absolute right-0 top-[100px] bg-teal text-white p-3 rounded-full shadow-lg hover:bg-teal/90 transition-colors z-10"
						aria-label="Scroll right"
					>
						<ChevronRight className="w-6 h-6" />
					</button>
				</div>
			</div>

			{/* Dotted separator */}
			<div className="mt-16 border-t border-dashed border-light-gray" />
		</section>
	);
}
