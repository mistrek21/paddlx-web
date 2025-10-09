// /src/app/court/[slug]/_components/CourtDetailLoading.tsx

function CourtDetailLoading() {
	return (
		<div className="min-h-screen bg-light-blue-3">
			<div className="h-96 bg-cool-gray animate-pulse" />
			<div className="container mx-auto px-4 py-12">
				<div className="bg-white rounded-2xl shadow-xl p-8">
					<div className="h-10 bg-cool-gray rounded w-3/4 mb-6 animate-pulse" />
					<div className="space-y-4">
						{[...Array(3)].map((_, i) => (
							<div key={i} className="h-6 bg-cool-gray rounded animate-pulse" />
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default CourtDetailLoading;
