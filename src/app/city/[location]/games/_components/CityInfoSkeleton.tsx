// src/app/city/[location]/games/_components/CityInfoSkeleton.tsx

export function CityInfoSkeleton() {
	return (
		<div className="flex flex-col md:flex-row gap-8 animate-pulse pt-4">
			<div className="w-full md:w-2/5 h-72 bg-gray-200 rounded-xl" />

			<div className="flex-1 space-y-4">
				<div className="h-8 w-2/3 bg-gray-200 rounded-md" />
				<div className="h-5 w-1/3 bg-gray-200 rounded-md" />
				<div className="space-y-2 pt-2">
					<div className="h-4 w-full bg-gray-200 rounded-md" />
					<div className="h-4 w-5/6 bg-gray-200 rounded-md" />
					<div className="h-4 w-2/3 bg-gray-200 rounded-md" />
				</div>

				{/* Badge placeholders */}
				<div className="flex flex-wrap gap-3 pt-4">
					<div className="h-6 w-24 bg-gray-200 rounded-full" />
					<div className="h-6 w-20 bg-gray-200 rounded-full" />
					<div className="h-6 w-28 bg-gray-200 rounded-full" />
				</div>

				{/* Secondary lines */}
				<div className="space-y-2 mt-6">
					<div className="h-4 w-1/2 bg-gray-200 rounded-md" />
					<div className="h-4 w-2/3 bg-gray-200 rounded-md" />
				</div>
			</div>
		</div>
	);
}
