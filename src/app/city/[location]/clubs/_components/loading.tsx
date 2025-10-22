// src/app/city/[location]/games/loading.tsx

import { GameCardSkeleton } from '@/src/app/_components/GameCardSkeleton';
import { CityInfoSkeleton } from '../../games/_components/CityInfoSkeleton';

export default function Loading() {
	return (
		<section className="bg-white py-16 px-4">
			<div className="max-w-6xl mx-auto">
				{/* City info skeleton */}
				<CityInfoSkeleton />

				{/* Games list skeletons */}
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
