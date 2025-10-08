// src/app/city/[location]/_components/CourtsSectionSkeleton.tsx

export default function CourtsSectionSkeleton() {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
			{[1, 2, 3, 4, 5, 6].map((i) => (
				<div
					key={i}
					className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden animate-pulse"
				>
					<div className="h-48 bg-slate-200" />
					<div className="p-6 space-y-4">
						<div className="h-6 bg-slate-200 rounded w-3/4" />
						<div className="h-4 bg-slate-200 rounded w-full" />
						<div className="h-4 bg-slate-200 rounded w-5/6" />
					</div>
				</div>
			))}
		</div>
	);
}
