// src/app/profile/my-games/_components/MyGamesSkeleton.tsx

export function MyGamesSkeleton({ num = 3 }) {
	return (
		<div className="max-w-2xl mx-auto mt-10">
			<h1 className="text-2xl font-bold mb-6 animate-pulse">My Games</h1>
			<ul className="space-y-4">
				{Array.from({ length: num }).map((_, i) => (
					<li
						key={i}
						className="bg-white shadow rounded-xl p-4 flex flex-col gap-2 animate-pulse"
					>
						<div className="flex items-center justify-between mb-2">
							<div className="h-5 w-2/5 bg-gray-200 rounded" /> {/* Title */}
							<div className="h-5 w-16 bg-orange-200 rounded-full" />{' '}
							{/* Status badge */}
						</div>
						<div className="flex flex-wrap gap-3 mt-2">
							<div className="h-4 w-20 bg-gray-100 rounded" />
							<div className="h-4 w-20 bg-gray-100 rounded" />
							<div className="h-4 w-24 bg-gray-100 rounded" />
							<div className="h-4 w-16 bg-gray-100 rounded" />
						</div>
						<div className="mt-2 h-4 w-3/4 bg-gray-100 rounded" /> {/* Description */}
					</li>
				))}
			</ul>
		</div>
	);
}
