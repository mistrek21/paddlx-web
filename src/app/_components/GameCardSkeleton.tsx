// src/app/_components/GameCardSkeleton.tsx

export function GameCardSkeleton() {
	return (
		<div className="flex-none w-[280px] snap-start animate-pulse">
			<div className="relative aspect-[3/2] rounded-lg overflow-hidden mb-3 bg-gray-200">
				<div className="absolute inset-0 bg-gray-300" />
				<div className="absolute bottom-3 left-3 bg-gray-100 px-8 py-2 rounded-md">
					<div className="w-16 h-4 bg-gray-200 rounded" />
				</div>
			</div>
			<div className="p-4">
				<div className="h-5 bg-gray-200 rounded mb-2 w-2/3" />
				<div className="h-4 bg-gray-100 rounded w-1/2" />
			</div>
		</div>
	);
}
