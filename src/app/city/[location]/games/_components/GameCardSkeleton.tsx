// src/app/city/[location]/games/_components/GameCardSkeleton.tsx

export function GameCardSkeleton() {
	return (
		<div className="flex flex-col md:flex-row bg-white rounded-xl shadow-md overflow-hidden animate-pulse">
			<div className="w-full md:w-[45%] h-48 bg-gray-200" />
			<div className="flex-1 p-6 space-y-4">
				<div className="h-5 w-1/3 bg-gray-200 rounded-md" />
				<div className="h-6 w-2/3 bg-gray-200 rounded-md" />
				<div className="h-4 w-1/2 bg-gray-200 rounded-md" />

				<div className="h-4 w-4/5 bg-gray-200 rounded-md mt-6" />
				<div className="h-4 w-2/3 bg-gray-200 rounded-md" />

				<div className="flex gap-2 mt-6">
					<div className="h-6 w-20 bg-gray-200 rounded-full" />
					<div className="h-6 w-24 bg-gray-200 rounded-full" />
				</div>
			</div>
		</div>
	);
}
