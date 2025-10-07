// src/app/city/[location]/_components/CityPageLoading.tsx

function CityPageLoading() {
	return (
		<div className="min-h-screen bg-gray-50">
			<div className="h-64 bg-gradient-to-r from-teal-500 to-teal-600 animate-pulse" />
			<div className="container mx-auto px-4 py-12">
				<div className="h-10 bg-gray-200 rounded w-64 mb-12 animate-pulse" />
				<div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
					{[...Array(4)].map((_, i) => (
						<div
							key={i}
							className="bg-white rounded-xl shadow-lg p-6 h-32 animate-pulse"
						/>
					))}
				</div>
			</div>
		</div>
	);
}

export default CityPageLoading;
