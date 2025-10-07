// src/app/_components/FeaturedCourtsSection.tsx

import { Building2, Grid3x3, Minus } from 'lucide-react';

const courts = [
	{
		name: 'Alpharetta North Park',
		image: '/outdoor-pickleball-courts-sunny.jpg',
		courts: 12,
		permLines: true,
		permNets: true,
	},
	{
		name: 'Chicken N Pickle - San Antonio',
		image: '/colorful-pickleball-venue-aerial.jpg',
		courts: 10,
		permLines: true,
		permNets: true,
	},
	{
		name: 'Lisa & Douglas Goldman Tennis Center',
		image: '/tennis-pickleball-courts-aerial.jpg',
		courts: 5,
		permLines: true,
		permNets: true,
	},
];

export function FeaturedCourtsSection() {
	return (
		<section className="bg-light-blue1/50 py-16">
			<div className="container mx-auto px-4">
				<h2 className="text-3xl md:text-4xl font-bold text-dark-slate mb-12">
					Featured Courts
				</h2>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
					{/* Court Cards */}
					{courts.map((court) => (
						<div
							key={court.name}
							className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer group"
						>
							<div className="relative h-48 overflow-hidden">
								<img
									src={court.image || '/placeholder.svg'}
									alt={court.name}
									className="w-full h-full object-cover transition-transform group-hover:scale-105"
								/>
							</div>
							<div className="p-4">
								<h3 className="font-bold text-dark-slate mb-4 text-lg">{court.name}</h3>
								<div className="space-y-2">
									<div className="flex items-center gap-2 text-sm text-slate-gray">
										<Building2 className="w-4 h-4 text-teal" />
										<span className="font-medium">{court.courts} Courts</span>
									</div>
									{court.permLines && (
										<div className="flex items-center gap-2 text-sm text-slate-gray">
											<Grid3x3 className="w-4 h-4 text-teal" />
											<span>Perm. Lines</span>
										</div>
									)}
									{court.permNets && (
										<div className="flex items-center gap-2 text-sm text-slate-gray">
											<Minus className="w-4 h-4 text-teal" />
											<span>Perm. Nets</span>
										</div>
									)}
								</div>
							</div>
						</div>
					))}

					{/* CTA Card */}
					<div className="bg-white rounded-lg p-8 shadow-sm flex flex-col items-center justify-center text-center">
						<div className="w-16 h-16 mb-4 text-teal">
							<svg
								viewBox="0 0 64 64"
								fill="none"
								className="w-full h-full"
								stroke="currentColor"
								strokeWidth="2"
							>
								<rect x="12" y="20" width="40" height="32" rx="2" />
								<rect x="20" y="28" width="24" height="16" />
								<line x1="32" y1="12" x2="32" y2="20" />
								<line x1="28" y1="16" x2="32" y2="12" />
								<line x1="36" y1="16" x2="32" y2="12" />
							</svg>
						</div>
						<h3 className="text-xl font-bold text-teal mb-3">
							List your local pickleball court for free!
						</h3>
						<p className="text-sm text-slate-gray mb-6 leading-relaxed">
							Attract more players to your pickleball court by listing it on paddlx
						</p>
						<button className="bg-coral hover:bg-coral/90 text-white font-semibold px-6 py-3 rounded-lg transition-colors">
							List Your Court
						</button>
					</div>
				</div>
			</div>

			{/* Dotted separator */}
			<div className="mt-16 border-t border-dashed border-light-gray" />
		</section>
	);
}
