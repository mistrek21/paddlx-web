// src/app/_components/GameCard.tsx

import Image from 'next/image';

interface GameCardProps {
	image: string;
	date: string;
}

export function GameCard({ image, date }: GameCardProps) {
	return (
		<div className="group cursor-pointer">
			<div className="relative aspect-[3/2] rounded-lg overflow-hidden mb-3">
				<Image
					src={image || '/placeholder.svg'}
					alt="Pickleball game"
					fill
					className="object-cover group-hover:scale-105 transition-transform duration-300"
				/>
				<div className="absolute bottom-3 left-3 bg-white px-3 py-1 rounded-md">
					<span className="text-xs font-bold text-[#1a1f3a]">{date}</span>
				</div>
			</div>
		</div>
	);
}
