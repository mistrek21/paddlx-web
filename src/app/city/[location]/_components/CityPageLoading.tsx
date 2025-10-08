// src/app/city/[location]/_components/CityPageLoading.tsx

function CityPageLoading() {
	return (
		<div className="min-h-screen bg-gradient-to-b from-cool-gray via-slate-50 to-cool-gray">
			{/* Hero Section Skeleton */}
			<div className="relative h-[32rem] overflow-hidden bg-gradient-to-br from-gray-300 via-gray-200 to-gray-300 animate-pulse">
				<div className="absolute inset-0 bg-gradient-to-br from-gray-400/20 via-gray-300/20 to-gray-400/20" />

				{/* Hero Content */}
				<div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
					<div className="max-w-4xl">
						{/* Badges */}
						<div className="flex gap-3 mb-6">
							<div className="h-9 w-28 bg-white/30 rounded-full animate-pulse" />
							<div className="h-9 w-32 bg-white/30 rounded-full animate-pulse" />
							<div className="h-9 w-40 bg-white/30 rounded-full animate-pulse" />
						</div>

						{/* Title */}
						<div className="space-y-3 mb-4">
							<div className="h-16 bg-white/40 rounded-lg w-3/4 animate-pulse" />
							<div className="h-16 bg-white/40 rounded-lg w-1/2 animate-pulse" />
						</div>

						{/* Subtitle */}
						<div className="h-8 bg-white/30 rounded-lg w-1/3 mb-3 animate-pulse" />

						{/* Community Vibe */}
						<div className="h-6 bg-white/25 rounded-lg w-2/3 mb-6 animate-pulse" />

						{/* Quick Stats Bar */}
						<div className="flex flex-wrap gap-6 mt-8">
							{[...Array(4)].map((_, i) => (
								<div key={i} className="flex items-center gap-2">
									<div className="h-12 w-12 bg-white/30 rounded-lg animate-pulse" />
									<div className="space-y-2">
										<div className="h-7 w-16 bg-white/30 rounded animate-pulse" />
										<div className="h-4 w-20 bg-white/25 rounded animate-pulse" />
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>

			<div className="container mx-auto px-4 -mt-12 relative z-10">
				{/* Stats Cards Skeleton */}
				<div className="mb-12">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
						{[...Array(4)].map((_, i) => (
							<div
								key={i}
								className="bg-white rounded-2xl shadow-xl p-6 animate-pulse"
								style={{ animationDelay: `${i * 100}ms` }}
							>
								<div className="flex items-center justify-between mb-4">
									<div className="h-10 w-10 bg-gray-200 rounded-xl" />
									<div className="h-6 w-16 bg-gray-200 rounded-full" />
								</div>
								<div className="h-8 w-20 bg-gray-300 rounded mb-2" />
								<div className="h-4 w-24 bg-gray-200 rounded" />
							</div>
						))}
					</div>
				</div>

				{/* Main Content Grid */}
				<div className="grid lg:grid-cols-3 gap-8 mb-12">
					{/* Left Column */}
					<div className="lg:col-span-2 space-y-6">
						{/* About Section Skeleton */}
						<div className="bg-white rounded-2xl shadow-xl p-8 animate-pulse">
							<div className="flex items-center gap-3 mb-6">
								<div className="h-12 w-12 bg-gray-200 rounded-xl" />
								<div className="h-8 w-64 bg-gray-300 rounded-lg" />
							</div>
							<div className="space-y-3">
								<div className="h-4 bg-gray-200 rounded w-full" />
								<div className="h-4 bg-gray-200 rounded w-full" />
								<div className="h-4 bg-gray-200 rounded w-3/4" />
								<div className="h-4 bg-gray-200 rounded w-5/6" />
							</div>
						</div>

						{/* Playing Conditions Skeleton */}
						<div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-xl p-8 animate-pulse">
							<div className="flex items-center gap-3 mb-4">
								<div className="h-12 w-12 bg-blue-200 rounded-xl" />
								<div className="h-7 w-48 bg-blue-200 rounded-lg" />
							</div>
							<div className="space-y-3">
								<div className="h-4 bg-blue-100 rounded w-full" />
								<div className="h-4 bg-blue-100 rounded w-4/5" />
							</div>
						</div>

						{/* Nearby Attractions Skeleton */}
						<div className="bg-gradient-to-br from-white to-purple-50 rounded-2xl shadow-xl p-8 animate-pulse">
							<div className="flex items-center gap-3 mb-6">
								<div className="h-12 w-12 bg-purple-200 rounded-xl" />
								<div className="h-7 w-52 bg-purple-200 rounded-lg" />
							</div>
							<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
								{[...Array(6)].map((_, i) => (
									<div
										key={i}
										className="h-16 bg-white rounded-xl border border-purple-100"
										style={{ animationDelay: `${i * 50}ms` }}
									/>
								))}
							</div>
						</div>

						{/* Map Skeleton */}
						<div className="bg-white rounded-2xl shadow-xl overflow-hidden animate-pulse">
							<div className="p-6 bg-gradient-to-r from-gray-100 to-slate-100">
								<div className="flex items-center justify-between">
									<div className="flex items-center gap-3">
										<div className="h-12 w-12 bg-gray-300 rounded-xl" />
										<div className="space-y-2">
											<div className="h-6 w-24 bg-gray-300 rounded" />
											<div className="h-4 w-40 bg-gray-200 rounded" />
										</div>
									</div>
									<div className="h-10 w-32 bg-gray-300 rounded-lg" />
								</div>
							</div>
							<div className="h-80 bg-gray-200" />
						</div>

						{/* Geographic Info Skeleton */}
						<div className="bg-white rounded-2xl shadow-xl p-7 animate-pulse">
							<div className="flex items-center gap-3 mb-6">
								<div className="h-10 w-10 bg-gray-200 rounded-xl" />
								<div className="h-7 w-48 bg-gray-300 rounded-lg" />
							</div>
							<div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
								{[...Array(6)].map((_, i) => (
									<div key={i} className="h-20 bg-gray-100 rounded-xl" />
								))}
							</div>
						</div>
					</div>

					{/* Right Sidebar */}
					<div className="space-y-6">
						{/* City Gallery Skeleton */}
						<div className="bg-white rounded-2xl shadow-xl overflow-hidden animate-pulse">
							<div className="p-4 bg-gradient-to-r from-gray-100 to-slate-100">
								<div className="flex items-center gap-2">
									<div className="h-5 w-5 bg-gray-300 rounded" />
									<div className="h-5 w-28 bg-gray-300 rounded" />
								</div>
							</div>
							<div className="h-48 bg-gray-200" />
						</div>

						{/* Activity Stats Skeleton */}
						<div className="bg-gradient-to-br from-teal-50 to-white rounded-2xl shadow-xl p-6 animate-pulse">
							<div className="flex items-center gap-3 mb-6">
								<div className="h-10 w-10 bg-teal-200 rounded-xl" />
								<div className="h-6 w-32 bg-teal-200 rounded" />
							</div>
							<div className="space-y-3">
								{[...Array(4)].map((_, i) => (
									<div key={i} className="h-16 bg-white rounded-lg" />
								))}
							</div>
						</div>

						{/* Best Months Skeleton */}
						<div className="bg-white rounded-2xl shadow-xl p-7 animate-pulse">
							<div className="flex items-center gap-3 mb-5">
								<div className="h-12 w-12 bg-gray-200 rounded-xl" />
								<div className="h-6 w-44 bg-gray-300 rounded" />
							</div>
							<div className="flex flex-wrap gap-2">
								{[...Array(6)].map((_, i) => (
									<div key={i} className="h-9 w-20 bg-gray-200 rounded-full" />
								))}
							</div>
						</div>

						{/* Pricing Skeleton */}
						<div className="bg-gradient-to-br from-white to-green-50 rounded-2xl shadow-xl p-6 animate-pulse">
							<div className="flex items-center gap-3 mb-4">
								<div className="h-10 w-10 bg-green-200 rounded-xl" />
								<div className="h-6 w-36 bg-green-200 rounded" />
							</div>
							<div className="space-y-3">
								<div className="h-14 bg-white rounded-lg" />
								<div className="h-14 bg-white rounded-lg" />
							</div>
						</div>

						{/* Weather Skeleton */}
						<div className="bg-white rounded-2xl shadow-xl p-6 animate-pulse">
							<div className="flex items-center gap-3 mb-4">
								<div className="h-10 w-10 bg-gray-200 rounded-xl" />
								<div className="h-6 w-32 bg-gray-300 rounded" />
							</div>
							<div className="h-24 bg-gray-100 rounded-lg" />
						</div>
					</div>
				</div>

				{/* City Features Section Skeleton */}
				<section className="mb-16">
					<div className="text-center mb-12">
						<div className="inline-flex h-16 w-16 bg-gray-200 rounded-2xl mb-4 animate-pulse" />
						<div className="h-10 w-96 bg-gray-300 rounded-lg mx-auto mb-4 animate-pulse" />
						<div className="h-6 w-72 bg-gray-200 rounded mx-auto animate-pulse" />
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{[...Array(6)].map((_, i) => (
							<div
								key={i}
								className="bg-white rounded-2xl shadow-lg p-6 h-48 animate-pulse"
								style={{ animationDelay: `${i * 100}ms` }}
							>
								<div className="h-12 w-12 bg-gray-200 rounded-xl mb-4" />
								<div className="h-6 w-3/4 bg-gray-300 rounded mb-3" />
								<div className="space-y-2">
									<div className="h-4 bg-gray-200 rounded w-full" />
									<div className="h-4 bg-gray-200 rounded w-5/6" />
								</div>
							</div>
						))}
					</div>
				</section>

				{/* Courts Section Skeleton */}
				<div className="mb-12">
					<div className="flex items-center justify-between mb-8 pb-4 border-b-2 border-gray-200">
						<div>
							<div className="h-10 w-64 bg-gray-300 rounded-lg mb-2 animate-pulse" />
							<div className="h-5 w-48 bg-gray-200 rounded animate-pulse" />
						</div>
						<div className="h-12 w-40 bg-gray-300 rounded-xl animate-pulse" />
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{[...Array(6)].map((_, i) => (
							<div
								key={i}
								className="bg-white rounded-2xl shadow-lg overflow-hidden animate-pulse"
								style={{ animationDelay: `${i * 100}ms` }}
							>
								<div className="h-48 bg-gray-200" />
								<div className="p-4 space-y-3">
									<div className="h-6 w-3/4 bg-gray-300 rounded" />
									<div className="h-4 w-1/2 bg-gray-200 rounded" />
									<div className="flex gap-2">
										<div className="h-6 w-16 bg-gray-200 rounded-full" />
										<div className="h-6 w-20 bg-gray-200 rounded-full" />
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default CityPageLoading;
