// src/app/profile/my-groups/_components/MyGroupsSkeleton.tsx

function MyGroupsSkeleton({ num = 3 }) {
	return (
		<div className="max-w-2xl mx-auto mt-10">
			<h1 className="text-2xl font-bold mb-6 animate-pulse">My Groups</h1>
			<ul className="space-y-4">
				{Array.from({ length: num }).map((_, i) => (
					<li
						key={i}
						className="bg-white shadow rounded-xl p-4 flex flex-col gap-2 animate-pulse"
					>
						<div className="flex items-center gap-4 mb-2">
							<div className="h-12 w-12 bg-gray-200 rounded-full" /> {/* Avatar */}
							<div className="h-5 w-1/2 bg-gray-200 rounded" /> {/* Title */}
						</div>
						<div className="h-4 w-3/4 bg-gray-100 rounded" /> {/* Location/Type */}
						<div className="h-4 w-2/3 bg-gray-100 rounded" />{' '}
						{/* Description/Secondary */}
					</li>
				))}
			</ul>
		</div>
	);
}

export default MyGroupsSkeleton;
