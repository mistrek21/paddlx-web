'use client';

// /src/app/court/[slug]/_components/CourtDetailLoading.tsx

function CourtDetailLoading() {
	return (
		<div className="min-h-screen bg-light-blue-3">
			{/* Hero Image Skeleton */}
			<div className="relative h-96 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse overflow-hidden">
				<div
					className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"
					style={{
						animation: 'shimmer 2s infinite',
						backgroundSize: '200% 100%',
					}}
				/>
			</div>

			{/* Content */}
			<div className="container mx-auto px-4 py-12">
				{/* Main Info Card - Full Width */}
				<div className="bg-white rounded-2xl shadow-xl p-8 mb-6">
					<div className="space-y-6">
						{/* Title */}
						<div className="h-10 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg w-3/4 animate-pulse" />

						{/* Subtitle/Address */}
						<div className="h-6 bg-gradient-to-r from-gray-200 to-gray-300 rounded w-1/2 animate-pulse" />

						{/* Description lines */}
						<div className="space-y-3 pt-4">
							<div className="h-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded animate-pulse" />
							<div className="h-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded animate-pulse" />
							<div className="h-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded w-5/6 animate-pulse" />
						</div>

						{/* Amenities/Tags */}
						<div className="flex flex-wrap gap-2 pt-4">
							{[...Array(5)].map((_, i) => (
								<div
									key={i}
									className="h-8 w-20 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full animate-pulse"
								/>
							))}
						</div>
					</div>
				</div>

				{/* Map Skeleton */}
				<div className="bg-white rounded-2xl shadow-xl p-6 mb-6">
					<div className="h-8 bg-gradient-to-r from-gray-200 to-gray-300 rounded w-1/4 mb-4 animate-pulse" />
					<div className="h-96 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded-xl animate-pulse" />
				</div>

				{/* Weather Skeleton */}
				<div className="bg-white rounded-2xl shadow-xl p-6 mb-6">
					<div className="h-8 bg-gradient-to-r from-gray-200 to-gray-300 rounded w-1/3 mb-4 animate-pulse" />
					<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
						{[...Array(4)].map((_, i) => (
							<div key={i} className="space-y-2">
								<div className="h-6 bg-gradient-to-r from-gray-200 to-gray-300 rounded animate-pulse" />
								<div className="h-12 bg-gradient-to-r from-gray-200 to-gray-300 rounded animate-pulse" />
							</div>
						))}
					</div>
				</div>

				{/* Two Column Layout for larger screens */}
				<div className="grid lg:grid-cols-2 gap-6">
					{/* Left Column */}
					<div className="space-y-6">
						{/* Sessions Card */}
						<div className="bg-white rounded-2xl shadow-xl p-6">
							<div className="h-8 bg-gradient-to-r from-gray-200 to-gray-300 rounded w-1/2 mb-4 animate-pulse" />
							<div className="space-y-4">
								{[...Array(3)].map((_, i) => (
									<div
										key={i}
										className="border border-gray-200 rounded-xl p-4 space-y-3"
									>
										<div className="h-6 bg-gradient-to-r from-gray-200 to-gray-300 rounded w-3/4 animate-pulse" />
										<div className="h-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded w-1/2 animate-pulse" />
										<div className="h-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded w-2/3 animate-pulse" />
									</div>
								))}
							</div>
						</div>

						{/* Articles Card */}
						<div className="bg-white rounded-2xl shadow-xl p-6">
							<div className="h-8 bg-gradient-to-r from-gray-200 to-gray-300 rounded w-1/2 mb-4 animate-pulse" />
							<div className="space-y-4">
								{[...Array(2)].map((_, i) => (
									<div key={i} className="flex gap-4">
										<div className="w-24 h-24 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg flex-shrink-0 animate-pulse" />
										<div className="flex-1 space-y-2">
											<div className="h-5 bg-gradient-to-r from-gray-200 to-gray-300 rounded w-full animate-pulse" />
											<div className="h-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded w-3/4 animate-pulse" />
											<div className="h-3 bg-gradient-to-r from-gray-200 to-gray-300 rounded w-1/2 animate-pulse" />
										</div>
									</div>
								))}
							</div>
						</div>
					</div>

					{/* Right Column */}
					<div className="space-y-6">
						{/* Groups Card */}
						<div className="bg-white rounded-2xl shadow-xl p-6">
							<div className="h-8 bg-gradient-to-r from-gray-200 to-gray-300 rounded w-1/2 mb-4 animate-pulse" />
							<div className="space-y-4">
								{[...Array(3)].map((_, i) => (
									<div key={i} className="flex items-center gap-3">
										<div className="w-12 h-12 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full flex-shrink-0 animate-pulse" />
										<div className="flex-1 space-y-2">
											<div className="h-5 bg-gradient-to-r from-gray-200 to-gray-300 rounded w-2/3 animate-pulse" />
											<div className="h-3 bg-gradient-to-r from-gray-200 to-gray-300 rounded w-1/2 animate-pulse" />
										</div>
									</div>
								))}
							</div>
						</div>

						{/* Reviews Card */}
						<div className="bg-white rounded-2xl shadow-xl p-6">
							<div className="h-8 bg-gradient-to-r from-gray-200 to-gray-300 rounded w-1/2 mb-4 animate-pulse" />
							<div className="space-y-4">
								{[...Array(2)].map((_, i) => (
									<div
										key={i}
										className="border-b border-gray-200 pb-4 last:border-0 space-y-3"
									>
										<div className="flex items-center gap-3">
											<div className="w-10 h-10 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full animate-pulse" />
											<div className="flex-1 space-y-2">
												<div className="h-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded w-1/3 animate-pulse" />
												<div className="h-3 bg-gradient-to-r from-gray-200 to-gray-300 rounded w-1/4 animate-pulse" />
											</div>
										</div>
										<div className="space-y-2">
											<div className="h-3 bg-gradient-to-r from-gray-200 to-gray-300 rounded animate-pulse" />
											<div className="h-3 bg-gradient-to-r from-gray-200 to-gray-300 rounded w-5/6 animate-pulse" />
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>

			<style jsx>{`
				@keyframes shimmer {
					0% {
						background-position: -200% 0;
					}
					100% {
						background-position: 200% 0;
					}
				}
				.animate-shimmer {
					animation: shimmer 2s infinite;
				}
			`}</style>
		</div>
	);
}

export default CourtDetailLoading;
