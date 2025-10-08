// src/app/city/[location]/_components/CityStatsSkeleton.tsx

export default function CityStatsSkeleton() {
	return (
		<section className="mb-20">
			{/* Header skeleton */}
			<div className="relative w-full flex justify-center mb-12">
				<div className="relative max-w-4xl mx-auto text-center mt-6 md:mt-2">
					<div className="rounded-3xl border border-cool-gray shadow-xl bg-background/95 backdrop-blur-xl px-10 py-8">
						<div className="w-16 h-16 mx-auto mb-4 bg-slate-200 rounded-2xl animate-pulse" />
						<div className="h-12 bg-slate-200 rounded-lg mb-4 animate-pulse max-w-md mx-auto" />
						<div className="h-6 bg-slate-200 rounded-lg mb-6 animate-pulse max-w-sm mx-auto" />
						<div className="flex items-center justify-center gap-3">
							<div className="h-8 w-20 bg-slate-200 rounded-full animate-pulse" />
							<div className="h-8 w-20 bg-slate-200 rounded-full animate-pulse" />
							<div className="h-8 w-20 bg-slate-200 rounded-full animate-pulse" />
						</div>
					</div>
				</div>
			</div>

			{/* Stats grid skeleton */}
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
				{[...Array(4)].map((_, idx) => (
					<div
						key={idx}
						className="rounded-2xl bg-slate-200 animate-pulse"
						style={{ minHeight: 158 }}
					/>
				))}
			</div>
		</section>
	);
}
