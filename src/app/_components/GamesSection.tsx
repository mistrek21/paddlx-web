// src/app/_components/GamesSection.tsx

'use client';

import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

import { useRef } from 'react';
import { GameCard } from './GameCard';

export function GamesSection() {
	const scrollContainerRef = useRef<HTMLDivElement>(null);

	const games = [
		{
			id: 1,
			image: '/indoor-pickleball-court-with-green-lighting.jpg',
			date: 'TUE 10/7',
		},
		{
			id: 2,
			image: '/outdoor-pickleball-court-at-night.jpg',
			date: 'TUE 10/7',
		},
		{
			id: 3,
			image: '/people-playing-pickleball-on-green-court.jpg',
			date: 'TUE 10/7',
		},
		{
			id: 4,
			image: '/pickleball-game-in-progress-on-green-court.jpg',
			date: 'TUE 10/7',
		},
		{
			id: 5,
			image: '/indoor-pickleball-court-with-green-lighting.jpg',
			date: 'WED 10/8',
		},
		{
			id: 6,
			image: '/outdoor-pickleball-court-at-night.jpg',
			date: 'WED 10/8',
		},
		{
			id: 7,
			image: '/people-playing-pickleball-on-green-court.jpg',
			date: 'THU 10/9',
		},
		{
			id: 8,
			image: '/pickleball-game-in-progress-on-green-court.jpg',
			date: 'THU 10/9',
		},
	];

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
						<span className="font-extrabold">556</span> upcoming games near{' '}
						<span className="border-b-4 border-primary">Manila, NCR</span>
					</h2>
					<div className="flex items-center gap-4">
						<div className="hidden md:flex items-center gap-2">
							<button
								onClick={() => scroll('left')}
								className="p-2 rounded-full bg-cool-gray hover:bg-light-gray transition-colors"
								aria-label="Scroll left"
							>
								<ChevronLeft className="w-5 h-5 text-dark-slate" />
							</button>
							<button
								onClick={() => scroll('right')}
								className="p-2 rounded-full bg-cool-gray hover:bg-light-gray transition-colors"
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
					{games.map((game) => (
						<div key={game.id} className="flex-none w-[280px] snap-start">
							<GameCard image={game.image} date={game.date} />
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
